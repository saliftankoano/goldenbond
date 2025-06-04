"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[500px] max-h-[515px]">
      <Image
        src="/images/story-time/story-time-hero.jpg"
        alt="Story Time Hero"
        fill
        className="object-cover object-center filter brightness-50"
        sizes="100vw"
        priority
      />
      <div className="hero-content absolute inset-0 flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-6 xl:px-0">
        {/* Breadcrumb */}
        <div className="mb-4 md:mb-6">
          <p className="text-white/80 tenor-font text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] leading-[120%] tracking-wider uppercase">
            GOLDEN BOND STORY TIME / WHY GB IS THE ULTIMATE BACHELORETTE PARTY
            DESTINATION
          </p>
        </div>

        {/* Main Title */}
        <h1 className="text-[32px] sm:text-[42px] md:text-[52px] lg:text-[62px] xl:text-[70px] garamond-font leading-[110%] sm:leading-[115%] lg:leading-[120%] font-bold text-white mb-4 md:mb-6 max-w-[800px]">
          Why GB is the Ultimate Bachelorette Party Destination
        </h1>

        {/* Date */}
        <div>
          <p className="text-white tenor-font text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] leading-[120%]">
            21/02/2025
          </p>
        </div>
      </div>
    </section>
  );
}
