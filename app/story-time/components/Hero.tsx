"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[603px] md:h-[700px] lg:h-[800px]">
      <Image
        src="/images/story-time/story-time-hero.jpg"
        alt="Story Time Hero"
        fill
        className="object-cover object-bottom filter brightness-50"
      />
      <div className="hero-content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[942px] px-4 md:px-8 lg:px-0 flex flex-col justify-center items-center">
        <h1 className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] garamond-font leading-[120%] font-bold text-white uppercase text-center">
          Golden Bond Story Time
        </h1>
        <p className="text-white tenor-font my-[16px] md:my-[20px] lg:my-[24px] text-[16px] md:text-[17px] lg:text-[18px] leading-[120%] text-center max-w-[600px]">
          Golden Bond is about celebrating connections that spark meaning.
        </p>
        <div className="btn-container flex justify-center">
          <button className="w-full sm:w-auto min-w-[240px] lg:min-w-[211px] h-[50px] md:h-[55px] lg:h-[61px] bg-[#B58E5A] text-white text-base sm:text-lg lg:text-[19px] font-semibold tenor-font hover:bg-[#B58E5A]/90 transition-colors duration-300 whitespace-nowrap">
            Plan My Event
          </button>
        </div>
      </div>
    </section>
  );
}
