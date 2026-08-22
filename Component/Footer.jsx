"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="w-full bg-[#0a0a0a] text-[#8e8e93]   pt-16 pb-8 selection:bg-white selection:text-black">
      <div className="mx-auto w-full max-w-565 ">
        <div className="text-6xl capitalize pb-30 font-poppins max-w-180 pl-40">
            <h1>Need a website? Unfortunately for your competitors, I’m available</h1>
        </div>
          <div className="h-[0.6px] w-full my-35 bg-[#e5192a]/50"/>
        <div className="grid grid-cols-2 md:grid-cols-2 ml-40 font-poppins gap-8 md:gap-16 max-w-2xl mb-16 md:mb-24">
          <div className="flex flex-col gap-2">
            <h3 className="text-[#e5192a] text-base uppercase md:text-5xl font-medium mb-2">
              Sitemap
            </h3>
            <Link
              href="/"
              className="text-white text-4xl font-medium hover:text-gray-300 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/work"
              className="hover:text-white text-4xl transition-colors"
            >
              Work
            </Link>
            <Link
              href="/about"
              className="hover:text-white text-4xl transition-colors"
            >
              About
            </Link>
            <Link
              href="/news"
              className="hover:text-white text-4xl transition-colors"
            >
              News
            </Link>
            <Link
              href="/contact"
              className="hover:text-white text-4xl transition-colors"
            >
              Contact
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-[#e5192a] uppercase text-base md:text-5xl font-medium mb-2">
              Social
            </h3>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white text-4xl transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white text-4xl transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white text-4xl transition-colors"
            >
              Facebook
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="relative flex items-start">
            <span className="text-[20vw] md:text-[24vw] leading-none font-bold text-[#e5e5e5] tracking-tight">
              Punto
            </span>
          </div>        
        </div>
      </div>
    </footer>
  );
};

export default Footer;