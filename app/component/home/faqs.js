"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function FAQs() {
      const [active, setActive] = useState(0);
      const faqs = [
        {
          question: "Q1. How can we get started with your services?",
          answer:
            "We support sustainability through eco-friendly practices, community programs, renewable energy advocacy, and partnerships that encourage responsible environmental actions.",
        },
        {
          question: "Q2. How do you measure environmental impact?",
          answer:
            "We use measurable sustainability metrics, carbon tracking systems, environmental audits, and transparent reporting methods to evaluate long-term impact.",
        },
        {
          question: "Q3. How do you support sustainability initiatives?",
          answer:
            "Our team works with organizations and communities to implement renewable energy projects, conservation campaigns, and sustainable operational strategies.",
        },
        {
          question: "Q4. Do you provide reports and documentation?",
          answer:
            "Yes, we provide detailed environmental assessments, sustainability reports, compliance documentation, and strategic implementation plans.",
        },
        {
          question: "Q5. Can you help with regulatory compliance?",
          answer:
            "We assist businesses with environmental compliance, policy guidance, and sustainability frameworks aligned with international standards.",
        },
      ];
        const logos = [
            "Logoipsum",
            "Logoipsum",
            "Logoipsum",
            "Logoipsum",
            "Logoipsum",
        ];

        
    return (
        <>      
        <section className="relative overflow-hidden bg-[#09284b] py-20 md:py-28">
        {/* ================= BACKGROUND GLOW ================= */}

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#00d2c6]/10 blur-[160px]" />

        {/* FLOATING DOT */}

        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="absolute top-[22%] left-[62%] w-3 h-3 rounded-full bg-[#00d2c6]"
        />

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          {/* ================================================= */}
          {/* MAIN GRID */}
          {/* ================================================= */}

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-start">
            {/* ================================================= */}
            {/* LEFT SIDE */}
            {/* ================================================= */}

            <motion.div
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              {/* TAG */}

              <div className="inline-flex items-center gap-2 bg-[#123a63] border border-[#334155] rounded-full px-5 py-2">
                <div className="w-2 h-2 rounded-full bg-[#00d2c6]" />

                <span className="text-white font-medium text-sm md:text-base">
                  Frequently Asked Questions
                </span>
              </div>

              {/* HEADING */}

              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[1.1] mt-8 max-w-[700px]">
                Clear Information About Our Environmental Approach
              </h2>

              {/* PARAGRAPH */}

              <p className="text-[#cbd5e1] text-lg leading-relaxed mt-8 max-w-[650px]">
                Explore detailed yet easy to understand information about our
                environmental practices, conservation efforts, and long-term
                sustainability strategies.
              </p>

              {/* ================================================= */}
              {/* PROGRESS SECTION */}
              {/* ================================================= */}

              <div className="mt-14 flex flex-col lg:flex-row lg:items-center gap-12">
                {/* PROGRESS BARS */}

                <div className="flex-1 space-y-10">
                  {/* ITEM 1 */}

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-white text-2xl font-bold">
                        Climate Action
                      </h4>

                      <span className="text-[#00d2c6] text-2xl font-black">
                        95%
                      </span>
                    </div>

                    <div className="w-full h-3 rounded-full bg-[#123a63] overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "95%" }}
                        transition={{ duration: 1 }}
                        className="h-full rounded-full bg-[#00d2c6]"
                      />
                    </div>
                  </div>

                  {/* ITEM 2 */}

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-white text-2xl font-bold">
                        Renewable Energy
                      </h4>

                      <span className="text-[#00d2c6] text-2xl font-black">
                        90%
                      </span>
                    </div>

                    <div className="w-full h-3 rounded-full bg-[#123a63] overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "90%" }}
                        transition={{ duration: 1.2 }}
                        className="h-full rounded-full bg-[#00d2c6]"
                      />
                    </div>
                  </div>
                </div>

                {/* ROTATING BADGE */}

                <div className="flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 18,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="relative w-44 h-44 rounded-full border-[10px] border-[#00d2c6] bg-[#123a63] flex items-center justify-center"
                  >
                    <div className="absolute inset-0 rounded-full border border-[#334155]" />

                    <div className="text-center">
                      <div className="text-5xl text-[#00d2c6]">✺</div>
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-[85%] h-[85%] rounded-full border border-dashed border-[#00d2c6]/40" />
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* ================================================= */}
            {/* FAQ RIGHT SIDE */}
            {/* ================================================= */}

            <motion.div
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="space-y-6"
            >
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`rounded-[28px] overflow-hidden border transition-all duration-500 ${
                    active === index
                      ? "bg-[#123a63] border-[#00d2c6]"
                      : "bg-[#123a63]/50 border-[#334155]"
                  }`}
                >
                  {/* QUESTION */}

                  <button
                    onClick={() => setActive(active === index ? -1 : index)}
                    className={`w-full flex items-center justify-between gap-5 px-8 py-7 text-left transition-all duration-300 ${
                      active === index
                        ? "bg-[#00d2c6] text-[#09284b]"
                        : "text-white hover:bg-[#123a63]"
                    }`}
                  >
                    <span className="text-xl md:text-2xl font-bold leading-snug">
                      {faq.question}
                    </span>

                    {active === index ? (
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
                        className="lucide lucide-chevron-up-icon lucide-chevron-up"
                      >
                        <path d="m18 15-6-6-6 6" />
                      </svg>
                    ) : (
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
                        className="lucide lucide-chevron-up-icon lucide-chevron-up"
                      >
                        <path d="m18 15-6-6-6 6" />
                      </svg>
                    )}
                  </button>

                  {/* ANSWER */}

                  <motion.div
                    initial={false}
                    animate={{
                      height: active === index ? "auto" : 0,
                      opacity: active === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 pt-6">
                      <p className="text-[#cbd5e1] text-lg leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ================================================= */}
          {/* BOTTOM LOGOS */}
          {/* ================================================= */}

          <div className="mt-24">
            {/* LINE + TITLE */}

            <div className="flex items-center gap-6">
              <div className="flex-1 h-[1px] bg-[#334155]" />

              <h3 className="text-white text-xl md:text-2xl font-bold text-center whitespace-nowrap">
                Trusted by Leading Environmental Partners
              </h3>

              <div className="flex-1 h-[1px] bg-[#334155]" />
            </div>

            {/* LOGOS */}

            {/* Infinite Marquee */}
            <div className="mt-14 overflow-hidden relative">
              {/* Fade edges */}
              <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#0c264b] to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#0c264b] to-transparent z-10 pointer-events-none" />

              <motion.div
                className="flex gap-8 w-max"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  duration: 18,
                  ease: "linear",
                  repeat: Infinity,
                }}
              >
                {[...logos, ...logos].map((logo, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center gap-3 rounded-2xl border border-[#334155] bg-[#123a63]/40 px-8 py-6 min-w-max"
                  >
                    {/* ICON */}
                    <div className="w-14 h-14 rounded-full bg-[#00d2c6]/20 flex items-center justify-center">
                      <div className="w-7 h-7 rounded-full border-4 border-[#00d2c6]" />
                    </div>

                    {/* TEXT */}
                    <span className="text-white text-2xl font-black">
                      {logo}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
        </>
    );
}