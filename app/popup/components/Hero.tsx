"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[500px] md:min-h-[600px] lg:min-h-[700px] bg-gradient-to-b from-[#F4F1EB] to-[#E8E3DB] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/services/popup-events.jpg"
          alt="Popup Events"
          fill
          className="object-cover opacity-30"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[500px] md:min-h-[600px] lg:min-h-[700px] px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-6 garamond-font leading-tight">
            Popup Events
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-8 tenor-font leading-relaxed max-w-3xl mx-auto">
            Discover our exclusive popup events that bring unique experiences to
            unexpected locations.
          </p>
        </div>
      </div>
    </section>
  );
}
