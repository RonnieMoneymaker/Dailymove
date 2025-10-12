'use client'

import Link from 'next/link'
import { ArrowRight, Zap, Shield, Truck, Star } from 'lucide-react'
import { useState, useEffect } from 'react'

export function EStepHeroPremium() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const heroSlides = [
    {
      title: 'De Nieuwste E-Steps van 2025',
      subtitle: 'Premium kwaliteit, onverslaanbare prijzen',
      cta: 'Shop Nu',
      ctaLink: '/shop/e-steps',
      bgGradient: 'from-orange-600 to-red-600'
    },
    {
      title: 'Gratis Verzending + 24u Levering',
      subtitle: 'Vandaag besteld, morgen in huis',
      cta: 'Ontdek Meer',
      ctaLink: '/shop/deals',
      bgGradient: 'from-blue-600 to-purple-600'
    },
    {
      title: '2 Jaar Garantie op Alles',
      subtitle: 'Zorgeloos rijplezier gegarandeerd',
      cta: 'Lees Meer',
      ctaLink: '/garantie',
      bgGradient: 'from-emerald-600 to-teal-600'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [heroSlides.length])

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Main Hero Content */}
          <div className="text-white space-y-8">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-orange-600/20 backdrop-blur-sm border border-orange-500/30 rounded-full px-4 py-2 text-sm font-semibold">
              <Star className="w-4 h-4 fill-orange-500 text-orange-500" />
              <span>4.9/5 ★ - 25.000+ Tevreden Klanten</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              {heroSlides[currentSlide].title}
            </h1>

            <p className="text-xl md:text-2xl text-gray-300">
              {heroSlides[currentSlide].subtitle}
            </p>

            {/* USPs */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Truck className="w-6 h-6 text-emerald-400" />
                <div className="text-sm">
                  <div className="font-bold">Gratis Verzending</div>
                  <div className="text-gray-400">Vanaf €50</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Shield className="w-6 h-6 text-blue-400" />
                <div className="text-sm">
                  <div className="font-bold">2 Jaar Garantie</div>
                  <div className="text-gray-400">Op alles</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Zap className="w-6 h-6 text-orange-400" />
                <div className="text-sm">
                  <div className="font-bold">24u Levering</div>
                  <div className="text-gray-400">Heel NL</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={heroSlides[currentSlide].ctaLink}
                className={`inline-flex items-center justify-center gap-2 bg-gradient-to-r ${heroSlides[currentSlide].bgGradient} hover:scale-105 transition-transform px-8 py-4 rounded-full text-lg font-bold shadow-2xl`}
              >
                {heroSlides[currentSlide].cta}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/koopgids"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 px-8 py-4 rounded-full text-lg font-semibold transition-colors"
              >
                E-Step Koopgids
              </Link>
            </div>

            {/* Slide Indicators */}
            <div className="flex items-center gap-3">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentSlide ? 'w-8 bg-orange-500' : 'w-2 bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right: Featured Product Showcase */}
          <div className="relative">
            {/* 3D Card Effect */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-purple-600 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-3xl p-8 transform group-hover:scale-105 transition-transform duration-500">
                {/* Product Image Placeholder */}
                <div className="aspect-square bg-gradient-to-br from-orange-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <Zap className="w-32 h-32 text-white/80" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">
                  Xiaomi Pro 2 Elite
                </h3>
                <p className="text-gray-300 mb-4">
                  Onze bestseller met 45km bereik
                </p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-bold text-white">€599</div>
                    <div className="text-sm text-gray-400 line-through">€799</div>
                  </div>
                  <Link
                    href="/product/xiaomi-pro-2-elite"
                    className="bg-orange-600 hover:bg-orange-700 px-6 py-3 rounded-full font-bold transition-colors"
                  >
                    Bekijk Product
                  </Link>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-red-600 text-white px-4 py-2 rounded-full font-bold text-lg shadow-2xl animate-bounce">
              -25% 🔥
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

