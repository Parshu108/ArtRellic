"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Features() {
      const featuresLeft = [
    {
      icon: (
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
          className="lucide lucide-workflow-icon lucide-workflow"
        >
          <rect width="8" height="8" x="3" y="3" rx="2" />
          <path d="M7 11v4a2 2 0 0 0 2 2h4" />
          <rect width="8" height="8" x="13" y="13" rx="2" />
        </svg>
      ),
      title: "Science-Driven Approach",
      desc: "We use research, data, & proven practice to ensure accurate assessment.",
    },
    {
      icon: (
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
          className="lucide lucide-trees-icon lucide-trees"
        >
          <path d="M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z" />
          <path d="M7 16v6" />
          <path d="M13 19v3" />
          <path d="M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5" />
        </svg>
      ),
      title: "Sustainable Solutions",
      desc: "Our initiatives are designed to balance environmental protection.",
    },
  ];
      const featuresRight = [
    {
      icon: (
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
          className="lucide lucide-shapes-icon lucide-shapes"
        >
          <path d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
          <circle cx="17.5" cy="17.5" r="3.5" />
        </svg>
      ),
      title: "Community-Focused Action",
      desc: "We actively involve communities to create awareness, encourage impact.",
    },
    {
      icon: (
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
          className="lucide lucide-badge-dollar-sign-icon lucide-badge-dollar-sign"
        >
          <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
          <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
          <path d="M12 18V6" />
        </svg>
      ),
      title: "Ethical Practices",
      desc: "We operate with honesty & accountable, ensure trust, compliance.",
    },
  ];
    return (
        <>
              <section className="relative overflow-hidden bg-[#eef1ec] py-24">
                {/* BACKGROUND BIG TEXT */}
                <h1 className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 text-[220px] font-black uppercase tracking-wider text-[#0bccc1]/20 select-none hidden lg:block">
                  ARTRELIC
                </h1>
        
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="bg-[#0bccc1]/10 border border-[#0bccc1]/20 text-slate-700 px-6 py-3 rounded-full text-sm inline-block"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#07ebd1] animate-pulse" />
        
                      <span className="text-[#0bccc1] font-semibold text-md">
                        our features
                      </span>
                    </motion.div>
                  </div>
                  {/* Heading */}
                  <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className=" w-auto text-5xl md:text-4xl font-bold text-center py-10 px-10  text-black leading-tight"
                  >
                    Helping Communities, Organizations,& Individuals Take Concrete Step
                    Toward a Healthier Planet
                  </motion.h2>
        
                  <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-gray-700 max-w-2xl text-center mx-auto mb-12"
                  >
                    Offering trusted environmental services...
                  </motion.p>
                  <div className="grid lg:grid-cols-3 gap-10 items-center">
                    {/* ================= LEFT CARDS ================= */}
                    <div className="space-y-10">
                      {featuresLeft.map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -80 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.7,
                            delay: index * 0.2,
                          }}
                          whileHover={{
                            y: -8,
                          }}
                          className="bg-[#0bccc1]/10 border border-[#0bccc1]/20 rounded-[30px] p-10 shadow-sm hover:shadow-2xl transition duration-500"
                        >
                          {/* ICON */}
                          <motion.div
                            whileHover={{
                              rotate: 10,
                              scale: 1.1,
                            }}
                            className="w-16 h-16 rounded-full bg-gradient-to-r from-[#0bccc1] to-[#07ebd1] flex items-center justify-center text-black shadow-lg"
                          >
                            {item.icon}
                          </motion.div>
        
                          {/* TITLE */}
                          <h2 className="text-[36px] font-bold text-black mt-8 leading-tight">
                            {item.title}
                          </h2>
        
                          {/* DESC */}
                          <p className="text-gray-500 text-lg leading-relaxed mt-5">
                            {item.desc}
                          </p>
                        </motion.div>
                      ))}
                    </div>
        
                    {/* ================= CENTER IMAGE ================= */}
                    <motion.div
                      initial={{ opacity: 0, y: 60 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                      className="relative flex justify-center mt-20 "
                    >
                      {/* GLOW */}
                      <div className="absolute w-96 h-96 bg-secondary/20 blur-[120px] rounded-full bottom-0" />
        
                      <Image
                        src="/worker.png"
                        alt="Worker"
                        width={520}
                        height={780}
                        className="relative z-10 object-contain h-165 "
                      />
                    </motion.div>
        
                    {/* ================= RIGHT CARDS ================= */}
                    <div className="space-y-10">
                      {featuresRight.map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: 80 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.7,
                            delay: index * 0.2,
                          }}
                          whileHover={{
                            y: -8,
                          }}
                          className="bg-[#0bccc1]/10 border border-[#0bccc1]/20 rounded-[30px] p-10 shadow-sm hover:shadow-2xl transition duration-500"
                        >
                          {/* ICON */}
                          <motion.div
                            whileHover={{
                              rotate: -10,
                              scale: 1.1,
                            }}
                            className="w-16 h-16 rounded-full bg-gradient-to-r from-[#0bccc1] to-[#07ebd1]  flex items-center justify-center text-black shadow-lg"
                          >
                            {item.icon}
                          </motion.div>
        
                          {/* TITLE */}
                          <h2 className="text-[36px] font-bold text-[#081c15] mt-8 leading-tight">
                            {item.title}
                          </h2>
        
                          {/* DESC */}
                          <p className="text-gray-500 text-lg leading-relaxed mt-5">
                            {item.desc}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
        </>
    );
}