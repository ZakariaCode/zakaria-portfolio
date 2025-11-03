import im1 from "../assets/projects/1.png";
import im2 from "../assets/projects/2.png";
import im3 from "../assets/projects/3.png";
import im4 from "../assets/projects/4.png";
import im5 from "../assets/projects/5.png";
import im6 from "../assets/projects/6.png";
import im7 from "../assets/projects/7.png";

import N1 from '../assets/N1.png';
import N2 from '../assets/N2.png';
import N3 from '../assets/N3.png';
import N4 from '../assets/N4.png';

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
import Acceuil from "../assets/projects/Acceuil.png";
import dark from "../assets/projects/dark.png";
import Aboutus from "../assets/projects/AboutUs.png";
import AllCars from "../assets/projects/AllCars.png";
import Search from "../assets/projects/Search.png";
import FullSignIn from "../assets/projects/FullSignIn.png";
import Reservation from "../assets/projects/Reservation.png";
import Paiement from "../assets/projects/Paiement.png";
import Avis from "../assets/projects/Avis.png";
import VehiculesAdmin from "../assets/projects/VehiculesAdmin.png";
import DashboardJenkins from "../assets/projects/DashboardJenkins.png";
import Repport from "../assets/projects/Repport.png";
import NotificationEmail from "../assets/projects/NotificationEmail.png";

// export const HERO_CONTENT = `En tant qu'élève ingénieur à l'École Nationale des Sciences Appliquées de Khouribga, je mets en œuvre une expertise technique approfondie pour concevoir des applications performantes, esthétiques et sécurisées. Fort d'une année d'expérience professionnelle, j'ai acquis une maîtrise des technologies front-end telles que React, Next.js et Laravel, ainsi que des compétences solides en back-end avec Node.js, Spring Boot, et en gestion de bases de données comme MySQL, PostgreSQL et MongoDB. J'ai également une expérience avec des outils de test tels que Postman et des outils de collaboration d'équipe comme Jira, ainsi que des plateformes de partage de code comme GitHub. Mon approche est marquée par une volonté constante d'innovation et d'apprentissage, et je m'efforce de proposer des solutions techniques qui répondent aux exigences élevées tout en améliorant l'expérience utilisateur. Mon objectif est de contribuer efficacement à des projets ambitieux, en utilisant mes compétences pour générer des résultats tangibles et soutenir le développement des entreprises.`;

export const ABOUT_TEXT = `Passionné par le développement full stack et l'assurance qualité logicielle, je me spécialise dans la conception de solutions complètes couvrant l'ensemble du cycle applicatif : de la conception des architectures à l'automatisation des tests et au déploiement via pipelines CI/CD.

Mon approche technique repose sur une maîtrise solide des fondamentaux de l'algorithmique et de la programmation, combinée à une expertise des frameworks modernes et des systèmes de gestion de données. Je privilégie les bonnes pratiques en assurance qualité en appliquant des stratégies de tests robustes et maintenables, intégrées dans des processus d'intégration continue pour garantir la fiabilité et la qualité des livraisons.

Adepte de la méthodologie Agile Scrum, je valorise les environnements collaboratifs qui encouragent l'itération, l'amélioration continue et la production de solutions à forte valeur ajoutée. Mon objectif est de contribuer à des projets ambitieux où rigueur technique et innovation se conjuguent pour répondre aux besoins réels des utilisateurs.`;

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
    title: "Application Web de Gestion de Location de Voitures",
    image: [Acceuil, dark, Aboutus, AllCars, Search, FullSignIn, Reservation, Paiement, Avis, VehiculesAdmin],
    description:
      "Une application web permettant de gérer la location de véhicules, les réservations et la gestion des clients. Elle offre une interface fluide pour les utilisateurs, avec un système de réservation sécurisé via PayPal et une interface administrateur pour la gestion des véhicules et des statistiques.",
    technologies: [
      "React",
      "Spring Boot",
      "Tailwind CSS",
      "JWT",
      "MySQL"
    ],
    githubLink: "https://github.com/ZakariaCode/CarBook.git",
  },
  {
  title: "UniShare - Plateforme universitaire de supervision",
  image: [N1, N2, N3, N4],
  description:
    "Une plateforme web collaborative pour la gestion des encadrements de stagiaires et la publication des rapports de stage. Elle intègre une messagerie temps réel via WebSocket, un système de publications avec interactions sociales, et une synchronisation automatique avec Google Calendar pour la planification des réunions de supervision.",
  technologies: [
    "Next.js",
    "TypeScript",
    "PostgreSQL",
    "Prisma",
    "WebSocket",
    "Tailwind CSS",
    "Shadcn/ui",
    "NextAuth"
  ],
  githubLink: "https://github.com/ZakariaCode/unishare.git",
}
  ,
  {
    title: "Automatisation des tests d'une application E‑commerce",
    image: [DashboardJenkins, Repport, NotificationEmail],
    description:
      "Ce projet vise à automatiser les scénarios de test d'une application web d'e-commerce en utilisant Robot Framework. L'objectif est d'appliquer les bonnes pratiques d'automatisation, notamment l'architecture Page Object model (POM), et d'intégrer le projet dans un pipeline CI/CD avec Jenkins.",
    technologies: ["Robot Framework", "Cucumber", "Jenkins"],
    githubLink: "https://github.com/ZakariaCode/Tests_E-commerce_App.git",
  } ,
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
    year: "Juillet - Août 2025",
    role: "Développeur Full Stack",
    company: "M‑Automotiv",
    title : "Mise en place d'une solution web complète pour la centralisation de la gestion du parc informatique",
    description: [
      "Développé un système d'authentification sécurisé avec JWT.",
      "Implémenté un système de cache Redis pour optimiser les temps de réponse, configuré les requêtes PostgreSQL avec indexation appropriée, et intégré des middlewares de validation et sécurité coté client pour filtrer les requêtes sensibles",
      "Conteneurisation des services avec Docker et mise en place d'une pipeline CI/CD intégrant SonarQube pour l'analyse de la qualité du code.",
      "Conçu, implémenté et validé des cas de test couvrant les fonctionnalités critiques de l'application sur XRAY, automatisé leur exécution via Robot Framework en utilisant le pattern Page object model (POM) pour une meilleure maintenabilité, et intégré ces tests dans la pipeline CI/CD pour garantir la qualité continue",
    ],
    technologies: ["Next.js", "Spring Boot", "PostgreSQL", "Redis", "Docker", "SonarQube", "Robot Framework"],
  },
  {
    year: "Juillet 2024",
    role: "Développeur Full Stack",
    company: "Demeno Group",
    title : "Contribution au développement d'une solution web pour la mise en correspondance en offre d'emploie et profils candidats",
    description: [
      "Développé un tableau de bord administratif pour visualiser les statistiques des candidats, offres d'emploi et recruteurs.",
      "Automatisation de l'envoi d'e-mails hebdomadaires pour confirmer la disponibilité des candidats.",
      "Implémentation d'une fonctionnalité permettant aux candidats de modifier leur statut de disponibilité depuis leur profil.",
      "Conception d'une section de contact pour faciliter la communication avec les utilisateurs.",
      "Mise en place d'un système de blocage des comptes pour les candidats indisponibles.",
    ],
    technologies: ["Next.js", "Prisma", "Postman", "GitHub", "Jira"],
  },
];

export const CONTACT = {
  address: "Casablanca , Morocco",
  phoneNo: "06 07 35 36 45",
  email: "elhajjamzakaria1@gmail.com",
};
