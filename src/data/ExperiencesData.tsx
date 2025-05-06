export interface ExperiencesData
  {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies: string[];
  icon?: string;
}

export const experiencesData: ExperiencesData[] = [
  {
    title: 'Alternant Développeur Web',
    company: 'Dupont Restauration',
    location: 'Libercourt, France',
    startDate: 'Septembre 2023',
    endDate: 'Septembre 2024',
    description:
      "Alternance au sein de Dupont Restauration, impliquant des améliorations d'applications web en Symfony, la refonte d'une application de gestion des droits utilisateurs en React, l'optimisation d'un PIM (Product Information Management) et la création de scripts en PHP pour automatiser des processus.",
    technologies: ['React', 'Symfony', 'PHP', 'Oracle']
  },
];