"use client"
import Image from "next/image"
export default function Cta() {
    return (
        <section className="w-full h-auto pb-[10%]">
            <div className="ml-[3%] py-[3%]">
                <h1 className="text-[48px] garamond-font">The Golden Bond | Event & Design</h1>
            </div>
            <div className="flex">
                <div className="left-content ml-[3%] mr-[7%]">
                    <Image src="/images/cta.png" alt="cta-image" width={742} height={407} />   
                </div>
                <div className="right-content">
                    <div className="right-content-container mx-auto max-w-[75%]">
                        <h2 className="text-[32px] font-extrabold garamond-font text-[#1B0E01] leading-[120%]">Reserve Your Exquisite<br />Jewelry Experience!</h2>
                        <div className="my-[7%]">
                            <p className="text-[16px] tenor-font">
                                Molestias ut tenetur eos placeat aliquam quaerat cumque. Quis autem id sed doloribus eos et enim et dolor.
                            </p>
                        </div>  
                        <div className="btn-container">
                            <button className="w-[211px] h-[61px] bg-[#B58E5A] text-white text-[19px] font-semibold tenor-font">Plan My Event</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    )
}