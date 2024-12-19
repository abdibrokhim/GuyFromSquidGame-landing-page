'use client';

import Image from "next/image";
import React, { useState } from "react";

export default function MemeSection() {

  return (
    <div className="w-full bg-[var(--dark-blue)]" id="intro">
        <div className="w-full min-h-screen flex items-center justify-center bg-[url('/images/play-game.png')] bg-fill bg-no-repeat bg-center relative"></div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    </div>
  );
}