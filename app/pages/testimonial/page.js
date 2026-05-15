"use client"
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const page = () => {
   const testimonials = [
     {
       quote:
         "Their conservation programs brought real change to our local community. The approach was practical, transparent, and focused on long-term impact.",
       name: "Jerome Bell",
       role: "Community Project Lead",
       image: "/user1.jpg",
     },
     {
       quote:
         "We appreciated their hands-on support and deep understanding of environmental challenges. The results were measurable and meaningful.",
       name: "Jane Cooper",
       role: "Environmental Consultant",
       image: "/user2.jpg",
     },
     {
       quote:
         "Their sustainability initiatives inspired our organization to take stronger action for a cleaner and healthier future.",
       name: "Eleanor Pena",
       role: "Community Project Lead",
       image: "/user4.jpg",
     },
     {
       quote:
         "Their conservation programs brought real change to our local community. The approach was practical, transparent, and focused on long-term impact.",
       name: "Jerome Bell",
       role: "Community Project Lead",
       image: "/author-4.jpg",
     },
     {
       quote:
         "We appreciated their hands-on support and deep understanding of environmental challenges. The results were measurable and meaningful.",
       name: "Jane Cooper",
       role: "Environmental Consultant",
       image: "/author-5.jpg",
     },
     {
       quote:
         "Their sustainability initiatives inspired our organization to take stronger action for a cleaner and healthier future.",
       name: "Eleanor Pena",
       role: "Community Project Lead",
       image: "/author-6.jpg",
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
              Our testimonials
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
                Testimonials
              </span>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0c264b] to-transparent z-10" />
      </section>

       {/* ============================================================
                      TESTIMONIALS — photo bg, 70% navy overlay, 30% white cards
                  ============================================================ */}
            <section className="relative overflow-hidden py-28 bg-[#0c264b]/10">
              <div className="max-w-7xl mx-auto px-6 relative z-20">
      
                {/* Cards */}
                <div className="grid lg:grid-cols-3 gap-8 mt-14">
                  {testimonials.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 80 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: index * 0.2 }}
                      whileHover={{ y: -12 }}
                      className="bg-[#f5f7f4] rounded-[32px] p-4 border border-[#f5f7f4]/10 shadow-2xl transition duration-500"
                    >
                      <div className="inline-flex items-center gap-3 bg-[#e9eee6] rounded-xl">
                        <div className="flex items-center gap-1 text-[#0bccc1]">
                          {[...Array(4)].map((_, i) => (
                            <svg
                              key={i}
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
                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                            </svg>
                          ))}
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
                            <path d="M12 18.338a2.1 2.1 0 0 0-.987.244L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679A.53.53 0 0 1 12 2" />
                          </svg>
                        </div>
                        <span className="font-semibold text-[#0c264b]">(4.8)</span>
                      </div>
      
                      <p className="text-[20px] leading-[1.7] text-[#0c264b] font-semibold mt-14">
                        {item.quote}
                      </p>
                      <div className="w-full h-[1px] bg-[#d1d5db] mt-14"></div>
      
                      <div className="flex items-center gap-5 mt-10">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={70}
                          height={70}
                          className="rounded-full object-cover"
                        />
                        <div>
                          <h3 className="text-2xl font-bold text-[#0c264b]">
                            {item.name}
                          </h3>
                          <p className="text-[#64748b] text-lg mt-1">{item.role}</p>
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

export default page