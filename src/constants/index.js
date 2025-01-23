import im1 from "../assets/projects/1.png";
import im2 from "../assets/projects/2.png";
import im3 from "../assets/projects/3.png";
import im4 from "../assets/projects/4.png";
import im5 from "../assets/projects/5.png";
import im6 from "../assets/projects/6.png";
import im7 from "../assets/projects/7.png";

import img1 from "../assets/projects/t1.png";
import img2 from "../assets/projects/t2.png";
import img3 from "../assets/projects/t3.png";
import img4 from "../assets/projects/t4.png";
import img5 from "../assets/projects/t5.png";
import img6 from "../assets/projects/t6.png";
import img8 from "../assets/projects/t8.png";
import r1 from "../assets/projects/r1.png";
import r2 from "../assets/projects/r2.png";
import r3 from "../assets/projects/r3.png";
import r4 from "../assets/projects/r4.png";
import r5 from "../assets/projects/r5.png";
export const HERO_CONTENT = `En tant qu'élève ingénieur à l'École Nationale des Sciences Appliquées de Khouribga, je mets en œuvre une expertise technique approfondie pour concevoir des applications performantes, esthétiques et sécurisées. Fort d'une année d'expérience professionnelle, j'ai acquis une maîtrise des technologies front-end telles que React, Next.js et Laravel, ainsi que des compétences solides en back-end avec Node.js, Spring Boot, et en gestion de bases de données comme MySQL, PostgreSQL et MongoDB. J'ai également une expérience avec des outils de test tels que Postman et des outils de collaboration d'équipe comme Jira, ainsi que des plateformes de partage de code comme GitHub. Mon approche est marquée par une volonté constante d'innovation et d'apprentissage, et je m'efforce de proposer des solutions techniques qui répondent aux exigences élevées tout en améliorant l'expérience utilisateur. Mon objectif est de contribuer efficacement à des projets ambitieux, en utilisant mes compétences pour générer des résultats tangibles et soutenir le développement des entreprises.`;

export const ABOUT_TEXT = `Passionné par le développement web, je m'efforce de combiner ma créativité et mes compétences techniques pour concevoir des expériences numériques à la fois efficaces et esthétiques. J'ai acquis une solide compréhension des environnements Mac et Windows, ce qui me permet d'adapter mes solutions à différents systèmes et besoins. Mon parcours est marqué par une curiosité constante pour les technologies, qui m'a poussé à développer une carrière axée sur l'apprentissage continu et la recherche de nouveaux défis. Travaillant facilement en équipe, je suis toujours en quête de solutions innovantes et de haute qualité. En dehors de mon travail, je m'investis activement dans l'exploration des dernières tendances et technologies pour enrichir ma pratique.`;

export const EDUCATION = [
  {
    year: "2023 - Present",
    role: "Élève Ingénieur en Informatique",
    company: "Ecole Nationale Des Sciences Appliquées Khouribga",
    description: `Formation approfondie en développement informatique, intégrant l'utilisation de différents langages de programmation et la gestion de projets majeurs.`,
  },
  {
    year: "2021 - 2023",
    role: "Étudiant",
    company: "Ecole Nationale Des Sciences Appliquées Khouribga",
    description: `Classes préparatoires intégrées.`,
  },
  {
    year: "2020 - 2021",
    role: "Bachelier",
    company: "Lycée Mohamed VI",
    description: `Baccalauréat scientifique, sciences physiques avec mention très bien.`,
  },
];

export const PROJECTS = [
  {
    title: "Centre de Cours et soutien scolaire",
    image: [im1, im2, im3, im4, im5, im6, im7],
    description:
      "Une application web pour la gestion d'un centre de cours et de soutien scolaire, avec des fonctionnalités telles que la gestion des étudiants, des enseignants, des cours et des paiements.",
    technologies: ["HTML", "CSS", "Php", "SQL"],
    githubLink: "https://github.com/ZakariaCode/CentreFormations.git",
  },
  {
    title: "Résolution des Systèmes Linéaire",
    image: [r1, r2, r3, r4, r5],
    description:
      "Une application web permettant de résoudre des problèmes de programmation linéaire avec les méthodes Simplex, Big M et Simplex à deux phases. Elle offre une interface interactive pour la gestion des paramètres et affiche les solutions optimales .",
    technologies: [
      "React",
      "Flask",
      "Axios",
    ],
    githubLink: "https://github.com/ZakariaCode/resoluteur-programmation-lineaire.git",
  },
  {
    title: "Gestionnaire des tâches académiques",
    image: [img1, img2, img3, img4, img5, img6, img8],
    description:
      "une application desktop destiné aux enseignants pour la gestion de leurs projets et tâches , incluant des fonctionnalités telles que la création de projets, l'ajout de tâches, et la gestion des deadlines , l'organisation des séances de cours.",
    technologies: ["JAVA", "MYSQL", "SWING"],
    githubLink: "https://github.com/ZakariaCode/GestionProjetsTaches.git",
  },
];
export const EXPERIENCES = [
  {
    year: "Juillet 2024",
    role: "Développeur Full Stack, Application web de mise en correspondance entre candidats et offres d'emploi",
    company: "Demeno Group",
    description: `• Développé un tableau de bord admin pour visualiser les statistiques des candidats, offres d'emploi et recruteurs.
• Automatisé l'envoi d'e-mails hebdomadaires pour confirmer la disponibilité des candidats.
• Implémenté une fonctionnalité permettant aux candidats de modifier leur statut de disponibilité depuis leur profil.
• Conçu une section de contact pour faciliter la communication avec les utilisateurs.
• Mise en place d'un système de blocage des comptes pour les candidats indisponibles.`,
    technologies: ["Next.js", "Prisma", "Postman", "GitHub", "Jira"],
  },
];

export const CONTACT = {
  address: "Casablanca , Morocco",
  phoneNo: "06 07 35 36 45",
  email: "elhajjamzakaria1@gmail.com",
};
