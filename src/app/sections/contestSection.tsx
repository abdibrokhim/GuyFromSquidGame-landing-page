'use client';

import Image from "next/image";
import React, { useState } from "react";

export default function ContestSection() {

    const contests = [
        {
            name: "1",
            img: "/images/guyfromsquidgame.jpeg",
        },
        {
            name: "2",
            img: "/images/guyfromsquidgame.jpeg",
        },
        {
            name: "3",
            img: "/images/guyfromsquidgame.jpeg",
        },
    ]

  return (
    <div className="w-full bg-[var(--dark-green)] flex flex-col gap-4 items-center justify-center py-16" id="contest">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-8">
            JOIN OUR CONTESTS
        </h1>
        <h2 className="text-lg md:text-xl md:max-w-3xl px-2 md:px-0 max-w-md font-bold text-center mb-8">
            Guy From Squid Game&spo;s secret to chilling? Affiliate campaigns! Click on the links below to join.
        </h2>
        <div className="flex flex-row flex-wrap gap-8 items-center justify-center">
            {contests.map((contest) => (
                <div
                    key={contest.name} 
                    className="flex flex-col gap-4">
                <Image
                    src={contest.img}
                    alt={contest.name}
                    width={100}
                    height={100}
                    className="rounded-full w-full bg-[var(--text-a)] p-2"
                />
                <a className="
                    bg-[var(--dark-pink)] 
                    text-white 
                    font-bold 
                    inline-block 
                    border-4 
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
                    mt-4 text-lg font-bold py-2 px-6 text-white rounded-full hover:bg-[var(--dark-pink)]
                ">Join Now</a>
            </div>
            ))}
        </div>
    </div>
  );
}