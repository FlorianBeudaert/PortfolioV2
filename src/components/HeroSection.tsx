export default function HeroSection() {
    return (
        <section className="flex flex-col items-center justify-center h-[80vh] text-center px-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Salut, moi c’est <span className="text-[var(--color-primary)]">Florian Beudaert</span>
            </h1>
            <p className="text-lg md:text-xl max-w-xl mb-6 text-gray-600">
                Développeur web passionné par les interfaces modernes, la performance et l’expérience utilisateur.
            </p>
            <div className="flex gap-4">
                <a
                    href="/projets"
                    className="px-6 py-3 bg-[var(--color-primary)] text-white rounded-2xl shadow-md hover:bg-[var(--color-secondary)] transition"
                >
                    Voir mes projets
                </a>
                <a
                    href="/contact"
                    className="px-6 py-3 border border-[var(--color-primary)] text-[var(--color-primary)] rounded-2xl hover:bg-[var(--color-accent)] transition"
                >
                    Me contacter
                </a>
            </div>
        </section>
    );
}
