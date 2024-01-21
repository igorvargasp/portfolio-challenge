import HeroSection from "../components/Sections/HeroSection/HeroSection";
import StackSection from "../components/Sections/StackSection/StackSection";
import ContactSection from "../components/Sections/ContactSection/ContactSection";
import CarrerSection from "../components/Sections/CarrerSection/CarrerSection";

export default function Home() {
  return (
    <main className="w-full flex flex-col space-y-30">
      <HeroSection/>
      <StackSection/>
      <CarrerSection/>
      <ContactSection/>
    </main>
  );
}
