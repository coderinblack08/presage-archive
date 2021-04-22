import axios from "axios";
import cheerio from "cheerio";
import cors from "cors";
import "dotenv/config";
import express from "express";
import cron from "node-cron";
import { defaultPublishers } from "./lib/defaultPublishers";
import { parser } from "./lib/parser";
import { rss } from "./lib/rss";
import { supabase } from "./lib/supabase";

const getCategories = (
  source: string,
  feed: any,
  $: cheerio.Root | undefined
): string[] => {
  switch (source) {
    case "Fox News":
      if ($) {
        const tags = $('meta[name="classification-tags"]').attr("content");
        return tags ? tags.split(",") : [];
      }
      return [];

    case "ABC":
      return feed.categories;

    default:
      return [];
  }
};

const main = async () => {
  console.time("main");
  console.log("⛽️ Request received, scrapping articles");
  await supabase.from("publishers").upsert(defaultPublishers);

  for (const x of Object.keys(rss)) {
    const feeds = await parser.parseURL(rss[x].top);
    let i = 0;
    for (const feed of feeds.items) {
      if (feed.guid!.startsWith("https://www.cnn.com/collections")) {
        continue;
      }

      const { data: alreadyExists } = await supabase
        .from("articles")
        .select("*", { count: "exact" })
        .filter("title", "eq", feed.title);

      if (alreadyExists && alreadyExists.length === 0) {
        let image: string = "";
        let $;

        if (x !== "ABC") {
          const res = await axios.get(feed.guid!, {
            withCredentials: true,
            headers: { "X-Requested-With": "XMLHttpRequest" },
            responseType: "text",
          });

          $ = cheerio.load(res.data);
          image = $('meta[property="og:image"]').attr("content") || "";
        }

        if (x === "ABC") {
          const rawRss = await axios.get(rss[x].top);
          $ = cheerio.load(rawRss.data);
          const items = $("item");
          image = (items.children()[i] as any).attribs.url;
        }

        const data = {
          category: getCategories(x, feed, $),
          section: "top",
          publisher: x,
          title: feed.title,
          description: feed.contentSnippet,
          date: feed.pubDate || feed.isoDate,
          url: feed.guid || undefined,
          priority: (feeds.items.length - i) / feeds.items.length,
          image,
        };

        await supabase.from("articles").upsert([data]);
        i++;
      }
    }
  }

  console.log("✨ Success, articles saved");
  console.timeEnd("main");
};

const app = express();
app.use(cors({ origin: "*" }));

app.post("/webhook", async (_, res, next) => {
  try {
    await main();
    res.status(200).send();
  } catch (error) {
    next(new Error(error));
  }
});

app.listen(4000, () =>
  console.log("🚀🌙 Listening on port http://localhost:4000")
);

main();
if (process.env.NODE_ENV !== "production") {
  cron.schedule("*/10 * * * *", () => main());
}
