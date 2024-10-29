'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Roboto, Oswald } from 'next/font/google';
import Image from 'next/image';
import ShimmerButton from '../ui/shimmer-button';

const os = Oswald({
  weight: ['200', '400', '600'],
  subsets: ['latin'],
});

const rb = Roboto({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
});

const CurveSection = () => {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.4 }}
      className="py-2 mt-20  drop-shadow-[0px_-50px_50px_rgba(255,0,128,0.8)]  "
    >
      <div
        style={{
          //   clipPath: 'ellipse(80% 50% at 50% 50%)',
          clipPath:
            'path("M 0,80 C 200,10 400,5 800,0 C 1000,10 1400,20 1600,80 L 1500,800 0,800")',
        }}
        className="w-ful relative bg-black text-white pt-32 pb-20"
      >
        <div className="bg-black w-11/12 gap-4 mx-auto grid grid-cols-12">
          <div className="col-span-6 ">
            <p className="mb-2 text-sm tracking-tight">
              AWARD WRITING PLATFORM
            </p>
            <h1
              className={`uppercase tracking-tight mb-7 font-semibold ${os.className} text-6xl`}
            >
              BUILD A PORTFOLIO TO MEET YOUR GOALS
            </h1>
            <p className={`tracking-tight ${rb.className}`}>
              Invest commission-free in thousands of UK, US, and European stocks
              and ETFs.
            </p>
            <ul className="space-y-2 mb-4 text-neutral-500 py-3">
              <li className="flex">Tax-wrapped accounts</li>
              <li>Unlimited commission-free trades</li>
              <li>Direct access to UK Treasury bills</li>
              <li>Easy to use on desktop and mobile</li>
              <li>
                Voted Best online trading platform six years running at the
                British Bank Awards
              </li>
            </ul>
            <ShimmerButton
              shimmerColor="#a21caf"
              className={`${rb.className} px-7 py-1 uppercase font-light`}
            >
              Start now
            </ShimmerButton>
          </div>
          <div className="col-span-6 w-full">
            <Image
              src="/statsbg.png"
              className="-translate-y-14 scale-125 ms-auto"
              height={800}
              width={800}
              alt="stats pic"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CurveSection;
