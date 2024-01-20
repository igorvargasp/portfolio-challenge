import Image from "next/image";
import HeroSection from "./components/Sections/HeroSection/HeroSection";
import Header from "./components/Header/Header";
import StackSection from "./components/Sections/StackSection/StackSection";
import ProjectSection from "./components/Sections/ProjectSection/ProjectSection";
import ContactSection from "./components/Sections/ContactSection/ContactSection";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <main className="w-full flex flex-col space-y-30">
      <Header/>
      <HeroSection/>
      <StackSection/>
      <ProjectSection/>
      <ContactSection/>
      <Footer/>
    </main>
  );
}
