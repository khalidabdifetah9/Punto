"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Bebas_Neue} from "next/font/google";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"], display: "swap" });


const IMAGE_SRC = "/bottom_statue2.avif";
const BRAND = "Valor";
const LABEL = "(Services)";

const SERVICES = [
  {
    name: "web design",
    title: "Web Design",
    text: "Layouts and interfaces with a point of view. Pages that feel considered, not templated, and are ready to be built.",
  },
  {
    name: "front end",
    title: "Front End Development",
    text: "Fast, responsive interfaces in Next.js and React, with motion that has a reason to be there.",
  },
  {
    name: "back end",
    title: "Back End Development",
    text: "APIs, databases and authentication that stay quiet and reliable behind the scenes.",
  },
  {
    name: "production",
    title: "Production",
    text: "Testing, deployment and launch, so the site ships cleanly and stays up once it’s live.",
  },
  {
    name: "full stack",
    title: "Full Stack Engineering",
    text: "One person from first sketch to live product, so nothing gets lost between design and code.",
  },
];

const SCROLL_PER_SERVICE = 70;
const IMAGE_SCALE = 1.08;

const N = SERVICES.length;
const EASE = [0.22, 1, 0.36, 1];
const PAN = ((IMAGE_SCALE - 1) / 2) * 100;
const pad = (n) => String(n).padStart(2, "0");

export default function Services() {
  const sectionRef = useRef(null);
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive(Math.min(N - 1, Math.max(0, Math.floor(v * N))));
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? ["0%", "0%"] : [`${PAN}%`, `-${PAN}%`]
  );

  const jump = (i) => {
    const el = sectionRef.current;
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY;
    const distance = el.offsetHeight - window.innerHeight;
    window.scrollTo({
      top: top + distance * ((i + 0.5) / N),
      behavior: reduce ? "auto" : "smooth",
    });
  };

  const current = SERVICES[active];

  return (
    <section
      ref={sectionRef}
      id="services"
      style={{ height: `${100 + N * SCROLL_PER_SERVICE}svh` }}
      className={`relative bg-white  text-black ${bebas.className}`}
    >
      <div className="sticky top-0 flex h-svh flex-col overflow-hidden md:block">
        <div className="relative h-[36svh] w-full shrink-0 overflow-hidden md:absolute md:inset-y-0 md:right-0 md:h-auto md:w-[44vw]">
          <motion.div
            style={{ y: imageY, scale: reduce ? 1 : IMAGE_SCALE }}
            className="absolute inset-0"
          >
            <Image
              src={IMAGE_SRC}
              alt=""
              fill
              priority
              sizes="(min-width: 768px) 44vw, 100vw"
              className="object-cover object-top"
            />
          </motion.div>
        </div>

        <div className="relative z-10 flex flex-1 flex-col justify-between px-[5vw] py-6 md:absolute md:inset-y-0 md:left-0 md:w-[56vw] md:flex-none md:px-[4vw] md:py-[6.5vh]">
          <div className="flex items-start justify-between text-sm font-medium uppercase leading-tight">
            <p>
              {BRAND} /{new Date().getFullYear()}
              <br />
              {LABEL}
            </p>
            <p className="tabular-nums">
              {pad(active + 1)} / {pad(N)}
            </p>
          </div>

          <ol className="text-[13vw] font-semibold leading-[0.92] tracking-[-0.05em] md:text-[6.8vw]">
            {SERVICES.map((service, i) => {
              const on = i === active;
              return (
                <li key={service.name}>
                  <button
                    type="button"
                    onClick={() => jump(i)}
                    aria-current={on ? "true" : undefined}
                    className="block w-full text-left outline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#c22a2a]"
                  >
                    <motion.span
                      initial={false}
                      animate={{
                        x: on ? "12vw" : "0vw",
                        color: on ? "#c22a2a" : "rgba(0,0,0,0.14)",
                      }}
                      whileHover={on ? undefined : { color: "rgba(0,0,0,0.45)" }}
                      transition={{ duration: reduce ? 0 : 0.6, ease: EASE }}
                      className="inline-block whitespace-nowrap"
                    >
                      <span className="mr-[0.5em] align-top text-[0.16em] font-medium tracking-normal">
                        {pad(i + 1)}
                      </span>
                      {service.name}
                    </motion.span>
                  </button>
                </li>
              );
            })}
          </ol>

          <div className="min-h-30">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={reduce ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, y: -14 }}
                transition={{ duration: reduce ? 0 : 0.35, ease: EASE }}
              >
                <p className="text-sm font-medium font-poppins uppercase">{current.title}</p>
                <p className="mt-3 max-w-[38ch] font-poppins capitalize text-[clamp(0.95rem,1.05vw,1.2rem)] font-medium leading-[1.35] tracking-[-0.01em]">
                  {current.text}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}