export default function VerticalGardenGallery() {
    return (
        <section className="py-24 px-6 bg-stone-50">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-playfair font-bold text-stone-900 mb-12 text-center">
                    Gallery
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                        <div key={item} className="aspect-[4/3] bg-gradient-to-br from-emerald-200 to-green-300 rounded-2xl overflow-hidden group cursor-pointer">
                            <div className="w-full h-full flex items-center justify-center text-emerald-700 font-manrope text-sm group-hover:scale-105 transition-transform duration-300">
                                [Garden Image {item}]
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
