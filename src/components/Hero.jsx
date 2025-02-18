import React, { useEffect, useState } from "react";
import { HERO_CONTENT } from "../constants";
import profilPic from "../assets/zakariaProfile.png";
import { motion } from "framer-motion";

// Fonction qui découpe le texte en lettres individuelles
const splitText = (text) => {
  return text.split("").map((letter, index) => ({
    letter,
    id: index,
  }));
};

// Fonction d'animation de chaque lettre
const letterAnimation = (index, textIndex) => ({
  opacity: textIndex >= index ? 1 : 0,
  scale: textIndex >= index ? 1 : 0.98, // Effet de zoom subtile
  transition: {
    delay: index * 0.1, // Temps d'attente pour chaque lettre
    duration: 0.5, // Durée de l'animation pour chaque lettre
    ease: "easeInOut", // Courbe d'accélération prédéfinie
  },
});

const container = (delay) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: delay,
      duration: 0.3,
    },
  },
});

const Hero = () => {
  const name = "El Hajjam Zakaria"; // Nom à afficher
  const letters = splitText(name); // Diviser le texte en lettres

  const [textIndex, setTextIndex] = useState(0); // Suivre l'index des lettres affichées
  const [isTyping, setIsTyping] = useState(true); // Pour savoir si le texte est encore en train de s'écrire

  useEffect(() => {
    let interval;

    // Animation de la saisie
    if (isTyping) {
      interval = setInterval(() => {
        setTextIndex((prevIndex) => {
          const nextIndex =
            prevIndex < letters.length ? prevIndex + 1 : prevIndex;
          if (nextIndex === letters.length) {
            setIsTyping(false); // Arrêter l'animation quand tout est écrit
          }
          return nextIndex;
        });
      }, Math.random() * 120 + 100); // Variation aléatoire du délai
    }

    return () => clearInterval(interval);
  }, [isTyping, textIndex]);

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap items-center justify-between h-full">
        <div className="w-full lg:w-1/2 flex items-center">
          <div className="flex flex-col items-center lg:items-start">
            {/* Animation du nom avec effet de lettre par lettre */}
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="text-5xl lg:text-5xl space-x-1 font-serif font-semibold leading-tight mb-6 text-shadow-md"
            >
              {letters.map((letter, index) => (
                <motion.span
                  key={letter.id}
                  initial={{ opacity: 0, scale: 0.95 }} // Effet initial
                  animate={letterAnimation(index, textIndex)} // Animation avec easing et scaling
                  transition={{
                    delay: index * 0.1,
                    duration: 0.5,
                    ease: "easeInOut", // Utilisation de "easeInOut" prédéfini
                  }}
                >
                  {letter.letter}
                </motion.span>
              ))}
            </motion.h1>

            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate={{
                opacity: 1,
                transform: "translateY(0)", // Animation de déplacement vertical
              }}
              transition={{
                delay: 0.5,
                duration: 1,
                ease: "easeInOut", // Courbe d'accélération prédéfinie
              }}
              className="text-3xl font-medium text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text tracking-tight"
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
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 1.2, ease: "easeInOut" }} // Utilisation de "easeInOut"
            src={profilPic}
            alt="zakaria"
            className="rounded-full max-w-[400px] h-auto"
          />
        </div>
      </div>

      {/* Curseur clignotant en blanc avec effet de zoom */}
      {isTyping && (
        <motion.div
          animate={{
            opacity: [1, 0, 1],
            scale: [1, 1.1, 1], // Légère animation de zoom pour attirer l'attention
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 0.7,
            ease: "easeInOut", // Utilisation de "easeInOut"
          }}
          className="inline-block w-2 h-8 bg-white ml-2"
        />
      )}
    </div>
  );
};

export default Hero;
