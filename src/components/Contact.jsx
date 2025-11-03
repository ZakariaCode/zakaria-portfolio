import React from 'react';
import { CONTACT } from '../constants';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'; 

const Contact = () => {
  const contactItems = [
    {
      icon: FaMapMarkerAlt,
      label: "Adresse",
      value: CONTACT.address,
      color: "text-emerald-400",
      bgColor: "from-emerald-500/20 to-green-500/20",
      borderColor: "border-emerald-400/30",
    },
    {
      icon: FaPhoneAlt,
      label: "Téléphone",
      value: CONTACT.phoneNo,
      color: "text-blue-400",
      bgColor: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-400/30",
    },
    {
      icon: FaEnvelope,
      label: "Email",
      value: CONTACT.email,
      color: "text-purple-400",
      bgColor: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-400/30",
      isLink: true,
    },
  ];

  return (
    <div className="relative pb-20 border-b border-neutral-800/50">
      {/* Titre de section avec effet */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.8 }}
        className="relative my-20 text-center"
      >
        <h1 className="mb-4 text-4xl font-bold text-transparent lg:text-5xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text">
          Contactez-moi
        </h1>
        <div className="w-32 h-1 mx-auto rounded-full bg-gradient-to-r from-cyan-400 to-purple-600" />
        <p className="max-w-2xl mx-auto mt-6 text-lg text-neutral-400">
          N'hésitez pas à me contacter pour discuter de projets, opportunités ou simplement échanger sur le développement !
        </p>
      </motion.div>

      {/* Cartes de contact */}
      <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto md:grid-cols-3">
        {contactItems.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ 
              scale: 1.05,
              y: -10,
            }}
            className="relative group"
          >
            {/* Carte principale */}
            <div className={`relative bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-xl group-hover:shadow-cyan-500/20 transition-all duration-500 ${item.bgColor} bg-gradient-to-r`}>
              {/* Effet de gradient au hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${item.bgColor} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10 text-center">
                {/* Icône */}
                <motion.div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${item.bgColor} border ${item.borderColor} mb-6`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <item.icon className={`w-8 h-8 ${item.color}`} />
                </motion.div>

                {/* Label */}
                <h3 className="mb-3 text-lg font-semibold text-white transition-colors duration-300 group-hover:text-cyan-300">
                  {item.label}
                </h3>

                {/* Valeur */}
                <div className="text-neutral-300">
                  {item.isLink ? (
                    <a 
                      href={`mailto:${item.value}`} 
                      className={`${item.color} hover:text-cyan-300 transition-colors duration-300 hover:underline`}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="transition-colors duration-300 text-neutral-300 group-hover:text-white">
                      {item.value}
                    </span>
                  )}
                </div>

                {/* Effet de particules flottantes */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 rounded-full bg-cyan-400/40"
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
            </div>
          </motion.div>
        ))}
      </div>

      {/* Message d'encouragement */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-16 text-center"
      >
        <div className="relative max-w-4xl p-8 mx-auto border shadow-xl bg-white/5 backdrop-blur-md rounded-2xl border-white/10">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5 rounded-2xl" />
          <p className="relative z-10 text-lg leading-relaxed text-neutral-300">
            "N'importe quel imbécile peut écrire du code qu'un ordinateur peut comprendre. Les bons programmeurs écrivent du code que les humains peuvent comprendre."
            <br />
            <span className="block mt-2 font-semibold text-cyan-400">- Martin Fowler</span>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
