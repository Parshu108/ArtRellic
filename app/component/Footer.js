"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowRight, PhoneCall, Mail } from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaXTwitter,
} from "react-icons/fa6";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#09284b] text-white">
      {/* ================= BACKGROUND GLOW ================= */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-[#123a63]/10 blur-[160px]" />

      {/* FLOATING DOT */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          x: [0, 12, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="absolute top-[34%] left-[58%] w-3 h-1 rounded-full bg-[#84ec5a]"
      />

      <div className="max-w-7xl mx-auto px-2 md:px-3 xl:px-3 py-6 md:py-6 relative z-10">
        {/* ================================================= */}
        {/* NEWSLETTER */}
        {/* ================================================= */}

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr_1fr] gap-6 xl:gap-16 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-[420px]"
          >
            <h2 className="text-2xl md:text-3xl font-black leading-tight">
              Subscribe Our Newsletter to Get Latest Updates
            </h2>
          </motion.div>

          {/* CENTER */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gray-300 text-base md:text-md leading-relaxed">
              Stay informed with the latest environmental news, sustainability
              insights, and eco friendly initiatives.
            </p>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <div className="flex items-center overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
              <input
                type="email"
                placeholder="Enter Email Address*"
                className="w-full bg-transparent px-6 py-5 text-base md:text-lg outline-none placeholder:text-gray-400"
              />

              <button className="w-16 h-16 flex items-center justify-center bg-cyan-400 text-black hover:bg-cyan-500 transition duration-300">
                <ArrowRight size={28} />
              </button>
            </div>
          </motion.div>
        </div>

        {/* LINE */}
        <div className="w-full h-[1px] bg-white/10 my-4 md:my-8"></div>

        {/* ================================================= */}
        {/* FOOTER CONTENT */}
        {/* ================================================= */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 xl:gap-16">
          {/* ================================================= */}
          {/* LEFT SECTION */}
          {/* ================================================= */}

          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-[420px]"
          >
            {/* LOGO */}
            <div className="flex items-center gap-4">
              <Image
                src="/logo/Logo.jpeg"
                alt="logo"
                width={70}
                height={70}
                className="rounded-full"
              />

              <h2 className="text-3xl font-black">Greva</h2>
            </div>

            {/* DESC */}
            <p className="text-gray-300 leading-relaxed mt-8 text-base md:text-md">
              We are dedicated to protect nature promoting sustainable living
              through conservation initiatives, climate action, and
              environmental education.
            </p>

            {/* CONTACT CARD */}
            <div className="mt-10 rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-4 md:p-6">
              {/* PHONE */}
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-cyan-400">
                  <PhoneCall size={24} />
                </div>

                <div>
                  <h3 className="text-md font-bold">Phone Number:</h3>

                  <p className="text-gray-300 text-base">+123 456 789</p>
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex items-center gap-5 mt-4">
                <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-cyan-400">
                  <Mail size={24} />
                </div>

                <div>
                  <h3 className="text-md font-bold">Email Address:</h3>

                  <p className="text-gray-300 text-base">info@domain.com</p>
                </div>
              </div>

              {/* LINE */}
              <div className="w-full h-[1px] bg-white/10 my-4"></div>

              {/* SOCIAL */}
              <div className="flex items-center justify-between flex-wrap gap-3">
                <h3 className="text-2xl font-bold">Follow Us:</h3>

                <div className="flex items-center flex-wrap gap-2">
                  {[
                    <FaPinterestP />,
                    <FaXTwitter />,
                    <FaFacebookF />,
                    <FaInstagram />,
                  ].map((icon, index) => (
                    <motion.div
                      key={index}
                      whileHover={{
                        y: -5,
                        scale: 1.1,
                      }}
                      className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-cyan-600 hover:text-black transition duration-300 cursor-pointer"
                    >
                      {icon}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* ================================================= */}
          {/* QUICK LINKS */}
          {/* ================================================= */}

          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xl md:text-2xl font-black mb-4">Quick Links</h2>

            <div className="space-y-5 pt-2">
              {["Home", "About Us", "Our Services", "Blogs", "Contact Us"].map(
                (item, index) => (
                  <Link
                    href="/"
                    key={index}
                    className="group flex items-center gap-2 text-lg md:text-lg text-gray-300 hover:text-cyan-500 transition duration-300"
                  >
                    <ChevronRight
                      size={20}
                      className="group-hover:translate-x-1 transition duration-300"
                    />

                    {item}
                  </Link>
                ),
              )}
            </div>
          </motion.div>

          {/* ================================================= */}
          {/* FOCUS AREA */}
          {/* ================================================= */}

          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <h2 className="text-xl md:text-2xl font-black mb-4">
              Our Focus Areas
            </h2>

            <div className="space-y-5 pt-2">
              {[
                "Climate Action",
                "Biodiversity Conservation",
                "Renewable Energy",
                "Waste Management",
                "Environment Education",
              ].map((item, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-2 text-lg md:text-lg text-gray-300 hover:text-cyan-500 transition duration-300 cursor-pointer"
                >
                  <ChevronRight
                    size={22}
                    className="group-hover:translate-x-1 transition duration-300"
                  />

                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* ================================================= */}
          {/* CONTACT INFO */}
          {/* ================================================= */}

          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-xl md:text-2xl font-black mb-4">
              Contact Information
            </h2>

            <p className="text-md md:text-lg text-gray-300 leading-relaxed">
              4517 Washington Ave. Manchester, Kentucky 39495
            </p>

            {/* LINE */}
            <div className="w-full h-[1px] bg-white/10 my-4"></div>

            <h2 className="text-xl md:text-2xl font-black mb-4">
              Working Hours
            </h2>

            <div className="space-y-6">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <span className="text-md md:text-lg font-semibold">
                  Mon - Fri :
                </span>

                <span className="text-gray-300 text-base md:text-lg">
                  10:00 AM - 05:00 PM
                </span>
              </div>

              <div className="flex items-center justify-between gap-4 flex-wrap">
                <span className="text-md md:text-lg font-semibold">
                  Saturday :
                </span>

                <span className="text-gray-300 text-base md:text-lg">
                  12:00 PM - 05:00 PM
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="relative w-[940px] h-[1px] bg-white/10 -mt-34 ml-80"></div>

        {/* ================================================= */}
        {/* COPYRIGHT */}
        {/* ================================================= */}

        <div className="w-full h-[1px] bg-white/10 mt-10 md:mt-50 mb-6"></div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-sm md:text-base text-gray-400">
            Copyright © 2026 All Rights Reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-gray-400">
            <span className="hover:text-[#84ec5a] transition cursor-pointer">
              Privacy Policy
            </span>

            <span className="hover:text-[#84ec5a] transition cursor-pointer">
              Terms & Conditions
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
