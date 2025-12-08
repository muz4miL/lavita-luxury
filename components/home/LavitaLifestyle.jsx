'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

export default function LavitaLifestyle() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
            }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3,
            }
        }
    };

    return (
        <section
            ref={sectionRef}
            className="relative w-full overflow-hidden bg-gradient-to-b from-[#050F0D] via-[#0A1613] to-black py-12 lg:py-16"
        >
            {/* Noise Texture Overlay */}
            <div
                className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
                }}
            />

            <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
                {/* MOBILE: Flex Column (Image First) | DESKTOP: Grid (Text Left, Image Right) */}
                <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-10 lg:items-center">

                    {/* MOBILE ORDER 1 (Image First) | DESKTOP ORDER 2 (Right Column) */}
                    <div className="order-1 lg:order-2 lg:col-span-7 relative">
                        {/* Main Hero Image - Full Width on Mobile with Generous Margins */}
                        <motion.div
                            className="relative h-[350px] md:h-[500px] lg:h-[550px] rounded-sm overflow-hidden my-8 lg:my-0"
                            initial={{ opacity: 0, scale: 1.05 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.05 }}
                            transition={{
                                duration: 1,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                        >
                            <Image
                                src="/lifestyle-hero.jpg"
                                alt="Malam Jabba Adventure - Skiing and Mountain Views"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 60vw"
                                priority
                            />

                            {/* Image Overlay for Contrast */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />

                            {/* Subtle Border */}
                            <div className="absolute inset-0 border border-white/5" />
                        </motion.div>

                        {/* Floating Category Cards - 2x2 Grid on Mobile, Overlapping on Desktop */}
                        <motion.div
                            className="relative lg:absolute lg:-bottom-4 lg:-left-8 lg:w-3/4 z-10 mt-6 lg:mt-0"
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            variants={staggerContainer}
                        >
                            <div className="grid grid-cols-2 gap-2.5">
                                {/* Winter Card */}
                                <motion.div
                                    variants={fadeInUp}
                                    className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 rounded-sm p-3.5 hover:border-[#C89B7B]/30 transition-all duration-300"
                                >
                                    <div className="flex flex-col items-center text-center space-y-2.5">
                                        <svg className="w-5 h-5 text-[#C89B7B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                        </svg>
                                        <div>
                                            <h3 className="text-white text-[10px] tracking-[0.2em] uppercase font-semibold font-[family-name:var(--font-manrope)] mb-1">
                                                Winter
                                            </h3>
                                            <p className="text-white/60 text-[10px] font-[family-name:var(--font-manrope)] font-light leading-snug">
                                                Premier Alpine Sports
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Thrills Card */}
                                <motion.div
                                    variants={fadeInUp}
                                    className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 rounded-sm p-3.5 hover:border-[#C89B7B]/30 transition-all duration-300"
                                >
                                    <div className="flex flex-col items-center text-center space-y-2.5">
                                        <svg className="w-5 h-5 text-[#C89B7B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                        <div>
                                            <h3 className="text-white text-[10px] tracking-[0.2em] uppercase font-semibold font-[family-name:var(--font-manrope)] mb-1">
                                                Thrills
                                            </h3>
                                            <p className="text-white/60 text-[10px] font-[family-name:var(--font-manrope)] font-light leading-snug">
                                                Adventure Park
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Luxury Card */}
                                <motion.div
                                    variants={fadeInUp}
                                    className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 rounded-sm p-3.5 hover:border-[#C89B7B]/30 transition-all duration-300"
                                >
                                    <div className="flex flex-col items-center text-center space-y-2.5">
                                        <svg className="w-5 h-5 text-[#C89B7B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                                        </svg>
                                        <div>
                                            <h3 className="text-white text-[10px] tracking-[0.2em] uppercase font-semibold font-[family-name:var(--font-manrope)] mb-1">
                                                Luxury
                                            </h3>
                                            <p className="text-white/60 text-[10px] font-[family-name:var(--font-manrope)] font-light leading-snug">
                                                Wellness & Leisure
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Heritage Card */}
                                <motion.div
                                    variants={fadeInUp}
                                    className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 rounded-sm p-3.5 hover:border-[#C89B7B]/30 transition-all duration-300"
                                >
                                    <div className="flex flex-col items-center text-center space-y-2.5">
                                        <svg className="w-5 h-5 text-[#C89B7B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                        <div>
                                            <h3 className="text-white text-[10px] tracking-[0.2em] uppercase font-semibold font-[family-name:var(--font-manrope)] mb-1">
                                                Heritage
                                            </h3>
                                            <p className="text-white/60 text-[10px] font-[family-name:var(--font-manrope)] font-light leading-snug">
                                                Buddhist Sites
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>

                    {/* MOBILE ORDER 2 (Content After Image) | DESKTOP ORDER 1 (Left Column) */}
                    <motion.div
                        className="order-2 lg:order-1 lg:col-span-5 lg:pr-8 text-center lg:text-left"
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={fadeInUp}
                    >
                        {/* Small Eyebrow - Centered on Mobile */}
                        <div className="mb-6 lg:mb-8 flex items-center justify-center lg:justify-start gap-3">
                            <div className="h-[1px] w-10 bg-gradient-to-r from-[#C89B7B] to-transparent" />
                            <span className="text-[#C89B7B] text-[9px] tracking-[0.4em] uppercase font-medium font-[family-name:var(--font-manrope)]">
                                At The Apex of The Hindu Kush
                            </span>
                        </div>

                        {/* MASSIVE HEADLINE - Centered on Mobile, Proportional Size */}
                        <h2 className="mb-6 lg:mb-8">
                            <span className="block text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-[family-name:var(--font-playfair)] font-light tracking-tight leading-[0.9] text-white uppercase">
                                Beyond The
                            </span>
                            <span className="block text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-[family-name:var(--font-playfair)] font-light tracking-tight leading-[0.9] text-white uppercase mt-1">
                                Residence
                            </span>
                            <span className="block text-xl md:text-3xl lg:text-4xl xl:text-5xl font-[family-name:var(--font-playfair)] italic font-light tracking-tight leading-[1.1] text-[#C89B7B] mt-4 lg:mt-6">
                                Find True Adventure
                            </span>
                        </h2>

                        {/* Concise Description - Centered, Full Width on Mobile, Min 16px */}
                        <div className="mb-6 lg:mb-8 px-0">
                            <p className="text-white/75 text-base md:text-sm font-[family-name:var(--font-manrope)] font-light leading-relaxed max-w-full lg:max-w-sm mx-auto lg:mx-0">
                                Malam Jabba is Pakistan's largest ski destination. At 9,200ft, experience world-class winter sports and year-round adventure.
                            </p>
                        </div>

                        {/* CTA Button - Full Width on Mobile */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.8,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className="w-full lg:w-auto"
                        >
                            <a
                                href="/experiences"
                                className="group inline-flex items-center justify-center gap-2.5 px-5 py-3.5 border border-[#C89B7B]/30 rounded-sm bg-[#C89B7B]/5 backdrop-blur-sm hover:bg-[#C89B7B]/10 hover:border-[#C89B7B]/50 transition-all duration-300 w-full lg:w-auto"
                            >
                                <span className="text-white text-xs tracking-[0.15em] uppercase font-medium font-[family-name:var(--font-manrope)]">
                                    View All Amenities & Activities
                                </span>
                                <svg
                                    className="w-3.5 h-3.5 text-[#C89B7B] transition-transform duration-300 group-hover:translate-x-1"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
