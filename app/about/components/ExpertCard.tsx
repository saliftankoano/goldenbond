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
    <div className="expert-card w-full h-full">
      <div className="w-full aspect-[4/5] relative mb-4">
        <Image
          src={image}
          alt={alt || `${name} - Expert`}
          fill
          className="object-cover rounded-lg"
          sizes="(max-width: 640px) 280px, (max-width: 768px) 300px, (max-width: 1024px) 320px, 340px"
        />
      </div>
      <div className="expert-content">
        <div className="expert-header mb-3">
          <h1 className="first-name text-white text-[20px] sm:text-[22px] lg:text-[24px] font-semibold garamond-font leading-tight">
            {name}
          </h1>
          <h2 className="title text-white text-[14px] sm:text-[15px] lg:text-[16px] font-semibold garamond-font pt-2 leading-tight">
            {title}
          </h2>
        </div>
        <div className="expert-description">
          <p className="tenor-font text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] leading-[150%] text-[#B58E5A]/72 line-clamp-4">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
