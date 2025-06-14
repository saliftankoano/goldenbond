"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="corporate-hero flex bg-[#F4F1EB] relative pb-[80px] overflow-x-hidden">
      <div className="left ml-[60px] mt-[45px] tenor-font">
        <div className="w-[622px] flex flex-col mx-auto">
          <h1 className="w-full text-[50px] text-black garamond-font leading-[120%] mb-[21px]">
            Enter your information <br /> and we will contact you
          </h1>
          <p className="w-full text-[17px] text-[#4A4A4A] leading-[150%] tenord-font mb-[40px]">
            Golden Bond Jewelry creates custom-fit, welded permanent jewelry in
            14K gold and sterling silver, as well as clasped and ready to wear
            jewelry.
          </p>

          <form className="w-full space-y-[20px]">
            <div className="flex gap-[20px]">
              <div className="flex-1">
                <label className="block text-[16px] text-[#757575] mb-[8px] tenord-font">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Your First Name"
                  className="w-full h-[50px] px-[16px] bg-[#F4F1EB] border border-[#B58E5A]/30 text-[16px] text-[#333] placeholder-[#999] focus:outline-none focus:border-[#B58E5A]"
                />
              </div>
              <div className="flex-1">
                <label className="block text-[16px] text-[#757575] mb-[8px] tenord-font">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Last Name"
                  className="w-full h-[50px] px-[16px] bg-[#F4F1EB] border border-[#B58E5A]/30 text-[16px] text-[#333] placeholder-[#999] focus:outline-none focus:border-[#B58E5A]"
                />
              </div>
            </div>

            <div className="flex gap-[20px]">
              <div className="flex-1">
                <label className="block text-[16px] text-[#757575] mb-[8px] tenord-font">
                  Birthday
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Birthday"
                  className="w-full h-[50px] px-[16px] bg-[#F4F1EB] border border-[#B58E5A]/30 text-[16px] text-[#333] placeholder-[#999] focus:outline-none focus:border-[#B58E5A]"
                />
              </div>
              <div className="flex-1">
                <label className="block text-[16px] text-[#757575] mb-[8px] tenord-font">
                  Phone
                </label>
                <input
                  type="tel"
                  placeholder="Enter Your Phone Number"
                  className="w-full h-[50px] px-[16px] bg-[#F4F1EB] border border-[#B58E5A]/30 text-[16px] text-[#333] placeholder-[#999] focus:outline-none focus:border-[#B58E5A]"
                />
              </div>
            </div>

            <div>
              <label className="block text-[16px] text-[#757575] mb-[8px] tenord-font">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full h-[50px] px-[16px] bg-[#F4F1EB] border border-[#B58E5A]/30 text-[16px] text-[#333] placeholder-[#999] focus:outline-none focus:border-[#B58E5A]"
              />
            </div>

            <div>
              <label className="block text-[16px] text-[#757575] mb-[8px] tenord-font">
                Why are you reaching out to Golden Bond?
              </label>
              <textarea
                placeholder="Text...."
                rows={4}
                className="w-full px-[16px] py-[12px] bg-[#F4F1EB] border border-[#B58E5A]/30 text-[16px] text-[#333] placeholder-[#999] focus:outline-none focus:border-[#B58E5A] resize-none"
              />
            </div>

            <div className="w-full flex justify-center lg:justify-start mt-[32px] z-10">
              <button
                type="submit"
                className="w-full min-w-[240px] lg:min-w-[400px] h-[50px] md:h-[55px] px-[8%] md:px-[10%] bg-[#B58E5A] text-sm sm:text-base lg:text-[16px] text-white flex items-center justify-center font-semibold hover:cursor-pointer hover:bg-[#B58E5A]/80 hover:text-white transition-all duration-300 uppercase"
              >
                <p className="whitespace-nowrap">PLAN MY EVENT</p>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="right flex justify-end ml-[10%] mt-[45px] relative">
        {/* Ellipse decorations */}
        <div className="absolute top-[250px] -left-[100px] w-[257px] h-[257px] z-0">
          <Image
            src="/images/large-ellipse.svg"
            alt=""
            width={257}
            height={257}
            className="opacity-50"
          />
        </div>
        <div className="absolute -bottom-[80px] -right-[50px] w-[257px] h-[257px] z-0">
          <Image
            src="/images/large-ellipse.svg"
            alt=""
            width={257}
            height={257}
            className="opacity-30"
          />
        </div>

        <div className="w-[682px] h-[737px] relative z-10">
          <Image
            src="/images/contact/sign.jpg"
            alt="Golden Bond Neon Sign"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
