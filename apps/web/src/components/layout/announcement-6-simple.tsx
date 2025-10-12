'use client'

import { useState } from 'react'
import Link from 'next/link'
import { X, Gift, ArrowRight } from 'lucide-react'

export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center py-3 text-sm">
          <div className="flex items-center space-x-3">
            <Gift className="h-4 w-4 text-blue-200" />
            <span className="font-medium">
              Gratis verzending vanaf €50 
            </span>
            <span className="text-blue-200">•</span>
            <Link 
              href="/shop" 
              className="flex items-center space-x-1 hover:text-blue-200 transition-colors"
            >
              <span>Shop nu</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
          
          <button
            onClick={() => setIsVisible(false)}
            className="absolute right-4 p-1 hover:bg-blue-600 rounded-full transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

