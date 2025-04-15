'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HeroSection from '@/pages/HeroSection';
import ProjectsSection from '@/pages/Projects';

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <main>
      <HeroSection />
      <ProjectsSection />
    </main>
  );
}
