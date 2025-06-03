"use client";

import Header from "@/app/components/StaticHeader";
import Footer from "@/app/components/Footer";
import PortfolioHero from "./components/Hero";
import Faq from "@/app/components/Faq";

export default function Portfolio() {
  return (
    <>
      <Header />
      <PortfolioHero />
      <Faq />
      <Footer />
    </>
  );
}
