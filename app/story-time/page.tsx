"use client";

import Header from "@/app/components/StaticHeader";
import Hero from "./components/Hero";
import Footer from "@/app/components/Footer";
import Events from "@/app/story-time/components/Events";

export default function StoryTime() {
  return (
    <>
      <Header />
      <Hero />
      <Events />
      <Footer />
    </>
  );
}
