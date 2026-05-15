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
                href="/blogs"
                prefetch={false}
                className="text-[#0bccc1]/90 font-semibold transition duration-300 hover:text-[#07ebd1]"
              >
                Blog
              </Link>
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-[#0bccc1] to-[#07ebd1] transition-all duration-300 group-hover:w-full"></span>
            </li>

            {/* Dropdown */}
            <li className="relative group">
              {/* MAIN MENU */}

              <button className="flex items-center gap-2 text-[#0bccc1]/90 font-semibold tracking-wide transition-all duration-300 hover:text-[#07ebd1]">
                Pages
                <span className="text-xs transition-transform duration-300 group-hover:rotate-180">
                  ▾
                </span>
              </button>

              {/* DROPDOWN */}

              <div
                className="
                absolute left-1/2 top-full z-50
                mt-6 w-[200px] -translate-x-1/2
                rounded-3xl border border-[#0bccc1]/20
               bg-[#102f5c]/95
                backdrop-blur-2xl
                shadow-[0_20px_80px_rgba(0,0,0,0.45)]
                p-4
                opacity-0 invisible
                translate-y-5
                transition-all duration-500
                group-hover:opacity-100
                group-hover:visible
                group-hover:translate-y-0

                lg:w-[320px]
              "
              >
                {/* GLOW EFFECT */}

                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#0bccc1]/10 via-transparent to-[#4fffd8]/10 pointer-events-none" />

                {/* MENU LIST */}

                <ul className="relative z-10 flex flex-col gap-2">
                  {[
                    { name: "Service Details", link: "/pages/service-detail" },
                    { name: "Blog Details", link: "/pages/blog-detail" },
                    { name: "Projects", link: "/project" },
                    { name: "Project Details", link: "/project-details" },
                    { name: "Our Team", link: "/teams" },
                    { name: "Team Details", link: "/team-details" },
                    { name: "Testimonials", link: "/pages/testimonial" },
                    { name: "Image Gallery", link: "/images" },
                    { name: "Video Gallery", link: "/videos" },
                    { name: "FAQs", link: "/faq" },
                  ].map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.link}
                        className="
              group/item
              flex items-center justify-between
              rounded-2xl
              px-3 py-2
              text-[15px] font-medium
              text-[#d8f8f5]
              transition-all duration-300

              hover:bg-[#0bccc1]
              hover:text-[#09284b]
              hover:translate-x-1
            "
                      >
                        <span>{item.name}</span>

                        <span
                          className="
                text-lg opacity-0
                -translate-x-2
                transition-all duration-300
                group-hover/item:opacity-100
                group-hover/item:translate-x-0
              "
                        >
                          →
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* BOTTOM BORDER LIGHT */}

                <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-[#0bccc1]/40 to-transparent" />
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
            href="/abouts"
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
            href="/blogs"
            className="block text-[#0bccc1] hover:text-[#07ebd1] transition"
          >
            Blog
          </Link>

          {/* Mobile Dropdown (simple list) */}
          <div>
            <p className="text-cyan-400 font-semibold">Pages</p>
            <ul className="ml-4 mt-2 space-y-2 text-gray-300 text-sm">
              <Link href="service-detail">Service Details</Link>
              <Link href="blog-detail">Blog Details</Link>
              <Link href="project">Projects</Link>
              <Link href="project-details">Project Details</Link>
              <Link href="teams">Our Team</Link>
              <Link href="team-details">Team Details</Link>
              <Link href="testinomial">Testimonials</Link>
              <Link href="images">Image Gallery</Link>
              <Link href="videos">Video Gallery</Link>
              <Link href="faq">FAQs</Link>
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
