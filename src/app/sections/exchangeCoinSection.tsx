'use client';

import Image from "next/image";
import React, { useState } from "react";

export default function ExchangeCoinSection() {
    const coins = [
        {
            name: "Bybit",
            img: "/exchange/bybit_spot.png",
        },
        {
            name: "Kucoin",
            img: "/exchange/kucoin.png",
        },
        {
            name: "Crypto",
            img: "/exchange/crypto.png",
        },
    ]

  return (
    <div className="
        w-full bg-[url('/images/exchange-cover.png')] h-full bg-cover bg-no-repeat bg-center relative flex flex-col gap-4 items-center justify-center py-16
    " id="contest">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <h1 className="text-4xl md:text-6xl font-black text-center mb-8 z-10">
            EXCHANGES
        </h1>
        <h2 className="text-xl md:text-xl md:max-w-3xl px-2 md:px-0 font-bold text-center mb-8 z-10">
            <span className="bg-[var(--dark-pink)] px-1 font-black">$GUYFROMSQUIDGAME</span> IS AVAILABLE FOR TRADING ON MAJOR EXCHANGES.
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-center z-10">
            {coins.map((coin) => (
                <div
                    key={coin.name}  
                    className="">
                    <Image
                        src={coin.img}
                        alt={coin.name}
                        width={100}
                        height={100}
                        className="
                            bg-[var(--text-a)] 
                            text-white 
                            font-bold 
                            inline-block 
                            border-2 
                            border-[#1E1E1E] 
                            shadow-[4px_4px_0_0_#1E1E1E]
                            transition-all 
                            duration-200
                            hover:translate-x-[2px]
                            hover:translate-y-[2px]
                            hover:shadow-[2px_2px_0_0_#1E1E1E]
                            active:translate-x-[4px]
                            active:translate-y-[4px]
                            active:shadow-none
                            rounded-md
                            px-4 py-2 text-[18px] sm:text-[18px] w-full text-center
                            mt-4 text-lg font-bold py-2 px-6 text-white rounded-full hover:bg-[var(--text-a)]
                        "
                    />
                </div>
            ))}
        </div>
    </div>
  );
}