export default function MiniMuseumExhibits() {
    const exhibits = [
        { title: 'Ancient Artifacts', desc: 'Gandhara civilization relics and Buddhist heritage' },
        { title: 'Traditional Crafts', desc: 'Handwoven textiles and intricate woodwork' },
        { title: 'Local Art', desc: 'Contemporary and traditional Swati artwork' },
        { title: 'Historical Timeline', desc: 'Journey through Swat Valley\'s storied past' },
    ];

    return (
        <section className="py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-playfair font-bold text-stone-900 mb-12 text-center">
                    Our Exhibits
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {exhibits.map((exhibit, index) => (
                        <div key={index} className="group">
                            <div className="aspect-[4/3] bg-gradient-to-br from-amber-200 to-orange-300 rounded-2xl mb-6 overflow-hidden">
                                <div className="w-full h-full flex items-center justify-center text-amber-800 font-manrope text-sm">
                                    [Exhibit Image]
                                </div>
                            </div>
                            <h3 className="text-3xl font-playfair font-semibold text-stone-900 mb-3">
                                {exhibit.title}
                            </h3>
                            <p className="text-stone-600 font-manrope text-lg leading-relaxed">
                                {exhibit.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
