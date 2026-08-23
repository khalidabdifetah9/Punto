"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PROJECTS } from "@/utils/projects";

export default function MyProjects() {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-78%"]);

  return (
    <section ref={targetRef} className="relative font-poppins h-[300vh] bg-[#f8f7f3] text-black">
      <div className="sticky top-0 flex min-h-screen flex-col justify-center overflow-hidden pt-32 pb-8 md:pt-16 md:py-8">
        
        <div className="text-center mb-6 md:mb-10 uppercase font-extrabold tracking-tight text-3xl sm:text-4xl md:text-7xl shrink-0 px-4">
          <h2 className="text-black">
            THINGS I SOMEHOW MADE<br />
            WORK
          </h2>
        </div>

        <div className="w-full overflow-hidden px-4 md:px-16">
          <motion.div style={{ x }} className="flex gap-6 md:gap-8">
            {PROJECTS.map((project, index) => (
              <div
                key={project.id || index}
                className="group relative flex w-[85vw] sm:w-[90vw] max-w-190 shrink-0 flex-col"
              >
                <div className="relative aspect-16/10 w-full overflow-hidden rounded-2xl md:rounded-3xl bg-zinc-900 shadow-lg">
                  <Image
                    src={project.src}
                    alt={project.title || "Project Preview"}
                    fill
                    sizes="(max-width: 640px) 85vw, (max-width: 768px) 90vw, 100vw"
                    priority={index === 0}
                    unoptimized
                    className="object-cover transition-transform duration-500 [@media(hover:hover)_and_(display-mode:fullscreen)]:group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/25 z-0 transition-colors duration-300 [@media(hover:hover)_and_(display-mode:fullscreen)]:group-hover:bg-black/50" />

                  <div className="absolute inset-0 flex items-center justify-center gap-6 sm:gap-12 z-10 [@media(hover:hover)_and_(display-mode:fullscreen)]:opacity-0 [@media(hover:hover)_and_(display-mode:fullscreen)]:transition-opacity [@media(hover:hover)_and_(display-mode:fullscreen)]:duration-300 [@media(hover:hover)_and_(display-mode:fullscreen)]:group-hover:opacity-100">
                    <Link
                      href={project.github || "#"}
                      className="bg-white text-black flex items-center rounded-sm text-center text-xs sm:text-sm md:text-xl font-poppins px-4 py-2 md:px-8 md:py-3 font-semibold"
                    >
                      Github
                    </Link>
                    <Link
                      href={project.live || "#"}
                      className="text-white bg-black flex items-center font-poppins rounded-sm text-xs sm:text-sm md:text-xl px-4 py-2 md:px-8 md:py-3 font-semibold"
                    >
                      Demo
                    </Link>
                  </div>

                  <div className="absolute bottom-3 left-4 sm:bottom-4 sm:left-6 z-10 text-[10px] sm:text-xs md:text-sm font-medium text-white/90 drop-shadow">
                    {project.category} • {project.date}
                  </div>
                </div>

                <div className="mt-3 md:mt-4 flex flex-col text-left">
                  <h3 className="text-lg md:text-2xl font-bold tracking-tight text-black">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-xs md:text-base text-zinc-600 line-clamp-2">
                    {project.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}