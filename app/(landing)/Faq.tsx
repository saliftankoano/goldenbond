"use client"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
   
export default function Faq() {
    return (
        <section className="bg-[#F4F1EB] w-full">
            <div className="header flex flex-col items-center justify-center pt-[10vh]">
                <div className="header">
                    <h2 className="text-center text-[#B58E5A] text-[16px] font-bold  tenor-font">FAQ</h2>
                </div>
                <div className="header-desc mt-4">
                    <h1 className="text-[#1B0E01] text-[48px] font-semibold garamond-font">Tailored events for you.</h1>
                </div>
            </div>
            <div className="faq-container max-w-[1180px] mx-auto px-[190px] pb-[10vh] pt-[5vh]">
                <div className="max-w-[800px]">
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger> How far in advance should I book my event?</AccordionTrigger>
                            <AccordionContent>
                            We recommend booking your Sparkle Party at least 2-4 weeks in advance to ensure availability, especially for weekend dates and during peak seasons (holidays, wedding season). For Large Private Events (13+ guests) and Corporate Events, we suggest booking 4-6 weeks ahead due to the custom planning required. Pop-up events can sometimes be arranged with shorter notice depending on our schedule.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Can I customize the jewelry experience for my guests?</AccordionTrigger>
                            <AccordionContent>
                            Absolutely! Our custom welded jewelry can be personalized for each guest, and we offer personal styling consultation during the event. For Corporate and Large Private Events, we can incorporate your branding, create custom gift packaging, and even develop themed jewelry experiences that align with your event's purpose or company culture.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>Do you travel outside your local area for events?</AccordionTrigger>
                            <AccordionContent>
                            Yes! Our In-Home Sparkle Parties and mobile Bracelet Bar can travel to your preferred location. Travel fees may apply for locations outside our standard service area. For Large Private Events and Corporate bookings, we're happy to discuss destination events and will provide a custom quote that includes any travel and accommodation costs.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger>How does pricing work for Large Private Events and Corporate bookings?</AccordionTrigger>
                            <AccordionContent>
                            Events with 13+ guests require custom quotes because every large event is unique. Pricing factors include guest count, event duration (typically 3-6 hours), location, specific jewelry experiences requested, staffing needs, and any additional services like branding or catering coordination. Corporate events can be structured as flat-rate packages, revenue-share models, or direct-to-consumer sales depending on your needs and budget.
                            </AccordionContent>
                        </AccordionItem>
                        
                    </Accordion>
                </div>
            </div>
        </section>
    )
}