"use client";

import { useEffect, useRef } from "react";
import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400" });

const REPEATS = 3;

function Phrase({ words, measureRef }) {
  return (
    <span ref={measureRef} className="inline-flex shrink-0 items-center">
      {words.map((word) => (
        <span key={word} className="inline-flex items-center">
          {word}
          <span className="mx-[3.5vw] inline-block size-[4vw] -translate-y-[0.05em] rounded-full bg-white" />
        </span>
      ))}
    </span>
  );
}

function Row({ words, rowRef, measureRef }) {
  return (
    <div ref={rowRef} aria-hidden="true" className="flex w-max will-change-transform">
      {Array.from({ length: REPEATS }, (_, i) => (
        <Phrase key={i} words={words} measureRef={i === 0 ? measureRef : undefined} />
      ))}
    </div>
  );
}

export default function MotionText({
  words = ["UI/UX DESIGN", "DEVELOPMENT", "PRODUCTION"],
  speed = 0.6, // px of horizontal travel per px scrolled
  tilt = -3, // degrees; negative rises to the right like the reference
}) {
  const sectionRef = useRef(null);
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);
  const phraseRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let phraseWidth = 0;
    let current = 0;
    let target = 0;
    let raf = 0;

    const readTarget = () => {
      target = reduceMotion ? 0 : -section.getBoundingClientRect().top * speed;
    };

    const paint = () => {
      if (!phraseWidth || !row1Ref.current || !row2Ref.current) return;
      const shift = ((current % phraseWidth) + phraseWidth) % phraseWidth;
      const shift2 = (shift + phraseWidth / 2) % phraseWidth;
      row1Ref.current.style.transform = `translate3d(${-shift}px,0,0)`;
      row2Ref.current.style.transform = `translate3d(${shift2 - phraseWidth}px,0,0)`;
    };

    const tick = () => {
      current += (target - current) * 0.12; // easing so the motion feels smooth
      if (Math.abs(target - current) < 0.05) current = target;
      paint();
      raf = current === target ? 0 : requestAnimationFrame(tick);
    };

    const onScroll = () => {
      readTarget();
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const measure = () => {
      phraseWidth = phraseRef.current?.offsetWidth ?? 0;
      readTarget();
      current = target;
      paint();
    };

    measure();
    const resizeObserver = new ResizeObserver(measure);
    if (phraseRef.current) resizeObserver.observe(phraseRef.current);

    if (!reduceMotion) window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      resizeObserver.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [speed, words]);

  return (
    <section
      ref={sectionRef}
      className="relative flex h-screen w-full items-center overflow-hidden bg-black text-white"
    >
      <h2 className="sr-only">{words.join(", ")}</h2>

      <div
        className={`${bebas.className} -ml-[10%] w-[120%] select-none text-[17vw] uppercase leading-[0.85]`}
        style={{ transform: `rotate(${tilt}deg)` }}
      >
        <Row words={words} rowRef={row1Ref} measureRef={phraseRef} />
        <Row words={words} rowRef={row2Ref} />
      </div>
    </section>
  );
}
