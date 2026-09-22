"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { Archivo, Inter } from "next/font/google";

const display = Archivo({ subsets: ["latin"], axes: ["wdth"], display: "swap" });
const body = Inter({ subsets: ["latin"], display: "swap" });

const TESTIMONIALS = [
  {
    headline: "He understood the design without needing everything explained.",
    quote:
      "I gave Kalid the direction, references, and a few things I wanted changed, and he understood the visual direction surprisingly quickly. The final website felt intentional rather than like another template. He was also easy to communicate with and actually listened when I asked for changes.",
    highlight: "the final website felt intentional rather than like another template",
    project: "Website design & development",
    name: "Daniel",
    role: "Business Owner",
    avatar: "/clients/Daniel.avif",
  },

  {
    headline: "The small details made a bigger difference than I expected.",
    quote:
      "What stood out to me was how much attention Kalid gave to the details. Spacing, typography, responsive behavior, and the way sections worked together were all things we discussed. I had a few rounds of feedback, and he didn't make the process complicated. He just went back, fixed things, and kept improving the result.",
    highlight: "he just went back, fixed things, and kept improving the result",
    project: "Frontend development",
    name: "Michael",
    role: "Product Manager",
    avatar: "/clients/Michael.avif",
  },

  {
    headline: "It felt like working with someone who actually cared about the result.",
    quote:
      "I wasn't looking for something overly complicated. I wanted a website that looked good, worked properly, and represented the business well. Kalid was straightforward throughout the project, met the deadlines we agreed on, and was open to feedback. The finished site was much closer to what I had in mind than what I initially expected.",
    highlight: "the finished site was much closer to what I had in mind",
    project: "Business website",
    name: "Alex",
    role: "Founder",
    avatar: "/clients/alex.avif",
  },
];


const PLACEHOLDER_COUNT = 3;
const PLACEHOLDER_TEXT = "Working to get more feedback";

const POSITIONS = ["md:self-start", "md:self-end", "md:self-center"];
const DRIFT = [70, 20, 110];
const TILT = [-3, 3, -2];

const HEADING = `${display.className} text-center text-[clamp(4.5rem,21vw,22rem)] font-black uppercase leading-[0.82] tracking-[-0.01em]`;
const HEADING_STYLE = { fontVariationSettings: "'wdth' 70" };

const initials = (name) =>
  name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

function Star() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-[#c22a2a]">
      <path d="M12 1.5l3.1 6.9 7.4.8-5.5 5 1.6 7.4L12 17.9 5.4 21.6 7 14.2l-5.5-5 7.4-.8L12 1.5z" />
    </svg>
  );
}

function Quote({ text, highlight }) {
  const reduce = useReducedMotion();
  const at = highlight ? text.indexOf(highlight) : -1;

  if (at === -1) return <>“{text}”</>;

  return (
    <>
      “{text.slice(0, at)}
      <motion.mark
        initial={{ backgroundSize: reduce ? "100% 100%" : "0% 100%" }}
        whileInView={{ backgroundSize: "100% 100%" }}
        viewport={{ once: true, margin: "0px 0px -25% 0px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
        className="box-decoration-clone bg-transparent bg-[linear-gradient(#3b5bff40,#3b5bff40)] bg-bottom-left bg-no-repeat text-inherit"
      >
        {highlight}
      </motion.mark>
      {text.slice(at + highlight.length)}”
    </>
  );
}

function Card({ item, index, placeholder = false }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const drift = reduce ? 0 : DRIFT[index % DRIFT.length];
  const tilt = reduce ? 0 : TILT[index % TILT.length];

  const y = useTransform(scrollYProgress, [0, 1], [drift, -drift]);
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [tilt, 0, -tilt / 2]);

  const shell =
    "w-full self-stretch rounded-3xl px-6 py-8 will-change-transform md:w-[min(30rem,100%)] md:px-10 md:py-10";

  return (
    <motion.article
      ref={ref}
      style={{ y, rotate }}
      className={`${shell} ${POSITIONS[index % POSITIONS.length]} ${
        placeholder
          ? "border border-dashed border-white/25 bg-black/60 text-white backdrop-blur-md"
          : "bg-[#e8ebf2] text-[#0b0d12]"
      }`}
    >
      {placeholder ? (
        <div className="flex min-h-56  items-center">
          <p className="text-2xl font-medium leading-snug tracking-tight text-white/60">
            {PLACEHOLDER_TEXT}
          </p>
        </div>
      ) : (
        <>
          <div className="mb-8 flex items-center justify-between text-sm">
            <span
              className="flex items-center gap-2 font-semibold"
              aria-label="Rated 5 out of 5"
            >
              <Star />
              5.0
            </span>
            <span className="text-black/55">{item.project}</span>
          </div>

          <h3 className="mb-5 text-2xl font-poppins font-medium leading-snug tracking-tight">
            {item.headline}
          </h3>
          <blockquote className="text-[1.0625rem] font-poppins leading-[1.8]">
            <Quote text={item.quote} highlight={item.highlight} />
          </blockquote>

          <footer className="mt-10 flex items-center gap-4 md:mt-16">
            {item.avatar ? (
              <Image
                src={item.avatar}
                alt=""
                width={64}
                height={64}
                sizes="64px"
                className="h-14 w-14 flex-none rounded-full object-cover md:h-16 md:w-16"
              />
            ) : (
              <span
                aria-hidden="true"
                className="grid h-14 w-14 flex-none place-items-center rounded-full bg-black/10 text-lg font-semibold md:h-16 md:w-16"
              >
                {initials(item.name)}
              </span>
            )}
            <div>
              <cite className="block text-xl font-semibold not-italic leading-tight">
                {item.name}
              </cite>
              <span className="mt-1 block text-base text-black/60">
                {item.role}
              </span>
            </div>
          </footer>
        </>
      )}
    </motion.article>
  );
}

export default function Testimonials() {
  const sectionRef = useRef(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const fill = useTransform(
    scrollYProgress,
    [0.05, 0.85],
    ["inset(100% 0% 0% 0%)", "inset(0% 0% 0% 0%)"]
  );
  const hintOpacity = useTransform(scrollYProgress, [0, 0.04], [1, 0]);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="testimonials-title"
      className={`relative bg-[#000000] text-white ${body.className}`}
    >
      <div className="pointer-events-none sticky top-0 z-0 grid h-svh place-items-center overflow-hidden">
        <div className="relative">
          <h2
            id="testimonials-title"
            style={HEADING_STYLE}
            className={`${HEADING} text-white/8`}
          >
            Client
            <br />
            Feedback
          </h2>

          <motion.div
            aria-hidden="true"
            style={{
              ...HEADING_STYLE,
              clipPath: reduce ? "inset(0% 0% 0% 0%)" : fill,
            }}
            className={`${HEADING} absolute font-poppins inset-0 text-[#c22a2a]`}
          >
            Client
            <br />
            Feedback
          </motion.div>
        </div>

        <motion.p
          style={{ opacity: hintOpacity }}
          className="absolute bottom-8 text-sm text-white/50"
        >
          Scroll to read
        </motion.p>
      </div>

      <div className="relative z-10 -mt-svh flex flex-col gap-[clamp(4rem,14vh,9rem)] px-[4vw] pb-[100svh] pt-[100svh]">
        {TESTIMONIALS.map((item, i) => (
          <Card key={item.name} item={item} index={i} />
        ))}

        {Array.from({ length: PLACEHOLDER_COUNT }).map((_, i) => (
          <Card
            key={`placeholder-${i}`}
            index={TESTIMONIALS.length + i}
            placeholder
          />
        ))}
      </div>
    </section>
  );
}