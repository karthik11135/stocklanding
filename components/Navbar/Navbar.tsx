import React from 'react';

import ShimmerButton from '../ui/shimmer-button';
import NavbarWrapper from './NavbarWrapper';

const Navbar = () => {
  return (
    <NavbarWrapper>
      <div className="w-11/12 mx-auto  h-full p-2 flex items-center">
        <div className="grid grid-cols-12 w-full h-full ">
          <div className="flex items-center col-span-3">
            <h1 className="text-3xl cursor-pointer hover:text-pink-300 font-bold">
              FreeTrade
            </h1>
          </div>
          <ul className="flex items-center gap-6 font-bold text-sm tracking-tight col-span-6 justify-center ">
            <li className="cursor-pointer hover:text-pink-300 transition">
              STOCKS AND SHARES
            </li>
            <li className="cursor-pointer hover:text-pink-300 transition">
              PERSONAL PENSION
            </li>
            <li className="cursor-pointer hover:text-pink-300 transition">
              GENERAL INVESTMENT ACCOUNT
            </li>
          </ul>
          <div className="flex gap-3 justify-end tracking-tight font-semibold items-center col-span-3  ">
            <h3 className="me-3 cursor-pointer hover:text-pink-300 transition">
              Support
            </h3>
            <h3 className="me-3 cursor-pointer hover:text-pink-300 transition">
              Login
            </h3>
            <ShimmerButton shimmerColor="#a21caf" className="px-5 py-1">
              Get in
            </ShimmerButton>
          </div>
        </div>
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
