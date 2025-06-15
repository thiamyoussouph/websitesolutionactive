'use client';

export default function ContactSection() {
  return (
    <>
      {/* Bouton CTA flottant */}
      <div className="fixed bottom-8 right-8 z-50">
        <a
          href="/contact"
          className="cta-orbit flex items-center bg-[#c29430] text-[#272332] px-6 py-3 rounded-full 
                     shadow-2xl hover:shadow-3xl transition-all duration-300 group"
        >
          <span className="mr-2">💬</span>
          <span className="font-bold">Discutons Projet</span>
          <div className="orbit-dots">
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
          </div>
        </a>
      </div>

      {/* Section Contact */}
      <section className="relative bg-[#0F172A] py-24 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block mb-6">
                <span className="text-[#C29430] font-semibold text-sm uppercase tracking-widest">Contact Expert</span>
              </div>
              <h2 className="text-4xl font-bold mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#C29430] to-[#E0B558]">
                  Parlons de votre projet
                </span>
              </h2>
              <p className="text-gray-400">Réponse sous 24h ouvrés</p>
            </div>

            <form className="contact-form space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Nom */}
                <div className="form-group relative">
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-5 py-4 bg-white/5 border border-[#C29430]/20 rounded-lg peer focus:border-[#C29430] focus:ring-0"
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-5 top-4 text-gray-400 transition-all peer-focus:-top-3 peer-focus:text-sm peer-valid:-top-3 peer-valid:text-sm"
                  >
                    Nom complet
                  </label>
                </div>

                {/* Email */}
                <div className="form-group relative">
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-5 py-4 bg-white/5 border border-[#C29430]/20 rounded-lg peer focus:border-[#C29430] focus:ring-0"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-5 top-4 text-gray-400 transition-all peer-focus:-top-3 peer-focus:text-sm peer-valid:-top-3 peer-valid:text-sm"
                  >
                    Email professionnel
                  </label>
                </div>
              </div>

              {/* Téléphone et Service */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="form-group relative">
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-5 py-4 bg-white/5 border border-[#C29430]/20 rounded-lg peer focus:border-[#C29430] focus:ring-0"
                  />
                  <label
                    htmlFor="phone"
                    className="absolute left-5 top-4 text-gray-400 transition-all peer-focus:-top-3 peer-focus:text-sm peer-valid:-top-3 peer-valid:text-sm"
                  >
                    Téléphone (optionnel)
                  </label>
                </div>

                <div className="form-group relative">
                  <select
                    id="service"
                    required
                    className="w-full px-5 py-4 bg-white/5 border border-[#C29430]/20 rounded-lg appearance-none peer focus:border-[#C29430] focus:ring-0"
                  >
                    <option value="" disabled selected></option>
                    <option>Infrastructure Cloud</option>
                    <option>Développement Sur-Mesure</option>
                    <option>Cybersécurité</option>
                    <option>Consultance IT</option>
                  </select>
                  <label
                    htmlFor="service"
                    className="absolute left-5 top-4 text-gray-400 transition-all peer-focus:-top-3 peer-focus:text-sm peer-valid:-top-3 peer-valid:text-sm"
                  >
                    Service concerné
                  </label>
                </div>
              </div>

              {/* Message */}
              <div className="form-group relative">
                <textarea
                  id="message"
                  rows={6}
                  required
                  className="w-full px-5 py-4 bg-white/5 border border-[#C29430]/20 rounded-lg peer focus:border-[#C29430] focus:ring-0"
                />
                <label
                  htmlFor="message"
                  className="absolute left-5 top-4 text-gray-400 transition-all peer-focus:-top-3 peer-focus:text-sm peer-valid:-top-3 peer-valid:text-sm"
                >
                  Décrivez votre projet
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#C29430] to-[#E0B558] hover:from-[#E0B558] hover:to-[#C29430] text-white font-bold py-4 rounded-lg transition-all transform hover:scale-[1.02]"
              >
                Envoyer la demande
              </button>
            </form>

            {/* Message de confirmation */}
            <div className="success-message hidden mt-8 p-6 bg-green-500/10 border border-green-500/20 rounded-lg text-center">
              <svg className="w-12 h-12 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-bold mb-2">Message envoyé !</h3>
              <p className="text-gray-400">Notre équipe vous contactera dans les 24h</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
