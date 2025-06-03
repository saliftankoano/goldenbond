"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

export default function Faq() {
  return (
    <section className="w-full bg-[#F4F1EB] min-h-screen relative overflow-hidden py-12 md:py-16 lg:py-20">
      {/* Header Section */}
      <div className="header flex flex-col items-center justify-center pt-8 md:pt-12 lg:pt-[15vh] relative px-4">
        <div className="header mb-2">
          <h2 className="text-center text-[#B58E5A] text-sm md:text-base lg:text-[16px] font-bold tenor-font uppercase tracking-wider">
            FAQ
          </h2>
        </div>
        <div className="header-desc">
          <h1 className="text-[#1B0E01] text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-semibold garamond-font text-center">
            Tailored events for you.
          </h1>
        </div>

        {/* Decorative ellipse - top right */}
        <Image
          src="/images/small-ellipse.svg"
          alt="small ellipse"
          width={160}
          height={160}
          className="absolute top-1/2 md:top-3/4 -translate-y-1/2 right-4 md:right-8 lg:right-16 w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[120px] md:h-[120px] lg:w-[160px] lg:h-[160px] z-10"
        />
      </div>

      {/* FAQ Content */}
      <div className="faq-container max-w-6xl lg:max-w-[1180px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[190px] pb-12 md:pb-16 lg:pb-20 pt-8 md:pt-12 lg:pt-[5vh] relative">
        <div className="max-w-4xl lg:max-w-[800px] mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-2">
            <AccordionItem value="item-1" className="border-b border-gray-200">
              <AccordionTrigger className="text-left text-sm sm:text-base lg:text-lg font-medium hover:text-[#B58E5A] transition-colors py-4 md:py-6">
                How does pricing work for Large Private Events and Corporate
                bookings?
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-gray-700 leading-relaxed pb-4 md:pb-6">
                Events with 13+ guests require custom quotes because every large
                event is unique. Pricing factors include guest count, event
                duration (typically 3-6 hours), location, specific jewelry
                experiences requested, staffing needs, and any additional
                services like branding or catering coordination. Corporate
                events can be structured as flat-rate packages, revenue-share
                models, or direct-to-consumer sales depending on your needs and
                budget.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-b border-gray-200">
              <AccordionTrigger className="text-left text-sm sm:text-base lg:text-lg font-medium hover:text-[#B58E5A] transition-colors py-4 md:py-6">
                What if some guests don&apos;t want welded jewelry? Are there
                other options?
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-gray-700 leading-relaxed pb-4 md:pb-6">
                While our signature experience is custom welded jewelry, we
                understand not every guest may want permanent jewelry. We can
                provide alternative options like charm bracelets, adjustable
                pieces, or temporary jewelry options that don&apos;t require
                welding. We&apos;ll work with you during planning to ensure
                every guest has an enjoyable experience that fits their comfort
                level.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-b border-gray-200">
              <AccordionTrigger className="text-left text-sm sm:text-base lg:text-lg font-medium hover:text-[#B58E5A] transition-colors py-4 md:py-6">
                What happens if I need to cancel or reschedule my event?
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-gray-700 leading-relaxed pb-4 md:pb-6">
                The $200 deposit required for all Sparkle Parties (In-Store and
                In-Home) is non-refundable but will be applied to your total
                event cost. If you need to reschedule, we&apos;ll work with you
                to find a new date based on availability. For Large Private
                Events and Corporate bookings, cancellation policies will be
                outlined in your custom contract based on the event scope and
                timeline.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-b border-gray-200">
              <AccordionTrigger className="text-left text-sm sm:text-base lg:text-lg font-medium hover:text-[#B58E5A] transition-colors py-4 md:py-6">
                Can I customize the jewelry experience for my guests?
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-gray-700 leading-relaxed pb-4 md:pb-6">
                Absolutely! Our custom welded jewelry can be personalized for
                each guest, and we offer personal styling consultation during
                the event. For Corporate and Large Private Events, we can
                incorporate your branding, create custom gift packaging, and
                even develop themed jewelry experiences that align with your
                event&apos;s purpose or company culture.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border-b border-gray-200">
              <AccordionTrigger className="text-left text-sm sm:text-base lg:text-lg font-medium hover:text-[#B58E5A] transition-colors py-4 md:py-6">
                How long does the welding process take per person?
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-gray-700 leading-relaxed pb-4 md:pb-6">
                Each guest typically spends 10-15 minutes at our Bracelet Bar
                for the complete experience, including chain selection, sizing,
                styling consultation, and welding. With our efficient process
                and experienced staff, we can accommodate up to 12 guests
                comfortably within the 2-3 hour event timeframe. For larger
                events, we bring additional staff to ensure everyone gets
                personalized attention without long wait times.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border-b border-gray-200">
              <AccordionTrigger className="text-left text-sm sm:text-base lg:text-lg font-medium hover:text-[#B58E5A] transition-colors py-4 md:py-6">
                Do you travel outside your local area for events?
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-gray-700 leading-relaxed pb-4 md:pb-6">
                Yes! Our In-Home Sparkle Parties and mobile Bracelet Bar can
                travel to your preferred location. Travel fees may apply for
                locations outside our standard service area. For Large Private
                Events and Corporate bookings, we&apos;re happy to discuss
                destination events and will provide a custom quote that includes
                any travel and accommodation costs.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border-b border-gray-200">
              <AccordionTrigger className="text-left text-sm sm:text-base lg:text-lg font-medium hover:text-[#B58E5A] transition-colors py-4 md:py-6">
                How far in advance should I book my event?
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-gray-700 leading-relaxed pb-4 md:pb-6">
                We recommend booking your Sparkle Party at least 2-4 weeks in
                advance to ensure availability, especially for weekend dates and
                during peak seasons (holidays, wedding season). For Large
                Private Events (13+ guests) and Corporate Events, we suggest
                booking 4-6 weeks ahead due to the custom planning required.
                Pop-up events can sometimes be arranged with shorter notice
                depending on our schedule.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Decorative ellipse - bottom left */}
        <Image
          src="/images/large-ellipse.svg"
          alt="large ellipse"
          width={257}
          height={257}
          className="absolute -bottom-[60px] sm:-bottom-[80px] md:-bottom-[100px] -left-[30px] sm:-left-[50px] md:-left-[80px] lg:-left-[120px] w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] md:w-[180px] md:h-[180px] lg:w-[220px] lg:h-[220px] xl:w-[257px] xl:h-[257px] z-0"
        />
      </div>
    </section>
  );
}
