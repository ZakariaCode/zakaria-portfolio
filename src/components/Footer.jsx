import React from "react";
import { motion } from "framer-motion";
import { FaBullhorn } from "react-icons/fa";
import enactusImage from "../assets/enactusImage.png"; // Remplacer par l'image de votre activité Enactus
import openSourceDaysImage from "../assets/openSourceImage.jpeg"; // Remplacer par l'image de votre activité Open Source Days

const Footer = () => {
  return (
    <footer className=" text-white py-16">
      <div className="container mx-auto px-6">
        {/* Titre section Activités Parascolaires */}
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="my-12 text-center text-3xl font-medium flex items-center justify-center gap-4"
        >
          <FaBullhorn className="text-3xl text-yellow-200" />
          Activités Parascolaires
        </motion.h1>

        <div className="flex flex-col md:flex-row justify-around items-center space-y-8 md:space-y-0">
          {/* Enactus Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            className="text-center max-w-xs"
          >
            <img
              src={enactusImage}
              alt="Enactus"
              className="w-36 h-36 object-cover rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Enactus</h3>
            <p className="text-sm mb-4">
              Enactus est une organisation mondiale d'étudiants qui crée des projets sociaux à fort impact en utilisant des pratiques entrepreneuriales.
            </p>
            <a
              href="https://www.enactus.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600"
            >
              En savoir plus
            </a>
          </motion.div>

          {/* Open Source Days Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
            className="text-center max-w-xs"
          >
            <img
              src={openSourceDaysImage}
              alt="Open Source Days"
              className="w-36 h-36 object-cover rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Open Source Days</h3>
            <p className="text-sm mb-4">
              Open Source Days est un événement annuel qui réunit des développeurs et des passionnés de technologie autour de l'open source.
            </p>
            <a
              href="https://www.linkedin.com/company/open-source-days-ensakh/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600"
            >
              En savoir plus
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
