'use client';

import Image from "next/image";
import React, { useState } from "react";
import Socials from "./socials";

export default function Footer() {

  return (
      <footer className="flex w-full max-w-3xl mx-auto flex-col md:flex-row-reverse gap-8 py-16 justify-between items-center">
        <div className="flex gap-2 flex-wrap items-center justify-center">
            <Socials />
        </div>
        <div className="">
          <p className="text-sm text-center text-[var(--text-a)]">
            © 2024 GUYFROMSQUIDGAME.
          </p>
        </div>
      </footer>
  );
}