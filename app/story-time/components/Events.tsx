"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Events() {
  const eventCards = [
    {
      image: "/images/services/private-events.jpg",
      alt: "Private Events",
      date: "March 15, 2024",
      name: "Intimate Celebrations",
      description:
        "Perfect for bachelorette parties, birthdays, and special gatherings.",
    },
    {
      image: "/images/story-time/jewels.jpg",
      alt: "Business Events",
      date: "April 8, 2024",
      name: "Professional Gatherings",
      description:
        "Ideal for corporate meetings, team building, and networking events.",
    },
    {
      image: "/images/services/popup-events.jpg",
      alt: "Popup Events",
      date: "May 22, 2024",
      name: "Pop-Up Experiences",
      description: "Unique temporary experiences and exclusive showcases.",
    },
    {
      image: "/images/services/private-events.jpg",
      alt: "Anniversary Events",
      date: "June 10, 2024",
      name: "Anniversary Celebrations",
      description:
        "Memorable events for milestone anniversaries and special occasions.",
    },
    {
      image: "/images/story-time/jewels.jpg",
      alt: "Wedding Events",
      date: "July 18, 2024",
      name: "Wedding Experiences",
      description:
        "Beautiful jewelry experiences for engagements and wedding celebrations.",
    },
    {
      image: "/images/services/popup-events.jpg",
      alt: "Holiday Events",
      date: "August 5, 2024",
      name: "Holiday Gatherings",
      description:
        "Festive events perfect for holiday parties and seasonal celebrations.",
    },
  ];

  return (
    <section className="w-full min-h-screen flex flex-col relative px-6 lg:px-0 pb-16 bg-[#F4F1EB]">
      <div className="heading-container flex justify-center items-center pt-[40px] lg:pt-[60px]">
        <div className="inner-heading w-full max-w-[674px] flex flex-col justify-center items-center text-center px-4">
          <h2 className="text-[#B58E5A] text-[14px] sm:text-[16px] leading-[120%] uppercase tenor-font">
            Explore Our Story Time
          </h2>
          <h1 className="text-[#1B0E01] garamond-font font-semibold text-[32px] sm:text-[40px] lg:text-[48px] leading-[120%] mt-[8px] max-w-full">
            Tailored Events for Every Occasion
          </h1>
        </div>
      </div>

      <div className="cards-container mt-[40px] lg:mt-[60px] relative z-10">
        <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-[32px] gap-x-[60px] max-w-[1320px] mx-auto justify-items-center">
          {eventCards.map((card, index) => (
            <div
              key={index}
              className="event-card w-full max-w-[400px] lg:w-[400px] h-[400px] lg:h-[453px] relative shadow-lg"
            >
              <Image
                src={card.image}
                alt={card.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 350px, (max-width: 1024px) 300px, 400px"
              />
              <div className="absolute inset-0 bg-[#1B0E01]/52"></div>
              <div className="card-content absolute inset-0 p-4 lg:p-6 flex flex-col justify-end z-10">
                <div className="card-content-inner mb-3 lg:mb-4">
                  <h3 className="text-[#B58E5A] tenor-font font-semibold text-[12px] lg:text-[14px] leading-[20px] mb-2 tracking-[0.25px] uppercase">
                    {card.date}
                  </h3>
                  <h2 className="text-white garamond-font font-semibold text-[20px] lg:text-[24px] leading-[120%] mb-2">
                    {card.name}
                  </h2>
                </div>
                <div className="card-description mb-4 lg:mb-6">
                  <p className="text-white/90 text-[14px] lg:text-[16px] leading-[150%] tenor-font">
                    {card.description}
                  </p>
                </div>
                <div className="card-buttons">
                  <button className="text-white hover:text-[#B58E5A] flex items-center justify-center sm:justify-start text-[12px] lg:text-[14px] leading-[19px] uppercase tenor-font transition-colors duration-300">
                    EXPLORE
                    <ArrowRight className="w-4 h-4 ml-[8px]" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* View All Button */}
      <div className="view-all-container flex justify-center mt-12 lg:mt-16">
        <button className="bg-[#B58E5A] hover:bg-[#B58E5A]/80 text-white font-semibold px-6 lg:px-8 py-3 lg:py-4 text-[14px] lg:text-[16px] leading-[19px] uppercase tenor-font transition-colors duration-300">
          VIEW ALL
        </button>
      </div>

      {/* Decorative ellipses positioned behind cards - hidden on mobile */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none hidden lg:block">
        {/* Large ellipse on bottom left */}
        <div className="absolute bottom-[550px] left-[20px] z-0">
          <Image
            src="/images/large-ellipse.svg"
            alt="decorative ellipse"
            width={257}
            height={257}
          />
        </div>
        {/* Small ellipse on upper right */}
        <div className="absolute top-[60px] right-[90px] z-0">
          <Image
            src="/images/small-ellipse.svg"
            alt="decorative ellipse"
            width={160}
            height={160}
          />
        </div>
      </div>
    </section>
  );
}
