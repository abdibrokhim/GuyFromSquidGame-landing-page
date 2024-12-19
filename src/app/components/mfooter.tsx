'use client';

import Image from "next/image";
import React, { useState } from "react";
import Socials from "./socials";

export default function Footer() {
  return (
    <footer
      className="
        w-full py-16
        min-h-96
        bg-[url('/images/join-us.png')]
        bg-cover bg-center bg-no-repeat
        relative
      "
    >
    <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      <div className="w-full max-w-3xl mx-auto flex flex-col md:flex-row-reverse gap-8 justify-center items-center">
        <div className="bg-transparent rounded-md p-4 flex flex-col gap-4 items-center justify-center w-full absolute bottom-10">
          {/* Socials */}
          <div className="flex gap-2 flex-wrap items-center justify-center">
            <Socials />
          </div>
          {/* Text */}
          <div>
            <p className="text-sm text-center text-[var(--text-a)]">
              © 2024 GUYFROMSQUIDGAME.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
