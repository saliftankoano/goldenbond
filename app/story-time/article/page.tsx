"use client";

import Footer from "@/app/components/Footer";
import Header from "@/app/components/StaticHeader";
import Cta from "@/app/components/Cta";
import Hero from "./components/Hero";
import Content from "./components/Content";

export default function StoryTimeArticle() {
  return (
    <>
      <Header />
      <Hero />
      <Content />
      <Cta />
      <Footer />
    </>
  );
}
