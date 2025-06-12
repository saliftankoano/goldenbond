"use client";

import StaticHeader from "@/app/components/StaticHeader";
import Footer from "@/app/components/Footer";
import Faq from "@/app/components/Faq";
import Hero from "@/app/private-party/components/Hero";
import Find from "@/app/private-party/components/Find";
import PastEvents from "@/app/private-party/components/PastEvents";

export default function PrivateParty() {
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
