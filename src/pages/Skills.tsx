'use client';

import { useState } from 'react';
import SkillCard from '@/components/SkillCard';
import { skillsData } from '@/data/SkillsData';

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = Array.from(
    new Set(skillsData.map((skill) => skill.category))
  );

  const filteredSkills = activeCategory
    ? skillsData.filter((skill) => skill.category === activeCategory)
    : skillsData;

  return (
    <section id="skills" className="py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-3 text-[var(--color-secondary)]"
          data-aos="fade-up"
        >
          Mes Compétences
        </h2>

        <p
          className="text-muted-foreground text-center text-lg mb-10"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Voici un aperçu de mes compétences techniques. Je suis toujours en
          train d'apprendre et d'explorer de nouvelles technologies.
        </p>

        <div
          className="flex flex-wrap justify-center gap-2 mb-10"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              !activeCategory
                ? 'bg-[var(--color-primary)]/70 text-[var(--color-secondary)]'
                : 'bg-[var(--color-neutral)] hover:bg-[var(--color-neutral)]/80'
            }`}
          >
            Tout
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-[var(--color-primary)]/70 text-[var(--color-secondary)]'
                  : 'bg-[var(--color-neutral)] hover:bg-[var(--color-neutral)]/80'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          {filteredSkills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
