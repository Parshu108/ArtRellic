"use client";
import { motion } from "framer-motion";
import Image from "next/image";
export default function WhatWeDo() {
    return (
        <> 
              <section className="bg-[#0f2b4c] py-20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.08),transparent_45%)]" />
        
                {/* FLOATING DOT */}
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    x: [0, 10, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                  }}
                  className="absolute top-1/2 left-1/2 w-4 h-4 bg-secondary rounded-full blur-[1px]"
                />
        
                <div className="max-w-7xl mx-auto px-6 text-center">
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 bg-[#0bccc1]/10 border border-[#0bccc1]/20 rounded-full px-6 py-3 mb-8"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#07ebd1] animate-pulse" />
        
                    <span className="text-[#0bccc1] font-semibold text-sm">
                      what we do
                    </span>
                  </motion.div>
        
                  {/* Heading */}
                  <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className=" mx-w-4xl text-5xl md:text-4xl mx-auto font-bold text-white  leading-tight"
                  >
                    Helping Communities, Organizations,& Individuals Take Concrete Step
                    Toward a Healthier Planet
                  </motion.h2>
        
                  <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-gray-300 max-w-2xl mx-auto mb-12"
                  >
                    Offering trusted environmental services...
                  </motion.p>
                  {/* 🔵 CARDS ROW */}
                  <div className="grid md:grid-cols-4 gap-6 items-stretch">
                    {/* CARD 1 (LIGHT) */}
                    <motion.div
                      whileHover={{ y: -8 }}
                      className="bg-[#e5e7eb] text-black rounded-2xl p-6 flex flex-col justify-between"
                    >
                      <div>
                        <h3 className="font-semibold text-lg mb-2">
                          Tree Plantation Drives
                        </h3>
                        <p className="text-sm text-gray-600 mb-4">
                          Organizing large scale tree plantation drive to restore
                          forest.
                        </p>
                      </div>
        
                      <Image
                        src="/big.png"
                        width={200}
                        height={200}
                        alt=""
                        className="mx-auto"
                      />
                    </motion.div>
        
                    {/* CARD 2 (ACCENT) */}
                    <motion.div
                      whileHover={{ y: -8 }}
                      className="bg-gradient-to-br from-[#0bccc1] to-[#07ebd1] text-black rounded-2xl p-6 h-70 flex flex-col justify-between mt-35"
                    >
                      <div className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-full mb-4">
                        ◈
                      </div>
        
                      <h3 className="font-semibold text-lg mb-2">Policy Advocacy</h3>
        
                      <p className="text-sm mb-4">
                        Policies that protect ecosystems, promote sustainability.
                      </p>
        
                      <p className="text-sm">• Environment research & climate</p>
                    </motion.div>
        
                    {/* CARD 3 (DARK) */}
                    <motion.div
                      whileHover={{ y: -8 }}
                      className="bg-[#021a2e] text-white rounded-2xl p-6 flex flex-col justify-between w-75 mt-56 h-50"
                    >
                      <div>
                        <Image
                          src="/small.png"
                          width={100}
                          height={60}
                          alt=""
                          className="mb-4 text-center mx-auto"
                        />
        
                        <h3 className="text-3xl font-bold">200+</h3>
                        <p className="text-sm text-gray-300">Educational Workshops</p>
                      </div>
                    </motion.div>
        
                    {/* CARD 4 (LIGHT) */}
                    <motion.div
                      whileHover={{ y: -8 }}
                      className="bg-[#e5e7eb] text-black rounded-2xl p-6 h-85 mt-20 flex flex-col justify-between"
                    >
                      <Image
                        src="/mid.jpg"
                        width={200}
                        height={120}
                        alt=""
                        className="rounded-xl mb-4"
                      />
        
                      <h3 className="font-semibold mb-2">Sustainable Solutions</h3>
        
                      <p className="text-sm text-gray-600 mb-4">
                        We design and implement strategy that help community
                      </p>
        
                      <button className="flex items-center gap-2 text-cyan-600 font-medium">
                        Read More →
                      </button>
                    </motion.div>
                  </div>
        
                  {/* 🔵 TAGS */}
                  <div className="flex flex-wrap justify-center gap-4 mt-10">
                    {[
                      "Climate Change",
                      "Environmental Awareness",
                      "Community Engagement",
                      "Wildlife Protection",
                    ].map((tag, i) => (
                      <span
                        key={i}
                        className="bg-[#123a63] text-cyan-300 px-4 py-2 rounded-full text-sm"
                      >
                        • {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </section>
        </>
    );
}