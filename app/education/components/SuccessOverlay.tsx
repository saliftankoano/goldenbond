"use client";

import Image from "next/image";

interface SuccessOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  userName: string;
}

export default function SuccessOverlay({
  isOpen,
  onClose,
  userName,
}: SuccessOverlayProps) {
  if (!isOpen) return null;

  // Final step indicator (showing step 5/5)
  const currentQuestion = 5;

  const questionBursts = [
    "/images/education/burst1.svg",
    "/images/education/burst2.svg",
    "/images/education/burst3.svg",
    "/images/education/burst4.svg",
    "/images/education/burst5.svg",
  ];

  return (
    <div className="absolute inset-0 z-60">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-transparent backdrop-blur-[16px] animate-fade-in"
        onClick={onClose}
      ></div>

      {/* Modal Content - Hero Section Only */}
      <div className="relative w-full h-full bg-[#1B0E01]/70 animate-scale-in overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="hover:cursor-pointer absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full transition-colors duration-200"
        >
          <svg
            className="w-14 h-14 text-white"
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
          <div className="w-full max-w-[95vw] sm:max-w-[90vw] md:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto p-4 sm:p-6 md:p-8 lg:p-12">
            {/* Question Indicator Bursts at Top */}
            <div className="flex justify-center items-center gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
              {questionBursts.map((burstSrc, index) => (
                <div
                  key={index}
                  className={`relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 transition-all duration-300 ${
                    index === currentQuestion - 1
                      ? "scale-110 drop-shadow-2xl"
                      : "scale-90 opacity-40"
                  }`}
                >
                  <Image
                    src={burstSrc}
                    alt={`Question ${index + 1}`}
                    fill
                    className={`object-contain transition-all duration-300 ${
                      index === currentQuestion - 1
                        ? "brightness-110 saturate-110"
                        : "brightness-75"
                    }`}
                  />
                  {/* Active indicator ring */}
                  {index === currentQuestion - 1 && (
                    <div className="absolute inset-0 rounded-full border-2 border-[#B58E5A] animate-pulse"></div>
                  )}
                </div>
              ))}
            </div>

            {/* Success Message */}
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="garamond-font text-[32px] sm:text-[38px] md:text-[44px] lg:text-[50px] xl:text-[56px] text-center text-white leading-[1.2] mb-6 sm:mb-8 drop-shadow-lg max-w-4xl mx-auto">
                You&apos;re officially on the waitlist,{" "}
                <span className="text-[#B58E5A]">{userName}</span> <br /> Stay
                tuned!
              </h2>
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
