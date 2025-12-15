import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Facebook, Music } from 'lucide-react';

const exploreLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Lavita', href: '/#about' },
  { label: 'Investment Opportunities', href: '/#investment' },
  { label: 'Gallery', href: '/#gallery' },
];

const featuresLinks = [
  { label: 'Stargazing Observatory', href: '/#stargazing-observatory' },
  { label: 'Swat Traditional Centre', href: '/#swat-traditional' },
  { label: 'Vertical Garden', href: '/#vertical-garden' },
  { label: 'Wellness Club', href: '/#wellness-club' },
];

const adventuresLinks = [
  { label: 'Jeep Forest Ride', href: '/#jeep-forest-ride' },
  { label: 'Night Skiing', href: '/#night-skiing' },
  { label: 'Snow Tubing', href: '/#snow-tubing' },
  { label: 'Hiking Trails', href: '/#hiking-trails' },
];

const socialIcons = [
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: Music, href: 'https://tiktok.com', label: 'TikTok' },
];

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-t from-black to-[#05110e] text-[#f5f5f5] pt-16 pb-8">
      {/* Golden Horizon Border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C89B7B]/40 to-transparent" />

      <div className="max-w-[1200px] mx-auto px-6">

        {/* SECTION 1: IDENTITY & SOCIALS */}
        <section className="flex flex-col md:flex-row gap-8 md:justify-between md:items-start pb-12">
          {/* Left: Logo + Headline */}
          <div className="flex items-start gap-6 border-l border-[#C89B7B]/30 pl-6">
            <div className="flex-shrink-0">
              <Image
                src="/logo/logo.png"
                alt="Lavita"
                width={60}
                height={75}
              />
            </div>
            <div className="flex-1">
              <h3 className="font-playfair italic text-2xl text-white/90 leading-relaxed">
                Prestigious High-End Hotel Suites Delivering Luxury.
              </h3>
              <p className="text-xs text-white/40 mt-2 font-light">
                Powered by Shelton Group of Hotels
              </p>
            </div>
          </div>

          {/* Right: Social Icons */}
          <div className="flex gap-3 md:justify-end justify-center md:mt-0">
            {socialIcons.map(({ icon: Icon, href, label }) => (
              <Link
                key={label}
                href={href}
                aria-label={`Visit Lavita on ${label}`}
                className="w-11 h-11 rounded-full border border-[#c89b7b]/40 text-[#c89b7b] flex items-center justify-center transition-all duration-300 hover:bg-[#c89b7b] hover:text-[#05110e] hover:border-[#c89b7b]"
              >
                <Icon size={17} />
              </Link>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-white/5" />

        {/* SECTION 2: NAVIGATION LINKS */}
        <section className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-12 pb-12">
          {/* Explore */}
          <div>
            <p className="font-playfair text-[#C89B7B] text-[10px] tracking-[0.25em] uppercase mb-4">
              Explore
            </p>
            <div className="flex flex-col gap-2.5">
              {exploreLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-white/70 text-sm font-light hover:translate-x-1 hover:text-[#C89B7B] transition-all duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Unique Features */}
          <div>
            <p className="font-playfair text-[#C89B7B] text-[10px] tracking-[0.25em] uppercase mb-4">
              Unique Features
            </p>
            <div className="flex flex-col gap-2.5">
              {featuresLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-white/70 text-sm font-light hover:translate-x-1 hover:text-[#C89B7B] transition-all duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Adventures */}
          <div>
            <p className="font-playfair text-[#C89B7B] text-[10px] tracking-[0.25em] uppercase mb-4">
              Adventures
            </p>
            <div className="flex flex-col gap-2.5">
              {adventuresLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-white/70 text-sm font-light hover:translate-x-1 hover:text-[#C89B7B] transition-all duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-white/5" />

        {/* SECTION 3: LEGAL */}
        <section className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between pt-8 text-xs text-white/30">
          <p>© 2025 Lavita Malam Jabba. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="hover:text-[#c89b7b] transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-[#c89b7b] transition-colors duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </section>

      </div>
    </footer>
  );
}
