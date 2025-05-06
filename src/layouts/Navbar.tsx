'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Accueil', path: '#home' },
    { name: 'À propos', path: '#about' },
    { name: 'Projets', path: '#projects' },
    { name: 'Contact', path: '#contact' },
  ];

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
        <Link
          href="#home"
          className="text-2xl font-bold text-[var(--color-primary)]"
        >
          Florian Beudaert
        </Link>
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:flex flex-col md:flex-row gap-6 text-gray-700 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`block md:inline hover:text-[var(--color-primary)] transition px-4 py-2 md:p-0 ${
                pathname === link.path
                  ? 'text-[var(--color-primary)] font-medium'
                  : ''
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
