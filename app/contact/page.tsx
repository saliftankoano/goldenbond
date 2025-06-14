"use client";

import StaticHeader from "@/app/components/StaticHeader";
import Footer from "@/app/components/Footer";
import Faq from "@/app/components/Faq";
import Hero from "@/app/contact/components/Hero";
import Testimonials from "@/app/components/Testimonials";

export default function PrivateParty() {
  return (
    <>
      <StaticHeader />
      <Hero />
      <Testimonials />
      <Faq />
      <Footer />
    </>
  );
}
