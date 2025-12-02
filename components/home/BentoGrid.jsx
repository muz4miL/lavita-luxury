'use client';

import { Gamepad2, Building2, Trees } from 'lucide-react';

const bentoItems = [
  {
    id: 'hbk-arcade',
    title: 'The HBK Arcade',
    subtitle: 'VR Zones & Soft Play Arena',
    label: 'FAMILY ENTERTAINMENT',
    icon: Gamepad2,
    size: 'large',
    image: 'https://images.unsplash.com/photo-1555864326-5cf22ef123cf?q=80&w=2067&auto=format&fit=crop',
  },
  {
    id: 'corporate',
    title: 'Sky-High Retreats',
    subtitle: 'Executive Halls with Panoramic Views',
    label: 'CORPORATE EVENTS',
    icon: Building2,
    size: 'small',
    image: '/images/corporate.png',
  },
  {
    id: 'adventure',
    title: 'Alpine Adventures',
    subtitle: '800m Zipline & Night Skiing',
    label: 'MALAM JABBA EXCLUSIVE',
    icon: Trees,
    size: 'small',
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=2070&auto=format&fit=crop',
  },
];

export default function BentoGrid() {
  return (
    <section className="relative bg-[var(--midnight-pine)] px-6 py-24 lg:px-8 lg:py-40 before:content-[''] before:absolute before:inset-0 before:pointer-events-none" style={{ '::before': { background: 'radial-gradient(ellipse 100% 50% at 50% 0%, rgba(200, 155, 123, 0.03) 0%, transparent 50%)' } }}>
      <div className="max-w-[1200px] mx-auto relative z-[1]">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-5 mb-5">
            <span className="w-10 h-px opacity-60" style={{ background: 'linear-gradient(90deg, transparent 0%, var(--brushed-copper) 100%)' }} />
            <span className="font-[family-name:var(--font-manrope)] text-[0.6875rem] tracking-[0.25em] uppercase text-[var(--brushed-copper)] font-semibold">Experiences</span>
            <span className="w-10 h-px opacity-60" style={{ background: 'linear-gradient(90deg, var(--brushed-copper) 0%, transparent 100%)' }} />
          </div>
          <h2 className="font-[family-name:var(--font-playfair)] text-[2.25rem] md:text-[2.75rem] font-medium text-[var(--text-light)] mb-3">Resort Lifestyle</h2>
          <p className="font-[family-name:var(--font-manrope)] text-base text-[rgba(245,245,245,0.5)] font-normal">
            Curated experiences that transcend the ordinary
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-5 md:gap-6">
          {bentoItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className={`group relative overflow-hidden cursor-pointer min-h-[320px] md:min-h-[240px] flex flex-col justify-end p-8 rounded-2xl bg-cover bg-center bg-no-repeat transition-all duration-[600ms] cubic-bezier(0.16,1,0.3,1) hover:translate-y-[-10px] before:content-[''] before:absolute before:inset-0 before:border before:border-[rgba(255,255,255,0.08)] before:rounded-2xl before:transition-all before:duration-400 before:z-[3] before:pointer-events-none hover:before:border-[rgba(200,155,123,0.4)] hover:before:shadow-[0_30px_60px_rgba(0,0,0,0.5),0_0_40px_rgba(200,155,123,0.15),inset_0_1px_0_rgba(255,255,255,0.05)] ${item.size === 'large' ? 'min-h-[360px] md:row-span-2 md:min-h-auto' : ''
                  }`}
              >
                {/* Background Image with Zoom Effect */}
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 ease-out group-hover:scale-110 z-0"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                {/* Gradient overlay - Darkens on hover for "Deep Focus" */}
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.9)] via-[rgba(0,0,0,0.6)] via-40% to-[rgba(0,0,0,0.2)] z-[1] transition-all duration-500 ease-out group-hover:from-[rgba(0,0,0,0.95)] group-hover:via-[rgba(0,0,0,0.7)]" />

                {/* Label badge - Frosted Glass */}
                <div className="absolute top-7 left-7 z-[3]">
                  <span className="font-[family-name:var(--font-manrope)] text-[0.625rem] font-semibold tracking-[0.2em] uppercase text-[var(--brushed-copper)] px-[0.875rem] py-2 backdrop-blur-md bg-white/5 border border-[rgba(200,155,123,0.2)] rounded-[2rem] transition-all duration-300">
                    {item.label}
                  </span>
                </div>

                {/* Icon - Diamond Shape (Alpine Noir) */}
                <div className="absolute top-7 right-7 w-[52px] h-[52px] rotate-45 bg-[rgba(255,255,255,0.08)] backdrop-blur-[8px] border border-white/10 flex items-center justify-center z-[3] transition-all duration-[400ms] cubic-bezier(0.16,1,0.3,1)">
                  <IconComponent className="w-[22px] h-[22px] text-[var(--brushed-copper)] -rotate-45" />
                </div>

                {/* Content at bottom */}
                <div className="relative z-[2]">
                  <h3 className={`font-[family-name:var(--font-playfair)] text-[1.625rem] ${item.size === 'large' ? 'md:text-[2rem]' : ''} font-medium text-[var(--text-light)] mb-2 transition-all duration-300 shadow-[0_2px_10px_rgba(0,0,0,0.5)]`}>
                    {item.title}
                  </h3>
                  <p className="font-[family-name:var(--font-manrope)] text-[0.9375rem] text-[rgba(245,245,245,0.7)] font-normal tracking-[0.02em] shadow-[0_1px_8px_rgba(0,0,0,0.5)]">
                    {item.subtitle}
                  </p>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 z-[1]" style={{ background: 'radial-gradient(ellipse at bottom, rgba(200, 155, 123, 0.15) 0%, transparent 60%)' }} />
              </div>
            );
          })}
        </div>
      </div>
    </section >
  );
}
