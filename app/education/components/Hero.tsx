"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full h-screen relative">
      <Image
        src="/images/education/education.webp"
        alt="Hero"
        fill
        className="object-cover object-bottom filter brightness-50"
      />
      <div className="w-full max-w-[320px] sm:max-w-[480px] md:max-w-[640px] lg:max-w-[768px] xl:max-w-[899px] h-auto mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 sm:px-6 md:px-8">
        <div className="heading">
          <h1 className="uppercase garamond-font text-center text-[28px] sm:text-[36px] md:text-[48px] lg:text-[60px] xl:text-[75px] leading-[120%] text-white">
            BECOME A TRUE PERMANENT JEWELRY PRO
          </h1>
        </div>
        <div className="mt-[16px] sm:mt-[20px] md:mt-[24px] mx-auto w-full max-w-[280px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[580px] xl:max-w-[641px]">
          <p className="tenor-font text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] leading-[120%] text-white text-center">
            Learn from industry experts with hands-on training, professional
            coaching, and the best tools in the business
          </p>
        </div>
        <div className="btn-container flex justify-center mt-[24px] sm:mt-[32px] md:mt-[40px] lg:mt-[44px] xl:mt-[48px]">
          <button className="w-full sm:w-auto min-w-[200px] sm:min-w-[220px] md:min-w-[240px] lg:min-w-[260px] xl:min-w-[211px] h-[45px] sm:h-[48px] md:h-[52px] lg:h-[58px] xl:h-[61px] bg-[#B58E5A] text-white text-[14px] sm:text-[15px] md:text-base lg:text-lg xl:text-[19px] font-semibold tenor-font hover:bg-[#B58E5A]/90 hover:scale-95 hover:cursor-pointer transition-all duration-300 ease-in-out transform whitespace-nowrap px-4 sm:px-6">
            Join the waitlist
          </button>
        </div>
      </div>
    </section>
  );
}
