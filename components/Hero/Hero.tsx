'use client';
import React from 'react';
import { Roboto, Oswald } from 'next/font/google';
import HoverButton from '@/ui/HoverButton';

import Particles from '../ui/particles';
import { motion } from 'framer-motion';
const rb = Roboto({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
});

const os = Oswald({
  weight: ['200', '400', '600'],
  subsets: ['latin'],
});

const Hero = () => {
  return (
    <div className=" h-[80vh] relative flex-col items-center justify-center overflow-auto">
      <Particles className="absolute inset-0" quantity={75} ease={80} refresh />
      <div className="text-white text-center mx-auto mt-56 w-5/6 p-6 items-center">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className={`${os.className} text-8xl  tracking-tight font-bold mb-4`}
        >
          INVESTING. SIMPLIFIED.
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className={`${rb.className} text-lg  tracking-wide mb-8`}
        >
          Commission free self directed investment platform.
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          className=""
        >
          <HoverButton>Add your investment plan</HoverButton>
        </motion.div>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          className={`${rb.className} uppercase text-sm`}
        >
          When you invest, your capital is at risk. <br></br> Other charges may
          apply.
        </motion.p>
      </div>
    </div>
  );
};

export default Hero;
