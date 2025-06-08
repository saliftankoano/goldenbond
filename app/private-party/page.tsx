"use client";

import StaticHeader from "@/app/components/StaticHeader";
import Footer from "@/app/components/Footer";
import Faq from "@/app/components/Faq";
import Hero from "@/app/private-party/components/Hero";

export default function PrivateParty() {
  return (
    <>
      <StaticHeader />
      <Hero />
      <Faq />
      <Footer />
    </>
  );
}
