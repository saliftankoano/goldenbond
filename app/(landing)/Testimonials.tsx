"use client"
import Image from "next/image"


export default function Testimonials() {
    return (
        <section className="w-full  bg-[#1B0E01] flex text-white py-[5%] px-[5%]">
            <div className="w-[40%] h-full flex items-end gap-[30px]">
                <div className="w-[150px] h-[220px] relative">
                    <Image src="/images/testimonials/testimonial1.jpg" alt="Testimonials" fill className="object-cover" />
                </div>
                <div className="w-[380px] h-[540px] relative">
                    <Image src="/images/testimonials/testimonial2.jpg" alt="Testimonials" fill className="object-cover" />
                </div>
            </div>
            <div className="w-[60%] h-[540px]">
                <div className="w-full h-[55%] pl-[40px]">
                    <div className="heading-container">
                        <h2 className="tenor-font text-[20px] h-[18px] font-semibold text-[#B58E5A] leading-[20%] mb-[12px] uppercase flex items-center">Testimonials</h2>
                        <h1 className="font-extrabold text-[32px] font-garamond mb-[2.5%] uppercase">Name of Event</h1>
                    </div>
                    <div className="max-w-[510px] max-h-[48px] mb-[5%]">
                        <p className="text-[16px] tenor-font">Molestias ut tenetur eos placeat aliquam quaerat cumque. Quis autem id sed doloribus eos et enim et dolor.</p>
                    </div>
                    <button className="max-w-[211px] h-[55px] py-[2.5%] px-[10%] bg-transparent border border-[#B58E5A] text-[16px] text-[#B58E5A] flex items-center justify-center uppercase hover:cursor-pointer hover:bg-[#B58E5A] hover:text-white transition-all duration-300"><p>Explore</p></button>
                </div>
                <div className="w-full h-[45%] flex gap-[30px] pl-[40px] relative items-end">

                    <div className="w-[150px] h-[220px] relative">
                        <Image src="/images/testimonials/testimonial3.jpg" alt="Testimonials" fill className="object-cover" />
                    </div>
                    <div className="w-[150px] h-[220px] relative">
                        <Image src="/images/testimonials/testimonial4.jpg" alt="Testimonials" fill className="object-cover" />
                    </div>
                    <div className="w-[150px] h-[220px] relative">
                        <Image src="/images/testimonials/testimonial5.jpg" alt="Testimonials" fill className="object-cover" />
                    </div>
                    <div className="w-[150px] h-[220px] relative z-10">
                        <Image src="/images/testimonials/testimonial6.jpg" alt="Testimonials" fill className="object-cover relative z-20" />
                    </div>
                    <Image src="/images/large-ellipse.svg" alt="large ellipse" width={257} height={257} className="absolute top-[-50px] right-[2px] transform -translate-y-1/2 z-0"/>
                </div>
            </div>
        </section>
    )
}