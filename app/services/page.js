"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "Their conservation programs brought real change to our local community. The approach was practical, transparent, and focused on long-term impact.",
    name: "Jerome Bell",
    role: "Community Project Lead",
    image: "/user1.jpg",
  },
  {
    quote:
      "We appreciated their hands-on support and deep understanding of environmental challenges. The results were measurable and meaningful.",
    name: "Jane Cooper",
    role: "Environmental Consultant",
    image: "/user2.jpg",
  },
  {
    quote:
      "Their sustainability initiatives inspired our organization to take stronger action for a cleaner and healthier future.",
    name: "Eleanor Pena",
    role: "Community Project Lead",
    image: "/user4.jpg",
  },
];

const benefits = [
  {
    title: "Proven Environmental Impact",
    description:
      "We deliver measurable results through well planned sustainability initiatives, conservation programs.",
  },
  {
    title: "Community Focus Approach",
    description:
      "Our solutions are built around people. We work closely with local communities and partners.",
  },
  {
    title: "Data-Driven & Transparent",
    description:
      "We rely on research, clear reporting, and performance tracking to ensure every action is effective and accountable.",
  },
];

const tags = [
  "Climate Change",
  "Environmental Awareness",
  "Community Engagement",
  "Wildlife Protection",
];

 const logos = [
   "Logoipsum",
   "Logoipsum",
   "Logoipsum",
   "Logoipsum",
   "Logoipsum",
 ];

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

const page = () => {
  const [active, setActive] = useState(0);
  return (
    <>
      {/* ============================================================
                HERO — 70% navy bg, 10% teal accent breadcrumb
            ============================================================ */}
      <section className="relative h-[70vh] min-h-[560px] overflow-hidden bg-[#0c264b]">
        <div className="absolute inset-0">
          <Image
            src="/aboutbig.jpg"
            alt="About Hero"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c264b]/40 via-[#0bccc1]/10 to-transparent" />
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#0c264b]/50 to-transparent" />

        <div className="relative z-20 h-[calc(100%-96px)] flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-3xl md:text-4xl xl:text-[80px] font-black text-[#f5f7f4] leading-none"
            >
              Our Services
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="flex items-center justify-center gap-4 mt-8"
            >
              {/* 30% off-white links, 10% teal separator */}
              <Link
                href="/"
                className="text-[#f5f7f4] text-xl hover:text-[#0bccc1] transition duration-300"
              >
                Home
              </Link>
              <span className="text-[#0bccc1] text-xl">/</span>
              <span className="text-[#f5f7f4] text-xl font-semibold">
                Services
              </span>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0c264b] to-transparent z-10" />
      </section>

      <section className="bg-[#ffffff] text-[#0c264b] py-20">
        <div className="relative z-10 max-w-8xl mx-auto px-8">
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
            className="grid md:grid-cols-3 gap-8 mt-16 group relative overflow-hidden rounded-[34px] border border-white/10 bg-white/10 backdrop-blur-xl p-10 shadow-2xl"
          >
            {/* Card 1 */}
            <motion.div
              whileHover={{ y: -10 }}
              className=" p-6 rounded-2xl bg-[#0c264b] border border-[#0bccc1] shadow-lg text-left transition duration-300"
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
              <div className="relative z-10 w-full h-0.5 bg-white/60 my-4"></div>

              <ul className="relative z-10 space-y-2 text-gray-200 text-sm mb-6">
                <li>• Conduct data study to assess impact</li>
                <li>• Support informed decision-making</li>
                <li>• Ensure compliance with environmental</li>
              </ul>

              <button className="flex items-center gap-2 bg-gradient-to-r from-[#0bccc1] to-[#07ebd1] text-white px-5 py-2 rounded-full font-medium hover:scale-105 transition">
                Read More
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
              className=" p-6 rounded-2xl bg-[#0c264b] border border-[#0bccc1] shadow-lg text-left transition duration-300"
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
              <div className="relative z-10 w-full h-0.5 bg-white/60 my-4"></div>

              <ul className="relative z-10 text-sm text-gray-200 space-y-2 mb-6">
                <li>• Conduct data study to assess impact</li>
                <li>• Support informed decision-making</li>
                <li>• Ensure compliance with environmental</li>
              </ul>

              <button className="flex items-center gap-2 bg-gradient-to-r from-[#0bccc1] to-[#07ebd1] text-white px-5 py-2 rounded-full font-medium hover:scale-105 transition">
                Read More
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
              className=" p-6 rounded-2xl bg-[#0c264b] border border-[#0bccc1] shadow-lg text-left transition duration-300"
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
              <div className="relative z-10 w-full h-0.5 bg-white/60 my-4"></div>

              <ul className="relative z-10 text-sm text-gray-200 space-y-2 mb-6">
                <li>• Conduct data study to assess impact</li>
                <li>• Support informed decision-making</li>
                <li>• Ensure compliance with environmental</li>
              </ul>

              <button className="flex items-center gap-2 bg-gradient-to-r from-[#0bccc1] to-[#07ebd1] text-white px-5 py-2 rounded-full font-medium hover:scale-105 transition">
                Read More
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

            {/* Card 4 */}
            <motion.div
              whileHover={{ y: -10 }}
              className=" p-6 rounded-2xl bg-[#0c264b] border border-[#0bccc1] shadow-lg text-left transition duration-300"
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
                  className="lucide lucide-circle-dollar-sign-icon lucide-circle-dollar-sign"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
                  <path d="M12 18V6" />
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
              <div className="relative z-10 w-full h-0.5 bg-white/60 my-4"></div>

              <ul className="relative z-10 space-y-2 text-gray-200 text-sm mb-6">
                <li>• Conduct data study to assess impact</li>
                <li>• Support informed decision-making</li>
                <li>• Ensure compliance with environmental</li>
              </ul>

              <button className="flex items-center gap-2 bg-gradient-to-r from-[#0bccc1] to-[#07ebd1] text-white px-5 py-2 rounded-full font-medium hover:scale-105 transition">
                Read More
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

            {/* Card 5 */}
            <motion.div
              whileHover={{ y: -10 }}
              className=" p-6 rounded-2xl bg-[#0c264b] border border-[#0bccc1] shadow-lg text-left transition duration-300"
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
                  className="lucide lucide-life-buoy-icon lucide-life-buoy"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m4.93 4.93 4.24 4.24" />
                  <path d="m14.83 9.17 4.24-4.24" />
                  <path d="m14.83 14.83 4.24 4.24" />
                  <path d="m9.17 14.83-4.24 4.24" />
                  <circle cx="12" cy="12" r="4" />
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
              <div className="relative z-10 w-full h-0.5 bg-white/60 my-4"></div>

              <ul className="relative z-10 space-y-2 text-gray-200 text-sm mb-6">
                <li>• Conduct data study to assess impact</li>
                <li>• Support informed decision-making</li>
                <li>• Ensure compliance with environmental</li>
              </ul>

              <button className="flex items-center gap-2 bg-gradient-to-r from-[#0bccc1] to-[#07ebd1] text-white px-5 py-2 rounded-full font-medium hover:scale-105 transition">
                Read More
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

            {/* Card 6 */}
            <motion.div
              whileHover={{ y: -10 }}
              className=" p-6 rounded-2xl bg-[#0c264b] border border-[#0bccc1] shadow-lg text-left transition duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-[#0bccc1] to-[#07ebd1] text-white rounded-full flex items-center justify-center mb-4">
                <Image
                  src="/service.svg"
                  alt="service icon"
                  width={20}
                  height={20}
                />
              </div>

              <h2 className="relative z-10 text-white text-2xl font-bold mt-5 leading-tight">
                Environmental Research
              </h2>

              <p className="relative z-10 text-gray-300 text-md leading-relaxed mt-6">
                Driven study to understand environmental impact and support
                sustainable decisions.
              </p>

              {/* LINE */}
              <div className="relative z-10 w-full h-0.5 bg-white/60 my-4"></div>

              <ul className="relative z-10 space-y-2 text-gray-200 text-sm mb-6">
                <li>• Conduct data study to assess impact</li>
                <li>• Support informed decision-making</li>
                <li>• Ensure compliance with environmental</li>
              </ul>

              <button className="flex items-center gap-2 bg-gradient-to-r from-[#0bccc1] to-[#07ebd1] text-white px-5 py-2 rounded-full font-medium hover:scale-105 transition">
                Read More
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

      <section className="relative min-h-52 overflow-hidden bg-[#071c34] text-white">
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
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
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
            className="max-w-3xl text-4xl md:text-6xl font-bold leading-tight"
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
            className="max-w-2xl mt-6 text-lg text-gray-300 leading-relaxed"
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
          <div className="flex flex-col md:flex-row md:items-center justify-between mt-10 gap-10">
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
                className="relative rounded-4xl overflow-hidden"
              >
                <Image
                  src="/Biger.png"
                  alt="People"
                  width={700}
                  height={700}
                  className="w-full h-120 object-cover"
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

      {/* ============================================================
                TESTIMONIALS — photo bg, 70% navy overlay, 30% white cards
            ============================================================ */}
      <section className="relative overflow-hidden py-28 bg-[#0c264b]/10">
        <div className="absolute inset-0">
          <Image
            src="/testimonials.jpg"
            alt="background"
            sizes="100vw"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#0c264b]/55"></div>
          <div className="absolute inset-0 bg-[#0bccc1]/10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-20">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-3 px-7 py-3 rounded-full bg-[#f5f7f4]/10 backdrop-blur-xl border border-[#f5f7f4]/10"
              >
                <span className="w-2 h-2 rounded-full bg-[#0bccc1]"></span>
                <span className="text-[#f5f7f4] font-semibold text-lg">
                  Our Testimonials
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-4xl md:text-5xl font-black leading-tight text-[#f5f7f4] mt-10"
              >
                Real Stories of Environmental Change & Positive Impact
              </motion.h1>
            </div>

            <div className="lg:pt-5">
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-xl leading-relaxed text-[#d1dde9] max-w-xl"
              >
                Hear from partners, communities, and organizations who have
                experienced the impact of our environmental initiatives
                firsthand.
              </motion.p>

              {/* 10% teal CTA */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="group mt-4 bg-gradient-to-r from-[#0bccc1] to-[#07ebd1] text-[#ffffff] px-6 py-2 rounded-full font-bold text-xl flex items-center gap-5 shadow-xl"
              >
                View All Testimonials
                <span className="w-14 h-14 rounded-full bg-[#0c264b] text-[#f5f7f4] flex items-center justify-center group-hover:translate-x-2 transition duration-300">
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
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </span>
              </motion.button>
            </div>
          </div>

          {/* Cards */}
          <div className="grid lg:grid-cols-3 gap-8 mt-14">
            {testimonials.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                whileHover={{ y: -12 }}
                className="bg-[#f5f7f4] rounded-[32px] p-4 border border-[#f5f7f4]/10 shadow-2xl transition duration-500"
              >
                <div className="inline-flex items-center gap-3 bg-[#e9eee6] rounded-xl">
                  <div className="flex items-center gap-1 text-[#0bccc1]">
                    {[...Array(4)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                      </svg>
                    ))}
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
                    >
                      <path d="M12 18.338a2.1 2.1 0 0 0-.987.244L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679A.53.53 0 0 1 12 2" />
                    </svg>
                  </div>
                  <span className="font-semibold text-[#0c264b]">(4.8)</span>
                </div>

                <p className="text-[20px] leading-[1.7] text-[#0c264b] font-semibold mt-14">
                  {item.quote}
                </p>
                <div className="w-full h-[1px] bg-[#d1d5db] mt-14"></div>

                <div className="flex items-center gap-5 mt-10">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={70}
                    height={70}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-[#0c264b]">
                      {item.name}
                    </h3>
                    <p className="text-[#64748b] text-lg mt-1">{item.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
                BENEFITS — 30% light bg, 70% navy text, lime as secondary 10%
            ============================================================ */}
      <section className="relative overflow-hidden bg-[#f5f7f4] py-24 lg:py-32">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#0c264b]/10 blur-[140px] rounded-full" />
          <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-[#0bccc1]/10 blur-[140px] rounded-full" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-3 md:px-5">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-14 items-start">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="inline-flex items-center gap-3 bg-[#0c264b]/10 border border-[#0bccc1]/30 px-6 py-3 rounded-full shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0bccc1]" />
                <span className="text-[#0c264b] font-semibold text-md">
                  Our Benefits
                </span>
              </div>

              <h2 className="mt-8 text-[#0c264b] text-3xl sm:text-4xl xl:text-5xl font-black leading-[1.06] tracking-[-2px] max-w-3xl">
                The Value You Gain From Our Environmental Expertise
              </h2>

              <p className="mt-8 text-[#64748b] text-md leading-[1.9] max-w-2xl">
                We combine experience, research, and responsible practices to
                deliver reliable solutions that support sustainability and
                long-term environmental impact.
              </p>

              {/* lime CTA (secondary accent) */}
              <button className="group mt-10 inline-flex items-center overflow-hidden rounded-full bg-[#0bccc1] hover:bg-[#0bccc1] transition-all duration-500">
                <span className="px-6 py-4 text-[#ffffff] text-xl font-bold">
                  Learn More
                </span>
                <span className="flex h-[72px] w-[72px] items-center justify-center bg-[#0c264b] text-[#f5f7f4] transition-all duration-500 group-hover:w-[82px]">
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
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </span>
              </button>
            </motion.div>

            {/* RIGHT */}
            <div className="space-y-8">
              {benefits.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="group rounded-[32px] bg-[#0c264b]/10 border border-[#0bccc1]/30 px-6 py-3 px-6 py-6 md:px-7 md:py-7 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#0bccc1] text-[#ffffff] shadow-lg">
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
                        >
                          <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                          <path d="m9 12 2 2 4-4" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-[#0c264b] text-2xl font-black leading-tight">
                        {item.title}
                      </h3>
                      <p className="mt-5 text-[#64748b] text-md leading-[1.8] max-w-2xl">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mt-14 flex flex-wrap items-center justify-center gap-6"
          >
            {tags.map((tag, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-3 rounded-full bg-[#0c264b]/10 border border-[#0bccc1]/30 px-6 py-3 px-2 py-1 hover:bg-white transition-all duration-300"
              >
                <span className="w-2 h-2 rounded-full bg-[#0bccc1]" />
                <span className="text-[#0c264b] text-md font-medium">
                  {tag}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================================================
                FAQ — 70% navy bg, 30% white text, 10% teal accents
            ============================================================ */}
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

      <section className="bg-[#0f2b4c] py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.08),transparent_45%)]" />

        {/* FLOATING DOT */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
          className="absolute top-1/2 left-1/2 w-4 h-4 bg-secondary rounded-full blur-[1px]"
        />

        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-[#0bccc1]/10 border border-[#0bccc1]/20 rounded-full px-6 py-3 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#07ebd1] animate-pulse" />

            <span className="text-[#0bccc1] font-semibold text-sm">
              what we do
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className=" mx-w-4xl text-5xl md:text-4xl mx-auto font-bold text-white  leading-tight"
          >
            Helping Communities, Organizations,& Individuals Take Concrete Step
            Toward a Healthier Planet
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-gray-300 max-w-2xl mx-auto mb-12"
          >
            Offering trusted environmental services...
          </motion.p>
          {/* 🔵 CARDS ROW */}
          <div className="grid md:grid-cols-4 gap-6 items-stretch">
            {/* CARD 1 (LIGHT) */}
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-[#e5e7eb] text-black rounded-2xl p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Tree Plantation Drives
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Organizing large scale tree plantation drive to restore
                  forest.
                </p>
              </div>

              <Image
                src="/big.png"
                width={200}
                height={200}
                alt=""
                className="mx-auto"
              />
            </motion.div>

            {/* CARD 2 (ACCENT) */}
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-gradient-to-br from-[#0bccc1] to-[#07ebd1] text-black rounded-2xl p-6 h-70 flex flex-col justify-between mt-35"
            >
              <div className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-full mb-4">
                ◈
              </div>

              <h3 className="font-semibold text-lg mb-2">Policy Advocacy</h3>

              <p className="text-sm mb-4">
                Policies that protect ecosystems, promote sustainability.
              </p>

              <p className="text-sm">• Environment research & climate</p>
            </motion.div>

            {/* CARD 3 (DARK) */}
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-[#021a2e] text-white rounded-2xl p-6 flex flex-col justify-between w-75 mt-56 h-50"
            >
              <div>
                <Image
                  src="/small.png"
                  width={100}
                  height={60}
                  alt=""
                  className="mb-4 text-center mx-auto"
                />

                <h3 className="text-3xl font-bold">200+</h3>
                <p className="text-sm text-gray-300">Educational Workshops</p>
              </div>
            </motion.div>

            {/* CARD 4 (LIGHT) */}
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-[#e5e7eb] text-black rounded-2xl p-6 h-85 mt-20 flex flex-col justify-between"
            >
              <Image
                src="/mid.jpg"
                width={200}
                height={120}
                alt=""
                className="rounded-xl mb-4"
              />

              <h3 className="font-semibold mb-2">Sustainable Solutions</h3>

              <p className="text-sm text-gray-600 mb-4">
                We design and implement strategy that help community
              </p>

              <button className="flex items-center gap-2 text-cyan-600 font-medium">
                Read More →
              </button>
            </motion.div>
          </div>

          {/* 🔵 TAGS */}
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            {[
              "Climate Change",
              "Environmental Awareness",
              "Community Engagement",
              "Wildlife Protection",
            ].map((tag, i) => (
              <span
                key={i}
                className="bg-[#123a63] text-cyan-300 px-4 py-2 rounded-full text-sm"
              >
                • {tag}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
