"use client";

import Cta from "@/app/components/Cta";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/StaticHeader";
import Content from "@/app/story-time/article/components/Content";
import Hero from "@/app/story-time/components/Hero";
import Testimonial from "@/app/story-time/article/components/Testimonial";

export default function StoryTimeArticle() {
  return (
    <>
      <Header />
      <Hero />
      <Content />
      <Testimonial />
      <Cta />
      <Footer />
    </>
  );
}
