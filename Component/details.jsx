import React from "react";
import { Bebas_Neue, Inter } from "next/font/google";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"], display: "swap" });
const inter = Inter({ subsets: ["latin"], display: "swap" });

const header = {
  label: "Why work with me",
  lineOne: "Built right",
  lineTwo: "from line one",
  text: "Four things every project gets, whether it’s a small site update or a full build.",
};
const details = [
  {
    id: 1,
    title: "Clean Code",
    description:
      "Readable, well structured Next.js code that you or your team can maintain and extend without headaches.",
    number: "95",
    unit: "+",
    bottomText: "Lighthouse score target",
  },
  {
    id: 2,
    title: "Modern Stack",
    description:
      "Next.js, React, Tailwind and Framer Motion, picked with care and used the way they were meant to be.",
    number: "4+",
    unit: " YRS",
    bottomText: "Building with Next.js",
  },
  {
    id: 3,
    title: "Pixel Precise",
    description:
      "Layouts that match the design down to the last detail and hold up on every screen size.",
    number: "1",
    unit: "PX",
    bottomText: "Design match precision",
  },
  {
    id: 4,
    title: "Clear Communication",
    description:
      "Regular updates, straight answers and no surprises, from the first message to launch day.",
    number: "24",
    unit: "H",
    bottomText: "Typical reply time",
  },
];

const CheckIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="h-7 w-7 lg:h-9 lg:w-9"
  >
    <path d="M4 12.5l5 5L20 6.5" />
  </svg>
);

const Details = () => {
  return (
    <section
      className={`flex min-h-screen flex-col  justify-center bg-black px-5 py-12 text-white sm:px-10 lg:px-[4vw] lg:py-20 ${inter.className}`}
    >
      <header className="mb-10 flex flex-col  gap-6 lg:mb-14 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="border-l-2 border-[#c22a2a] pl-4 text-xs uppercase tracking-[0.2em] text-white/70 sm:text-sm">
            {header.label}
          </p>
          <h2
            className={`${bebas.className} mt-6 text-[clamp(3rem,7vw,6.5rem)] uppercase leading-[0.9]`}
          >
            {header.lineOne}
            <br />
            <span className="text-[#c22a2a]">{header.lineTwo}</span>
          </h2>
        </div>

        <p className="max-w-[34ch] text-base leading-relaxed text-white/70 lg:pb-2">
          {header.text}
        </p>
      </header>

      <div className="grid w-full grid-cols-1 gap-px border lg:px-[7vw] border-gray-600/40  sm:grid-cols-2 lg:h-[min(42rem,70svh)] lg:min-h-[34rem] lg:grid-cols-4 lg:grid-rows-1">
        {details.map((detail) => (
          <article key={detail.id} className="group flex flex-col">
            <div className="relative flex flex-[8] flex-col gap-5 bg-[#c22a2a] p-6 sm:p-8 lg:gap-0 lg:p-10">
              <span className="flex h-14 w-14 items-center justify-center bg-black text-white motion-reduce:transition-none lg:h-[5.5rem] lg:w-[5.5rem] lg:transition-all lg:duration-500 lg:ease-out lg:group-hover:scale-75 lg:group-hover:opacity-0">
                <CheckIcon />
              </span>

              <h3
                className={`${bebas.className} mt-auto text-4xl uppercase leading-[1.05] motion-reduce:transition-none sm:text-5xl lg:absolute lg:inset-x-10 lg:top-[calc(100%-2.5rem)] lg:mt-0 lg:-translate-y-full lg:text-[clamp(2.25rem,2.6vw,2.9rem)] lg:transition-[top,transform] lg:duration-500 lg:ease-out lg:group-hover:top-10 lg:group-hover:translate-y-0`}
              >
                {detail.title}
              </h3>

              <p className="text-base leading-relaxed text-white/90 motion-reduce:transition-none lg:absolute lg:inset-x-10 lg:bottom-10 lg:translate-y-3 lg:opacity-0 lg:transition-all lg:duration-500 lg:ease-out lg:group-hover:translate-y-0 lg:group-hover:opacity-100 lg:group-hover:delay-100">
                {detail.description}
              </p>
            </div>

            <div className="flex flex-[5] flex-col justify-between gap-10 bg-black p-6 transition-colors duration-500 sm:p-8 lg:p-10 lg:group-hover:bg-white/[0.03]">
              <div
                className={`${bebas.className} text-6xl leading-none sm:text-7xl lg:text-[clamp(3.5rem,5.4vw,6rem)]`}
              >
                {detail.number}
                <span className="text-[#c22a2a]">{detail.unit}</span>
              </div>

              <p className="border-l-2 border-[#c22a2a] pl-4 text-xs uppercase tracking-[0.2em] text-white/70 sm:text-sm">
                {detail.bottomText}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Details;