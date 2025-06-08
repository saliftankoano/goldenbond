"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="private-party-hero flex bg-[#F4F1EB] relative">
      <div className="left ml-[60px] mt-[45px]">
        <div className="w-[622px] h-[361px] flex flex-col justify-center mx-auto">
          <h1 className="w-full text-[70px] text-black garamond-font leading-[110%] mb-[21px]">
            Book a Private <br /> Jewerly Party
          </h1>
          <p className="w-full text-[17px] text-[#4A4A4A] leading-[150%] tenord-font">
            Golden Bond Jewelry creates custom-fit, welded permanent jewelry in
            14K
            <br /> gold and sterling silver, as well as clasped and ready to
            wear jewelry.
          </p>
          <div className="w-full flex justify-center lg:justify-start mt-[72px] z-10">
            <button className="w-full sm:w-auto min-w-[240px] lg:min-w-[211px] h-[50px] md:h-[55px] px-[8%] md:px-[10%] bg-[#B58E5A] text-sm sm:text-base lg:text-[16px] text-white flex items-center justify-center font-semibold hover:cursor-pointer hover:bg-[#B58E5A]/80 hover:text-white transition-all duration-300 uppercase">
              <p className="whitespace-nowrap">Plan My Event</p>
            </button>
          </div>
        </div>
      </div>
      <div className="right flex justify-end ml-[10%] mt-[45px]">
        <div className="w-[682px] h-[737px] relative z-10">
          <Image
            src="/images/private-party/hero.jpg"
            alt="Private Party"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Large Ellipse */}
      <div className="absolute bottom-[80px] right-[23.5%] transform -translate-x-1/2 z-20">
        <Image
          src="/images/large-ellipse.svg"
          alt=""
          width={257}
          height={257}
        />
      </div>
    </section>
  );
}
