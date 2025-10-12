'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { X, Eye, TrendingUp, Users, Star, Zap } from 'lucide-react'

export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true)
  const [liveViewers, setLiveViewers] = useState(234)
  const [todaySales, setTodaySales] = useState(47)
  const [currentMessage, setCurrentMessage] = useState(0)

  const messages = [
    {
      icon: Eye,
      text: `${liveViewers} mensen bekijken nu E-steps`,
      color: 'text-green-400'
    },
    {
      icon: TrendingUp,
      text: `${todaySales} E-steps verkocht vandaag`,
      color: 'text-blue-400'
    },
    {
      icon: Star,
      text: '4.9/5 sterren • 2.847 reviews',
      color: 'text-yellow-400'
    },
    {
      icon: Users,
      text: '25.000+ tevreden klanten',
      color: 'text-purple-400'
    }
  ]

  useEffect(() => {
    const viewerTimer = setInterval(() => {
      setLiveViewers(prev => prev + Math.floor(Math.random() * 10) - 5)
    }, 3000)

    const salesTimer = setInterval(() => {
      if (Math.random() > 0.8) {
        setTodaySales(prev => prev + 1)
      }
    }, 15000)

    const messageTimer = setInterval(() => {
      setCurrentMessage(prev => (prev + 1) % messages.length)
    }, 4000)

    return () => {
      clearInterval(viewerTimer)
      clearInterval(salesTimer)
      clearInterval(messageTimer)
    }
  }, [messages.length])

  if (!isVisible) return null

  const currentMsg = messages[currentMessage]
  const CurrentIcon = currentMsg.icon

  return (
    <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white py-4 overflow-hidden relative">
      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      <div className="relative container">
        <div className="flex items-center justify-between">
          
          {/* Live stats with animation */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3 transition-all duration-500">
              <div className={`w-10 h-10 bg-gray-800/50 backdrop-blur-sm rounded-full flex items-center justify-center ${currentMsg.color}`}>
                <CurrentIcon className="w-5 h-5 animate-pulse" />
              </div>
              <div className="font-semibold animate-fade-in">
                {currentMsg.text}
              </div>
            </div>
          </div>

          {/* Center: Live indicator */}
          <div className="hidden md:flex items-center gap-3 bg-green-600/20 backdrop-blur-sm px-4 py-2 rounded-full border border-green-500/30">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-green-400">LIVE</span>
            <Zap className="w-4 h-4 text-green-400" />
          </div>

          {/* Right: CTA & Close */}
          <div className="flex items-center gap-4">
            <Link href="/shop/e-steps" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 py-2 rounded-full font-bold transition-all duration-200 hover:scale-105 shadow-lg">
              Bekijk Live
            </Link>
            
            <button 
              onClick={() => setIsVisible(false)}
              className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors backdrop-blur-sm"
              aria-label="Sluiten"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
