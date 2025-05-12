'use client';
import { Skill } from '@/data/SkillsData';

interface SkillCardProps {
  skill: Skill;
  index: number;
}

export default function SkillCard({ skill }: SkillCardProps) {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105 border border-[var(--color-neutral)]">
      <div className="w-16 h-16 mb-4 flex items-center justify-center">
        {skill.customIcon ? (
          <img
            src={skill.customIcon}
            alt={`${skill.name} Icon`}
            className="w-full h-full object-contain"
          />
        ) : skill.icon ? (
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill={skill.hex}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d={skill.icon} />
          </svg>
        ) : (
          <div className="w-16 h-16 flex items-center justify-center text-4xl font-bold bg-secondary rounded-lg">
            {skill.name.charAt(0)}
          </div>
        )}
      </div>

      <h3 className="text-center font-medium">{skill.name}</h3>
    </div>
  );
}
