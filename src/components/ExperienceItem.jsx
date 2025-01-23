import React from "react";
import { motion } from "framer-motion";

const ExperienceItem = ({ year, role, company, description, technologies }) => {
  const descriptionPoints = description
    .split(".")
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
        {/* Affichage de chaque point de la description dans un paragraphe */}
        {descriptionPoints.map((point, index) => (
          <p key={index} className="mb-4 text-neutral-400">
            {point}.
          </p>
        ))}

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
