import { useState } from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';

interface Project {
  mainImage: string;
  title: string;
  detailedDescription: string;
  technologies: string[];
  images: string[];
}

interface ModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function Modal({ project, onClose }: ModalProps) {
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
          <X size={24} />
        </button>
        <Image
          src={project.mainImage}
          alt={project.title}
          width={800}
          height={400}
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
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
            {project.images.map((image: string, index: number) => (
              <Image
                key={index}
                src={image}
                alt={`Project ${project.title} - Image ${index + 1}`}
                width={500}
                height={300}
                className={`w-auto max-w-full h-auto object-cover rounded-md mx-auto justify-self-center ${
                  project.images.length % 2 !== 0 &&
                  index === project.images.length - 1
                    ? 'md:col-span-2'
                    : ''
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

