'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { X, Flame, Clock, Package, Star, Truck, Shield, Gift, Zap, TrendingUp, Eye, ArrowRight, Sparkles } from 'lucide-react'

export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true)
  const [currentPromo, setCurrentPromo] = useState(0)
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 47, seconds: 32 })
  const [liveViewers, setLiveViewers] = useState(234)
  const [stockCount, setStockCount] = useState(47)

  const promos = [
    {
      icon: Flame,
      title: '🔥 MEGA FLASH SALE',
      subtitle: 'Tot 40% korting op alle E-steps',
      gradient: 'from-red-600 via-orange-500 to-pink-600',
      cta: 'Shop Flash Sale'
    },
    {
      icon: Gift,
      title: '🎁 GRATIS ACCESSOIRES',
      subtitle: 'Helm + slot t.w.v. €89 cadeau',
      gradient: 'from-purple-600 via-blue-600 to-cyan-600',
      cta: 'Claim Cadeau'
    },
    {
      icon: Star,
      title: '⭐ BESTSELLER WEEK',
      subtitle: 'Top 10 E-steps met extra korting',
      gradient: 'from-yellow-600 via-orange-600 to-red-600',
      cta: 'Bekijk Top 10'
    },
    {
      icon: Truck,
      title: '🚚 GRATIS BEZORGING',
      subtitle: 'Vandaag besteld = morgen in huis',
      gradient: 'from-green-600 via-teal-600 to-blue-600',
      cta: 'Bestel Nu'
    }
  ]

  useEffect(() => {
    // Countdown timer
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev
        if (seconds > 0) seconds--
        else if (minutes > 0) { minutes--; seconds = 59 }
        else if (hours > 0) { hours--; minutes = 59; seconds = 59 }
        return { hours, minutes, seconds }
      })
    }, 1000)

    // Promo rotator
    const promoTimer = setInterval(() => {
      setCurrentPromo(prev => (prev + 1) % promos.length)
    }, 6000)

    // Live stats updater
    const statsTimer = setInterval(() => {
      setLiveViewers(prev => prev + Math.floor(Math.random() * 10) - 5)
      if (Math.random() > 0.7) setStockCount(prev => Math.max(20, prev - 1))
    }, 4000)

    return () => {
      clearInterval(timer)
      clearInterval(promoTimer)
      clearInterval(statsTimer)
    }
  }, [promos.length])

  if (!isVisible) return null

  const currentPromoData = promos[currentPromo]

  return (
    <div className={`relative bg-gradient-to-r ${currentPromoData.gradient} text-white py-5 overflow-hidden transition-all duration-1000`}>
      {/* Advanced animated background */}
      <div className="absolute inset-0">
        {/* Floating particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
        
        {/* Moving wave pattern */}
        <div className="absolute inset-0 bg-white/5 animate-pulse" />
      </div>
      
      <div className="relative container">
        <div className="grid grid-cols-12 gap-4 items-center">
          
          {/* Left: Main Promo (animated) */}
          <div className="col-span-12 lg:col-span-4">
            <div className="flex items-center gap-4 transition-all duration-500">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center animate-bounce">
                <currentPromoData.icon className="w-8 h-8" />
              </div>
              <div>
                <div className="text-xl font-black mb-1">
                  {currentPromoData.title}
                </div>
                <div className="text-sm opacity-90 font-medium">
                  {currentPromoData.subtitle}
                </div>
              </div>
            </div>
          </div>

          {/* Center: Live Stats & Countdown */}
          <div className="col-span-12 lg:col-span-5">
            <div className="flex items-center justify-center gap-8">
              
              {/* Live stats */}
              <div className="hidden md:flex items-center gap-6">
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-2 rounded-xl">
                  <Eye className="w-4 h-4 text-green-300 animate-pulse" />
                  <span className="text-sm font-bold">{liveViewers}</span>
                  <span className="text-xs opacity-80">online</span>
                </div>
                
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-2 rounded-xl">
                  <Package className="w-4 h-4 text-orange-300" />
                  <span className="text-sm font-bold">{stockCount}</span>
                  <span className="text-xs opacity-80">left</span>
                </div>
              </div>

              {/* Countdown */}
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <div className="flex items-center gap-1">
                  <div className="bg-black/30 backdrop-blur-sm px-2 py-1 rounded text-sm font-mono font-bold">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </div>
                  <span className="animate-pulse">:</span>
                  <div className="bg-black/30 backdrop-blur-sm px-2 py-1 rounded text-sm font-mono font-bold">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </div>
                  <span className="animate-pulse">:</span>
                  <div className="bg-black/30 backdrop-blur-sm px-2 py-1 rounded text-sm font-mono font-bold">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: CTA & Features */}
          <div className="col-span-12 lg:col-span-3">
            <div className="flex items-center justify-end gap-3">
              
              {/* Trust badges */}
              <div className="hidden xl:flex items-center gap-2 text-xs">
                <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                  <Shield className="w-3 h-3" />
                  <span>2j garantie</span>
                </div>
                <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                  <Star className="w-3 h-3 fill-current text-yellow-300" />
                  <span>4.9★</span>
                </div>
              </div>

              {/* CTA Button */}
              <Link 
                href="/shop/e-steps" 
                className="bg-white text-gray-900 hover:bg-gray-100 px-6 py-3 rounded-xl font-black transition-all duration-200 hover:scale-105 shadow-2xl flex items-center gap-2 group"
              >
                <Sparkles className="w-4 h-4 group-hover:animate-spin" />
                {currentPromoData.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              {/* Close button */}
              <button 
                onClick={() => setIsVisible(false)}
                className="w-10 h-10 bg-black/20 hover:bg-black/40 rounded-xl flex items-center justify-center transition-colors backdrop-blur-sm"
                aria-label="Sluiten"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Progress indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20">
        <div 
          className="h-full bg-white/50 transition-all duration-6000 ease-linear"
          style={{ width: `${((currentPromo + 1) / promos.length) * 100}%` }}
        />
      </div>
    </div>
  )
}

// Add custom CSS for floating animation
const floatingKeyframes = `
@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  25% { transform: translateY(-10px) rotate(90deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
  75% { transform: translateY(-10px) rotate(270deg); }
}
`
