import { useState, useEffect } from 'react';
import { ArrowRight, X } from 'lucide-react';

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

function Modal({ project, onClose }: { project: any; onClose: () => void }) {
  useEffect(() => {
    if (project) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [project]);

  if (!project) return null;

  return (
      <div className="fixed inset-0 bg-blur-sm bg-opacity-30 flex items-center justify-center z-50 backdrop-blur-sm">
        <div className="bg-white rounded-lg shadow-lg max-w-lg w-full relative p-6">
          <button
              className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-md text-gray-600 hover:text-gray-800 cursor-pointer"
              onClick={onClose}
          >
            <X size={24} />
          </button>
          <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-2xl font-bold text-[var(--color-primary)]">
            {project.title}
          </h3>
          <p className="text-gray-600 mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech: string, index: number) => (
                <span
                    key={index}
                    className="px-2 py-1 bg-[var(--color-accent)] text-[var(--color-secondary)] rounded text-sm"
                >
              {tech}
            </span>
            ))}
          </div>
        </div>
      </div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

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
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer"
                    onClick={() => setSelectedProject(project)}
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
                      <span className="text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition flex items-center">
                    Voir <ArrowRight size={24} />
                  </span>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
        <Modal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
        />
      </section>
  );
}