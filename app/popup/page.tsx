"use client";

import StaticHeader from "@/app/components/StaticHeader";
import Footer from "@/app/components/Footer";
import Faq from "@/app/components/Faq";
import Hero from "@/app/popup/components/Hero";
import Find from "@/app/popup/components/Find";
import PastEvents from "@/app/popup/components/PastEvents";

export default function PopupEvents() {
  return (
    <>
      <StaticHeader />
      <Hero />
      <Find />
      <PastEvents />
      <Faq />
      <Footer />
    </>
  );
}
