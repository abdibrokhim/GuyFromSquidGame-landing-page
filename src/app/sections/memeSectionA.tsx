'use client';

import Image from "next/image";
import React, { useState } from "react";

export default function MemeSectionA() {

  return (
    <div className="w-full bg-[var(--dark-blue)]" id="intro">
        <div className="
            w-full min-h-screen flex items-center justify-center bg-[url('/images/meme-cover2.png')] bg-cover bg-no-repeat bg-center relative
          " id="meme"></div>
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
    </div>
  );
}