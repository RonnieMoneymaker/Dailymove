'use client'

import { useState } from 'react'
import { X, Mail, Gift, ArrowRight } from 'lucide-react'

export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true)
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setTimeout(() => {
        setIsVisible(false)
      }, 2000)
    }
  }

  if (!isVisible) return null

  return (
    <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-4">
      <div className="container">
        <div className="flex items-center justify-between">
          
          {/* Newsletter offer */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Gift className="w-6 h-6 text-yellow-300" />
            </div>
            <div>
              <div className="font-bold text-lg">
                Krijg €50 korting op je eerste bestelling!
              </div>
              <div className="text-sm opacity-90">
                Meld je aan voor onze nieuwsbrief en ontvang exclusieve deals
              </div>
            </div>
          </div>

          {/* Newsletter form */}
          <div className="hidden md:flex items-center gap-4">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex items-center gap-2">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Je emailadres..."
                    className="pl-10 pr-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 w-64"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-white text-green-600 hover:bg-gray-100 px-4 py-2 rounded-lg font-bold transition-colors flex items-center gap-2"
                >
                  Aanmelden
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">
                <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
                <span className="font-medium">Bedankt! Check je email voor je kortingscode.</span>
              </div>
            )}
            
            <button 
              onClick={() => setIsVisible(false)}
              className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
              aria-label="Sluiten"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile CTA */}
          <div className="md:hidden flex items-center gap-2">
            <button 
              onClick={() => setIsVisible(false)}
              className="bg-white text-green-600 px-4 py-2 rounded-lg font-bold"
            >
              Meld aan
            </button>
            <button 
              onClick={() => setIsVisible(false)}
              className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
