"use client";

import Image from "next/image";
import { useState } from "react";

interface DataFormOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (formData: FormData) => void;
}

export interface FormData {
  fullName: string;
  birthday: string;
  email: string;
  inPerson: boolean;
  online: boolean;
}

export default function DataFormOverlay({
  isOpen,
  onClose,
  onSubmit,
}: DataFormOverlayProps) {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    birthday: "",
    email: "",
    inPerson: false,
    online: false,
  });

  if (!isOpen) return null;

  // Current question indicator (showing step 4/5)
  const currentQuestion = 4;

  const questionBursts = [
    "/images/education/burst1.svg",
    "/images/education/burst2.svg",
    "/images/education/burst3.svg",
    "/images/education/burst4.svg",
    "/images/education/burst5.svg",
  ];

  const handleInputChange = (
    field: keyof FormData,
    value: string | boolean
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    // Basic validation
    if (
      formData.fullName &&
      formData.birthday &&
      formData.email &&
      (formData.inPerson || formData.online)
    ) {
      onSubmit(formData);
    }
  };

  const isFormValid =
    formData.fullName &&
    formData.birthday &&
    formData.email &&
    (formData.inPerson || formData.online);

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
          <div className="w-full max-w-[95vw] sm:max-w-[90vw] md:max-w-2xl lg:max-w-3xl mx-auto p-4 sm:p-6 md:p-8 lg:p-12">
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

            <h2 className="garamond-font text-[36px] sm:text-[42px] md:text-[48px] text-center text-white uppercase tracking-wide mb-8 sm:mb-12 drop-shadow-lg">
              Enter Your Data
            </h2>

            {/* Form Fields */}
            <div className="space-y-6 mb-8 sm:mb-12 max-w-md mx-auto">
              {/* Full Name */}
              <div>
                <label className="block text-white text-[16px] sm:text-[18px] tenor-font mb-3 text-left">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Full Name"
                  value={formData.fullName}
                  onChange={(e) =>
                    handleInputChange("fullName", e.target.value)
                  }
                  className="w-full px-4 py-3 bg-black/40 border border-white/30 text-white placeholder-white/60 tenor-font text-[14px] sm:text-[16px] focus:outline-none focus:border-[#B58E5A] focus:ring-2 focus:ring-[#B58E5A]/30 transition-all duration-300"
                />
              </div>

              {/* Birthday */}
              <div>
                <label className="block text-white text-[16px] sm:text-[18px] tenor-font mb-3 text-left">
                  Birthday
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Birthday"
                  value={formData.birthday}
                  onChange={(e) =>
                    handleInputChange("birthday", e.target.value)
                  }
                  className="w-full px-4 py-3 bg-black/40 border border-white/30 text-white placeholder-white/60 tenor-font text-[14px] sm:text-[16px] focus:outline-none focus:border-[#B58E5A] focus:ring-2 focus:ring-[#B58E5A]/30 transition-all duration-300"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-white text-[16px] sm:text-[18px] tenor-font mb-3 text-left">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="w-full px-4 py-3 bg-black/40 border border-white/30 text-white placeholder-white/60 tenor-font text-[14px] sm:text-[16px] focus:outline-none focus:border-[#B58E5A] focus:ring-2 focus:ring-[#B58E5A]/30 transition-all duration-300"
                />
              </div>

              {/* Checkboxes */}
              <div className="flex justify-center gap-8 mt-8">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.inPerson}
                    onChange={(e) =>
                      handleInputChange("inPerson", e.target.checked)
                    }
                    className="sr-only"
                  />
                  <div
                    className={`w-5 h-5 border-2 border-white/50 mr-3 flex items-center justify-center transition-all duration-300 ${
                      formData.inPerson ? "bg-[#B58E5A] border-[#B58E5A]" : ""
                    }`}
                  >
                    {formData.inPerson && (
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                  <span className="text-white tenor-font text-[16px] sm:text-[18px]">
                    In-Person
                  </span>
                </label>

                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.online}
                    onChange={(e) =>
                      handleInputChange("online", e.target.checked)
                    }
                    className="sr-only"
                  />
                  <div
                    className={`w-5 h-5 border-2 border-white/50 mr-3 flex items-center justify-center transition-all duration-300 ${
                      formData.online ? "bg-[#B58E5A] border-[#B58E5A]" : ""
                    }`}
                  >
                    {formData.online && (
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                  <span className="text-white tenor-font text-[16px] sm:text-[18px]">
                    Online
                  </span>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={!isFormValid}
              className={`px-8 sm:px-10 md:px-12 py-3 sm:py-4 font-semibold tenor-font text-[14px] sm:text-[16px] md:text-[18px] transition-all duration-300 flex items-center gap-2 mx-auto drop-shadow-lg uppercase tracking-wide ${
                isFormValid
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
