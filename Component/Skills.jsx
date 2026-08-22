import React from "react";
import Link from "next/link";
import {skillsData} from "@/utils/stills"


const Skills = () => {
  return (
    <section className="bg-black font-poppins text-white min-h-screen px-6 py-30 md:px-16 lg:px-24">
      <div className="max-w-500 mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        <div className="md:col-span-4 lg:col-span-5">
          <span className="text-zinc-400 text-xl uppercase font-bold md:text-8xl">
            My skills
          </span>
        </div>

        <div className="md:col-span-6 lg:col-span-5 space-y-12">
          {skillsData.map((skill, index) => (
            <div key={index} className="space-y-3">
              <h3 className="text-xl md:text-5xl font-medium text-[#e5192a] tracking-tight">
                {skill.title}
              </h3>
              <p className="text-zinc-400 text-base md:text-2xl leading-relaxed font-normal">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;