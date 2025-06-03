"use client";
import Image from "next/image";

export default function Cta() {
  return (
    <section className="w-full h-auto pb-8 md:pb-16 lg:pb-[10%] bg-[#F4F1EB]">
      {/* Header */}
      <div className="px-4 md:px-6 lg:ml-[3%] py-6 md:py-8 lg:py-[3%]">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] garamond-font text-center lg:text-left">
          The Golden Bond | Event & Design
        </h1>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row px-4 md:px-6 lg:px-0">
        {/* Left Content - Image */}
        <div className="w-full lg:w-auto lg:flex-1 lg:ml-[3%] lg:mr-[7%] mb-8 lg:mb-0">
          <div className="relative w-full max-w-[742px] mx-auto lg:mx-0">
            <Image
              src="/images/cta.png"
              alt="cta-image"
              width={742}
              height={407}
              className="w-full h-auto"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 742px"
            />
          </div>
        </div>

        {/* Right Content - Text and CTA */}
        <div className="w-full lg:w-auto lg:flex-1 flex items-center">
          <div className="w-full max-w-[600px] mx-auto lg:mx-0 lg:max-w-[75%] px-4 lg:px-0">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-extrabold garamond-font text-[#1B0E01] leading-[120%] text-center lg:text-left mb-6 lg:mb-0">
              Reserve Your Exquisite
              <br />
              Jewelry Experience!
            </h2>

            <div className="my-6 md:my-8 lg:my-[7%]">
              <p className="text-sm sm:text-base lg:text-[16px] tenor-font text-center lg:text-left leading-relaxed">
                Molestias ut tenetur eos placeat aliquam quaerat cumque. Quis
                autem id sed doloribus eos et enim et dolor.
              </p>
            </div>

            <div className="btn-container flex justify-center lg:justify-start">
              <button className="w-full sm:w-auto min-w-[211px] h-[61px] bg-[#B58E5A] text-white text-base sm:text-lg lg:text-[19px] font-semibold tenor-font hover:bg-[#B58E5A]/90 transition-colors duration-300">
                Plan My Event
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
