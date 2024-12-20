'use client'

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { Analytics } from "@vercel/analytics/react"
import Footer from "./components/mfooter";
import Header from "./components/mheader";
import MemeSection from "./sections/memeSection";
import MemeSectionA from "./sections/memeSectionA";
import ExchangeCoinSection from "./sections/exchangeCoinSection";
import ContestSection from "./sections/contestSection";
import Notification from "./utils/notify";
import ContractAddressSection from "./sections/contractAddressSection";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null); // Add type for the ref
  const [notification, setNotification] = useState<{ message: string; type: 'error' | 'success' | 'info' } | null>(null);  // notification message

  const toggleMusic = () => {
    // setNotification({ message: "We can't play music right now", type: "info" });

    if (audioRef.current) {
      if (isPlaying) {
        setNotification({ message: "Turning off the music...", type: "info" });
        audioRef.current.pause();
      } else {
        console.log("Playing bg music");
        setNotification({ message: "Turning on the music...", type: "info" });
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="grid grid-rows items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)] scroll-smooth">
      <Analytics />
      {notification && (
                <Notification
                    message={notification.message}
                    type={notification.type}
                    onClose={() => setNotification(null)}
                />
            )}
      {/* Audio */}
      <audio ref={audioRef} src="/music/background-music.mp3" autoPlay={true} loop />
      {/* Toggle Button */}
      <button 
        onClick={toggleMusic} 
        className={`fixed bottom-16 right-8 z-40 bg-[var(--dark-green)] text-white p-4 rounded-full shadow-lg hover:bg-[var(--dark-pink)] transition
          ${isPlaying ? 'bg-[var(--dark-green)] hover:bg-[var(--dark-pink)]' : 'bg-[var(--dark-pink)] hover:bg-[var(--dark-green)]'}`}
        aria-label="Toggle Music"
        >
        {isPlaying ? (
          <Image
          aria-hidden
          src="/essentials/sound-on.svg"
          alt="sound-on icon"
          width={24}
          height={24}
        />
        ) : (
          <Image
          aria-hidden
          src="/essentials/sound-off.svg"
          alt="sound-off icon"
          width={24}
          height={24}
        />
        )}
      </button>
      <div className="relative w-full min-h-32 bg-[url('/images/red-green.png')] bg-cover bg-no-repeat bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div className="relative w-full min-h-screen bg-[url('/images/smile-1.png')] bg-cover bg-no-repeat bg-center flex flex-col gap-4 items-center justify-center" id="contest">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>
      <Header />
      <ContractAddressSection />
      <ContestSection />
      <div className="relative w-full min-h-screen bg-[url('/images/play-game.png')] bg-cover bg-no-repeat bg-center flex flex-col gap-4 items-center justify-center" id="contest">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      <ExchangeCoinSection />
      <MemeSection />
      <MemeSectionA />
      <Footer />
    </div>
  );
}
