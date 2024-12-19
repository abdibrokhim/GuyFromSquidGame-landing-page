import Image from "next/image";
import { Analytics } from "@vercel/analytics/react"
import Footer from "./components/mfooter";
import Header from "./components/mheader";
import IntroSection from "./sections/introSection";
import MemeSection from "./sections/memeSection";
import ExchangeCoinSection from "./sections/exchangeCoinSection";
import ContestSection from "./sections/contestSection";

export default function Home() {
  return (
    <div className="grid grid-rows items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)] scroll-smooth">
      <Analytics />
      <Header />
      <IntroSection />
      <ContestSection />
      <MemeSection />
      <ExchangeCoinSection />
      <Footer />
    </div>
  );
}
