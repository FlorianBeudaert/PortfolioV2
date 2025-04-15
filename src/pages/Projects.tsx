import { ArrowRight } from 'lucide-react';

const projectsData = [
  {
    id: 1,
    title: 'Projet 1',
    description:
      'Description du projet avec les technologies utilisées et les fonctionnalités principales.',
    technologies: ['Tech1', 'Tech2'],
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60',
    link: '#',
  },
  {
    id: 2,
    title: 'Projet 2',
    description:
      'Description du projet avec les technologies utilisées et les fonctionnalités principales.',
    technologies: ['Tech1', 'Tech2'],
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60',
    link: '#',
  },
  {
    id: 3,
    title: 'Projet 3',
    description:
      'Description du projet avec les technologies utilisées et les fonctionnalités principales.',
    technologies: ['Tech1', 'Tech2'],
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60',
    link: '#',
  },
  {
    id: 4,
    title: 'Projet 4',
    description:
      'Description du projet avec les technologies utilisées et les fonctionnalités principales.',
    technologies: ['Tech1', 'Tech2'],
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60',
    link: '#',
  },
  {
    id: 5,
    title: 'Projet 5',
    description:
      'Description du projet avec les technologies utilisées et les fonctionnalités principales.',
    technologies: ['Tech1', 'Tech2'],
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60',
    link: '#',
  },
  {
    id: 6,
    title: 'Projet 6',
    description:
      'Description du projet avec les technologies utilisées et les fonctionnalités principales.',
    technologies: ['Tech1', 'Tech2'],
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60',
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[var(--color-secondary)]">
          Mes Projets
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={project.image}
                alt={`Preview of ${project.title}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[var(--color-primary)]">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-[var(--color-accent)] text-[var(--color-secondary)] rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition flex items-center"
                  >
                    Voir{' '}
                    <ArrowRight
                      size={24}
                      className="text-[var(--color-primary)]"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
