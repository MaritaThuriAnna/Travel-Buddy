import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-200 py-8">
      <div className="container sm:flex justify-between items-center m-auto">
        <h1 className="px-2">
          Travel by{" "}
          <a
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            whitehorse21
          </a>
        </h1>
        <ul className="flex flex-wrap">
          <li className="p-0 px-2">
            <a href="/">Home</a>
          </li>
          <li className="p-0 px-2">
            <a href="/Destinations">Destinations</a>
          </li>
          <li className="p-0 px-2">
            <a href="/Travel">Travel</a>
          </li>
          <li className="p-0 px-2">
            <a href="/Views">Views</a>
          </li>
          <li className="p-0 px-2">
            <a href="/Book">Book</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
