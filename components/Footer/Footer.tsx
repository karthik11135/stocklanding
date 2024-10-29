'use client';
import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaReddit } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Footer = () => {
  return (
    <div
      style={{
        boxShadow:
          '0 -100px 2000px rgba(255,0,128,0.8), 0 0 700px rgba(255,0,128,0.8),   0 0 800px rgba(255, 255, 255, 0.3)',
      }}
      className=" mt-40 relative"
    >
      <Image
        style={{
          clipPath: ' polygon(0 51%, 100% 50%, 100% 90%, 0% 90%)',
        }}
        src="/trailbg.png"
        alt="footerbg"
        className="w-full scale-110 absolute -top-72 mx-auto"
        width={300}
        height={50}
      />
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-white w-full z-20 pb-24"
      >
        <div className="w-10/12 mx-auto py-10 grid grid-cols-12">
          <div className="col-span-5">
            <h1 className="text-4xl font-bold mb-6">FreeTrade</h1>
            <p className="text-sm w-5/6">
              Freetrade is your gateway to commission-free investing. Join over
              1.5 million users using the Best online trading platform, as voted
              at the British Bank Awards for six years running.
            </p>
          </div>
          <div className="col-span-2">
            <h3 className="uppercase  text-sm font-bold text-neutral-600 mb-3">
              Accounts
            </h3>
            <p className="capitalize cursor-pointer hover:text-pink-400 mb-1">
              Stocks and shares ISA
            </p>
            <p className="capitalize cursor-pointer hover:text-pink-400 mb-1">
              Personal Pension
            </p>
            <p className="capitalize cursor-pointer hover:text-pink-400 mb-1">
              General Investment
            </p>
          </div>
          <div className="col-span-2">
            <h3 className="uppercase  text-sm font-bold text-neutral-600 tracking-tight mb-3">
              Customer support
            </h3>
            <p className="capitalize cursor-pointer hover:text-pink-400 mb-1">
              Contact
            </p>
            <p className="capitalize cursor-pointer hover:text-pink-400 mb-1">
              Community
            </p>
            <p className="capitalize cursor-pointer hover:text-pink-400 mb-1">
              Complaints
            </p>
            <p className="capitalize cursor-pointer hover:text-pink-400 mb-1">
              Here for you
            </p>
            <p className="capitalize cursor-pointer hover:text-pink-400 mb-1">
              Invest and talk
            </p>
          </div>
          <div className="col-span-2">
            <h3 className="uppercase  text-sm font-bold text-neutral-600 tracking-tight mb-3">
              Resources
            </h3>
            <p className="capitalize hover:text-pink-400 mb-1">Dictionary</p>
            <p className="capitalize hover:text-pink-400 mb-1">Compare plans</p>
            <p className="capitalize hover:text-pink-400 mb-1">Free share</p>
          </div>
          <div className="col-span-1">
            <h3 className="uppercase  text-sm font-bold text-neutral-600 tracking-tight mb-3">
              Company
            </h3>
            <p className="capitalize hover:text-pink-400 mb-1">About us</p>
            <p className="capitalize hover:text-pink-400 mb-1">Careers</p>
          </div>
        </div>
        <div className="h-[0.5px] mx-auto bg-neutral-700 w-10/12 "></div>
        <div className="text-white grid grid-cols-12  py-10 w-10/12 mx-auto">
          <div className="col-span-2">
            <h3 className="uppercase  text-sm font-bold text-neutral-600 mb-3">
              Accounts
            </h3>
            <p className="capitalize cursor-pointer hover:text-pink-400 mb-1">
              Stocks and shares ISA
            </p>
            <p className="capitalize cursor-pointer hover:text-pink-400 mb-1">
              Personal Pension
            </p>
            <p className="capitalize cursor-pointer hover:text-pink-400 mb-1">
              General Investment
            </p>
          </div>
          <div className="col-span-2 ">
            <h3 className="uppercase opacity-0 cursor-default text-sm font-bold text-neutral-600 mb-3">
              Accounts
            </h3>
            <p className="capitalize cursor-pointer hover:text-pink-400 mb-1">
              Personal stock picks
            </p>
            <p className="capitalize cursor-pointer hover:text-pink-400 mb-1">
              Trade with stocks
            </p>
            <p className="capitalize cursor-pointer hover:text-pink-400 mb-1">
              Volatile markets
            </p>
          </div>
          <div className="col-span-6 ">
            <p className="text-sm w-5/6 mx-auto">
              Freetrade does not provide investment advice and individual
              investors should make their own decisions or seek independent
              advice. The value of investments can go down as well as up and you
              may receive back less than your original investment. Freetrade is
              a trading name of Freetrade Limited, which is a member firm of the
              London Stock Exchange and is authorised and regulated by the
              Financial Conduct Authority. <br></br> <br></br> Registered in
              England and Wales (no. 09797821). © 2024 Freetrade, All rights
              reserved. The Apple logo is a trademark of Apple Inc. App Store is
              a service mark of Apple Inc. Google Play and the Google Play logo
              are trademarks of Google LLC.
            </p>
          </div>
          <div className="col-span-2 text-white mx-auto">
            <p className="mb-3">Follow us on</p>
            <div className="flex gap-1">
              <FaInstagram size={25} className="cursor-pointer" />

              <FaReddit size={25} className="cursor-pointer" />
              <FaLinkedin size={25} className="cursor-pointer" />
              <FaTwitter size={25} className="cursor-pointer" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;
