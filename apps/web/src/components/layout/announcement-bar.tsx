'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { X, Clock, Users, TrendingUp, Zap } from 'lucide-react'

const promos = [
  {
    icon: Zap,
    text: "🔥 FLASH SALE: Tot 40% korting op E-steps",
    cta: "Shop nu",
    link: "/shop/e-steps",
    urgency: "Nog 47 stuks beschikbaar",
    bgColor: "bg-gradient-to-r from-red-600 to-pink-600",
    textColor: "text-white"
  },
  {
    icon: Users,
    text: "✅ 2.847+ klanten kochten deze week een E-step",
    cta: "Bekijk bestsellers",
    link: "/shop/e-steps?sort=bestselling",
    urgency: "Populairste producten",
    bgColor: "bg-gradient-to-r from-green-600 to-emerald-600",
    textColor: "text-white"
  },
  {
    icon: TrendingUp,
    text: "📈 #1 E-step specialist van Nederland",
    cta: "Lees reviews",
    link: "/reviews",
    urgency: "4.9/5 sterren - 25.000+ reviews",
    bgColor: "bg-gradient-to-r from-blue-600 to-indigo-600",
    textColor: "text-white"
  },
  {
    icon: Clock,
    text: "⚡ Voor 22:00 besteld = morgen in huis",
    cta: "Bestel nu",
    link: "/shop/e-steps",
    urgency: "Gratis verzending vanaf €50",
    bgColor: "bg-gradient-to-r from-purple-600 to-violet-600",
    textColor: "text-white"
  }
]

export function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false)
  const [messageIndex, setMessageIndex] = useState(0)
  const [timeLeft, setTimeLeft] = useState(23 * 3600 + 47 * 60 + 32) // 23:47:32

  useEffect(() => {
    const stored = localStorage.getItem('announcement.dismissed')
    if (stored === '1') setDismissed(true)
  }, [])

  useEffect(() => {
    const id = setInterval(() => {
      setMessageIndex((i) => (i + 1) % promos.length)
    }, 6000) // Sneller wisselen voor meer urgency
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev > 0 ? prev - 1 : 24 * 3600) // Reset na 24u
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  if (dismissed) return null

  const currentPromo = promos[messageIndex]
  const hours = Math.floor(timeLeft / 3600)
  const minutes = Math.floor((timeLeft % 3600) / 60)
  const seconds = timeLeft % 60

  const formatTime = (num: number) => num.toString().padStart(2, '0')

  return (
    <div className={`${currentPromo.bgColor} ${currentPromo.textColor} relative overflow-hidden`} aria-live="polite" role="status">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-pulse" />
      </div>
      
      <div className="relative container py-3">
        <div className="flex items-center justify-center gap-4 text-center">
          {/* Icon */}
          <currentPromo.icon className="w-5 h-5 flex-shrink-0 animate-bounce" />
          
          {/* Main message */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <span className="font-bold text-base sm:text-lg">
              {currentPromo.text}
            </span>
            
            {/* Urgency/Social proof */}
            <span className="text-sm opacity-90 font-medium">
              {currentPromo.urgency}
            </span>
            
            {/* Countdown timer voor eerste promo */}
            {messageIndex === 0 && (
              <div className="flex items-center gap-1 bg-black/20 px-3 py-1 rounded-full text-sm font-mono">
                <Clock className="w-3 h-3" />
                <span>Eindigt over {formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}</span>
              </div>
            )}
          </div>
          
          {/* CTA Button */}
          <Link 
            href={currentPromo.link}
            className="bg-white/20 hover:bg-white/30 text-white font-bold px-4 py-2 rounded-full text-sm transition-all duration-200 hover:scale-105 shadow-lg backdrop-blur-sm border border-white/20"
          >
            {currentPromo.cta} →
          </Link>
          
          {/* Close button */}
          <button
            aria-label="Melding sluiten"
            className="ml-2 p-1 hover:bg-white/20 rounded-full transition-colors"
            onClick={() => {
              localStorage.setItem('announcement.dismissed', '1')
              setDismissed(true)
            }}
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        
        {/* Progress indicator */}
        <div className="flex justify-center mt-2 gap-1">
          {promos.map((_, index) => (
            <div 
              key={index}
              className={`h-1 w-8 rounded-full transition-all duration-300 ${
                index === messageIndex ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}


