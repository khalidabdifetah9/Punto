import React from "react";

const AboutMe = () => {
  return (
    <section className="font-poppins ml-30 max-w-290 h-250 pt-30">
      <h2 className="text-8xl text-zinc-400 relative font-bold uppercase ">
        About
        <span className="absolute text-[#e5192a] -top-18 left-52">ME</span>
      </h2>

      <p className="text-3xl mt-10 leading-9 text-zinc-400 capitalize">
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
        <br />I like websites that feel natural, thoughtful, and human not like
        they were assembled from the same &quot;modern developer portfolio&quot;
        template everyone else is using.
        <br />
        So if you want a website with some personality, a little character,and a
        price that might only be enough to buy me lunch and a one way ticket to
        the moon...
        <br />
        <br />
        You found your guy. Don&apos;t be shy.Hit me up.
      </p>
    </section>
  );
};

export default AboutMe;
