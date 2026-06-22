"use client";
import { motion } from "framer-motion";

export default function OurStory() {
    return (
        <>
              <section className="relative min-h-screen overflow-hidden bg-[#071c34] text-white">
                {/* 🔵 Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: "url('/service3.jpg')",
                  }}
                />
        
                {/* 🔵 Dark Overlay */}
                <div className="absolute inset-0 bg-[#071c34]/70" />
        
                {/* 🔵 Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#071c34] via-[#071c34]/60 to-transparent" />
        
                {/* 🔵 Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
                  {/* TAG */}
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 bg-[#0bccc1]/10 border border-[#0bccc1]/20 rounded-full px-6 py-3 mb-8"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#07ebd1] animate-pulse" />
        
                    <span className="text-[#0bccc1] font-semibold text-sm">
                      watch our story
                    </span>
                  </motion.div>
        
                  {/* HEADING */}
                  <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="max-w-4xl text-5xl md:text-7xl font-bold leading-tight"
                  >
                    From Awareness to Action Our Mission{" "}
                    <span className="bg-gradient-to-r from-[#0bccc1] to-[#07ebd1] bg-clip-text text-transparent">
                      in Motion
                    </span>
                  </motion.h1>
        
                  {/* PARAGRAPH */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="max-w-2xl mt-8 text-lg text-gray-300 leading-relaxed"
                  >
                    We guide individuals and organizations from understanding
                    environmental challenges to taking meaningful actions that create
                    real, lasting impact.
                  </motion.p>
        
                  {/* 🔵 CARDS */}
                  <div className="grid md:grid-cols-2 gap-8 mt-16 max-w-4xl">
                    {/* CARD 1 */}
                    <motion.div
                      whileHover={{ y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl"
                    >
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#0bccc1] to-[#07ebd1] flex items-center justify-center mb-8">
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
                          className="lucide lucide-users-round-icon lucide-users-round"
                        >
                          <path d="M18 21a8 8 0 0 0-16 0" />
                          <circle cx="10" cy="8" r="5" />
                          <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" />
                        </svg>
                      </div>
        
                      <h2 className="text-5xl font-bold mb-2">5,000+</h2>
        
                      <h3 className="text-[#0bccc1] text-2xl font-semibold mb-6">
                        Volunteers Engaged
                      </h3>
        
                      <div className="w-full h-[1px] bg-white/10 mb-6" />
        
                      <p className="text-gray-300 leading-relaxed">
                        Volunteers making a difference by contributing their energy,
                        skills, and time to protect.
                      </p>
                    </motion.div>
        
                    {/* CARD 2 */}
                    <motion.div
                      whileHover={{ y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl"
                    >
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#0bccc1] to-[#07ebd1] flex items-center justify-center mb-8">
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
                          className="lucide lucide-leaf-icon lucide-leaf"
                        >
                          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                        </svg>
                      </div>
        
                      <h2 className="text-5xl font-bold mb-2">150+</h2>
        
                      <h3 className="text-[#0bccc1] text-2xl font-semibold mb-6">
                        Community Projects
                      </h3>
        
                      <div className="w-full h-0.5 bg-white/10 mb-6" />
        
                      <p className="text-gray-300 leading-relaxed">
                        Environmental initiatives and programs carried out to engage
                        communities effectively.
                      </p>
                    </motion.div>
                  </div>
        
                  {/* 🔵 BUTTON + VIDEO */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between mt-20 gap-10">
                    {/* BUTTON */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="group flex items-center w-fit bg-gradient-to-r from-[#0bccc1] to-[#07ebd1] text-[#ffffff] font-semibold rounded-full overflow-hidden"
                    >
                      <span className="px-8 py-5 text-lg">View More Videos</span>
        
                      <span className="w-16 h-16 rounded-full bg-[#0c264b] text-[#07ebd1] flex items-center justify-center group-hover:translate-x-2 transition duration-300">
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
        
                    {/* 🔵 ROTATING VIDEO BUTTON */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        repeat: Infinity,
                        duration: 12,
                        ease: "linear",
                      }}
                      className="relative w-52 h-52 flex items-center justify-center"
                    >
                      {/* SVG TEXT */}
                      <svg viewBox="0 0 200 200" className="absolute w-full h-full">
                        <defs>
                          <path
                            id="circlePath"
                            d="
                            M 100,100
                            m -75,0
                            a 75,75 0 1,1 150,0
                            a 75,75 0 1,1 -150,0
                          "
                          />
                        </defs>
        
                        <text
                          fill="white"
                          fontSize="14"
                          fontWeight="600"
                          letterSpacing="3"
                        >
                          <textPath href="#circlePath">
                            • WATCH OUR VIDEO • WATCH OUR VIDEO •
                          </textPath>
                        </text>
                      </svg>
        
                      {/* CENTER PLAY */}
                      <div className="w-24 h-24 rounded-full border border-[#0bccc1] bg-[#071c34]/80 backdrop-blur-xl flex items-center justify-center shadow-2xl">
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
                      </div>
                    </motion.div>
                  </div>
                </div>
              </section>
        </>
    );
}