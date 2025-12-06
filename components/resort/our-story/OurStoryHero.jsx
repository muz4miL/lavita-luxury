export default function OurStoryHero() {
    return (
        <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-stone-900 via-stone-800 to-amber-900">
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
                <p className="text-sm md:text-base font-manrope tracking-[0.3em] uppercase text-amber-400/90 mb-6">
                    The Journey
                </p>
                <h1 className="text-6xl md:text-8xl font-playfair font-bold mb-8 tracking-tight">
                    Our Story
                </h1>
                <p className="text-xl md:text-2xl font-manrope font-light leading-relaxed text-stone-200 max-w-3xl mx-auto">
                    From a vision in the Hindu Kush to Pakistan's first ultra-luxury glass-dome resort
                </p>
            </div>
        </section>
    );
}
