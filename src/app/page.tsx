import Image from "next/image";
import { Analytics } from "@vercel/analytics/react"
import Footer from "./components/mfooter";
import Header from "./components/mheader";
import MemeSection from "./sections/memeSection";
import ExchangeCoinSection from "./sections/exchangeCoinSection";
import ContestSection from "./sections/contestSection";

export default function Home() {
  return (
    <div className="grid grid-rows items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)] scroll-smooth">
      <Analytics />
      {/* 1 Section */}
      <div className="relative w-full min-h-32 bg-[url('/images/red-green.png')] bg-cover bg-no-repeat bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        {/* Content for this section goes here */}
      </div>
      {/* 2 Section */}
      <div className="relative w-full min-h-screen bg-[url('/images/smile-1.png')] bg-cover bg-no-repeat bg-center flex flex-col gap-4 items-center justify-center" id="contest">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        {/* Content for this section goes here */}
      </div>
      <Header />
      {/* 3 Section */}
      <ContestSection />
      {/* 4 Section */}
      <div className="relative w-full min-h-screen bg-[url('/images/play-game.png')] bg-cover bg-no-repeat bg-center flex flex-col gap-4 items-center justify-center" id="contest">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        {/* Content for this section goes here */}
      </div>
      <ExchangeCoinSection />
      <Footer />
    </div>
  );
}
