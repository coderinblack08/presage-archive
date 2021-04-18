import axios from "axios";
import cheerio from "cheerio";
import cors from "cors";
import cron from "node-cron";
import "dotenv/config";
import express from "express";
import { defaultPublishers } from "./lib/defaultPublishers";
import { parser } from "./lib/parser";
import { rss } from "./lib/rss";
import { supabase } from "./lib/supabase";

const main = async () => {
  console.time("main");
  console.log("⛽️ Request received, scrapping articles");
  await supabase.from("publishers").upsert(defaultPublishers);

  for (const x of Object.keys(rss)) {
    const feeds = await parser.parseURL(rss[x].top);
    for (const feed of feeds.items) {
      if (feed.guid!.startsWith("https://www.cnn.com/collections")) {
        continue;
      }

      const { data: alreadyExists } = await supabase
        .from("articles")
        .select("*", { count: "exact" })
        .filter("title", "eq", feed.title);

      if (alreadyExists && alreadyExists.length === 0) {
        const res = await axios.get(feed.guid!, {
          withCredentials: true,
          headers: { "X-Requested-With": "XMLHttpRequest" },
          responseType: "text",
        });

        const $ = cheerio.load(res.data);
        const image = $('meta[property="og:image"]').attr("content");

        const data = {
          category: ["top"],
          publisher: x,
          title: feed.title,
          description: feed.contentSnippet,
          date: feed.pubDate || feed.isoDate,
          url: feed.guid || undefined,
          image,
        };

        await supabase.from("articles").upsert([data]);
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

if (process.env.NODE_ENV !== "production") {
  cron.schedule("*/10 * * * *", () => main());
}