'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Marco van der Berg',
    location: 'Amsterdam',
    rating: 5,
    text: 'Fantastische service! Mijn Xiaomi E-step werd de volgende dag geleverd en werkt perfect. De klantenservice was super behulpzaam bij het kiezen van het juiste model.',
    product: 'Xiaomi Mi Electric Scooter 4 Pro',
    image: '/testimonials/marco.jpg',
    verified: true
  },
  {
    id: 2,
    name: 'Lisa Janssen',
    location: 'Rotterdam',
    rating: 5,
    text: 'Ik was eerst sceptisch over online kopen, maar VoltMover heeft alle verwachtingen overtroffen. Uitstekende kwaliteit en de 2 jaar garantie geeft veel vertrouwen.',
    product: 'Segway Ninebot MAX G30LP',
    image: '/testimonials/lisa.jpg',
    verified: true
  },
  {
    id: 3,
    name: 'Kevin de Wit',
    location: 'Utrecht',
    rating: 5,
    text: 'Al 6 maanden dagelijks gebruik en nog steeds super tevreden. De batterij houdt het lang vol en het rijdt heerlijk soepel. Aanrader!',
    product: 'Pure Air Pro',
    image: '/testimonials/kevin.jpg',
    verified: true
  },
  {
    id: 4,
    name: 'Sarah Bakker',
    location: 'Den Haag',
    rating: 5,
    text: 'Geweldige ervaring van begin tot eind. Snelle levering, perfecte verpakking en een E-step die precies doet wat beloofd wordt. Top!',
    product: 'Kaabo Mantis 8 Pro',
    image: '/testimonials/sarah.jpg',
    verified: true
  },
  {
    id: 5,
    name: 'Tom Vermeulen',
    location: 'Eindhoven',
    rating: 5,
    text: 'Perfecte klantenservice! Toen mijn step een klein probleem had, werd het binnen 24 uur opgelost. Zo moet het!',
    product: 'Xiaomi Mi Electric Scooter 4 Pro',
    image: '/testimonials/tom.jpg',
    verified: true
  },
  {
    id: 6,
    name: 'Emma de Jong',
    location: 'Groningen',
    rating: 5,
    text: 'Ik gebruik mijn e-step nu dagelijks voor woon-werk verkeer. Scheelt zoveel tijd en geld! Aanrader voor iedereen.',
    product: 'Segway Ninebot MAX G30LP',
    image: '/testimonials/emma.jpg',
    verified: true
  },
  {
    id: 7,
    name: 'Rick Hendriks',
    location: 'Tilburg',
    rating: 5,
    text: 'Fantastische kwaliteit voor deze prijs. De step rijdt super stabiel en de batterij gaat echt lang mee.',
    product: 'Pure Air Pro',
    image: '/testimonials/rick.jpg',
    verified: true
  },
  {
    id: 8,
    name: 'Anouk Peters',
    location: 'Breda',
    rating: 5,
    text: 'VoltMover heeft echt de beste selectie en service. Mijn vrienden zijn ook allemaal overgestapt!',
    product: 'Xiaomi Mi Electric Scooter 4 Pro',
    image: '/testimonials/anouk.jpg',
    verified: true
  },
  {
    id: 9,
    name: 'Jeroen Smits',
    location: 'Nijmegen',
    rating: 5,
    text: 'Snelle levering, uitstekende kwaliteit en een eerlijke prijs. Kan niet beter!',
    product: 'Kaabo Mantis 8 Pro',
    image: '/testimonials/jeroen.jpg',
    verified: true
  },
  {
    id: 10,
    name: 'Marloes van Dijk',
    location: 'Apeldoorn',
    rating: 5,
    text: 'Al 8 maanden intensief gebruik en nog steeds super tevreden. Beste aankoop ooit!',
    product: 'Segway Ninebot MAX G30LP',
    image: '/testimonials/marloes.jpg',
    verified: true
  },
  {
    id: 11,
    name: 'Bas Koster',
    location: 'Haarlem',
    rating: 5,
    text: 'Professionale service en een top product. De garantie geeft veel vertrouwen.',
    product: 'Pure Air Pro',
    image: '/testimonials/bas.jpg',
    verified: true
  },
  {
    id: 12,
    name: 'Sophie Willems',
    location: 'Maastricht',
    rating: 5,
    text: 'Mijn e-step is echt een game-changer voor mijn dagelijkse vervoer. Dank je VoltMover!',
    product: 'Xiaomi Mi Electric Scooter 4 Pro',
    image: '/testimonials/sophie.jpg',
    verified: true
  },
  {
    id: 13,
    name: 'Danny Jansen',
    location: 'Zwolle',
    rating: 5,
    text: 'Uitstekende prijs-kwaliteit verhouding. Levering was supersnel en perfect verpakt.',
    product: 'Kaabo Mantis 8 Pro',
    image: '/testimonials/danny.jpg',
    verified: true
  },
  {
    id: 14,
    name: 'Nadia El Amrani',
    location: 'Almere',
    rating: 5,
    text: 'VoltMover is echt betrouwbaar. Alles verliep vlekkeloos van bestelling tot levering.',
    product: 'Segway Ninebot MAX G30LP',
    image: '/testimonials/nadia.jpg',
    verified: true
  },
  {
    id: 15,
    name: 'Sven Meijer',
    location: 'Amersfoort',
    rating: 5,
    text: 'Geweldig advies gekregen bij het kiezen. De step doet precies wat ik nodig heb!',
    product: 'Pure Air Pro',
    image: '/testimonials/sven.jpg',
    verified: true
  }
]

export function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex(prev => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex(prev => prev === 0 ? testimonials.length - 1 : prev - 1)
    setIsAutoPlaying(false)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Wat onze klanten zeggen
          </h2>
          <p className="text-xl text-gray-600">
            Lees de ervaringen van meer dan 15.000 tevreden klanten
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main testimonial */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden">
            {/* Quote decoration */}
            <Quote className="absolute top-6 right-6 h-12 w-12 text-blue-100" />
            
            <div className="relative z-10">
              {/* Rating */}
              <div className="flex items-center justify-center mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial text */}
              <blockquote className="text-xl md:text-2xl text-gray-800 text-center mb-8 leading-relaxed">
                "{currentTestimonial.text}"
              </blockquote>

              {/* Customer info */}
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 opacity-20"></div>
                  <span className="text-white font-bold text-lg relative z-10">
                    {currentTestimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900">
                  {currentTestimonial.name}
                </h4>
                <p className="text-gray-600">
                  {currentTestimonial.location}
                </p>
                <p className="text-sm text-blue-600 font-medium mt-1">
                  Kocht: {currentTestimonial.product}
                </p>
                {currentTestimonial.verified && (
                  <div className="inline-flex items-center space-x-1 mt-2 text-green-600 text-sm">
                    <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Geverifieerde aankoop</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors group"
            aria-label="Vorige testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600 group-hover:text-gray-800" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors group"
            aria-label="Volgende testimonial"
          >
            <ChevronRight className="h-6 w-6 text-gray-600 group-hover:text-gray-800" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index)
                  setIsAutoPlaying(false)
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex 
                    ? 'bg-blue-600' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Ga naar testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats below testimonials */}
        <div className="grid grid-cols-3 gap-8 mt-16 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600">4.9/5</div>
            <div className="text-gray-600">Gemiddelde beoordeling</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600">2,847</div>
            <div className="text-gray-600">Reviews</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600">98%</div>
            <div className="text-gray-600">Zou ons aanbevelen</div>
          </div>
        </div>
      </div>
    </section>
  )
}
