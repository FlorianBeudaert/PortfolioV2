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
    title: 'Zenera Wiki',
    shortDescription:
      'Zenera Wiki est un projet dans le but de ressourcer et expliquer des mécanique moddifier du jeu Minecraft',
    detailedDescription:
      'Site web dédié à mon launcher Minecraft moddé, permettant de faciliter le téléchargement et l’installation pour jouer à des aventures personnalisées entre amis. Le site intègre également un wiki regroupant la documentation de chaque datapack. Interface moderne, intuitive et facile à maintenir.',
    technologies: ['Next.js', 'Tailwind CSS'],
    mainImage: '/assets/projects/zanerawiki/logo.webp',
    images: [
      '/assets/projects/zanerawiki/homepage.webp',
      '/assets/projects/zanerawiki/wikipage.webp',
      '/assets/projects/zanerawiki/launcher.webp',
    ],
  },
  {
    id: 3,
    title: 'MyRPG',
    shortDescription:
      'MyRPG est un projet RPG sous forme de question et de combat, développé en Ruby on Rails.',
    detailedDescription:
      "MyRPG est un jeu RPG interactif basé sur des questions et des combats. Les joueurs progressent en répondant à des questions et en affrontant des ennemis. Le jeu intègre un système d'objets avec des statistiques personnalisées, un mécanisme de montée en niveau pour améliorer les compétences des personnages, ainsi qu'une interface administrateur complète permettant d'ajouter ou de supprimer des quêtes et des questions. Bien que le visuel n'ai pas été la priorité, le projet met en avant les fonctionnalités demandées par le sujet.",
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
