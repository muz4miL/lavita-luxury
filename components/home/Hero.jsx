'use client';

import { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import { ChevronDown } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

export default function Hero() {
  const swiperRef = useRef(null);
  const videoRefs = useRef([]);
  const [activeSlide, setActiveSlide] = useState(0);

  const videos = [
    '/hero-videos/hero1.mp4',
    '/hero-videos/hero6.mp4',
  ];

  const addVideoRef = (el, index) => {
    if (el) {
      videoRefs.current[index] = el;
    }
  };

  // Ensure first video plays on mount + handle browser power-saving
  useEffect(() => {
    // Small delay to ensure video is ready before playing
    const playFirstVideo = () => {
      const firstVideo = videoRefs.current[0];
      if (firstVideo) {
        firstVideo.play()
          .catch(err => {
            // Silently retry if interrupted by power saving
            if (err.name === 'AbortError') {
              setTimeout(() => firstVideo.play().catch(() => { }), 100);
            }
          });
      }
    };

    // Play after component is mounted
    const timer = setTimeout(playFirstVideo, 100);

    // Resume playback when tab becomes visible again
    const handleVisibilityChange = () => {
      if (!document.hidden && videoRefs.current[activeSlide]) {
        videoRefs.current[activeSlide].play().catch(() => { });
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  const handleSlideChange = (swiper) => {
    const newIndex = swiper.activeIndex;
    setActiveSlide(newIndex);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* VIDEO CAROUSEL */}
      <div className="absolute inset-0 w-full h-full">
        <Swiper
          ref={swiperRef}
          modules={[EffectFade, Autoplay]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={1200}
          loop={false}
          rewind={true}
          slidesPerView={1}
          autoplay={{
            delay: 8000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          onSlideChange={handleSlideChange}
          className="w-full h-full"
        >
          {videos.map((video, index) => (
            <SwiperSlide key={`video-${index}`} className="w-full h-full">
              <video
                ref={(el) => addVideoRef(el, index)}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  backgroundColor: '#000'
                }}
              >
                <source src={video} type="video/mp4" />
              </video>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* TOP GRADIENT SCRIM - Protects navbar from clouds/white building (FIX #1) */}
      <div
        className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/60 to-transparent pointer-events-none z-10"
      />

      {/* LEFT-TO-RIGHT GRADIENT OVERLAY - For text readability */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 40%, transparent 70%)'
        }}
      />

      {/* BOTTOM-LEFT "THE FEELING" LAYOUT */}
      <div className="absolute inset-0 z-20 flex flex-col justify-end pb-16 md:pb-20 lg:pb-24 pl-6 md:pl-12 lg:pl-20">

        {/* Main Content Container */}
        <div className="max-w-2xl space-y-4 md:space-y-6 animate-[fadeSlideUp_0.8s_cubic-bezier(0.16,1,0.3,1)_0.5s_both]">

          {/* Small Tagline - Gold accent */}
          <p className="text-[#d4af37] tracking-[0.2em] text-xs md:text-sm font-bold uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            2,804 Meters Above Ordinary
          </p>

          {/* Main Headline - Immersive, feeling-focused */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-[family-name:var(--font-playfair)] text-white leading-[1.1] drop-shadow-[0_6px_24px_rgba(0,0,0,0.9)]">
            The Sanctuary in the <br />
            <span className="italic text-white/90">Hindu Kush</span>
          </h1>

          {/* Descriptive Body Text - Generous line spacing (FIX #3) */}
          <p className="text-gray-200 text-sm md:text-base lg:text-lg font-[family-name:var(--font-manrope)] font-light leading-7 md:leading-8 max-w-lg drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
            Discover the only Glass-Dome Resort in Swat Valley. A seamless blend of five-star hospitality and the raw beauty of the Hindu Kush.
          </p>

          {/* CTA Buttons - Consistent gold color (FIX #2) */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 md:pt-6">
            <button className="bg-[#d4af37] text-black px-10 md:px-12 py-3.5 md:py-4 text-xs md:text-sm font-[family-name:var(--font-manrope)] font-bold uppercase tracking-[0.2em] hover:bg-white transition-all duration-300 hover:scale-105 shadow-[0_8px_30px_rgba(212,175,55,0.4)] hover:shadow-[0_12px_40px_rgba(255,255,255,0.5)]">
              Begin Your Journey
            </button>

            <button className="border-2 border-white/30 backdrop-blur-sm text-white px-10 md:px-12 py-3.5 md:py-4 text-xs md:text-sm font-[family-name:var(--font-manrope)] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300">
              View Experiences
            </button>
          </div>
        </div>
      </div>

      {/* Video Progress Indicator */}
      {/* <div className="absolute top-6 md:top-8 right-6 md:right-8 z-30 flex gap-2">
        {videos.map((_, index) => (
          <div
            key={index}
            className="w-10 md:w-12 h-1 rounded-full bg-white/20 overflow-hidden backdrop-blur-sm"
          >
            <div
              className="h-full bg-[#d4af37] shadow-[0_0_16px_rgba(212,175,55,0.8)] transition-all duration-500"
              style={{
                width: activeSlide === index ? '100%' : '0%'
              }}
            />
          </div>
        ))}
      </div> */}

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-30 animate-[fadeIn_1s_ease-out_2s_both]">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2 backdrop-blur-sm bg-black/20 shadow-xl">
          <div className="w-1 h-2 bg-[#d4af37] rounded-full animate-[scrollBounce_2s_ease-in-out_infinite] shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
        </div>
        <ChevronDown className="w-4 h-4 text-white/50 animate-[scrollChevronBounce_2s_ease-in-out_infinite] drop-shadow-lg" />
      </div>
    </section>
  );
}
