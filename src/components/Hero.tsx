'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-[#0F172A] text-white py-24 overflow-hidden">
      {/* Background image avec overlay */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          alt="Background technologique"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Badge de confiance */}
          <div className="inline-flex items-center bg-white/5 px-6 py-2 rounded-full mb-8 backdrop-blur-sm">
            <svg
              className="w-5 h-5 text-[#C29430] mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm">Partenaire certifié AWS & Microsoft</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C29430] to-[#E0B558]">
              Solutions Digitales
            </span>
            <br />
            pour Entreprises Exigeantes
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Nous transformons les défis technologiques en avantages concurrentiels durables
          </p>

          {/* Statistiques */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { number: '3+', label: "Ans d'expérience" },
              { number: '96%', label: 'Satisfaction client' },
              { number: '19+', label: 'Projets livrés' },
            ].map((stat, index) => (
              <div
                key={index}
                className="stat-card backdrop-blur-sm bg-white/5 rounded-lg py-6"
              >
                <div className="stat-number text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="stat-label text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-5">
            {/* Bouton principal */}
            <Link
              href="/contact"
              className="cta-holographic relative group overflow-hidden isolate"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-[#C29430] to-[#E0B558] rounded-xl transform group-hover:-rotate-1 transition-transform duration-500"></div>
              <div className="relative z-10 flex items-center justify-center gap-3 px-10 py-5 bg-[#0F172A] rounded-xl backdrop-blur-xl">
                <svg
                  className="w-6 h-6 text-[#E0B558] animate-pulse"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <span className="text-lg font-bold bg-gradient-to-r from-[#E0B558] to-[#C29430] bg-clip-text text-transparent">
                  Planifier une consultation
                </span>
              </div>
            </Link>

            {/* Bouton secondaire */}
            <Link
              href="/portfolio"
              className="cta-plasma relative group overflow-hidden rounded-xl border-2 border-[#C29430]/30 hover:border-transparent transition-all"
            >
              <div className="absolute inset-0 bg-[#0F172A]/80 backdrop-blur-lg"></div>
              <div className="relative z-10 flex items-center justify-center gap-3 px-10 py-5">
                <svg
                  className="w-6 h-6 text-[#C29430] group-hover:text-[#E0B558] transition-colors"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="text-lg font-bold text-[#C29430] group-hover:text-white transition-colors">
                  Voir nos études de cas
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#C29430]/10 to-[#E0B558]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#E0B558] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
