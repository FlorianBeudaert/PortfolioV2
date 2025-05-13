import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { Project } from '@/types/Project';

interface ModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ModalProps) {
  const [isExiting, setIsExiting] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isZoomed, setIsZoomed] = useState(false);

  const toggleZoom = () => {
    setIsZoomed((prev) => !prev);
  };

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!project) return;

      if (e.key === 'Escape') {
        handleClose();
      } else if (e.key === 'ArrowRight') {
        handleNextImage();
      } else if (e.key === 'ArrowLeft') {
        handlePrevImage();
      }
    },
    [project, currentImageIndex]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  useEffect(() => {
    setCurrentImageIndex(0);
    setIsLoading(true);
  }, [project]);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      onClose();
      setIsExiting(false);
    }, 300);
  };

  const handleNextImage = () => {
    if (!project) return;
    setIsLoading(true);
    setCurrentImageIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrevImage = () => {
    if (!project) return;
    setIsLoading(true);
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  if (!project) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/50 backdrop-blur-sm p-4 sm:p-6 transition-opacity duration-300 ${
        isExiting ? 'opacity-0' : 'opacity-100'
      }`}
      onClick={handleClose}
      aria-modal="true"
      role="dialog"
      aria-labelledby="project-modal-title"
    >
      <div
        className={`bg-white rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden transition-all duration-300 ${
          isExiting ? 'scale-95' : 'scale-100'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 shadow-md hover:bg-gray-200 transition-transform duration-200 cursor-pointer"
          onClick={handleClose}
          aria-label="Close modal"
        >
          <X size={20} className="text-gray-700" />
        </button>

        <div className="flex flex-col md:flex-row h-full max-h-[90vh]">
          <div className="relative w-full md:w-3/5 h-[40vh] md:h-[90vh] bg-gray-100">
            <div
              className={`${
                isZoomed
                  ? 'fixed inset-0 z-50 flex items-center justify-center bg-black/80'
                  : 'relative h-full w-full cursor-zoom-in'
              }`}
              onClick={toggleZoom}
            >
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                  <div className="w-10 h-10 border-4 border-[var(--color-primary)] border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
              <Image
                src={project.images[currentImageIndex]}
                alt={`${project.title} - screenshot ${currentImageIndex + 1}`}
                fill
                className={`object-contain transition-transform duration-300 ${
                  isLoading ? 'opacity-0' : 'opacity-100'
                } ${isZoomed} scale-100`}
                onLoad={handleImageLoad}
              />
            </div>

            {project.images.length > 1 && (
              <>
                <button
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 shadow-md hover:bg-gray-200 transition-transform duration-200 cursor-pointer"
                  onClick={handlePrevImage}
                  aria-label="Previous image"
                >
                  <ChevronLeft size={24} className="text-gray-700" />
                </button>
                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 shadow-md hover:bg-gray-200 transition-transform duration-200 cursor-pointer"
                  onClick={handleNextImage}
                  aria-label="Next image"
                >
                  <ChevronRight size={24} className="text-gray-700" />
                </button>
              </>
            )}
          </div>

          <div className="w-full md:w-2/5 p-6 overflow-y-auto max-h-[50vh] md:max-h-[90vh]">
            <h2
              id="project-modal-title"
              className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-4"
            >
              {project.title}
            </h2>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-[var(--color-accent)] text-[var(--color-secondary)] rounded text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="prose prose-sm max-w-none mb-6">
              <p className="text-gray-800 whitespace-pre-line">
                {project.detailedDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
