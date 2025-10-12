'use client'

import { useState } from 'react'
import Link from 'next/link'
import { X, Percent, ArrowRight, Sparkles } from 'lucide-react'

export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true)
  const [isHovered, setIsHovered] = useState(false)

  if (!isVisible) return null

  return (
    <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div 
        className="container mx-auto px-4 relative z-10"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex items-center justify-center py-3">
          <div className="flex items-center space-x-3">
            <div className={`p-1 bg-white/20 rounded-full transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`}>
              <Percent className="h-4 w-4" />
            </div>
            <div className="text-center">
              <div className="text-sm font-bold">
                20% KORTING op je eerste bestelling
              </div>
              <div className="text-xs text-emerald-100">
                Code: WELKOM20
              </div>
            </div>
          </div>
          
          <Link 
            href="/shop" 
            className={`ml-6 flex items-center space-x-2 px-4 py-1.5 bg-white text-emerald-600 rounded-full text-sm font-medium hover:bg-emerald-50 transition-all duration-300 ${isHovered ? 'scale-105 shadow-lg' : ''}`}
          >
            <Sparkles className="h-3 w-3" />
            <span>Shop nu</span>
            <ArrowRight className="h-3 w-3" />
          </Link>

          <button
            onClick={() => setIsVisible(false)}
            className="absolute right-4 p-1 hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

