"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaDribbble } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const About = () => {
  const [active, setActive] = useState(0);
  const cards = [
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
        >
          <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        </svg>
      ),
      title: "Our Mission",
      desc: "Our Mission are rooted in transparency, collaboration, and innovation, ensuring that every project we undertake creates real, positive impact.",
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
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="9" x2="15" y1="15" y2="9" />
        </svg>
      ),
      title: "Our Vision",
      desc: "Our Vision are rooted in transparency, collaboration, and innovation, ensuring that every project we undertake creates real, positive impact.",
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
        >
          <path d="M10.5 3 8 9l4 13 4-13-2.5-6" />
          <path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z" />
          <path d="M2 9h20" />
        </svg>
      ),
      title: "Our Values",
      desc: "Our values are rooted in transparency, collaboration, and innovation, ensuring that every project we undertake creates real, positive impact.",
    },
  ];

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

  const teamMembers = [
    {
      name: "Courtney Henry",
      role: "Environmental Program Director",
      image: "/team-1.jpg",
    },
    {
      name: "Leslie Alexander",
      role: "Community Outreach Lead",
      image: "/team-2.jpg",
    },
    {
      name: "Ralph Edwards",
      role: "Conservation Project Manager",
      image: "/team-3.jpg",
    },
  ];

  // ─── 70-30-10 COLOUR TOKENS ────────────────────────────────────────────────
  // 70% → #0c264b  (dark navy   – dominant background / structural surfaces)
  // 30% → #f5f7f4  (off-white   – light panels, cards, text on dark)
  // 10% → #0bccc1  (teal accent – CTAs, highlights, icons, badges)
  // Secondary accent (subset of 10%) → #7ef14d  (lime – benefit / tag sections)
  // ──────────────────────────────────────────────────────────────────────────

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
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c264b]/90 via-[#0bccc1]/10 to-transparent" />
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#0c264b]/80 to-transparent" />

        <div className="relative z-20 h-[calc(100%-96px)] flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl sm:text-7xl md:text-8xl xl:text-[120px] font-black text-[#f5f7f4] leading-none"
            >
              About us
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
                About Us
              </span>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0c264b] to-transparent z-10" />
      </section>

      {/* ============================================================
          ABOUT INTRO — 70% navy bg, 30% white text, 10% teal accents
      ============================================================ */}
      <section className="relative overflow-hidden bg-[#0c264b] py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(11,204,193,0.12),transparent_45%)]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-[36px] sm:rounded-[42px] overflow-hidden shadow-2xl bg-[#102f5c]">
                <Image
                  src="/service2.jpg"
                  alt="Solar"
                  width={700}
                  height={900}
                  className="w-full h-230  object-cover hover:scale-105 transition duration-700"
                />
              </div>

              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute bottom-10 right-6 backdrop-blur-xl bg-[#0c264b]/70 border border-[#0bccc1]/20 rounded-[28px] p-6 w-60 shadow-2xl"
              >
                <div className="w-16 h-16 rounded-full bg-[#0bccc1] text-[#0c264b] flex items-center justify-center mb-5">
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
                    <path d="M12 12h.01" />
                    <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                    <path d="M22 13a18.15 18.15 0 0 1-20 0" />
                    <rect width="20" height="14" x="2" y="6" rx="2" />
                  </svg>
                </div>
                {/* 30% off-white stars */}
                <div className="flex gap-2 text-[#f5f7f4] text-xl mb-4">
                  ★ ★ ★ ★ ★
                </div>
                <h3 className="text-[#f5f7f4] text-3xl font-bold leading-tight">
                  Eco Awareness Programs
                </h3>
              </motion.div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* 10% teal badge */}
              <div className="inline-flex items-center gap-2 bg-[#0bccc1]/10 border border-[#0bccc1]/20 rounded-full px-6 py-3 mb-8">
                <span className="w-2 h-2 rounded-full bg-[#0bccc1] animate-pulse" />
                <span className="text-[#0bccc1] font-semibold text-sm">
                  About Us
                </span>
              </div>

              {/* 30% off-white heading */}
              <h1 className="text-[#f5f7f4] text-4xl md:text-5xl font-bold leading-tight w-100">
                Trusted Partner in Environmental
                <span className="block">
                  Conservation &{/* 10% teal gradient */}
                  <span className="bg-gradient-to-r from-[#0bccc1] to-[#07ebd1] bg-clip-text text-transparent">
                    {" "}
                    Sustainability
                  </span>
                </span>
              </h1>

              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4 }}
                className="mt-4 bg-[#102f5c] border border-[#0bccc1]/10 rounded-[32px] sm:rounded-4xl overflow-hidden shadow-lg"
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
                    <p className="text-[#f5f7f4] text-xl font-semibold leading-relaxed">
                      Protecting the environment is not a choice it is a
                      responsibility we owe to future generations.
                    </p>
                    <div className="w-full h-[1px] bg-[#f5f7f4]/30"></div>
                    <h4 className="text-xl font-bold text-[#0bccc1]">
                      Marvin McKinney
                    </h4>
                    <p className="text-[#0bccc1]/70 mt-1 text-lg">
                      Founder & CEO
                    </p>
                  </div>
                </div>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-5 mt-4">
                <motion.div whileHover={{ y: -6 }} className="flex gap-5">
                  <div className="w-12 h-12 rounded-full bg-[#0bccc1] text-[#0c264b] flex items-center justify-center shrink-0">
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
                      <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#f5f7f4]">
                      Innovative Solutions
                    </h3>
                    <p className="text-[#b8c5d6] text-md mt-1 leading-relaxed">
                      We develop practical & creative ideas that address
                      environmental
                    </p>
                  </div>
                </motion.div>

                <motion.div whileHover={{ y: -6 }} className="flex gap-5">
                  <div className="w-12 h-12 rounded-full bg-[#0bccc1] text-[#0c264b] flex items-center justify-center shrink-0">
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
                      <path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z" />
                      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
                      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
                      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
                      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#f5f7f4]">
                      Education & Awareness
                    </h3>
                    <p className="text-[#b8c5d6] text-md mt-1 leading-relaxed">
                      We run programs and campaigns to educate communities.
                    </p>
                  </div>
                </motion.div>
              </div>

              <div className="w-full h-[1px] bg-[#0bccc1]/20 my-2"></div>

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
                    className="text-[#0bccc1]"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                  <p className="text-[#d1dde9] text-md">
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
                    className="text-[#0bccc1]"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                  <p className="text-[#d1dde9] text-md">
                    We deliver solutions that create measurable
                  </p>
                </div>
              </div>

              {/* 10% teal CTA button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="group mt-4 bg-gradient-to-r from-[#0bccc1] to-[#07ebd1] text-[#0c264b] px-6 py-2 rounded-full font-bold text-xl flex items-center gap-5 shadow-xl"
              >
                More About Us
                <span className="w-14 h-14 rounded-full bg-[#0c264b] text-[#0bccc1] flex items-center justify-center group-hover:translate-x-2 transition duration-300">
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================================
          OUR APPROACH — 30% off-white bg, 70% navy text, 10% teal accents
          BUG FIX: replaced non-standard max-w-425 / max-w-188 / max-w-150
      ============================================================ */}
      <section className="relative overflow-hidden bg-[#f5f7f4] py-24 lg:py-26">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 items-start">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="inline-flex items-center gap-3 rounded-full bg-white border border-[#d8e2dc] px-6 py-3 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#0bccc1]" />
                {/* 70% navy label */}
                <span className="text-[#0c264b] font-semibold text-lg">
                  Our Approach
                </span>
              </div>

              {/* 70% navy heading — FIXED: removed non-standard max-w-188 */}
              <h2 className="mt-8 text-[#0c264b] text-3xl sm:text-4xl xl:text-5xl font-black leading-[1.05] max-w-2xl">
                Working Together to Protect Nature & Support
              </h2>

              {/* FIXED: removed non-standard max-w-150 */}
              <p className="mt-4 text-[#64748b] text-md leading-[1.9] max-w-xl">
                Our work is guided by clear purpose, scientific knowledge, and
                ethical practices to ensure reliable and sustainable
                environmental outcomes.
              </p>

              {/* 10% teal dot */}
              <div className="absolute right-6 top-[42%] w-4 h-4 rounded-full bg-[#0bccc1]" />

              <div className="relative mt-10 overflow-hidden rounded-4xl">
                <Image
                  src="/approach.jpg"
                  alt="Environmental"
                  width={900}
                  height={850}
                  className="w-full h-150 object-cover"
                />
                <div className="absolute bottom-8 left-8 bg-[#ffffff20] backdrop-blur-xl border border-white/20 rounded-3xl px-8 py-6 shadow-2xl">
                  <div className="flex items-center gap-5">
                    <div className="text-6xl font-black">
                      <span className="text-[#42b6f4]">G</span>
                    </div>
                    <div>
                      {/* 30% off-white review text */}
                      <h4 className="text-[#f5f7f4] text-3xl font-black">
                        4.9/5 Reviews
                      </h4>
                      <div className="flex items-center gap-2 mt-2">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span key={i} className="text-[#0bccc1] text-xl">
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT — cards */}
            <div className="flex flex-col gap-4">
              {cards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="group rounded-[34px] border border-[#d8e2dc] bg-white p-4 xl:p-12 hover:-translate-y-2 transition-all duration-500 shadow-sm hover:shadow-xl"
                >
                  {/* 10% teal icon bg */}
                  <div className="w-14 h-14 rounded-full bg-[#0bccc1] flex items-center justify-center text-[#0c264b]">
                    {card.icon}
                  </div>
                  {/* 70% navy title */}
                  <h3 className="mt-3 text-[#0c264b] text-2xl font-black">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-[#64748b] text-md leading-[1.9] max-w-[700px]">
                    {card.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* background glows — use teal at 10% opacity */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-20 left-20 w-[500px] h-[500px] rounded-full bg-[#0bccc1]/10 blur-[150px]" />
          <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-[#7ef14d]/10 blur-[140px]" />
        </div>
      </section>

      {/* ============================================================
          WHY CHOOSE US — 70% navy bg, 30% white text, 10% teal accent
      ============================================================ */}
      <section className="relative overflow-hidden bg-[#0c264b] py-24 text-[#f5f7f4]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(11,204,193,0.15),transparent_35%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-[#f5f7f4]/5 border border-[#f5f7f4]/10 backdrop-blur-md px-5 py-3 rounded-full mb-8">
                <span className="w-2 h-2 rounded-full bg-[#0bccc1]" />
                <span className="text-sm text-[#f5f7f4] font-medium">
                  Why Choose Us
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
                Purpose Led Environmental Solutions{" "}
                <span className="bg-gradient-to-r from-[#0bccc1] to-[#07ebd1] bg-clip-text text-transparent">
                  you Can Trust
                </span>
              </h1>

              <p className="text-[#b8c5d6] text-lg leading-relaxed max-w-xl mb-14">
                Our work is guided by clear purpose, scientific knowledge, and
                ethical practices to ensure reliable and sustainable
                environmental outcomes.
              </p>

              <div className="grid md:grid-cols-[280px_1fr] gap-10 items-start">
                {/* Stats card — 70% navy tinted card, 10% teal numbers */}
                <motion.div
                  whileHover={{ y: -8 }}
                  className="bg-[#f5f7f4]/5 border border-[#0bccc1]/20 backdrop-blur-xl rounded-3xl p-6 shadow-[0_0_40px_rgba(11,204,193,0.08)]"
                >
                  <div>
                    <h2 className="text-6xl font-bold text-[#0bccc1]">45K+</h2>
                    <p className="text-2xl mt-5 leading-snug font-semibold">
                      Trees Planted Through Conservation
                    </p>
                  </div>
                  <div className="w-full h-[1px] bg-[#f5f7f4]/10 my-10" />
                  <div>
                    <h2 className="text-6xl font-bold text-[#0bccc1]">80+</h2>
                    <p className="text-2xl mt-5 leading-snug font-semibold">
                      Communities Actively Supported
                    </p>
                  </div>
                </motion.div>

                {/* Right info */}
                <div>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    className="w-15 h-15 rounded-full bg-gradient-to-r from-[#0bccc1] to-[#07ebd1] flex items-center justify-center shadow-[0_0_30px_rgba(11,204,193,0.4)] mb-8"
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
                    >
                      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                    </svg>
                  </motion.div>

                  <h3 className="text-4xl font-bold mb-5">
                    Sustainability Planning
                  </h3>
                  <p className="text-[#b8c5d6] text-lg leading-relaxed mb-8">
                    Strategic planning to reduce environmental footprint and
                    improve long term responsibility.
                  </p>
                  <div className="w-full h-[1px] bg-[#f5f7f4]/10 mb-8" />

                  <div className="space-y-5">
                    {[
                      "Our planning focuses on realistic goals",
                      "We create structured sustainability plans help",
                    ].map((txt, i) => (
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
                          className="text-[#0bccc1]"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <path d="m9 12 2 2 4-4" />
                        </svg>
                        <p className="text-[#b8c5d6] text-lg">{txt}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 10% teal CTA */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="group mt-16 flex items-center overflow-hidden rounded-full bg-gradient-to-r from-[#0bccc1] to-[#07ebd1]"
              >
                <span className="px-7 py-4 text-[#0c264b] text-xl font-semibold">
                  Learn More
                </span>
                <span className="w-16 h-16 flex items-center justify-center bg-[#0c264b] text-[#f5f7f4] group-hover:bg-black transition duration-300">
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
            </motion.div>

            {/* RIGHT image layout */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative grid grid-cols-[1fr_280px] gap-6 items-center"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative rounded-[32px] overflow-hidden"
              >
                <Image
                  src="/Biger.png"
                  alt="People"
                  width={700}
                  height={700}
                  className="w-full h-120 object-cover"
                />
              </motion.div>

              <div className="flex flex-col gap-6">
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
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="rounded-4xl overflow-hidden"
                >
                  <Image
                    src="/mid.jpg"
                    alt="Wind"
                    width={400}
                    height={320}
                    className="w-full object-cover h-80"
                  />
                </motion.div>
              </div>

              {/* Rotating badge */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                className="absolute top-1/2 right-48 -translate-y-1/2 z-20"
              >
                <div className="relative w-44 h-44 flex items-center justify-center">
                  <svg viewBox="0 0 200 200" className="absolute w-full h-full">
                    <defs>
                      <path
                        id="circlePath"
                        d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                      />
                    </defs>
                    <text
                      fill="#0bccc1"
                      fontSize="15"
                      fontWeight="700"
                      letterSpacing="3"
                    >
                      <textPath href="#circlePath">
                        • Contact Us • Contact Us • Contact Us •
                      </textPath>
                    </text>
                  </svg>
                  <div className="w-24 h-24 rounded-full bg-[#0c264b] border border-[#0bccc1] flex items-center justify-center shadow-[0_0_40px_rgba(11,204,193,0.4)]">
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
          FEATURES — 30% light bg, 70% navy text, 10% teal icon bg
      ============================================================ */}
      <section className="relative overflow-hidden bg-[#f5f7f4] py-24">
        <h1 className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 text-[220px] font-black uppercase tracking-wider text-[#0bccc1]/10 select-none hidden lg:block">
          Greva
        </h1>

        <motion.div
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-1/3 left-1/2 w-4 h-4 rounded-full bg-[#0bccc1]"
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-[#0bccc1]/20 text-[#0c264b] px-4 py-1 rounded-full text-sm inline-block"
            >
              our Features
            </motion.span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl md:text-4xl font-bold text-center py-10 px-10 text-[#0c264b] leading-tight"
          >
            Helping Communities, Organizations,& Individuals Take Concrete Step
            Toward a Healthier Planet
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-[#64748b] max-w-2xl text-center mx-auto mb-12"
          >
            Offering trusted environmental services...
          </motion.p>

          <div className="grid lg:grid-cols-3 gap-10 items-center">
            {/* LEFT */}
            <div className="space-y-10">
              {featuresLeft.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.2 }}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-[30px] p-10 shadow-sm hover:shadow-2xl transition duration-500 border border-transparent hover:border-[#0bccc1]/20"
                >
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="w-16 h-16 rounded-full bg-[#0bccc1] flex items-center justify-center text-[#0c264b] shadow-lg"
                  >
                    {item.icon}
                  </motion.div>
                  <h2 className="text-[36px] font-bold text-[#0c264b] mt-8 leading-tight">
                    {item.title}
                  </h2>
                  <p className="text-[#64748b] text-lg leading-relaxed mt-5">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CENTER */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative flex justify-center mt-20"
            >
              <div className="absolute w-[380px] h-[380px] bg-[#0bccc1]/20 blur-[120px] rounded-full bottom-0" />
              <Image
                src="/worker.png"
                alt="Worker"
                width={520}
                height={780}
                sizes="100vw"
                className="relative z-10 object-contain h-[600px]"
              />
            </motion.div>

            {/* RIGHT */}
            <div className="space-y-10">
              {featuresRight.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.2 }}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-[30px] p-10 shadow-sm hover:shadow-2xl transition duration-500 border border-transparent hover:border-[#0bccc1]/20"
                >
                  <motion.div
                    whileHover={{ rotate: -10, scale: 1.1 }}
                    className="w-16 h-16 rounded-full bg-[#0bccc1] flex items-center justify-center text-[#0c264b] shadow-lg"
                  >
                    {item.icon}
                  </motion.div>
                  <h2 className="text-[36px] font-bold text-[#0c264b] mt-8 leading-tight">
                    {item.title}
                  </h2>
                  <p className="text-[#64748b] text-lg leading-relaxed mt-5">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
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

        <motion.div
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-72 right-[22%] w-4 h-4 rounded-full bg-[#0bccc1] z-20"
        />

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
                className="group mt-4 bg-gradient-to-r from-[#0bccc1] to-[#07ebd1] text-[#0c264b] px-6 py-2 rounded-full font-bold text-xl flex items-center gap-5 shadow-xl"
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
                <span className="px-6 py-4 text-[#0c264b] text-xl font-bold">
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
                      <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#0bccc1] text-[#0c264b] shadow-lg">
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
                className="inline-flex items-center gap-3 rounded-full bg-[#0c264b]/40 border border-[#0bccc1]/30 px-6 py-3 px-2 py-1 hover:bg-white transition-all duration-300"
              >
                <span className="w-2 h-2 rounded-full bg-[#0bccc1]" />
                <span className="text-[#0c264b] text-md font-medium">
                  {tag}
                </span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="mt-4 flex flex-wrap items-center justify-center gap-4 text-center"
          >
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white shadow-lg">
                <Image
                  src="/author-1.jpg"
                  alt="avatar"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="-ml-3 flex items-center justify-center w-8 h-8 rounded-full bg-[#0bccc1] border-4 border-[#f5f7f4]">
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
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                  <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                </svg>
              </div>
            </div>
            <p className="text-[#0c264b] text-md">
              Let&apos;s make something great work together.
            </p>
            <button className="text-[#0c264b] hover:text-[#0bccc1] transition-all duration-300 text-md font-semibold underline underline-offset-4">
              Get Free Quote
            </button>
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          VIDEO SECTION — 70% navy bg overlay, 10% teal accents
      ============================================================ */}
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
              className="group flex items-center w-fit bg-gradient-to-r from-[#0bccc1] to-[#07ebd1] text-[#071c34] font-semibold rounded-full overflow-hidden"
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

      {/* ============================================================
          TEAM — 30% light bg, 70% navy text, lime accent touches
      ============================================================ */}
      <section className="relative overflow-hidden bg-[#f5f7f4] py-24 lg:py-32">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-[#7ef14d]/10 blur-[140px] rounded-full" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#0bccc1]/10 blur-[120px] rounded-full" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-3 bg-white border border-[#07ebd1] px-6 py-3 rounded-full shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-[#07ebd1]" />
              <span className="text-[#0bccc1] font-semibold text-lg">
                Our Teams
              </span>
            </div>

            <h2 className="mt-6 text-[#0c264b] text-5xl sm:text-6xl xl:text-7xl font-black leading-[1.08] tracking-[-2px]">
              The People Behind Our Mission
            </h2>

            <p className="mt-8 mx-auto max-w-3xl text-[#64748b] text-xl leading-[1.9]">
              From research and planning to community projects, our team works
              together to drive meaningful environmental change.
            </p>
          </motion.div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 90 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group rounded-[34px] border border-[#07ebd1] bg-[#0bccc1]/10 overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
              >
                <div className="relative overflow-hidden rounded-[30px] m-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={700}
                    height={700}
                    className="w-full h-max object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute top-8 right-8 w-20 h-20 rounded-full bg-[#0bccc1]/30 backdrop-blur-xl border border-white/20"
                  />
                </div>

                <div className="px-8 pb-8">
                  <h3 className="text-[#0c264b] text-4xl font-black">
                    {member.name}
                  </h3>
                  <p className="mt-4 text-[#64748b] text-xl leading-[1.8]">
                    {member.role}
                  </p>
                  <div className="mt-8 h-[1px] w-full bg-[#d6ded8]" />

                  {/* ─────────────────────────────────────────────────────────────
                      BUG FIX #1 — Social icons array was broken:
                      Original code used ((<FaDribbble />), (<FaTwitter />), ...)
                      which is a comma-operator expression, NOT an array of 4 items.
                      It wrapped everything in ONE tuple, rendering only the last icon.
                      Fixed: each icon is a proper separate array element.
                  ───────────────────────────────────────────────────────────── */}
                  <div className="mt-8 flex items-center gap-4">
                    {[
                      <FaDribbble key="d" />,
                      <FaTwitter key="t" />,
                      <FaFacebook key="f" />,
                      <FaInstagramSquare key="i" />,
                    ].map((icon, i) => (
                      <button
                        key={i}
                        className="group/social flex items-center justify-center w-14 h-14 rounded-full border border-[#d6ded8] bg-white text-[#0c264b] hover:bg-[#0bccc1] hover:border-[#07ebd1] transition-all duration-300"
                      >
                        <span className="transition-transform duration-300 group-hover/social:scale-110">
                          {icon}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          FAQ — 70% navy bg, 30% white text, 10% teal accents
      ============================================================ */}
      <section className="relative overflow-hidden bg-[#0c264b] py-20 md:py-28">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#0bccc1]/10 blur-[160px]" />

        <motion.div
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-[22%] left-[62%] w-3 h-3 rounded-full bg-[#0bccc1]"
        />

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-start">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 bg-[#102f5c] border border-[#334155] rounded-full px-5 py-2">
                <div className="w-2 h-2 rounded-full bg-[#0bccc1]" />
                <span className="text-[#f5f7f4] font-medium text-sm md:text-base">
                  Frequently Asked Questions
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#f5f7f4] leading-[1.1] mt-8 max-w-2xl">
                Clear Information About Our Environmental Approach
              </h2>

              <p className="text-[#b8c5d6] text-lg leading-relaxed mt-8 max-w-xl">
                Explore detailed yet easy to understand information about our
                environmental practices, conservation efforts, and long-term
                sustainability strategies.
              </p>

              {/* Progress bars */}
              <div className="mt-14 flex flex-col lg:flex-row lg:items-center gap-12">
                <div className="flex-1 space-y-10">
                  {[
                    { label: "Climate Action", pct: "95%", w: "95%" },
                    { label: "Renewable Energy", pct: "90%", w: "90%" },
                  ].map((bar, i) => (
                    <div key={i}>
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-[#f5f7f4] text-2xl font-bold">
                          {bar.label}
                        </h4>
                        <span className="text-[#0bccc1] text-2xl font-black">
                          {bar.pct}
                        </span>
                      </div>
                      <div className="w-full h-3 rounded-full bg-[#102f5c] overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: bar.w }}
                          transition={{ duration: 1 + i * 0.2 }}
                          className="h-full rounded-full bg-[#0bccc1]"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 18,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="relative w-44 h-44 rounded-full border-[10px] border-[#0bccc1] bg-[#102f5c] flex items-center justify-center"
                  >
                    <div className="absolute inset-0 rounded-full border border-[#334155]" />
                    <div className="text-center">
                      <div className="text-5xl text-[#0bccc1]">✺</div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-[85%] h-[85%] rounded-full border border-dashed border-[#0bccc1]/40" />
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* ─────────────────────────────────────────────────────────────
                BUG FIX #2 — FAQ chevron never changed direction.
                Both open/closed states used lucide-chevron-up SVG path.
                Fixed: closed state uses chevron-down path (m6 9 6 6 6-6).
            ───────────────────────────────────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="space-y-6"
            >
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`rounded-[28px] overflow-hidden border transition-all duration-500 ${active === index ? "bg-[#102f5c] border-[#0bccc1]" : "bg-[#102f5c]/50 border-[#334155]"}`}
                >
                  <button
                    onClick={() => setActive(active === index ? -1 : index)}
                    className={`w-full flex items-center justify-between gap-5 px-8 py-7 text-left transition-all duration-300 ${active === index ? "bg-[#0bccc1] text-[#0c264b]" : "text-[#f5f7f4] hover:bg-[#102f5c]"}`}
                  >
                    <span className="text-xl md:text-2xl font-bold leading-snug">
                      {faq.question}
                    </span>

                    {active === index ? (
                      /* chevron-up when open */
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
                        <path d="m18 15-6-6-6 6" />
                      </svg>
                    ) : (
                      /* chevron-down when closed — FIXED */
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
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    )}
                  </button>

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
                      <p className="text-[#b8c5d6] text-lg leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Logos */}
          <div className="mt-24">
            <div className="flex items-center gap-6">
              <div className="flex-1 h-[1px] bg-[#334155]" />
              <h3 className="text-[#f5f7f4] text-xl md:text-2xl font-bold text-center whitespace-nowrap">
                Trusted by Leading Environmental Partners
              </h3>
              <div className="flex-1 h-[1px] bg-[#334155]" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8 mt-14">
              {logos.map((logo, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5, scale: 1.03 }}
                  className=" items-center justify-center animate-marquee inline-block gap-3 rounded-2xl border border-[#334155] bg-[#102f5c]/40 px-8 py-6"
                >
                  <div className="w-14 h-14 rounded-full bg-[#0bccc1]/20 flex items-center justify-center">
                    <div className="w-7 h-7 rounded-full border-4 border-[#0bccc1]" />
                  </div>
                  <span className="text-[#f5f7f4] text-2xl font-black ">
                    {logo}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          HOW IT WORKS — 30% light bg, 70% navy text, 10% teal steps
      ============================================================ */}
      <section className="relative overflow-hidden bg-[#f5f7f4] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="px-7 py-3 rounded-full bg-[#e4e8df] flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#0bccc1]"></span>
              <span className="text-[#0c264b] font-semibold text-lg">
                How It Works
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mt-10"
          >
            <h1 className="text-5xl md:text-7xl font-black text-[#0c264b] leading-tight">
              From Awareness to Action
            </h1>
            <p className="text-[#64748b] text-lg max-w-3xl mx-auto mt-8 leading-relaxed">
              We guide individuals and organizations from understanding
              environmental challenges to taking meaningful actions that create
              real, lasting impact.
            </p>
          </motion.div>

          {/* Step pills */}
          <div className="hidden lg:block relative mt-28">
            <div className="absolute top-6 left-0 w-full h-[1px] bg-[#d1d5db]"></div>
            <div className="grid grid-cols-3 relative z-10">
              {process.map((item, index) => (
                <div key={index} className="flex justify-center">
                  <div
                    className={`px-8 py-3 rounded-full text-lg font-bold shadow-md ${item.dark ? "bg-[#0c264b] text-[#f5f7f4]" : "bg-[#0bccc1] text-[#0c264b]"}`}
                  >
                    {item.step}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:hidden flex flex-wrap gap-4 justify-center mt-6">
            {process.map((item, index) => (
              <div
                key={index}
                className={`px-6 py-2 rounded-full font-semibold ${item.dark ? "bg-[#0c264b] text-[#f5f7f4]" : "bg-[#0bccc1] text-[#0c264b]"}`}
              >
                {item.step}
              </div>
            ))}
          </div>

          {/* Process cards */}
          <div className="grid lg:grid-cols-3 gap-8 mt-10">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className={`relative overflow-hidden rounded-[32px] border border-[#d1d5db] ${item.dark ? "bg-[#0c264b] text-[#f5f7f4]" : "bg-[#f5f7f4] text-[#0c264b]"}`}
              >
                {item.image && (
                  <>
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={600}
                      height={700}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[#0c264b]/45"></div>
                  </>
                )}

                <div className="relative z-10 p-10 min-h-[300px] flex flex-col">
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg ${item.dark ? "bg-[#0bccc1] text-[#0c264b]" : "bg-white text-[#0c264b]"}`}
                  >
                    {item.icon}
                  </motion.div>

                  <h2 className="text-4xl font-bold mt-4 leading-tight">
                    {item.title}
                  </h2>
                  <p
                    className={`mt-3 text-lg leading-relaxed ${item.dark ? "text-[#d1dde9]" : "text-[#64748b]"}`}
                  >
                    {item.desc}
                  </p>
                  <div
                    className={`w-full h-[1px] mt-5 ${item.dark ? "bg-[#f5f7f4]/20" : "bg-[#d1d5db]"}`}
                  ></div>

                  <div className="mt-5 space-y-6">
                    {item.points.map((point, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ x: 8 }}
                        className="flex items-center gap-4"
                      >
                        <span className="w-2 h-2 rounded-full bg-[#0bccc1]"></span>
                        <p
                          className={`text-lg ${item.dark ? "text-[#f5f7f4]" : "text-[#64748b]"}`}
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
};

export default About;
