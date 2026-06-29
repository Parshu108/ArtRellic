"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function WhyChoseUs() {
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", { name, companyName, email, phone, message });
  }
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

            {/* ================= RIGHT FORM ================= */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-center"
            >
              {/* Heading */}
              <h1 className="max-w-2xl text-3xl font-bold leading-tight text-white md:text-5xl">
                Contact Us
                <span className="block bg-gradient-to-r from-[#0bccc1] to-[#07ebd1] bg-clip-text text-transparent">
                  Today!
                </span>
              </h1>

              {/* Description */}
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-[#b8c5d6]">
                Whether you&apos;re looking for guidance, collaboration, or
                support, contact us today and our team will be happy to assist
                you.
              </p>

              {/* Form */}
              <form className="mt-6 space-y-8">
                {/* Row */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {/* Name */}
                  <div>
                    <label className="mb-2 block text-lg font-semibold text-white">
                      Name:
                    </label>

                    <input
                      type="text"
                      placeholder="Enter Name *"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="h-12 w-full rounded-2xl border border-[#0bccc1]/20 bg-[#102f5c] px-6 text-white outline-none placeholder:text-[#b8c5d6]/60 focus:border-[#07ebd1]"
                    />
                  </div>

                  {/* Company Name */}
                  <div>
                    <label className="mb-2 block text-lg font-semibold text-white">
                      Company Name:
                    </label>

                    <input
                      type="text"
                      placeholder="Enter Company Name *"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="h-12 w-full rounded-2xl border border-[#0bccc1]/20 bg-[#102f5c] px-6 text-white outline-none placeholder:text-[#b8c5d6]/60 focus:border-[#07ebd1]"
                    />
                  </div>
                </div>

                {/* Row */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {/* Email */}
                  <div>
                    <label className="mb-1 block text-lg font-semibold text-white">
                      Email Address:
                    </label>

                    <input
                      type="email"
                      placeholder="Enter Email Address *"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-12 w-full rounded-2xl border border-[#0bccc1]/20 bg-[#102f5c] px-6 text-white outline-none placeholder:text-[#b8c5d6]/60 focus:border-[#07ebd1]"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="mb-1 block text-lg font-semibold text-white">
                      Phone Number:
                    </label>

                    <input
                      type="text"
                      placeholder="Enter Phone Number *"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="h-12 w-full rounded-2xl border border-[#0bccc1]/20 bg-[#102f5c] px-6 text-white outline-none placeholder:text-[#b8c5d6]/60 focus:border-[#07ebd1]"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="mb-1 block text-lg font-semibold text-white">
                    Message:
                  </label>

                  <textarea
                    rows={6}
                    placeholder="Any Additional Message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full rounded-3xl border border-[#0bccc1]/20 bg-[#102f5c] p-6 text-white outline-none placeholder:text-[#b8c5d6]/60 focus:border-[#07ebd1]"
                  />
                </div>

                {/* Button */}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  className="group flex w-full items-center justify-center gap-5 rounded-full bg-[#0bccc1] px-4 py-2 text-2xl font-bold text-white shadow-xl shadow-[#07ebd1]/20 transition-all duration-300 hover:bg-[#07ebd1]"
                  onClick={handleSubmit}
                >
                  Submit Message
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0c264b] text-[#07ebd1] transition duration-300 group-hover:translate-x-1">
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
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
