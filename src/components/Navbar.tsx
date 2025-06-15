'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navOpacity = Math.max(0.6, 0.95 - scrollY / 300);

    return (
        <nav
            style={{
                backgroundColor: `rgba(194, 148, 48, ${navOpacity})`,
                backdropFilter: 'blur(12px)',
            }}
            className={`fixed w-full z-50 transition-all duration-300 shadow-xl ${scrollY > 10 ? 'shadow-lg' : ''}`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 md:h-20 items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="flex items-center space-x-2 group">
                            <Image
                                src="/logo.jpg"
                                alt="Logo"
                                width={48}
                                height={48}
                                className="h-10 md:h-12 w-10 md:w-12 object-cover rounded-full border-2 border-white shadow-lg transition-transform duration-300 group-hover:scale-110"
                            />
                            <span className="text-2xl md:text-3xl font-bold text-white tracking-tighter bg-gradient-to-r from-white to-[#fffefc] bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(0,0,0,0.1)]">
                                ACTIVE SOLUTION
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                        {['Accueil', 'Services', 'Portfolio', 'Contact'].map((item) => (
                            <Link
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="nav-link relative text-white hover:text-white px-3 py-2 transition-all duration-300 group"
                            >
                                <span className="relative text-lg drop-shadow-sm text-white">
                                    {item}
                                    <div className="absolute bottom-0 left-0 h-[2px] bg-white w-0 group-hover:w-full transition-all duration-300 shadow-[0_2px_4px_rgba(255,255,255,0.2)]"></div>
                                </span>
                            </Link>
                        ))}
                        <a
                            href="tel:778202135"
                            className="ml-4 px-5 py-2.5 bg-white/10 border-2 border-white/20 rounded-xl transition-all duration-300 hover:bg-white/20 hover:border-white/30 group shadow-[0_4px_12px_rgba(194,148,48,0.3)]"
                        >
                            <div className="flex items-center space-x-2">
                                <svg
                                    className="w-5 h-5 text-white drop-shadow-sm"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                                <span className="text-white font-bold text-lg drop-shadow-sm">778 202 135</span>
                            </div>
                        </a>
                    </div>

                    {/* Mobile button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setOpen(!open)}
                            className="text-white hover:text-white p-2 rounded-lg focus:outline-none transition-all duration-300 shadow-sm"
                        >
                            <svg
                                className={`h-8 w-8 transform transition-all drop-shadow-sm ${open ? 'rotate-90' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden bg-[#c29430]/95 backdrop-blur-lg border-t border-white/10 shadow-inner">
                    <div className="px-4 pt-2 pb-4 space-y-2">
                        {['Accueil', 'Services', 'Portfolio', 'Contact'].map((item) => (
                            <Link
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="block px-4 py-3 text-white text-lg hover:bg-white/10 rounded-xl transition-all duration-300 drop-shadow-sm"
                            >
                                {item}
                            </Link>
                        ))}
                        <a
                            href="tel:778202135"
                            className="block mt-4 px-4 py-3 bg-white/10 border-2 border-white/20 text-white text-lg text-center rounded-xl font-bold hover:bg-white/20 transition-all duration-300 shadow-sm"
                        >
                            778 202 135
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
