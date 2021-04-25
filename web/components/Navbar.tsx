import React from "react";
import Link from "next/link";
import { Button } from "./Button";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <nav
      className="sticky z-50 top-0 bg-black bg-opacity-75 flex items-center justify-between max-w-[88rem] mx-auto p-6"
      style={{
        opacity: 5,
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
    >
      <img src="/static/logo.png" className="w-auto h-10" />
      <ul className="flex items-center space-x-9">
        <li>
          <Link href="/">
            <a className="text-white bg-darker-gray px-4 py-2 rounded-lg">
              Feed
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className="text-light-gray">Publishers</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className="text-light-gray">Apply to Publish</a>
          </Link>
        </li>
        <li>
          <Link href="/pish">
            <a className="text-light-gray">Pish</a>
          </Link>
        </li>
      </ul>
      <div className="flex items-center flex-shrink-0">
        <div className="flex items-center space-x-4 mr-6">
          <a href="#">
            <img src="/static/github.svg" className="w-6 h-6" />
          </a>
          <a href="#">
            <img src="/static/twitter.svg" className="w-6 h-6" />
          </a>
          <button>
            <img src="/static/notification.svg" className="w-6 h-6" />
          </button>
        </div>
        <div className="space-x-2">
          <Button color="secondary">Login</Button>
          <Button>Register</Button>
        </div>
      </div>
    </nav>
  );
};
