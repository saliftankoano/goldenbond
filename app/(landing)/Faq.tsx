"use client"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import Image from "next/image";
export default function Faq() {
    return (
        <section className="w-full h-[919px] relative overflow-hidden">
            <div className="header flex flex-col items-center justify-center pt-[15vh] relative">
                <div className="header">
                    <h2 className="text-center text-[#B58E5A] text-[16px] font-bold  tenor-font">FAQ</h2>
                </div>
                <div className="header-desc -mt-2">
                    <h1 className="text-[#1B0E01] text-[32px] sm:text-[40px] md:text-[48px] font-semibold garamond-font">Tailored events for you.</h1>
                </div>
                <Image 
                    src="/images/small-ellipse.svg" 
                    alt="small ellipse" 
                    width={160} 
                    height={160} 
                    className="absolute top-3/4 -translate-y-1/2 right-4 md:right-8 lg:right-16 w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] md:w-[160px] md:h-[160px] z-10" 
                />
            </div>
            <div className="faq-container max-w-[1180px] mx-auto px-4 sm:px-8 md:px-16 lg:px-[100px] xl:px-[190px] pb-[0vh] pt-[5vh] relative">
                <div className="max-w-[800px] mx-auto">
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>How does pricing work for Large Private Events and Corporate bookings?</AccordionTrigger>
                            <AccordionContent>
                            Events with 13+ guests require custom quotes because every large event is unique. Pricing factors include guest count, event duration (typically 3-6 hours), location, specific jewelry experiences requested, staffing needs, and any additional services like branding or catering coordination. Corporate events can be structured as flat-rate packages, revenue-share models, or direct-to-consumer sales depending on your needs and budget.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>What if some guests don&apos;t want welded jewelry? Are there other options?</AccordionTrigger>
                            <AccordionContent>
                            While our signature experience is custom welded jewelry, we understand not every guest may want permanent jewelry. We can provide alternative options like charm bracelets, adjustable pieces, or temporary jewelry options that don&apos;t require welding. We&apos;ll work with you during planning to ensure every guest has an enjoyable experience that fits their comfort level.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger> What happens if I need to cancel or reschedule my event?</AccordionTrigger>
                            <AccordionContent>
                            The $200 deposit required for all Sparkle Parties (In-Store and In-Home) is non-refundable but will be applied to your total event cost. If you need to reschedule, we&apos;ll work with you to find a new date based on availability. For Large Private Events and Corporate bookings, cancellation policies will be outlined in your custom contract based on the event scope and timeline.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger>Can I customize the jewelry experience for my guests?</AccordionTrigger>
                            <AccordionContent>
                            Absolutely! Our custom welded jewelry can be personalized for each guest, and we offer personal styling consultation during the event. For Corporate and Large Private Events, we can incorporate your branding, create custom gift packaging, and even develop themed jewelry experiences that align with your event's purpose or company culture.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5">
                            <AccordionTrigger> How long does the welding process take per person?</AccordionTrigger>
                            <AccordionContent>
                            Each guest typically spends 10-15 minutes at our Bracelet Bar for the complete experience, including chain selection, sizing, styling consultation, and welding. With our efficient process and experienced staff, we can accommodate up to 12 guests comfortably within the 2-3 hour event timeframe. For larger events, we bring additional staff to ensure everyone gets personalized attention without long wait times.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-6">
                            <AccordionTrigger>Do you travel outside your local area for events?</AccordionTrigger>
                            <AccordionContent>
                            Yes! Our In-Home Sparkle Parties and mobile Bracelet Bar can travel to your preferred location. Travel fees may apply for locations outside our standard service area. For Large Private Events and Corporate bookings, we&apos;re happy to discuss destination events and will provide a custom quote that includes any travel and accommodation costs.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-7">
                            <AccordionTrigger> How far in advance should I book my event?</AccordionTrigger>
                            <AccordionContent>
                            We recommend booking your Sparkle Party at least 2-4 weeks in advance to ensure availability, especially for weekend dates and during peak seasons (holidays, wedding season). For Large Private Events (13+ guests) and Corporate Events, we suggest booking 4-6 weeks ahead due to the custom planning required. Pop-up events can sometimes be arranged with shorter notice depending on our schedule.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
                <Image 
                    src="/images/large-ellipse.svg" 
                    alt="large ellipse" 
                    width={257} 
                    height={257} 
                    className="absolute -bottom-[100px] -left-[50px] sm:-left-[80px] md:-left-[120px] lg:-left-[160px] w-[120px] h-[120px] sm:w-[180px] sm:h-[180px] md:w-[220px] md:h-[220px] lg:w-[257px] lg:h-[257px] z-0" 
                />
            </div>
        </section>
    )
}