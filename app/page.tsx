import Image from "next/image";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#131313]">
      <div className="container mx-auto px-10 py-4">
        <HeroSection />
      </div>
    </main>
  );
}
