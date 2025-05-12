import { Skill } from '@/types/Skill';

import {
  siJavascript,
  siTypescript,
  siReact,
  siPostgresql,
  siMongodb,
  siMysql,
  siGit,
  siDocker,
  siNextdotjs,
  siNodedotjs,
  siTailwindcss,
  siExpress,
  siSymfony,
  siPhp,
  siPython,
  siJetbrains,
  siFigma,
} from 'simple-icons/icons';

export const skillsData: Skill[] = [
  // Frontend
  {
    name: 'JavaScript',
    icon: siJavascript.path,
    hex: `#${siJavascript.hex}`,
    category: 'Frontend',
  },
  {
    name: 'TypeScript',
    icon: siTypescript.path,
    hex: `#${siTypescript.hex}`,
    category: 'Frontend',
  },
  {
    name: 'React',
    icon: siReact.path,
    hex: `#${siReact.hex}`,
    category: 'Frontend',
  },
  {
    name: 'Next.js',
    icon: siNextdotjs.path,
    hex: `#${siNextdotjs.hex}`,
    category: 'Frontend',
  },
  {
    name: 'Tailwind CSS',
    icon: siTailwindcss.path,
    hex: `#${siTailwindcss.hex}`,
    category: 'Frontend',
  },

  // Backend
  {
    name: 'Node.js',
    icon: siNodedotjs.path,
    hex: `#${siNodedotjs.hex}`,
    category: 'Backend',
  },
  {
    name: 'Express.js',
    icon: siExpress.path,
    hex: `#${siExpress.hex}`,
    category: 'Backend',
  },
  {
    name: 'PHP',
    icon: siPhp.path,
    hex: `#${siPhp.hex}`,
    category: 'Backend',
  },
  {
    name: 'Symfony',
    icon: siSymfony.path,
    hex: `#${siSymfony.hex}`,
    category: 'Backend',
  },
  {
    name: 'Python',
    icon: siPython.path,
    hex: `#${siPython.hex}`,
    category: 'Backend',
  },
  {
    name: 'Java',
    icon: '',
    hex: '',
    category: 'Backend',
    customIcon: '/icons/java.svg',
  },

  // Base de données
  {
    name: 'PostgreSQL',
    icon: siPostgresql.path,
    hex: `#${siPostgresql.hex}`,
    category: 'Base de données',
  },
  {
    name: 'MongoDB',
    icon: siMongodb.path,
    hex: `#${siMongodb.hex}`,
    category: 'Base de données',
  },
  {
    name: 'MySQL',
    icon: siMysql.path,
    hex: `#${siMysql.hex}`,
    category: 'Base de données',
  },

  // Outils
  {
    name: 'Git',
    icon: siGit.path,
    hex: `#${siGit.hex}`,
    category: 'Outils',
  },
  {
    name: 'Docker',
    icon: siDocker.path,
    hex: `#${siDocker.hex}`,
    category: 'Outils',
  },
  {
    name: 'JetBrains IDE',
    icon: siJetbrains.path,
    hex: `#${siJetbrains.hex}`,
    category: 'Outils',
  },
  {
    name: 'Figma',
    icon: siFigma.path,
    hex: `#${siFigma.hex}`,
    category: 'Outils',
  },
];

export default skillsData;
