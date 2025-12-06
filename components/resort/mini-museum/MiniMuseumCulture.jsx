export default function MiniMuseumCulture() {
    return (
        <section className="py-24 px-6 bg-gradient-to-br from-amber-50 to-orange-50">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-playfair font-bold text-stone-900 mb-8">
                    Preserving Heritage
                </h2>
                <p className="text-xl md:text-2xl font-manrope leading-relaxed text-stone-700 mb-12">
                    Our mini museum celebrates the cultural richness of Swat Valley,
                    preserving centuries of tradition while inspiring future generations.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                    {[
                        { title: 'Curated Collection', desc: 'Authentic artifacts and artworks' },
                        { title: 'Interactive Displays', desc: 'Engaging multimedia experiences' },
                        { title: 'Cultural Programs', desc: 'Workshops and storytelling sessions' },
                    ].map((feature, index) => (
                        <div key={index} className="p-8 bg-white rounded-2xl shadow-lg border border-amber-100">
                            <h3 className="text-2xl font-playfair font-semibold text-stone-900 mb-4">
                                {feature.title}
                            </h3>
                            <p className="text-stone-600 font-manrope">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
