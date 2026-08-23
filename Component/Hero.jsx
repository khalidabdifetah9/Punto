"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const titleText = "Punt".split("");

  const titleContainerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 1.4,
      },
    },
  };

  const letterVariants = {
    hidden: { x: -40, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
      <motion.section
        className="w-full bg-[#0a0a0a] text-white mt-16 sm:mt-24 md:mt-40 min-h-[calc(100vh-60px)] flex flex-col justify-between pt-8 sm:pt-10 md:pt-12 pb-0 overflow-hidden select-none"
        initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
        animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="grid grid-cols-1 md:grid-cols-12 w-full px-4 sm:px-8 md:px-0">
          <div className="md:col-start-7 md:col-span-6">
            <motion.p
              className="text-xl sm:text-2xl md:text-3xl font-poppins lg:text-[3rem] leading-normal md:leading-snug font-normal text-zinc-100 tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              Somewhere between an idea and a working website, you will usually
              find me. I speak fluent HTML, questionable CSS, and surprisingly
              decent human.
            </motion.p>
          </div>
        </div>

        <div className="w-full mt-10 md:mt-16 leading-none px-2 sm:px-4 md:px-0">
          <motion.h1
            className="text-[22vw] sm:text-[24vw] font-bold tracking-tighter text-[#e5e5e5] flex items-start -mb-2 sm:-mb-4 md:-mb-8 overflow-hidden"
            variants={titleContainerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Animated "Punt" letters */}
            <span className="inline-flex">
              {titleText.map((letter, index) => (
                <motion.span key={`punt-${index}`} variants={letterVariants}>
                  {letter}
                </motion.span>
              ))}
            </span>

            {/* Animated red "o" */}
            <motion.span
              className="text-[#e5192a] inline-block ml-2"
              variants={letterVariants}
            >
              o
            </motion.span>
          </motion.h1>
        </div>
      </motion.section>
  );
}
