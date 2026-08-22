import React from "react";

const AboutPage = () => {
  return (
    <div className="mt-16 sm:mt-24 md:mt-30">
      <section className="font-poppins px-6 sm:px-12 md:ml-20 lg:ml-30 max-w-7xl pt-16 sm:pt-24 md:pt-30 pb-20">
        <h2 className="text-5xl sm:text-7xl lg:text-8xl text-zinc-400 relative font-bold uppercase tracking-tight">
          About
          <span className="absolute text-[#e5192a] -top-8 sm:-top-14 md:-top-17 left-32 sm:left-48 md:left-56 lg:left-64">
            ME
          </span>
        </h2>

        <p className="text-xl sm:text-2xl md:text-3xl mt-8 sm:mt-10 leading-relaxed text-zinc-400 capitalize">
          I am the grandson of Elon Musk...
          <br />
          <br />
          Just kidding. I wish tho.
          <br />
          My name is <span className="text-[#e5192a]">Kalid Abdifetah</span>, the person behind{" "}
          <span className="text-[#e5192a]">Punto</span> which is the name behind all this madness. I have
          a Bachelor&apos;s degree in Computer Science, and somewhere along the
          way, I became obsessed with playing around with websites.
          <br />
          <br />
          I started with frontend development and, toward the end of 2025, decided
          that knowing only what happens on the screen wasn&apos;t enough. So I
          started digging into backend development too. Now I enjoy building
          things from both sides of the curtain.
          <br />
          <br />
          I like websites that feel natural, thoughtful, and human not like
          they were assembled from the same &quot;modern developer portfolio&quot;
          template everyone else is using.
          <br />
          <br />
          So if you want a website with some personality, a little character, dynamic pricing, and a
          price that might only be enough to buy me lunch and a one way ticket to
          the moon...
          <br />
          <br />
          You found your guy. Don&apos;t be shy. Hit me up.
        </p>
      </section>
    </div>
  );
};

export default AboutPage;