import HeroSection from "../components/Sections/HeroSection/HeroSection";
import StackSection from "../components/Sections/StackSection/StackSection";
import ProjectSection from "../components/Sections/ProjectSection/ProjectSection";
import ContactSection from "../components/Sections/ContactSection/ContactSection";
export default function Home() {
  return (
    <main className="w-full flex flex-col space-y-30">
      <HeroSection/>
      <StackSection/>
      <ProjectSection/>
      <ContactSection/>
    </main>
  );
}
