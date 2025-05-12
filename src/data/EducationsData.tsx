export interface EducationsData {
  title: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
}

export const educationData: EducationsData[] = [
  {
    title: "Architecte de système d'informations (RNCP niveau 7)",
    institution: 'EPITECH (Pré-MSc et MSc)',
    location: 'Lille',
    startDate: 'Septembre 2024',
    endDate: 'Septembre 2027',
    description: "Formation centrée sur divers domaines tels que le développement web, la gestion de projet et la cybersécurité, avec 2,5 ans d'alternance pour approfondir les compétences professionnelles.",
  },
  {
    title: 'Intégrateur Développeur Web (RNCP niveau 5)',
    institution: 'EPITECH (Web@cademie)',
    location: 'Lille',
    startDate: 'Novembre 2022',
    endDate: 'Septembre 2024',
    description: "Formation axée sur l'apprentissage par projet, avec une deuxième année en alternance pour mettre en pratique les compétences acquises.",
  },
  {
    title: 'Baccalauréat STI2D',
    institution: 'Lycée Louis Pasteur',
    location: 'Hénin-Beaumont',
    startDate: 'Septembre 2019',
    endDate: 'Juin 2022',
    description: "Diplôme de Baccalauréat Scientifique et Technique de l'Industrie et du Développement Durable, spécialité Système d'Information Numérique.",
  },
];