"use client"
import Image from "next/image"
export default function Who() {
    return (
        <section className="who-section w-full h-auto lg:h-[1024px] flex items-center py-12 lg:py-0">
            <div className="who-content w-full lg:w-[1318px] h-auto lg:h-[737px] mx-auto flex flex-col lg:flex-row items-center px-4 lg:px-0">
                <div className="who-content-left w-full lg:w-[552px] h-auto lg:h-[579px] flex">
                    <div className="flex-col gap-4 mt-[10%] lg:mt-[10%] h-full w-full lg:w-auto">
                        <h2 className="text-black text-[17px] tenor-font">WHO WE ARE</h2>
                        <h1 className="text-[#1B0E01] leading-[120%] text-[36px] sm:text-[48px] font-semibold garamond-font">Meaningful Jewelry,<br />Sparked to Bond</h1>
                        <p className="text-[#1B0E01] text-[16px] font-normal tenor-font mt-[10%]">
                        Golden Bond is about celebrating connections that spark meaning.We&apos;re more than jewelry - we&apos;re an extension of your bond, your story, your forever evolving story.<br />
                        Whether it&apos;s a statement, a symbol, a milestone, or a moment worth holding onto - our Bracelet Bar sparks the story.<br /><br />
                        Golden Bond Jewelry creates custom-fit, welded permanent jewelry in 14K gold and sterling silver, as well as clasped and ready to wear jewelry.
                        </p>
                        <button className="w-full sm:w-[211px] h-[61px] mt-[10%] bg-[#B58E5A] text-white text-[19px] font-semibold tenor-font">Learn more</button>
                    </div>
                    <div className="w-[84px] h-full hidden lg:block"></div>
                </div>

                <div className="who-content-right w-full lg:w-[763px] h-auto lg:h-[737px] mt-8 lg:mt-0 relative">
                    <Image src="/images/who.jpg" alt="golden bon employee smiling" width={763} height={737} className="w-full max-w-[763px] mx-auto h-auto object-cover rounded-lg lg:rounded-none lg:w-[763px] lg:h-[737px]" />
                    {/* Small Ellipse: Upper Left */}
                    <Image
                        src="/images/small-ellipse.svg"
                        alt="small ellipse"
                        width={160}
                        height={160}
                        className="absolute top-[-20px] left-[-20px] sm:top-[-40px] sm:left-[-60px] md:top-[-60px] md:left-[-100px] lg:top-[-80px] lg:left-[-140px] w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] md:w-[160px] md:h-[160px] lg:w-[180px] lg:h-[180px] z-10"
                    />
                    {/* Large Ellipse: Lower Right */}
                    <Image
                        src="/images/large-ellipse.svg"
                        alt="large ellipse"
                        width={257}
                        height={257}
                        className="absolute bottom-[-25px] right-[-25px] sm:bottom-[-40px] sm:right-[-35px] md:bottom-[-55px] md:right-[-40px] lg:bottom-[-70px] lg:right-[-50px] w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] md:w-[160px] md:h-[160px] lg:w-[220px] lg:h-[220px] z-10"
                    />
                </div>
            </div>
        </section>
    )
}