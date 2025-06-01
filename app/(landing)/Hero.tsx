"use client";

import Image from "next/image";

export default function Hero() {

  return (
    <div className="relative min-h-screen">    

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
        <div className="text-center text-white px-6 max-w-6xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl garamond-font leading-[120%] tracking-[1%] mb-6 md:mb-8">
            <span className="block">PRIVATE EVENTS</span>
            <span className="block">BUSINESS EVENTS</span>
            <span className="block">POP-UPS</span>
          </h1>

          {/* Subtitle */}
          <p className="text-white/80 text-base sm:text-lg md:text-xl tenor-font tracking-wide max-w-full sm:max-w-[80%] md:max-w-[70%] lg:max-w-[50%] mx-auto leading-relaxed px-4 sm:px-0">
            Golden Bond is about celebrating connections that spark meaning.
          </p>
        </div>
      </div>
    </div>
  </div>
  );
}