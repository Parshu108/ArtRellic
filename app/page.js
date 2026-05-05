"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
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
          src="/hero.jpg" // replace with your image
          alt="hero"
          width={100}
          height={50}
          className="absolute w-full h-auto object-cover "
        />

        {/* 🔵 Dark Overlay */}
        <div className="absolute inset-0 bg-[#0f2b4c]/70"></div>

        {/* 🟢 Cursor Dot */}
        <div
          className="pointer-events-none fixed z-50 w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 blur-sm"
          style={{
            transform: `translate(${pos.x - 12}px, ${pos.y - 12}px)`,
          }}
        ></div>

        {/* 🔥 Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="max-w-2xl">
            {/* Tag */}
            <span className="inline-block bg-white/20 text-white px-4 py-1 rounded-full text-sm mb-4">
              🌿 Protecting Nature Today For A Sustainable
            </span>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              Together for a Greener Tomorrow
            </h1>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Primary */}
              <button className="flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-teal-400 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
                Get Involved →
              </button>

              {/* Video */}
              <button className="flex items-center gap-3 text-white hover:text-cyan-400 transition">
                <span className="w-10 h-10 flex items-center justify-center bg-white/20 rounded-full">
                  ▶
                </span>
                Watch Our Video
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0f2b4c] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* 🔵 LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Image
              src="/about.jpg"
              alt="about"
              width={500}
              height={500}
              className="rounded-2xl"
            />

            {/* Floating Card */}
            <div className="absolute bottom-6 left-60 bg-[#123a63]/80 backdrop-blur-md text-white p-5 rounded-xl shadow-lg border border-slate-700">
              <div className="text-center">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full flex items-center justify-center mx-auto mb-2 text-black">
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
                    className="lucide lucide-settings-icon lucide-settings"
                  >
                    <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <p className="text-sm text-gray-300">Eco Awareness Programs</p>
              </div>
            </div>
          </motion.div>

          {/* 🔵 RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Tag */}
            <span className="bg-cyan-400/20 text-cyan-300 px-4 py-1 rounded-full text-sm font-medium">
              About Us
            </span>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 leading-tight">
              Trusted Partner in Environmental Conservation & Sustainability
            </h2>

            {/* Quote Card */}
            <div className="bg-[#123a63] p-6 rounded-xl mb-6 border border-slate-700">
              <p className="text-gray-300 italic mb-4">
                “Protecting the environment is not a choice it is a
                responsibility we owe to future generations.”
              </p>

              <h4 className="font-semibold text-white">Marvin McKinney</h4>
              <p className="text-sm text-gray-400">Founder & CEO</p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-cyan-400/20 text-cyan-300 flex items-center hover:text-black justify-center rounded-full">
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
                    className="lucide lucide-settings-icon lucide-settings"
                  >
                    <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white">
                    Innovative Solutions
                  </h4>
                  <p className="text-sm text-gray-400">
                    We develop practical & creative ideas
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-cyan-400/20 text-cyan-300 flex items-center justify-center rounded-full hover:text-black">
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
                    className="lucide lucide-graduation-cap-icon lucide-graduation-cap"
                  >
                    <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
                    <path d="M22 10v6" />
                    <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white">
                    Education & Awareness
                  </h4>
                  <p className="text-sm text-gray-400">
                    We run programs and campaigns
                  </p>
                </div>
              </div>
            </div>

            {/* Checklist */}
            <div className="flex flex-col sm:flex-row gap-6 text-sm text-gray-300 mb-6">
              <p>✔ Our initiative design to balance environmental</p>
              <p>✔ We deliver measurable solutions</p>
            </div>

            {/* Button */}
            <button className="bg-gradient-to-r from-cyan-400 to-teal-400 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
              More About Us →
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
