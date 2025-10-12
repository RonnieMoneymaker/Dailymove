'use client'

import { useState } from 'react'
import Link from 'next/link'
import { X, Truck, Star } from 'lucide-react'

export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-2 backdrop-blur-sm">
      <div className="container">
        <div className="flex items-center justify-between">
          
          {/* USP's */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4" />
              <span className="font-bold text-sm">Gratis verzending</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4" />
              <span className="font-bold text-sm">2 jaar garantie</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm">30 dagen retour</span>
            </div>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <Link href="/shop" className="text-white hover:text-purple-200 font-bold underline transition-colors">
              Shop nu
            </Link>
            
            <button 
              onClick={() => setIsVisible(false)}
              className="w-6 h-6 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              aria-label="Sluiten"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
