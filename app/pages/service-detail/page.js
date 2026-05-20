"use client"

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";


const page = () => {
  const [active, setActive] = useState(0);

  const faqs = [
    {
      question: "How can we get started with your services?",
      answer:
        "Getting started is simple. Reach out through our contact form or consultation call and our team will guide you through planning, strategy, and implementation based on your sustainability goals.",
    },
    {
      question: "How do you measure environmental impact?",
      answer:
        "We use data-driven reporting, environmental analytics, and measurable sustainability metrics to evaluate impact and long-term improvements.",
    },
    {
      question: "How do you support sustainability initiatives?",
      answer:
        "We provide strategic guidance, research support, conservation planning, and eco-friendly implementation for organizations and communities.",
    },
    {
      question: "Do you provide reports and documentation?",
      answer:
        "Yes. We deliver transparent reports, progress tracking, documentation, and measurable performance insights for every project.",
    },
    {
      question: "Can you help with regulatory compliance?",
      answer:
        "Absolutely. Our experts assist with sustainability regulations, environmental standards, and compliance documentation.",
    },
  ];

  
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
              Environmental Research
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
              <span className="text-[#0bccc1] text-xl">/</span>
              <span className="text-[#f5f7f4] text-xl font-semibold">
                Environmental Research
              </span>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0c264b] to-transparent z-10" />
      </section>

      <section className="w-full bg-[#EAF4F1] py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              {/* left sidebar */}
              <div className="sticky top-10 self-start space-y-8 ">
                {/* Service Menu */}
                <div className="bg-[#0c264b] rounded-[30px] overflow-hidden shadow-xl border border-[#5C8374]/20 position-sticky">
                  {/* Heading */}
                  <div className="bg-[#0bccc1] px-8 py-7">
                    <h2 className="text-3xl font-bold text-white">
                      Explore Our Services
                    </h2>
                  </div>

                  {/* Menu */}
                  <div className="p-8 space-y-1">
                    {[
                      "Sustainability Planning",
                      "Nature Conservation",
                      "Community Engagement",
                      "Climate Action Solutions",
                      "Waste Management",
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="group flex items-center justify-between py-3 border-b border-[#93B1A6]/10 cursor-pointer transition-all duration-300 hover:translate-x-1"
                      >
                        <span className="text-[#EAF4F1] text-lg font-medium group-hover:text-[#07ebd1] transition-all">
                          {item}
                        </span>

                        <div className="w-10 h-10 rounded-full bg-[#0bccc1] flex items-center justify-center border border-[#5C8374]/30 group-hover:bg-[#07ebd1] transition-all">
                          <span className="text-[#ffffff] group-hover:text-white text-xl">
                            →
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Small Card */}
                <div className="sticky overflow-hidden rounded-[30px] h-80">
                  <Image
                    src="/service-info-image.jpg"
                    alt=""
                    width={100}
                    height={80}
                    className="w-full h-80  object-cover hover:scale-110 transition-all duration-700"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0bccc1]/20 to-[#07ebd1]/40 to-transparent" />

                  {/* Content */}
                  <div className="absolute bottom-2 left-8 right-8">
                    <div className="w-14 h-14 rounded-full bg-[#0bccc1] text-[#ffffff] flex items-center justify-center mb-4 shadow-lg">
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
                        className="lucide lucide-phone-icon lucide-phone"
                      >
                        <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                      </svg>
                    </div>

                    <h3 className="text-xl font-bold text-white leading-tight mt-10">
                      Let’s Build a Sustainable Future
                    </h3>

                    <p className="text-[#ffffff] mt-10 text-lg leading-relaxed">
                      Innovative environmental solutions that create measurable
                      impact.
                    </p>

                    <button className="mt-6 px-7 py-4 rounded-full bg-[#0bccc1] text-white font-semibold hover:bg-[#07ebd1] hover:text-[#040D12] transition-all duration-300">
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="lg:col-span-8 space-y-10">
              {/* Main Image */}
              <div className="rounded-[35px] overflow-hidden shadow-2xl border border-[#5C8374]/10">
                <Image
                  src="/service-single-image.jpg"
                  alt=""
                  width={100}
                  height={80}
                  className="w-full h-[650px] object-cover"
                />
              </div>

              {/* Content */}
              <div className="space-y-8 ">
                {/* Paragraph */}
                <p className="text-[#183D3D] text-xl leading-relaxed">
                  Our Environmental Research service provides deep analysis,
                  sustainability insights, and measurable strategies to help
                  organizations build a greener and more responsible future.
                </p>

                <p className="text-[#5C8374] text-lg leading-relaxed">
                  We conduct comprehensive assessments covering climate impact,
                  renewable energy opportunities, biodiversity preservation,
                  sustainable resource management, and environmental policy
                  planning.
                </p>
              </div>

              {/* RIGHT SIDE CONTENT */}
              <div className="lg:col-span-8 space-y-10">
                {/* HEADING */}
                <div>
                  {/* Title */}
                  <h2 className="text-4xl lg:text-5xl font-bold text-[#040D12] leading-tight">
                    Our Key Focus Areas
                  </h2>

                  {/* Description */}
                  <p className="mt-4 text-[#183D3D] text-md leading-relaxed max-w-5xl">
                    We focus on delivering accurate research, practical
                    solutions, and measurable impact across multiple
                    environmental sectors. From monitoring natural resources to
                    assessing human impact, our key focus areas ensure every
                    project is guided by reliable data, responsible practices,
                    and long-term sustainability goals.
                  </p>
                </div>

                {/* STATS CARDS */}
                <div className="grid md:grid-cols-2 gap-8">
                  {/* CARD 1 */}
                  <div className="bg-white border border-[#BFC9D1] rounded-[30px] p-6 shadow-sm hover:shadow-xl transition-all duration-300">
                    <h3 className="text-5xl font-bold text-[#040D12]">500K+</h3>

                    <p className="mt-6 text-[#183D3D] text-lg leading-relaxed">
                      Contributing to reforestation and ecosystem restoration
                      efforts worldwide.
                    </p>

                    <div className="w-full h-[1px] bg-[#BFC9D1] my-6" />

                    <div className="flex items-center gap-3">
                      <span className="w-3 h-3 rounded-full bg-[#0bccc1]" />

                      <span className="text-[#040D12] font-semibold text-xl">
                        Trees Planted & Restored
                      </span>
                    </div>
                  </div>

                  {/* CARD 2 */}
                  <div className="bg-white border border-[#BFC9D1] rounded-[30px] p-10 shadow-sm hover:shadow-xl transition-all duration-300">
                    <h3 className="text-5xl font-bold text-[#040D12]">98%</h3>

                    <p className="mt-6 text-[#183D3D] text-lg leading-relaxed">
                      Trusted by partners and organizations for reliable,
                      transparent, and impactful solutions.
                    </p>

                    <div className="w-full h-[1px] bg-[#BFC9D1] my-6" />

                    <div className="flex items-center gap-3">
                      <span className="w-3 h-3 rounded-full bg-[#0bccc1]" />

                      <span className="text-[#040D12] font-semibold text-xl">
                        Client Satisfaction Rate
                      </span>
                    </div>
                  </div>
                </div>

                {/* PROGRESS SECTION */}
                <div className="pt-4 border-t border-[#BFC9D1]">
                  <div className="space-y-10">
                    {/* ITEM */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-2xl font-semibold text-[#040D12]">
                          Air & Water Quality Monitoring
                        </h4>

                        <span className="text-[#040D12] font-bold text-2xl">
                          92%
                        </span>
                      </div>

                      <div className="relative w-full h-4 rounded-full bg-[#D7E0DD] overflow-hidden">
                        <div className="absolute left-0 top-0 h-full w-[92%] rounded-full bg-[#0bccc1]" />

                        {/* Dot */}
                        <div className="absolute left-[90%] top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#0bccc1] border-4 border-white shadow-lg" />
                      </div>
                    </div>

                    {/* ITEM */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-2xl font-semibold text-[#040D12]">
                          Public Administration
                        </h4>

                        <span className="text-[#040D12] font-bold text-2xl">
                          80%
                        </span>
                      </div>

                      <div className="relative w-full h-4 rounded-full bg-[#D7E0DD] overflow-hidden">
                        <div className="absolute left-0 top-0 h-full w-[80%] rounded-full bg-[#0bccc1]" />

                        {/* Dot */}
                        <div className="absolute left-[78%] top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#0bccc1] border-4 border-white shadow-lg" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* RIGHT SIDE CONTENT */}
                <div className="lg:col-span-8 space-y-10">
                  {/* TOP CONTENT */}
                  <div>
                    {/* Title */}
                    <h2 className="text-5xl lg:text-6xl font-bold text-[#040D12] leading-tight">
                      What You'll Get
                    </h2>

                    {/* Description */}
                    <p className="mt-8 text-[#183D3D] text-lg leading-relaxed max-w-5xl">
                      You'll receive practical, data-driven solutions designed
                      to create real environmental impact. From expert guidance
                      and clear insights to measurable results and transparent
                      reporting, we make sure every step supports smarter
                      decisions, sustainable growth, and long-term positive
                      change.
                    </p>
                  </div>

                  {/* MAIN BENEFITS CARD */}
                  <div className="bg-white border border-[#BFC9D1] rounded-[35px] p-8 lg:p-10 shadow-sm hover:shadow-xl transition-all duration-500">
                    <div className="grid lg:grid-cols-2 gap-10 items-center">
                      {/* LEFT IMAGE */}
                      <div className="relative">
                        {/* Glow */}
                        <div className="absolute inset-0 bg-[#0bccc1]/20 blur-3xl rounded-full" />

                        {/* Image Container */}
                        <div className="relative overflow-hidden rounded-[60px]">
                          <Image
                            src="/sidebar-cta-box-image.jpg"
                            alt="benefits"
                            width={100}
                            height={100}
                            className="w-full h-[430px] object-cover hover:scale-105 transition-all duration-700"
                          />
                        </div>
                      </div>

                      {/* RIGHT CONTENT */}
                      <div className="space-y-8">
                        {/* ITEM 1 */}
                        <div className="group">
                          <div className="flex gap-5">
                            {/* Icon */}
                            <div className="w-12 h-12 rounded-full bg-[#0bccc1] flex items-center justify-center shadow-lg shrink-0 group-hover:scale-110 transition-all duration-300">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-7 h-7 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 17v-2a4 4 0 014-4h4"
                                />
                              </svg>
                            </div>

                            {/* Text */}
                            <div>
                              <h3 className="text-md font-bold text-[#040D12]">
                                Expert Guidance & Clear Strategy
                              </h3>

                              <p className="mt-1 text-[#183D3D] text-sm leading-relaxed">
                                You'll receive practical, research-backed
                                guidance tailored specifically to your
                                environmental goals.
                              </p>
                            </div>
                          </div>

                          <div className="mt-2 h-[1px] bg-[#BFC9D1]" />
                        </div>

                        {/* ITEM 2 */}
                        <div className="group">
                          <div className="flex gap-5">
                            {/* Icon */}
                            <div className="w-12 h-12 rounded-full bg-[#0bccc1] flex items-center justify-center shadow-lg shrink-0 group-hover:scale-110 transition-all duration-300">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-7 h-7 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </div>

                            {/* Text */}
                            <div>
                              <h3 className="text-md font-bold text-[#040D12]">
                                Measurable Environmental Impact
                              </h3>

                              <p className="mt-1 text-[#183D3D] text-sm leading-relaxed">
                                We focus on real, trackable results that improve
                                sustainability, reduce waste, and increase
                                efficiency.
                              </p>
                            </div>
                          </div>

                          <div className="mt-2 h-[1px] bg-[#BFC9D1]" />
                        </div>

                        {/* ITEM 3 */}
                        <div className="group">
                          <div className="flex gap-5">
                            {/* Icon */}
                            <div className="w-12 h-12 rounded-full bg-[#0bccc1] flex items-center justify-center shadow-lg shrink-0 group-hover:scale-110 transition-all duration-300">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-7 h-7 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M8 10h8m-8 4h6"
                                />
                              </svg>
                            </div>

                            {/* Text */}
                            <div>
                              <h3 className="text-md font-bold text-[#040D12]">
                                Support & Transparent Reporting
                              </h3>

                              <p className="mt-1 text-[#183D3D] text-sm leading-relaxed">
                                Our team stays connected beyond implementation,
                                offering continuous support and clear reporting.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="lg:col-span-8">
                {/* TOP CONTENT */}
                <div className="mb-12">
                  {/* Heading */}
                  <h2 className="text-4xl lg:text-5xl font-bold text-[#040D12] leading-tight">
                    Frequently Asked Questions
                  </h2>

                  {/* Description */}
                  <p className="mt-3 text-[#686d6d] text-md leading-relaxed max-w-5xl">
                    Find clear answers to the most common questions about our
                    services, process, and approach. This section is designed to
                    give you quick, helpful information, save you time, and help
                    you make confident decisions.
                  </p>
                </div>

                {/* FAQ ITEMS */}
                <div className="space-y-5">
                  {faqs.map((faq, index) => (
                    <div
                      key={index}
                      className={`rounded-[24px] border transition-all duration-500 overflow-hidden ${
                        active === index
                          ? "bg-white border-[#07ebd1] shadow-xl"
                          : "bg-white border-[#BFC9D1]"
                      }`}
                    >
                      {/* Question */}
                      <button
                        onClick={() => setActive(active === index ? -1 : index)}
                        className="w-full flex items-center justify-between text-left px-8 py-7"
                      >
                        <h3
                          className={`text-xl lg:text-2xl font-bold transition-all duration-300 ${
                            active === index
                              ? "text-[#0bccc1]"
                              : "text-[#040D12]"
                          }`}
                        >
                          Q{index + 1}. {faq.question}
                        </h3>

                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                            active === index
                              ? "bg-[#0bccc1] text-white rotate-180"
                              : "bg-[#EAF4F1] text-[#040D12]"
                          }`}
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
                            className="lucide lucide-chevron-down-icon lucide-chevron-down"
                          >
                            <path d="m6 9 6 6 6-6" />
                          </svg>
                        </div>
                      </button>

                      {/* Answer */}
                      <div
                        className={`grid transition-all duration-500 ease-in-out ${
                          active === index
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="px-8 pb-8 pt-2 border-t border-[#BFC9D1]">
                            <p className="text-[#183D3D] text-lg leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
