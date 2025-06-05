"use client";

import Image from "next/image";
import { useState } from "react";

interface QuestionOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onNext: (selectedAnswer: string) => void;
}

export default function QuestionOverlay({
  isOpen,
  onClose,
  onNext,
}: QuestionOverlayProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");

  if (!isOpen) return null;

  // Current question indicator (which burst is active)
  const currentQuestion = 1; // This would be dynamic based on question number

  const questionBursts = [
    "/images/education/burst1.svg",
    "/images/education/burst2.svg",
    "/images/education/burst3.svg",
    "/images/education/burst4.svg",
    "/images/education/burst5.svg",
  ];

  const question =
    "What best describes your current experience with permanent jewelry?";

  const imageOptions = [
    {
      id: "option-a",
      image: "/images/education/nice-showcase.jpg",
      label: "Business & Professional Focus",
    },
    {
      id: "option-b",
      image: "/images/education/model-jewel.jpg",
      label: "Creative & Artistic Focus",
    },
  ];

  const handleNext = () => {
    if (selectedAnswer) {
      onNext(selectedAnswer);
    }
  };

  return (
    <div className="absolute inset-0 z-60">
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

            <p className="garamond-font font-semibold text-[48px] text-center text-white max-w-[850px] mx-auto leading-relaxed mb-8 sm:mb-12 drop-shadow-md">
              {question}
            </p>

            {/* Two Image Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-[24px] lg:gap-[42px] mb-8 sm:mb-12 justify-items-center max-w-4xl mx-auto">
              {imageOptions.map((option) => (
                <div
                  key={option.id}
                  onClick={() => setSelectedAnswer(option.id)}
                  className={`relative cursor-pointer transition-all duration-300 hover:scale-105 ${
                    selectedAnswer === option.id ? "scale-105" : ""
                  }`}
                >
                  {/* Image Container */}
                  <div
                    className={`relative lg:w-[270px] lg:h-[246px] overflow-hidden transition-all duration-300 ${
                      selectedAnswer === option.id
                        ? "drop-shadow-2xl ring-4 ring-[#B58E5A] ring-offset-4 ring-offset-transparent"
                        : "drop-shadow-lg hover:drop-shadow-xl"
                    }`}
                  >
                    <Image
                      src={option.image}
                      alt={option.label}
                      fill
                      className={`object-cover transition-all duration-300 ${
                        selectedAnswer === option.id
                          ? "brightness-110 saturate-110"
                          : "brightness-90 hover:brightness-100"
                      }`}
                    />
                  </div>

                  {/* Label */}
                  <p className="tenor-font text-[14px] sm:text-[16px] md:text-[18px] text-white text-center mt-4 sm:mt-6 leading-tight drop-shadow-md font-medium">
                    {option.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              disabled={!selectedAnswer}
              className={`px-8 sm:px-10 md:px-12 py-3 sm:py-4 font-semibold tenor-font text-[14px] sm:text-[16px] md:text-[18px] transition-all duration-300 flex items-center gap-2 mx-auto drop-shadow-lg uppercase tracking-wide ${
                selectedAnswer
                  ? "bg-[#B58E5A] hover:bg-[#B58E5A]/90 text-white hover:scale-105 cursor-pointer"
                  : "bg-[#4A4A4A]/49 text-gray-300 cursor-not-allowed"
              }`}
            >
              Next
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
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

            {/* Decorative Elements */}
            <div className="absolute -left-10 sm:-left-16 md:-left-20 top-1/4 w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] md:w-[150px] md:h-[150px] z-0">
              <Image
                src="/images/small-ellipse.svg"
                alt=""
                width={153}
                height={153}
                className="opacity-20 sm:opacity-30"
              />
            </div>

            <div className="absolute -right-10 sm:-right-16 md:-right-20 bottom-1/4 w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] z-0">
              <Image
                src="/images/large-ellipse.svg"
                alt=""
                width={257}
                height={257}
                className="opacity-20 sm:opacity-30"
              />
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
