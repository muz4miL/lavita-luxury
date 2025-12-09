'use client';
'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const experienceItems = [
  {
    id: 1,
    url: '/lifestyle-hero.png',
    title: 'SKIING',
    label: 'World-Class Slopes',
    description: 'Experience Pakistan\'s premier ski destination',
  },
  {
    id: 2,
    url: '/lifestyle-hero.png',
    title: 'WELLNESS',
    label: 'Alpine Spa',
    description: 'Rejuvenate at 9,200ft elevation',
  },
  {
    id: 3,
    url: '/lifestyle-hero.png',
    title: 'DINING',
    label: 'Culinary Excellence',
    description: 'Gourmet cuisine with mountain views',
  },
  {
    id: 4,
    url: '/lifestyle-hero.png',
    title: 'SUITES',
    label: 'Glass Dome Living',
    description: 'Architecture meets the sky',
  },
];

export default function HorizontalScrollCarousel() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Optimized scroll range - prevents jump at end
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section
      ref={targetRef}
      className="relative bg-[#0D1512]"
      style={{ height: '400vh' }}
    >
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Static Background - No Animation for Performance */}
        <div className="absolute inset-0">
          <Image
            src="/lifestyle-hero.png"
            alt="Background"
            fill
            className="object-cover opacity-20"
            style={{ filter: 'blur(8px) brightness(0.3)' }}
            priority
          />
          <div className="absolute inset-0 bg-[#0D1512]/70" />
        </div>

        {/* Noise Texture */}
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
          }}
        />

        {/* Section Header - Top Left */}
        <div className="absolute top-12 left-8 md:left-16 lg:left-24 z-30">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[1px] w-10 bg-gradient-to-r from-[#C89B7B] to-transparent" />
            <span className="text-[#C89B7B] text-[10px] tracking-[0.35em] uppercase font-medium">
              Resort Lifestyle
            </span>
          </div>
          <h2 className="font-playfair text-3xl md:text-4xl font-light tracking-tight text-white/90">
            Curated Experiences
          </h2>
        </div>

        {/* Horizontal Scrolling Track - Optimized with will-change */}
        <motion.div
          style={{ x, willChange: 'transform' }}
          className="absolute inset-0 flex items-center gap-0 pl-[10vw]"
        >
          {experienceItems.map((item, index) => {
            // Alternate between portrait and landscape
            const isPortrait = index % 2 === 0;

            return (
              <div
                key={item.id}
                className="relative flex-shrink-0 flex items-center"
                style={{
                  marginRight: isPortrait ? 'clamp(60px, 10vw, 120px)' : 'clamp(100px, 15vw, 200px)',
                }}
              >
                {/* Vertical Text for Portrait, Horizontal for Landscape */}
                {isPortrait ? (
                  // Portrait Layout - Vertical Text
                  <div className="relative flex-shrink-0 h-[70vh] flex items-center justify-center mr-6 md:mr-10" style={{ width: '15vh' }}>
                    <h3
                      className="font-playfair text-[10vh] md:text-[12vh] font-light text-white/10 whitespace-nowrap select-none absolute"
                      style={{
                        writingMode: 'vertical-rl',
                        textOrientation: 'mixed',
                        transform: 'rotate(180deg)',
                        letterSpacing: '0.05em',
                      }}
                    >
                      {item.title}
                    </h3>
                  </div>
                ) : (
                  // Landscape Layout - Horizontal Text Above
                  <div className="absolute -top-24 left-0 z-10">
                    <h3 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-light text-white/10 whitespace-nowrap select-none tracking-tight">
                      {item.title}
                    </h3>
                  </div>
                )}

                {/* Image Card - Varied Aspect Ratios */}
                <div className="relative flex-shrink-0 group">
                  <div
                    className="relative overflow-hidden rounded-sm"
                    style={{
                      width: isPortrait ? 'min(40vw, 450px)' : 'min(55vw, 700px)',
                      aspectRatio: isPortrait ? '3/4' : '16/9',
                    }}
                  >
                    {/* Image */}
                    <Image
                      src={item.url}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                      sizes={isPortrait ? "(max-width: 768px) 40vw, 450px" : "(max-width: 768px) 55vw, 700px"}
                    />

                    {/* Subtle Border */}
                    <div className="absolute inset-0 border border-white/10 group-hover:border-[#C89B7B]/20 transition-colors duration-700" />

                    {/* Minimal Gradient on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </div>

                  {/* Caption Below Image */}
                  <div className="mt-6" style={{ maxWidth: isPortrait ? 'min(40vw, 450px)' : 'min(55vw, 700px)' }}>
                    <div className="mb-2">
                      <span className="text-[#C89B7B] text-xs tracking-[0.25em] uppercase font-medium">
                        {item.label}
                      </span>
                    </div>
                    <p className="text-white/60 text-sm font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

          {/* End Spacer - Ensures last card is fully visible */}
          <div className="flex-shrink-0 w-[40vw]" />
        </motion.div>

        {/* Scroll Progress Indicator - Bottom Right */}
        <div className="absolute bottom-12 right-8 md:right-16 z-30">
          <div className="flex items-center gap-4">
            <span className="text-white/30 text-[10px] tracking-[0.3em] uppercase font-medium">
              Scroll to Explore
            </span>
            <div className="relative w-20 h-[1px] bg-white/10">
              <motion.div
                className="absolute inset-y-0 left-0 bg-[#C89B7B]"
                style={{
                  width: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
