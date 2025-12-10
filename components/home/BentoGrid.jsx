'use client';
'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const experienceItems = [
  {
    id: 1,
    // Portrait orientation - Index 0 (even)
    url: '/amenities/sky-pool-portrait.png',
    title: 'SKY POOL',
    label: 'Heated Rooftop Infinity Pool',
    description: 'Swim among the clouds with 28-30°C water and panoramic mountain views all year round.',
  },
  {
    id: 2,
    // Landscape orientation - Index 1 (odd)
    url: '/amenities/panorama-dining.png',
    title: 'DINING',
    label: 'Panorama Restaurant',
    description: 'Fine dining featuring local specialties and international cuisine with spectacular 360° vistas.',
  },
  {
    id: 3,
    // Portrait orientation - Index 2 (even)
    url: '/amenities/wellness-vertical.png',
    title: 'WELLNESS',
    label: 'Health Club & Spa',
    description: 'State-of-the-art gym, serene yoga studio, and rejuvenating sauna facilities.',
  },
  {
    id: 4,
    // Landscape orientation - Index 3 (odd)
    url: '/amenities/kids-zone.png',
    title: 'FAMILY',
    label: 'Kids Activity Zone',
    description: 'A safe, supervised world of fun with VR gaming, indoor playgrounds, and storytelling nights.',
  },
  {
    id: 5,
    // Portrait orientation - Index 4 (even)
    url: '/amenities/events-vertical.png',
    title: 'EVENTS',
    label: 'Celebrations & Bonfires',
    description: 'Memorable events with scenic backdrops, from traditional Attan nights to corporate retreats.',
  },
  {
    id: 6,
    // Landscape orientation - Index 5 (odd)
    url: '/amenities/adventure.png',
    title: 'ADVENTURE',
    label: 'Alpine Exploration',
    description: 'Thrilling outdoor experiences including guided trekking, wildlife viewing, and seasonal winter sports.',
  },
];

export default function HorizontalScrollCarousel() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Optimized scroll range for 6 items - calibrated to show all items without overshooting
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-130%"]);

  return (
    <section
      ref={targetRef}
      className="relative bg-[#0D1512]"
      style={{ height: '500vh' }}
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
              Club Privileges
            </span>
          </div>
          <h2 className="font-playfair text-3xl md:text-4xl font-light tracking-tight text-white/90">
            Curated Experiences
          </h2>
        </div>

        {/* Horizontal Scrolling Track - Optimized with will-change */}
        <motion.div
          style={{ x, willChange: 'transform' }}
          className="absolute inset-0 flex items-end pb-20 gap-0 pl-[15vw]"
        >
          {experienceItems.map((item, index) => {
            // Alternate between portrait and landscape
            const isPortrait = index % 2 === 0;

            return (
              <div
                key={item.id}
                className="relative flex-shrink-0 flex items-center"
                style={{
                  marginRight: isPortrait ? 'clamp(40px, 8vw, 80px)' : 'clamp(60px, 12vw, 150px)',
                }}
              >
                {/* Vertical Text for Portrait, Horizontal for Landscape */}
                {isPortrait ? (
                  // Portrait Layout - Vertical Text
                  <div className="relative flex-shrink-0 h-[50vh] flex items-center justify-center mr-6 md:mr-8" style={{ width: '10vh' }}>
                    <h3
                      className="font-playfair text-[8vh] md:text-[9vh] font-light text-white/10 whitespace-nowrap select-none absolute"
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
                  <div className="absolute -top-16 left-0 z-10">
                    <h3 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-light text-white/10 whitespace-nowrap select-none tracking-tight">
                      {item.title}
                    </h3>
                  </div>
                )}

                {/* Image Card - Varied Aspect Ratios - SMALLER SIZES */}
                <div className="relative flex-shrink-0 group">
                  <div
                    className="relative overflow-hidden rounded-sm"
                    style={{
                      // Significantly reduced widths for that "petite" premium look
                      width: isPortrait ? 'min(25vw, 320px)' : 'min(40vw, 500px)',
                      aspectRatio: isPortrait ? '3/4' : '16/9',
                    }}
                  >
                    {/* Image */}
                    <Image
                      src={item.url}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                      sizes={isPortrait ? "(max-width: 768px) 30vw, 320px" : "(max-width: 768px) 45vw, 500px"}
                    />

                    {/* Subtle Border */}
                    <div className="absolute inset-0 border border-white/10 group-hover:border-[#C89B7B]/20 transition-colors duration-700" />

                    {/* Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-100 group-hover:opacity-100 transition-opacity duration-700" />

                    {/* Text Overlay ON Image - Casa Angelina Style */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                      <div className="mb-2">
                        <span className="text-[#C89B7B] group-hover:text-[#D4AF8A] text-[10px] tracking-[0.25em] uppercase font-medium transition-colors duration-500">
                          {item.label}
                        </span>
                      </div>
                      <p className="text-white/70 group-hover:text-white text-xs md:text-sm font-light leading-relaxed transition-colors duration-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* End Spacer - Ensures last card is fully visible */}
          <div className="flex-shrink-0 w-[50vw]" />
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
