'use client';

import { useEffect, useLayoutEffect, useRef } from 'react';
import Lenis from 'lenis';

export default function SmoothScroll({ children }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis with luxury settings
    const lenis = new Lenis({
      duration: 1.2,        // Longer duration for more luxurious feel
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing for smooth deceleration
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,   // Adjust scroll speed (lower = slower, more deliberate)
      smoothTouch: false,   // Keep touch scrolling native for better mobile UX
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;

    // Request animation frame loop
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
