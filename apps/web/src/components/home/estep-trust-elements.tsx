'use client'

import { Shield, Truck, RotateCcw, Award, Star, Clock, Lock, HeartHandshake } from 'lucide-react'

export function EStepTrustElements() {
  const trustBadges = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'Gratis Verzending',
      description: 'Vanaf €50 door heel Nederland',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: '2 Jaar Garantie',
      description: 'Op alle producten standaard',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <RotateCcw className="w-8 h-8" />,
      title: '30 Dagen Retour',
      description: 'Niet goed? Geld terug!',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: '24u Levering',
      description: 'Vandaag besteld, morgen in huis',
      color: 'from-purple-500 to-pink-500'
    }
  ]

  const certifications = [
    {
      name: 'Trustpilot',
      rating: '4.9/5',
      reviews: '25.000+',
      badge: '⭐'
    },
    {
      name: 'Thuiswinkel',
      rating: 'Waarborg',
      reviews: 'Gecertificeerd',
      badge: '🏆'
    },
    {
      name: 'WebwinkelKeur',
      rating: '9.5/10',
      reviews: '15.000+',
      badge: '✓'
    },
    {
      name: 'iDEAL',
      rating: 'Veilig',
      reviews: 'Betalen',
      badge: '💳'
    }
  ]

  const statsCounters = [
    {
      number: '25.000+',
      label: 'Tevreden Klanten',
      icon: '😊'
    },
    {
      number: '98%',
      label: 'Zou Aanbevelen',
      icon: '👍'
    },
    {
      number: '24/7',
      label: 'Klantenservice',
      icon: '💬'
    },
    {
      number: '500+',
      label: 'Producten',
      icon: '⚡'
    }
  ]

  const securityFeatures = [
    {
      icon: <Lock className="w-6 h-6" />,
      text: 'SSL Beveiligde Betaling'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      text: 'Privacy Gegarandeerd'
    },
    {
      icon: <Award className="w-6 h-6" />,
      text: 'Officiële Dealer'
    },
    {
      icon: <HeartHandshake className="w-6 h-6" />,
      text: 'Eerlijke Prijzen'
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Main Trust Badges */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {trustBadges.map((badge, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${badge.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                {badge.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {badge.title}
              </h3>
              <p className="text-gray-600">
                {badge.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Counter */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl p-8 md:p-12 mb-16 text-white overflow-hidden relative">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Waarom 25.000+ Klanten Voor Ons Kiezen
              </h2>
              <p className="text-xl opacity-90">
                Nederland's meest vertrouwde e-mobility specialist
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {statsCounters.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl mb-2">{stat.icon}</div>
                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg opacity-90">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-orange-500 transition-colors text-center"
            >
              <div className="text-4xl mb-3">{cert.badge}</div>
              <div className="font-bold text-gray-900 mb-1">{cert.name}</div>
              <div className="text-2xl font-bold text-orange-600 mb-1">{cert.rating}</div>
              <div className="text-sm text-gray-500">{cert.reviews}</div>
            </div>
          ))}
        </div>

        {/* Security Features */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            🔒 Veilig & Betrouwbaar Online Shoppen
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {securityFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-blue-600 mb-3 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <div className="font-semibold text-gray-900 text-sm">
                  {feature.text}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Promise */}
        <div className="mt-16 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-6 py-3 rounded-full font-bold text-lg mb-6">
            <HeartHandshake className="w-6 h-6" />
            <span>Onze Klantbelofte</span>
          </div>
          <p className="text-xl text-gray-700 leading-relaxed">
            Bij DailyMove draait alles om <span className="font-bold text-orange-600">jouw tevredenheid</span>. 
            We bieden eerlijke prijzen, uitstekende service en producten van topkwaliteit. 
            Niet tevreden? <span className="font-bold">Geld terug garantie</span> binnen 30 dagen. 
            Geen gedoe, geen kleine lettertjes - gewoon eerlijk zaken doen.
          </p>
          
          {/* Trust Seals */}
          <div className="flex items-center justify-center gap-4 mt-8 flex-wrap">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              <span className="font-semibold">Trustpilot 4.9/5</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
              <Shield className="w-5 h-5 text-blue-500" />
              <span className="font-semibold">Thuiswinkel Waarborg</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
              <Award className="w-5 h-5 text-green-500" />
              <span className="font-semibold">WebwinkelKeur 9.5</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

