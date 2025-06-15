'use client';

import React, { useState } from 'react';

type TimelineItem = {
  year: string;
  title: string;
  points: string[];
  badge: string;
};

export default function TimelineSection() {
  const [activeYear, setActiveYear] = useState<string | null>(null);

  const timelinePairs: { left: TimelineItem; right: TimelineItem }[] = [
    {
      left: {
        year: '2023',
        title: '🚀 Lancement SaaS',
        points: ['Solution cloud complète', '+200 clients en 6 mois', 'Intégration IA générative'],
        badge: '🔥',
      },
      right: {
        year: '2022',
        title: '💊 Solutions Pharma',
        points: ['Gestion médicaments', '3 pharmacies équipées', 'Alertes intelligentes'],
        badge: '📈',
      },
    },
    {
      left: {
        year: '2021',
        title: '🎓 Formation Pro',
        points: ['234 professionnels formés', 'Programmes certifiés', 'Ateliers pratiques'],
        badge: '👨💻',
      },
      right: {
        year: '2020',
        title: '🏁 Lancement Officiel',
        points: ['Création entreprise', 'Premiers clients', 'Spécialisation tech'],
        badge: '🌟',
      },
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#fffefc] relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-[#272332]">
          Notre Évolution Tech
          <div className="mt-4 h-1 w-24 bg-gradient-to-r from-[#c29430] to-[#e0b558] mx-auto animate-line-expand"></div>
        </h2>

        <div className="timeline-3d">
          <div className="timeline-track space-y-12 md:space-y-20 relative">
            {/* Ligne centrale verticale */}
            <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-[#c29430] to-[#e0b558] transform -translate-x-1/2 shadow-[0_0_30px_rgba(194,148,48,0.3)] z-0"></div>

            {timelinePairs.map((pair, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 relative z-10"
              >
                {/* Événement gauche */}
                <div
                  className="timeline-event left-timeline md:mb-0"
                  onMouseEnter={() => setActiveYear(pair.left.year)}
                  onMouseLeave={() => setActiveYear(null)}
                >
                  <div
                    className={`event-card transform transition-all duration-300 ease-out p-6 md:p-8 ${
                      activeYear === pair.left.year
                        ? 'opacity-100 translate-y-0 rotate-0 scale-100'
                        : 'opacity-90 -translate-y-3 -rotate-1 scale-[0.98]'
                    }`}
                  >
                    <div className="year-glow text-2xl md:text-3xl text-[#c29430]">
                      {pair.left.year}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-[#272332] mb-2">
                      {pair.left.title}
                    </h3>
                    <ul className="text-[#272332]/90 space-y-1 md:space-y-2 text-xs md:text-sm pl-4 list-disc">
                      {pair.left.points.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                    <div className="achievement-pulse mt-2 md:mt-4 text-xl">
                      {pair.left.badge}
                    </div>
                  </div>
                </div>

                {/* Événement droit */}
                <div
                  className="timeline-event right-timeline mt-12 md:mt-0"
                  onMouseEnter={() => setActiveYear(pair.right.year)}
                  onMouseLeave={() => setActiveYear(null)}
                >
                  <div
                    className={`event-card transform transition-all duration-300 ease-out p-6 md:p-8 ${
                      activeYear === pair.right.year
                        ? 'opacity-100 translate-y-0 rotate-0 scale-100'
                        : 'opacity-90 -translate-y-3 rotate-1 scale-[0.98]'
                    }`}
                  >
                    <div className="year-glow text-2xl md:text-3xl text-[#c29430]">
                      {pair.right.year}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-[#272332] mb-2">
                      {pair.right.title}
                    </h3>
                    <ul className="text-[#272332]/90 space-y-1 md:space-y-2 text-xs md:text-sm pl-4 list-disc">
                      {pair.right.points.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                    <div className="achievement-pulse mt-2 md:mt-4 text-xl">
                      {pair.right.badge}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
