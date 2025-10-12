'use client'

import { useState } from 'react'
import { Mail, Gift, Zap, Check } from 'lucide-react'

export function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubscribed(true)
    setIsLoading(false)
    setEmail('')
  }

  if (isSubscribed) {
    return (
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Welkom bij de DailyMove familie! 🎉
            </h2>
            <p className="text-gray-600 mb-6">
              Je ontvangt binnen enkele minuten een welkomstmail met je €10 kortingscode.
            </p>
            <button 
              onClick={() => setIsSubscribed(false)}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Nog een email toevoegen
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 relative overflow-hidden">
      {/* Background lifestyle image */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src="/images/lifestyle/escooter-city.jpg"
          alt="E-step lifestyle"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 via-purple-600/80 to-blue-700/80"></div>
      
      {/* Animated background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
            <Gift className="h-8 w-8" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Krijg €10 korting op je eerste bestelling
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Schrijf je in voor onze nieuwsbrief en ontvang exclusieve deals, tips en het laatste nieuws over E-steps
          </p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="flex items-center justify-center space-x-3">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <Gift className="h-4 w-4" />
            </div>
            <span className="text-blue-100">€10 welkomstkorting</span>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <Zap className="h-4 w-4" />
            </div>
            <span className="text-blue-100">Exclusieve flash sales</span>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <Mail className="h-4 w-4" />
            </div>
            <span className="text-blue-100">E-step tips & tricks</span>
          </div>
        </div>

        {/* Signup form */}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Voer je emailadres in"
                required
                className="w-full px-6 py-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/25 text-lg"
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 min-w-[140px]"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  <span>Krijg €10</span>
                  <Gift className="h-5 w-5" />
                </>
              )}
            </button>
          </div>
        </form>

        <p className="text-sm text-blue-200 mt-4">
          Geen spam, alleen waardevolle content. Je kunt je altijd uitschrijven.
        </p>

        {/* Social proof */}
        <div className="mt-8 pt-8 border-t border-white/20">
          <p className="text-blue-100 mb-4">
            Sluit je aan bij <span className="font-bold">12.847</span> andere E-step liefhebbers
          </p>
          <div className="flex justify-center items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-8 h-8 bg-white/20 rounded-full border-2 border-white/30 flex items-center justify-center -ml-2 first:ml-0">
                <span className="text-xs font-semibold">👤</span>
              </div>
            ))}
            <span className="text-blue-100 ml-4 text-sm">+12.842 anderen</span>
          </div>
        </div>
      </div>
    </section>
  )
}
