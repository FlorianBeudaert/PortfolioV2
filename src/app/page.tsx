'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HeroSection from '@/pages/HeroSection';
import Experiences from '@/pages/Experiences';
import ProjectsSection from '@/pages/Projects';
import SkillsSection from '@/pages/Skills';


export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <main>
      <HeroSection />
      <Experiences />
      <SkillsSection />
      <ProjectsSection />
    </main>
  );
}
