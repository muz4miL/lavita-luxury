'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Testimonials() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    const testimonialsData = [
        { name: 'Ayesha Malik', title: 'Lifestyle Member', quote: '"The Lavita Club isn\'t just a destination, it\'s a lifestyle. Access to the exclusive ski slopes and the heated infinity pool makes membership essential for winter sports lovers."' },
        { name: 'Ahmed Khan', title: 'Founding Member', quote: '"The seamless integration of The Hearth lounge and the slopes is brilliant. It\'s the perfect place to unwind with a cigar after a day on the powder. Proud to be a member."' },
        { name: 'Emily Chen', title: 'Corporate Member', quote: '"Using the Executive Business Hub at 9,200ft gave my team a fresh perspective. The perfect balance of business and leisure services."' },
        { name: 'Hassan Ali', title: 'Elite Member', quote: '"I joined for the skiing, but I stay for the community. The networking at the cigar lounge is as valuable as the amenities are luxurious."' },
        { name: 'Fatima Siddiqui', title: 'Club Member', quote: '"The Heritage Centre adds such a unique layer to the club. It\'s not just about luxury; it\'s about connecting with the rich history of Swat."' },
        { name: 'Zain Abbas', title: 'Member', quote: '"As an architect, I appreciate the glass-dome structure. As a member, I appreciate the privacy and the impeccable service at the Wellness Club."' },
    ];

    // Duplicate for infinite scroll effect
    const topRowTestimonials = [...testimonialsData, ...testimonialsData];
    const bottomRowTestimonials = [...testimonialsData.slice().reverse(), ...testimonialsData.slice().reverse()];

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

    return (
        <section
            ref={sectionRef}
            className="relative w-full overflow-hidden bg-[#0D1512] py-12 lg:py-16"
        >
            {/* Noise Texture Overlay */}
            <div
                className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
                }}
            />

            <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
                {/* Header Section */}
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={fadeInUp}
                    className="text-center mb-12 lg:mb-16"
                >
                    {/* Eyebrow - Matching LavitaLifestyle Style */}
                    <div className="mb-6 flex items-center justify-center gap-3">
                        <div className="h-[1px] w-10 bg-gradient-to-r from-transparent to-[#C89B7B]" />
                        <span className="text-[#C89B7B] text-[10px] tracking-[0.35em] uppercase font-medium">
                            Member Experiences
                        </span>
                        <div className="h-[1px] w-10 bg-gradient-to-r from-[#C89B7B] to-transparent" />
                    </div>

                    {/* Main Title */}
                    <h2 className="mb-4 lg:mb-5">
                        <span className="block text-3xl md:text-5xl lg:text-6xl font-playfair font-light tracking-tight leading-[1.1] text-white">
                            Voices of Our Community
                        </span>
                    </h2>

                    {/* Subtext */}
                    <p className="text-white/60 text-sm md:text-base font-light mb-0 max-w-2xl mx-auto">
                        Reflections from our distinguished members.
                    </p>
                </motion.div>
            </div>

            {/* Scrolling Testimonials - Full Viewport Width */}
            <div className="relative w-full">
                {/* Top Row - Scrolling Right to Left */}
                <div className="mb-4 overflow-hidden">
                    <motion.div
                        className="flex gap-6"
                        animate={{
                            x: [0, -1920],
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 40,
                                ease: "linear",
                            },
                        }}
                    >
                        {topRowTestimonials.map((testimonial, index) => (
                            <div
                                key={`top-${index}`}
                                className="flex-shrink-0 w-[360px] bg-white/5 backdrop-blur-md border border-white/10 rounded-sm p-5 hover:border-[#C89B7B]/30 transition-all duration-300"
                            >
                                {/* Avatar Placeholder */}
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-full bg-[#C89B7B]/20 border border-[#C89B7B]/30 flex items-center justify-center">
                                        <span className="text-[#C89B7B] text-lg font-semibold font-[family-name:var(--font-playfair)]">
                                            {testimonial.name.charAt(0)}
                                        </span>
                                    </div>
                                    <div>
                                        <h4 className="text-white text-sm font-semibold font-[family-name:var(--font-manrope)]">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-white/50 text-xs font-[family-name:var(--font-manrope)]">
                                            {testimonial.title}
                                        </p>
                                    </div>
                                </div>

                                {/* Quote */}
                                <blockquote className="text-white/80 text-sm font-light font-[family-name:var(--font-manrope)] leading-relaxed italic">
                                    {testimonial.quote}
                                </blockquote>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Bottom Row - Scrolling Left to Right */}
                <div className="overflow-hidden">
                    <motion.div
                        className="flex gap-6"
                        animate={{
                            x: [-1920, 0],
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 40,
                                ease: "linear",
                            },
                        }}
                    >
                        {bottomRowTestimonials.map((testimonial, index) => (
                            <div
                                key={`bottom-${index}`}
                                className="flex-shrink-0 w-[360px] bg-white/5 backdrop-blur-md border border-white/10 rounded-sm p-5 hover:border-[#C89B7B]/30 transition-all duration-300"
                            >
                                {/* Avatar Placeholder */}
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-full bg-[#C89B7B]/20 border border-[#C89B7B]/30 flex items-center justify-center">
                                        <span className="text-[#C89B7B] text-lg font-semibold font-[family-name:var(--font-playfair)]">
                                            {testimonial.name.charAt(0)}
                                        </span>
                                    </div>
                                    <div>
                                        <h4 className="text-white text-sm font-semibold font-[family-name:var(--font-manrope)]">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-white/50 text-xs font-[family-name:var(--font-manrope)]">
                                            {testimonial.title}
                                        </p>
                                    </div>
                                </div>

                                {/* Quote */}
                                <blockquote className="text-white/80 text-sm font-light font-[family-name:var(--font-manrope)] leading-relaxed italic">
                                    {testimonial.quote}
                                </blockquote>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
