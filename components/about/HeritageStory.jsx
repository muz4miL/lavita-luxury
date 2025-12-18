'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const heritageData = [
    {
        year: '1985',
        title: 'Stewards of the Valley',
        body: 'For over three decades, the Shelton Group has been the defining name in Swat\'s hospitality. From the bustling streets of Mingora to the quiet peaks, we have hosted generations with the warmth of Pashtun culture.',
        image: '/about/heritage1.png', // Origin/Land
    },
    {
        year: '2024',
        title: 'Reviving the Services Club',
        body: 'Lavita is not a hotel. It is a return to the era of the Services Club—exclusive sanctuaries built for privacy, protocol, and community. Modeled after the historic clubs of Peshawar, this is a place of belonging.',
        image: '/lifestyle-hero.png', // Hospitality interior
    },
    {
        year: '2025',
        title: 'Architecture Against the Odds',
        body: 'Constructing a triple-glazed glass dome at 9,200ft was deemed impossible. Designed by HMI Architects, Lavita stands as an engineering marvel, suspended between the rock and the sky.',
        image: '/intro.png', // Architecture/Final result
    },
];

const HeritageBlock = ({ data, index, activeIndex, onActivate }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        margin: '-40% 0px -40% 0px',
        amount: 0.5
    });

    useEffect(() => {
        if (isInView) {
            onActivate(index);
        }
    }, [isInView, index, onActivate]);

    return (
        <motion.div
            ref={ref}
            className="relative min-h-[60vh] lg:min-h-screen flex items-center"
        >
            {/* Timeline Indicator */}
            <div className="absolute left-0 top-0 bottom-0 w-px">
                <motion.div
                    className="absolute left-0 top-0 bottom-0 w-px bg-[#C89B7B]"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: isInView ? 1 : 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    style={{ transformOrigin: 'top' }}
                />
                <motion.div
                    className="absolute left-[-3px] top-1/2 -translate-y-1/2 w-[7px] h-[7px] rounded-full bg-[#C89B7B]"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                        scale: isInView ? 1 : 0,
                        opacity: isInView ? 1 : 0
                    }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                />
            </div>

            {/* Content */}
            <div className="pl-12 lg:pl-16 pr-8">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{
                        opacity: isInView ? 1 : 0.5,
                        x: isInView ? 0 : -20
                    }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Year Label */}
                    <motion.p
                        className="font-sans text-sm lg:text-base text-[#C89B7B] tracking-[0.3em] mb-6 lg:mb-8"
                        animate={{
                            opacity: isInView ? 1 : 0.5
                        }}
                    >
                        {data.year}
                    </motion.p>

                    {/* Title */}
                    <h3 className="font-serif text-4xl lg:text-5xl xl:text-6xl text-white font-light mb-6 lg:mb-8 leading-tight">
                        {data.title}
                    </h3>

                    {/* Body */}
                    <p className="font-sans text-base lg:text-lg text-gray-300 leading-relaxed max-w-xl">
                        {data.body}
                    </p>
                </motion.div>

                {/* Mobile Image */}
                <motion.div
                    className="lg:hidden mt-12 relative aspect-video overflow-hidden rounded-lg"
                    initial={{ opacity: 1, y: 0 }}
                >
                    <Image
                        src={data.image}
                        alt={data.title}
                        fill
                        className="object-cover"
                    />
                </motion.div>
            </div>
        </motion.div>
    );
};

const StickyImageContainer = ({ activeIndex }) => {
    return (
        <div className="sticky top-0 h-screen flex flex-col justify-center p-8 lg:p-12">
            <div className="relative w-full aspect-video rounded-xl shadow-2xl overflow-hidden">
                {heritageData.map((data, index) => (
                    <motion.div
                        key={index}
                        className="absolute inset-0"
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: activeIndex === index ? 1 : 0,
                            filter: activeIndex === index
                                ? 'grayscale(0%) brightness(1)'
                                : 'grayscale(100%) brightness(0.7)'
                        }}
                        transition={{
                            opacity: { duration: 0.8, ease: 'easeInOut' },
                            filter: { duration: 0.8, ease: 'easeInOut' }
                        }}
                    >
                        <Image
                            src={data.image}
                            alt={data.title}
                            fill
                            className="object-cover"
                            priority={index === 0}
                        />
                    </motion.div>
                ))}

                {/* Subtle Vignette */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none" />
            </div>
        </div>
    );
};

export default function HeritageStory() {
    const [activeIndex, setActiveIndex] = useState(0);

    // Track which section is in view
    const sectionRefs = useRef([]);

    return (
        <section className="relative bg-[#0D1512] py-20 lg:py-32">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Section Header */}
                <motion.div
                    className="mb-16 lg:mb-24 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="font-sans text-sm lg:text-base text-[#C89B7B] tracking-[0.3em] mb-4">
                        OUR LEGACY
                    </p>
                    <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl text-white font-light">
                        A Heritage of Excellence
                    </h2>
                </motion.div>

                {/* Desktop: Two Column Layout */}
                <div className="hidden lg:grid lg:grid-cols-2 lg:gap-12 xl:gap-16">
                    {/* Left Column: Scrolling Text with Timeline */}
                    <div className="relative">
                        {/* Vertical Timeline Base Line */}
                        <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10" />

                        {/* Heritage Blocks */}
                        <div className="space-y-0">
                            {heritageData.map((data, index) => (
                                <HeritageBlock
                                    key={index}
                                    data={data}
                                    index={index}
                                    activeIndex={activeIndex}
                                    onActivate={setActiveIndex}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Sticky Image Container */}
                    <StickyImageContainer activeIndex={activeIndex} />
                </div>

                {/* Mobile: Vertical Stack */}
                <div className="lg:hidden relative">
                    {/* Vertical Timeline Base Line */}
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10" />

                    {/* Heritage Blocks */}
                    <div className="space-y-16">
                        {heritageData.map((data, index) => (
                            <HeritageBlock
                                key={index}
                                data={data}
                                index={index}
                                activeIndex={activeIndex}
                                onActivate={setActiveIndex}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

