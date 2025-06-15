"use client";

import Image from "next/image";

export default function Find() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 garamond-font leading-tight">
              Find Your Perfect
              <br />
              Popup Experience
            </h2>
            <p className="text-lg text-gray-600 tenor-font leading-relaxed">
              Our popup events bring unique experiences to unexpected locations.
              From intimate gatherings to surprise celebrations, we create
              memorable moments that appear when you least expect them.
            </p>
            <p className="text-lg text-gray-600 tenor-font leading-relaxed">
              Each popup event is carefully curated to provide an exclusive
              experience that combines creativity, luxury, and the element of
              surprise.
            </p>
            <button className="bg-[#B58E5A] text-white px-8 py-4 text-lg font-light tracking-wide hover:bg-amber-700 transition-colors tenor-font">
              PLAN YOUR POPUP
            </button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/services/popup-events.jpg"
                alt="Popup Events Setup"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
