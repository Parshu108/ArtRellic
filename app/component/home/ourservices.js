"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function OurServices() {

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
              <section className="bg-[#0c264b] text-white py-20">
                {/* 🔥 GREEN GLOW */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(132,255,84,0.18),transparent_35%)]" />
        
                {/* FLOATING DOT */}
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    x: [0, 12, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                  }}
                  className="absolute left-1/3 top-1/3 w-4 h-4 rounded-full bg-secondary blur-[1px]"
                />
                <div className="relative z-10 max-w-7xl mx-auto px-6">
                  {/* ================= TOP BADGE ================= */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center"
                  >
                    <div className="inline-flex items-center gap-2 bg-[#0bccc1]/10 border border-[#0bccc1]/20 rounded-full px-6 py-3 mb-8">
                      <span className="w-2 h-2 rounded-full bg-[#07ebd1] animate-pulse" />
        
                      <span className="text-[#0bccc1] font-semibold text-sm">
                        Our Service
                      </span>
                    </div>
                  </motion.div>
        
                  {/* ================= HEADING ================= */}
                  <motion.h1
                    initial={{ opacity: 0, y: 70 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center text-white text-4xl md:text-6xl font-bold mt-7 leading-tight"
                  >
                    Trusted Software
                    <span className="block bg-gradient-to-r from-[#0bccc1] to-[#0bccc1] bg-clip-text text-transparent">
                      Development
                    </span>
                  </motion.h1>
        
                  {/* ================= DESCRIPTION ================= */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-center text-gray-300 text-sm md:text-lg max-w-xl mx-auto mt-2 leading-relaxed"
                  >
                    Delivering reliable software solutions that help businesses streamline operations, enhance productivity, and drive sustainable growth
                  </motion.p>
        
                  {/* Cards */}
                  <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={{
                      hidden: {},
                      show: {
                        transition: {
                          staggerChildren: 0.2,
                        },
                      },
                    }}
                    className="grid md:grid-cols-3 gap-8 mt-16 relative overflow-hidden rounded-[34px] border border-white/5 bg-white/5 backdrop-blur-xl p-10 shadow-2xl"
                  >
                    {/* Card 1 */}
                    <motion.div
                      whileHover={{ y: -10 }}
                      className=" p-6 rounded-2xl bg-[#0c264b]/70 border border-[#0bccc1]/20 shadow-lg text-left transition duration-300"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-[#0bccc1] to-[#07ebd1] text-white rounded-full flex items-center justify-center mb-4">
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
        
                      <h2 className="relative z-10 text-white text-2xl font-bold mt-5 leading-tight">
                        Environmental Research
                      </h2>
        
                      <p className="relative z-10 text-gray-300 text-md leading-relaxed mt-6">
                        Driven study to understand environmental impact and support
                        sustainable decisions.
                      </p>
        
                      {/* LINE */}
                      <div className="relative z-10 w-full h-0.5 bg-white/10 my-4"></div>
        
                      <ul className="relative z-10 space-y-2 text-gray-200 text-sm mb-6">
                        <li>• Conduct data study to assess impact</li>
                        <li>• Support informed decision-making</li>
                        <li>• Ensure compliance with environmental</li>
                      </ul>
        
                      <button className="flex items-center group gap-2 bg-gradient-to-r from-[#0bccc1] to-[#07ebd1] text-white px-5 py-2 rounded-full font-medium hover:scale-105 transition">
                        Learn More
                        <span className="w-8 h-8 rounded-full bg-[#0c264b] text-[#07ebd1] flex items-center justify-center group-hover:translate-x-2 transition duration-300">
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
                      </button>
                    </motion.div>
        
                    {/* Card 2 */}
                    <motion.div
                      whileHover={{ y: -10 }}
                      className=" p-6 rounded-2xl bg-[#0c264b]/70 border border-[#0bccc1]/20 shadow-lg text-left transition duration-300"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-[#0bccc1] to-[#07ebd1] text-white rounded-full flex items-center justify-center mb-4">
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
                          className="lucide lucide-presentation-icon lucide-presentation"
                        >
                          <path d="M2 3h20" />
                          <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" />
                          <path d="m7 21 5-5 5 5" />
                        </svg>
                      </div>
        
                      <h2 className="relative z-10 text-white text-2xl font-bold mt-5 leading-tight">
                        Sustainability Planning
                      </h2>
        
                      <p className="relative z-10 text-gray-300 text-md leading-relaxed mt-6">
                        Strategic planning to reduce environmental footprint and improve
                        long-term responsibility.
                      </p>
        
                      {/* LINE */}
                      <div className="relative z-10 w-full h-0.5 bg-white/10 my-4"></div>
        
                      <ul className="relative z-10 text-sm text-gray-200 space-y-2 mb-6">
                        <li>• Conduct data study to assess impact</li>
                        <li>• Support informed decision-making</li>
                        <li>• Ensure compliance with environmental</li>
                      </ul>
        
                      <button className="flex items-center group gap-2 bg-gradient-to-r from-[#0bccc1] to-[#07ebd1] text-white px-5 py-2 rounded-full font-medium hover:scale-105 transition">
                        Learn More
                        <span className="w-8 h-8 rounded-full bg-[#0c264b] text-[#07ebd1] flex items-center justify-center group-hover:translate-x-2 transition duration-300">
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
                      </button>
                    </motion.div>
        
                    {/* Card 3 */}
                    <motion.div
                      whileHover={{ y: -10 }}
                      className=" p-6 rounded-2xl bg-[#0c264b]/70 border border-[#0bccc1]/20 shadow-lg text-left transition duration-300"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-[#0bccc1] to-[#07ebd1] text-white rounded-full flex items-center justify-center mb-4">
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
                          className="lucide lucide-globe-icon lucide-globe"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                          <path d="M2 12h20" />
                        </svg>
                      </div>
        
                      <h2 className="relative z-10 text-white text-2xl font-bold mt-5 leading-tight">
                        Nature Conservation
                      </h2>
        
                      <p className="relative z-10 text-gray-300 text-md leading-relaxed mt-6">
                        Protecting ecosystems and biodiversity through targeted
                        conservation initiatives.
                      </p>
        
                      {/* LINE */}
                      <div className="relative z-10 w-full h-0.5 bg-white/10 my-4"></div>
        
                      <ul className="relative z-10 text-sm text-gray-200 space-y-2 mb-6">
                        <li>• Conduct data study to assess impact</li>
                        <li>• Support informed decision-making</li>
                        <li>• Ensure compliance with environmental</li>
                      </ul>
        
                      <button className="flex items-center group gap-2 bg-gradient-to-r from-[#0bccc1] to-[#07ebd1] text-white px-5 py-2 rounded-full font-medium hover:scale-105 transition">
                        Learn More
                        <span className="w-8 h-8 rounded-full bg-[#0c264b] text-[#07ebd1] flex items-center justify-center group-hover:translate-x-2 transition duration-300">
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
                      </button>
                    </motion.div>
                  </motion.div>
                </div>
              </section>
        </>
    );
}