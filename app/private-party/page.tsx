"use client";

import StaticHeader from "@/app/components/StaticHeader";
import Footer from "@/app/components/Footer";
import Faq from "@/app/components/Faq";
import Hero from "@/app/private-party/components/Hero";
import Find from "@/app/private-party/components/Find";

export default function PrivateParty() {
  return (
    <>
      <StaticHeader />
      <Hero />
      <Find />
      <Faq />
      <Footer />
    </>
  );
}
