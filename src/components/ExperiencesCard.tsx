import React from 'react';
import { ExperiencesData } from '@/data/ExperiencesData';

interface ExperiencesCardProps {
  experience: ExperiencesData;
}

export default function ExperiencesCard({ experience }: ExperiencesCardProps) {
  return (
    <div
      className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow flex items-center gap-4"
      data-aos="fade-up"
    >
      {experience.icon && (
        <div className="hidden md:block w-60 h-60 flex-shrink-0">
          <img
            src={experience.icon}
            alt={`${experience.company} logo`}
            className="w-full h-full object-contain"
          />
        </div>
      )}

      <div>
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl md:text-2xl font-semibold text-[var(--color-primary)]">
            {experience.title}
          </h3>
          <p className="text-sm md:text-base text-gray-500">
            {experience.startDate} - {experience.endDate}
          </p>
        </div>
        <p className="text-gray-600 font-medium text-base md:text-lg mb-2">
          {experience.company} - {experience.location}
        </p>
        <p className="text-gray-700 text-sm md:text-base">
          {experience.description}
        </p>
        <div className="mt-2 flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="bg-[var(--color-neutral)] text-gray-600 px-2 py-1 rounded text-xs md:text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}