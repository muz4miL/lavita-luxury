'use client';

import { useRef, useState, useEffect } from 'react';

export default function HeroMobile() {
    // MOBILE-ONLY LOGIC
    const videoRef = useRef(null);
    const [isVideoReady, setIsVideoReady] = useState(false);

    const videos = ['/hero-videos/hero1.mp4', '/hero-videos/hero6.mp4'];

    return (
        <div className="flex flex-col w-full h-screen">
            {/* TOP: Video (50% height) */}
            <div className="h-1/2 relative">
                <video
                    ref={videoRef}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    muted
                    playsInline
                    autoPlay
                    loop
                >
                    <source src={videos[0]} type="video/mp4" />
                </video>
            </div>

            {/* BOTTOM: Text (50% height) */}
            <div className="h-1/2 bg-black flex flex-col justify-center items-center px-6">
                <h1 className="text-4xl text-white font-bold text-center mb-4">
                    Timeless Elegance
                </h1>
                <p className="text-gray-300 text-center mb-6">
                    Where the Hindu Kush touches the clouds...
                </p>
                <div className="text-amber-200 text-sm">EXPLORE BELOW</div>
            </div>
        </div>
    );
}