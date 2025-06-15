"use client";
import Image from "next/image";

export default function Who() {
  return (
    <section className="who-section w-full min-h-screen lg:h-[1024px] flex items-center py-8 md:py-12 lg:py-0 overflow-x-hidden">
      <div className="who-content w-full max-w-7xl lg:w-[1318px] h-auto lg:h-[737px] mx-auto flex flex-col lg:flex-row items-center lg:items-start px-4 md:px-6 lg:px-0 gap-8 lg:gap-0">
        {/* Left Content */}
        <div className="who-content-left w-full lg:w-[552px] h-auto lg:h-[579px] flex">
          <div className="flex flex-col gap-4 md:gap-6 lg:gap-4 lg:mt-[10%] h-full w-full lg:w-auto">
            <h2 className="text-black text-sm md:text-base lg:text-[17px] tenor-font uppercase tracking-wider">
              WHO WE ARE
            </h2>

            <h1 className="text-[#1B0E01] leading-[120%] text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-semibold garamond-font">
              Meaningful Jewelry,
              <br />
              Sparked to Bond
            </h1>

            <p className="text-[#1B0E01] text-sm md:text-base lg:text-[16px] font-normal tenor-font leading-relaxed mt-4 md:mt-6 lg:mt-[10%]">
              Golden Bond is about celebrating connections that spark meaning.
              We&apos;re more than jewelry - we&apos;re an extension of your
              bond, your story, your forever evolving story.
              <br />
              Whether it&apos;s a statement, a symbol, a milestone, or a moment
              worth holding onto - our Bracelet Bar sparks the story.
              <br />
              <br />
              Golden Bond Jewelry creates custom-fit, welded permanent jewelry
              in 14K gold and sterling silver, as well as clasped and ready to
              wear jewelry.
            </p>

            <button className="w-full sm:w-auto sm:min-w-[211px] h-[55px] md:h-[61px] mt-6 md:mt-8 lg:mt-[10%] bg-[#B58E5A] text-white text-base md:text-lg lg:text-[19px] font-semibold tenor-font hover:bg-[#B58E5A]/90 transition-colors duration-300">
              Learn more
            </button>
          </div>

          {/* Spacer - only on large screens */}
          <div className="w-[84px] h-full hidden lg:block"></div>
        </div>

        {/* Right Content - Image */}
        <div className="who-content-right w-full lg:w-[763px] h-auto lg:h-[737px] relative">
          <div className="relative w-full max-w-[763px] mx-auto lg:mx-0">
            <Image
              src="/images/who.jpg"
              alt="golden bond employee smiling"
              width={763}
              height={737}
              className="w-full h-auto object-cover rounded-lg lg:rounded-none"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 763px"
            />

            {/* Small Ellipse: Upper Left */}
            <Image
              src="/images/small-ellipse.svg"
              alt="small ellipse"
              width={160}
              height={160}
              className="absolute top-[-20px] left-[-20px] sm:top-[-30px] sm:left-[-40px] md:top-[-40px] md:left-[-60px] lg:top-[-80px] lg:left-[-140px] w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[120px] md:h-[120px] lg:w-[180px] lg:h-[180px] z-10"
            />

            {/* Large Ellipse: Lower Right */}
            <Image
              src="/images/large-ellipse.svg"
              alt="large ellipse"
              width={257}
              height={257}
              className="absolute bottom-[-20px] right-[-20px] sm:bottom-[-30px] sm:right-[-30px] md:bottom-[-40px] md:right-[-35px] lg:bottom-[-70px] lg:right-[-50px] w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[120px] md:h-[120px] lg:w-[220px] lg:h-[220px] z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
