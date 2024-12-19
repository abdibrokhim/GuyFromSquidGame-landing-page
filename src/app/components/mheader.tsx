'use client';

import Image from "next/image";
import React, { useState, useEffect } from "react";
import Socials from "./socials";
import './styles.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <header className="w-full max-w-3xl p-2 flex flex-col justify-between items-center bg-[var(--text-a)] rounded-full border-[2px] border-[var(--bg-a)] sticky top-10 z-30 shadow-lg">
        <div className="w-full flex justify-between items-center py-2 px-4 text-sm">
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-row gap-2 text-md justify-between items-center text-[var(--bg-a)]">
            <a
              aria-label="Meme"
              className="text-[var(--text-a)] bg-[var(--dark-pink)] py-2 px-4 rounded-full transition shadow-lg"
              href="#meme"
              rel="noopener noreferrer"
            >
              HOME
            </a>
            <a
              aria-label="Solution"
              className="hover:text-[var(--text-a)] hover:bg-[var(--light-pink)] py-2 px-4 rounded-full transition"
              href="#portfolio"
              rel="noopener noreferrer"
            >
              ABOUT
            </a>
            <a
              aria-label="Partners"
              className="hover:text-[var(--text-a)] hover:bg-[var(--light-pink)] py-2 px-4 rounded-full transition"
              href="#partners"
              rel="noopener noreferrer"
            >
              HOW TO BUY
            </a>
            <a
              aria-label="Contact Us"
              className="hover:text-[var(--text-a)] hover:bg-[var(--light-pink)] py-2 px-4 rounded-full transition"
              href="#contact"
              rel="noopener noreferrer"
            >
              MEMETICS
            </a>
          </div>
        {/* <div className="hidden md:flex">
            <Socials />
        </div> */}

          {/* Mobile Menu Icon */}
          <button
            className="md:hidden flex items-center"
            onClick={toggleDropdown}
            aria-label="Open Menu"
          >
            {!isOpen ? (
                            <Image
                            aria-hidden
                            src="/essentials/menu.svg"
                            alt="menu icon"
                            width={22}
                            height={22}
                          />
                        ) : (
                            <Image
                            aria-hidden
                            src="/essentials/close.svg"
                            alt="menu icon"
                            width={22}
                            height={22}
                          />
                        )}
          </button>

          <button
            className="flex flex-row items-center text-[var(--text-a)] text-xs md:text-sm bg-[var(--dark-green)] hover:bg-[var(--dark-pink)] shadow-lg rounded-full px-4 py-2"
            onClick={toggleDropdown}
            aria-label="Open Menu"
        >
            <Image
                aria-hidden
                src="/essentials/cart.svg"
                alt="menu icon"
                width={18}
                height={18}
            />
            <span className="ml-2">BUY $GFSG</span>
        </button>

        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden absolute w-[90%] top-[80px] bg-white p-4 text-[var(--bg-a)] rounded-xl border-[1px] border-[var(--bg-a)] shadow-md flex flex-col gap-4">
            {/* Navigation Row */}
            <div className="flex flex-row flex-wrap gap-2 text-center text-xs">
              <a
                aria-label="Meme"
                className="text-[var(--text-a)] bg-[var(--dark-pink)] py-2 px-4 rounded-full transition shadow-lg"
                href="#meme"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
              >
                HOME
              </a>
              <a
                aria-label="Solution"
                className="hover:text-[var(--text-a)] hover:bg-[var(--light-pink)] py-2 px-4 rounded-full transition"
                href="#portfolio"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
              >
                ABOUT
              </a>
              <a
                aria-label="Partners"
                className="hover:text-[var(--text-a)] hover:bg-[var(--light-pink)] py-2 px-4 rounded-full transition"
                href="#partners"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
              >
                HOW TO BUY
              </a>
              <a
                aria-label="Contact Us"
                className="hover:text-[var(--text-a)] hover:bg-[var(--light-pink)] py-2 px-4 rounded-full transition"
                href="#contact"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
              >
                MEMETICS
              </a>
            </div>

            {/* Socials Row */}
            <div className="flex flex-col justify-center gap-4">
                {/* add line devider */}
                <hr className="w-full" />
                <Socials />
            </div>
          </div>
        )}
      </header>
    </>
  );
}
