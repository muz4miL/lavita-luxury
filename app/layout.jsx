import { Playfair_Display, Manrope } from 'next/font/google';
import { Navbar, Footer } from '../components/layout';
import Preloader from '../components/Preloader';
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata = {
  title: "Lavita Malam Jabba | Ultra-Luxury Mountain Resort",
  description: "The only Glass-Dome Resort in Swat Valley. 2804 meters above ordinary. Experience the sanctuary in the Hindu Kush mountains.",
  keywords: "luxury resort, Malam Jabba, Swat Valley, glass dome, mountain resort, Pakistan tourism",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${manrope.variable}`}>
      <head>
        {/* Preload first hero video for instant playback */}
        <link rel="preload" href="/hero-videos/hero1.mp4" as="video" type="video/mp4" />
      </head>
      <body className="antialiased">
        <Preloader />
        <Navbar />
        <main>{children}</main>
        <Footer />
        {/* Premium Film Grain Noise Texture Overlay */}
        <div
          className="pointer-events-none fixed inset-0 z-[9999]"
          style={{ opacity: 0.03 }}
          aria-hidden="true"
        >
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="noise" x="0%" y="0%" width="100%" height="100%">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.80"
                  numOctaves="4"
                  stitchTiles="stitch"
                />
                <feColorMatrix type="saturate" values="0" />
              </filter>
            </defs>
            <rect width="100%" height="100%" filter="url(#noise)" />
          </svg>
        </div>
      </body>
    </html>
  );
}
