'use client';

import Image from "next/image";
import React, { useEffect, useRef } from "react";

export default function MemeSection() {
  const scrollRef = useRef(null);

  const memesList = [
    {
      name: "Meme 1",
      image: "/memes/squid-game-wednesday-meme.jpg",
    },
    {
      name: "Meme 2",
      image: "/memes/squid-game-wednesday-meme.jpg",
    },
    {
      name: "Meme 3",
      image: "/memes/squid-game-wednesday-meme.jpg",
    },
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = scrollContainer;
      
      // When we reach bottom, reset to top
      if (scrollTop + clientHeight >= scrollHeight - 10) {
        scrollContainer.scrollTop = 0;
      }
      
      // When we reach top scrolling upward, jump to bottom
      if (scrollTop === 0) {
        scrollContainer.scrollTop = scrollHeight / 2;
      }
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    
    // Start the automatic scrolling
    const scrollSpeed = 1; // Pixels per frame
    let animationFrameId: any;
    
    const scroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollTop += scrollSpeed;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };
    
    scroll();

    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="w-full relative min-h-screen" id="meme">
      <div className="w-full min-h-screen flex items-center justify-center bg-[url('/images/meme-cover2.png')] bg-cover bg-no-repeat bg-center relative" />
      <div className="absolute inset-0 bg-black bg-opacity-30" />
      
      {/* Right-side infinite scrolling container */}
      <div 
        ref={scrollRef}
        className="absolute left-0 top-0 h-full w-1/2 bg-transparent overflow-hidden z-10"
      >
        {/* First set of memes */}
        <div className="flex flex-col items-center">
          {memesList.map((meme, idx) => (
            <div key={`first-${idx}`} className="my-4 transition-transform hover:scale-110">
              <Image
                className="rounded-md w-full"
                src={meme.image}
                alt={meme.name}
                width={400}
                height={400}
                priority={idx < 2}
              />
            </div>
          ))}
        </div>
        
        {/* Duplicate set of memes */}
        <div className="flex flex-col items-center">
          {memesList.map((meme, idx) => (
            <div key={`second-${idx}`} className="my-4 transition-transform hover:scale-110">
              <Image
                className="rounded-md w-full"
                src={meme.image}
                alt={meme.name}
                width={400}
                height={400}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    </div>
  );
}