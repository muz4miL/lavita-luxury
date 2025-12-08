'use client';
import HeroVideoParallax from './HeroVideoParallax';
import HeroMobile from './HeroMobile';

export default function Hero() {
    return (
        <>
            {/* Desktop: GSAP Parallax Version */}
            <div className="hidden md:block w-full h-screen">
                <HeroVideoParallax />
            </div>

            {/* Mobile: Simple Video + Text Layout */}
            <div className="block md:hidden w-full h-screen">
                <HeroMobile />
            </div>
        </>
    );
}