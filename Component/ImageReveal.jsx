"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const ImageReveal = ({
  imageSrc = "/kalid.jpg",
  altText = "Showreel Reveal Image",
}) => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const mediaWidth = useTransform(
    scrollYProgress,
    [0, 0.7, 1],
    ["70px", "80vw", "90vw"]
  );
  const mediaHeight = useTransform(
    scrollYProgress,
    [0, 0.7, 1],
    ["35px", "65vh", "80vh"]
  );
  const borderRadius = useTransform(
    scrollYProgress,
    [0, 0.7, 1],
    ["8px", "16px", "0px"]
  );

  return (
    <div ref={containerRef} className="relative h-[300vh] bg-[#f8f7f3]">
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
        <div className="absolute top-12 z-10 text-center font-poppins font-bold uppercase text-6xl md:text-[10vw]  pointer-events-none">
          <h1>Let&rsquo;s Talk</h1>
        </div>

        <motion.div
          style={{
            width: mediaWidth,
            height: mediaHeight,
            borderRadius: borderRadius,
          }}
          className="relative z-0 flex shrink-0 items-center justify-center overflow-hidden bg-zinc-800 shadow-2xl"
        >
          <Image
            src={imageSrc}
            alt={altText}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 100vw"
            priority
            unoptimized
            className="object-cover object-center pointer-events-none"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ImageReveal;