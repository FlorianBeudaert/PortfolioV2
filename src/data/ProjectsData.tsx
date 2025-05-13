import { Project } from '@/types/Project';

const projectsData: Project[] = [
  {
    id: 1,
    title: 'Telescord',
    shortDescription:
      "Projet de fin de formation (2ème année Web@cademie) inspiré de Discord, avec une fonctionnalité principale d'appel en temps réel.",
    detailedDescription:
      'Ce projet a été réalisé en groupe de 2 personnes dans le cadre de la fin de formation. Nous avons décidé de créer une application inspirée de Discord, avec comme fonctionnalité principale les appels en temps réel. Les autres fonctionnalités incluent la messagerie en temps réel et sauvegardée, la création de salons communautaires, ainsi que la gestion des amis avec des messages et appels privés.',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    mainImage: '/assets/projects/telescord/logo.webp',
    images: [
      '/assets/projects/telescord/grouplist.webp',
      '/assets/projects/telescord/groupview.webp',
      '/assets/projects/telescord/friendlist.webp',
      '/assets/projects/telescord/friends.webp',
      '/assets/projects/telescord/friendmessages.webp',
    ],
  },
  {
    id: 2,
    title: 'Trefllo',
    shortDescription:
      'Trefllo est une application de gestion de tâches inspirée de Trello, développée durant un projet en groupe de formation.',
    detailedDescription:
      "Ce projet a été realiser en groupe de 3 personnes dans le cadre de ma formation. L'objectif était de créer une application mobile de gestion de tâches inspirée de Trello via sont API. L'application permet de créer des tableaux, d'ajouter des taches, assigner des utilisateurs.",
    technologies: ['React Native'],
    mainImage: '/assets/projects/trefllo/home.webp',
    images: [
      '/assets/projects/trefllo/drawer.webp',
      '/assets/projects/trefllo/board.webp',
      '/assets/projects/trefllo/task.webp',
    ],
  },
  {
    id: 3,
    title: 'MyRPG',
    shortDescription:
      'Description du projet avec les technologies utilisées et les fonctionnalités principales.',
    detailedDescription:
      'Voici une description plus détaillée du projet, expliquant les objectifs, les défis rencontrés et les solutions apportées.',
    technologies: ['Ruby', 'Rails', 'PostgreSQL'],
    mainImage: '/assets/projects/myrpg/logo.webp',
    images: [
      '/assets/projects/myrpg/choicequest.webp',
      '/assets/projects/myrpg/questwalk.webp',
      '/assets/projects/myrpg/questionquest.webp',
      '/assets/projects/myrpg/fightquest.webp',
      '/assets/projects/myrpg/reward.webp',
      '/assets/projects/myrpg/profile.webp',
      '/assets/projects/myrpg/createquest.webp',
      '/assets/projects/myrpg/createquestion.webp',
    ],
  },
  {
    id: 4,
    title: 'My Marvin',
    shortDescription:
      'My Marvin est un projet DevOps basé sur Jenkins, visant à automatiser la configuration complète d’une instance Jenkins via des fichiers de configuration YAML et Groovy.',
    detailedDescription:
      'My Marvin est un projet DevOps réalisé dans le cadre de la formation Epitech. Il consiste à configurer entièrement une instance Jenkins en utilisant Configuration as Code (JCasC) et le Job DSL, le tout automatisé via des fichiers YAML et Groovy. L’objectif principal est de créer une plateforme Jenkins, en respectant des critères de configuration : création d’utilisateurs avec rôles spécifiques, désactivation des inscriptions, création de jobs dans des dossiers, et automatisation des builds via des scripts make. Le projet met en avant les bonnes pratiques DevOps comme l’infrastructure as code, la sécurité via variables d’environnement et la modularité des scripts.',
    technologies: ['Jenkins', 'Docker'],
    mainImage: '/assets/projects/mymarvin/logo.webp',
    images: [
      '/assets/projects/mymarvin/home.webp',
      '/assets/projects/mymarvin/tools.webp',
      '/assets/projects/mymarvin/seed.webp',
      '/assets/projects/mymarvin/clone.webp',
    ],
  },
  {
    id: 5,
    title: 'Torio',
    shortDescription:
      "Torio est un projet personnel que j'ai commencer en parallele de mes études. Le but est de créer un site de gestion de projet et de calendrier.",
    detailedDescription:
      "Torio est un projet personnel que j'ai entrepris en parallèle de mes études. L'objectif principal est de développer une plateforme de gestion du temps combinant un calendrier interactif et des outils de gestion de projet. Ce site vise à aider les utilisateurs à organiser leurs tâches, planifier leurs événements et collaborer efficacement grâce à une interface intuitive.",
    technologies: ['React', 'Node.js', 'MongoDB'],
    mainImage: '/assets/projects/torio/logo.webp',
    images: ['/assets/projects/torio/home.webp'],
  },
];

export default projectsData;
