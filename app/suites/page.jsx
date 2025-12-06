export const metadata = {
    title: "Suites | Lavita Malam Jabba",
    description: "Explore our collection of ultra-luxury glass-dome suites with breathtaking mountain views and world-class amenities.",
    keywords: "luxury suites, glass dome suites, mountain view rooms, Malam Jabba accommodation",
};

export default function SuitesPage() {
    return (
        <main className="min-h-screen">
            {/* Hero Section Placeholder */}
            <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-stone-800 via-amber-900 to-stone-900">
                <div className="text-center text-white px-6">
                    <h1 className="text-6xl md:text-8xl font-playfair font-bold mb-6 tracking-tight">
                        The Suites
                    </h1>
                    <p className="text-xl md:text-2xl font-manrope font-light tracking-wide text-stone-200 max-w-2xl mx-auto">
                        Where Luxury Meets the Sky
                    </p>
                    <div className="mt-8 text-amber-400/80 font-manrope text-sm tracking-widest">
                        COMING SOON
                    </div>
                </div>
            </section>

            {/* Suite Categories Placeholder */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-playfair font-bold text-stone-900 mb-12 text-center">
                        Our Collection
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {[
                            { name: 'Glass Dome Suite', desc: 'Panoramic 360° mountain views' },
                            { name: 'Presidential Suite', desc: 'Ultimate luxury and privacy' },
                            { name: 'Honeymoon Suite', desc: 'Romantic mountain escape' },
                            { name: 'Family Suite', desc: 'Spacious comfort for families' },
                        ].map((suite) => (
                            <div key={suite.name} className="group cursor-pointer">
                                <div className="aspect-[4/3] bg-gradient-to-br from-stone-200 to-stone-300 rounded-2xl mb-6 overflow-hidden">
                                    <div className="w-full h-full flex items-center justify-center text-stone-400 font-manrope text-sm">
                                        [Suite Image Placeholder]
                                    </div>
                                </div>
                                <h3 className="text-3xl font-playfair font-semibold text-stone-900 mb-3 group-hover:text-amber-700 transition-colors">
                                    {suite.name}
                                </h3>
                                <p className="text-stone-600 font-manrope text-lg">
                                    {suite.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section Placeholder */}
            <section className="py-24 px-6 bg-stone-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-playfair font-bold text-stone-900 mb-12 text-center">
                        Suite Features
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            'King-Size Beds',
                            'Heated Floors',
                            'Private Balconies',
                            'Smart Controls',
                            'Premium Linens',
                            'Mountain Views',
                            'Mini Bar',
                            '24/7 Concierge',
                        ].map((feature) => (
                            <div key={feature} className="text-center p-6">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-amber-100 flex items-center justify-center">
                                    <div className="w-8 h-8 bg-amber-600 rounded-full"></div>
                                </div>
                                <p className="font-manrope text-stone-700 font-medium">
                                    {feature}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
