import { useState, useEffect } from 'react';
      import { ArrowRight } from 'lucide-react';
      import Modal from '../components/ProjectModal';
      import projectsData from '../data/ProjectsData';

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