export default function VerticalGardenFeatures() {
    const features = [
        { title: '500+ Native Plants', desc: 'Carefully selected species from the Hindu Kush region' },
        { title: 'Smart Irrigation', desc: 'Automated watering system for optimal plant health' },
        { title: 'Air Purification', desc: 'Natural filtration improving indoor air quality' },
        { title: 'Year-Round Beauty', desc: 'Seasonal blooms creating ever-changing landscapes' },
    ];

    return (
        <section className="py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-playfair font-bold text-stone-900 mb-12 text-center">
                    Living Masterpiece
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="p-8 bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl border border-emerald-100">
                            <h3 className="text-2xl font-playfair font-semibold text-stone-900 mb-4">
                                {feature.title}
                            </h3>
                            <p className="text-stone-600 font-manrope leading-relaxed">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
