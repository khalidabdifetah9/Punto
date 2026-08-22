"use client";

import { useState } from "react";
import Link from "next/link";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "News", href: "#news" },
    { name: "Start a project", href: "#contact" },
  ];

  return (
    <nav className="w-full bg-transparen text-white px-10 left-0 py-12 flex justify-between items-center fixed z-50">
      <Link href="/" className="text-5xl font-bold tracking-tight">
        Punt<span className="text-[#e5192a]">o</span>
      </Link>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-col justify-center items-end gap-2 group p-2 focus:outline-none cursor-pointer"
        aria-label="Toggle Menu"
      >
        <span
          className={`h-1 bg-[#e5192a] transition-all duration-300 ${
            isOpen ? "w-12 rotate-45 translate-y-1.25" : "w-23"
          }`}
        />
        <span
          className={`h-1 bg-[#e5192a] transition-all duration-300 ${
            isOpen
              ? "w-8 -rotate-45 -translate-y-1.25"
              : "w-23 group-hover:w-10"
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full right-8 mt-2 w-150 justify-center  h-100 bg-[#141414]/90 border border-zinc-800  px-6 py-15  flex flex-col gap-10 text-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="hover:text-zinc-400 font-poppins transition-colors py-2 border-b border-zinc-800/50 last:border-none"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
