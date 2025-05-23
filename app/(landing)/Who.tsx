"use client"
import Image from "next/image"
export default function Who() {
    return (
        <section className="who-section w-full h-[1024px] flex items-center">
            <div className="who-content w-[1318px] h-[737px] mx-auto flex">
                <div className="who-content-left w-[552px] h-[579px] flex">
                    <div className="flex-col gap-4 mt-[10%] h-full">
                        <h2 className="text-black text-[17px] tenor-font">WHO WE ARE</h2>
                        <h1 className="text-[#1B0E01] leading-[120%] text-[48px] font-semibold garamond-font">Meaningful Jewelry,<br />Sparked to Bond</h1>
                        <p className="text-[#1B0E01] text-[16px] font-normal tenor-font mt-[10%]">
                        Golden Bond is about celebrating connections that spark meaning.We&apos;re more than jewelry - we&apos;re an extension of your bond, your story, your forever evolving story.<br />
                        Whether it&apos;s a statement, a symbol, a milestone, or a moment worth holding onto - our Bracelet Bar sparks the story.<br /><br />
                        Golden Bond Jewelry creates custom-fit, welded permanent jewelry in 14K gold and sterling silver, as well as clasped and ready to wear jewelry.
                        </p>
                        <button className="w-[211px] h-[61px] mt-[10%] bg-[#B58E5A] text-white text-[19px] font-semibold tenor-font">Learn more</button>
                    </div>
                    <div className="w-[84px] h-full"></div>
                </div>
               
                <div className="who-content-right w-[763px] h-[737px]">
                    <Image src="/images/who.jpg" alt="golden bon employee smiling" width={763} height={737} className="w-[763px] h-[737px] object-cover" />
                </div>
            </div>
        </section>
    )
}