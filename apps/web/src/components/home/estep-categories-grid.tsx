'use client'

import Link from 'next/link'
import { Zap, Battery, Shield, MapPin, Users, Sparkles } from 'lucide-react'

export function EStepCategoriesGrid() {
  const categories = [
    {
      title: 'Premium E-Steps',
      description: 'Topkwaliteit voor de veeleisende rijder',
      icon: <Sparkles className="w-8 h-8" />,
      link: '/shop/premium',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
      image: '⚡'
    },
    {
      title: 'Budget Vriendelijk',
      description: 'Vanaf €299 - Kwaliteit voor iedereen',
      icon: <Battery className="w-8 h-8" />,
      link: '/shop/budget',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      image: '💰'
    },
    {
      title: 'Off-Road Beesten',
      description: 'Voor avontuurlijke terreinrijders',
      icon: <Shield className="w-8 h-8" />,
      link: '/shop/offroad',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      image: '🏔️'
    },
    {
      title: 'Stadsscooters',
      description: 'Perfect voor dagelijks woon-werkverkeer',
      icon: <MapPin className="w-8 h-8" />,
      link: '/shop/city',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      image: '🏙️'
    },
    {
      title: 'Voor Kids & Teens',
      description: 'Veilig en verantwoord rijplezier',
      icon: <Users className="w-8 h-8" />,
      link: '/shop/kids',
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-50',
      image: '👨‍👩‍👧‍👦'
    },
    {
      title: 'Accessoires',
      description: 'Alles voor jouw e-step',
      icon: <Zap className="w-8 h-8" />,
      link: '/shop/accessoires',
      color: 'from-indigo-500 to-blue-500',
      bgColor: 'bg-indigo-50',
      image: '🛠️'
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Shop per Categorie
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Vind jouw perfecte e-step - Voor elk type rijder hebben wij de ideale match
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={category.link}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
              
              <div className="p-6 relative z-10">
                {/* Icon & Emoji */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} text-white`}>
                    {category.icon}
                  </div>
                  <div className="text-4xl">{category.image}</div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-red-600 transition-all">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {category.description}
                </p>

                {/* Arrow */}
                <div className="flex items-center text-orange-600 font-semibold group-hover:gap-2 transition-all">
                  <span>Shop nu</span>
                  <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>

              {/* Bottom accent line */}
              <div className={`h-1 bg-gradient-to-r ${category.color} transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left`}></div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-lg"
          >
            Bekijk Alle Producten
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

