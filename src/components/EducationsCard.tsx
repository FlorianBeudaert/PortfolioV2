import React from 'react';
import { EducationsData } from '@/data/EducationsData';

interface EducationsCardProps {
  education: EducationsData;
}

export default function EducationsCard({ education }: EducationsCardProps) {
  return (
    <div
      className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow relative"
      data-aos="fade-up"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-2xl font-semibold text-[var(--color-primary)]">
          {education.title}
        </h3>
        <p className="text-base text-gray-500">
          {education.startDate} - {education.endDate}
        </p>
      </div>
      <p className="text-gray-600 font-medium text-lg mb-2">
        {education.institution} - {education.location}
      </p>
      <p className="text-gray-700 text-base">{education.description}</p>
    </div>
  );
}