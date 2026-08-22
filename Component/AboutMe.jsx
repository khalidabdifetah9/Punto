"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Word = ({ children, progress, range, isRed = false }) => {
  const opacity = useTransform(progress, range, [0.25, 1]);
  const color = useTransform(progress, range, [
    "rgb(161 161 170)",
    isRed ? "#e5192a" : "#f8f7f3",
  ]);

  return (
    <motion.span
      style={{ opacity, color }}
      className={`inline-block mr-[0.22em] transition-colors duration-75 ${
        isRed ? "font-semibold" : ""
      }`}
    >
      {children}
    </motion.span>
  );
};

const ParagraphReveal = ({ textBlocks, containerRef }) => {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.2"],
  });

  const allWords = textBlocks.flatMap((block) => block.words);
  const totalWords = allWords.length;
  let wordIndexCounter = 0;

  return (
    <div className="text-xl sm:text-2xl md:text-3xl mt-8 sm:mt-12 leading-relaxed font-poppins capitalize">
      {textBlocks.map((block, blockIdx) => (
        <p key={blockIdx} className="mb-4 sm:mb-6">
          {block.words.map((wordObj, wordIdx) => {
            const start = wordIndexCounter / totalWords;
            const end = (wordIndexCounter + 1) / totalWords;
            wordIndexCounter++;

            return (
              <Word
                key={wordIdx}
                progress={scrollYProgress}
                range={[start, end]}
                isRed={wordObj.isRed}
              >
                {wordObj.text}
              </Word>
            );
          })}
        </p>
      ))}
    </div>
  );
};

const AboutMe = () => {
  const sectionRef = useRef(null);

  const textBlocks = [
    {
      words: [
        { text: "I" },
        { text: "am" },
        { text: "the" },
        { text: "grandson" },
        { text: "of" },
        { text: "Elon" },
        { text: "Musk..." },
      ],
    },
    {
      words: [
        { text: "Just" },
        { text: "kidding." },
        { text: "I" },
        { text: "wish" },
        { text: "tho." },
      ],
    },
    {
      words: [
        { text: "My" },
        { text: "name" },
        { text: "is" },
        { text: "Kalid", isRed: true },
        { text: "Abdifetah,", isRed: true },
        { text: "the" },
        { text: "person" },
        { text: "behind" },
        { text: "Punto", isRed: true },
        { text: "which" },
        { text: "is" },
        { text: "the" },
        { text: "name" },
        { text: "behind" },
        { text: "all" },
        { text: "this" },
        { text: "madness." },
        { text: "I" },
        { text: "have" },
        { text: "a" },
        { text: "Bachelor's" },
        { text: "degree" },
        { text: "in" },
        { text: "Computer" },
        { text: "Science," },
        { text: "and" },
        { text: "somewhere" },
        { text: "along" },
        { text: "the" },
        { text: "way," },
        { text: "I" },
        { text: "became" },
        { text: "obsessed" },
        { text: "with" },
        { text: "playing" },
        { text: "around" },
        { text: "with" },
        { text: "websites." },
      ],
    },
    {
      words: [
        { text: "I" },
        { text: "started" },
        { text: "with" },
        { text: "frontend" },
        { text: "development" },
        { text: "and," },
        { text: "toward" },
        { text: "the" },
        { text: "end" },
        { text: "of" },
        { text: "2025," },
        { text: "decided" },
        { text: "that" },
        { text: "knowing" },
        { text: "only" },
        { text: "what" },
        { text: "happens" },
        { text: "on" },
        { text: "the" },
        { text: "screen" },
        { text: "wasn't" },
        { text: "enough." },
        { text: "So" },
        { text: "I" },
        { text: "started" },
        { text: "digging" },
        { text: "into" },
        { text: "backend" },
        { text: "development" },
        { text: "too." },
        { text: "Now" },
        { text: "I" },
        { text: "enjoy" },
        { text: "building" },
        { text: "things" },
        { text: "from" },
        { text: "both" },
        { text: "sides" },
        { text: "of" },
        { text: "the" },
        { text: "curtain." },
      ],
    },
    {
      words: [
        { text: "I" },
        { text: "like" },
        { text: "websites" },
        { text: "that" },
        { text: "feel" },
        { text: "natural," },
        { text: "thoughtful," },
        { text: "and" },
        { text: "human" },
        { text: "not" },
        { text: "like" },
        { text: "they" },
        { text: "were" },
        { text: "assembled" },
        { text: "from" },
        { text: "the" },
        { text: "same" },
        { text: "\"modern" },
        { text: "developer" },
        { text: "portfolio\"" },
        { text: "template" },
        { text: "everyone" },
        { text: "else" },
        { text: "is" },
        { text: "using." },
      ],
    },
    {
      words: [
        { text: "So" },
        { text: "if" },
        { text: "you" },
        { text: "want" },
        { text: "a" },
        { text: "website" },
        { text: "with" },
        { text: "some" },
        { text: "personality," },
        { text: "a" },
        { text: "little" },
        { text: "character," },
        { text: "and" },
        { text: "a" },
        { text: "price" },
        { text: "that" },
        { text: "might" },
        { text: "only" },
        { text: "be" },
        { text: "enough" },
        { text: "to" },
        { text: "buy" },
        { text: "me" },
        { text: "lunch" },
        { text: "and" },
        { text: "a" },
        { text: "one" },
        { text: "way" },
        { text: "ticket" },
        { text: "to" },
        { text: "the" },
        { text: "moon..." },
      ],
    },
    {
      words: [
        { text: "You" },
        { text: "found" },
        { text: "your" },
        { text: "guy." },
        { text: "Don't" },
        { text: "be" },
        { text: "shy." },
        { text: "Hit" },
        { text: "me" },
        { text: "up." },
      ],
    },
  ];

  return (
    <section 
      ref={sectionRef} 
      className="font-poppins px-6 sm:px-12 md:ml-20 lg:ml-30 max-w-7xl min-h-screen pt-20 sm:pt-28 md:pt-36 pb-24 sm:pb-36"
    >
      <h2 className="text-5xl sm:text-7xl lg:text-8xl text-zinc-400 relative font-bold uppercase tracking-tight">
        About
        <span className="absolute text-[#e5192a] -top-8 sm:-top-14 md:-top-17 left-32 sm:left-48 md:left-56 lg:left-64">
          ME
        </span>
      </h2>

      <ParagraphReveal textBlocks={textBlocks} containerRef={sectionRef} />
      <br />
      <br />
      <br />
    </section>
  );
};

export default AboutMe;