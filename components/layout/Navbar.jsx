'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import NavDropdown from './NavDropdown';

const navConfig = [
  { label: 'Home', href: '/' },
  {
    label: 'The Resort',
    items: [
      { label: 'Our Story', href: '/#our-story' },
      { label: 'Vertical Garden', href: '/#vertical-garden' },
      { label: 'Mini Museum', href: '/#mini-museum' },
      { label: 'Gallery', href: '/#gallery' },
    ],
  },
  { label: 'Suites & Investment', href: '/suites' },
  {
    label: 'Experiences',
    items: [
      { label: 'Stargazing Observatory', href: '/#stargazing-observatory' },
      { label: 'Jeep Forest Ride', href: '/#jeep-forest-ride' },
      { label: 'Night Skiing', href: '/#night-skiing' },
      { label: 'Wildlife Sanctuary', href: '/#wildlife-sanctuary' },
    ],
  },
  {
    label: 'Amenities',
    items: [
      { label: 'Wellness Club', href: '/#wellness-club' },
      { label: 'Panorama Restaurant', href: '/#panorama-restaurant' },
      { label: 'Kids Play Area', href: '/#kids-play-area' },
      { label: 'Swat Traditional Centre', href: '/#swat-traditional' },
    ],
  },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 32);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.body.style.overflow = isDrawerOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isDrawerOpen]);

  const toggleDrawer = () => setIsDrawerOpen((prev) => !prev);
  const closeDrawer = () => setIsDrawerOpen(false);



  return (
    <header
      className={`fixed top-0 left-0 right-0 z-60 px-[clamp(1.5rem,4vw,3rem)] transition-all duration-[350ms] ease-out border-b ${isScrolled
        ? 'bg-[rgba(15,37,34,0.85)] backdrop-blur-[18px] border-b-[rgba(255,255,255,0.08)] py-[0.85rem]'
        : 'border-b-transparent py-5'
        }`}
    >
      <div className="mx-auto max-w-[1440px] flex items-center gap-6">
        <Link href="/" className="flex items-center gap-3 no-underline" aria-label="Lavita Malam Jabba">
          <div className="flex items-center shrink-0">
            <Image
              src="/logo/logo.png"
              alt="Lavita"
              width={35}
              height={50}
              priority
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-[family-name:var(--font-playfair)] text-[1.05rem] tracking-[0.35em] uppercase text-[var(--text-light)]">
              Lavita
            </span>
            <span className="font-[family-name:var(--font-manrope)] text-[0.55rem] tracking-[0.35em] uppercase text-[#c89b7b]">
              Malam Jabba
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-11 ml-auto">
          {navConfig.map((item) => {
            if (item.items) {
              return (
                <NavDropdown
                  key={item.label}
                  title={item.label}
                  items={item.items}
                />
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                className="font-[family-name:var(--font-manrope)] text-[0.78rem] tracking-[0.18em] uppercase text-[rgba(245,245,245,0.85)] no-underline transition-colors duration-300 hover:text-[#c89b7b]"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden xl:block">
          <Link
            href="/reserve"
            className="inline-flex items-center justify-center px-10 py-[0.9rem] bg-[#c89b7b] text-[#0f2522] font-[family-name:var(--font-manrope)] text-[0.78rem] font-semibold tracking-[0.25em] uppercase rounded-full border border-[#c89b7b] transition-all duration-300 hover:bg-transparent hover:text-[#c89b7b]"
          >
            Explore Membership
          </Link>
        </div>

        <button
          className="ml-auto lg:hidden flex w-11 h-11 items-center justify-center border border-[rgba(200,155,123,0.4)] rounded-xl bg-transparent text-[#c89b7b] cursor-pointer"
          onClick={toggleDrawer}
          aria-label="Toggle navigation menu"
        >
          {isDrawerOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div
        className={`fixed inset-0 bg-[rgba(0,0,0,0.45)] z-50 transition-opacity duration-300 ${isDrawerOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        onClick={closeDrawer}
      />

      <aside
        className={`fixed top-0 right-0 bottom-0 w-[min(360px,85vw)] bg-[#05110e] text-[#f5f5f5] z-55 flex flex-col p-6 gap-6 border-l border-[rgba(200,155,123,0.2)] transition-transform duration-[350ms] ease-out ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex items-center justify-between">
          <p className="tracking-[0.3em] text-xs uppercase text-[rgba(245,245,245,0.7)]">
            Lavita Navigation
          </p>
          <button
            className="w-9 h-9 rounded-full border border-[rgba(200,155,123,0.3)] bg-transparent text-[#c89b7b] flex items-center justify-center cursor-pointer"
            aria-label="Close menu"
            onClick={closeDrawer}
          >
            <X size={20} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto flex flex-col gap-4">
          {navConfig.map((item) => (
            <div
              key={item.label}
              className="border border-[rgba(255,255,255,0.05)] rounded-2xl py-4 px-5 bg-[rgba(255,255,255,0.02)]"
            >
              <div className="flex items-center justify-between font-[family-name:var(--font-playfair)] text-base uppercase tracking-[0.15em]">
                <p>{item.label}</p>
                {item.items && (
                  <span className="font-[family-name:var(--font-manrope)] text-[0.65rem] tracking-[0.3em] text-[rgba(200,155,123,0.8)]">
                    Explore
                  </span>
                )}
              </div>
              <div className="flex flex-col mt-3 gap-2">
                {item.items ? (
                  item.items.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      onClick={closeDrawer}
                      className="font-[family-name:var(--font-manrope)] text-[0.9rem] text-[rgba(245,245,245,0.85)] no-underline hover:text-[#c89b7b]"
                    >
                      {child.label}
                    </Link>
                  ))
                ) : (
                  <Link
                    href={item.href}
                    onClick={closeDrawer}
                    className="font-[family-name:var(--font-manrope)] text-[0.9rem] text-[rgba(245,245,245,0.85)] no-underline hover:text-[#c89b7b]"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
        <div>
          <Link
            href="/reserve"
            onClick={closeDrawer}
            className="block w-full text-center p-4 rounded-full bg-[#c89b7b] text-[#05110e] font-[family-name:var(--font-manrope)] tracking-[0.2em] uppercase text-[0.85rem]"
          >
            Explore Membership
          </Link>
        </div>
      </aside>
    </header>
  );
}
