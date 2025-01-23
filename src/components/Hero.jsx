import React from "react";
import { HERO_CONTENT } from "../constants";
import profilPic from "../assets/zakariaProfile.png";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: delay,
      duration: 0.5,
    },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap items-center justify-between h-full">
        <div className="w-full lg:w-1/2 flex items-center">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="text-5xl lg:text-6xl font-serif font-semibold leading-tight mb-6"
            >
              El Hajjam Zakaria
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="text-3xl font-medium text-transparent bg-gradient-to-r from-pink-400 via-slate-600 to-purple-600 bg-clip-text tracking-tight"
            >
              ÉLÈVE INGÉNIEUR EN INFORMATIQUE
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="mt-4 max-w-3xl text-xl font-light leading-relaxed tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8 flex items-center justify-center">
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 1.2 }}
            src={profilPic}
            alt="zakaria"
            className="rounded-full max-w-[400px] h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
