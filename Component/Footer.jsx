"use client";

import React from "react";
import Link from "next/link";
import { navLinks } from "@/utils/navLinks";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="w-full bg-[#0a0a0a] text-[#8e8e93] pt-8 sm:pt-12 md:pt-16 pb-6 sm:pb-8 selection:bg-white selection:text-black">
      <div className="mx-auto w-full max-w-565 px-4 sm:px-6 md:px-8 lg:px-0">
        {/* Heading Section */}
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl capitalize pb-12 sm:pb-20 md:pb-30 font-poppins max-w-180 mx-auto sm:mx-0 md:ml-0 lg:pl-40 text-center sm:text-left">
          <h1>Need a website? Unfortunately for your competitors, I'm available</h1>
        </div>
        
        {/* Divider */}
        <div className="h-[0.6px] w-full my-16 sm:my-24 md:my-35 bg-[#e5192a]/50"/>
        
        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 md:gap-16 max-w-2xl mb-12 sm:mb-16 md:mb-24 mx-auto sm:mx-0 md:ml-40">
          {/* Sitemap Column */}
          <div className="flex flex-col gap-2 text-center sm:text-left">
            <h3 className="text-[#e5192a] text-base sm:text-2xl md:text-3xl lg:text-5xl uppercase font-medium mb-2">
              Sitemap
            </h3>

            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl hover:text-gray-300 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Social Column */}
          <div className="flex flex-col gap-2 text-center sm:text-left">
            <h3 className="text-[#e5192a] text-base sm:text-2xl md:text-3xl lg:text-5xl uppercase font-medium mb-2">
              Social
            </h3>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://www.linkedin.com/in/khalid-abdifetah-197630412/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl transition-colors"
            >
              Facebook
            </a>
          </div>
        </div>

        {/* Bottom Brand Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="relative flex items-start w-full justify-center md:justify-start">
            <span className="text-[15vw] sm:text-[18vw] md:text-[20vw] lg:text-[24vw] leading-none font-bold text-[#e5e5e5] tracking-tight">
              Punto
            </span>
          </div>        
        </div>
      </div>
    </footer>
  );
};

export default Footer;