'use client';

import Image from "next/image";
import React from "react";

export default function Socials() {

  return (

<div className="flex gap-2 flex-wrap items-center justify-center">
          <a
              aria-label="Open Community on Discord"
              className="flex items-center bg-[var(--bg-a)] hover:bg-[var(--dark-pink)] shadow-lg rounded-full p-2"
              href="https://discord.gg/nVtmDUN2sR"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/socials/discord.svg"
                alt="discord icon"
                width={18}
                height={18}
              />
            </a>
          <a
              aria-label="Open Community on Discord"
              className="flex items-center bg-[var(--bg-a)] hover:bg-[var(--dark-pink)] shadow-lg rounded-full p-2"
              href="https://discord.gg/nVtmDUN2sR"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/socials/telegram.svg"
                alt="discord icon"
                width={18}
                height={18}
              />
            </a>
            <a
              aria-label="Open Community on X"
              className="flex items-center bg-[var(--bg-a)] hover:bg-[var(--dark-pink)] shadow-lg rounded-full p-2"
              href="https://x.com/xopencommunity"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/socials/x.svg"
                alt="x icon"
                width={18}
                height={18}
              />
            </a>
            <a
              aria-label="Open Community on Instagram"
              className="flex items-center bg-[var(--bg-a)] hover:bg-[var(--dark-pink)] shadow-lg rounded-full p-2"
              href="https://instagram.com/theopencommunity"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/socials/instagram.svg"
                alt="instagram icon"
                width={18}
                height={18}
              />
            </a>
            <a
              aria-label="Open Community on Instagram"
              className="flex items-center bg-[var(--bg-a)] hover:bg-[var(--dark-pink)] shadow-lg rounded-full p-2"
              href="https://x.com/xopencommunity"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/socials/dextools.svg"
                alt="instagram icon"
                width={18}
                height={18}
              />
            </a>
        </div>
  );
}