"use client"

import Image from "next/image"

export default function AboutHero() {
    return (
        <section className="about-hero flex w-full h-[992px] bg-[#F4F1EB] pt-[45px]">
            <div className="left-side ml-[60px] w-[60%]">
                <div className="w-[674px] h-[375px]">
                    <h1 className="text-[70px] leading-[120%] garamond-font font-semibold">Tailored Events for<br />Every Occasion</h1>
                    <div className="mt-[22px]">
                        <p className="tenor-font text-[17px] leading-[150%]">Golden Bond Jewelry creates custom-fit, welded permanent jewelry in 14K gold and sterling silver, as well as clasped and ready to wear jewelry.</p>
                    </div>
                    <button className="w-full uppercase sm:w-auto max-w-[211px] max-h-[61px] h-[55px] mt-[72px] px-[10%] bg-[#B58E5A] text-sm sm:text-base lg:text-[16px] text-white flex items-center justify-center font-semibold hover:cursor-pointer hover:bg-[#B58E5A]/80 hover:text-white transition-all duration-300">
                        <p className="whitespace-nowrap">Plan My Event</p>
                    </button>
                </div>
            </div>
            <div className="right-side relative w-[40%] flex justify-end">
                {/* Large Ellipse - Upper Left */}
                <Image
                    src="/images/large-ellipse.svg"
                    alt="decorative ellipse"
                    width={257}
                    height={257}
                    className="absolute top-[380px] left-[-100px] w-[200px] h-[200px] md:w-[230px] md:h-[230px] lg:w-[257px] lg:h-[257px] z-0"
                />
                
                {/* Large Ellipse - Lower Right */}
                <Image
                    src="/images/large-ellipse.svg"
                    alt="decorative ellipse"
                    width={257}
                    height={257}
                    className="absolute bottom-[130px] right-[-100px] w-[180px] h-[180px] md:w-[220px] md:h-[220px] lg:w-[257px] lg:h-[257px] z-0"
                />
                
                <div className="w-[682px] h-[737px] relative z-10">
                    <Image src="/images/sign.jpg" alt="Golden Bond sign" fill className="object-cover" />
                </div>
            </div>
        </section>
    )
}