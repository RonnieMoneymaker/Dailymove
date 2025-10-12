'use client'

import { useState, useEffect } from 'react'
import { X, Gift, Sparkles, Mail, ArrowRight } from 'lucide-react'

export function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    // Check if popup was already shown in this session
    const shown = sessionStorage.getItem('exitPopupShown')
    if (shown) {
      setHasShown(true)
      return
    }

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger when cursor leaves from top (going to address bar/close button)
      if (e.clientY <= 0 && !hasShown && !isOpen) {
        setIsOpen(true)
        setHasShown(true)
        sessionStorage.setItem('exitPopupShown', 'true')
      }
    }

    // Add slight delay before enabling to avoid false triggers
    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave)
    }, 5000) // 5 seconds delay

    return () => {
      clearTimeout(timer)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [hasShown, isOpen])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would normally send to your email service
    console.log('Email submitted:', email)
    setIsOpen(false)
    // Could set a cookie here to never show again
    localStorage.setItem('exitPopupConverted', 'true')
  }

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] animate-in fade-in duration-200"
        onClick={() => setIsOpen(false)}
      />

      {/* Popup */}
      <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 animate-in zoom-in-95 duration-300">
        <div 
          className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full relative overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 z-10 p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-6 w-6 text-gray-600" />
          </button>

          <div className="grid md:grid-cols-2">
            {/* Left Side - Visual */}
            <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-8 text-white flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6">
                  <Gift className="h-10 w-10" />
                </div>
                
                <h3 className="text-4xl font-black mb-4">
                  Wacht even! 🎁
                </h3>
                
                <p className="text-xl mb-6 text-white/95">
                  Krijg <span className="font-black text-yellow-300">10% korting</span> op je eerste bestelling!
                </p>

                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Sparkles className="h-5 w-5 text-yellow-300" />
                    <span>Gratis verzending vanaf €50</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Sparkles className="h-5 w-5 text-yellow-300" />
                    <span>30 dagen bedenktijd</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Sparkles className="h-5 w-5 text-yellow-300" />
                    <span>2 jaar garantie</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="p-8 flex flex-col justify-center">
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-bold mb-4">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span>Exclusieve Deal</span>
                </div>

                <h4 className="text-2xl font-black text-gray-900 mb-2">
                  Ontvang Je Kortingscode
                </h4>
                <p className="text-gray-600">
                  Geldig voor alle producten, geen minimum besteding
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    E-mailadres
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="jouw@email.nl"
                      required
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 outline-none transition-all font-medium"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-black text-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <span>Claim 10% Korting</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </form>

              <p className="text-xs text-gray-500 text-center mt-4">
                Door je aan te melden ga je akkoord met onze{' '}
                <a href="/privacy" className="underline hover:text-gray-700">
                  privacyvoorwaarden
                </a>
              </p>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500">★★★★★</span>
                    <span className="font-bold">4.9/5</span>
                  </div>
                  <span className="text-gray-300">•</span>
                  <span>25.000+ tevreden klanten</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

