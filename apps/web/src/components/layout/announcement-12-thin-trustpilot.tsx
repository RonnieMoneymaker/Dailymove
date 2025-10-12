'use client'

import { useState } from 'react'
import Link from 'next/link'
import { X, Truck, Star } from 'lucide-react'

export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-blue-600 text-white py-2">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          
          {/* Clean message */}
          <div className="flex items-center gap-4">
            <Truck className="w-4 h-4" />
            <span className="text-sm font-medium">
              Gratis verzending vanaf €50 • 2 jaar garantie • 30 dagen retour
            </span>
          </div>

          {/* Trustpilot + CTA */}
          <div className="flex items-center gap-6">
            {/* Trustpilot */}
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm font-medium">4.9</span>
              <span className="text-xs text-blue-200">Trustpilot</span>
            </div>
            
            <Link href="/shop" className="text-white hover:text-blue-200 text-sm font-medium underline transition-colors">
              Shop nu
            </Link>
            
            <button 
              onClick={() => setIsVisible(false)}
              className="w-5 h-5 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              aria-label="Sluiten"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

