"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-[#0f2b4c] text-gray-300 py-10 mt-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* 🔷 Top Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-10"
        >
          {/* Logo + Description */}
          <div className="text-center md:text-left">
            <Image
              src="/logo/Logo.jpeg"
              alt="Logo"
              width={100}
              height={40}
              className="mx-auto md:mx-0 mb-4 hover:scale-105 transition duration-300"
            />

            <p className="text-sm text-gray-400 leading-relaxed">
              ART-RELLIC Technology is a cutting-edge platform that combines art
              and technology to create immersive and interactive experiences.
              Our mission is to revolutionize the way people engage with art by
              leveraging the power of technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h2>

            <ul className="space-y-2">
              {["Home", "About", "Services", "Blog", "Contact"].map(
                (item, i) => (
                  <li key={i} className="relative group">
                    <Link
                      href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      className="block transition duration-300 hover:text-cyan-400 hover:translate-x-1"
                    >
                      {item}
                    </Link>

                    {/* 🔥 underline animation */}
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-16"></span>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Focus Area */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-4">
              Our Focus Area
            </h2>

            <ul className="space-y-2 text-gray-400">
              {[
                "Virtual Reality Art Exhibitions",
                "Augmented Reality Installations",
                "Digital Art Creation Tools",
              ].map((item, i) => (
                <li
                  key={i}
                  className="hover:text-cyan-400 hover:translate-x-1 transition duration-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-4">
              Contact Info
            </h2>

            <p className="text-gray-400 text-sm hover:text-white transition">
              Address: 123 Art Street, Creativity City
            </p>

            <p className="mt-2 text-sm">
              Email:{" "}
              <a
                href="mailto:info@artrellic.com"
                className="text-cyan-400 hover:underline hover:tracking-wide transition"
              >
                info@artrellic.com
              </a>
            </p>

            <p className="mt-2 text-sm">
              Phone:{" "}
              <a
                href="tel:+1234567890"
                className="text-cyan-400 hover:underline hover:tracking-wide transition"
              >
                +1 (234) 567-890
              </a>
            </p>
          </div>
        </motion.div>

        {/* 🔻 Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-slate-700 mt-10 pt-6 text-center text-sm text-gray-400"
        >
          <p>© {new Date().getFullYear()} Art Rellic. All rights reserved.</p>

          <p className="mt-2">
            Follow us on{" "}
            <a
              href="#"
              className="text-cyan-400 hover:underline hover:tracking-wide transition"
            >
              Facebook
            </a>
            ,{" "}
            <a
              href="#"
              className="text-cyan-400 hover:underline hover:tracking-wide transition"
            >
              Instagram
            </a>
            ,{" "}
            <a
              href="#"
              className="text-cyan-400 hover:underline hover:tracking-wide transition"
            >
              Twitter
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
