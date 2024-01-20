import Image from "next/image";
import HeroSection from "./components/Sections/HeroSection/HeroSection";
import Header from "./components/Header/Header";
import StackSection from "./components/Sections/StackSection/StackSection";

export default function Home() {
  return (
    <main className="w-full flex flex-col space-y-30">
      <Header/>
      <HeroSection/>
      <StackSection/>
    </main>
  );
}
