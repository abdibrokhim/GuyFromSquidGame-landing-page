'use client';

import Image from "next/image";
import React, { useState } from "react";
import Notification from "../utils/notify";

export default function ContractAddressSection() {
    const [toggleCopy, setToggleCopy] = useState(false);
    const [notification, setNotification] = useState<{ message: string; type: 'error' | 'success' | 'info' } | null>(null);  // notification message

    const ca = "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82";

    return (
        <div className="
            w-full bg-[url('/images/ca-cover.png')] h-full bg-cover bg-no-repeat bg-center relative flex flex-col gap-4 items-center justify-center py-16
        " id="ca">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                  {notification && (
                <Notification
                    message={notification.message}
                    type={notification.type}
                    onClose={() => setNotification(null)}
                />
            )}
            <h1 className="text-4xl md:text-6xl text-[var(--text-a)] font-black text-center mb-8 z-10">
                CONTRACT ADDRESS
            </h1>
            <div className="flex flex-row gap-4 bg-[var(--text-a)] p-4 items-center justify-center rounded-lg shadow-lg z-10">
                <div className="text-[var(--text-a)] bg-[var(--dark-pink)] px-4 py-2 rounded-lg shadow-lg font-bold">CA:</div>
                <div className="text-[var(--bg-a)]">{ca}</div>
                <button 
                    className={`hover:bg-[var(--light-green)] text-black flex flex-row gap-1 items-center px-4 py-2 hover:rounded-lg text-sm md:text-md hover:shadow-lg cursor-pointer`}
                    onClick={() => {
                        navigator.clipboard.writeText(ca);
                        setToggleCopy(true);
                        setNotification({ message: "Copied to clipboard", type: "success" });
                        setTimeout(() => {
                            setToggleCopy(false);
                        }, 1000);
                    }}
                >
                <Image
                  aria-hidden
                  className=''
                  src={!toggleCopy ? '/essentials/copy.svg' : '/essentials/check.svg'}
                  alt="Copy icon"
                  width={24}
                  height={24}
                /> 
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center justify-between w-full max-w-6xl mt-8 z-10">
                <div className="flex flex-col gap-8">
                    <h2 className="text-3xl md:text-5xl px-2 md:px-0 max-w-md font-bold text-center">
                        JOIN FORCES
                    </h2>
                    <h2 className="text-4xl md:text-6xl px-2 md:px-0 max-w-md font-black text-[var(--dark-pink)] text-center">
                        <span className="block">WITH</span><span className="bg-[var(--dark-pink)] text-[var(--text-a)] px-1 font-black">GUY FROM SQUID GAME</span>
                    </h2>
                    <div className="rounded-lg max-w-96 border-[1px] border-[var(--text-a)] shadow-lg p-8 rotate-[-2deg]">
                        <h2 className="text-2xl md:text-4xl md:max-w-3xl px-2 md:px-0 max-w-md font-black text-[var(--text-a)] text-center">
                            FUN FACTS
                        </h2>
                        <h2 className="text-lg md:text-xl md:max-w-3xl px-2 md:px-0 font-black max-w-md text-[var(--text-a)] font-bold text-center mt-6">
                            What's his name?
                        </h2>
                        <h2 className="mt-2 text-lg md:text-xl md:max-w-3xl px-2 md:px-0 font-black max-w-md text-[var(--text-a)] font-bold text-center">
                            The Guy From Squid Game?
                        </h2>
                        <h2 className="mt-6 text-md md:text-lg md:max-w-3xl px-2 md:px-0 max-w-md font-bold text-center">
                            Ah, yes you're talking about player 456. Yeah, I don't know what his name was in the show either
                        </h2>
                    </div>
                </div>
                <div className="">
                    <div className="flex flex-col gap-8">
                    <Image
                        aria-hidden
                        className='md:w-full max-w-1/4 rounded-lg shadow-lg'
                        src="/gifs/squid-guy-smiling.gif"
                        alt="gif"
                        width={400}
                        height={400}
                    /> 
                    </div>
                </div>
            </div>
        </div>
    );
}