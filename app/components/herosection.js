"use client"
import React from 'react';
import { useTypewriter } from './useTypewriter.js';

function HeroSection() {
  const phrases = [
    "CHIRAYU AGRAWAL",
    "SOFTWARE ENGINEER",
    "DEVELOPER",
    "AI ENTHUSIAST"
  ];

  const typingText = useTypewriter(phrases);

  return (
    <section className="flex items-center justify-center h-max ">
      <div className="text-white text-center leading-none">
        <div className="text-[4rem] font-bold">
          <span className="block">‎{typingText}</span>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
