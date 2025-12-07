'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Telescope, Mountain, Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function ObservatoryIntro() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    // Animation variants
    const curtainVariant = {
        hidden: { scaleX: 1 },
        visible: {
            scaleX: 0,
            transition: {
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1],
            }
        }
    };

    const imageVariant = {
        hidden: { scale: 1.1, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 1,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1],
            }
        }
    };

    const floatingImageVariant = {
        hidden: { y: 40, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1,
                delay: 0.8,
                ease: [0.16, 1, 0.3, 1],
            }
        }
    };

    const textVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: (custom) => ({
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                delay: 0.4 + (custom * 0.1),
                ease: [0.16, 1, 0.3, 1],
            }
        })
    };

    const features = [
        { icon: Telescope, label: 'Professional Telescopes' },
        { icon: Mountain, label: '9,200ft Elevation' },
        { icon: Sparkles, label: 'Resident Astronomer' }
    ];

    return (
        <section
            ref={sectionRef}
            className="relative w-full overflow-x-hidden bg-gradient-to-b from-[#0F2522] via-black to-black min-h-[85vh] flex items-center justify-center py-12 lg:py-16"
        >
            {/* Seamless blend from Services */}
            <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />

            {/* Noise Texture Overlay */}
            <div
                className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
                }}
            />

            <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 w-full">
                {/* Grid Layout - Compact & Centered */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">

                    {/* LEFT COLUMN - The Visual Collage */}
                    <motion.div
                        className="relative order-1 lg:order-1"
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        {/* Base Image Container - CONSTRAINED HEIGHT */}
                        <div className="relative h-[450px] lg:h-[500px] w-full overflow-hidden rounded-sm">
                            {/* Curtain Reveal Effect */}
                            <motion.div
                                className="absolute inset-0 bg-black z-20 origin-right"
                                variants={curtainVariant}
                            />

                            {/* Main Image */}
                            <motion.div
                                className="relative w-full h-full"
                                variants={imageVariant}
                            >
                                <Image
                                    src="/images/observatory-intro.jpg"
                                    alt="Observatory Stargazing Experience"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority
                                />

                                {/* Subtle gradient overlay for depth */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                                {/* Subtle border */}
                                <div className="absolute inset-0 border border-white/5" />
                            </motion.div>
                        </div>

                        {/* Atmospheric Location Badge - 'Frosted Ice' */}
                        <motion.div
                            className="absolute -bottom-6 -right-6 lg:-bottom-8 lg:-right-8 w-44 h-44 lg:w-52 lg:h-52 overflow-hidden rounded-sm shadow-2xl"
                            variants={floatingImageVariant}
                            style={{
                                backdropFilter: 'blur(12px)',
                            }}
                        >
                            {/* Frosted Ice Border - Thinner & Clearer */}
                            <div className="absolute inset-0 border border-white/30 rounded-sm z-10" />

                            {/* Location Context Badge */}
                            <div className="w-full h-full bg-gradient-to-br from-white/5 via-black/40 to-black/60 flex flex-col items-center justify-center relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                                {/* Content */}
                                <div className="relative z-10 text-center space-y-2">
                                    <p className="font-[family-name:var(--font-manrope)] text-[0.65rem] tracking-[0.4em] uppercase text-[#C89B7B] font-medium">
                                        Observatory, PK
                                    </p>
                                    <p className="font-[family-name:var(--font-playfair)] text-2xl lg:text-3xl text-white italic">
                                        200ft
                                    </p>
                                    <p className="font-[family-name:var(--font-manrope)] text-[0.6rem] tracking-[0.3em] uppercase text-white/50">
                                        Elevation
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* RIGHT COLUMN - The Narrative - TIGHTER SPACING */}
                    <div className="relative order-2 lg:order-2 flex flex-col justify-center space-y-4 lg:space-y-5">

                        {/* Eyebrow - Trust Signal */}
                        <motion.div
                            custom={0}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            variants={textVariants}
                        >
                            <p className="text-[#C89B7B] text-xs tracking-[0.4em] uppercase font-normal font-[family-name:var(--font-manrope)] opacity-60">
                                Hindu Kush Stargazing
                            </p>
                        </motion.div>

                        {/* Headline - Split Text Reveal */}
                        <motion.div
                            custom={1}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            variants={textVariants}
                        >
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-playfair)] text-white leading-[1.1]">
                                Pakistan's First
                                <br />
                                <span className="italic text-white/90 text-[1.1em]">Celestial Observatory</span>
                            </h2>
                        </motion.div>

                        {/* Body Copy - TIGHTER */}
                        <motion.div
                            custom={2}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            variants={textVariants}
                        >
                            <p className="text-white/80 text-sm md:text-base font-[family-name:var(--font-manrope)] font-light leading-relaxed max-w-xl">
                                An unhindered view of the Hindu Kush night sky, curated by our resident astronomer. Experience celestial wonders through state-of-the-art telescopes at 9,200ft elevation.
                            </p>
                        </motion.div>

                        {/* Unique Features Checklist - COMPACT */}
                        <motion.div
                            custom={3}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            variants={textVariants}
                            className="pt-2"
                        >
                            <div className="flex flex-wrap gap-4 lg:gap-6">
                                {features.map((feature, index) => (
                                    <motion.div
                                        key={feature.label}
                                        className="flex items-center gap-2.5 group"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                        transition={{
                                            duration: 0.6,
                                            delay: 0.8 + (index * 0.1),
                                            ease: [0.16, 1, 0.3, 1],
                                        }}
                                    >
                                        {/* Diamond Shape (Rotated Square) - Mountain Peak Aesthetic */}
                                        <div className="w-9 h-9 rotate-45 border border-white/10 flex items-center justify-center group-hover:border-[#C89B7B]/40 transition-all duration-300 shrink-0">
                                            <feature.icon className="w-4 h-4 text-[#C89B7B] -rotate-45" strokeWidth={1.5} />
                                        </div>
                                        <span className="text-white/70 text-sm font-[family-name:var(--font-manrope)] font-medium">
                                            {feature.label}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Signature - SMALLER */}
                        <motion.div
                            custom={4}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            variants={textVariants}
                            className="pt-3"
                        >
                            <p className="text-[#C89B7B] text-xl md:text-2xl font-[family-name:var(--font-playfair)] italic opacity-60">
                                Where Earth Meets Sky
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
