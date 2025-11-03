import React from "react";
import { motion } from "framer-motion";
import {
  RiReactjsLine,
  RiJavascriptFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { TbBrandNextjs, TbBrandTypescript } from "react-icons/tb";
import {
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiRedis,
  SiSpringboot,
  SiRobotframework,
  SiCypress,
  SiJunit5,
  SiPostman,
  SiSonarqube,
  SiDocker,
  SiJenkins,
  SiGithubactions,
  SiGitlab,
  SiJira,
  SiNotion,
} from "react-icons/si";
import { FaNodeJs, FaJava, FaGithub } from "react-icons/fa";
import XrayIcon from "../assets/Xray.png";
import UmlIcon from "../assets/Uml.png";
import MeriseIcon from "../assets/Merise.png";
import { DiScrum } from "react-icons/di";
import { VscAzure } from "react-icons/vsc";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const categoryVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const iconVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
    },
  },
  hover: {
    scale: 1.15,
    y: -8,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

const TechIcon = ({ icon: Icon, name, color, delay = 0 }) => (
  <motion.div
    variants={iconVariants}
    initial="hidden"
    whileInView="visible"
    whileHover="hover"
    viewport={{ once: true }}
    className="flex flex-col items-center gap-2 cursor-pointer group"
    style={{ transitionDelay: `${delay}s` }}
  >
    <div className="relative">
      {/* Effet de halo au hover réduit */}
      <div className="absolute inset-0 transition-opacity duration-300 scale-105 opacity-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur-lg group-hover:opacity-30" />

      {/* Container principal avec effet glassmorphism */}
      <div className="relative p-4 transition-all duration-300 border-2 rounded-2xl border-white/20 bg-white/10 backdrop-blur-md group-hover:border-cyan-400/50 group-hover:bg-white/20 group-hover:shadow-md group-hover:shadow-cyan-500/10">
        {typeof Icon === "string" ? (
          <img
            src={Icon}
            alt={name}
            className="object-contain w-10 h-10 transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <Icon
            className={`text-4xl ${color} group-hover:scale-105 transition-transform duration-300`}
          />
        )}
      </div>
    </div>

    {/* Nom de la technologie toujours visible */}
    <span className="px-2 py-1 text-xs font-medium text-center transition-colors duration-300 border rounded-full text-neutral-300 bg-white/5 backdrop-blur-sm border-white/10 group-hover:text-cyan-300">
      {name}
    </span>
  </motion.div>
);

const TechCategory = ({ title, icon: Icon, technologies, delay = 0 }) => (
  <motion.div
    variants={categoryVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    className="mb-16"
  >
    <div className="flex items-center gap-3 mb-8">
      <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">
        {title}
      </h3>
      <div className="flex-1 h-px ml-4 bg-gradient-to-r from-neutral-700 to-transparent" />
    </div>

    <motion.div
      className="flex flex-wrap justify-start gap-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.05,
          },
        },
      }}
    >
      {technologies.map((tech, index) => (
        <TechIcon key={tech.name} {...tech} delay={index * 0.05} />
      ))}
    </motion.div>
  </motion.div>
);

const Technologies = () => {
  const techStack = [
    {
      title: "Développement Full Stack",
      subcategories: [
        {
          subtitle: "Frontend",
          technologies: [
            { icon: RiReactjsLine, name: "React", color: "text-cyan-400" },
            { icon: TbBrandNextjs, name: "Next.js", color: "text-white" },
            {
              icon: TbBrandTypescript,
              name: "TypeScript",
              color: "text-blue-500",
            },
            {
              icon: RiJavascriptFill,
              name: "JavaScript",
              color: "text-yellow-400",
            },
            {
              icon: RiTailwindCssFill,
              name: "Tailwind CSS",
              color: "text-cyan-400",
            },
          ],
        },
        {
          subtitle: "Backend",
          technologies: [
            { icon: FaJava, name: "Java", color: "text-red-500" },
            {
              icon: SiSpringboot,
              name: "Spring Boot",
              color: "text-green-500",
            },
            { icon: FaNodeJs, name: "Node.js", color: "text-green-500" },
          ],
        },
        {
          subtitle: "Bases de données",
          technologies: [
            { icon: SiPostgresql, name: "PostgreSQL", color: "text-sky-600" },
            { icon: SiMysql, name: "MySQL", color: "text-blue-600" },
            { icon: SiMongodb, name: "MongoDB", color: "text-green-500" },
            { icon: SiRedis, name: "Redis", color: "text-red-500" },
          ],
        },
      ],
    },
    {
      title : "Qualité Logicielle",
      subcategories: [
      {
        subtitle: "Framework et outils - Testing" ,
          technologies: [
            {
              icon: SiRobotframework,
              name: "Robot Framework",
              color: "text-gray-400",
            },
            { icon: SiCypress, name: "Cypress", color: "text-green-500" },
            { icon: SiJunit5, name: "JUnit", color: "text-red-500" },
            { icon: SiPostman, name: "Postman", color: "text-orange-500" },
            { icon: SiSonarqube, name: "SonarQube", color: "text-blue-400" },
            { icon: DiScrum, name: "Agile Scrum", color: "text-purple-400" },
          ],
      }
    ]
      
    },
    {
      title: "DevOps & Collaboration",
      subcategories: [
        {
          subtitle: "Conteneurisation",
          technologies: [
            { icon: SiDocker, name: "Docker", color: "text-blue-500" },
          ],
        },
        {
          subtitle: "CI/CD",
          technologies: [
            {
              icon: SiGithubactions,
              name: "GitHub Actions",
              color: "text-blue-400",
            },
            { icon: SiJenkins, name: "Jenkins", color: "text-red-600" },
            { icon: SiGitlab, name: "GitLab CI/CD", color: "text-orange-600" },
          ],
        },
        {
          subtitle: "Collaboration",
          technologies: [
            { icon: FaGithub, name: "GitHub", color: "text-white" },
            { icon: SiGitlab, name: "GitLab", color: "text-orange-600" },
            { icon: SiJira, name: "Jira", color: "text-blue-600" },
            { icon: XrayIcon, name: "Xray", color: "" },
            { icon: SiNotion, name: "Notion", color: "text-white" },
          ],
        },
        {
          subtitle: "Conception",
          technologies: [
            { icon: UmlIcon, name: "UML", color: "" },
            { icon: MeriseIcon, name: "Merise", color: "" },
          ],
        },
      ],
    },
  ];

  return (
    <div className="relative px-4 pb-24 border-b border-neutral-800/50">
      {/* Titre de section avec effet */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative my-20 text-center"
      >
        <h1 className="mb-4 text-5xl font-bold text-transparent lg:text-6xl bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text">
          Technologies & Outils
        </h1>
        <div className="w-40 h-1 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400" />
        <p className="max-w-2xl mx-auto text-lg text-neutral-400">
          Stack technique et expertise professionnelle que j'utilise pour créer
          des solutions innovantes
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto max-w-7xl"
      >
        {/* Grid layout horizontal pour les grandes catégories */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {techStack.map((category, idx) => (
            <motion.div
              key={category.title}
              className="space-y-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              {/* Titre de la catégorie principale simplifié */}
              <motion.div
                variants={categoryVariants}
                className="mb-8 text-center"
              >
                <div className="inline-flex flex-col items-center gap-4">
                  <h3 className="text-xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">
                    {category.title}
                  </h3>
                </div>
              </motion.div>

              {/* Technologies directes ou sous-catégories */}
              {category.technologies ? (
                <motion.div
                  className="flex flex-wrap justify-center gap-12"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.05,
                      },
                    },
                  }}
                >
                  {category.technologies.map((tech, index) => (
                    <TechIcon key={tech.name} {...tech} delay={index * 0.05} />
                  ))}
                </motion.div>
              ) : (
                <div className="space-y-12">
                  {category.subcategories.map((sub, subIdx) => (
                    <motion.div
                      key={sub.subtitle}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: subIdx * 0.1 }}
                    >
                      <h4 className="flex items-center justify-center gap-2 mb-8 text-sm font-semibold text-neutral-400">
                        <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
                        {sub.subtitle}
                      </h4>
                      <motion.div
                        className="flex flex-wrap justify-center gap-12"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                          visible: {
                            transition: {
                              staggerChildren: 0.05,
                            },
                          },
                        }}
                      >
                        {sub.technologies.map((tech, index) => (
                          <TechIcon
                            key={tech.name}
                            {...tech}
                            delay={index * 0.05}
                          />
                        ))}
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Technologies;
