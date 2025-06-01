"use client";

import StaticHeader from "@/app/components/StaticHeader";
import Hero from "@/app/about/components/hero";
import Founder from "@/app/about/components/founder";
import Experts from "./components/experts";
import Footer from "@/app/components/Footer";

export default function About() {
  return (
    <>
      <StaticHeader />
      <Hero />
      <Founder />
      <Experts />
      <Footer />
    </>
  );
}
