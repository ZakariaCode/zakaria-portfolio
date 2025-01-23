import React from 'react'
import { EXPERIENCES } from '../constants'
import { motion } from 'framer-motion'
import { FaSuitcase } from 'react-icons/fa'  // Icône de valise pour les expériences professionnelles
import ExperienceItem from './ExperienceItem'

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-medium  flex items-center justify-center gap-4"
      >
        <FaSuitcase className="text-4xl text-yellow-200" /> 
        Expériences Professionnelles
      </motion.h1>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <ExperienceItem
            key={index}
            year={experience.year}
            role={experience.role}
            company={experience.company}
            description={experience.description}
            technologies={experience.technologies}
          />
        ))}
      </div>
    </div>
  )
}

export default Experience
