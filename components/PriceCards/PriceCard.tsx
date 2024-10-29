'use client';
import { motion } from 'framer-motion';
import React from 'react';
import { Roboto } from 'next/font/google';
import { FaCheck } from 'react-icons/fa6';
import { CardSpotlight } from '../ui/card-spotlight';

const rb = Roboto({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
});

interface PriceCardProps {
  CardType: 'Basic' | 'Standard' | 'Plus';
  price: 8.99 | 12.99 | 15.99;
  AccountStatement: string;
  benefits: string[];
}

const PriceCard = ({
  CardType,
  price,
  AccountStatement,
  benefits,
}: PriceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{delay: 0.5}}
      className="col-span-4 rounded-md "
    >
      <CardSpotlight
        radius={220}
        color="#f1abfc"
        className={`${rb.className} h-[70vh] overflow-scroll border-t border-l border-r border-neutral-800 py-8 px-5`}
      >
        <h2 className="text-pink-500 text-xl mb-3">{CardType}</h2>
        <p className="uppercase mb-7 text-sm font-medium">
          <span className="text-4xl font-bold">${price}</span>
          /MONTH
        </p>
        <div className="bg-zinc-700 mb-7 h-[0.5px] "></div>
        <div className="mb-5">
          <p className="mb-3 text-sm tracking-wide font-bold">Accounts</p>
          <div className="capitalize tracking-wide text-sm">
            <p>{AccountStatement}</p>
          </div>
        </div>
        <div>
          <p className="mb-5 font-bold text-sm">Benefits</p>
          {benefits.map((val, ind) => {
            return <EachValue key={ind} note={val} icon={<FaCheck />} />;
          })}
        </div>
      </CardSpotlight>
      <div className="rounded-md">
        <div className="text-white z-20 cursor-pointer transition hover:-translate-y-2 mt-4 bg-pink-500 rounded-md w-full py-3 font-bold uppercase tracking-wider text-center">
          GET STARTED NOW
        </div>
      </div>
    </motion.div>
  );
};

export default PriceCard;

const EachValue = ({ icon, note }: { icon: React.ReactNode; note: string }) => {
  return (
    <div className="mb-1.5 font-light text-sm gap-3 flex">
      <div className="flex items-center">{icon}</div>
      <p className="flex">{note}</p>
    </div>
  );
};
