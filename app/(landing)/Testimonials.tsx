"use client"
import Image from "next/image"
import { useState } from "react"

interface Testimonial {
    id: number
    name: string
    title: string
    review: string
    image: string
}

const testimonialData: Testimonial[] = [
    {
        id: 1,
        name: "Sarah Johnson",
        title: "Wedding Celebration",
        review: "The most magical evening of our lives. Every detail was perfect, from the golden decorations to the exceptional service. Truly unforgettable.",
        image: "/images/testimonials/testimonial1.jpg"
    },
    {
        id: 2,
        name: "Michael Chen",
        title: "Corporate Gala",
        review: "Professional excellence at its finest. The team delivered an extraordinary event that exceeded all our expectations and impressed every guest.",
        image: "/images/testimonials/testimonial2.jpg"
    },
    {
        id: 3,
        name: "Emily Rodriguez",
        title: "Anniversary Party",
        review: "Absolutely stunning celebration that captured our vision perfectly. The attention to detail and elegant atmosphere made it truly special.",
        image: "/images/testimonials/testimonial3.jpg"
    },
    {
        id: 4,
        name: "David Thompson",
        title: "Product Launch",
        review: "Exceptional event planning and execution. The venue was transformed into something magical that perfectly represented our brand.",
        image: "/images/testimonials/testimonial4.jpg"
    },
    {
        id: 5,
        name: "Lisa Martinez",
        title: "Birthday Celebration",
        review: "Every moment was pure joy. The team created an atmosphere of elegance and warmth that made the celebration absolutely perfect.",
        image: "/images/testimonials/testimonial5.jpg"
    },
    {
        id: 6,
        name: "James Wilson",
        title: "Charity Fundraiser",
        review: "Outstanding professionalism and creativity. They transformed our vision into reality and created an event that truly made a difference.",
        image: "/images/testimonials/testimonial6.jpg"
    }
]

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(1) // Start with second testimonial as main
    const [isTransitioning, setIsTransitioning] = useState(false)

    // Get current arrangement of testimonials
    const getCurrentArrangement = () => {
        const total = testimonialData.length
        const arrangement = []
        
        // Left small image (previous testimonial)
        const leftIndex = (currentIndex - 1 + total) % total
        arrangement.push({ position: 'left-small', testimonial: testimonialData[leftIndex] })
        
        // Main large image (current testimonial)
        arrangement.push({ position: 'main', testimonial: testimonialData[currentIndex] })
        
        // Right small images (next 4 testimonials)
        for (let i = 1; i <= 4; i++) {
            const rightIndex = (currentIndex + i) % total
            arrangement.push({ position: `right-${i}`, testimonial: testimonialData[rightIndex] })
        }
        
        return arrangement
    }

    const arrangement = getCurrentArrangement()
    const mainTestimonial = arrangement.find(item => item.position === 'main')?.testimonial

    const handleImageClick = (clickedPosition: string) => {
        if (isTransitioning) return
        
        setIsTransitioning(true)
        
        if (clickedPosition === 'left-small') {
            // Move all images to the right (go to previous testimonial)
            setCurrentIndex((prev) => (prev - 1 + testimonialData.length) % testimonialData.length)
        } else if (clickedPosition.startsWith('right-')) {
            // Move images to the left based on which right image was clicked
            const rightPosition = parseInt(clickedPosition.split('-')[1])
            setCurrentIndex((prev) => (prev + rightPosition) % testimonialData.length)
        }
        
        // Reset transition state after animation
        setTimeout(() => setIsTransitioning(false), 500)
    }

    return (
        <section className="w-full bg-[#1B0E01] flex text-white py-[5%] px-[5%]">
            <div className="w-[40%] h-full flex items-end gap-[30px]">
                <div 
                    className="w-[150px] h-[220px] relative cursor-pointer transition-transform duration-500 hover:scale-105"
                    onClick={() => handleImageClick('left-small')}
                >
                    <Image 
                        src={arrangement.find(item => item.position === 'left-small')?.testimonial.image || ''} 
                        alt="Previous testimonial" 
                        fill 
                        className={`object-cover transition-all duration-500 ${isTransitioning ? 'opacity-80' : 'opacity-100'}`} 
                    />
                </div>
                <div className="w-[380px] h-[540px] relative">
                    <Image 
                        src={mainTestimonial?.image || ''} 
                        alt={mainTestimonial?.name || ''} 
                        fill 
                        className={`object-cover transition-all duration-500 ${isTransitioning ? 'opacity-80' : 'opacity-100'}`} 
                    />
                </div>
            </div>
            <div className="w-[60%] h-[540px]">
                <div className="w-full h-[55%] pl-[40px]">
                    <div className="heading-container">
                        <h2 className="tenor-font text-[20px] h-[18px] font-semibold text-[#B58E5A] leading-[20%] mb-[12px] uppercase flex items-center">Testimonials</h2>
                        <h1 className={`font-extrabold text-[32px] font-garamond mb-[2.5%] uppercase transition-all duration-500 ${isTransitioning ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}>
                            {mainTestimonial?.title || ''}
                        </h1>
                    </div>
                    <div className="max-w-[510px] mb-[5%]">
                        <p className={`text-[16px] tenor-font transition-all duration-500 ${isTransitioning ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}>
                            "{mainTestimonial?.review || ''}"
                        </p>
                        <p className={`text-[14px] tenor-font text-[#B58E5A] mt-2 transition-all duration-500 ${isTransitioning ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}>
                            - {mainTestimonial?.name || ''}
                        </p>
                    </div>
                    <button className="max-w-[211px] h-[55px] py-[2.5%] px-[10%] bg-transparent border border-[#B58E5A] text-[16px] text-[#B58E5A] flex items-center justify-center uppercase hover:cursor-pointer hover:bg-[#B58E5A] hover:text-white transition-all duration-300">
                        <p>Explore</p>
                    </button>
                </div>
                <div className="w-full h-[45%] flex gap-[30px] pl-[40px] relative items-end">
                    {arrangement.filter(item => item.position.startsWith('right-')).map((item, index) => (
                        <div 
                            key={item.testimonial.id}
                            className="w-[150px] h-[220px] relative cursor-pointer transition-transform duration-500 hover:scale-105"
                            onClick={() => handleImageClick(item.position)}
                        >
                            <Image 
                                src={item.testimonial.image} 
                                alt={item.testimonial.name} 
                                fill 
                                className={`object-cover transition-all duration-500 ${isTransitioning ? 'opacity-80' : 'opacity-100'} ${index === 3 ? 'z-20' : 'z-10'}`} 
                            />
                        </div>
                    ))}
                    <Image src="/images/large-ellipse.svg" alt="large ellipse" width={257} height={257} className="absolute top-[-50px] right-[2px] transform -translate-y-1/2 z-0"/>
                </div>
            </div>
        </section>
    )
}