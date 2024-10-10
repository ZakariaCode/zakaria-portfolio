import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `En tant qu'élève ingénieur spécialisé en développement Full Stack, je mets en œuvre une expertise technique approfondie pour concevoir des applications web à la fois performantes et esthétiques. Fort d'une année d'expérience professionnelle, j'ai acquis une maîtrise des technologies front-end telles que React et Next.js, ainsi que des compétences solides en back-end avec Node.js et dans les bases de données comme MySQL, PostgreSQL et MongoDB. Mon approche est marquée par une volonté constante d'innovation et d'apprentissage, et je m'efforce d’apporter des solutions techniques qui répondent aux exigences élevées tout en améliorant l'expérience utilisateur. Mon objectif est de contribuer efficacement à des projets ambitieux en utilisant mes compétences pour générer des résultats tangibles et soutenir le développement des entreprises.`;

export const ABOUT_TEXT = `En tant que développeur Full Stack passionné et polyvalent, je combine mon expertise technique avec une expérience en design graphique pour créer des applications web à la fois efficaces et esthétiques. Avec une expérience professionnelle d'une année, j'ai travaillé avec une variété de technologies, telles que React, Next.js, Node.js, MySQL, PostgreSQL et MongoDB. Mon intérêt pour le développement web a commencé par une curiosité profonde pour le fonctionnement des technologies et a évolué en une carrière où je cherche constamment à apprendre et à relever de nouveaux défis. J'évolue avec aisance dans des environnements collaboratifs, où je résous des problèmes complexes pour offrir des solutions de haute qualité. En dehors du codage, je reste actif, explore de nouvelles technologies.`;

export const EDUCATION = [
  {
    year: "2023 - Present",
    role: "Élève Ingénieur en Informatique",
    company: "Ensa Khouribga",
    description: `Formation approfondie en développement informatique, intégrant l'utilisation de différents langages de programmation et la gestion de projets majeurs.`,
    technologies: ["C++", "HTML", "CSS", "SQL","JAVA","PHP","JavaScript"],
  },
  {
    year: "2021 - 2023",
    role: "Étudiant",
    company: "Ensa Khouribga",
    description: `Classes préparatoires intégrées`,
    technologies: ["Algorithmique", "C", "Python", "Matlab"],
  },
  {
    year: "2020 - 2021",
    role: "Bachelier",
    company: "Lycée Mohamed VI",
    description: `Baccalauréat scientifique, sciences physiques avec mention très bien.`,
    technologies: [],
  },
];

export const PROJECTS = [
  {
    title: "Centre de Cours et soutien scolaire",
    image: project1,
    description:
      "Une application web pour la gestion d'un centre de cours et de soutien scolaire, avec des fonctionnalités telles que la gestion des étudiants, des enseignants, des cours et des paiements.",
    technologies: ["HTML", "CSS", "Php", "SQL"],
  },
  {
    title: "Gestionnaire des tâches académiques",
    image: project2,
    description:
      "une application descktop destiné aux enseignants pour la gestion de leurs projets et tâches , incluant des fonctionnalités telles que la création de projets, l'ajout de tâches, et la gestion des deadlines , l'organisation des séances de cours.",
    technologies: ["JAVA"],
  },
  {
    title: "Portfolio",
    image: project3,
    description:
      "Un site web personnel destiné à présenter mon profil, les projets réalisés, les compétences acquises et mes coordonnées pour me contacter.",
    technologies: ["React", "Tailwind CSS"]
  },
];

export const CONTACT = {
  address: "Casablanca , Morocco",
  phoneNo: "06 07 35 36 45",
  email: "elhajjamzakaria1@gmail.com",
};
