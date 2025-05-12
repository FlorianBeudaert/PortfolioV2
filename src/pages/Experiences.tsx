import { educationData } from '@/data/EducationsData';
import EducationsCard from '@/components/EducationsCard';
import { experiencesData } from '@/data/ExperiencesData';
import ExperiencesCard from '@/components/ExperiencesCard';

export default function Experiences() {
  return (
    <section id="experiences" className="py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-3 text-[var(--color-secondary)]"
          data-aos="fade-up"
        >
          Formations & Expériences
        </h2>

        <div className="flex flex-wrap justify-center gap-2 mt-10 mb-4">
          <p
            className="bg-[var(--color-neutral)] text-gray-600 px-4 py-2 rounded-full text-sm font-medium"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Mes Formations
          </p>
        </div>
        <p
          className="text-gray-600 text-center mb-8 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Voici un aperçu de mes formations que j&apos;ai suivies jusqu&apos;à présent.
        </p>
        <div
          className="grid grid-cols-1 gap-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {educationData.map((education) => (
            <EducationsCard key={education.title} education={education} />
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-2 mt-10 mb-4">
          <p
            className="bg-[var(--color-neutral)] text-gray-600 px-4 py-2 rounded-full text-sm font-medium"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Mes Expériences
          </p>
        </div>
        <p
          className="text-gray-600 text-center mb-8 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Voici un aperçu de mes expériences professionnelles que j&apos;ai
          acquises jusqu&apos;à présent.
        </p>
        <div
          className="grid grid-cols-1 gap-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {experiencesData.map((experience) => (
            <ExperiencesCard
              key={experience.title}
              experience={experience}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

