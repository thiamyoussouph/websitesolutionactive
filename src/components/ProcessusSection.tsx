export default function ProcessusSection() {
  return (
    <section className="py-28 bg-gradient-to-b from-[#faf8f5] to-white relative overflow-hidden">
      {/* Fond dynamique */}
      <div
        className="absolute inset-0 opacity-5 z-0 animate-texture"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzAwIDB2NjAwSDBWMHoiIGZpbGw9IiNDMjk0MzAiLz48L3N2Zz4=')",
          backgroundSize: '120px 120px'
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* En-tête */}
        <div className="max-w-5xl mx-auto text-center mb-20">
          <div className="inline-flex items-center mb-6 space-x-3 animate-fade-in">
            <span className="w-12 h-px bg-[#C29430]"></span>
            <span className="text-[#C29430] font-semibold text-sm uppercase tracking-widest">
              Expertise Technologique
            </span>
            <span className="w-12 h-px bg-[#C29430]"></span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#C29430] to-[#E0B558]">
              Notre Processus Créatif
            </span>
          </h1>
          <p className="text-xl text-gray-600">De l'idée à la solution opérationnelle</p>
        </div>

        {/* Étapes */}
        <div className="relative grid md:grid-cols-4 gap-8 md:gap-10">
          <div className="hidden md:block absolute top-[150px] left-12 right-12 h-2 bg-gray-100 rounded-full overflow-hidden">
            <div className="progress-line absolute h-full bg-gradient-to-r from-[#C29430] to-[#E0B558] w-0"></div>
          </div>

          {[
            {
              icon: '🖥️',
              title: 'Audit Stratégique',
              desc: 'Analyse complète de votre infrastructure',
              items: ['Audit de sécurité', 'Benchmark technologique']
            },
            {
              icon: '🎨',
              title: 'Conception Sur Mesure',
              desc: 'Architecture solutionnelle optimisée',
              items: [
                'Design System personnalisé',
                'Prototypage interactif',
                'Intégration UX/UI'
              ]
            },
            {
              icon: '🚀',
              title: 'Développement Agile',
              desc: 'Implémentation itérative et sécurisée',
              items: ['Méthodologie Scrum', 'Tests automatisés', 'Revues techniques']
            },
            {
              icon: '🛡️',
              title: 'Support Premium',
              desc: 'Évolution permanente',
              items: ['Surveillance 24/7', 'Mises à jour évolutives', 'Support dédié']
            }
          ].map((step, index) => (
            <div key={index} className="process-card group relative">
              <div className="step-indicator absolute -top-5 left-1/2 -translate-x-1/2 w-14 h-14 bg-gradient-to-br from-[#C29430] to-[#E0B558] rounded-full flex items-center justify-center shadow-lg z-20">
                <span className="text-white font-bold text-xl">{`0${index + 1}`}</span>
              </div>
              <div className="p-8 bg-white/90 backdrop-blur-md rounded-2xl border border-gray-200/70 shadow-xl">
                <div className="step-icon text-5xl mb-8 mt-4">{step.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 mb-6">{step.desc}</p>
                <ul className="text-left text-sm text-gray-500 space-y-2">
                  {step.items.map((item, i) => (
                    <li key={i} className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-2 text-[#C29430]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
