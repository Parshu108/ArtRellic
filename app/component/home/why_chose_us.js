"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function WhyChoseUs() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#071c34] py-24 text-white">
        {/* 🔵 BACKGROUND GLOW */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.15),transparent_35%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4">
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
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Purpose-Built Technology Solutions{" "}
                <span className="bg-gradient-to-r from-[#0bccc1] to-[#07ebd1] bg-clip-text text-transparent">
                  you Can Trust
                </span>
              </h1>

              {/* DESCRIPTION */}
              <p className="text-gray-300 text-lg leading-relaxed max-w-xl mb-4">
                We develop indigenous software solutions designed around your
                unique business needs. Instead of adapting your processes to
                generic products, we build technology that fits your goals,
                workflows, and future growth plans.
              </p>

              {/* 🔵 CONTENT GRID */}
              <div className="grid md:grid-cols-[280px_1fr] gap-10 items-start">
                <div>
                  {/* STATS CARD */}
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="bg-white/5 h-110 border border-[#0bccc1]/20 backdrop-blur-xl rounded-3xl p-6 shadow-[0_0_40px_rgba(34,211,238,0.08)]"
                  >
                    <div>
                      <h2 className="text-6xl font-bold text-[#0bccc1]">
                        500+
                      </h2>

                      <p className="text-2xl mt-5 leading-snug font-semibold">
                        Successful Features Delivered
                      </p>
                    </div>

                    <div className="w-full h-0.5 bg-white/10 my-10" />

                    <div>
                      <h2 className="text-6xl font-bold text-[#0bccc1]">50+</h2>

                      <p className="text-2xl mt-5 leading-snug font-semibold">
                        Projects Completed Across Industries
                      </p>
                    </div>
                  </motion.div>
                  {/* 🔵 BUTTON */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="group ml-2 mt-12  flex items-center overflow-hidden rounded-full bg-gradient-to-r from-[#0bccc1] to-[#07ebd1]"
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
                </div>

                {/* RIGHT INFO */}
                <div className="flex flex-col justify-between h-full ">
                  {/* ICON */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    className="w-14 h-14 rounded-full bg-gradient-to-r from-[#0bccc1] to-[#07ebd1] flex items-center justify-center shadow-[0_0_30px_rgba(34,211,238,0.4)] mb-2"
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
                  <h3 className="text-3xl font-bold mb-2">
                    Indigenous Solution Development
                  </h3>

                  {/* TEXT */}
                  <p className="text-gray-300 text-md leading-relaxed mb-3">
                    Our team creates custom-built digital solutions from the
                    ground up, ensuring every feature serves a real business
                    purpose and delivers measurable value.
                  </p>

                  <div className="w-full h-0.5 bg-white/10 mb-2" />

                  {/* CHECK LIST */}
                  <div className="grid grid-cols-1  gap-x-4 gap-y-2">
                    {[
                      "Tailored solutions designed specifically for your business requirements",
                      "Scalable architecture built to support long-term growth",
                      "Focus on performance, security, and reliability from day one",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4">
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
                          className="lucide lucide-circle-check shrink-0"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <path d="m9 12 2 2 4-4" />
                        </svg>
                        <p className="text-gray-300 text-sm">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
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
                className="relative rounded-4xl overflow-hidden"
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
                  className="rounded-4xl overflow-hidden"
                >
                  <Image
                    src="/long.jpg"
                    alt="Solar"
                    width={400}
                    height={350}
                    className="w-full h-80 object-cover"
                  />
                </motion.div>

                {/* BOTTOM IMAGE */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="rounded-4xl overflow-hidden"
                >
                  <Image
                    src="/mid.jpg"
                    alt="Wind"
                    width={400}
                    height={350}
                    className="w-full h-80 object-cover"
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
