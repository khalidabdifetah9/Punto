"use client";

import { useState } from "react";
import Link from "next/link";
import { navLinks } from "@/utils/navLinks";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full text-white px-6 sm:px-12 md:px-18 left-0 py-6 sm:py-8 md:py-12 flex justify-between items-center fixed z-50">
      <Link 
        href="/" 
        className="text-3xl sm:text-4xl md:text-5xl text-zinc-400 font-bold tracking-tight"
      >
        Punt<span className="text-[#e5192a]">o</span>
      </Link>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-col justify-center items-end gap-1.5 sm:gap-2 group p-2 focus:outline-none cursor-pointer z-50"
        aria-label="Toggle Menu"
      >
        <span
          className={`h-1 bg-[#e5192a] transition-all duration-300 ${
            isOpen 
              ? "w-8 sm:w-10 md:w-20 rotate-45 translate-y-1 sm:translate-y-1.25" 
              : "w-12 sm:w-16 md:w-20"
          }`}
        />
        <span
          className={`h-1 bg-[#e5192a] transition-all duration-300 ${
            isOpen
              ? "w-8 sm:w-10 md:w-12 -rotate-45 -translate-y-1 sm:-translate-y-1.25"
              : "w-12 sm:w-16 md:w-20 group-hover:w-8 sm:group-hover:w-10"
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full right-4 sm:right-8 mt-2 w-[calc(100vw-2rem)] sm:w-96 md:w-[500px] justify-center bg-[#141414]/95 border border-zinc-800 px-6 sm:px-8 py-8 sm:py-12 flex flex-col gap-6 sm:gap-8 text-xl sm:text-2xl rounded-lg shadow-2xl backdrop-blur-md">
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