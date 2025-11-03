import React from "react";
import logo from "../assets/zakariaLogo.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion"; // Importer motion de framer-motion

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6 relative">
      {/* Background glassmorphism */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl" />
      
      <div className="relative z-10 flex flex-shrink-0 items-center">
        {/* Logo animé avec framer-motion amélioré */}
        <motion.div
          className="relative group"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <motion.img
            src={logo}
            alt="logo"
            className="mx-2 w-24 relative z-10"
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0,
            }}
            transition={{
              opacity: {
                duration: 1,
                ease: "easeOut",
              },
              scale: {
                type: "spring",
                stiffness: 100,
                damping: 20,
              },
              rotate: {
                duration: 0.8,
                ease: "easeOut",
              },
            }}
          />
          {/* Effet de halo au hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.div>
      </div>

      <div className="relative z-10 m-8 flex items-center justify-center gap-6 text-2xl">
        {[
          {
            icon: FaLinkedin,
            href: "https://www.linkedin.com/in/zakaria-el-hajjam-72815127a",
            label: "LinkedIn",
            color: "text-blue-400 hover:text-blue-300",
          },
          {
            icon: FaGithub,
            href: "https://github.com/ZakariaCode",
            label: "GitHub",
            color: "text-gray-300 hover:text-white",
          },
          {
            icon: FaInstagram,
            href: "https://www.instagram.com/zakar_ia566/",
            label: "Instagram",
            color: "text-pink-400 hover:text-pink-300",
          },
        ].map((social, index) => (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className={`group relative p-3 rounded-full transition-all duration-300 ${social.color} hover:scale-110`}
            whileHover={{ 
              scale: 1.1,
              y: -2,
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: index * 0.1,
              duration: 0.5,
            }}
          >
            {/* Background au hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Icône */}
            <social.icon className="relative z-10 text-2xl" />
            
            {/* Effet de brillance */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300" />
          </motion.a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
