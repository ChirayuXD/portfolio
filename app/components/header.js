"use client"

import React from 'react';

function Header() {
  return (
    <div className="flex flex-row justify-between items-center p-4 max-w-full border-b-2 border-[rgba(255,166,0,0.589)]">
      <div className="text-white text-2xl font-bold">Chirayu Agrawal</div>
      <a 
        href="https://drive.google.com/file/d/1hCJMXnmHhAyjG-ha1pVKUnn9rM7VsH2i/view?usp=sharing"
        className="text-white hover:bg-orange-800 rounded px-4 py-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume
      </a>
    </div>
  );
}

export default Header;
