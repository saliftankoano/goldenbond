"use client";

import Image from "next/image";

export default function PastEvents() {
  const pastEvents = [
    {
      title: "Event Name",
      description:
        "Whether you're an individual entrepreneur or a team looking to expand your skills.",
      image: "/images/private-party/hero.jpg",
    },
    {
      title: "Event Name",
      description:
        "Whether you're an individual entrepreneur or a team looking to expand your skills.",
      image: "/images/private-party/hero.jpg",
    },
    {
      title: "Event Name",
      description:
        "Whether you're an individual entrepreneur or a team looking to expand your skills.",
      image: "/images/private-party/hero.jpg",
    },
    {
      title: "Event Name",
      description:
        "Whether you're an individual entrepreneur or a team looking to expand your skills.",
      image: "/images/private-party/hero.jpg",
    },
    {
      title: "Event Name",
      description:
        "Whether you're an individual entrepreneur or a team looking to expand your skills.",
      image: "/images/private-party/hero.jpg",
    },
  ];

  return (
    <section className="w-screen bg-[#F4F1EB] flex flex-col items-center py-[100px]">
      {/* Header */}
      <div className="text-center mb-[80px]">
        <h2 className="garamond-font text-[48px] text-black leading-[120%] mb-[16px]">
          See something you like?
        </h2>
        <p className="tenor-font text-[16px] text-[#666666] leading-[150%]">
          Let our team know - we love to see what inspires you!
        </p>
      </div>

      {/* Events Horizontal Scroll */}
      <div className="w-full overflow-x-auto mb-[60px]">
        <div className="flex gap-[20px] px-[20px] min-w-max">
          {pastEvents.map((event, index) => (
            <div key={index} className="flex flex-col w-[320px] flex-shrink-0">
              {/* Event Image */}
              <div className="w-[320px] h-[240px] relative mb-[20px] rounded-[8px] overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Event Content */}
              <div className="text-left">
                <h3 className="garamond-font text-[24px] text-black leading-[120%] mb-[8px]">
                  {event.title}
                </h3>
                <p className="tenor-font text-[14px] text-[#666666] leading-[150%]">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex gap-[8px] mb-[60px]">
        <div className="w-[40px] h-[8px] bg-[#C8A882] rounded-full"></div>
        <div className="w-[8px] h-[8px] bg-[#D4D4D4] rounded-full"></div>
        <div className="w-[8px] h-[8px] bg-[#D4D4D4] rounded-full"></div>
        <div className="w-[8px] h-[8px] bg-[#D4D4D4] rounded-full"></div>
      </div>

      {/* Plan My Event Button */}
      <button className="bg-[#C8A882] text-white px-[40px] py-[16px] text-[14px] font-medium tracking-[2px] uppercase hover:bg-[#B8986F] transition-colors duration-300">
        PLAN MY EVENT
      </button>
    </section>
  );
}
