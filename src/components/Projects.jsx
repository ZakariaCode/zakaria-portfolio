import React, { useState, useRef } from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { FaBriefcase } from 'react-icons/fa';

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
    <div className="pb-16">
       <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-medium  flex items-center justify-center gap-4"
      >
        {/* Icône FaBriefcase avant le titre */}
        <FaBriefcase className="text-4xl text-gray-300" />
        Projets Académique
      </motion.h1>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 px-4">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
            }}
            transition={{ duration: 0.3 }}
            className="relative bg-white rounded-lg overflow-hidden shadow-md cursor-pointer group"
          >
            <div className="w-full h-auto overflow-hidden relative">
              <motion.div
                className="flex transition-transform duration-1000 ease-in-out"
                style={{
                  transform: `translateX(-${activeImageIndexes[index] * 100}%)`,
                }}
              >
                {project.image.map((image, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={image}
                    alt={`Image ${imgIndex + 1}`}
                    className="w-full h-full object-cover"
                    onClick={() => openModal(image)}
                  />
                ))}
              </motion.div>

              {/* Contrôles de navigation manuels */}
              <button
                onClick={() => handlePrevImage(index)}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white p-2 rounded-full"
              >
                &#8249;
              </button>
              <button
                onClick={() => handleNextImage(index)}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white p-2 rounded-full"
              >
                &#8250;
              </button>
            </div>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              <div
                className="p-4"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <h6 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h6>
                <p className="text-sm text-gray-600 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 justify-center">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          </motion.div>
        ))}
      </div>

      {/* Popup pour l'image */}
      {isModalOpen && (
        <div
          className="fixed top-[-100px] left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div className="relative p-4 rounded-lg max-w-4xl max-h-96">
            <img
              src={currentImage}
              alt="Large Project"
              className="w-full h-auto object-contain mx-auto"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
