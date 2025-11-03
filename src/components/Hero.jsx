import React, { useEffect, useState } from "react";
// import { HERO_CONTENT } from "../constants";
import profilPic from "../assets/zakariaProfile.jpg";
import { motion } from "framer-motion";
import {FaDownload} from "react-icons/fa";

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
    <div className="relative pb-4 border-b border-neutral-800/50 lg:mb-35">
      {/* Effet de particules flottantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-cyan-400/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-wrap items-center justify-between h-full">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            {/* Animation du nom avec effet de lettre par lettre amélioré */}
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="mb-12 space-x-1 font-serif text-5xl font-bold leading-tight text-white lg:text-6xl"
              style={{
                textShadow: '0 0 30px rgba(59, 130, 246, 0.3)',
              }}
            >
              {letters.map((letter, index) => (
                <motion.span
                  key={letter.id}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={letterAnimation(index, textIndex)}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  className="inline-block text-transparent bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text"
                  style={{
                    textShadow: '0 0 20px rgba(59, 130, 246, 0.4)',
                  }}
                >
                  {letter.letter}
                </motion.span>
              ))}
            </motion.h1>

            <motion.div
              variants={container(0.5)}
              initial="hidden"
              animate={{
                opacity: 1,
                transform: "translateY(0)",
              }}
              transition={{
                delay: 0.8,
                duration: 1.2,
                ease: "easeOut",
              }}
              className="relative "
            >
              <span className="text-2xl font-medium tracking-tight text-transparent lg:text-3xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text">
                FUTUR INGÉNIEUR EN DÉVELOPPEMENT ET QUALITÉ LOGICIELLE
              </span>
              {/* Effet de brillance */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                }}
              />
            </motion.div>

            <motion.a
              href={import.meta.env.BASE_URL + "Cv_ElHajjamZakaria.pdf"}
              download="Cv_ElHajjamZakaria"
              className="relative inline-block px-10 py-5 mt-8 overflow-hidden text-lg font-bold text-white transition-all duration-500 shadow-2xl group rounded-2xl"
              whileHover={{ 
                scale: 1.08,
                y: -5,
                boxShadow: "0 20px 40px rgba(6, 182, 212, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Background gradient principal */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600" />
              
              {/* Background gradient animé au hover */}
              <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 group-hover:opacity-100" />
              
              {/* Effet de brillance qui traverse le bouton */}
              <div className="absolute inset-0 transition-all duration-700 opacity-0 bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:opacity-100 group-hover:translate-x-full" />
              
              {/* Bordure animée */}
              <div className="absolute inset-0 transition-opacity duration-500 opacity-0 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 group-hover:opacity-100" 
                   style={{ padding: '2px' }}>
                <div className="w-full h-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 rounded-2xl" />
              </div>
              
              {/* Contenu du bouton */}
              <div className="relative z-10 flex items-center justify-center gap-4">
              
                <span className="tracking-wide">Download mon CV</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ 
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 2
                  }}
                  className="text-xl"
                >
                  ↓
                </motion.div>
              </div>
              
              {/* Effet de particules autour du bouton */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 rounded-full bg-white/60"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>
            </motion.a>
          </div>
        </div>

        <div className="flex items-center justify-center w-full lg:w-1/2 lg:p-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
            className="relative group"
          >
            {/* Fond avec effet de halo */}
            <div className="absolute inset-0 scale-125 rounded-full bg-gradient-to-r from-cyan-400/30 via-blue-500/30 to-purple-500/30 blur-3xl" />
            
            {/* Image de profil circulaire agrandie */}
            <div className="relative z-10 overflow-hidden rounded-full shadow-2xl w-96 h-96">
              <img
                src={profilPic}
                alt="zakaria"
                className="object-cover w-full h-full"
              />
              
              {/* Overlay avec gradient radial */}
              <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/20" />
            </div>
            
            {/* Décoration en anneau */}
            <div className="absolute inset-0 scale-110 border-2 rounded-full border-cyan-400/40" />
            <div className="absolute inset-0 border rounded-full border-purple-400/30 scale-120" />
          </motion.div>
        </div>
      </div>

    </div>
  );
};

export default Hero;
