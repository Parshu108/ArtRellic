"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <section className="relative h-screen overflow-hidden">
        {/* 🔵 Background Image */}
        <Image
          src="/hero_2.jpg" // replace with your image
          alt="Hero Background"
          width={100}
          height={50}
          className="absolute w-full h-auto object-cover "
        />

        {/* 🔵 Dark Overlay */}
        <div className="absolute inset-0 bg-[#0c264b]/80"></div>

        {/* 🟢 Cursor Dot */}
        <div
          className="pointer-events-none fixed  w-3 h-3 rounded-full bg-gradient-to-r from-[#0bccc1] to-[#07ebd1] "
          style={{
            transform: `translate(${pos.x - 1}px, ${pos.y - 1}px)`,
          }}
        ></div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="max-w-4xl">
            {/* TOP BADGE */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 backdrop-blur-md bg-[#0bccc1]/10 border border-[#0bccc1]/20 rounded-full px-6 py-3 mb-10"
            >
              <span className="w-2 h-2 rounded-full bg-[#07ebd1] animate-pulse"></span>

              <span className="text-white text-sm md:text-base font-medium">
                Empowering Businesses Through Smart Technology
              </span>
            </motion.div>

            {/* HEADING */}
            <motion.h1
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white text-6xl md:text-8xl font-bold leading-[0.95]"
            >
              Crafting Digital 
              <span className="block">
                <span className="bg-gradient-to-r from-[#0bccc1] to-[#07ebd1] bg-clip-text text-transparent">
                 Excellence.
                </span>
              </span>
            </motion.h1>

            {/* LINE */}
            <div className="w-full h-[1px] bg-[#0bccc1]/20 my-14"></div>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex flex-wrap items-center gap-8"
            >
              {/* BUTTON */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="group mt-2 bg-[#0bccc1] text-[#ffffff] hover:bg-[#07ebd1] px-6 py-2 rounded-full font-bold text-xl flex items-center gap-5 shadow-xl"
              >
                Get Involved
                <span className="w-14 h-14 rounded-full bg-[#0c264b] text-[#07ebd1] flex items-center justify-center group-hover:translate-x-2 transition duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-right-icon lucide-arrow-right"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </span>
              </motion.button>

              {/* BUTTON 2 */}
              <div className="flex items-center gap-5 group cursor-pointer">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-14 h-14 rounded-full bg-[#0bccc1] text-[#0c264b] flex items-center justify-center shadow-xl"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-play-icon lucide-play"
                  >
                    <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
                  </svg>
                </motion.div>

                <span className="text-white text-2xl font-semibold group-hover:text-[#07ebd1] transition duration-300">
                  Watch Our Video
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
