'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { X, Zap, ArrowRight, Sparkles, Flame, Star } from 'lucide-react'

export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true)
  const [glitchText, setGlitchText] = useState('CYBER SALE')
  const [neonPulse, setNeonPulse] = useState(0)
  const [scanlinePos, setScanlinePos] = useState(0)

  const glitchVariations = ['CYBER SALE', 'C¥B3R SAL3', 'CYBER $ALE', 'ĊɎƁɆɌ ŞȺŁɆ', 'CYBER SALE']

  useEffect(() => {
    // Glitch effect
    const glitchInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * glitchVariations.length)
      setGlitchText(glitchVariations[randomIndex])
      
      setTimeout(() => {
        setGlitchText('CYBER SALE')
      }, 100)
    }, 2000)

    // Neon pulse effect
    const pulseInterval = setInterval(() => {
      setNeonPulse(prev => (prev + 1) % 100)
    }, 50)

    // Scanline effect
    const scanlineInterval = setInterval(() => {
      setScanlinePos(prev => (prev + 1) % 100)
    }, 100)

    return () => {
      clearInterval(glitchInterval)
      clearInterval(pulseInterval)
      clearInterval(scanlineInterval)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div className="relative overflow-hidden bg-black text-green-400 border-b-2 border-green-400 shadow-lg shadow-green-400/20">
      {/* Matrix-style background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          background: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            #00ff00 2px,
            #00ff00 4px
          )`
        }}></div>
      </div>

      {/* Scanline effect */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/20 to-transparent w-full h-full transform -skew-x-12"
        style={{
          left: `${scanlinePos}%`,
          transition: 'left 0.1s linear'
        }}
      ></div>

      {/* Neon glow background */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-400/5 via-cyan-400/10 to-pink-400/5 animate-pulse"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-center py-4 text-center">
          <div className="flex items-center space-x-6">
            {/* Animated icons */}
            <div className="flex space-x-2">
              <Zap className="h-6 w-6 text-cyan-400 animate-bounce" style={{ animationDelay: '0s' }} />
              <Sparkles className="h-5 w-5 text-pink-400 animate-bounce" style={{ animationDelay: '0.2s' }} />
              <Flame className="h-6 w-6 text-yellow-400 animate-bounce" style={{ animationDelay: '0.4s' }} />
            </div>

            {/* Sale text with glow */}
            <div className="relative">
              <h2 
                className="text-2xl font-bold tracking-wider relative"
                style={{
                  textShadow: `
                    0 0 10px #00ff00,
                    0 0 20px #00ff00,
                    0 0 30px #00ff00
                  `,
                  filter: `hue-rotate(${neonPulse * 2}deg)`
                }}
              >
                BLACK FRIDAY SALE
              </h2>
            </div>

            {/* Sale message */}
            <div className="text-center">
              <div className="text-lg font-semibold text-cyan-400 tracking-wide mb-1">
                TOT 50% KORTING OP ALLE E-STEPS
              </div>
              <div className="text-sm text-green-300 opacity-80 animate-pulse">
                Gratis verzending + 2 jaar garantie
              </div>
            </div>

            {/* Neon CTA button */}
            <Link 
              href="/shop" 
              className="group relative px-6 py-3 font-mono font-bold text-black bg-green-400 border-2 border-green-400 transform transition-all duration-300 hover:scale-105 hover:rotate-1"
              style={{
                boxShadow: `
                  0 0 10px #00ff00,
                  0 0 20px #00ff00,
                  0 0 30px #00ff00,
                  inset 0 0 10px rgba(0, 255, 0, 0.2)
                `,
                textShadow: '0 0 5px rgba(0, 0, 0, 0.5)'
              }}
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>SHOP NU</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              
              {/* Button glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-300 to-cyan-300 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            </Link>

            {/* Floating particles */}
            <div className="flex space-x-1">
              <Star className="h-3 w-3 text-yellow-400 animate-ping" style={{ animationDelay: '0s' }} />
              <Star className="h-4 w-4 text-cyan-400 animate-ping" style={{ animationDelay: '0.5s' }} />
              <Star className="h-3 w-3 text-pink-400 animate-ping" style={{ animationDelay: '1s' }} />
            </div>
          </div>

          {/* Cyber close button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute right-4 p-2 text-green-400 hover:text-red-400 transition-colors duration-300 font-mono"
            style={{
              textShadow: '0 0 10px currentColor'
            }}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Bottom cyber line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-400 to-transparent animate-pulse"></div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-green-400"></div>
      <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-green-400"></div>
      <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-green-400"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-green-400"></div>
    </div>
  )
}
