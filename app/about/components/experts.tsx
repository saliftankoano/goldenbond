"use client";

import ExpertCard from "./ExpertCard";
import Image from "next/image";

export default function Experts() {
  const experts = [
    {
      name: "Beth",
      title: "Sales & Marketing",
      description:
        "Beth serves as advisor, operations, financial and risk management advisor — not daily operator.",
      image: "/images/about/beth.webp",
    },
    {
      name: "Mia",
      title: "Operations & Production",
      description:
        "Mia serves as advisor, operations, financial and risk management advisor — not daily operator.",
      image: "/images/about/mia.webp",
    },
    {
      name: "Sky",
      title: "Operations & Production",
      description:
        "Sky serves as advisor, operations, financial and risk management advisor — not daily operator.",
      image: "/images/about/sky.webp",
    },
    {
      name: "Taara",
      title: "Operations & Production",
      description:
        "Taara serves as advisor, operations, financial and risk management advisor — not daily operator.",
      image: "/images/about/taara.webp",
    },
    {
      name: "Sophia",
      title: "Operations & Production",
      description:
        "Sophia serves as advisor, operations, financial and risk management advisor — not daily operator.",
      image: "/images/about/sophia.webp",
    },
    {
      name: "Taara 2",
      title: "Operations & Production",
      description:
        "Taara serves as advisor, operations, financial and risk management advisor — not daily operator.",
      image: "/images/about/taara.webp",
    },
    {
      name: "Sky 2",
      title: "Operations & Production",
      description:
        "Sky serves as advisor, operations, financial and risk management advisor — not daily operator.",
      image: "/images/about/sky.webp",
    },
    {
      name: "Mia 2",
      title: "Operations & Production",
      description:
        "Mia serves as advisor, operations, financial and risk management advisor — not daily operator.",
      image: "/images/about/mia.webp",
    },
  ];
  return (
    <section className="experts-section w-screen h-[1382px] bg-[#1B0E01] flex flex-col justify-center items-center relative">
      {/* Small Ellipse - Upper Left */}
      <Image
        src="/images/small-ellipse.svg"
        alt="decorative ellipse"
        width={160}
        height={160}
        className="absolute top-[280px] left-[-10px] w-[160px] h-[160px] z-0"
      />

      {/* Small Ellipse - Upper Right */}
      <Image
        src="/images/small-ellipse.svg"
        alt="decorative ellipse"
        width={160}
        height={160}
        className="absolute top-[200px] right-[80px] w-[160px] h-[160px] z-0"
      />

      {/* Small Ellipse - Lower Right */}
      <Image
        src="/images/small-ellipse.svg"
        alt="decorative ellipse"
        width={160}
        height={160}
        className="absolute bottom-[210px] right-[-20px] w-[160px] h-[160px] z-0"
      />

      <div className="intro w-[674px] h-[171px] flex flex-col justify-center items-center relative z-10">
        <div className="w-[146px] h-[19px]">
          <h2 className="tenor-font text-[16px] leading-[120%] text-[#B58E5A]">
            Golden Bond Team
          </h2>
        </div>
        <div className="w-[309px] h-[58px] text-center pt-[8px]">
          <h1 className="garamond-font text-white text-[48px] leading-[120%] font-semibold">
            Our Experts.
          </h1>
        </div>
        <div className="w-[489px] h-[78px] text-center pt-[8px]">
          <p className="tenor-font text-[17px] leading-[150%] text-white/80">
            Golden Bond Jewelry creates custom-fit, welded permanent jewelry in
            14K gold and sterling silver, as well as clasped and ready to wear
            jewelry.
          </p>
        </div>
      </div>
      <div className="experts-container pt-[60px] w-full max-w-[1360px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center relative z-10">
        {experts.map((expert, index) => (
          <ExpertCard
            key={expert.name}
            image={expert.image}
            name={expert.name}
            title={expert.title}
            description={expert.description}
            alt={`${expert.name} - ${expert.title} Expert`}
          />
        ))}
      </div>
    </section>
  );
}
