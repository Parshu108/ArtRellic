"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LatestBlogs() {
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

    return (
        <>
              <section className="relative overflow-hidden bg-[#ffffff] py-20 md:py-22">
        {/* ================= BACKGROUND GLOW ================= */}

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#00d2c6]/10 blur-[140px]" />

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
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

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0bccc1] leading-[1.1] mt-8 max-w-[780px]">
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
                <span className="bg-[#00d2c6] text-[#ffffff] font-bold px-8 py-4 text-lg">
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
                      <div className="bg-[#123a63]/60 backdrop-blur-xl border border-[#334155] rounded-full px-5 py-2">
                        <span className="text-[#ffffff] text-sm font-medium">
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

                    <div className="w-full h-0.5 bg-[#334155] my-7"></div>

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