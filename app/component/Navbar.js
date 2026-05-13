"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#0c264b] text-[#0bccc1] p-4 border-b border-slate-700 relative z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Image
            src="/logo/Logo.jpeg"
            alt="Logo"
            width={120}
            height={50}
            priority
            style={{ width: "auto", height: "auto" }}
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <ul className="flex space-x-10 items-center">
            <li className="relative group">
              <Link
                href="/"
                className="text-[#0bccc1]/90 font-semibold transition duration-300 hover:text-[#07ebd1]"
              >
                Home
              </Link>
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-[#0bccc1] to-[#07ebd1] transition-all duration-300 group-hover:w-full"></span>
            </li>

            <li className="relative group">
              <Link
                href="/abouts"
                className="text-[#0bccc1]/90 font-semibold transition duration-300 hover:text-[#07ebd1]"
              >
                About
              </Link>
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-[#0bccc1] to-[#07ebd1] transition-all duration-300 group-hover:w-full"></span>
            </li>

            <li className="relative group">
              <Link
                href="/services"
                className="text-[#0bccc1]/90 font-semibold transition duration-300 hover:text-[#07ebd1]"
              >
                Services
              </Link>
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-[#0bccc1] to-[#07ebd1] transition-all duration-300 group-hover:w-full"></span>
            </li>

            <li className="relative group">
              <Link
                href="/blog"
                className="text-[#0bccc1]/90 font-semibold transition duration-300 hover:text-[#07ebd1]"
              >
                Blog
              </Link>
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-[#0bccc1] to-[#07ebd1] transition-all duration-300 group-hover:w-full"></span>
            </li>

            {/* Dropdown */}
            <li className="relative group">
              <span className="cursor-pointer hover:text-[#0bccc1]">
                Pages ▾
              </span>

              <div className="absolute left-0 top-full mt-4 w-64 bg-[#102f5c] text-[#0bccc1] border border-[#0bccc1]/20 backdrop-blur-md rounded-xl shadow-xl p-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
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
                className="text-[#0bccc1]/90 font-semibold transition duration-300 hover:text-[#07ebd1]"
              >
                Contact
              </Link>
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-[#0bccc1] to-[#07ebd1] transition-all duration-300 group-hover:w-full"></span>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <button className="hidden md:block bg-[#0bccc1] text-[#0c264b] hover:bg-[#07ebd1] shadow-lg shadow-cyan-400/20 font-semibold py-2 px-5 rounded-lg hover:scale-105 transition">
          Contact Us
        </button>

        {/* Mobile Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-2xl">
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-4 bg-[#102f5c] border border-[#0bccc1]/20 rounded-xl p-5 space-y-4">
          <Link
            href="/"
            className="block text-[#0bccc1] hover:text-[#07ebd1] transition"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block text-[#0bccc1] hover:text-[#07ebd1] transition"
          >
            About
          </Link>
          <Link
            href="/services"
            className="block text-[#0bccc1] hover:text-[#07ebd1] transition"
          >
            Services
          </Link>
          <Link
            href="/blog"
            className="block text-[#0bccc1] hover:text-[#07ebd1] transition"
          >
            Blog
          </Link>

          {/* Mobile Dropdown (simple list) */}
          <div>
            <p className="text-cyan-400 font-semibold">Pages</p>
            <ul className="ml-4 mt-2 space-y-2 text-gray-300 text-sm">
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

          <Link
            href="/contact"
            className="block text-gray-300 hover:text-cyan-400"
          >
            Contact
          </Link>

          <button className="w-full bg-gradient-to-r from-[#0bccc1] to-[#07ebd1] text-black py-2 rounded-lg">
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
