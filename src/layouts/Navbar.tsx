"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    const navLinks = [
        { name: "Accueil", path: "/" },
        { name: "Projets", path: "/projects" },
        { name: "À propos", path: "/about" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <header className="w-full bg-white shadow-sm sticky top-0 z-50">
            <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
                <Link href="/" className="text-2xl font-bold text-[var(--color-primary)]">
                    Florian Beudaert
                </Link>
                <div className="flex gap-6 text-gray-700">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            href={link.path}
                            className={`hover:text-[var(--color-primary)] transition ${
                                pathname === link.path ? "text-[var(--color-primary)] font-medium" : ""
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
