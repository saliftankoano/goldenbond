"use client";

import Image from "next/image";
import { useState } from "react";

export default function Hero() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const openOverlay = () => {
    setIsOverlayOpen(true);
  };

  const closeOverlay = () => {
    setIsOverlayOpen(false);
  };

  return (
    <>
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
            <button
              onClick={openOverlay}
              className="w-full sm:w-auto min-w-[200px] sm:min-w-[220px] md:min-w-[240px] lg:min-w-[260px] xl:min-w-[211px] h-[45px] sm:h-[48px] md:h-[52px] lg:h-[58px] xl:h-[61px] bg-[#B58E5A] text-white text-[14px] sm:text-[15px] md:text-base lg:text-lg xl:text-[19px] font-semibold tenor-font hover:bg-[#B58E5A]/90 hover:scale-95 hover:cursor-pointer transition-all duration-300 ease-in-out transform whitespace-nowrap px-4 sm:px-6"
            >
              Join the waitlist
            </button>
          </div>
        </div>

        {/* Overlay - Limited to Hero Section */}
        {isOverlayOpen && (
          <div className="absolute inset-0 z-50">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-transparent backdrop-blur-sm animate-fade-in"
              onClick={closeOverlay}
            ></div>

            {/* Modal Content - Hero Section Only */}
            <div className="relative w-full h-full bg-[#1B0E01]/70 animate-scale-in overflow-y-auto">
              {/* Close Button */}
              <button
                onClick={closeOverlay}
                className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center bg-white/80 hover:bg-white/90 rounded-full transition-colors duration-200 backdrop-blur-sm"
              >
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Modal Header */}
              <div className="px-6 py-8 sm:px-8 md:px-12 lg:px-16 xl:px-20 text-center min-h-screen flex flex-col justify-center items-center">
                <div className="w-full max-w-7xl mx-auto p-8 sm:p-12 md:p-16">
                  <h2 className="garamond-font text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px] xl:text-[56px] text-center text-white uppercase tracking-wide mb-6 drop-shadow-lg">
                    JOIN THE WAITLIST
                  </h2>
                  <p className="tenor-font text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-center text-white max-w-[800px] mx-auto leading-relaxed mb-8 drop-shadow-md">
                    Master the craft and business of permanent jewelry with our
                    comprehensive training programs—available{" "}
                    <span className="underline">online</span>,{" "}
                    <span className="underline">in-person</span>, or{" "}
                    <span className="underline">hybrid</span> to fit your needs.
                    Whether you're an individual entrepreneur or a team looking
                    to expand your skills, we provide hands-on, expert-led
                    education to help you succeed.
                  </p>

                  {/* Begin Journey Button */}
                  <button className="mt-8 px-8 py-3 bg-[#B58E5A] hover:bg-[#B58E5A]/90 text-white font-semibold tenor-font transition-colors duration-300 flex items-center gap-2 mx-auto mb-12 drop-shadow-lg">
                    BEGIN THE JOURNEY
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>

                  {/* Image Gallery */}
                  <div className="relative w-full flex justify-center">
                    {/* Large Ellipse - Left Side */}
                    <div className="absolute -left-32 top-8 w-[257px] h-[257px] z-0">
                      <Image
                        src="/images/large-ellipse.svg"
                        alt=""
                        width={257}
                        height={257}
                        className="opacity-60"
                      />
                    </div>

                    {/* Small Ellipse - Right Side */}
                    <div className="absolute -right-20 top-16 w-[153px] h-[153px] z-0">
                      <Image
                        src="/images/small-ellipse.svg"
                        alt=""
                        width={153}
                        height={153}
                        className="opacity-60"
                      />
                    </div>

                    {/* Images Container */}
                    <div className="flex justify-center items-center gap-[17.5px] relative z-10">
                      {/* Image 1 - Business/Planning */}
                      <div className="relative w-[250px] h-[256px] overflow-hidden drop-shadow-lg flex-shrink-0">
                        <Image
                          src="/images/education/nice-showcase.jpg"
                          alt="Business planning and jewelry design"
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Image 2 - Jewelry on Hand */}
                      <div className="relative w-[250px] h-[256px] overflow-hidden drop-shadow-lg flex-shrink-0">
                        <Image
                          src="/images/education/model-jewel.jpg"
                          alt="Permanent jewelry on hand with flowers"
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Image 3 - Welding Process */}
                      <div className="relative w-[250px] h-[256px] overflow-hidden drop-shadow-lg flex-shrink-0">
                        <Image
                          src="/images/education/pop-up.jpg"
                          alt="Jewelry welding process"
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Image 4 - Students/Instructors */}
                      <div className="relative w-[250px] h-[256px] overflow-hidden drop-shadow-lg flex-shrink-0">
                        <Image
                          src="/images/education/education.webp"
                          alt="Students and instructors"
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Image 5 - Training Badge */}
                      <div className="relative w-[250px] h-[256px] overflow-hidden drop-shadow-lg flex-shrink-0">
                        <Image
                          src="/images/education/course.webp"
                          alt="Students and instructors"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
}
