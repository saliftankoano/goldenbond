"use client";

import Header from "@/app/components/StaticHeader";
import Footer from "@/app/components/Footer";
import PortfolioHero from "./components/Hero";
import Faq from "@/app/components/Faq";
import Cta from "../components/Cta";
import Testimonials from "../components/Testimonials";

export default function Portfolio() {
  return (
    <>
      <Header />
      <PortfolioHero />
      <Testimonials />
      <Cta />
      <Faq />
      <Footer />
    </>
  );
}
