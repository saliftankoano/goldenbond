"use client"

import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Services() {
    return (
        <section className="w-screen h-[909px] flex flex-col relative">
            <div className="heading-container flex justify-center items-center pt-[60px]">
                <div className="inner-heading w-[674px] flex flex-col justify-center items-center">
                    <h2 className="w-[235px] h-[19px] text-[#B58E5A] text-[16px] leading-[120%] uppercase">CHOOSE YOUR EXPERIENCE</h2>
                    <h1 className="w-fullh-[58px] text-[#1B0E01] garamond-font semibold text-[48px] leading-[120%] mt-[8px]">Tailored Events for Every Occasion</h1>
                </div>
            </div>
            
            <div className="cards flex justify-center items-center mt-[60px] relative z-10">
                 <div className="private-events-card w-[400px] h-[453px] relative shadow-lg">
                     <Image src="/images/services/private-events.jpg" alt="Private Events" fill className="object-cover" />
                     <div className="absolute inset-0 bg-[#1B0E01]/52"></div>
                     <div className="card-content absolute inset-0 p-6 flex flex-col justify-end z-10">
                        <div className="card-content-inner mb-4">
                            <h3 className="text-[#B58E5A] tenor-font font-semibold text-[14px] leading-[20px] mb-2 tracking-[0.25px] uppercase">Private Events</h3>
                            <h2 className="text-white garamond-font font-semibold text-[24px] leading-[120%] mb-2">Intimate Celebrations</h2>
                        </div>
                        <div className="card-description mb-6">
                            <p className="text-white/90 text-[16px] leading-[150%] tenor-font">Perfect for bachelorette parties, birthdays, and special gatherings</p>
                        </div>
                        <div className="card-buttons flex gap-3">
                            <button className="bg-[#B58E5A] hover:bg-[#B58E5A]/80 text-white font-semibold px-6 py-2 text-[14px] leading-[19px] uppercase tenor-font">BOOK NOW</button>
                            <button className="text-white hover:text-[#B58E5A] flex items-center text-[14px] leading-[19px] uppercase tenor-font">
                                EXPLORE<ArrowRight className="w-4 h-4 ml-[8px]" />
                            </button>
                        </div>
                     </div>
                 </div>
                 <div className="business-events-card w-[400px] h-[453px] relative shadow-lg mx-[60px]">
                     <Image src="/images/services/business-events.jpg" alt="Business Events" fill className="object-cover" />
                     <div className="absolute inset-0 bg-[#1B0E01]/52"></div>
                     <div className="card-content absolute inset-0 p-6 flex flex-col justify-end z-10">
                        <div className="card-content-inner mb-4">
                            <h3 className="text-[#B58E5A] tenor-font font-semibold text-[14px] leading-[20px] mb-2 tracking-[0.25px] uppercase">Business Events</h3>
                            <h2 className="text-white garamond-font font-semibold text-[24px] leading-[120%] mb-2">Professional Gatherings</h2>
                        </div>
                        <div className="card-description mb-6">
                            <p className="text-white/90 text-[16px] leading-[150%] tenor-font">Ideal for corporate meetings, team building, and networking events.</p>
                        </div>
                        <div className="card-buttons flex gap-3">
                            <button className="bg-[#B58E5A] hover:bg-[#B58E5A]/80 text-white font-semibold px-6 py-2 text-[14px] leading-[19px] uppercase tenor-font">BOOK NOW</button>
                            <button className="text-white hover:text-[#B58E5A] flex items-center text-[14px] leading-[19px] uppercase tenor-font">
                                EXPLORE<ArrowRight className="w-4 h-4 ml-[8px]" />
                            </button>
                        </div>
                     </div>
                 </div>
                 <div className="popup-events-card w-[400px] h-[453px] relative shadow-lg">
                     <Image src="/images/services/popup-events.jpg" alt="Private Events" fill className="object-cover" />
                     <div className="absolute inset-0 bg-[#1B0E01]/52"></div>
                     <div className="card-content absolute inset-0 p-6 flex flex-col justify-end z-10">
                        <div className="card-content-inner mb-4">
                            <h3 className="text-[#B58E5A] tenor-font font-semibold text-[14px] leading-[20px] mb-2 tracking-[0.25px] uppercase">Popup Events</h3>
                            <h2 className="text-white garamond-font font-semibold text-[24px] leading-[120%] mb-2">Pop-Up Experiences</h2>
                        </div>
                        <div className="card-description mb-6">
                            <p className="text-white/90 text-[16px] leading-[150%] tenor-font">Ideal for corporate meetings, team building, and networking events.</p>
                        </div>
                        <div className="card-buttons flex gap-3">
                            <button className="bg-[#B58E5A] hover:bg-[#B58E5A]/80 text-white font-semibold px-6 py-2 text-[14px] leading-[19px] uppercase tenor-font">BOOK NOW</button>
                            <button className="text-white hover:text-[#B58E5A] flex items-center text-[14px] leading-[19px] uppercase tenor-font">
                                EXPLORE<ArrowRight className="w-4 h-4 ml-[8px]" />
                            </button>
                        </div>
                     </div>
                 </div>
            </div>
            
            {/* Decorative ellipses positioned behind cards */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                {/* Large ellipse on bottom left of first card */}
                <div className="absolute bottom-[100px] left-[20px] z-0">
                    <Image src="/images/large-ellipse.svg" alt="decorative ellipse" width={257} height={257} />
                </div>
                {/* Small ellipse on upper right of last card */}
                <div className="absolute top-[55px] right-[100px] z-0">
                    <Image src="/images/small-ellipse.svg" alt="decorative ellipse" width={160} height={160} />
                </div>
            </div>
        </section>
    )
}