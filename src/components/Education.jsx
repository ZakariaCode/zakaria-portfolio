import React from 'react'
import { EDUCATION } from '../constants'
import { motion } from 'framer-motion'
import { FaGraduationCap } from 'react-icons/fa'  // Import de l'icône de graduation

const Education = () => {
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
          <FaGraduationCap className="text-4xl text-green-400" />
          <h1 className="text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-green-400 via-emerald-500 to-cyan-500 bg-clip-text">
            Formation
          </h1>
        </div>
        <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-cyan-500 mx-auto rounded-full" />
      </motion.div>

      <div className="relative">
        {/* Ligne de timeline */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400 via-emerald-500 to-cyan-500 opacity-30" />
        
        {EDUCATION.map((experience, index) => (
          <motion.div 
            className="relative mb-12 flex flex-wrap lg:justify-center" 
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {/* Point de timeline */}
            <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full border-4 border-slate-950 z-10" />
            
            {/* Carte de contenu */}
            <div className="ml-16 w-full max-w-4xl">
              <motion.div
                whileHover={{ scale: 1.02, x: 10 }}
                className="relative bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-xl group hover:shadow-green-500/20 transition-all duration-500"
              >
                {/* Effet de gradient au hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-emerald-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  {/* Année avec style amélioré */}
                  <motion.div
                    className="mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <span className="inline-block px-4 py-2 bg-gradient-to-r from-green-500/20 to-cyan-500/20 text-green-300 rounded-full text-sm font-semibold border border-green-400/30">
                      {experience.year}
                    </span>
                  </motion.div>

                  {/* Titre et entreprise */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <h6 className="mb-3 text-xl font-bold text-white group-hover:text-green-300 transition-colors duration-300">
                      {experience.role}
                    </h6>
                    <p className="text-lg text-green-200 font-medium mb-4">
                      {experience.company}
                    </p>
                  </motion.div>

                  {/* Description */}
                  <motion.p 
                    className="text-neutral-300 leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    {experience.description}
                  </motion.p>

                  {/* Effet de particules flottantes */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-green-400/40 rounded-full"
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
        ))}
      </div>
    </div>
  )
}

export default Education
