import React, { useState, useRef } from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { FaBriefcase, FaGithub } from 'react-icons/fa';

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const [activeImageIndexes, setActiveImageIndexes] = useState(
    PROJECTS.map(() => 0)
  );

  const intervalRefs = useRef(PROJECTS.map(() => null));

  const openModal = (image) => {
    setCurrentImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleNextImage = (projectIndex) => {
    setActiveImageIndexes((prevIndexes) => {
      const newIndexes = [...prevIndexes];
      const project = PROJECTS[projectIndex];
      newIndexes[projectIndex] =
        newIndexes[projectIndex] === project.image.length - 1
          ? 0
          : newIndexes[projectIndex] + 1;
      return newIndexes;
    });
  };

  const handlePrevImage = (projectIndex) => {
    setActiveImageIndexes((prevIndexes) => {
      const newIndexes = [...prevIndexes];
      const project = PROJECTS[projectIndex];
      newIndexes[projectIndex] =
        newIndexes[projectIndex] === 0
          ? project.image.length - 1
          : newIndexes[projectIndex] - 1;
      return newIndexes;
    });
  };

  const handleMouseEnter = (index) => {
    if (intervalRefs.current[index]) {
      clearInterval(intervalRefs.current[index]);
    }

    intervalRefs.current[index] = setInterval(() => {
      handleNextImage(index);
    }, 2000);
  };

  const handleMouseLeave = (index) => {
    if (intervalRefs.current[index]) {
      clearInterval(intervalRefs.current[index]);
      intervalRefs.current[index] = null;
    }
  };

  return (
    <div className="relative pb-16 border-b border-neutral-800/50">
      {/* Titre de section avec effet */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.8 }}
        className="relative my-20 text-center"
      >
        <div className="flex items-center justify-center gap-4 mb-4">
          <FaBriefcase className="text-4xl text-cyan-400" />
          <h1 className="text-4xl font-bold text-transparent lg:text-5xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text">
            Projets Académiques
          </h1>
        </div>
        <div className="w-32 h-1 mx-auto rounded-full bg-gradient-to-r from-cyan-400 to-purple-600" />
      </motion.div>

      <div className="grid grid-cols-1 gap-8 px-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{
              scale: 1.02,
              y: -10,
            }}
            className="relative group"
          >
            {/* Carte principale avec effet glassmorphism */}
            <div className="relative overflow-hidden transition-all duration-500 border shadow-2xl bg-white/10 backdrop-blur-md rounded-2xl border-white/20 group-hover:shadow-cyan-500/20">
              {/* Effet de gradient au hover */}
              <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 group-hover:opacity-100" />
              
              {/* Zone d'image avec effet de parallaxe */}
              <div className="relative w-full h-64 overflow-hidden sm:h-72 md:h-80 lg:h-96">
                <motion.div
                  className="flex h-full transition-transform duration-1000 ease-in-out"
                  style={{
                    transform: `translateX(-${activeImageIndexes[index] * 100}%)`,
                  }}
                >
                  {project.image.map((image, imgIndex) => (
                    <div key={imgIndex} className="flex-shrink-0 w-full h-full">
                      <img
                        src={image}
                        alt={`Image ${imgIndex + 1}`}
                        className="object-contain object-center w-full h-full"
                        onClick={(e) => { e.stopPropagation(); openModal(image); }}
                      />
                    </div>
                  ))}
                </motion.div>

                {/* Overlay avec effet de brillance */}
                <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/50 via-transparent to-transparent group-hover:opacity-100" />

                {/* Contrôles de navigation améliorés */}
                <button
                  onClick={() => handlePrevImage(index)}
                  className="absolute p-2 text-white transition-all duration-300 transform -translate-y-1/2 rounded-full opacity-0 left-2 top-1/2 bg-black/50 backdrop-blur-sm group-hover:opacity-100 hover:bg-black/70"
                >
                  &#8249;
                </button>
                <button
                  onClick={() => handleNextImage(index)}
                  className="absolute p-2 text-white transition-all duration-300 transform -translate-y-1/2 rounded-full opacity-0 right-2 top-1/2 bg-black/50 backdrop-blur-sm group-hover:opacity-100 hover:bg-black/70"
                >
                  &#8250;
                </button>

                {/* Indicateurs d'images */}
                <div className="absolute flex gap-1 transition-opacity duration-300 transform -translate-x-1/2 opacity-0 bottom-2 left-1/2 group-hover:opacity-100">
                  {project.image.map((_, imgIndex) => (
                    <div
                      key={imgIndex}
                      className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                        imgIndex === activeImageIndexes[index] ? 'bg-cyan-400' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Contenu de la carte (pas de navigation en cliquant la box) */}
              <div
                className="relative z-10 p-6"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                {/* Bouton GitHub dédié */}
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="absolute z-20 flex items-center justify-center p-2 text-white transition-colors duration-200 rounded-full shadow-lg top-4 right-4 bg-black/40 hover:bg-black/60"
                  aria-label={`Voir le code de ${project.title} sur GitHub`}
                >
                  <FaGithub className="text-lg" />
                </a>

                <h6 className="mb-3 text-xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-300">
                  {project.title}
                </h6>
                <p className="mb-4 text-sm leading-relaxed text-neutral-300">
                  {project.description}
                </p>

                {/* Technologies avec effet de brillance */}
                <div className="flex flex-wrap justify-center gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="px-3 py-1 text-sm border rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border-cyan-400/30 backdrop-blur-sm"
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: "rgba(6, 182, 212, 0.3)"
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Effet de particules flottantes */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 rounded-full bg-cyan-400/60"
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
          </motion.div>
        ))}
      </div>

      {/* Modal amélioré */}
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={closeModal}
        >
          <motion.div 
            className="relative p-4 rounded-2xl max-w-4xl max-h-[80vh] bg-white/10 backdrop-blur-md border border-white/20"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={currentImage}
              alt="Large Project"
              className="object-contain w-full h-auto mx-auto rounded-lg"
            />
            <button
              onClick={closeModal}
              className="absolute p-2 text-white transition-colors duration-200 rounded-full top-2 right-2 bg-black/50 hover:bg-black/70"
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Projects;
