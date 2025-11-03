import React from "react";
import { motion } from "framer-motion";
import { FaBullhorn } from "react-icons/fa";
import enactusImage from "../assets/enactusImage.png"; // Remplacer par l'image de votre activité Enactus
import openSourceDaysImage from "../assets/openSourceImage.jpeg"; // Remplacer par l'image de votre activité Open Source Days

const Footer = () => {
  const activities = [
    {
      title: "Enactus",
      description: "Enactus est une organisation mondiale d'étudiants qui crée des projets sociaux à fort impact en utilisant des pratiques entrepreneuriales.",
      image: enactusImage,
      link: "https://www.enactus.org",
      color: "from-emerald-500 to-green-500",
      iconColor: "text-emerald-400",
    },
    {
      title: "Open Source Days",
      description: "Open Source Days est un événement annuel qui réunit des développeurs et des passionnés de technologie autour de l'open source.",
      image: openSourceDaysImage,
      link: "https://www.linkedin.com/company/open-source-days-ensakh/posts/?feedView=all",
      color: "from-blue-500 to-cyan-500",
      iconColor: "text-blue-400",
    },
  ];

  return (
    <footer className="relative py-16 text-white">
      {/* Background avec effet de gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
      
      <div className="container relative z-10 px-6 mx-auto">
        {/* Titre section Activités Parascolaires */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.8 }}
          className="relative my-12 text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <FaBullhorn className="text-4xl text-yellow-400" />
            <h1 className="text-4xl font-bold text-transparent lg:text-5xl bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text">
              Activités Parascolaires
            </h1>
          </div>
          <div className="w-40 h-1 mx-auto rounded-full bg-gradient-to-r from-yellow-400 to-red-500" />
          <p className="max-w-2xl mx-auto mt-6 text-lg text-neutral-400">
            Découvrez mes engagements et participations dans des initiatives qui me passionnent
          </p>
        </motion.div>

        {/* Cartes d'activités */}
        <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto md:grid-cols-2">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.02,
                y: -10,
              }}
              className="relative group"
            >
              {/* Carte principale */}
              <div className="relative p-8 transition-all duration-500 border shadow-xl bg-white/5 backdrop-blur-md rounded-2xl border-white/10 group-hover:shadow-cyan-500/20">
                {/* Effet de gradient au hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${activity.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />
                
                <div className="relative z-10 text-center">
                  {/* Image avec effet de halo */}
                  <motion.div
                    className="relative mb-6"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${activity.color} rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                    <img
                      src={activity.image}
                      alt={activity.title}
                      className="relative z-10 object-cover w-32 h-32 mx-auto border-4 rounded-full shadow-2xl border-white/20"
                    />
                  </motion.div>

                  {/* Titre */}
                  <h3 className={`text-2xl font-bold mb-4 group-hover:text-cyan-300 transition-colors duration-300 ${activity.iconColor}`}>
                    {activity.title}
                  </h3>

                  {/* Description */}
                  <p className="mb-6 leading-relaxed transition-colors duration-300 text-neutral-300 group-hover:text-white">
                    {activity.description}
                  </p>

                  {/* Lien */}
                  <motion.a
                    href={activity.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${activity.color} text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 group-hover:scale-105`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    En savoir plus
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </motion.a>

                  {/* Effet de particules flottantes */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 rounded-full bg-cyan-400/40"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                          y: [0, -20, 0],
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
                </div>
              </div>
            </motion.div>
          ))}
        </div>
       
      </div>
    </footer>
  );
};

export default Footer;
