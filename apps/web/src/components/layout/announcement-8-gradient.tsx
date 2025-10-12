'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { X, Truck, Shield, Award } from 'lucide-react'

export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true)
  const [currentFeature, setCurrentFeature] = useState(0)

  const features = [
    { icon: Truck, text: "Gratis verzending vanaf €50" },
    { icon: Shield, text: "30 dagen retourgarantie" },
    { icon: Award, text: "2 jaar garantie op alle producten" }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  if (!isVisible) return null

  const CurrentIcon = features[currentFeature].icon

  return (
    <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center py-3 relative">
          <div className="flex items-center space-x-3 transition-all duration-500">
            <CurrentIcon className="h-4 w-4 text-white/80" />
            <span className="text-sm font-medium">
              {features[currentFeature].text}
            </span>
          </div>
          
          <div className="flex items-center space-x-1 ml-4">
            {features.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentFeature ? 'bg-white' : 'bg-white/40'
                }`}
              />
            ))}
          </div>

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

