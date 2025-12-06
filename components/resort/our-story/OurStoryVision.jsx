export default function OurStoryVision() {
    return (
        <section className="py-24 px-6 bg-gradient-to-br from-stone-50 to-amber-50">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-playfair font-bold text-stone-900 mb-8">
                    Our Vision
                </h2>
                <p className="text-xl md:text-2xl font-manrope leading-relaxed text-stone-700 mb-12">
                    To create an unparalleled luxury experience that harmonizes with nature,
                    celebrates local culture, and sets a new standard for hospitality in Pakistan.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                    {[
                        { title: 'Sustainability', desc: 'Eco-conscious luxury at every touchpoint' },
                        { title: 'Innovation', desc: 'Pioneering glass-dome architecture' },
                        { title: 'Heritage', desc: 'Honoring Swat Valley traditions' },
                    ].map((value, index) => (
                        <div key={index} className="p-8 bg-white rounded-2xl shadow-lg">
                            <h3 className="text-2xl font-playfair font-semibold text-stone-900 mb-4">
                                {value.title}
                            </h3>
                            <p className="text-stone-600 font-manrope">
                                {value.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
