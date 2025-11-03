import React from 'react'
import { EXPERIENCES } from '../constants'
import { motion } from 'framer-motion'
import { FaSuitcase } from 'react-icons/fa'  // Icône de valise pour les expériences professionnelles
import ExperienceItem from './ExperienceItem'
import DemenoLogo from '../assets/DemenoLogo.png'
import MAutomotivLogo from '../assets/MAutomotivLogo.png'

const Experience = () => {
  return (
    <div className="border-b border-neutral-800/50 pb-4 relative">
      {/* Titre de section avec effet */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.8 }}
        className="my-20 text-center relative"
      >
        <div className="flex items-center justify-center gap-4 mb-4">
          <FaSuitcase className="text-4xl text-yellow-400" />
          <h1 className="text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text">
            Expériences Professionnelles
          </h1>
        </div>
        <div className="w-40 h-1 bg-gradient-to-r from-yellow-400 to-red-500 mx-auto rounded-full" />
      </motion.div>

      <div className="relative">
        {/* Ligne de timeline */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-400 via-orange-500 to-red-500 opacity-30" />
        
        {EXPERIENCES.map((experience, index) => {
          // Sélectionner le logo approprié
          const companyLogo = experience.company === "M‑Automotiv" ? MAutomotivLogo : DemenoLogo;
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative mb-12 flex flex-wrap lg:justify-center"
            >
              {/* Point de timeline */}
              <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full border-4 border-slate-950 z-10" />
              
              {/* Carte de contenu */}
              <div className="ml-16 w-full max-w-4xl">
                <motion.div
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="relative bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-xl group hover:shadow-yellow-500/20 transition-all duration-500"
                >
                  {/* Effet de gradient au hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 via-orange-500/5 to-red-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    {/* En-tête avec logo, entreprise, lieu et date */}
                    <motion.div
                      className="mb-6"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-4">
                          {/* Logo de l'entreprise */}
                          <div className="w-16 h-16 rounded-xl bg-white/10 p-2 border border-white/20">
                            <img
                              src={companyLogo}
                              alt={`Logo ${experience.company}`}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <div>
                            <h5 className="text-xl font-bold text-white group-hover:text-yellow-300 transition-colors duration-300">
                              {experience.company}
                            </h5>
                            <p className="text-sm text-neutral-300">
                              {experience.company === "M‑Automotiv" ? "Casablanca" : "Rabat"}
                            </p>
                          </div>
                        </div>
                        <div>
                          <span className="inline-block px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-red-500/20 text-yellow-300 rounded-full text-sm font-semibold border border-yellow-400/30">
                            {experience.year}
                          </span>
                        </div>
                      </div>
                    </motion.div>

                    {/* Titre du projet */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="mb-4"
                    >
                      <h4 className="text-lg font-semibold text-cyan-300 mb-2 group-hover:text-cyan-200 transition-colors duration-300">
                        {experience.title}
                      </h4>
                    </motion.div>

                    {/* Rôle */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <h6 className="mb-4 text-xl font-bold text-white group-hover:text-yellow-300 transition-colors duration-300">
                        {experience.role}
                      </h6>
                    </motion.div>

                    {/* Description avec puces */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="mb-4"
                    >
                      <ul className="list-disc pl-5 text-neutral-300 leading-relaxed space-y-2">
                        {experience.description.map((point, pointIndex) => (
                          <motion.li
                            key={pointIndex}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7 + index * 0.1 + pointIndex * 0.1 }}
                            className="group-hover:text-white transition-colors duration-300"
                          >
                            {point}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>

                    {/* Technologies */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      className="flex flex-wrap gap-2"
                    >
                      {experience.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="bg-gradient-to-r from-yellow-500/20 to-red-500/20 text-yellow-300 px-3 py-1 rounded-full text-sm border border-yellow-400/30 backdrop-blur-sm"
                          whileHover={{ 
                            scale: 1.05,
                            backgroundColor: "rgba(251, 191, 36, 0.3)"
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>

                    {/* Effet de particules flottantes */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      {[...Array(4)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-yellow-400/40 rounded-full"
                          style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                          }}
                          animate={{
                            y: [0, -15, 0],
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
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  )
}

export default Experience
