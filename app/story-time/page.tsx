"use client";

import Header from "@/app/components/StaticHeader";
import Hero from "./components/Hero";
import Footer from "@/app/components/Footer";
import Categories from "@/app/categories/page";

export default function StoryTime() {
  return (
    <>
      <Header />
      <Hero />
      <Categories />
      <Footer />
    </>
  );
}
