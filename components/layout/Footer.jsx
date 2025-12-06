import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

const footerSections = [
  {
    title: 'The Resort',
    links: [
      { label: 'Our Story', href: '/resort/our-story' },
      { label: 'Vertical Garden', href: '/resort/vertical-garden' },
      { label: 'Mini Museum', href: '/resort/mini-museum' },
      { label: 'Gallery', href: '/resort/gallery' },
    ],
  },
  {
    title: 'Experiences',
    links: [
      { label: 'Stargazing Observatory', href: '/#stargazing-observatory' },
      { label: 'Jeep Forest Ride', href: '/#jeep-forest-ride' },
      { label: 'Night Skiing', href: '/#night-skiing' },
      { label: 'Wildlife Sanctuary', href: '/#wildlife-sanctuary' },
    ],
  },
  {
    title: 'Amenities',
    links: [
      { label: 'Wellness Club', href: '/#wellness-club' },
      { label: 'Panorama Restaurant', href: '/#panorama-restaurant' },
      { label: 'Kids Play Area', href: '/#kids-play-area' },
      { label: 'Swat Traditional Centre', href: '/#swat-traditional' },
    ],
  },
];

const socialIcons = [
  { icon: Instagram, href: 'https://www.instagram.com/lavitadevelopmentspk/', label: 'Instagram' },
  { icon: Facebook, href: 'https://web.facebook.com/lavitadevelopments/?_rdc=1&_rdr#', label: 'Facebook' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/lavita-developments-b5b07a24a/', label: 'Linkedin' },
];

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#0a1612] to-[#05110e] text-[#f5f5f5] overflow-hidden border-t border-[rgba(200,155,123,0.1)]">
      <div className="max-w-[1400px] mx-auto px-6 py-16">

        {/* Top Section - Brand + Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-12 border-b border-[rgba(255,255,255,0.06)]">

          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-4">
              <Image
                src="/logo/logo.png"
                alt="Lavita"
                width={45}
                height={56}
                className="opacity-90"
              />
              <div>
                <h3 className="font-playfair text-2xl font-semibold tracking-tight text-white">
                  Lavita Malam Jabba
                </h3>
                <p className="font-manrope text-xs text-stone-400 tracking-wider mt-1">
                  MALAM JABBA
                </p>
              </div>
            </div>
            <p className="font-manrope text-sm text-stone-400 leading-relaxed mb-6 max-w-sm">
              The Sanctuary in the Hindu Kush
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mb-6">
              {socialIcons.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit Lavita on ${label}`}
                  className="w-10 h-10 rounded-full border border-[rgba(200,155,123,0.3)] text-[#c89b7b] flex items-center justify-center transition-all duration-300 hover:bg-[#c89b7b] hover:text-[#05110e] hover:scale-110"
                >
                  <Icon size={16} />
                </Link>
              ))}
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-2">
              <a
                href="mailto:info@lavitamalamjabba.com"
                className="font-manrope text-sm text-stone-400 hover:text-[#c89b7b] transition-colors duration-300"
              >
                info@lavitamalamjabba.com
              </a>
              <a
                href="https://www.lavitamalamjabba.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-manrope text-sm text-stone-400 hover:text-[#c89b7b] transition-colors duration-300"
              >
                www.lavitamalamjabba.com
              </a>
            </div>
          </div>

          {/* Navigation Columns - Matching Navbar Structure */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-playfair text-sm tracking-[0.2em] uppercase text-[#c89b7b] mb-4">
                {section.title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-manrope text-sm text-stone-300 hover:text-[#c89b7b] transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section - Copyright + Legal */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-8">
          <p className="font-manrope text-sm text-stone-500">
            © 2025 Lavita Malam Jabba. All Rights Reserved.
          </p>

          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="font-manrope text-sm text-stone-400 hover:text-[#c89b7b] transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="font-manrope text-sm text-stone-400 hover:text-[#c89b7b] transition-colors duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Subtle Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
    </footer>
  );
}
