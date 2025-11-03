import React from "react";
import {motion} from "framer-motion";
import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants"
const About = () => {
  return (
    <div className="relative pb-4 border-b border-neutral-800/50">
      {/* Titre de section avec effet */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative my-20 text-center"
      >
        <h2 className="mb-4 text-4xl font-bold text-transparent lg:text-5xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text">
          À Propos
        </h2>
        <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-cyan-400 to-purple-600" />
      </motion.div>

      <div className="flex flex-col items-center gap-12 mt-20 lg:flex-row">
        {/* Image centrée verticalement avec nouveau cadre */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center justify-center w-full lg:w-1/2 lg:justify-start"
        >
          <div className="relative group">
            {/* Cadre simple */}
            <div className="relative p-2 border-2 shadow-lg border-white/30 rounded-2xl">
              {/* Image avec cadre simple */}
              <motion.img 
                className="relative z-10 rounded-xl w-full h-auto lg:max-w-[350px] lg:max-h-[500px] object-cover" 
                src={aboutImg} 
                alt="about"
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              />
            </div>
          </div>
        </motion.div>
        
        {/* Texte à gauche avec style simple et élégant */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center w-full lg:w-1/2"
        >
            <div className="relative w-full max-w-4xl px-4 lg:px-8">
            {/* Texte avec guillemets élégants */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative"
            >
              {/* Guillemets d'ouverture */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="absolute font-serif text-6xl leading-none -top-4 -left-2 text-cyan-400/30"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                &ldquo;
              </motion.div>
              
              {/* Contenu principal */}
              <div className="px-6 lg:px-26">
                {ABOUT_TEXT.split(/\n\n+/).map((para, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.08, duration: 0.8 }}
                    className="mb-6 text-lg italic font-light leading-relaxed tracking-wide text-neutral-200"
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    {para}
                  </motion.p>
                ))}
              </div>
              
              {/* Guillemets de fermeture */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute font-serif text-6xl leading-none -bottom-4 -right-2 text-cyan-400/30"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                &rdquo;
              </motion.div>
            </motion.div>
            
            {/* Signature simple */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-8 text-right"
            >
              <div className="inline-block">
                <div className="w-16 h-px mb-2 bg-gradient-to-r from-transparent to-cyan-400" />
                <span className="text-sm font-medium tracking-wider text-cyan-400/80">
                  — Zakaria El Hajjam
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
