"use client";

import Image from "next/image";

interface ExpertCardProps {
  image: string;
  name: string;
  title: string;
  description: string;
  alt?: string;
}

export default function ExpertCard({
  image,
  name,
  title,
  description,
  alt,
}: ExpertCardProps) {
  return (
    <div className="expert-card w-[316px] h-[450px]">
      <div className="w-[316px] h-[305px] relative">
        <Image
          src={image}
          alt={alt || `${name} - Expert`}
          fill
          className="object-cover"
        />
      </div>
      <div className="w-[316px] h-[133px] pt-[12px]">
        <div className="expert-header w-full h-[54px]">
          <h1 className="first-name text-white text-[24px] font-semibold garamond-font">
            {name}
          </h1>
          <h1 className="title text-white text-[16px] font-semibold garamond-font pt-[10px]">
            {title}
          </h1>
        </div>
        <div className="w-full h-[63px] pt-[16px]">
          <p className="tenor-font text-[17px] leading-[150%] text-[#B58E5A]/72">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
