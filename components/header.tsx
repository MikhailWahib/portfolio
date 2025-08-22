"use client";

import { useState } from "react";

import { BiMenuAltRight } from "react-icons/bi";

import LinkBtn from "./link-btn";

const links = [
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 w-full h-[70px] flex justify-between items-center p-4 md:py-4 md:px-20 bg-background z-50">
      <div>
        <a href="/#" className="text-2xl font-bold">
          <span className="text-primary">M</span>ikhail{" "}
          <span className="text-primary">W</span>ahib
        </a>
      </div>
      <nav
        className={`flex flex-col md:flex-row justify-center items-center absolute md:relative top-16 md:top-0 left-0 w-full md:w-fit overflow-hidden bg-background md:bg-transparent transition-all ${
          open ? "max-h-screen" : "max-h-0"
        } md:max-h-full z-40`}
      >
        <ul className="flex flex-col md:flex-row items-center md:items-start py-8 px-4 md:py-0 md:px-0 gap-4">
          {links.map((link) => (
            <li key={link.title}>
              <a
                href={link.href}
                className="hover:text-primary hover:underline"
                onClick={() => setOpen(false)}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
        <LinkBtn
          title="Resume"
          href="/resume"
          padding="py-1 px-3"
          className="ml-3 mb-5 md:mb-0"
        />
      </nav>
      <button
        className="md:hidden text-primary text-2xl"
        onClick={() => setOpen(!open)}
        aria-label="Menu"
      >
        {!open ? <BiMenuAltRight size={30} /> : <span>X</span>}
      </button>
    </header>
  );
};

export default Header;
