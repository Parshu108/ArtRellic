"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";


export default function Testimonials() {
      const testimonials = [
        {
          quote:
            "The team built a high-performance web application that streamlined our operations and improved productivity across departments.",
          name: "Jerome Bell",
          role: "Community Project Lead",
          image: "/user1.jpg",
        },

        {
          quote:
            "Their expertise in React, Next.js, and modern technologies helped us launch our product faster than expected.",
          name: "Jane Cooper",
          role: "Environmental Consultant",
          image: "/user2.jpg",
        },

        {
          quote:
            "From planning to deployment, the development process was smooth and transparent. The final solution perfectly matched our requirements.",
          name: "Eleanor Pena",
          role: "Community Project Lead",
          image: "/user4.jpg",
        },
      ];

  return (
    <>
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
          <div className="absolute inset-0 bg-secondary/10"></div>
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
          className="absolute top-72 right-[22%] w-4 h-4 rounded-full bg-secondary z-20"
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
                <span className="w-2 h-2 rounded-full bg-[#07ebd1]"></span>

                <span className="text-[#0bccc1] font-semibold text-lg">
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
                Trusted by Businesses for Modern Web & Software Development
                Solutions
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
                Discover how our technology services help businesses streamline
                operations, improve customer experiences, and accelerate digital
                growth.
              </motion.p>

              {/* BUTTON */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="group mt-4 bg-gradient-to-r from-[#0bccc1] to-[#07ebd1] text-white px-6 py-2 rounded-full font-bold text-xl flex items-center gap-5 shadow-xl"
              >
                View All Testimonials
                <span className="w-14 h-14 rounded-full bg-[#0c264b] text-white flex items-center justify-center group-hover:translate-x-2 transition duration-300">
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
                  <div className="flex items-center gap-1 text-[#0bccc1]">
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
                  {item.quote}
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
    </>
  );
}
