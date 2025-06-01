"use client"
import Image from "next/image"

export default function Experience() {
    return (
        <section className="w-screen h-[909px] bg-[#F4F1EB] flex text-black pl-[66px] mr-[85px]">
            <div className="internal-container w-[1289px] h-[755px] flex mt-[60px]">
                <div className="w-[40%] h-full">
                    <div className="text-container mb-[42px]">
                        <h2 className="tenor-font text-[17px] leading-[20px] mb-[12px] uppercase">What we can do for you</h2>
                        <h1 className="max-w-[489px] font-semibold text-[48px] garamond-font leading-[110%] mb-[26px]">The Golden Bond Experience</h1>
                        <p className="text-[16px] tenor-font">Golden Bond is about celebrating connections that spark meaning.
                            We&apos;re more than jewelry - we&apos;re an extension of your bond, your story, your forever evolving story.
                            <br/><br/>Whether it&apos;s a statement, a symbol, a milestone, or a moment worth holding onto - our Bracelet Bar sparks the story.<br/><br/> Golden Bond Jewelry creates custom-fit, welded permanent jewelry in 14K gold and sterling silver, as well as clasped and ready to wear jewelry.
                        </p>
                    </div>
                    <button className="max-w-[211px] h-[55px] py-[2.5%] px-[10%] bg-[#B58E5A] text-[16px] text-white flex items-center justify-center uppercase font-semibold hover:cursor-pointer hover:bg-[#B58E5A]/80 hover:text-white transition-all duration-300"><p>Book Now</p></button>
                </div>
                <div className="w-[259px] h-full"></div>
                <div className="w-[50%] h-full flex">
                    <div className="w-[50%] h-full relative flex flex-col">
                        <div className="first-event flex flex-col items-center justify-end pt-[65px]">
                            <div className="flex flex-col justify-end">
                                <div className="w-[270px] h-[246px] relative">
                                    <Image 
                                        src="/images/experience/experience1.png" 
                                        alt="Experience" 
                                        fill 
                                        className="object-cover" 
                                        sizes="270px"
                                    />
                                </div>
                                <h2 className="title garamond-font text-[24px] leading-[25px] mt-[15px] w-[214px] h-[52px] ml-auto text-right">Gems & Glamour: A Jewelry Showcase</h2>
                            </div>
                        </div>
                        <div className="second-event h-[50%] flex flex-col items-center justify-end">
                        <div className="flex flex-col justify-end">
                            <div className="w-[270px] h-[246px] relative">
                                <Image 
                                    src="/images/experience/experience3.png" 
                                    alt="Experience" 
                                    fill 
                                    className="object-cover" 
                                    sizes="270px"
                                />
                            </div>
                            <h2 className="title garamond-font text-[24px] leading-[25px] mt-[15px] w-[214px] h-[52px] ml-auto text-right">Magic & Mystery: A Jewelry Showcase</h2>
                            </div>
                        </div>
                    </div>
                    <div className="w-[50%] h-full relative">
                        <div className="flex flex-col items-center justify-end z-10 pl-[15px]">
                            <div className="flex flex-col justify-end">
                                <div className="w-[272px] h-[401px] relative">
                                    <Image 
                                        src="/images/experience/experience2.png" 
                                        alt="Experience" 
                                        fill 
                                        className="object-cover" 
                                        sizes="272px"
                                    />
                                </div>
                                <h2 className="title garamond-font text-[24px] leading-[25px] mt-[15px] w-[214px] h-[52px] ml-auto text-right">Sparkle & Shine Jewelry Showcase</h2>
                            </div>
                            </div>
                            <div className="absolute bottom-0 right-0 -translate-y-15  z-5">
                                <Image src="/images/large-ellipse.svg" alt="large ellipse"  width={257} height={257} />
                             </div>
                        </div>
                </div>
            </div>
        </section>
    )
}