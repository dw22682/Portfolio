import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navigation from "./components/Navigation";
import AboutSection from "./components/AboutSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-tr from-[#131313] via-[#141414] to-yellow-600">
      <Navigation />
      <div className="container mx-auto px-10 py-4 mt-24">
        <HeroSection />
        <AboutSection />
      </div>
    </main>
  );
}
