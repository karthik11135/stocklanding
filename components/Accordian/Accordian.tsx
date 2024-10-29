'use client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Roboto } from 'next/font/google';
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const rb = Roboto({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
});

export const AccordionSection = () => {
  const [imageSelect, setImageSelect] = useState(0);

  return (
    <div className="w-11/12 mx-auto py-20">
      <motion.h1
        initial={{ x: -40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="uppercase text-6xl mb-2 font-bold text-white tracking-tight my-20"
      >
        FAQS
      </motion.h1>
      <div className="w-full relative border-zinc-700 py-2 mx-auto grid grid-cols-12">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '33.33%' }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-2 -right-0 w-2/6 h-2/6 drop-shadow-[0px_-20px_30px_rgba(200,0,128,0.8)]"
        >
          <div
            style={{
              clipPath: 'polygon(100% 0, 100% 88%, 100% 100%, 0 100%, 89% 92%)',
            }}
            className="bg-gradient-to-t from-pink-600 to-pink-800 my-2 shadow-inner w-full h-full "
          ></div>
        </motion.div>

        <motion.div
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="col-span-6  h-fit"
        >
          <Accordion
            type="single"
            collapsible
            className={`${rb.className} text-white`}
          >
            <div
              onClick={() =>
                setImageSelect((prev) => {
                  if (prev === 1) return 0;
                  return 1;
                })
              }
              className=""
            >
              <AccordionItem value="item-1" className="">
                <AccordionTrigger className="text-3xl my-4 tracking-wide font-light">
                  Stock and shares ISA
                </AccordionTrigger>
                <AccordionContent className="text-lg pb-5 text-neutral-600">
                  An ISA, or Individual Savings Account, is a flexible and
                  tax-efficient way to invest in thousands of global stocks and
                  ETFs. Invest up to £20,000 each year, free of capital gains
                  tax or UK dividend tax.
                </AccordionContent>
              </AccordionItem>
            </div>
            <div
              onClick={() =>
                setImageSelect((prev) => {
                  if (prev === 2) return 0;
                  return 2;
                })
              }
            >
              <AccordionItem value="item-2" className="">
                <AccordionTrigger className="text-3xl my-4 tracking-wide font-light">
                  Personal pension
                </AccordionTrigger>
                <AccordionContent className="text-lg pb-5 text-neutral-600">
                  A SIPP, or Self-Invested Personal Pension, lets you save for
                  your future in a tax-efficient way. Get tax relief on the
                  first £60,000 you contribute each year. Contribute up to 100%
                  of your annual income.
                </AccordionContent>
              </AccordionItem>
            </div>

            <div
              onClick={() =>
                setImageSelect((prev) => {
                  if (prev === 3) return 0;
                  return 3;
                })
              }
              className=""
            >
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-3xl my-4 tracking-wide font-light">
                  General Investment Account
                </AccordionTrigger>
                <AccordionContent className="text-lg pb-5 text-neutral-600">
                  A General Investment Account, or GIA, is for investing outside
                  tax-efficient wrappers like ISAs or SIPPs. There’s no limit to
                  how much you can invest in your Freetrade GIA.
                </AccordionContent>
              </AccordionItem>
            </div>
          </Accordion>
        </motion.div>
        <div className="col-span-6 flex items-center h-full w-full">
          {imageSelect !== 0 && (
            <Image
              src={`/accord${imageSelect}bg.png`}
              className="mx-auto py-2 object-cover"
              alt={'something ma'}
              width={imageSelect === 1 ? 400 : 350}
              height={imageSelect === 1 ? 400 : 350}
            />
          )}
        </div>
      </div>
    </div>
  );
};
