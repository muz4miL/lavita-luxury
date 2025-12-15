'use client';

import { Star, Droplets, ThermometerSun } from 'lucide-react';

// Pre-defined star positions and animation durations to avoid hydration mismatch
const starPositions = [
  { left: 5, top: 12, duration: 5.2 }, { left: 15, top: 8, duration: 4.8 }, { left: 25, top: 22, duration: 6.3 },
  { left: 35, top: 5, duration: 3.7 }, { left: 45, top: 18, duration: 5.9 }, { left: 55, top: 3, duration: 4.1 },
  { left: 65, top: 25, duration: 6.7 }, { left: 75, top: 10, duration: 5.4 }, { left: 85, top: 20, duration: 3.9 },
  { left: 95, top: 7, duration: 4.6 }, { left: 10, top: 35, duration: 6.1 }, { left: 20, top: 42, duration: 5.8 },
  { left: 30, top: 30, duration: 4.3 }, { left: 40, top: 48, duration: 6.5 }, { left: 50, top: 38, duration: 3.5 },
  { left: 60, top: 45, duration: 5.1 }, { left: 70, top: 32, duration: 4.9 }, { left: 80, top: 50, duration: 6.8 },
  { left: 90, top: 40, duration: 5.6 }, { left: 3, top: 55, duration: 3.3 }, { left: 12, top: 62, duration: 4.4 },
  { left: 22, top: 58, duration: 6.2 }, { left: 32, top: 68, duration: 5.7 }, { left: 42, top: 52, duration: 3.8 },
  { left: 52, top: 72, duration: 4.7 }, { left: 62, top: 60, duration: 6.4 }, { left: 72, top: 78, duration: 5.3 },
  { left: 82, top: 65, duration: 3.6 }, { left: 92, top: 70, duration: 4.5 }, { left: 8, top: 82, duration: 6.9 },
  { left: 18, top: 88, duration: 5.5 }, { left: 28, top: 75, duration: 3.4 }, { left: 38, top: 92, duration: 4.2 },
  { left: 48, top: 85, duration: 6.6 }, { left: 58, top: 95, duration: 5.0 }, { left: 68, top: 80, duration: 3.2 },
  { left: 78, top: 90, duration: 4.0 }, { left: 88, top: 77, duration: 6.0 }, { left: 98, top: 88, duration: 5.2 },
  { left: 2, top: 15, duration: 4.8 }, { left: 97, top: 28, duration: 6.3 }, { left: 7, top: 47, duration: 3.7 },
  { left: 93, top: 55, duration: 5.9 }, { left: 17, top: 73, duration: 4.1 }, { left: 87, top: 33, duration: 6.7 },
  { left: 27, top: 95, duration: 5.4 }, { left: 77, top: 4, duration: 3.9 }, { left: 47, top: 67, duration: 4.6 },
  { left: 67, top: 15, duration: 6.1 },
];

export default function OpenSky() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center px-4 py-16 overflow-hidden bg-[#020508]">

      {/* 1. SEAMLESS FLOW GRADIENT (Critical for blending) */}
      {/* This creates a long fade from the previous section's Dark Green (#0D1512) into the Space Black */}
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-[#0D1512] via-[#0D1512]/80 to-transparent z-10 pointer-events-none" />

      {/* 2. ATMOSPHERIC BACKGROUND (The "Nebula" Glow) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1a2e35]/20 via-[#020508] to-[#020508]" />
      </div>

      {/* 3. PREMIUM STAR FIELD */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {starPositions.map((pos, i) => {
          // Varied star sizes and opacities for depth
          const size = i % 3 === 0 ? 'w-[2px] h-[2px]' : 'w-[1px] h-[1px]';
          const opacity = i % 2 === 0 ? 'opacity-40' : 'opacity-80';
          const animation = i % 5 === 0 ? 'animate-pulse' : '';

          return (
            <div
              key={i}
              className={`absolute bg-white rounded-full ${size} ${opacity} ${animation}`}
              style={{
                left: `${pos.left}%`,
                top: `${pos.top}%`,
                // Occasional "Glow" effect on random stars
                boxShadow: i % 15 === 0 ? '0 0 10px 2px rgba(255, 255, 255, 0.4)' : 'none',
                animationDuration: `${pos.duration}s`
              }}
            />
          );
        })}
        {/* Shooting Star */}
        <div className="absolute top-1/3 left-[10%] w-[200px] h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 animate-[shoot_8s_ease-in-out_infinite]" />
      </div>

      {/* 4. THE LUXURY GLASS CARD (Compact & Panoramic) */}
      <div className="relative z-20 w-full max-w-4xl mx-auto">
        <div className="relative bg-[#0D1512]/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 text-center shadow-[0_0_50px_rgba(0,0,0,0.5)]">

          {/* Bronze Accent Line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-[#C89B7B] to-transparent" />

          {/* Label */}
          <div className="inline-flex items-center gap-3 mb-6">
            <Star className="w-3 h-3 text-[#C89B7B]" />
            <span className="text-[#C89B7B] text-[10px] tracking-[0.3em] uppercase font-medium">9,200ft Elevation</span>
            <Star className="w-3 h-3 text-[#C89B7B]" />
          </div>

          {/* Cinematic Typography */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-playfair font-light leading-[1.1] mb-6">
            A Window to <br />
            <span className="italic text-[#C89B7B] opacity-90">The Universe</span>
          </h2>

          {/* Description - Wider max-width for better reading flow */}
          <p className="text-white/70 text-sm md:text-base font-light leading-relaxed max-w-2xl mx-auto mb-10">
            Far above the haze, the night sky of Malam Jabba reveals the Milky Way in high-definition clarity.
            Our Triple-Glazed Heated Glass Domes offer a front-row seat to the cosmos in absolute warmth and comfort.
          </p>

          {/* Feature Icons (Minimalist Horizontal Row) */}
          <div className="flex justify-center items-center gap-8 md:gap-16 mb-10 border-t border-white/5 pt-8">
            <div className="flex flex-col items-center gap-2 group cursor-default">
              <ThermometerSun className="w-5 h-5 text-[#C89B7B]/80 group-hover:text-[#C89B7B] transition-colors" />
              <span className="text-[10px] uppercase tracking-widest text-white/60">Climate Control</span>
            </div>
            <div className="flex flex-col items-center gap-2 group cursor-default">
              <div className="w-[1px] h-8 bg-white/10" /> {/* Vertical Divider */}
            </div>
            <div className="flex flex-col items-center gap-2 group cursor-default">
              <Droplets className="w-5 h-5 text-[#C89B7B]/80 group-hover:text-[#C89B7B] transition-colors" />
              <span className="text-[10px] uppercase tracking-widest text-white/60">Rainfall Shower</span>
            </div>
          </div>

          {/* Elegant Button */}
          <button className="group relative px-10 py-3.5 bg-[#C89B7B]/10 hover:bg-[#C89B7B]/20 border border-[#C89B7B]/30 rounded-sm transition-all duration-500 overflow-hidden">
            <span className="relative text-[#C89B7B] text-xs tracking-[0.2em] uppercase font-semibold group-hover:text-white transition-colors z-10">
              Reserve A Dome
            </span>
            <div className="absolute inset-0 bg-[#C89B7B] opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-0" />
          </button>

        </div>
      </div>
    </section>
  );
}
