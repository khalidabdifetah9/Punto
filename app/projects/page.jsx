"use client";

import React from "react";
import Image from "next/image";
import { PROJECTS } from "@/utils/projects";
import Link from "next/link";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
};

const GlitchCard = ({ project }) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
      className="flex flex-col space-y-1 mb-8 sm:mb-12 md:mb-20"
    >
      <div className="w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-auto md:h-110 rounded-md relative overflow-hidden group bg-black cursor-pointer">
        {/* 1. Main Base Image */}
        <Image
          src={project.src}
          fill
          alt={project.title}
          className="object-cover rounded-md transition-all duration-200 group-hover:scale-105 group-hover:contrast-125"
        />

        {/* 2. Displaced Glitch Slice 1 (Top Horizontal Tear) */}
        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-75 [clip-path:inset(12%_0_65%_0)] group-hover:translate-x-3 group-hover:-translate-y-1 group-hover:hue-rotate-90">
          <Image
            src={project.src}
            fill
            alt={project.title}
            className="object-cover rounded-md mix-blend-screen"
          />
        </div>

        {/* 3. Displaced Glitch Slice 2 (Bottom Horizontal Tear) */}
        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-75 [clip-path:inset(60%_0_15%_0)] group-hover:-translate-x-4 group-hover:translate-y-2 group-hover:invert-25">
          <Image
            src={project.src}
            fill
            alt={project.title}
            className="object-cover rounded-md mix-blend-hard-light"
          />
        </div>

        {/* 4. Missing Pixel Blocks (Random Blackout & Color Voids) */}
        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity z-10">
          {/* Missing Pixel Void 1 */}
          <div className="absolute top-[20%] left-[15%] w-8 sm:w-12 md:w-16 h-4 sm:h-6 md:h-8 bg-black border-r-2 border-cyan-400" />
          {/* Missing Pixel Void 2 */}
          <div className="absolute top-[55%] left-[60%] w-12 sm:w-16 md:w-24 h-3 sm:h-4 md:h-5 bg-black border-l-2 border-red-500" />
          {/* Missing Pixel Void 3 */}
          <div className="absolute top-[80%] left-[30%] w-8 sm:w-10 md:w-12 h-6 sm:h-8 md:h-10 bg-black" />
          {/* Corrupted RGB Block */}
          <div className="absolute top-[35%] left-[75%] w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10 bg-cyan-500/80 mix-blend-difference" />
          {/* Corrupted Red Block */}
          <div className="absolute top-[10%] left-[40%] w-12 sm:w-16 md:w-20 h-2 sm:h-2.5 md:h-3 bg-red-600/90 mix-blend-difference" />
        </div>

        {/* 5. Scanline & Digital Static Noise Grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-100 z-20 mix-blend-overlay"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, rgba(0,0,0,0.8), rgba(0,0,0,0.8) 2px, transparent 2px, transparent 4px),
              radial-gradient(rgba(255,255,255,0.8) 1px, transparent 0)
            `,
            backgroundSize: "100% 4px, 6px 6px",
          }}
        />
      </div>

      <div className="w-full font-poppins bg-[#e8e7e2] text-black p-4 sm:p-5 md:p-6 flex flex-col space-y-2 sm:space-y-3 h-auto md:h-65 rounded-md">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0">
          <span className="flex flex-wrap gap-2 sm:space-x-0 md:space-x-4">
            <Link 
              className="px-4 sm:px-5 md:px-7 py-2 sm:py-2.5 md:py-3 rounded-md bg-white  text-sm sm:text-base" 
              href={project.github}
            >
              Github
            </Link>
            <Link 
              className="px-4 sm:px-5 md:px-7 py-2 sm:py-2.5 md:py-3 rounded-md bg-white  text-sm sm:text-base" 
              href={project.live}
            >
              Live Demo
            </Link>
          </span>
          <span className="opacity-70 text-sm sm:text-base">{project.date}</span>
        </div>
        <hr className="border-[#e5192a] my-2 sm:my-4 md:my-5" />
        <div>
          <h1 className="capitalize text-xl sm:text-2xl md:text-2xl">{project.title}</h1>
        </div>
        <div>
          <p className="text-base sm:text-lg capitalize">{project.desc}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div className="bg-white px-4 sm:px-6 md:px-0">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-10 sm:py-20 md:py-40 max-w-434 mx-auto min-h-screen gap-6 sm:gap-8 md:gap-12"
      >
        {PROJECTS.map((project) => (
          <GlitchCard key={project.id} project={project} />
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;