import React from 'react';
import { Roboto } from 'next/font/google';
import PriceCard from './PriceCard';

const rb = Roboto({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
});

const PriceSection = () => {
  return (
    <div className="pb-20 text-white">
      <div className="w-4/6 mx-auto text-center font-light">
        <h1 className={`${rb.className} tracking-wide text-4xl mb-5`}>
          Pick the plan that suits you best
        </h1>
        <p className={`mb-10 text-lg ${rb.className}`}>
          <span className={`text-pink-600 text-lg ${rb.className}`}>
            Save 17%
          </span>{' '}
          when you choose annual subscription
        </p>
      </div>
      <div className="grid w-5/6 mx-auto gap-5 grid-cols-12">
        <PriceCard
          CardType="Basic"
          price={8.99}
          AccountStatement="General Investment Account"
          benefits={[
            'A great way to try Freetrade before transferring your ISA or pension',
            'Unlimited commission-free trades. Other charges may apply',
            'Trade USD and EUR stocks at the exchange rate + 0.99% FX fee',
            'Access to a selection of Freetrades 6,200+ global stocks and ETFs',
            '1% AER on up to £1,000 uninvested cash',
            'Fractional US shares',
          ]}
        />
        <PriceCard  CardType="Standard"
          price={12.99}
          AccountStatement="Stocks and shares ISA"
          benefits={[
            'A great way to try Freetrade before transferring your ISA or pension',
            'Unlimited commission-free trades. Other charges may apply',
            'Trade USD and EUR stocks at the exchange rate + 0.99% FX fee',
            'Access to a selection of Freetrades 6,200+ global stocks and ETFs',
            '1% AER on up to £1,000 uninvested cash',
            'Fractional US shares',
          ]}/>
        <PriceCard  CardType="Plus"
          price={15.99}
          AccountStatement="Personal Pension"
          benefits={[
            'A great way to try Freetrade before transferring your ISA or pension',
            'Unlimited commission-free trades. Other charges may apply',
            'Trade USD and EUR stocks at the exchange rate + 0.99% FX fee',
            'Access to a selection of Freetrades 6,200+ global stocks and ETFs',
            '1% AER on up to £1,000 uninvested cash',
            'Fractional US shares',
          ]}/>
      </div>
    </div>
  );
};

export default PriceSection;
