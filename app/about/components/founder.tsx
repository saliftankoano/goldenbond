"use client";

import Image from "next/image";

export default function Founder() {
  return (
    <section className="founder-section w-screen h-[992px] bg-[#F4F1EB] flex flex-col justify-center items-center pb-[78px]">
      <div className="intro w-[674px] h-[171px] pb-[62px] pt-[20px] flex flex-col justify-center items-center">
        <div className="w-[146px] h-[19px]">
          <h2 className="tenor-font text-[16px] leading-[120%] text-[#B58E5A]">
            Golden Bond Team
          </h2>
        </div>
        <div className="w-[309px] h-[58px] text-center pt-[8px]">
          <h1 className="garamond-font text-[#1B0E01] text-[48px] leading-[120%] font-semibold">
            Meet Our Team
          </h1>
        </div>
        <div className="w-[489px] h-[78px] text-center pt-[8px]">
          <p className="tenor-font text-[17px] leading-[150%] text-[#4A4A4A]">
            Golden Bond Jewelry creates custom-fit, welded permanent jewelry in
            14K gold and sterling silver, as well as clasped and ready to wear
            jewelry.
          </p>
        </div>
      </div>
      <div className="founder-container w-[1320px] h-[661px] flex relative pt-[62px]">
        <div className="left-side w-[489px] h-[452px]">
          <div className="w-[314px] h-[55px] text-left">
            <p className="uppercase tenor-font leading-[20px] text-[#B58E5A] text-[17px]">
              MEET The Ceo and her four-legged colleague
            </p>
          </div>
          <div className="w-[489px] h-[365px] pt-[32px]">
            <div className="w-full h-[53px]">
              <h1 className="text-[48px] font-semibold garamond-font">
                Lexie & Cash
              </h1>
            </div>
            <div className="w-full h-[256px] pt-[26px]">
              <p className="tenor-font text-[17px] leading-[150%] text-[#4A4A4A]">
                Golden Bond is about celebrating connections that spark meaning.
                <br />
                We&apos;re more than jewelry - we&apos;re an extension of your
                bond, your story, your forever evolving story. Whether it&apos;s
                a statement, a symbol, a milestone, or a moment worth holding
                onto - our Bracelet Bar sparks the story.
                <br />
                <br />
                Golden Bond Jewelry creates custom-fit, welded permanent jewelry
                in 14K gold and sterling silver, as well as clasped and ready to
                wear jewelry.
              </p>
            </div>
          </div>
        </div>
        <div className="spacer w-[152px] h-full"></div>
        <div className="w-[682px] h-[661px] relative">
          {/* Large Ellipse - Upper Right */}
          <Image
            src="/images/small-ellipse.svg"
            alt="decorative ellipse"
            width={160}
            height={160}
            className="absolute top-[-140px] right-[30px] md:w-[140px] md:h-[140px] lg:w-[160px] lg:h-[160px] z-0"
          />

          {/* Small Ellipse - Lower Left */}
          <Image
            src="/images/small-ellipse.svg"
            alt="decorative ellipse"
            width={160}
            height={160}
            className="absolute bottom-[5px] left-[-120px] md:w-[140px] md:h-[140px] lg:w-[160px] lg:h-[160px] z-0"
          />

          <Image
            src="/images/lexie-cash.jpg"
            alt="Lexie and Cash"
            fill
            unoptimized
            className="object-cover z-10"
          />
        </div>
      </div>
    </section>
  );
}
