"use client";

import Image from "next/image";

export default function Testimonial() {
  return (
    <section className="testimonial-section h-[782px] bg-[#1B0E01] flex relative">
      <div className="left my-[121px] ml-[60px] w-[496px] max-w-[496px] h-[540px] max-h-[540px] relative">
        <Image
          src="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Testimonial Left"
          fill
          className="object-cover object-top"
          priority
        />
      </div>
      <div className="right mt-[121px] relative w-[713px] max-w-[713px]">
        <div className="testimonial-content max-w-[613px] max-h-[287px] pl-[91px] relative z-10">
          <h2 className="text-[#B58E5A] pt-[5px] text-[20px] tenor-font leading-[20%] uppercase">
            Testimonials
          </h2>
          <h1 className="mt-[12px] text-white font-extrabold garamond-font text-[32px]">
            Julia
          </h1>
          <div className="mt-[24px] text-white/90 text-[16px] leading-[150%] tenor-font">
            "I had the pleasure of attending a Story Time event at Golden Bond
            Studio, and it was truly a magical experience. The atmosphere was
            warm and inviting, and the stories shared by the curator were
            absolutely captivating. I left feeling inspired and enlightened, and
            I can't wait to attend another event in the future."
          </div>
          <button className="w-full mt-[32px] sm:w-auto min-w-[200px] sm:min-w-[220px] md:min-w-[240px] lg:min-w-[260px] xl:min-w-[211px] h-[45px] sm:h-[48px] md:h-[52px] lg:h-[58px] xl:h-[61px] bg-[#B58E5A] text-white text-[14px] sm:text-[15px] md:text-base lg:text-lg xl:text-[19px] font-semibold tenor-font hover:bg-[#B58E5A]/90 hover:cursor-pointer transition-colors duration-300 whitespace-nowrap px-4 sm:px-6">
            Plan My Event
          </button>
        </div>
        {/* Large Ellipse positioned on the right */}
        <div className="absolute top-[120px] -right-[200px] w-[257px] h-[257px]">
          <Image
            src="/images/large-ellipse.svg"
            alt="Decorative ellipse"
            width={257}
            height={257}
          />
        </div>
      </div>
    </section>
  );
}
