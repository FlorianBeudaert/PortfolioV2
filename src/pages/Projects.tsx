import { useState, useEffect } from 'react';
import { ArrowRight, X } from 'lucide-react';

const projectsData = [
  {
    id: 1,
    title: 'Projet 1',
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
    ],
  },
  {
    id: 2,
    title: 'Projet 2',
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
    images: [
      'https://placehold.co/600x400',
      'https://placehold.co/600x400',
    ],
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
    images: [
      'https://placehold.co/600x400',
      'https://placehold.co/600x400',
    ],
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
    images: [
      'https://placehold.co/600x400',
    ],
  },
]

function Modal({ project, onClose }: { project: any; onClose: () => void }) {
  const [isExiting, setIsExiting] = useState(false);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      onClose();
      setIsExiting(false);
    }, 300);
  };

  if (!project) return null;

  return (
      <div
          className={`fixed inset-0 bg-blur-sm bg-opacity-30 flex items-center justify-center z-50 backdrop-blur-sm modal ${
              isExiting ? 'modal-exit' : 'modal-enter'
          }`}
      >
        <div className="bg-white rounded-lg shadow-lg relative p-6 w-11/12 lg:w-2/3">
          <button
              className="absolute top-0 right-0 m-2 text-gray-600 hover:text-gray-800 cursor-pointer md:-m-2 md:rounded-full md:p-2 md:bg-white md:shadow-md"
              onClick={handleClose}
          >
            <X size={24}/>
          </button>
          <img
              src={project.mainImage}
              alt={project.title}
              className="w-full h-48 object-cover rounded-md mb-4 mt-2"
          />
          <div className="overflow-y-auto max-h-[50vh]">
            <h3 className="text-2xl font-bold text-[var(--color-primary)]">
              {project.title}
            </h3>
            <p className="text-gray-600 mb-4">{project.detailedDescription}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech: string, index: number) => (
                  <span
                      key={index}
                      className="px-2 py-1 bg-[var(--color-accent)] text-[var(--color-secondary)] rounded text-sm"
                  >
                {tech}
              </span>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              {project.images.map((image: string, index: number) => (
                  <img
                      key={index}
                      src={image}
                      alt={`Project ${project.title} - Image ${index + 1}`}
                      className="w-full h-auto object-cover rounded-md"
                  />
              ))}
            </div>
          </div>
        </div>
      </div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [selectedProject]);

  return (
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2
              className="text-3xl font-bold text-center mb-12 text-[var(--color-secondary)]"
              data-aos="fade-up"
          >
            Mes Projets
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
                <div
                    key={project.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                >
                  <img
                      src={project.mainImage}
                      alt={`Preview of ${project.title}`}
                      className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-[var(--color-primary)]">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{project.shortDescription}</p>
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
                      <button
                          className="text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition flex items-center cursor-pointer"
                          onClick={() => setSelectedProject(project)}
                      >
                        Voir <ArrowRight size={24} />
                      </button>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
        <Modal project={selectedProject} onClose={() => setSelectedProject(null)} />
      </section>
  );
}