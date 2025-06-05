"use client";

import Image from "next/image";

interface WaitlistOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onBeginJourney: () => void;
}

export default function WaitlistOverlay({
  isOpen,
  onClose,
  onBeginJourney,
}: WaitlistOverlayProps) {
  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-transparent backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      ></div>

      {/* Modal Content - Hero Section Only */}
      <div className="relative w-full h-full bg-[#1B0E01]/70 animate-scale-in overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="hover:cursor-pointer absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center bg-white/80 hover:bg-white/90 rounded-full transition-colors duration-200 backdrop-blur-sm"
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
        <div className="px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-12 lg:py-12 xl:px-16 xl:py-16 text-center h-full flex flex-col justify-center items-center">
          <div className="w-full max-w-[95vw] sm:max-w-[90vw] md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto p-4 sm:p-6 md:p-8 lg:p-12">
            <h2 className="garamond-font text-[26px] sm:text-[30px] md:text-[36px] lg:text-[44px] xl:text-[52px] 2xl:text-[56px] text-center text-white uppercase tracking-wide mb-4 sm:mb-6 drop-shadow-lg">
              JOIN THE WAITLIST
            </h2>
            <p className="tenor-font text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] text-center text-white max-w-[300px] sm:max-w-[400px] md:max-w-[600px] lg:max-w-[800px] mx-auto leading-relaxed mb-6 sm:mb-8 drop-shadow-md px-2">
              Master the craft and business of permanent jewelry with our
              comprehensive training programs—available{" "}
              <span className="underline">online</span>,{" "}
              <span className="underline">in-person</span>, or{" "}
              <span className="underline">hybrid</span> to fit your needs.
              Whether you&apos;re an individual entrepreneur or a team looking
              to expand your skills, we provide hands-on, expert-led education
              to help you succeed.
            </p>

            {/* Begin Journey Button */}
            <button
              onClick={onBeginJourney}
              className="hover:cursor-pointer mt-4 sm:mt-6 md:mt-8 px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-[#B58E5A] hover:bg-[#B58E5A]/90 text-white font-semibold tenor-font text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] transition-colors duration-300 flex items-center gap-2 mx-auto mb-8 sm:mb-10 md:mb-12 drop-shadow-lg"
            >
              BEGIN THE JOURNEY
              <svg
                className="w-4 h-4 sm:w-4 sm:h-4"
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
              {/* Large Ellipse - Left Side - Responsive */}
              <div className="absolute -left-16 sm:-left-20 md:-left-24 lg:-left-32 top-4 sm:top-6 md:top-8 w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] md:w-[220px] md:h-[220px] lg:w-[257px] lg:h-[257px] z-0">
                <Image
                  src="/images/large-ellipse.svg"
                  alt=""
                  width={257}
                  height={257}
                  className="opacity-40 sm:opacity-50 md:opacity-60"
                />
              </div>

              {/* Small Ellipse - Right Side - Responsive */}
              <div className="absolute -right-10 sm:-right-12 md:-right-16 lg:-right-20 top-8 sm:top-10 md:top-12 lg:top-16 w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] lg:w-[153px] lg:h-[153px] z-0">
                <Image
                  src="/images/small-ellipse.svg"
                  alt=""
                  width={153}
                  height={153}
                  className="opacity-40 sm:opacity-50 md:opacity-60"
                />
              </div>

              {/* Images Container - Responsive with proper horizontal spacing */}
              <div className="relative z-10">
                {/* Mobile and Small Tablet Layout (Grid) - Now shows all 5 images */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:hidden gap-[10px] sm:gap-[12px] justify-items-center">
                  {/* Image 1 - Business/Planning */}
                  <div className="relative w-[130px] h-[130px] sm:w-[140px] sm:h-[140px] overflow-hidden drop-shadow-lg flex-shrink-0">
                    <Image
                      src="/images/education/nice-showcase.jpg"
                      alt="Business planning and jewelry design"
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Image 2 - Jewelry on Hand */}
                  <div className="relative w-[130px] h-[130px] sm:w-[140px] sm:h-[140px] overflow-hidden drop-shadow-lg flex-shrink-0">
                    <Image
                      src="/images/education/model-jewel.jpg"
                      alt="Permanent jewelry on hand with flowers"
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Image 3 - Welding Process */}
                  <div className="relative w-[130px] h-[130px] sm:w-[140px] sm:h-[140px] overflow-hidden drop-shadow-lg flex-shrink-0">
                    <Image
                      src="/images/education/pop-up.jpg"
                      alt="Jewelry welding process"
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Image 4 - Students/Instructors */}
                  <div className="relative w-[130px] h-[130px] sm:w-[140px] sm:h-[140px] overflow-hidden drop-shadow-lg flex-shrink-0">
                    <Image
                      src="/images/education/education.webp"
                      alt="Students and instructors"
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Image 5 - Training Badge - Now visible on mobile too */}
                  <div className="relative w-[130px] h-[130px] sm:w-[140px] sm:h-[140px] overflow-hidden drop-shadow-lg flex-shrink-0 col-span-2 sm:col-span-1 justify-self-center">
                    <Image
                      src="/images/education/course.webp"
                      alt="Training course"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Desktop Layout (Flex with exact spacing) */}
                <div className="hidden md:flex justify-center items-center gap-[17.5px]">
                  {/* Image 1 - Business/Planning */}
                  <div className="relative w-[180px] h-[180px] lg:w-[220px] lg:h-[225px] xl:w-[250px] xl:h-[256px] overflow-hidden drop-shadow-lg flex-shrink-0">
                    <Image
                      src="/images/education/nice-showcase.jpg"
                      alt="Business planning and jewelry design"
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Image 2 - Jewelry on Hand */}
                  <div className="relative w-[180px] h-[180px] lg:w-[220px] lg:h-[225px] xl:w-[250px] xl:h-[256px] overflow-hidden drop-shadow-lg flex-shrink-0">
                    <Image
                      src="/images/education/model-jewel.jpg"
                      alt="Permanent jewelry on hand with flowers"
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Image 3 - Welding Process */}
                  <div className="relative w-[180px] h-[180px] lg:w-[220px] lg:h-[225px] xl:w-[250px] xl:h-[256px] overflow-hidden drop-shadow-lg flex-shrink-0">
                    <Image
                      src="/images/education/pop-up.jpg"
                      alt="Jewelry welding process"
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Image 4 - Students/Instructors */}
                  <div className="relative w-[180px] h-[180px] lg:w-[220px] lg:h-[225px] xl:w-[250px] xl:h-[256px] overflow-hidden drop-shadow-lg flex-shrink-0">
                    <Image
                      src="/images/education/education.webp"
                      alt="Students and instructors"
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Image 5 - Training Badge */}
                  <div className="relative w-[180px] h-[180px] lg:w-[220px] lg:h-[225px] xl:w-[250px] xl:h-[256px] overflow-hidden drop-shadow-lg flex-shrink-0">
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
    </div>
  );
}
