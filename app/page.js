"use client";
import { useEffect, useState } from "react";

// imported for sections
import HeroSection from "./component/home/herosection";
import OurServices from "./component/home/ourservices";
import WhyChoseUs from "./component/home/why_chose_us";
import OurStory from "./component/home/our_story";
import WhatWeDo from "./component/home/what_we_do";
import Features from "./component/home/features";
import HowWeWork from "./component/home/how_we_works";
import Testimonials from "./component/home/testimonials";
import FAQs from "./component/home/faqs";
import LatestBlogs from "./component/home/latest_blogs";

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
    <>
      <HeroSection />
      <OurServices />
      <WhyChoseUs />
      <OurStory />
      <WhatWeDo />
      <Features />
      <HowWeWork />
      <Testimonials />
      <FAQs />
      <LatestBlogs />
    </>
  );
}
