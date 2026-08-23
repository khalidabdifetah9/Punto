"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Contact() {
  const contactText = "Contact".split("");
  const meText = "Me".split("");

  const titleContainerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06, 
      },
    },
  };

  const letterVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <div className="w-full bg-white py-30 font-poppins text-[#111827] min-h-screen">
      <div className="bg-white py-16 px-6 sm:px-12 md:px-20">
        <div className="max-w-7xl">
          <motion.h1 
            className="text-5xl md:text-[7vw] font-sans font-bold tracking-tight mb-6 flex flex-wrap gap-x-4 overflow-hidden"
            variants={titleContainerVariants}
            initial="hidden"
            animate="visible"
          >
            <span className="inline-flex">
              {contactText.map((letter, index) => (
                <motion.span key={`contact-${index}`} variants={letterVariants}>
                  {letter}
                </motion.span>
              ))}
            </span>

            <span className="inline-flex">
              {meText.map((letter, index) => (
                <motion.span key={`me-${index}`} variants={letterVariants}>
                  {letter}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          <motion.p 
            className="text-gray-600 text-base md:text-xl leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
         {"Have something in mind? Don't overthink it. Send me the idea, even if it's still 40% confusion and 60% \"trust me, it'll be cool.\" We'll figure out the rest."}
          </motion.p>
        </div>
      </div>

      <motion.div 
        className="w-full bg-[#e5192a] mx-auto px-6 sm:px-12 md:px-16 py-16"
        initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
        animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
        transition={{ duration: 1.4, delay: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <motion.div 
            className="lg:col-span-5 relative w-full h-130 rounded-xl overflow-hidden shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src="/contact2.jpg"
              alt="Contact Support Person"
              fill
              className="object-cover object-top"
              priority
            />
          </motion.div>

          <motion.div 
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="border-b border-gray-300 pb-4">
              <h2 className="text-3xl md:text-4xl tracking-tight">
                Send Your Message
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 py-10">
              <div className="flex flex-col max-w-50 mb-10 gap-2 text-center sm:text-left">
                <h3 className="text-black text-base sm:text-2xl md:text-3xl lg:text-5xl uppercase font-medium mb-2">
                  Socials
                </h3>
                <Link
                  href="https://t.me/Kalida5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl transition-colors"
                >
                  Telegram
                </Link>
                <Link
                  href="https://www.linkedin.com/in/khalid-abdifetah-197630412/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl transition-colors"
                >
                  LinkedIn
                </Link>
                <Link
                  href="https://x.com/kalidabdi555"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl transition-colors"
                >
                  Twitter
                </Link>
              </div>
              <div>
                <h1 className="text-black text-base sm:text-2xl md:text-3xl lg:text-5xl uppercase font-medium mb-2">Phone Number</h1>
                <p className="hover:text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl transition-colors">+251973188859</p>
              </div>
              <div className="sm:col-span-2">
                <h1 className="text-black text-base sm:text-2xl md:text-3xl lg:text-5xl uppercase font-medium mb-2">email</h1>
                <Link href="mailto:khalidabdifetah9@gmail.com" className="hover:text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl transition-colors break-words">khalidabdifetah9@gmail.com</Link>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}