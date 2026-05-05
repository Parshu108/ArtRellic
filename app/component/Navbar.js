"use client";

import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="bg-[#0f2b4c] text-white p-4 flex items-center justify-around border-b border-slate-700 relative overflow-visible z-50">
        <div className="text-2xl font-bold">
          <Image
            src="/logo/Logo.jpeg"
            alt="Logo"
            width={80}
            height={30}
            className="inline-block mr-2"
          />
        </div>

        <div>
          <ul className="flex space-x-10">
            {/* 🔥 Wrap each link with relative group (no content change) */}

            <li className="relative group">
              <Link
                href="/"
                className="text-gray-300 font-semibold transition duration-300 hover:text-cyan-400"
              >
                Home
              </Link>

              {/* Animated underline */}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-teal-400 transition-all duration-300 group-hover:w-full"></span>
            </li>

            <li className="relative group">
              <Link
                href="/about"
                className="text-gray-300 font-semibold transition duration-300 hover:text-cyan-400"
              >
                About
              </Link>
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-teal-400 transition-all duration-300 group-hover:w-full"></span>
            </li>

            <li className="relative group">
              <Link
                href="/services"
                className="text-gray-300 font-semibold transition duration-300 hover:text-cyan-400"
              >
                Services
              </Link>
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-teal-400 transition-all duration-300 group-hover:w-full"></span>
            </li>

            <li className="relative group">
              <Link
                href="/blog"
                className="text-gray-300 font-semibold transition duration-300 hover:text-cyan-400"
              >
                Blog
              </Link>
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-teal-400 transition-all duration-300 group-hover:w-full"></span>
            </li>

            <li className="relative group">
              <span className="cursor-pointer hover:text-cyan-400">
                Pages ▾
              </span>

              <div className="absolute left-0 top-full mt-4 w-64 bg-gradient-to-b from-cyan-400 to-teal-400 text-black rounded-xl shadow-xl p-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <ul className="space-y-3 text-sm font-medium">
                  <li>Service Details</li>
                  <li>Blog Details</li>
                  <li>Projects</li>
                  <li>Project Details</li>
                  <li>Our Team</li>
                  <li>Team Details</li>
                  <li>Testimonials</li>
                  <li>Pricing Plan</li>
                  <li>Image Gallery</li>
                  <li>Video Gallery</li>
                  <li>FAQs</li>
                </ul>
              </div>
            </li>

            <li className="relative group">
              <Link
                href="/contact"
                className="text-gray-300 font-semibold transition duration-300 hover:text-cyan-400"
              >
                Contact
              </Link>
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-teal-400 transition-all duration-300 group-hover:w-full"></span>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <button className="bg-gradient-to-r from-cyan-400 to-teal-400 text-black font-semibold py-2 px-5 rounded-lg hover:scale-105 hover:shadow-lg transition duration-300">
          Contact Us
        </button>
      </nav>
    </>
  );
};

export default Navbar;