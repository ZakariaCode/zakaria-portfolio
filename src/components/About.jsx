import React from "react";
import {motion} from "framer-motion";
import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants"
const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <div className="flex flex-wrap mt-20">
        <motion.div
        whileInView={{opacity: 1, x:0}}
        initial={{opacity: 0, x: -100}}
        transition={{duration:0.5}}
         className="w-full lg:w-1/2 ">
          <div className="flex items-center justify-left">
            <img className="rounded-2xl max-w-[400px] max-h-[800px]" src={aboutImg} alt="about"></img>
          </div>
        </motion.div>
        <motion.div
        whileInView={{opacity: 1, x:0}}
        initial={{opacity: 0, x: 100}}
        transition={{duration:0.5}}
         className="w-full lg:w-1/2 ">
          <div className="mt-4 max-w-3xl text-xl font-light leading-relaxed tracking-tighter">
            <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
