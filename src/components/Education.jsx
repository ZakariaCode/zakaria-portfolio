import React from 'react'
import { EDUCATION } from '../constants'
import { motion } from 'framer-motion'
import { FaGraduationCap } from 'react-icons/fa'  // Import de l'icône de graduation

const Education = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-medium flex items-center justify-center gap-4"
      >
        <FaGraduationCap className="text-4xl text-green-400 " /> {/* Icône de graduation */}
        Education
      </motion.h1>
      <div>
        {EDUCATION.map((experience, index) => (
          <div className="mb-8 flex flex-wrap lg:justify-center" key={index}>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">
                {experience.role} -{' '}
                <i><span className="text-sm text-purple-100">{experience.company}</span></i>
              </h6>
              <p className="mb-4 text-neutral-400">{experience.description}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Education
