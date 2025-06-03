import Hero from "@/app/(landing)/Hero";
import Footer from "@/app/components/Footer";
import Faq from "@/app/(landing)/Faq";
import Who from "@/app/(landing)/Who";
import Cta from "@/app/components/Cta";
import Testimonials from "@/app/components/Testimonials";
import Experience from "@/app/(landing)/Experience";
import Services from "@/app/(landing)/Services";
import Header from "@/app/(landing)/Header";

export default function Home() {
  return (
    <div className="w-full h-full bg-[#F4F1EB]">
      <Header />
      <Hero />
      <Services />
      <Experience />
      <Testimonials />
      <Cta />
      <Who />
      <Faq />
      <Footer />
    </div>
  );
}
