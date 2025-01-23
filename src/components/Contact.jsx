import React from 'react';
import { CONTACT } from '../constants';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaDownload } from 'react-icons/fa'; 

const Contact = () => {
  return (
    <div className="border-b border-neutral-700 pb-20 bg-neutral-900">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl font-semibold text-white"
      >
        Contactez-nous
      </motion.h1>

      <div className="text-center tracking-tight">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4 text-lg text-gray-300 flex justify-center items-center gap-2"
        >
          <FaMapMarkerAlt className="text-sky-500 w-5 h-5" /> {CONTACT.address}
        </motion.p>

        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4 text-lg text-gray-300 flex justify-center items-center gap-2"
        >
          <FaPhoneAlt className="text-sky-500 w-5 h-5" /> {CONTACT.phoneNo}
        </motion.p>

        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4 text-lg text-gray-300 flex justify-center items-center gap-2"
        >
          <FaEnvelope className="text-sky-500 w-5 h-5" /> 
          <a href={`mailto:${CONTACT.email}`} className="text-sky-500-400 hover:underline">{CONTACT.email}</a>
        </motion.p>
        
        <motion.a
          href="/Zakaria_CV.pdf" // Remplace par le chemin réel de ton CV
          download="Zakaria_CV"
          className="inline-block mt-6 px-6 py-2 bg-sky-500 text-white rounded-lg text-lg font-medium shadow-md hover:bg-sky-500-dark transition-colors duration-300"
        >
          <FaDownload className="inline-block mr-2" /> Télécharger mon CV
        </motion.a>
      </div>
    </div>
  );
};

export default Contact;
