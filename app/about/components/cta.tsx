"use client";

import Image from "next/image";

export default function CTA() {
  return (
    <section className="cta-section bg-[#F4F1EB] w-screen h-[736px] flex flex-col justify-center items-center relative pb-[72px]">
      <div className="top-spacer w-full h-[72px]"></div>
      {/* Small Ellipse - Bottom Right */}
      <Image
        src="/images/small-ellipse.svg"
        alt="decorative ellipse"
        width={131}
        height={131}
        className="absolute bottom-[100px] right-[40px] w-[131px] h-[131px] z-20"
      />

      <div className="title-container w-[816px] h-[68px] relative z-10">
        <p className="text-[48px] leading-[120px] kaisei-font">
          The Golden Bond | Event & Design
        </p>
      </div>
      <div className="cta-content w-[1284px] h-[407px] flex mt-[64px] relative z-10 mb-[72px]">
        {/* Large Ellipse - Bottom Left */}
        <Image
          src="/images/small-ellipse.svg"
          alt="decorative ellipse"
          width={188}
          height={188}
          className="absolute bottom-[-80px] left-[-20px] w-[188px] h-[188px] z-0"
        />

        <div className="left-side mr-[154px]">
          <div className="left-content w-[435px] h-[243px]">
            <div className="w-full h-[76px]">
              <h1 className="garamond-font text-[42px] font-extrabold leading-[120%]">
                Reserve Your Exquisite Jewelry Experience!
              </h1>
            </div>
            <div className="w-full h-[42px] mt-[62px]">
              <p className="tenor-font text-[14px] leading-[150%] text-[#4A4A4A]">
                Molestias ut tenetur eos placeat aliquam quaerat cumque. Quis
                autem id sed doloribus eos et enim et dolor.
              </p>
            </div>
            <div className="w-full h-[61px]">
              <button className="w-full uppercase sm:w-auto max-w-[211px] max-h-[61px] h-[55px] mt-[32px] px-[10%] bg-[#B58E5A] text-sm sm:text-base lg:text-[16px] text-white flex items-center justify-center font-semibold hover:cursor-pointer hover:bg-[#B58E5A]/80 hover:text-white transition-all duration-300">
                <p className="whitespace-nowrap">Plan My Event</p>
              </button>
            </div>
          </div>
        </div>
        <div className="right-side w-[695px] h-[407px] relative z-0">
          <Image
            src="/images/about/cta.jpg"
            alt="Smilling employee"
            fill
            className="object-cover z-0"
          />
        </div>
      </div>
    </section>
  );
}
