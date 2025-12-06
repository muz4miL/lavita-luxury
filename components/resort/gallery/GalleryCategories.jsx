'use client';

import { useState } from 'react';

export default function GalleryCategories() {
    const [activeCategory, setActiveCategory] = useState('all');

    const categories = [
        { id: 'all', label: 'All Photos' },
        { id: 'architecture', label: 'Architecture' },
        { id: 'suites', label: 'Suites' },
        { id: 'landscape', label: 'Landscape' },
        { id: 'experiences', label: 'Experiences' },
        { id: 'dining', label: 'Dining' },
    ];

    return (
        <section className="py-16 px-6 bg-white border-b border-stone-200">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-wrap justify-center gap-4">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`px-8 py-3 rounded-full font-manrope text-sm tracking-wide uppercase transition-all duration-300 ${activeCategory === category.id
                                    ? 'bg-amber-600 text-white shadow-lg'
                                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                                }`}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}
