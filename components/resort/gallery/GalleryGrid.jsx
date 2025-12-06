export default function GalleryGrid() {
    // Generate placeholder images
    const images = Array.from({ length: 12 }, (_, i) => ({
        id: i + 1,
        title: `Photo ${i + 1}`,
    }));

    return (
        <section className="py-24 px-6 bg-stone-50">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {images.map((image) => (
                        <div
                            key={image.id}
                            className="aspect-square bg-gradient-to-br from-stone-200 to-stone-300 rounded-xl overflow-hidden group cursor-pointer relative"
                        >
                            <div className="w-full h-full flex items-center justify-center text-stone-500 font-manrope text-sm group-hover:scale-110 transition-transform duration-500">
                                [{image.title}]
                            </div>
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
