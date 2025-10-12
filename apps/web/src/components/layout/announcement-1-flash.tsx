'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { X, Flame, Clock, Package, ArrowRight } from 'lucide-react'

export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true)
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 47,
    seconds: 32
  })
  const [stockCount, setStockCount] = useState(47)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev
        
        if (seconds > 0) {
          seconds--
        } else if (minutes > 0) {
          minutes--
          seconds = 59
        } else if (hours > 0) {
          hours--
          minutes = 59
          seconds = 59
        }
        
        return { hours, minutes, seconds }
      })
    }, 1000)

    const stockTimer = setInterval(() => {
      if (Math.random() > 0.7) {
        setStockCount(prev => Math.max(20, prev - 1))
      }
    }, 8000)

    return () => {
      clearInterval(timer)
      clearInterval(stockTimer)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div className="relative bg-gradient-to-r from-red-600 via-orange-500 to-pink-600 text-white py-4 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-white/10 animate-pulse" />
      
      <div className="relative container">
        <div className="flex items-center justify-between">
          
          {/* Left: Flash Sale Info */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center animate-bounce">
                <Flame className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-lg font-black">🔥 FLASH SALE: Tot 40% korting op E-steps</div>
                <div className="text-sm opacity-90 flex items-center gap-2">
                  <Package className="w-4 h-4" />
                  Nog <span className="font-bold animate-pulse">{stockCount} stuks</span> beschikbaar
                </div>
              </div>
            </div>
          </div>

          {/* Center: Countdown */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span className="font-medium">Eindigt over</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-white/20 backdrop-blur-sm px-3 py-2 rounded-lg font-mono text-lg font-bold">
                {String(timeLeft.hours).padStart(2, '0')}
              </div>
              <span className="text-xl font-bold animate-pulse">:</span>
              <div className="bg-white/20 backdrop-blur-sm px-3 py-2 rounded-lg font-mono text-lg font-bold">
                {String(timeLeft.minutes).padStart(2, '0')}
              </div>
              <span className="text-xl font-bold animate-pulse">:</span>
              <div className="bg-white/20 backdrop-blur-sm px-3 py-2 rounded-lg font-mono text-lg font-bold">
                {String(timeLeft.seconds).padStart(2, '0')}
              </div>
            </div>
          </div>

          {/* Right: CTA & Close */}
          <div className="flex items-center gap-4">
            <Link href="/shop/e-steps" className="bg-white text-red-600 hover:bg-gray-100 px-6 py-2 rounded-full font-bold transition-all duration-200 hover:scale-105 shadow-lg flex items-center gap-2">
              Shop nu
              <ArrowRight className="w-4 h-4" />
            </Link>
            
            <button 
              onClick={() => setIsVisible(false)}
              className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
              aria-label="Melding sluiten"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
