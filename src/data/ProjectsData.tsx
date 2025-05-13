import { Project } from '@/types/Project';

const projectsData: Project[] = [
  {
    id: 1,
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
    id: 2,
    title: 'Téléscord',
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
    id: 3,
    title: 'Projet 3',
    shortDescription:
      'Description du projet avec les technologies utilisées et les fonctionnalités principales.',
    detailedDescription:
      'Voici une description plus détaillée du projet, expliquant les objectifs, les défis rencontrés et les solutions apportées.',
    technologies: ['Tech1', 'Tech2'],
    mainImage:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60',
    images: [
      'https://placehold.co/600x400',
      'https://placehold.co/600x400',
      'https://placehold.co/600x400',
      'https://placehold.co/600x400',
      'https://placehold.co/600x400',
      'https://placehold.co/600x400',
    ],
  },
  {
    id: 4,
    title: 'Projet 4',
    shortDescription:
      'Description du projet avec les technologies utilisées et les fonctionnalités principales.',
    detailedDescription:
      'Voici une description plus détaillée du projet, expliquant les objectifs, les défis rencontrés et les solutions apportées.',
    technologies: ['Tech1', 'Tech2'],
    mainImage:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60',
    images: ['https://placehold.co/600x400', 'https://placehold.co/600x400'],
  },
  {
    id: 5,
    title: 'Projet 5',
    shortDescription:
      'Description du projet avec les technologies utilisées et les fonctionnalités principales.',
    detailedDescription:
      'Voici une description plus détaillée du projet, expliquant les objectifs, les défis rencontrés et les solutions apportées.',
    technologies: ['Tech1', 'Tech2'],
    mainImage:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60',
    images: ['https://placehold.co/600x400', 'https://placehold.co/600x400'],
  },
  {
    id: 6,
    title: 'Projet 6',
    shortDescription:
      'Description du projet avec les technologies utilisées et les fonctionnalités principales.',
    detailedDescription:
      'Voici une description plus détaillée du projet, expliquant les objectifs, les défis rencontrés et les solutions apportées.',
    technologies: ['Tech1', 'Tech2'],
    mainImage:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60',
    images: ['https://placehold.co/600x400'],
  },
];

export default projectsData;
