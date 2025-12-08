'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function HeroVideoParallax() {
  // All refs
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const overlayRef = useRef(null);
  const revealRef = useRef(null);
  const revealSubRef = useRef(null);
  const anchorLineRef = useRef(null);
  const videoContainerRef = useRef(null);
  const scrollIndicatorRef = useRef(null);
  const luxuryLabelRef = useRef(null);
  const visionLabelRef = useRef(null);
  const timelessRef = useRef(null);
  const eleganceRef = useRef(null);
  const goldDividerRef = useRef(null);

  // GSAP animations with FIXED timing
  useEffect(() => {
    if (typeof window === 'undefined' || !sectionRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Create timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=400%',
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
        },
      });

      // 0. Scroll indicator fades out fast
      if (scrollIndicatorRef.current) {
        tl.to(
          scrollIndicatorRef.current,
          {
            opacity: 0,
            y: -24,
            duration: 0.3,
            ease: 'power2.in',
          },
          0
        );
      }

      // 1. Initial Overlay fades out
      if (overlayRef.current) {
        tl.to(
          overlayRef.current,
          {
            opacity: 0,
            y: '-10%',
            scale: 0.95,
            duration: 0.8,
            ease: 'power2.inOut',
          },
          0
        );
      }

      // 2. Video container transforms to side panel
      if (videoContainerRef.current) {
        tl.to(
          videoContainerRef.current,
          {
            width: '45vw',
            height: '75vh',
            right: '4%',
            top: '12.5%',
            borderRadius: '32px',
            boxShadow:
              '0 40px 80px -20px rgba(0, 0, 0, 0.8), 0 0 60px rgba(212, 175, 55, 0.1) inset',
            duration: 1,
            ease: 'power2.inOut',
          },
          0
        );
      }

      // 3. Anchor line grows
      if (anchorLineRef.current) {
        tl.fromTo(
          anchorLineRef.current,
          { scaleY: 0, opacity: 0 },
          {
            scaleY: 1,
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out',
          },
          0.4
        );
      }

      // 4. Luxury label appears
      if (luxuryLabelRef.current) {
        tl.fromTo(
          luxuryLabelRef.current,
          { x: -40, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.5,
            ease: 'power2.out',
          },
          0.5
        );
      }

      // 5. Content reveal sequence
      if (revealRef.current) {
        tl.to(
          revealRef.current,
          {
            opacity: 1,
            duration: 0.1,
          },
          0.6
        );
      }

      // "A VISION OF" label appears FIRST
      if (visionLabelRef.current) {
        tl.fromTo(
          visionLabelRef.current,
          {
            opacity: 0,
            y: 20,
            filter: 'blur(4px)',
          },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 0.5,
            ease: 'power2.out',
          },
          0.7
        );
      }

      // "Timeless" word appears SECOND
      if (timelessRef.current) {
        tl.fromTo(
          timelessRef.current,
          {
            opacity: 0,
            y: 50,
            clipPath: 'inset(0 0 100% 0)',
          },
          {
            opacity: 1,
            y: 0,
            clipPath: 'inset(0 0 0 0)',
            duration: 0.8,
            ease: 'power2.out',
          },
          0.8
        );
      }

      // "Elegance" word appears THIRD
      if (eleganceRef.current) {
        tl.fromTo(
          eleganceRef.current,
          {
            opacity: 0,
            y: 50,
            clipPath: 'inset(0 0 100% 0)',
          },
          {
            opacity: 1,
            y: 0,
            clipPath: 'inset(0 0 0 0)',
            duration: 0.8,
            ease: 'power2.out',
          },
          1.1
        );
      }

      // Gold Divider appears
      if (goldDividerRef.current) {
        tl.fromTo(
          goldDividerRef.current,
          {
            opacity: 0,
            scaleX: 0,
          },
          {
            opacity: 1,
            scaleX: 1,
            duration: 0.6,
            ease: 'power2.out',
          },
          1.2
        );
      }

      // Description text appears FOURTH
      if (revealSubRef.current) {
        tl.fromTo(
          revealSubRef.current,
          {
            opacity: 0,
            y: 30,
            filter: 'blur(4px)',
          },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 0.7,
            ease: 'power2.out',
          },
          1.4
        );
      }

      // 6. Once revealed, stay visible forever
      if (revealRef.current) {
        tl.to(
          revealRef.current,
          {
            opacity: 1,
            duration: 0.01,
          },
          1.5
        );
      }

      if (timelessRef.current) {
        tl.to(
          timelessRef.current,
          {
            opacity: 1,
            duration: 0.01,
          },
          1.5
        );
      }

      if (eleganceRef.current) {
        tl.to(
          eleganceRef.current,
          {
            opacity: 1,
            duration: 0.01,
          },
          1.5
        );
      }

      if (revealSubRef.current) {
        tl.to(
          revealSubRef.current,
          {
            opacity: 1,
            duration: 0.01,
          },
          1.5
        );
      }

      // 7. Subtle parallax effects after everything is revealed
      if (revealRef.current) {
        tl.to(
          revealRef.current,
          {
            y: '-5%',
            duration: 1,
            ease: 'none',
          },
          2.0
        );
      }

      if (videoContainerRef.current) {
        tl.to(
          videoContainerRef.current,
          {
            y: '2%',
            scale: 0.98,
            duration: 1,
            ease: 'none',
          },
          2.0
        );
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Video autoplay fix
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playVideo = async () => {
      try {
        video.muted = true;
        await video.play();
      } catch (err) {
        console.log('Autoplay prevented:', err);
      }
    };

    playVideo();

    // Smooth fade in on load
    if (video) {
      gsap.fromTo(video,
        { opacity: 0 },
        { opacity: 1, duration: 1.5, ease: 'power2.inOut' }
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-[#0B1C19] via-[#0A1613] to-[#050F0D] text-white"
    >
      {/* Video Container */}
      <div
        ref={videoContainerRef}
        className="absolute z-20 overflow-hidden bg-black/20 w-full h-full right-0 top-0 rounded-none shadow-none md:w-full md:h-full md:right-0 md:top-0"
      >
        <div className="relative h-full w-full overflow-hidden">
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          >
            <source src="/hero-videos/hero1.mp4" type="video/mp4" />
            <source src="https://cdn.coverr.co/videos/coverr-sunrise-over-the-sea-9163/1080p.mp4" type="video/mp4" />
          </video>
          {/* Video Overlay Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C19]/90 via-[#0B1C19]/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1C19]/40 via-transparent to-transparent" />
        </div>
      </div>

      {/* Left Content Panel - EDITORIAL BLOCK LAYOUT */}
      <div
        ref={revealRef}
        className="absolute left-0 top-0 z-30 flex h-full w-full items-center justify-start pl-[5%] md:pl-[10%] pr-[5%] md:pr-[52%] opacity-0"
      >
        {/* Centered Editorial Block Container */}
        <div className="relative w-full max-w-2xl">

          {/* Top Luxury Label */}
          <div
            ref={luxuryLabelRef}
            className="mb-12 opacity-0 absolute -top-24 left-0"
          >
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-12 bg-gradient-to-r from-[#D4AF37] to-[#D4AF37]/40" />
              <span className="text-[10px] tracking-[0.35em] text-[#D4AF37] font-sans uppercase font-medium">
                LAVITA MALAM JABBA
              </span>
            </div>
          </div>

          {/* TIGHT EDITORIAL BLOCK */}
          <div className="flex flex-col justify-center">

            {/* Vision Label - TIGHT spacing */}
            <div
              ref={visionLabelRef}
              className="mb-6 opacity-0"
            >
              <span
                className="text-xs tracking-[0.25em] text-white/70 font-sans uppercase font-light"
              >
                A VISION OF
              </span>
            </div>

            {/* Main Headline - TIGHT STACK */}
            <div className="mb-6 overflow-visible">
              {/* "Timeless" */}
              <h2
                ref={timelessRef}
                className="text-5xl md:text-6xl lg:text-7xl leading-[1.05] italic text-[#D4AF37] font-light font-serif opacity-0 overflow-visible"
                style={{
                  textShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
                }}
              >
                Timeless
              </h2>

              {/* "Elegance" - TIGHT spacing */}
              <h2
                ref={eleganceRef}
                className="text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-white font-light font-serif opacity-0 overflow-visible mt-2"
                style={{
                  textShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
                }}
              >
                Elegance
              </h2>
            </div>

            {/* GOLD DIVIDER - Elegant separation */}
            <div
              ref={goldDividerRef}
              className="h-[1px] w-20 md:w-24 bg-gradient-to-r from-[#D4AF37] to-[#D4AF37]/60 my-6 md:my-8 opacity-0 transform origin-left scale-x-0"
            />

            {/* Body Text - TIGHT spacing, limited width */}
            <p
              ref={revealSubRef}
              className="max-w-md text-base md:text-[1.125rem] leading-relaxed md:leading-[1.7] text-white/85 font-light opacity-0"
              style={{
                letterSpacing: '0.01em'
              }}
            >
              Where the Hindu Kush touches the clouds, and every sunrise paints a new masterpiece on the canvas of your life.
            </p>

            {/* Bottom Accent - Positioned after block */}
            <div className="mt-12 md:mt-16 flex items-center gap-6 group cursor-pointer">
              <div className="h-[1px] w-12 bg-gradient-to-r from-[#D4AF37] to-transparent transition-all duration-700 group-hover:w-16" />
              <span className="text-[10px] tracking-[0.35em] text-white/50 uppercase font-sans font-light transition-all duration-300 group-hover:text-white/70 group-hover:tracking-[0.4em]">
                EXPLORE BELOW
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Initial Full Screen Overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 z-40 flex flex-col items-center justify-center pointer-events-none pb-12 md:pb-16"
      >
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="text-center px-4 relative z-10 w-full">
          {/* Micro Labels */}
          <div className="mb-8 md:mb-10">
            <span className="text-xs md:text-sm tracking-[0.3em] text-white/90 font-sans uppercase font-light">
              THE FIRST GLASS-DOME RESORT
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="mb-8 md:mb-10 font-serif text-4xl md:text-6xl lg:text-7xl font-medium leading-[0.9] text-white px-4">
            <span
              className="block mb-4 md:mb-6"
              style={{
                textShadow: '0 2px 12px rgba(0, 0, 0, 0.6)'
              }}
            >
              The Sanctuary
            </span>
            <span
              className="block text-[#D4AF37] italic font-semibold text-3xl md:text-5xl lg:text-6xl"
              style={{
                textShadow: '0 2px 12px rgba(0, 0, 0, 0.6)'
              }}
            >
              In The Clouds
            </span>
          </h1>

          {/* Elevation Text */}
          <p
            className="mx-auto max-w-xs md:max-w-md text-xs tracking-[0.3em] text-white/80 font-sans uppercase font-light mt-12 md:mt-14"
            style={{
              textShadow: '0 1px 6px rgba(0, 0, 0, 0.5)'
            }}
          >
            9,200FT ELEVATION • HINDU KUSH
          </p>
        </div>
      </div>

      {/* Vertical Anchor Line - Hidden on mobile */}
      <div
        ref={anchorLineRef}
        className="hidden md:block absolute left-1/2 top-1/2 z-20 h-0 w-[1px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent via-[#D4AF37]/20 to-transparent opacity-0"
      />

      {/* Scroll Indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-8 md:bottom-12 left-1/2 z-50 -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <span
            className="mb-3 md:mb-4 text-[10px] md:text-xs tracking-[0.25em] md:tracking-[0.3em] text-white/50 font-sans uppercase font-light"
            style={{
              textShadow: '0 1px 4px rgba(0, 0, 0, 0.5)'
            }}
          >
            EXPLORE
          </span>
          <div className="relative h-10 md:h-16 w-[1px] overflow-hidden bg-white/10 backdrop-blur-sm">
            <div className="absolute top-0 h-5 md:h-8 w-full bg-gradient-to-b from-[#D4AF37] to-transparent animate-scroll-indicator" />
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade - Seamless Transition to Intro Section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 md:h-40 bg-gradient-to-b from-transparent via-[#0B1C19]/60 to-[#0B1C19] pointer-events-none z-10" />
    </section>
  );
}