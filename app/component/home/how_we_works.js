"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HowWeWork() {
      const process = [
        {
          step: "Step 01",
          title: "Awareness & Education",
          desc: "We educate communities & organizations about key environmental issues.",
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
              className="lucide lucide-briefcase-business-icon lucide-briefcase-business"
            >
              <path d="M12 12h.01" />
              <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
              <path d="M22 13a18.15 18.15 0 0 1-20 0" />
              <rect width="20" height="14" x="2" y="6" rx="2" />
            </svg>
          ),
          points: [
            "Share actionable sustainability tips",
            "Conduct workshop & seminar educate",
          ],
          image: "/service2.jpg",
          dark: true,
        },
    
        {
          step: "Step 02",
          title: "Planning & Strategy",
          desc: "Our team design practical, research back strategie that address environment.",
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
              className="lucide lucide-clipboard-list-icon lucide-clipboard-list"
            >
              <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
              <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
              <path d="M12 11h4" />
              <path d="M12 16h4" />
              <path d="M8 11h.01" />
              <path d="M8 16h.01" />
            </svg>
          ),
          points: [
            "Align strategies with community need",
            "Assess environmental opportunity",
          ],
          image: "/service1.jpg",
          dark: true,
        },
    
        {
          step: "Step 03",
          title: "Action & Implementation",
          desc: "We implement projects on the ground, from conservation efforts.",
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
              className="lucide lucide-locate-fixed-icon lucide-locate-fixed"
            >
              <line x1="2" x2="5" y1="12" y2="12" />
              <line x1="19" x2="22" y1="12" y2="12" />
              <line x1="12" x2="12" y1="2" y2="5" />
              <line x1="12" x2="12" y1="19" y2="22" />
              <circle cx="12" cy="12" r="7" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          ),
          points: [
            "Launch community driven campaigns",
            "Execute conservate project like habitat",
          ],
          image: "/service3.jpg",
          dark: true,
        },
      ];
    return (
        <>
              <section className="relative overflow-hidden bg-[#071c34] py-24">
                {/* FLOATING DOT */}
                <motion.div
                  animate={{
                    y: [0, -25, 0],
                    x: [0, 10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                  className="absolute right-[28%] top-44 w-4 h-4 rounded-full bg-secondary"
                />
        
                <div className="max-w-7xl mx-auto px-6">
                  {/* TOP TAG */}
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="bg-[#0bccc1]/10 border border-[#0bccc1]/20 text-slate-700 px-6 py-3 rounded-full text-sm inline-block"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#07ebd1] animate-pulse" />
        
                      <span className="text-[#0bccc1] font-semibold text-md">
                        How It work
                      </span>
                    </motion.div>
                  </div>
        
                  {/* HEADING */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-center mt-10"
                  >
                    <h1 className="text-5xl md:text-7xl font-black text-[#ffffff] leading-tight">
                      From Awareness to Action
                    </h1>
        
                    <p className="text-gray-500 text-lg max-w-3xl mx-auto mt-8 leading-relaxed">
                      We guide individuals and organizations from understanding
                      environmental challenges to taking meaningful actions that create
                      real, lasting impact.
                    </p>
                  </motion.div>
        
                  {/* STEP LINE */}
                  <div className="hidden lg:block relative mt-28">
                    <div className="absolute top-6 left-0 w-full h-0.5 bg-gray-300"></div>
        
                    <div className="grid grid-cols-3 relative z-10">
                      {process.map((item, index) => (
                        <div key={index} className="flex justify-center">
                          <div
                            className={`px-8 py-3 rounded-full text-lg font-bold shadow-md
                          ${
                            item.dark
                              ? "bg-[#081c15] text-white"
                              : "bg-secondary text-black"
                          }`}
                          >
                            {item.step}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
        
                  {/* MOBILE STEP */}
                  <div className="lg:hidden flex flex-wrap gap-4 justify-center mt-6">
                    {process.map((item, index) => (
                      <div
                        key={index}
                        className={`px-6 py-2 rounded-full font-semibold
                      ${
                        item.dark
                          ? "bg-[#081c15] text-white"
                          : "bg-secondary text-black"
                      }`}
                      >
                        {item.step}
                      </div>
                    ))}
                  </div>
        
                  {/* CARDS */}
                  <div className="grid lg:grid-cols-3 gap-8 mt-10">
                    {process.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{
                          opacity: 0,
                          y: 70,
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          duration: 0.7,
                          delay: index * 0.2,
                        }}
                        whileHover={{
                          y: -10,
                        }}
                        className={`relative overflow-hidden rounded-4xl border border-gray-200
                      ${item.dark ? "bg-[#0c264b] text-[#f5f7f4]" : "bg-[#f5f7f4] text-[#0c264b]"}`}
                      >
                        {/* IMAGE CARD */}
                        {item.image && (
                          <>
                            <Image
                              src={item.image}
                              alt={item.title}
                              width={600}
                              height={700}
                              className="absolute inset-0 w-full h-full object-cover"
                            />
        
                            <div className="absolute inset-0 bg-[#081c15]/45"></div>
                          </>
                        )}
        
                        {/* CONTENT */}
                        <div className="relative z-10 p-10 min-h-80 flex flex-col">
                          {/* ICON */}
                          <motion.div
                            whileHover={{
                              rotate: 10,
                              scale: 1.1,
                            }}
                            className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg bg-gradient-to-r from-[#0bccc1] to-[#07ebd1]
                          ${
                            item.dark
                              ? "bg-secondary text-[#ffffff]"
                              : "bg-white text-[#ffffff]"
                          }`}
                          >
                            {item.icon}
                          </motion.div>
        
                          {/* TITLE */}
                          <h2 className="text-4xl text-[#ffffff] font-bold mt-4 leading-tight">
                            {item.title}
                          </h2>
        
                          {/* DESC */}
                          <p
                            className={`mt-3 text-lg leading-relaxed
                          ${item.dark ? "text-gray-300" : "text-gray-500"}`}
                          >
                            {item.desc}
                          </p>
        
                          {/* LINE */}
                          <div
                            className={`w-full h-0.5 mt-5
                          ${item.dark ? "bg-[#0bccc1]/90" : "bg-[#07ebd1]"}`}
                          ></div>
        
                          {/* POINTS */}
                          <div className="mt-5 space-y-6">
                            {item.points.map((point, i) => (
                              <motion.div
                                key={i}
                                whileHover={{ x: 8 }}
                                className="flex items-center gap-4"
                              >
                                <span className="w-2 h-2 rounded-full bg-secondary"></span>
        
                                <p
                                  className={`text-lg
                                ${item.dark ? "text-gray-300" : "text-gray-500"}`}
                                >
                                  {point}
                                </p>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>
        </>
    );
}