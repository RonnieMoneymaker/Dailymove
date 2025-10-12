'use client'

import { useState, useEffect } from 'react'
import { X, Clock, Zap, Truck } from 'lucide-react'

export function UrgencyBanner() {
  const [isVisible, setIsVisible] = useState(true)
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else {
          return { hours: 23, minutes: 59, seconds: 59 }
        }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="bg-white border-b">
      <div className="container">
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center gap-4 text-sm text-gray-800">
            <span className="px-2 py-0.5 rounded bg-orange-100 text-orange-700 font-semibold">Actie</span>
            <span>Winterdeals tot 40% korting</span>
            <span className="hidden md:inline-flex items-center gap-2 text-gray-600"><Truck className="h-4 w-4" /> Gratis verzending vanaf €50</span>
            <span className="hidden lg:inline-flex items-center gap-2 text-gray-600"><Clock className="h-4 w-4" /> Voor 23:59 besteld, morgen in huis</span>
          </div>
          <div className="hidden md:flex items-center gap-2 text-sm text-gray-700">
            <span className="text-gray-500">Eindigt over</span>
            <div className="font-mono font-semibold">
              {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
            </div>
            <button onClick={() => setIsVisible(false)} className="ml-2 text-gray-500 hover:text-gray-700" aria-label="Sluit banner">
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
