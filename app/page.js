"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* 🔵 Background Image */}
      <Image
        src="/hero.jpg" // replace with your image
        alt="hero"
        width={100}
        height={50}
        className="absolute w-full h-auto object-cover "
      />

      {/* 🔵 Dark Overlay */}
      <div className="absolute inset-0 bg-[#0f2b4c]/70"></div>

      {/* 🟢 Cursor Dot */}
      <div
        className="pointer-events-none fixed z-50 w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 blur-sm"
        style={{
          transform: `translate(${pos.x - 12}px, ${pos.y - 12}px)`,
        }}
      ></div>

      {/* 🔥 Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
        <div className="max-w-2xl">
          {/* Tag */}
          <span className="inline-block bg-white/20 text-white px-4 py-1 rounded-full text-sm mb-4">
            🌿 Protecting Nature Today For A Sustainable
          </span>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
            Together for a Greener Tomorrow
          </h1>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Primary */}
            <button className="flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-teal-400 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
              Get Involved →
            </button>

            {/* Video */}
            <button className="flex items-center gap-3 text-white hover:text-cyan-400 transition">
              <span className="w-10 h-10 flex items-center justify-center bg-white/20 rounded-full">
                ▶
              </span>
              Watch Our Video
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
