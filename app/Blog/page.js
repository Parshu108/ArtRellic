"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const blogdata = [
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
  {
    id: 4,
    title: "How Sustainable Living Can Reduce Your Carbon Footprint",
    category: "Eco-friendly",
    image: "/blog4.jpg",
  },
  {
    id: 5,
    title: "The Role of Renewable Energy in Fighting Climate Change",
    category: "Renewable energy",
    image: "/blog5.jpg",
  },
  {
    id: 6,
    title: "Reducing Waste Through Recycling & Circular Economy",
    category: "community",
    image: "/blog6.jpg",
  },
];

const page = () => {
  const BLOGS_PER_PAGE = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(blogdata.length / BLOGS_PER_PAGE);

  const paginatedBlogs = blogdata.slice(
    (currentPage - 1) * BLOGS_PER_PAGE,
    currentPage * BLOGS_PER_PAGE,
  );

  // ✅ FIX 1: pageNumbers is a function — call it with ()
  const pageNumbers = () => {
    if (totalPages <= 5)
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    if (currentPage <= 3) return [1, 2, 3, "...", totalPages];
    if (currentPage >= totalPages - 2)
      return [1, "...", totalPages - 2, totalPages - 1, totalPages];
    return [
      1,
      "...",
      currentPage - 1,
      currentPage,
      currentPage + 1,
      "...",
      totalPages,
    ];
  };

  return (
    <>
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
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c264b]/20 via-[#0bccc1]/10 to-transparent" />
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#0c264b]/20 to-transparent" />

        <div className="relative z-20 h-[calc(100%-96px)] flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl sm:text-7xl md:text-8xl xl:text-[120px] font-black text-[#f5f7f4] leading-none"
            >
              Our blogs
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="flex items-center justify-center gap-4 mt-8"
            >
              <Link
                href="/"
                className="text-[#f5f7f4] text-xl hover:text-[#0bccc1] transition duration-300"
              >
                Home
              </Link>
              <span className="text-[#0bccc1] text-xl">/</span>
              <span className="text-[#f5f7f4] text-xl font-semibold">Blog</span>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0c264b] to-transparent z-10" />
      </section>

      <section className="relative overflow-hidden bg-[#ffffff] py-20 md:py-22">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#00d2c6]/10 blur-[140px]" />
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-8">
            {/* ✅ FIX 2: use paginatedBlogs instead of blogs */}
            {paginatedBlogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-4xl bg-[#123a63]/10 border border-[#334155]">
                  <div className="relative h-[200px] gap-5 overflow-hidden">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover group-hover:scale-110 transition duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09284b]/80 via-transparent to-transparent" />
                    <div className="absolute top-6 left-6">
                      <div className="bg-[#123a63]/20 backdrop-blur-xl border border-[#334155] rounded-full px-5 py-2">
                        <span className="text-white text-sm font-medium">
                          {blog.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-7">
                    <h3 className="text-2xl font-bold text-black leading-snug group-hover:text-[#00d2c6] transition duration-300">
                      {blog.title}
                    </h3>
                    <div className="w-full h-0.5 bg-[#334155] my-7"></div>
                    <button className="group/btn flex items-center gap-4">
                      <span className="text-black text-lg font-semibold group-hover/btn:text-[#00d2c6] transition duration-300">
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

          <div className="flex items-center justify-center gap-2 mt-14">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              aria-label="Previous page"
              className="w-[42px] h-[42px] rounded-full border border-[#334155] bg-white text-[#123a63] flex items-center justify-center hover:bg-[#123a63] hover:text-white hover:border-[#123a63] transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            {/* ✅ FIX 1: pageNumbers() called as a function */}
            {pageNumbers().map((page, i) =>
              page === "..." ? (
                <span
                  key={i}
                  className="text-[#334155] px-1 text-[15px] leading-[42px]"
                >
                  ···
                </span>
              ) : (
                <button
                  key={i}
                  onClick={() => setCurrentPage(page)}
                  className={`w-[42px] h-[42px] rounded-full text-[15px] font-medium flex items-center justify-center transition duration-300 ${
                    currentPage === page
                      ? "bg-[#00d2c6] text-[#09284b] font-bold border-none shadow-[0_0_0_4px_#00d2c620]"
                      : "border border-[#334155] bg-white text-[#123a63] hover:bg-[#123a63] hover:text-white hover:border-[#123a63]"
                  }`}
                >
                  {page}
                </button>
              ),
            )}

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              aria-label="Next page"
              className="w-[42px] h-[42px] rounded-full border border-[#334155] bg-white text-[#123a63] flex items-center justify-center hover:bg-[#123a63] hover:text-white hover:border-[#123a63] transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
