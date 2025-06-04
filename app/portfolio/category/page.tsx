"use client";

import Header from "@/app/components/StaticHeader";
import Footer from "@/app/components/Footer";
import Testimonials from "@/app/components/Testimonials";
import Cta from "@/app/components/Cta";
import Faq from "@/app/components/Faq";
import PortfolioCategoryHero from "./components/Hero";
import Gallery from "./components/Gallery";

export default function PortfolioCategory() {
  return (
    <>
      <Header />
      <PortfolioCategoryHero />
      <Gallery />
      <Testimonials />
      <Cta />
      <Faq />
      <Footer />
    </>
  );
}
