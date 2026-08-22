"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function MyImage({ src, alt = "Full screen image display" }) {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rawScale = useTransform(scrollYProgress, [0, 0.4], [1.25, 1]);

  const scale = useSpring(rawScale, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div ref={containerRef} className="relative h-[200vh] w-full">
      <div className="sticky top-0 h-screen w-full overflow-hidden z-0 flex items-center justify-center">
        <motion.div
          style={{ scale }}
          className="relative w-full h-full will-change-transform"
        >
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>
    </div>
  );
}