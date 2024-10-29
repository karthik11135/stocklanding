'use client';
import React, { useState } from 'react';

const HoverButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="hover:-translate-y-0.5 ease-in  relative px-5 py-4 mb-8 overflow-hidden text-lg uppercase rounded-full bg-pink-800">
      {children}
    </button>
  );
};

export default HoverButton;
