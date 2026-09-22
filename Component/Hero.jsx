"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const LETTERS = "VALOR".split("");
const SERVICES = [
  "Web Design",
  "Front End Development",
  "Back End Development",
  "Production",
  "Full Stack Engineering",
];
const PARAGRAPH =
  "Valor is a digital portfolio built around thoughtful design, creative development, and a genuine attention to detail. It brings together selected work, ideas, and experiences in one place, creating a clear picture of how design and technology can come together to build something meaningful.";

const STRIPS = 5; 
const COUNT_TIME = 1.0; 
const LIFT = 1.1; 
const REVEAL = 1.45; 
const EASE = [0.22, 1, 0.36, 1];
const CURTAIN_EASE = [0.76, 0, 0.24, 1];

export default function Hero() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const [curtainDone, setCurtainDone] = useState(false);

  const count = useMotionValue(0);
  const counter = useTransform(count, (v) =>
    String(Math.round(v)).padStart(3, "0"),
  );
  useEffect(() => {
    if (reduce) return;
    const controls = animate(count, 100, {
      duration: COUNT_TIME,
      ease: "easeInOut",
    });
    return () => controls.stop();
  }, [count, reduce]);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });
  const imgX = useTransform(sx, [-0.5, 0.5], reduce ? [0, 0] : [14, -14]);
  const imgY = useTransform(sy, [-0.5, 0.5], reduce ? [0, 0] : [10, -10]);
  const letterX = useTransform(sx, [-0.5, 0.5], reduce ? [0, 0] : [-8, 8]);

  const handleMove = (e) => {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scrollY = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? ["0%", "0%"] : ["0%", "12%"],
  );

  const none = { hidden: {}, show: {} };

  const zoom = reduce
    ? none
    : {
        hidden: { scale: 1.35 },
        show: {
          scale: 1.04,
          transition: { duration: 2.6, ease: EASE, delay: 1.0 },
        },
      };

  const logo = reduce
    ? none
    : {
        hidden: { opacity: 0, scale: 0, rotate: -120 },
        show: {
          opacity: 1,
          scale: 1,
          rotate: 0,
          transition: { duration: 1, ease: EASE, delay: REVEAL + 0.2 },
        },
      };

  const letter = reduce
    ? none
    : {
        hidden: { y: "110%" },
        show: (i) => ({
          y: 0,
          transition: {
            duration: 1.1,
            ease: EASE,
            delay: REVEAL + 0.05 + i * 0.09,
          },
        }),
      };

  const line = reduce
    ? none
    : {
        hidden: { scaleX: 0 },
        show: {
          scaleX: 1,
          transition: { duration: 1.2, ease: EASE, delay: REVEAL + 0.4 },
        },
      };

  const label = reduce
    ? none
    : {
        hidden: { opacity: 0, y: 24 },
        show: (i) => ({
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.9,
            ease: EASE,
            delay: REVEAL + 0.5 + i * 0.08,
          },
        }),
      };

  const para = reduce
    ? none
    : {
        hidden: { opacity: 0, y: 24 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 1, ease: EASE, delay: REVEAL + 1.0 },
        },
      };

  return (
    <motion.section
      ref={ref}
      onMouseMove={handleMove}
      initial="hidden"
      animate="show"
      className="relative flex min-h-[100svh] w-full flex-col overflow-hidden bg-[#d6d0c2]"
    >
      <h1 className="sr-only">Valor</h1>

      <motion.div style={{ y: scrollY }} className="absolute inset-0 z-0">
        <motion.div style={{ x: imgX, y: imgY }} className="absolute inset-0">
          <motion.div variants={zoom} className="absolute inset-0">
            <Image
              alt="Marble statue wearing a red blindfold"
              src="/hero_statue.avif"
              fill
              priority
              sizes="100vw"
              className="object-cover object-top"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        variants={logo}
        className="absolute right-5 top-5 z-20 sm:right-8 sm:top-8"
      >
        <Image
          src="/valor-icon.svg"
          alt="Valor logo"
          width={40}
          height={40}
          className="h-8 w-8 sm:h-10 sm:w-10"
        />
      </motion.div>

      <div className="pointer-events-none relative z-10 flex min-h-88 flex-1 items-center pl-2 sm:pl-4 md:absolute md:inset-0 md:min-h-0 md:pl-8">
        <motion.div
          aria-hidden="true"
          style={{ x: letterX }}
          className="flex select-none flex-col items-start text-[min(28vw,11svh)] leading-[0.78] md:text-[min(12.3vw,23svh)]"
        >
          {LETTERS.map((char, i) => (
            <span
              key={i}
              className="my-[-0.06em] block overflow-y-clip py-[0.06em]"
            >
              <motion.span
                custom={i}
                variants={letter}
                style={{ fontStretch: "condensed" }}
                className={`${bebas.className} block font-extrabold uppercase tracking-tighter text-[#c22a2a]`}
              >
                {char}
              </motion.span>
            </span>
          ))}
        </motion.div>
      </div>

    
      <div className="relative z-10 bg-[#d6d0c2]/90 px-5 pb-6 pt-5 backdrop-blur-md md:contents">
        <span
          aria-hidden="true"
          className="mb-4 block h-[3px] w-10 bg-[#c22a2a] md:hidden"
        />

        <div className="md:absolute md:inset-x-0 md:top-[54%] md:px-12">
          <div className="mx-auto max-w-7xl">
            <motion.div
              variants={line}
              className="mb-4 hidden h-px origin-left bg-white/50 md:block"
            />
            <ul className="flex flex-wrap items-center gap-x-4 gap-y-1 md:justify-between md:gap-y-2">
              {SERVICES.map((service, i) => (
                <motion.li
                  key={service}
                  custom={i}
                  variants={label}
                  className={`${bebas.className} whitespace-nowrap text-base uppercase tracking-[0.1em] text-[#3a352d] md:text-2xl md:text-white/90 md:[text-shadow:0_1px_10px_rgba(0,0,0,0.35)]`}
                >
                  {service}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        <motion.p
          variants={para}
          className={`${bebas.className} mt-4 text-[0.85rem] uppercase leading-snug tracking-wide text-[#3a352d] sm:text-base md:absolute md:bottom-[17%] md:right-10 md:mt-0 md:max-w-lg md:text-lg md:leading-relaxed`}
        >
          {PARAGRAPH}
        </motion.p>
      </div>

      {!reduce && !curtainDone && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-50"
        >
          <div className="flex h-full">
            {Array.from({ length: STRIPS }).map((_, i) => (
              <motion.div
                key={i}
                className="h-full flex-1 bg-[#c22a2a]"
                initial={{ y: "0%" }}
                animate={{ y: "-101%" }}
                transition={{
                  duration: 0.9,
                  ease: CURTAIN_EASE,
                  delay: LIFT + i * 0.07,
                }}
                onAnimationComplete={
                  i === STRIPS - 1 ? () => setCurtainDone(true) : undefined
                }
              />
            ))}
          </div>

          <motion.div
            className={`${bebas.className} absolute bottom-4 left-5 leading-none text-[#d6d0c2] md:bottom-6 md:left-8`}
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.3, delay: COUNT_TIME }}
          >
            <motion.span className="text-[24vw] md:text-[9vw]">
              {counter}
            </motion.span>
          </motion.div>
        </div>
      )}
    </motion.section>
  );
}
