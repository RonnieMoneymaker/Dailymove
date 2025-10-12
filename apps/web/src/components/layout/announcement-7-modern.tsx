'use client'

import { useState } from 'react'
import Link from 'next/link'
import { X, Zap, Star, ArrowRight } from 'lucide-react'

export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="p-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
                <Zap className="h-3 w-3 text-white" />
              </div>
              <span className="text-sm font-medium text-gray-900">
                Nieuwe collectie binnen!
              </span>
            </div>
            
            <div className="hidden sm:flex items-center space-x-2 text-sm text-gray-600">
              <Star className="h-4 w-4 text-yellow-500 fill-current" />
              <span>4.9/5 sterren van 2.500+ reviews</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Link 
              href="/shop/nieuw" 
              className="flex items-center space-x-1 text-sm font-medium text-purple-600 hover:text-purple-700 transition-colors"
            >
              <span>Bekijk nu</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
            
            <button
              onClick={() => setIsVisible(false)}
              className="p-1 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="h-4 w-4 text-gray-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

