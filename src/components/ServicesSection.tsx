'use client';

export default function ServicesSection() {
  const services = [
    {
      icon: '💻',
      title: 'Création de Sites Web',
      points: ['✨ Vitrines modernes', '🛒 E-commerce performant', '🚀 Applications web', '📈 Référencement SEO'],
      badge: '+21 projets',
    },
    {
      icon: '📱',
      title: 'Apps Mobile',
      points: ['📲 iOS & Android', '🤖 Cross-platform', '🔔 Notifications push', '📊 Analytics intégrés'],
      badge: '+7 apps déployées',
    },
    {
      icon: '☁️',
      title: 'Solutions SaaS',
      points: ['📦 Solutions clé en main', "📈 Gestion d'entreprise", '🔐 Sécurité renforcée', '🔄 Mises à jour automatiques'],
      badge: '+20 solutions',
    },
    {
      icon: '📦',
      title: 'Gestion Stocks',
      points: ['📊 Traçabilité complète', '📈 Analyses prédictives', '📉 Optimisation des stocks', '🔗 Intégration API'],
      badge: '24 entreprises',
    },
    {
      icon: '🏫',
      title: 'Formations Jeunes',
      points: ['👨💻 Initiation au code', '🤖 Robotique éducative', '🎮 Création de jeux', '🌱 Numérique responsable'],
      badge: '15 établissements',
    },
    {
      icon: '💊',
      title: 'Solutions Pharma',
      points: ['📋 Gestion médicaments', '⚠️ Alertes péremption', '📑 Conformité légale', '📊 Rapports automatisés'],
      badge: '3 pharmacies',
    },
    {
      icon: '👔',
      title: 'Formation Pro',
      points: ['🔐 Cybersécurité', '📊 Gestion de projet', '🤖 IA Générative', '📱 Transformation digitale'],
      badge: '+15 entreprises',
    },
    {
      icon: '🚀',
      title: 'Transformation Digitale',
      points: ['📈 Audit complet', '🛠️ Mise en œuvre clé en main', '👨💻 Formation des équipes', '📅 Suivi sur 12 mois'],
      badge: '98% de satisfaction',
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#1a1725] to-[#272332] relative z-10" id="services">
      <h2 className="text-4xl font-bold text-center mb-16 text-[#fffefc]">
        <span className="text-stroke">Nos Services</span>
        <div className="mt-4 h-1 w-24 bg-[#c29430] mx-auto animate-line-expand"></div>
      </h2>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="service-card-hologram group" data-tilt>
              <div className="card-inner bg-[#ffffff08] p-8 rounded-3xl border border-[#ffffff15]">
                <div className="icon-3d mb-6 animate-float text-3xl">{service.icon}</div>
                <h3 className="text-2xl font-bold text-[#fffefc] mb-4">{service.title}</h3>
                <ul className="text-[#fffefc]/90 space-y-3 text-sm">
                  {service.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                <div className="mt-6 badge-hologram">{service.badge}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
