export default function OurStoryTimeline() {
    const milestones = [
        { year: '2020', title: 'The Vision', description: 'Conceptualization of Pakistan\'s first glass-dome luxury resort' },
        { year: '2021', title: 'Breaking Ground', description: 'Construction begins at 2804 meters above sea level' },
        { year: '2023', title: 'Architectural Marvel', description: 'Completion of signature glass-dome structures' },
        { year: '2024', title: 'Grand Opening', description: 'Welcoming guests to the sanctuary in the Hindu Kush' },
    ];

    return (
        <section className="py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-playfair font-bold text-stone-900 mb-16 text-center">
                    Our Journey
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {milestones.map((milestone, index) => (
                        <div key={index} className="relative">
                            <div className="text-6xl font-playfair font-bold text-amber-200 mb-4">
                                {milestone.year}
                            </div>
                            <h3 className="text-2xl font-playfair font-semibold text-stone-900 mb-3">
                                {milestone.title}
                            </h3>
                            <p className="text-stone-600 font-manrope leading-relaxed">
                                {milestone.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
