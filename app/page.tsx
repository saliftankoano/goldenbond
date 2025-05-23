import Footer from "./(landing)/Footer";
import Faq from "./(landing)/Faq";
import Who from "./(landing)/Who";
export default function Home() {
  return (
    <div className="w-full h-full bg-[#F4F1EB]">
      <Who />
      <Faq />
      <Footer />
    </div>
  );
}
