import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
export default function HeroSection() {
    return (
        <section className="pt-24 pb-12 md:pt-32 md:pb-20 px-4">
            <div className="max-w-6xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-[var(--color-secondary)] mb-6">
                    Florian Beudaert
                </h1>
                <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-6">
                    Développeur Full Stack
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                    Je transforme vos idées en solutions numériques innovantes.
                </p>
                <div className="flex justify-center space-x-4 mb-12">
                    <a href="#" className="p-2 text-gray-600 hover:text-[var(--color-primary)] transition">
                        <Github size={24}/>
                    </a>
                    <a href="#" className="p-2 text-gray-600 hover:text-[var(--color-primary)] transition">
                        <Linkedin size={24}/>
                    </a>
                    <a href="#" className="p-2 text-gray-600 hover:text-[var(--color-primary)] transition">
                        <Mail size={24}/>
                    </a>
                </div>
                <a href="#projects" className="animate-bounce inline-block">
                    <ChevronDown size={32} className="text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition" />
                </a>
            </div>
        </section>
    );
}
