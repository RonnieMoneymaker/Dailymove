'use client'

import { useState } from 'react'
import Link from 'next/link'
import { X, Info, ChevronRight } from 'lucide-react'

export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-gray-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2.5">
          <div className="flex items-center space-x-3">
            <Info className="h-4 w-4 text-gray-500" />
            <span className="text-sm text-gray-700">
              Bestel voor 16:00 = morgen in huis
            </span>
            <span className="hidden sm:inline text-gray-400">•</span>
            <span className="hidden sm:inline text-sm text-gray-600">
              Altijd 2 jaar garantie
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <Link 
              href="/verzending" 
              className="flex items-center space-x-1 text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              <span>Meer info</span>
              <ChevronRight className="h-3 w-3" />
            </Link>
            
            <button
              onClick={() => setIsVisible(false)}
              className="p-1 hover:bg-gray-200 rounded-full transition-colors"
            >
              <X className="h-3 w-3 text-gray-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

