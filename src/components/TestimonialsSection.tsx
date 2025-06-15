'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const testimonials = [
  {
    initials: 'AD',
    name: 'Dr. Aïssatou Diop',
    role: 'Pharmacie Keur Serigne, Mbour',
    title: 'Une gestion révolutionnaire !',
    content: 'Grâce à leur solution de gestion, notre pharmacie à Mbour fonctionne avec une efficacité inédite.',
    note: '⭐ 5/5',
  },
  {
    initials: 'AF',
    name: 'Abdoulaye Fall',
    role: 'YoonuTech, Saint-Louis',
    title: 'Des résultats concrets',
    content: 'La plateforme e-commerce a boosté nos ventes à Saint-Louis de 120% en 4 mois.',
    note: '🚀 120% de croissance',
  },
  {
    initials: 'MS',
    name: 'Mame Ndella Sow',
    role: 'Collège Lumière, Ziguinchor',
    title: 'Les élèves sont motivés',
    content: 'L’atelier robotique à Ziguinchor a révolutionné nos cours en rendant les élèves acteurs de leur apprentissage.',
    note: '🎓 120 élèves formés',
  },
  {
    initials: 'CG',
    name: 'Cheikh Gaye',
    role: 'CG Distribution, Kaolack',
    title: 'Gain de temps incroyable',
    content: 'StockManager Pro nous a permis de centraliser tous nos inventaires sur Kaolack et Dakar.',
    note: '📦 5 dépôts connectés',
  },
  {
    initials: 'NS',
    name: 'Ndeye Amy Sarr',
    role: 'ShopThiès, Thiès',
    title: 'Un site à la hauteur',
    content: 'Grâce à leur accompagnement, j’ai pu lancer mon site de vente en ligne à Thiès sans stress.',
    note: '🛍️ +2 500 commandes/mois',
  },
  {
    initials: 'OD',
    name: 'Ousmane Diallo',
    role: 'Groupe InnovSénégal, Dakar',
    title: 'Formation très enrichissante',
    content: 'Les formateurs sont excellents. Mon équipe à Dakar est maintenant plus productive et organisée.',
    note: '👨‍💼 30 agents formés',
  },
];

export default function TestimonialsSection() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="testimonials-parallax py-24 relative overflow-hidden bg-gradient-to-b from-[#1e1b18] via-[#222] to-[#1e1b18]">
      <div className="parallax-layer" data-depth="0.3" />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-16 text-[#fffefc]" data-aos="fade-up">
          <span className="text-stroke">Ils Nous Font Confiance</span>
          <div className="mt-4 h-1 w-24 bg-[#c29430] mx-auto animate-line-expand" />
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="testimonial-card transform transition-all hover:scale-105"
              data-aos="zoom-in"
              data-aos-delay={i * 100}
            >
              <div className="card-content bg-[#ffffff10] backdrop-blur-xl p-8 rounded-3xl text-[#fffefc] space-y-4 shadow-lg hover:shadow-[#c29430]/30 transition">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 flex items-center justify-center bg-[#c29430] text-[#fffefc] rounded-full text-xl font-bold">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-bold text-lg">{t.name}</div>
                    <div className="text-sm text-[#c29430]">{t.role}</div>
                  </div>
                </div>
                <div className="text-2xl font-bold mt-4">"{t.title}"</div>
                <p className="text-[#fffefc]/90">"{t.content}"</p>
                <div className="text-[#c29430] text-sm">{t.note}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
