"use client";
import Image from "next/image";
import { motion } from "framer-motion";


export default function WhyChoseUs() {
    return (
        <>
        <section className="relative overflow-hidden bg-[#071c34] py-24 text-white">
        {/* 🔵 BACKGROUND GLOW */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.15),transparent_35%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* ================================================= */}
            {/* 🔵 LEFT CONTENT */}
            {/* ================================================= */}

            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* TAG */}
              <div className="inline-flex items-center gap-2 bg-[#0bccc1]/10 border border-[#0bccc1]/20 rounded-full px-6 py-3 mb-8">
                <span className="w-2 h-2 rounded-full bg-[#07ebd1] animate-pulse" />

                <span className="text-[#0bccc1] font-semibold text-sm">
                  why us chose
                </span>
              </div>

              {/* HEADING */}
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
                Purpose Led Environmental Solutions{" "}
                <span className="bg-gradient-to-r from-[#0bccc1] to-[#07ebd1] bg-clip-text text-transparent">
                  you Can Trust
                </span>
              </h1>

              {/* DESCRIPTION */}
              <p className="text-gray-300 text-lg leading-relaxed max-w-xl mb-14">
                Our work is guided by clear purpose, scientific knowledge, and
                ethical practices to ensure reliable and sustainable
                environmental outcomes.
              </p>

              {/* 🔵 CONTENT GRID */}
              <div className="grid md:grid-cols-[280px_1fr] gap-10 items-start">
                {/* STATS CARD */}
                <motion.div
                  whileHover={{ y: -8 }}
                  className="bg-white/5 border border-[#0bccc1]/20 backdrop-blur-xl rounded-3xl p-6 shadow-[0_0_40px_rgba(34,211,238,0.08)]"
                >
                  <div>
                    <h2 className="text-6xl font-bold text-[#0bccc1]">45K+</h2>

                    <p className="text-2xl mt-5 leading-snug font-semibold">
                      Trees Planted Through Conservation
                    </p>
                  </div>

                  <div className="w-full h-0.5 bg-white/10 my-10" />

                  <div>
                    <h2 className="text-6xl font-bold text-[#0bccc1]">80+</h2>

                    <p className="text-2xl mt-5 leading-snug font-semibold">
                      Communities Actively Supported
                    </p>
                  </div>
                </motion.div>

                {/* RIGHT INFO */}
                <div>
                  {/* ICON */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    className="w-15 h-15 rounded-full bg-gradient-to-r from-[#0bccc1] to-[#07ebd1] flex items-center justify-center shadow-[0_0_30px_rgba(34,211,238,0.4)] mb-8"
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
                      className="lucide lucide-leaf-icon lucide-leaf"
                    >
                      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                    </svg>
                  </motion.div>

                  {/* TITLE */}
                  <h3 className="text-4xl font-bold mb-5">
                    Sustainability Planning
                  </h3>

                  {/* TEXT */}
                  <p className="text-gray-300 text-lg leading-relaxed mb-8">
                    Strategic planning to reduce environmental footprint and
                    improve long term responsibility.
                  </p>

                  <div className="w-full h-0.5 bg-white/10 mb-8" />

                  {/* CHECK LIST */}
                  <div className="space-y-5">
                    <div className="flex items-center gap-4">
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
                        className="lucide lucide-circle-check-icon lucide-circle-check"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>

                      <p className="text-gray-300 text-lg">
                        Our planning focuses on realistic goals
                      </p>
                    </div>

                    <div className="flex items-center gap-4">
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
                        className="lucide lucide-circle-check-icon lucide-circle-check"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>

                      <p className="text-gray-300 text-lg">
                        We create structured sustainability plans help
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 🔵 BUTTON */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="group mt-16 flex items-center overflow-hidden rounded-full bg-gradient-to-r from-[#0bccc1] to-[#07ebd1]"
              >
                <span className="px-7 py-4 text-[#ffffff] text-xl font-semibold">
                  Learn More
                </span>

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
            </motion.div>

            {/* ================================================= */}
            {/* 🔵 RIGHT IMAGE LAYOUT */}
            {/* ================================================= */}

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative grid grid-cols-[1fr_280px] gap-6 items-center"
            >
              {/* BIG IMAGE */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative rounded-[32px] overflow-hidden"
              >
                <Image
                  src="/Biger.png"
                  alt="People"
                  width={700}
                  height={700}
                  className="w-full h-168 object-cover"
                />
              </motion.div>

              {/* RIGHT COLUMN */}
              <div className="flex flex-col gap-6">
                {/* TOP IMAGE */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="rounded-[32px] overflow-hidden"
                >
                  <Image
                    src="/long.jpg"
                    alt="Solar"
                    width={400}
                    height={350}
                    className="w-full h-[320px] object-cover"
                  />
                </motion.div>

                {/* BOTTOM IMAGE */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="rounded-[32px] overflow-hidden"
                >
                  <Image
                    src="/mid.jpg"
                    alt="Wind"
                    width={400}
                    height={350}
                    className="w-full h-[320px] object-cover"
                  />
                </motion.div>
              </div>

              {/* 🔵 ROTATING BADGE */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 12,
                  ease: "linear",
                }}
                className="absolute top-1/2 right-[180px] -translate-y-1/2 z-20"
              >
                <div className="relative w-44 h-44 flex items-center justify-center">
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
                      fill="#22d3ee"
                      fontSize="15"
                      fontWeight="700"
                      letterSpacing="3"
                    >
                      <textPath href="#circlePath">
                        • Contact Us • Contact Us • Contact Us •
                      </textPath>
                    </text>
                  </svg>

                  {/* CENTER */}
                  <div className="w-24 h-24 rounded-full bg-[#071c34] border border-[#0bccc1] flex items-center justify-center shadow-[0_0_40px_rgba(34,211,238,0.4)]">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#0bccc1] to-[#07ebd1] flex items-center justify-center">
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
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}


