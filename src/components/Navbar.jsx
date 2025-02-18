import React from "react";
import logo from "../assets/zakariaLogo.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion"; // Importer motion de framer-motion

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        {/* Logo animé avec framer-motion */}
        <motion.img
          src={logo}
          alt="logo"
          className="mx-2 w-24"
          initial={{ opacity: 0, scale: 0.8 }} // Effet initial
          animate={{
            opacity: 1,
            scale: 1,
          }} // Effet final
          transition={{
            opacity: {
              duration: 1, // Durée de l'animation de l'opacité
              ease: "easeOut", // Courbe d'accélération pour l'opacité
            },
            scale: {
              type: "spring", // Utilisation de spring pour le rebond
              stiffness: 100, // Rigidité (contrôle de la vitesse du rebond)
              damping: 20, // <Amortissement></Amortissement> (plus la valeur est grande, plus le rebond sera lent et doux)
            },
          }}
        />
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/zakaria-el-hajjam-72815127a"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/ZakariaCode"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/zakar_ia566/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
