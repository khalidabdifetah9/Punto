"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Bebas_Neue, Inter } from "next/font/google";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"], display: "swap" });
const inter = Inter({ subsets: ["latin"], display: "swap" });

const IMAGE_SRC = "/final_statue.avif";
const BRAND = "Valor";
const TITLE = "Stand Aside";

const EASE = [0.22, 1, 0.36, 1];

const BOTTOM_FADE = {
  WebkitMaskImage: "linear-gradient(to top, #000 45%, transparent)",
  maskImage: "linear-gradient(to top, #000 45%, transparent)",
};

export default function Showreel() {
  const ref = useRef(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? ["0%", "0%"] : ["-6%", "6%"]
  );

  const none = { hidden: {}, show: {} };
  const container = reduce
    ? none
    : {
        hidden: {},
        show: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } },
      };
  const zoom = reduce
    ? none
    : {
        hidden: { scale: 1.28 },
        show: { scale: 1.12, transition: { duration: 1.8, ease: EASE } },
      };
  const rise = reduce
    ? none
    : {
        hidden: { y: "105%" },
        show: { y: 0, transition: { duration: 1, ease: EASE } },
      };
  const fade = reduce
    ? none
    : {
        hidden: { opacity: 0, y: 12 },
        show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
      };

  return (
    <motion.section
      ref={ref}
      aria-label={TITLE}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className={`relative h-[100svh] w-full overflow-hidden bg-black text-white ${inter.className}`}
    >
      <motion.div style={{ y }} className="absolute inset-0">
        <motion.div variants={zoom} className="absolute inset-0">
          <Image
            src={IMAGE_SRC}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </motion.div>

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-black/45" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[#c22a2a]/25 mix-blend-multiply"
      />
      <div
        aria-hidden="true"
        style={BOTTOM_FADE}
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[50%] bg-gradient-to-t from-black/85 to-transparent backdrop-blur-md"
      />

      <div className="relative z-10 flex h-full flex-col justify-between px-5 pb-[4vh] pt-[6vh] sm:px-10 lg:px-[4.4vw]">
        <motion.p
          variants={fade}
          className={`${bebas.className} text-[1.6rem] uppercase leading-none tracking-[0.04em]`}
        >
          {BRAND}
        </motion.p>

        <h2
          aria-label={TITLE}
          className={`${bebas.className} flex text-[24vw] uppercase leading-[0.8] sm:text-[14vw] md:text-[7.6vw]`}
        >
          {TITLE.split("").map((letter, i) => (
            <span
              key={i}
              aria-hidden="true"
              className="block overflow-y-clip pt-[0.05em]"
            >
              <motion.span variants={rise} className="block">
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            </span>
          ))}
        </h2>
      </div>
    </motion.section>
  );
}