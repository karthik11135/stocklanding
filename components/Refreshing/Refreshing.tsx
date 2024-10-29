'use client';
import { motion } from 'framer-motion';
import { Roboto, Oswald } from 'next/font/google';
import React from 'react';
import ShimmerButton from '../ui/shimmer-button';
import Image from 'next/image';

const os = Oswald({
  weight: ['200', '400', '600'],
  subsets: ['latin'],
});

const rb = Roboto({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
});

const Refreshing = () => {
  return (
    <div className=" my-32 mb-56 relative">
      <div className="text-white mb-32 w-full">
        <div className="w-11/12 mx-auto grid grid-cols-12">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="col-span-6"
          >
            <div className="text-7xl mb-4  font-bold tracking-tighter">
              REFRESHING SIMPLY
            </div>
            <p className={`${rb.className}  w-4/6 text-lg mb-10`}>
              Open your account in minutes. Manage your portfolio with ease on
              iOS, Android, or your web browser. Use automated tools to invest
              regularly.
            </p>
            <ShimmerButton shimmerColor="#a2f">GET STARTED</ShimmerButton>
          </motion.div>
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="col-span-6 flex items-start justify-center"
          >
            <Image
              src="/refreshbg.png"
              className="scale-125"
              width={600}
              height={600}
              alt={'Something went wrong'}
            />
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center pt-20 text-white"
      >
        <h1
          className={`uppercase text-white ${os.className} mb-10 text-7xl font-bold w-4/6 mx-auto tracking-tighter`}
        >
          Your gateway to commision free investing
        </h1>
        <motion.div
          initial={{ y: 50, scale: 0 }}
          whileInView={{ y: 0, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="w-fit mx-auto"
        >
          <ShimmerButton
            shimmerDuration="3.5s"
            shimmerSize="0.29em"
            shimmerColor="#a2f"
            borderRadius="200px"
            className={`text-black ${rb.className} tracking-wide`}
            backDropClassName="bg-slate-200"
          >
            OPEN YOUR ACCOUNT NOW
          </ShimmerButton>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Refreshing;
