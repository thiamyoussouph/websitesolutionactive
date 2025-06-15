'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-gray-300 border-t border-[#C29430]/20 py-6 mt-12">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 md:mb-12">
          {/* Colonne logo */}
          <div className="space-y-6 text-center md:text-left">
            <h3 className="text-2xl font-bold text-white">
              <span className="text-[#C29430]">Active</span> Solution
            </h3>
            <p className="text-sm leading-relaxed">
              Transformons ensemble votre vision technologique en réalité tangible.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              {/* Réseaux sociaux */}
              {[
                { href: '#', title: 'Instagram', svg: 'M12 0C8.74 0...' }, // raccourcis ici
                { href: '#', title: 'LinkedIn', svg: 'M19 0h-14c...' },
                { href: '#', title: 'X/Twitter', svg: 'M19.59 6.69a...' },
              ].map((icon, idx) => (
                <a key={idx} href={icon.href} className="hover:text-[#E0B558]" aria-label={icon.title}>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d={icon.svg} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Explorer */}
          <div className="space-y-4 text-center md:text-left">
            <h4 className="text-lg font-semibold text-[#E0B558] mb-4">Explorer</h4>
            <nav className="space-y-3">
              <Link href="/about" className="block hover:text-[#C29430]">À propos</Link>
              <Link href="/services" className="block hover:text-[#C29430]">Services</Link>
              <Link href="/blog" className="block hover:text-[#C29430]">Blog Tech</Link>
              <Link href="/careers" className="block hover:text-[#C29430]">Carrières</Link>
            </nav>
          </div>

          {/* Solutions */}
          <div className="space-y-4 text-center md:text-left">
            <h4 className="text-lg font-semibold text-[#E0B558] mb-4">Solutions</h4>
            <nav className="space-y-3">
              <Link href="/cloud" className="block hover:text-[#C29430]">Cloud Solutions</Link>
              <Link href="/cyber" className="block hover:text-[#C29430]">Cybersécurité</Link>
              <Link href="/dev" className="block hover:text-[#C29430]">Développement Sur-Mesure</Link>
              <Link href="/ai" className="block hover:text-[#C29430]">IA & Big Data</Link>
            </nav>
          </div>

          {/* Newsletter */}
          <div className="space-y-4 max-w-xs mx-auto md:mx-0 text-center md:text-left">
            <h4 className="text-lg font-semibold text-[#E0B558] mb-4">Restons connectés</h4>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Votre email professionnel"
                className="px-4 py-3 bg-white/5 border border-[#C29430]/20 rounded-lg focus:outline-none focus:border-[#C29430]"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-[#C29430] to-[#E0B558] hover:opacity-90 text-white font-semibold py-3 rounded-lg transition-opacity"
              >
                S'abonner
              </button>
            </form>
          </div>
        </div>

        {/* Bas de page */}
        <div className="border-t border-[#C29430]/10 pt-8 mt-8 text-center md:text-left">
          <div className="md:flex justify-between items-center">
            <p className="text-sm">&copy; 2024 Active Solution. Tous droits réservés.</p>
            <div className="flex justify-center md:justify-end space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-sm hover:text-[#C29430]">Confidentialité</Link>
              <Link href="/terms" className="text-sm hover:text-[#C29430]">Conditions</Link>
              <Link href="/cookies" className="text-sm hover:text-[#C29430]">Cookies</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Barre décorative */}
      <div className="bg-gradient-to-r from-[#C29430] to-[#E0B558] h-1 w-full opacity-20"></div>
    </footer>
  );
}
