'use client';
import { motion } from 'framer-motion';
import { useScroll } from 'framer-motion';
import { useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';

const NavbarWrapper = ({ children }: { children: React.ReactNode }) => {
  const { scrollYProgress } = useScroll();
  const [opa, setOpa] = useState(0);

  useMotionValueEvent(scrollYProgress, 'change', (arg) => {
    console.log(arg);
    if (arg > 0.02) {
      setOpa(1);
    } else {
      setOpa(0);
    }
  });

  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: '15%', opacity: 1 }}
      transition={{ delay: 0.2 }}
      style={{
        backgroundColor: `${opa ? 'rgba(1,1,1,0.5)' : 'rgba(0,0,0,1)'}`,
      }}
      className="h-20 z-20 w-full fixed backdrop-blur-sm text-white"
    >
      {children}
    </motion.div>
  );
};

export default NavbarWrapper;
