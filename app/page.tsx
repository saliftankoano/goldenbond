import Hero from "./(landing)/Hero";
import Footer from "./(landing)/Footer";
import Faq from "./(landing)/Faq";
import Who from "./(landing)/Who";
import Cta from "./(landing)/Cta";
import Testimonials from "./(landing)/Testimonials";
import Experience from "./(landing)/Experience";
import Services from "./(landing)/Services";

export default function Home() {
  return (
    <div className="w-full h-full bg-[#F4F1EB]">
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
