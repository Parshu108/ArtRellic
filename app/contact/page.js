"use client"
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const page = () => {
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
              contact us
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
              <span className="text-[#f5f7f4] text-xl font-semibold">
                contact
              </span>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0c264b] to-transparent z-10" />
      </section>

      <section className="relative overflow-hidden bg-[#0c264b] py-24">
        {/* Background Glow */}
        <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-[#07ebd1]/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-[#0bccc1]/10 blur-3xl" />

        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2">
          {/* ================= LEFT IMAGE ================= */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Card */}
            <div className="overflow-hidden rounded-[32px] border border-[#0bccc1]/20 bg-[#102f5c] shadow-2xl">
              {/* Image */}
              <div className="relative h-[860px] w-full">
                <Image
                  src="/Biger.png"
                  alt="Contact"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c264b]/80 via-transparent to-transparent" />
              </div>

              {/* Contact Info */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="grid grid-cols-1 gap-5 rounded-3xl border border-[#0bccc1]/20 bg-[#0c264b]/70 p-6 backdrop-blur-xl md:grid-cols-2">
                  {/* Phone */}
                  <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0bccc1] text-[#ffffff] shadow-lg shadow-[#07ebd1]/20">
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
                        className="lucide lucide-phone-call-icon lucide-phone-call"
                      >
                        <path d="M13 2a9 9 0 0 1 9 9" />
                        <path d="M13 6a5 5 0 0 1 5 5" />
                        <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                      </svg>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white">
                        Phone Number
                      </h3>

                      <p className="mt-1 text-[#b8c5d6]">+123 456 - 789</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0bccc1] text-[#ffffff] shadow-lg shadow-[#07ebd1]/20">
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
                        className="lucide lucide-mail-icon lucide-mail"
                      >
                        <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                      </svg>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white">
                        Email Address
                      </h3>

                      <p className="mt-1 text-[#b8c5d6]">info@domain.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ================= RIGHT FORM ================= */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            {/* Badge */}
            <div className="mb-6 inline-flex w-fit items-center gap-3 rounded-full border border-[#0bccc1]/20 bg-[#0bccc1]/10 px-6 py-3">
              <span className="h-2 w-2 rounded-full bg-[#07ebd1] animate-pulse" />

              <span className="text-sm font-semibold text-[#0bccc1]">
                Get In Touch
              </span>
            </div>

            {/* Heading */}
            <h1 className="max-w-xl text-3xl font-bold leading-tight text-white md:text-5xl">
              Contact Us
              <span className="block bg-gradient-to-r from-[#0bccc1] to-[#07ebd1] bg-clip-text text-transparent">
                Today!
              </span>
            </h1>

            {/* Description */}
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-[#b8c5d6]">
              Whether you&apos;re looking for guidance, collaboration, or
              support, contact us today and our team will be happy to assist
              you.
            </p>

            {/* Form */}
            <form className="mt-6 space-y-8">
              {/* Row */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* First Name */}
                <div>
                  <label className="mb-2 block text-lg font-semibold text-white">
                    First Name:
                  </label>

                  <input
                    type="text"
                    placeholder="Enter First Name *"
                    className="h-12 w-full rounded-2xl border border-[#0bccc1]/20 bg-[#102f5c] px-6 text-white outline-none placeholder:text-[#b8c5d6]/60 focus:border-[#07ebd1]"
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label className="mb-2 block text-lg font-semibold text-white">
                    Last Name:
                  </label>

                  <input
                    type="text"
                    placeholder="Enter Last Name *"
                    className="h-12 w-full rounded-2xl border border-[#0bccc1]/20 bg-[#102f5c] px-6 text-white outline-none placeholder:text-[#b8c5d6]/60 focus:border-[#07ebd1]"
                  />
                </div>
              </div>

              {/* Row */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* Email */}
                <div>
                  <label className="mb-1 block text-lg font-semibold text-white">
                    Email Address:
                  </label>

                  <input
                    type="email"
                    placeholder="Enter Email Address *"
                    className="h-12 w-full rounded-2xl border border-[#0bccc1]/20 bg-[#102f5c] px-6 text-white outline-none placeholder:text-[#b8c5d6]/60 focus:border-[#07ebd1]"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="mb-1 block text-lg font-semibold text-white">
                    Phone Number:
                  </label>

                  <input
                    type="text"
                    placeholder="Enter Phone Number *"
                    className="h-12 w-full rounded-2xl border border-[#0bccc1]/20 bg-[#102f5c] px-6 text-white outline-none placeholder:text-[#b8c5d6]/60 focus:border-[#07ebd1]"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="mb-1 block text-lg font-semibold text-white">
                  Message:
                </label>

                <textarea
                  rows={6}
                  placeholder="Any Additional Message..."
                  className="w-full rounded-3xl border border-[#0bccc1]/20 bg-[#102f5c] p-6 text-white outline-none placeholder:text-[#b8c5d6]/60 focus:border-[#07ebd1]"
                />
              </div>

              {/* Button */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                className="group flex items-center gap-5 rounded-full bg-[#0bccc1] px-4 py-2 text-xl font-bold text-[#ffffff] shadow-xl shadow-[#07ebd1]/20 transition-all duration-300 hover:bg-[#07ebd1]"
              >
                Submit Message
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0c264b] text-[#07ebd1] transition duration-300 group-hover:translate-x-1">
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
            </form>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0c264b] py-24">
        {/* Background Glow */}
        <div className="absolute left-0 top-0 h-[350px] w-[350px] rounded-full bg-[#07ebd1]/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-[#0bccc1]/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          {/* ================= TOP CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-4xl text-center"
          >
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#0bccc1]/20 bg-[#0bccc1]/10 px-6 py-3">
              <span className="h-2 w-2 rounded-full bg-[#07ebd1] animate-pulse" />

              <span className="text-sm font-semibold text-[#0bccc1]">
                Where We Located
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-bold leading-tight text-white md:text-7xl">
              Reach Out to Us
              <span className="block bg-gradient-to-r from-[#0bccc1] to-[#07ebd1] bg-clip-text text-transparent">
                From Anywhere
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-[#b8c5d6]">
              Whether you have a question, a project idea, or want to
              collaborate, our team is always ready to connect and support you.
            </p>
          </motion.div>

          {/* ================= MAP ================= */}
          <motion.div
            initial={{ opacity: 0, y: 120 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative mt-20 overflow-hidden rounded-[32px] border border-[#0bccc1]/20 bg-[#102f5c] shadow-2xl"
          >
            {/* Map */}
            <div className="relative h-[650px] w-full">
              <iframe
                src="https://www.google.com/maps?q=New+York&output=embed"
                className="h-full w-full border-0 grayscale-[10%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c264b]/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Location Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute left-6 top-6 w-[340px] rounded-3xl border border-[#0bccc1]/20 bg-[#0c264b]/80 p-6 backdrop-blur-xl shadow-2xl"
            >
              <div className="flex items-start justify-between">
                {/* Text */}
                <div>
                  <h3 className="text-2xl font-bold text-white">New York</h3>

                  <p className="mt-2 text-[#b8c5d6]">New York, NY, USA</p>
                </div>

                {/* Icons */}
                <div className="flex items-center gap-3">
                  <button className="flex h-12 w-12 items-center justify-center rounded-full border border-[#0bccc1]/20 bg-[#102f5c] text-[#0bccc1] transition duration-300 hover:bg-[#0bccc1] hover:text-[#0c264b]">
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
                      className="lucide lucide-external-link-icon lucide-external-link"
                    >
                      <path d="M15 3h6v6" />
                      <path d="M10 14 21 3" />
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    </svg>
                  </button>

                  <button className="flex h-12 w-12 items-center justify-center rounded-full border border-[#0bccc1]/20 bg-[#102f5c] text-[#0bccc1] transition duration-300 hover:bg-[#07ebd1] hover:text-[#0c264b]">
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
                      className="lucide lucide-navigation-icon lucide-navigation"
                    >
                      <polygon points="3 11 22 2 13 21 11 13 3 11" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Bottom Glow Line */}
              <div className="mt-5 h-[1px] w-full bg-[#0bccc1]/20" />

              {/* Small Status */}
              <div className="mt-5 flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-[#07ebd1] animate-pulse" />

                <span className="text-sm font-medium text-[#0bccc1]">
                  Available For Meetings
                </span>
              </div>
            </motion.div>

            {/* Bottom Gradient Blur */}
            <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-[#0c264b] to-transparent" />
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default page;