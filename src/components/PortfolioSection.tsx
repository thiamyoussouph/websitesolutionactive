'use client';

import Image from 'next/image';
import React from 'react';

const portfolioItems = [
  {
    title: 'Solution PharmaMobile',
    type: 'Mobile App',
    description: 'Application de gestion complète pour pharmacies',
    image: '/images/pharmacie.png',
    category: 'mobile',
  },
  {
    title: 'Boutique en ligne ModeFuture',
    type: 'Web Development',
    description: 'Plateforme e-commerce avec IA de recommandation',
    image: '/images/boutique.png',
    category: 'web',
  },
  {
    title: 'EduManager Pro',
    type: 'SaaS',
    description: 'Solution cloud de gestion scolaire complète',
    image: '/images/ecole.png',
    category: 'saas',
  },
  {
    title: 'Atelier Robotique',
    type: 'Formation',
    description: 'Programme éducatif pour collèges et lycées',
    image: '/images/formation.png',
    category: 'formation',
  },
  {
    title: 'Business Analytics Suite',
    type: 'SaaS',
    description: 'Tableau de bord analytique en temps réel',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    category: 'saas',
  },
  {
    title: 'StockManager Pro',
    type: 'SaaS',
    description:
      'Outil complet de gestion des stocks multi-boutiques pour les entreprises sénégalaises',
    image: '/images/manager.png',
    category: 'saas',
  },
];

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="py-24 bg-gradient-to-b from-[#0F172A] to-[#1a2236] relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-white mb-4">
            <span className="text-stroke">Nos Réalisations</span>
            <div className="mt-4 h-1 w-24 bg-[#c29430] mx-auto animate-line-expand"></div>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Découvrez une sélection de nos projets phares à travers différents secteurs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 portfolio-gallery">
          {portfolioItems.map((item, index) => (
            <div key={index} className="portfolio-item relative group" data-category={item.category}>
              <div className="relative overflow-hidden rounded-2xl transform transition-all group-hover:scale-95 h-96">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent z-10"></div>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 translate-y-10 group-hover:translate-y-0 transition-all duration-300">
                  <div className="bg-[#ffffff10] backdrop-blur-lg p-4 rounded-xl">
                    <span className="text-[#c29430] text-sm font-medium">{item.type}</span>
                    <h3 className="text-xl font-bold text-white mt-2">{item.title}</h3>
                    <p className="text-gray-300 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/portfolio"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#C29430] to-[#E0B558] text-white rounded-xl font-bold hover:shadow-2xl transition-all duration-300 group"
          >
            <span>Voir tous les projets</span>
            <svg
              className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
