"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";


export default function Home() {
  const [active, setActive] = useState(0);

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

   const blogs = [
     {
       id: 1,
       title: "How Sustainable Living Can Reduce Your Carbon Footprint",
       category: "Sustainability",
       image: "/blog1.jpg",
     },
     {
       id: 2,
       title: "The Role of Renewable Energy in Fighting Climate Change",
       category: "Climate Action",
       image: "/blog2.jpg",
     },
     {
       id: 3,
       title: "Reducing Waste Through Recycling & Circular Economy",
       category: "Waste Management",
       image: "/blog3.jpg",
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
          className="pointer-events-none fixed  w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 "
          style={{
            transform: `translate(${pos.x - 1}px, ${pos.y - 1}px)`,
          }}
        ></div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="max-w-4xl">
            {/* TOP BADGE */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 mb-10"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>

              <span className="text-white text-sm md:text-base font-medium">
                Protecting Nature Today For A Sustainable
              </span>
            </motion.div>

            {/* HEADING */}
            <motion.h1
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white text-6xl md:text-8xl font-bold leading-[0.95]"
            >
              Together for a Greener
              <span className="block">
                <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                  Tomorrow
                </span>
              </span>
            </motion.h1>

            {/* LINE */}
            <div className="w-full h-[1px] bg-white/10 my-14"></div>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex flex-wrap items-center gap-8"
            >
              {/* BUTTON */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="group mt-2 bg-cyan-400 text-black px-6 py-2 rounded-full font-bold text-xl flex items-center gap-5 shadow-xl"
              >
                Get Involved
                <span className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center group-hover:translate-x-2 transition duration-300">
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

              {/* BUTTON 2 */}
              <div className="flex items-center gap-5 group cursor-pointer">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-14 h-14 rounded-full bg-cyan-400 flex items-center justify-center shadow-xl"
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
                    className="lucide lucide-play-icon lucide-play"
                  >
                    <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
                  </svg>
                </motion.div>

                <span className="text-white text-2xl font-semibold group-hover:text-cyan-400 transition duration-300">
                  Watch Our Video
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f4f7f8] py-24">
        {/* BACKGROUND GLOW */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.08),transparent_45%)]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* ================= LEFT SIDE ================= */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* MAIN IMAGE */}
              <div className="relative rounded-[36px] overflow-hidden shadow-2xl bg-[#dce6e1]">
                <Image
                  src="/service2.jpg"
                  alt="Solar"
                  width={700}
                  height={900}
                  className="w-full h-[850px] object-cover hover:scale-105 transition duration-700"
                />
              </div>

              {/* FLOATING CARD */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className="absolute bottom-10 right-6 bg-black/40 backdrop-blur-xl border border-white/10 rounded-[28px] p-6 w-[230px] shadow-2xl"
              >
                <div className="w-16 h-16 rounded-full bg-cyan-400 flex items-center justify-center mb-5">
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
                </div>

                <div className="flex gap-2 text-white text-xl mb-4">
                  ★ ★ ★ ★ ★
                </div>

                <h3 className="text-white text-3xl font-bold leading-tight">
                  Eco Awareness Programs
                </h3>
              </motion.div>
            </motion.div>

            {/* ================= RIGHT SIDE ================= */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* BADGE */}
              <div className="inline-flex items-center gap-2 bg-[#e9ece7] rounded-full px-6 py-3 mb-8">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />

                <span className="text-[#071c34] font-semibold text-sm">
                  About Us
                </span>
              </div>

              {/* HEADING */}
              <h1 className="text-[#071c34] text-4xl md:text-5xl font-bold leading-tight w-100">
                Trusted Partner in Environmental
                <span className="block">
                  Conservation &
                  <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                    {" "}
                    Sustainability
                  </span>
                </span>
              </h1>

              {/* QUOTE CARD */}
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4 }}
                className="mt-4 bg-[#e9ece7] rounded-[32px] overflow-hidden shadow-lg"
              >
                <div className="grid md:grid-cols-2">
                  <Image
                    src="/service1.jpg"
                    alt="Solar"
                    width={400}
                    height={300}
                    className="w-full h-50 object-cover"
                  />

                  <div className="p-2 flex flex-col justify-center">
                    <p className="text-[#071c34] text-xl font-semibold leading-relaxed">
                      “Protecting the environment is not a choice it is a
                      responsibility we owe to future generations.”
                    </p>

                    <div className="w-full h-[1px] bg-gray-300 "></div>

                    <h4 className="text-xl font-bold text-[#071c34]">
                      Marvin McKinney
                    </h4>

                    <p className="text-gray-500 mt-1 text-lg">Founder & CEO</p>
                  </div>
                </div>
              </motion.div>

              {/* FEATURES */}
              <div className="grid md:grid-cols-2 gap-5 mt-4">
                {/* FEATURE 1 */}
                <motion.div whileHover={{ y: -6 }} className="flex gap-5">
                  <div className="w-12 h-12 rounded-full bg-cyan-400 flex items-center justify-center shrink-0">
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
                    <h3 className="text-2xl font-bold text-[#071c34]">
                      Innovative Solutions
                    </h3>

                    <p className="text-gray-500 text-md mt-1 leading-relaxed">
                      We develop practical & creative ideas that address
                      environmental
                    </p>
                  </div>
                </motion.div>

                {/* FEATURE 2 */}
                <motion.div whileHover={{ y: -6 }} className="flex gap-5">
                  <div className="w-12 h-12 rounded-full bg-cyan-400 flex items-center justify-center shrink-0">
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
                      className="lucide lucide-palette-icon lucide-palette"
                    >
                      <path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z" />
                      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
                      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
                      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
                      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
                    </svg>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-[#071c34]">
                      Education & Awareness
                    </h3>

                    <p className="text-gray-500 text-md mt-1 leading-relaxed">
                      We run programs and campaigns to educate communities.
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* LINE */}
              <div className="w-full h-[1px] bg-gray-300 my-2"></div>

              {/* CHECK LIST */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-center gap-3">
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
                    className="lucide lucide-circle-check-icon lucide-circle-check text-cyan-400"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>

                  <p className="text-gray-600 text-md">
                    Our initiative design to balance environmental
                  </p>
                </div>

                <div className="flex items-center gap-3">
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
                    className="lucide lucide-circle-check-icon lucide-circle-check text-cyan-400"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>

                  <p className="text-gray-600 text-md">
                    We deliver solutions that create measurable
                  </p>
                </div>
              </div>

              {/* BUTTON */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="group mt-4 bg-gradient-to-r from-cyan-400 to-teal-400 text-black px-6 py-2 rounded-full font-bold text-xl flex items-center gap-5 shadow-xl"
              >
                More About Us
                <span className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center group-hover:translate-x-2 transition duration-300">
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
          </div>
        </div>
      </section>

      <section className="bg-[#0f2b4c] text-white py-20">
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
          className="absolute left-1/3 top-1/3 w-4 h-4 rounded-full bg-cyan-400 blur-[1px]"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* ================= TOP BADGE ================= */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="inline-flex items-center gap-3 bg-cyan-400/10 border border-cyan-400/10 backdrop-blur-xl rounded-full px-7 py-3">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />

              <span className="text-white text-sm font-semibold">
                Our Services
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
            Trusted Environmental
            <span className="block bg-gradient-to-r from-cyan-400 to-cyan-400 bg-clip-text text-transparent">
              Services
            </span>
          </motion.h1>

          {/* ================= DESCRIPTION ================= */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-center text-gray-300 text-sm md:text-lg max-w-xl mx-auto mt-2 leading-relaxed"
          >
            Offering trusted environmental services that empower communities and
            organizations to act responsibly for the planet.
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
            className="grid md:grid-cols-3 gap-8 mt-16 group relative overflow-hidden rounded-[34px] border border-white/5 bg-white/5 backdrop-blur-xl p-10 shadow-2xl"
          >
            {/* Card 1 */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-[#123a63] p-6 rounded-2xl border border-slate-700 shadow-lg text-left transition duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-teal-400 text-black rounded-full flex items-center justify-center mb-4">
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
              <div className="relative z-10 w-full h-[1px] bg-white/10 my-4"></div>

              <ul className="relative z-10 space-y-2 text-gray-200 text-sm mb-6">
                <li>• Conduct data study to assess impact</li>
                <li>• Support informed decision-making</li>
                <li>• Ensure compliance with environmental</li>
              </ul>

              <button className="flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-teal-400 text-black px-5 py-2 rounded-full font-medium hover:scale-105 transition">
                Read More →
              </button>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-[#123a63] p-6 rounded-2xl border border-slate-700 shadow-lg text-left transition duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-teal-400 text-black rounded-full flex items-center justify-center mb-4">
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
              <div className="relative z-10 w-full h-[1px] bg-white/10 my-4"></div>

              <ul className="relative z-10 text-sm text-gray-200 space-y-2 mb-6">
                <li>• Conduct data study to assess impact</li>
                <li>• Support informed decision-making</li>
                <li>• Ensure compliance with environmental</li>
              </ul>

              <button className="flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-teal-400 text-black px-5 py-2 rounded-full font-medium hover:scale-105 transition">
                Read More →
              </button>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-[#123a63] p-6 rounded-2xl border border-slate-700 shadow-lg text-left transition duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-teal-400 text-black rounded-full flex items-center justify-center mb-4">
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
              <div className="relative z-10 w-full h-[1px] bg-white/10 my-4"></div>

              <ul className="relative z-10 text-sm text-gray-200 space-y-2 mb-6">
                <li>• Conduct data study to assess impact</li>
                <li>• Support informed decision-making</li>
                <li>• Ensure compliance with environmental</li>
              </ul>

              <button className="flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-teal-400 text-black px-5 py-2 rounded-full font-medium hover:scale-105 transition">
                Read More →
              </button>
            </motion.div>
          </motion.div>
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
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-md px-5 py-3 rounded-full mb-8">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span className="text-sm text-white font-medium">
                  Why Choose Us
                </span>
              </div>

              {/* HEADING */}
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
                Purpose Led Environmental Solutions{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
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
                  className="bg-white/5 border border-cyan-400/20 backdrop-blur-xl rounded-3xl p-6 shadow-[0_0_40px_rgba(34,211,238,0.08)]"
                >
                  <div>
                    <h2 className="text-6xl font-bold text-cyan-400">45K+</h2>

                    <p className="text-2xl mt-5 leading-snug font-semibold">
                      Trees Planted Through Conservation
                    </p>
                  </div>

                  <div className="w-full h-[1px] bg-white/10 my-10" />

                  <div>
                    <h2 className="text-6xl font-bold text-cyan-400">80+</h2>

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
                    className="w-15 h-15 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 flex items-center justify-center shadow-[0_0_30px_rgba(34,211,238,0.4)] mb-8"
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

                  <div className="w-full h-[1px] bg-white/10 mb-8" />

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
                className="group mt-16 flex items-center overflow-hidden rounded-full bg-gradient-to-r from-cyan-400 to-teal-400"
              >
                <span className="px-7 py-4 text-[#071c34] text-xl font-semibold">
                  Learn More
                </span>

                <span className="w-16 h-16 flex items-center justify-center bg-[#071c34] text-white group-hover:bg-black transition duration-300">
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
                  className="w-full h-[600px] object-cover"
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
                  <div className="w-24 h-24 rounded-full bg-[#071c34] border border-cyan-400 flex items-center justify-center shadow-[0_0_40px_rgba(34,211,238,0.4)]">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 flex items-center justify-center">
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

              {/* 🔵 DOT PATTERN */}
              {/* <div className="absolute bottom-3 left-[55%] grid grid-cols-8 gap-2">
                {Array.from({ length: 48 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-cyan-400"
                  />
                ))}
              </div> */}
            </motion.div>
          </div>
        </div>
      </section>

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
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 px-5 py-3 rounded-full mb-8"
          >
            <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
            <p className="text-sm font-medium text-white">Watch Our Story</p>
          </motion.div>

          {/* HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl text-5xl md:text-7xl font-bold leading-tight"
          >
            From Awareness to Action Our Mission{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
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
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 flex items-center justify-center mb-8">
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

              <h3 className="text-cyan-400 text-2xl font-semibold mb-6">
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
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center mb-8">
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

              <h3 className="text-cyan-400 text-2xl font-semibold mb-6">
                Community Projects
              </h3>

              <div className="w-full h-[1px] bg-white/10 mb-6" />

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
              className="group flex items-center w-fit bg-gradient-to-r from-cyan-400 to-teal-400 text-[#071c34] font-semibold rounded-full overflow-hidden"
            >
              <span className="px-8 py-5 text-lg">View More Videos</span>

              <span className="w-16 h-16 flex items-center justify-center bg-[#071c34] text-white group-hover:bg-black transition">
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
              <div className="w-24 h-24 rounded-full border border-cyan-400 bg-[#071c34]/80 backdrop-blur-xl flex items-center justify-center shadow-2xl">
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
          className="absolute top-1/2 left-1/2 w-4 h-4 bg-cyan-400 rounded-full blur-[1px]"
        />

        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-cyan-400/20 text-cyan-300 px-4 py-1 rounded-full text-sm inline-block"
          >
            what we do
          </motion.span>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className=" mx-w-4xl text-5xl md:text-4xl mx-auto font-bold  leading-tight"
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
              className="bg-gradient-to-br from-cyan-400 to-teal-400 text-black rounded-2xl p-6 h-70 flex flex-col justify-between mt-35"
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

          {/* 🔵 CTA LINE */}
          <div className="flex items-center justify-center gap-3 mt-8 text-gray-300">
            <div className="w-10 h-10 bg-cyan-400 rounded-full flex items-center justify-center text-black">
              ☎
            </div>

            <p>
              Let’s make something great work together.
              <span className="text-cyan-400 ml-2 cursor-pointer">
                Get Free Quote
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#eef1ec] py-24">
        {/* BACKGROUND BIG TEXT */}
        <h1 className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 text-[220px] font-black uppercase tracking-wider text-cyan-400/10 select-none hidden lg:block">
          Greva
        </h1>

        {/* FLOATING DOT */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
          className="absolute top-1/3 left-1/2 w-4 h-4 rounded-full bg-cyan-400"
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-cyan-400/20 text-slate-700 px-4 py-1 rounded-full text-sm inline-block"
            >
              our Features
            </motion.span>
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
                  className="bg-white rounded-[30px] p-10 shadow-sm hover:shadow-2xl transition duration-500 border border-transparent hover:border-cyan-400/20"
                >
                  {/* ICON */}
                  <motion.div
                    whileHover={{
                      rotate: 10,
                      scale: 1.1,
                    }}
                    className="w-16 h-16 rounded-full bg-cyan-400 flex items-center justify-center text-black shadow-lg"
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

            {/* ================= CENTER IMAGE ================= */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative flex justify-center mt-20 "
            >
              {/* GLOW */}
              <div className="absolute w-[380px] h-[380px] bg-cyan-400/20 blur-[120px] rounded-full bottom-0" />

              <Image
                src="/worker.png"
                alt="Worker"
                width={520}
                height={780}
                className="relative z-10 object-contain h-[600px] "
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
                  className="bg-white rounded-[30px] p-10 shadow-sm hover:shadow-2xl transition duration-500 border border-transparent hover:border-cyan-400/20"
                >
                  {/* ICON */}
                  <motion.div
                    whileHover={{
                      rotate: -10,
                      scale: 1.1,
                    }}
                    className="w-16 h-16 rounded-full bg-cyan-400 flex items-center justify-center text-black shadow-lg"
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

      <section className="relative overflow-hidden bg-[#eef1ec] py-24">
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
          className="absolute right-[28%] top-44 w-4 h-4 rounded-full bg-cyan-400"
        />

        <div className="max-w-7xl mx-auto px-6">
          {/* TOP TAG */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="px-7 py-3 rounded-full bg-[#e4e8df] flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              <span className="text-[#081c15] font-semibold text-lg">
                How It Works
              </span>
            </div>
          </motion.div>

          {/* HEADING */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mt-10"
          >
            <h1 className="text-5xl md:text-7xl font-black text-[#081c15] leading-tight">
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
            <div className="absolute top-6 left-0 w-full h-[1px] bg-gray-300"></div>

            <div className="grid grid-cols-3 relative z-10">
              {process.map((item, index) => (
                <div key={index} className="flex justify-center">
                  <div
                    className={`px-8 py-3 rounded-full text-lg font-bold shadow-md
                  ${
                    item.dark
                      ? "bg-[#081c15] text-white"
                      : "bg-cyan-400 text-black"
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
                item.dark ? "bg-[#081c15] text-white" : "bg-cyan-400 text-black"
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
                className={`relative overflow-hidden rounded-[32px] border border-gray-200
              ${
                item.dark
                  ? "bg-[#081c15] text-white"
                  : "bg-[#f5f7f2] text-[#081c15]"
              }`}
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
                <div className="relative z-10 p-10 min-h-[300px] flex flex-col">
                  {/* ICON */}
                  <motion.div
                    whileHover={{
                      rotate: 10,
                      scale: 1.1,
                    }}
                    className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg
                  ${
                    item.dark
                      ? "bg-cyan-400 text-[#081c15]"
                      : "bg-white text-[#081c15]"
                  }`}
                  >
                    {item.icon}
                  </motion.div>

                  {/* TITLE */}
                  <h2 className="text-4xl font-bold mt-4 leading-tight">
                    {item.title}
                  </h2>

                  {/* DESC */}
                  <p
                    className={`mt-3 text-lg leading-relaxed
                  ${item.dark ? "text-gray-200" : "text-gray-500"}`}
                  >
                    {item.desc}
                  </p>

                  {/* LINE */}
                  <div
                    className={`w-full h-[1px] mt-5
                  ${item.dark ? "bg-white/20" : "bg-gray-300"}`}
                  ></div>

                  {/* POINTS */}
                  <div className="mt-5 space-y-6">
                    {item.points.map((point, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ x: 8 }}
                        className="flex items-center gap-4"
                      >
                        <span className="w-2 h-2 rounded-full bg-cyan-400"></span>

                        <p
                          className={`text-lg
                        ${item.dark ? "text-white" : "text-gray-500"}`}
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

      <section className="relative overflow-hidden py-28 bg-cyan-100/10">
        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0">
          <Image
            src="/testimonials.jpg"
            alt="background"
            fill
            className="object-cover"
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-[#081c15]/55"></div>

          {/* LIGHT GREEN OVERLAY */}
          <div className="absolute inset-0 bg-cyan-400/10"></div>
        </div>

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
          className="absolute top-72 right-[22%] w-4 h-4 rounded-full bg-cyan-400 z-20"
        />

        <div className="max-w-7xl mx-auto px-6 relative z-20">
          {/* TOP AREA */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* LEFT */}
            <div>
              {/* TAG */}
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-3 px-7 py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/10"
              >
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>

                <span className="text-white font-semibold text-lg">
                  Our Testimonials
                </span>
              </motion.div>

              {/* HEADING */}
              <motion.h1
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-4xl md:text-5xl font-black leading-tight text-white mt-10"
              >
                Real Stories of Environmental Change & Positive Impact
              </motion.h1>
            </div>

            {/* RIGHT */}
            <div className="lg:pt-5">
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-xl leading-relaxed text-gray-200 max-w-xl"
              >
                Hear from partners, communities, and organizations who have
                experienced the impact of our environmental initiatives
                firsthand.
              </motion.p>

              {/* BUTTON */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="group mt-4 bg-gradient-to-r from-cyan-400 to-teal-400 text-black px-6 py-2 rounded-full font-bold text-xl flex items-center gap-5 shadow-xl"
              >
                View All Testimonials
                <span className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center group-hover:translate-x-2 transition duration-300">
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
          </div>

          {/* TESTIMONIAL CARDS */}
          <div className="grid lg:grid-cols-3 gap-8 mt-14">
            {testimonials.map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 80,
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
                  y: -12,
                }}
                className="bg-[#f5f7f2] rounded-[32px] p-4 border border-white/10 shadow-2xl hover:shadow-lime-400/10 transition duration-500"
              >
                {/* RATING */}
                <div className="inline-flex items-center gap-3 bg-[#e9eee6] rounded-xl ">
                  <div className="flex items-center gap-1 text-cyan-400">
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
                      className="lucide lucide-star-icon lucide-star"
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                    </svg>
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
                      className="lucide lucide-star-icon lucide-star"
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                    </svg>
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
                      className="lucide lucide-star-icon lucide-star"
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                    </svg>
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
                      className="lucide lucide-star-icon lucide-star"
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                    </svg>
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
                      className="lucide lucide-star-half-icon lucide-star-half"
                    >
                      <path d="M12 18.338a2.1 2.1 0 0 0-.987.244L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679A.53.53 0 0 1 12 2" />
                    </svg>
                  </div>

                  <span className="font-semibold text-[#081c15]">(4.8)</span>
                </div>

                {/* QUOTE */}
                <p className="text-[20px] leading-[1.7] text-[#081c15] font-semibold mt-14">
                  “ {item.quote} ”
                </p>

                {/* LINE */}
                <div className="w-full h-[1px] bg-gray-300 mt-14"></div>

                {/* USER */}
                <div className="flex items-center gap-5 mt-10">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={70}
                    height={70}
                    className="rounded-full object-cover"
                  />

                  <div>
                    <h3 className="text-2xl font-bold text-[#081c15]">
                      {item.name}
                    </h3>

                    <p className="text-gray-500 text-lg mt-1">{item.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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

            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8 mt-14">
              {logos.map((logo, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -5,
                    scale: 1.03,
                  }}
                  className="flex items-center justify-center gap-3 rounded-2xl border border-[#334155] bg-[#123a63]/40 px-8 py-6"
                >
                  {/* ICON */}

                  <div className="w-14 h-14 rounded-full bg-[#00d2c6]/20 flex items-center justify-center">
                    <div className="w-7 h-7 rounded-full border-4 border-[#00d2c6]" />
                  </div>

                  {/* TEXT */}

                  <span className="text-white text-2xl font-black">{logo}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#ffffff] py-20 md:py-22">
        {/* ================= BACKGROUND GLOW ================= */}

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#00d2c6]/10 blur-[140px]" />

        {/* FLOATING DOT */}

        <motion.div
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="absolute top-[20%] left-[60%] w-3 h-3 rounded-full bg-[#00d2c6]"
        />

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          {/* ================================================= */}
          {/* TOP CONTENT */}
          {/* ================================================= */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* LEFT */}

            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              {/* TAG */}

              <div className="inline-flex items-center gap-2 bg-[#ffffff] border border-[#334155] rounded-full px-5 py-2">
                <div className="w-2 h-2 rounded-full bg-[#00d2c6]" />

                <span className="text-slate-900 font-medium text-sm md:text-base">
                  Latest Blogs
                </span>
              </div>

              {/* HEADING */}

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-[1.1] mt-8 max-w-[780px]">
                Insights and Stories Driving a More Sustainable Future
              </h2>
            </motion.div>

            {/* RIGHT */}

            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="lg:pl-16"
            >
              <p className="text-slate-500 text-lg leading-relaxed max-w-[560px]">
                Stay informed with stories and insights that showcase real
                impact, sustainable practices, and global efforts to protect the
                environment.
              </p>

              {/* BUTTON */}

              <button className="group mt-8 inline-flex items-center overflow-hidden rounded-full border ">
                <span className="bg-[#00d2c6] text-[#09284b] font-bold px-8 py-4 text-lg">
                  View All Blogs
                </span>

                <span className="w-15 h-15 flex items-center justify-center bg-[#123a63] text-white group-hover:bg-[#00d2c6] group-hover:text-[#09284b] transition-all duration-300">
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
          </div>

          {/* ================================================= */}
          {/* BLOG CARDS */}
          {/* ================================================= */}

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-10">
            {blogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.2,
                }}
                whileHover={{ y: -10 }}
                className="group"
              >
                {/* IMAGE CARD */}

                <div className="relative overflow-hidden rounded-[30px] bg-[#123a63] border border-[#334155]">
                  {/* IMAGE */}

                  <div className="relative h-[300px] overflow-hidden">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover group-hover:scale-110 transition duration-700"
                    />

                    {/* OVERLAY */}

                    <div className="absolute inset-0 bg-gradient-to-t from-[#09284b]/80 via-transparent to-transparent" />

                    {/* CATEGORY */}

                    <div className="absolute top-6 left-6">
                      <div className="bg-[#123a63]/80 backdrop-blur-xl border border-[#334155] rounded-full px-5 py-2">
                        <span className="text-white text-sm font-medium">
                          {blog.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* CONTENT */}

                  <div className="p-7">
                    {/* TITLE */}

                    <h3 className="text-2xl font-bold text-white leading-snug group-hover:text-[#00d2c6] transition duration-300">
                      {blog.title}
                    </h3>

                    {/* LINE */}

                    <div className="w-full h-[1px] bg-[#334155] my-7"></div>

                    {/* BUTTON */}

                    <button className="group/btn flex items-center gap-4">
                      <span className="text-white text-lg font-semibold group-hover/btn:text-[#00d2c6] transition duration-300">
                        Read More
                      </span>

                      <div className="w-11 h-11 rounded-full bg-[#00d2c6] flex items-center justify-center text-[#09284b] group-hover/btn:translate-x-1 transition duration-300">
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
                      </div>
                    </button>
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
