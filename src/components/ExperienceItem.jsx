import React from "react";
import { motion } from "framer-motion";
import PropTypes from 'prop-types';

const ExperienceItem = ({ year, role, company, description, technologies }) => {
  // Accept either an array of points or a string (multi-line, bullets or sentences)
  const descriptionPoints = Array.isArray(description)
    ? description
    : String(description)
        .split(/\r?\n|\u2022|\u2023|•|\.|\t/) // split on newlines, bullet chars or periods
        .map((point) => point.trim())
        .filter(Boolean);

  return (
    <div className="mb-8 flex flex-wrap lg:justify-center">
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="w-full lg:w-1/4"
      >
        <p className="mb-2 text-sm text-neutral-400">{year}</p>
      </motion.div>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        className="w-full max-w-xl lg:w-3/4"
      >
        <h6 className="mb-2 font-semibold">
          {role} -{" "}
          <i>
            <span className="text-sm text-purple-100">{company}</span>
          </i>
        </h6>
        {/* Affichage sémantique des points de la description */}
        {descriptionPoints.length > 0 && (
          <ul className="mb-4 list-disc pl-5 text-neutral-400">
            {descriptionPoints.map((point, index) => (
              <li key={index} className="mb-2">
                {point}
              </li>
            ))}
          </ul>
        )}

        {/* Affichage des technologies */}
        {technologies && (
          <p className="text-sm text-neutral-300 mt-2 flex flex-wrap gap-3">
            <span className="bg-neutral-800 text-white font-bold py-1 px-3 rounded-full">
              {technologies.join(", ")}
            </span>
          </p>
        )}
      </motion.div>
    </div>
  );
};

export default ExperienceItem;

// Prop types for better linting and documentation
ExperienceItem.propTypes = {
  year: PropTypes.string,
  role: PropTypes.string,
  company: PropTypes.string,
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  technologies: PropTypes.arrayOf(PropTypes.string),
};
