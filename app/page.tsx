import Image from "next/image";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-tr from-[#131313] via-[#141414] to-yellow-600">
      <div className="container mx-auto px-10 py-4">
        <HeroSection />
      </div>
    </main>
  );
}
