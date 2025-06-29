"use client";

import StaticHeader from "@/app/components/StaticHeader";
import Footer from "@/app/components/Footer";
import Faq from "@/app/components/Faq";
import Hero from "@/app/corporate/components/Hero";
import Partners from "@/app/corporate/components/Partners";
import Find from "@/app/corporate/components/Find";
import PastEvents from "@/app/corporate/components/PastEvents";

export default function Corporate() {
  return (
    <>
      <StaticHeader />
      <Hero />
      <Partners />
      <Find />
      <PastEvents />
      <Faq />
      <Footer />
    </>
  );
}
