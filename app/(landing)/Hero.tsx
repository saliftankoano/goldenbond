"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Hero Image */}
      <div className="relative w-full h-screen">
        <Image
          src="/images/hero.jpg"
          alt="Elegant woman wearing layered gold jewelry in luxury jewelry store"
          fill
          className="object-cover object-[50%_63%]"
          priority
        />

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 sm:px-6 max-w-6xl mx-auto">
            {/* Main Headline */}
            <h1 className="text-[28px] xs:text-[32px] sm:text-[40px] md:text-[56px] lg:text-[68px] xl:text-[78px] garamond-font leading-[120%] tracking-[1%] mb-[20px] sm:mb-[24px] md:mb-[32px] lg:mb-[40px]">
              <span className="block">PRIVATE EVENTS</span>
              <span className="block">BUSINESS EVENTS</span>
              <span className="block">POP-UPS</span>
            </h1>

            {/* Subtitle */}
            <p className="text-white/80 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] tenor-font tracking-wide max-w-full sm:max-w-[85%] md:max-w-[75%] lg:max-w-[60%] xl:max-w-[50%] mx-auto leading-[140%] sm:leading-[150%] px-2 sm:px-0">
              Golden Bond is about celebrating connections that spark meaning.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
