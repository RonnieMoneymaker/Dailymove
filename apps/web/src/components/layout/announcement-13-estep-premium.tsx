'use client'

import { Truck, Shield, Zap, Star, Phone } from 'lucide-react'
import { useState, useEffect } from 'react'

export function AnnouncementBar() {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const features = [
    {
      icon: <Truck className="w-4 h-4" />,
      text: "Gratis verzending vanaf €50",
      color: "text-emerald-600"
    },
    {
      icon: <Shield className="w-4 h-4" />,
      text: "2 jaar garantie op alle e-steps",
      color: "text-blue-600"
    },
    {
      icon: <Zap className="w-4 h-4" />,
      text: "24u levering in heel Nederland",
      color: "text-orange-600"
    },
    {
      icon: <Star className="w-4 h-4" />,
      text: "4.9/5 ★ - 25.000+ tevreden klanten",
      color: "text-yellow-600"
    },
    {
      icon: <Phone className="w-4 h-4" />,
      text: "Klantenservice 7 dagen per week",
      color: "text-purple-600"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % features.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [features.length])

  return (
    <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-orange-600/10 animate-pulse"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2.5 relative z-10">
          {/* Desktop: Show all features */}
          <div className="hidden lg:flex items-center justify-center w-full gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 text-sm font-medium hover:scale-105 transition-transform duration-300"
              >
                <span className={feature.color}>{feature.icon}</span>
                <span>{feature.text}</span>
              </div>
            ))}
          </div>

          {/* Mobile: Rotating features */}
          <div className="lg:hidden flex items-center justify-center w-full">
            <div className="flex items-center gap-2 text-sm font-medium animate-fade-in">
              <span className={features[currentIndex].color}>
                {features[currentIndex].icon}
              </span>
              <span>{features[currentIndex].text}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
    </div>
  )
}

