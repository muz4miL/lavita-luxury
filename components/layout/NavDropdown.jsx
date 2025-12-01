'use client';

import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import { Fragment } from 'react';

/**
 * NavDropdown - Premium Navigation Dropdown Component
 * 
 * A reusable, luxury dropdown component for the Lavita Malam Jabba navigation.
 * Features smooth animations and elegant hover interactions.
 * 
 * @param {string} title - The dropdown trigger text (e.g., "The Resort", "Experiences")
 * @param {Array} items - Array of link objects with { label: string, href: string }
 * @param {string} className - Optional additional CSS classes
 */
export default function NavDropdown({ title, items, className = '' }) {
    return (
        <Popover className={`relative ${className}`}>
            {({ open }) => (
                <>
                    <Popover.Button
                        className="group inline-flex items-center gap-[0.35rem] bg-transparent border-none cursor-pointer p-0 font-[family-name:var(--font-manrope)] text-[0.78rem] tracking-[0.18em] uppercase text-[rgba(245,245,245,0.85)] no-underline transition-colors duration-300 hover:text-[#c89b7b] focus:outline-none focus:text-[#c89b7b] data-[open]:text-[#c89b7b]"
                    >
                        <span className="transition-colors duration-300">
                            {title}
                        </span>
                        <ChevronDownIcon
                            className={`h-[14px] w-[14px] transition-all duration-300 ease-out ${open ? 'rotate-180 text-[#c89b7b]' : 'rotate-0'
                                }`}
                            aria-hidden="true"
                        />
                    </Popover.Button>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                    >
                        <Popover.Panel className="absolute left-1/2 -translate-x-1/2 z-50 min-w-[220px] mt-4">
                            {/* Frosted Snow Glassmorphism Container */}
                            <div className="rounded-xl bg-white/95 backdrop-blur-md shadow-2xl shadow-black/5 border border-white/20 overflow-hidden">
                                <div className="relative py-2">
                                    {items.map((item) => (
                                        <Popover.Button
                                            key={item.label}
                                            as={Link}
                                            href={item.href}
                                            className="group relative flex items-center px-4 py-2 text-stone-600 transition-all duration-300 hover:bg-stone-50 hover:text-amber-700/80 focus:outline-none focus:bg-stone-50 focus:text-amber-700/80"
                                        >
                                            <p className="font-[family-name:var(--font-manrope)] text-sm font-medium tracking-wide m-0 transition-all duration-300 group-hover:translate-x-1">
                                                {item.label}
                                            </p>
                                        </Popover.Button>
                                    ))}
                                </div>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </>
            )}
        </Popover>
    );
}
