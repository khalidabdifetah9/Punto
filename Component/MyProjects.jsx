"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const PROJECTS = [
  { id: 1, src: "/agrimar.png", title: "Growth Engine", category: "Web Development", date: "August 23, 2025", desc: "Al-powered sensors reduced downtown traffic congestion by 35% weekly.", github: "#", live: "#" },
  { id: 2, src: "/court.png", title: "Cyber Matrix", category: "Web Development", date: "August 23, 2025", desc: "Boosted online sales 200% with lightning-fast, mobile-friendly checkout flows.", github: "#", live: "#" },
  { id: 3, src: "/every.png", title: "Vector Design", category: "UI/UX Design", date: "August 23, 2025", desc: "Designed intuitive dashboard components for real-time telemetry tracking.", github: "#", live: "#" },
  { id: 4, src: "/fisum.png", title: "Aura UI", category: "Web Development", date: "August 23, 2025", desc: "Modern frontend architecture built for scalable SaaS platforms.", github: "#", live: "#" },
  { id: 5, src: "/kidslearn.png", title: "Data Stream", category: "EdTech", date: "August 23, 2025", desc: "Interactive learning platform for young minds with real-time feedback.", github: "#", live: "#" },
  { id: 6, src: "/medFinder.png", title: "Neural Net", category: "Healthcare AI", date: "August 23, 2025", desc: "Streamlined medical search matching patients with regional specialists.", github: "#", live: "#" },
];

export default function MyProjects() {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-78%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-[#f8f7f3] text-black">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden py-8">
        
        <div className="text-center font-poppins mb-10 uppercase font-extrabold tracking-tight text-4xl md:text-7xl shrink-0 px-4">
          <h2 className="text-black">
            THINGS I SOMEHOW MADE<br />
            WORK
          </h2>
        </div>

        <div className="w-full overflow-hidden px-6 md:px-16">
          <motion.div style={{ x }} className="flex gap-8">
            {PROJECTS.map((project, index) => (
              <div
                key={project.id}
                className="group relative flex w-[95vw] max-w-190 shrink-0 flex-col"
              >
                <div className="relative aspect-16/10 w-full overflow-hidden rounded-3xl bg-zinc-900 shadow-lg">
                  <Image
                    src={project.src}
                    alt={project.title}
                    fill
                    priority={index === 0}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/25 z-0 transition-colors duration-300 group-hover:bg-black/50" />

                  <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center gap-12 z-10">
                    <Link
                      href={project.github || "#"}
                      className="border-2 border-[#e5192a] text-[#e5192a] flex items-center w-30 h-30 rounded-full text-center md:text-xl font-poppins px-6 py-3 transition-transform hover:scale-105 shadow-xl"
                    >
                      Github
                    </Link>
                    <Link
                      href={project.live || "#"}
                      className="border-2 border-[#e5192a] text-[#e5192a] flex items-center w-30 h-30 font-poppins rounded-full text-base md:text-xl  px-6 py-3 transition-transform hover:scale-105 shadow-xl"
                    >
                       Demo
                    </Link>
                  </div>

                  <div className="absolute bottom-4 left-6 z-10 text-xs md:text-sm font-medium text-white/90 drop-shadow">
                    {project.category} • {project.date}
                  </div>
                </div>

                <div className="mt-4 flex flex-col text-left">
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight text-black">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm md:text-base text-zinc-600 line-clamp-2">
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