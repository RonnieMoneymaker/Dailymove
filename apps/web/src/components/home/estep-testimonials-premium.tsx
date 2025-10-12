'use client'

import { Star, Quote, CheckCircle, User } from 'lucide-react'
import { useState } from 'react'

export function EStepTestimonialsPremium() {
  const [activeTab, setActiveTab] = useState<'all' | 'video' | 'photos'>('all')

  const testimonials = [
    {
      id: 1,
      name: 'Lars van de Berg',
      location: 'Amsterdam',
      rating: 5,
      date: '2 dagen geleden',
      verified: true,
      review: 'Ongelofelijk tevreden met mijn nieuwe Xiaomi Pro 2! De levering was super snel, binnen 24 uur had ik hem al. De kwaliteit is top en de klantenservice heeft me perfect geholpen met het kiezen van het juiste model.',
      productBought: 'Xiaomi Pro 2 Elite',
      hasPhoto: true,
      photoCount: 3,
      helpful: 45
    },
    {
      id: 2,
      name: 'Sophie Jansen',
      location: 'Rotterdam',
      rating: 5,
      date: '5 dagen geleden',
      verified: true,
      review: 'Super blij met mijn aankoop! Gebruik hem dagelijks voor woon-werkverkeer. Bespaart me zoveel tijd en het is ook nog eens super leuk om op te rijden. De accu gaat echt lang mee, zelfs in de winter.',
      productBought: 'Segway Ninebot Max G30',
      hasPhoto: true,
      photoCount: 2,
      helpful: 38
    },
    {
      id: 3,
      name: 'Mike Peters',
      location: 'Utrecht',
      rating: 5,
      date: '1 week geleden',
      verified: true,
      review: 'Beste webshop voor e-steps! Enorme keuze, eerlijke prijzen en uitstekende service. Had een vraag over onderhoud en kreeg binnen een uur een uitgebreid antwoord. Echt een aanrader!',
      productBought: 'Uscooter Booster V',
      hasPhoto: true,
      photoCount: 4,
      helpful: 52
    },
    {
      id: 4,
      name: 'Emma de Vries',
      location: 'Den Haag',
      rating: 5,
      date: '1 week geleden',
      verified: true,
      review: 'Mijn dochter is super blij met haar nieuwe e-step! Veilig, betrouwbaar en perfect voor haar leeftijd. De uitleg bij levering was ook heel prettig. Top service!',
      productBought: 'Segway E22E',
      hasPhoto: true,
      photoCount: 2,
      helpful: 29
    },
    {
      id: 5,
      name: 'Daan Vermeer',
      location: 'Eindhoven',
      rating: 5,
      date: '2 weken geleden',
      verified: true,
      review: 'Na veel vergelijken toch hier besteld en ik heb er geen spijt van! De prijs-kwaliteit verhouding is uitstekend. De e-step rijdt als een zonnetje en het bereik is precies zoals beloofd.',
      productBought: 'Xiaomi Mi 3',
      hasPhoto: true,
      photoCount: 1,
      helpful: 41
    },
    {
      id: 6,
      name: 'Lisa Bakker',
      location: 'Groningen',
      rating: 5,
      date: '3 weken geleden',
      verified: true,
      review: 'Fantastische ervaring! Van bestelling tot levering alles perfect geregeld. De e-step zelf is geweldig - comfortabel, snel en super handig voor in de stad. Zou hier zeker opnieuw bestellen!',
      productBought: 'Ninebot KickScooter F40',
      hasPhoto: true,
      photoCount: 3,
      helpful: 36
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-semibold mb-4">
            <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
            <span>4.9 uit 5 sterren - 25.000+ reviews</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Wat Onze Klanten Zeggen
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Echte reviews van echte klanten - 100% geverifieerde aankopen
          </p>
        </div>

        {/* Trust Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-orange-600 mb-1">4.9/5</div>
            <div className="text-sm text-gray-600">Gemiddelde Score</div>
            <div className="flex justify-center gap-0.5 mt-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
              ))}
            </div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-blue-600 mb-1">25K+</div>
            <div className="text-sm text-gray-600">Tevreden Klanten</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-green-600 mb-1">98%</div>
            <div className="text-sm text-gray-600">Zou Aanbevelen</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-purple-600 mb-1">9.4</div>
            <div className="text-sm text-gray-600">Klantenservice</div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-6 py-2 rounded-full font-semibold transition-colors ${
              activeTab === 'all'
                ? 'bg-orange-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Alle Reviews
          </button>
          <button
            onClick={() => setActiveTab('photos')}
            className={`px-6 py-2 rounded-full font-semibold transition-colors ${
              activeTab === 'photos'
                ? 'bg-orange-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Met Foto's
          </button>
          <button
            onClick={() => setActiveTab('video')}
            className={`px-6 py-2 rounded-full font-semibold transition-colors ${
              activeTab === 'video'
                ? 'bg-orange-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Met Video
          </button>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow border border-gray-100"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold">
                    <User className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 flex items-center gap-2">
                      {testimonial.name}
                      {testimonial.verified && (
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      )}
                    </div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                  </div>
                </div>
                <Quote className="w-8 h-8 text-orange-200" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-3">
                <div className="flex gap-0.5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <span className="text-sm text-gray-500">{testimonial.date}</span>
              </div>

              {/* Review Text */}
              <p className="text-gray-700 mb-4 leading-relaxed">
                {testimonial.review}
              </p>

              {/* Product Info */}
              <div className="bg-gray-50 rounded-lg p-3 mb-4">
                <div className="text-xs text-gray-500 mb-1">Gekocht product:</div>
                <div className="font-semibold text-gray-900 text-sm">
                  {testimonial.productBought}
                </div>
              </div>

              {/* Photos indicator */}
              {testimonial.hasPhoto && (
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                  <div className="flex -space-x-2">
                    {[...Array(Math.min(testimonial.photoCount, 3))].map((_, i) => (
                      <div
                        key={i}
                        className="w-10 h-10 bg-gradient-to-br from-gray-200 to-gray-300 rounded border-2 border-white flex items-center justify-center"
                      >
                        📸
                      </div>
                    ))}
                  </div>
                  <span>{testimonial.photoCount} foto's</span>
                </div>
              )}

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-orange-600 transition-colors">
                  <span>👍 Behulpzaam</span>
                  <span className="font-semibold">({testimonial.helpful})</span>
                </button>
                <span className="text-xs text-green-600 font-semibold">
                  ✓ Geverifieerde aankoop
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center">
          <button className="inline-flex items-center gap-2 bg-white border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-3 rounded-full font-bold transition-colors">
            Bekijk Alle 25.000+ Reviews
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Trustpilot Banner */}
        <div className="mt-12 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 text-center border border-emerald-200">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Star className="w-8 h-8 fill-emerald-600 text-emerald-600" />
            <div className="text-3xl font-bold text-gray-900">Uitstekend op Trustpilot</div>
            <Star className="w-8 h-8 fill-emerald-600 text-emerald-600" />
          </div>
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-emerald-600 text-emerald-600" />
            ))}
          </div>
          <div className="text-gray-600">
            Gebaseerd op <span className="font-bold">25.324 reviews</span> - Score: <span className="font-bold">4.9/5</span>
          </div>
        </div>
      </div>
    </section>
  )
}

