"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    const [isEventsOpen, setIsEventsOpen] = useState(false)

  return (
    <div className="relative min-h-screen">
    {/* Header Navigation */}
    <header className="absolute top-0 left-0 right-0 z-50 px-6">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Left Navigation */}
        <div className="flex items-center space-x-8 tenor-font">
          <Link
            href="/about"
            className="text-white text-[16px] leading-[120%] font-light tracking-wider hover:text-amber-200 transition-colors"
          >
            ABOUT
          </Link>
          <Link
            href="/story-time"
            className="text-white text-[16px] leading-[120%] font-light tracking-wider hover:text-amber-200 transition-colors"
          >
            STORY TIME
          </Link>
          <Link
            href="/portfolio"
            className="text-white text-[16px] leading-[120%] font-light tracking-wider hover:text-amber-200 transition-colors"
          >
            PORTFOLIO
          </Link>
        </div>
        {/* Logo */}
        <div className="flex items-center space-x-8 hover:cursor-pointer">
            <Image src="/images/logo-white.svg" alt="Golden Bond" width={72} height={71} />
        </div>
        {/* Right Navigation */}
        <div className="flex items-center space-x-8">
          {/* Events Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsEventsOpen(!isEventsOpen)}
              className="flex items-center space-x-1 text-white text-[16px] leading-[120%] font-light tracking-wider hover:text-amber-200 transition-colors"
            >
              <span>EVENTS</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${isEventsOpen ? "rotate-180" : ""}`} />
            </button>

            {/* Dropdown Menu */}
            {isEventsOpen && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-[#F4F1EB] backdrop-blur-sm border border-amber-200/20 shadow-lg">
                <div className="py-2 uppercase tenor-font">
                  <Link
                    href="/events/corporate"
                    className="block px-4 py-2 pb-3 text-[#B58E5A] text-[16px] leading-[120%] font-light tracking-wider relative group transition-colors duration-300"
                    onClick={() => setIsEventsOpen(false)}
                  >
                    Corporate
                    <span className="absolute bottom-1 left-4 right-4 h-px bg-[#B58E5A] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
                  </Link>
                  <Link
                    href="/events/private"
                    className="block px-4 py-2 pb-3 text-[#B58E5A] text-[16px] leading-[120%] font-light tracking-wider relative group transition-colors duration-300"
                    onClick={() => setIsEventsOpen(false)}
                  >
                    Private
                    <span className="absolute bottom-1 left-4 right-4 h-px bg-[#B58E5A] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
                  </Link>
                  <Link
                    href="/events/popup"
                    className="block px-4 py-2 pb-3 text-[#B58E5A] text-[16px] leading-[120%] font-light tracking-wider relative group transition-colors duration-300"
                    onClick={() => setIsEventsOpen(false)}
                  >
                    Popup Events
                    <span className="absolute bottom-1 left-4 right-4 h-px bg-[#B58E5A] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/education"
            className="text-white text-[16px] leading-[120%] font-light tracking-wider hover:text-amber-200 transition-colors"
          >
            EDUCATION
          </Link>
          <Link
            href="/contact"
            className="text-white text-[16px] leading-[120%] font-light tracking-wider hover:text-amber-200 transition-colors"
          >
            CONTACT
          </Link>
        </div>
      </nav>
    </header>

    {/* Hero Image */}
    <div className="relative w-full h-screen">
             <Image
         src="/images/hero.jpg"
         alt="Elegant woman wearing layered gold jewelry in luxury jewelry store"
         fill
         className="object-cover object-[50%_63%]"
         priority
       />

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Hero Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-6 max-w-6xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl garamond-font leading-[120%] tracking-[1%] mb-8">
            <span className="block">PRIVATE EVENTS</span>
            <span className="block">BUSINESS EVENTS</span>
            <span className="block">POP-UPS</span>
          </h1>

          {/* Subtitle */}
          <p className="text-white/80 text-lg md:text-xl tenor-font tracking-wide max-w-[50%] mx-auto leading-relaxed">
            Golden Bond is about celebrating connections that spark meaning.
          </p>
        </div>
      </div>
    </div>

    {/* Click outside to close dropdown */}
    {isEventsOpen && <div className="fixed inset-0 z-40" onClick={() => setIsEventsOpen(false)} />}
  </div>
  );
}