"use client";

import React from "react";
import { motion } from "framer-motion";
import { skillsData } from "@/utils/stills";

const EASE = [0.22, 1, 0.36, 1];

const wordVariant = {
  hidden: { y: "110%" },
  show: {
    y: 0,
    transition: { duration: 1, ease: EASE }, // slower per-word reveal (was 0.7)
  },
};

function AnimatedWords({ text, className = "", staggerDelay = 0.06, delayChildren = 0.15 }) {
  const words = text.split(" ");

  return (
    <motion.span
      className={className}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: staggerDelay, // slower stagger between words (was 0.04)
            delayChildren, // small pause before the first word starts
          },
        },
      }}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden pb-1 align-bottom">
          <motion.span className="inline-block" variants={wordVariant}>
            {word}
            {i !== words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

const Skills = () => {
  return (
    <section className="bg-black font-poppins text-white min-h-screen px-6 py-30 md:px-16 lg:px-24">
      <div className="max-w-500 mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">

        <div className="md:col-span-4 lg:col-span-5">
          <motion.span
            className="text-zinc-400 text-xl uppercase font-bold md:text-8xl block"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <AnimatedWords text="My skills" />
          </motion.span>
        </div>

        <div className="md:col-span-6 lg:col-span-5 space-y-12">
          {skillsData.map((skill, index) => (
            <div key={index} className="space-y-3">
              <motion.h3
                className="text-xl md:text-5xl font-medium text-[#e5192a] tracking-tight"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
              >
                <AnimatedWords text={skill.title} />
              </motion.h3>
              <motion.p
                className="text-zinc-400 text-base md:text-2xl leading-relaxed font-normal"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
              >
                <AnimatedWords text={skill.description} staggerDelay={0.03} delayChildren={0.2} />
              </motion.p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;