"use client";

import Header from "@/app/components/StaticHeader";
import Footer from "@/app/components/Footer";
import PortfolioHero from "./components/Hero";
import Faq from "@/app/components/Faq";
import Cta from "../components/Cta";
import Testimonials from "../components/Testimonials";
import EventTypes from "./components/EventTypes";

export default function Portfolio() {
  return (
    <>
      <Header />
      <PortfolioHero />
      <EventTypes />
      <Testimonials />
      <Cta />
      <Faq />
      <Footer />
    </>
  );
}
