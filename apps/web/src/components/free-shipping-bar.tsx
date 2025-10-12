'use client'

import { useState, useEffect } from 'react'
import { Truck, CheckCircle, Sparkles } from 'lucide-react'

interface FreeShippingBarProps {
  cartTotal?: number
  threshold?: number
}

export function FreeShippingBar({ cartTotal = 0, threshold = 50 }: FreeShippingBarProps) {
  const [progress, setProgress] = useState(0)
  const remaining = Math.max(0, threshold - cartTotal)
  const isQualified = cartTotal >= threshold

  useEffect(() => {
    // Animate progress bar
    const targetProgress = Math.min(100, (cartTotal / threshold) * 100)
    const timer = setTimeout(() => setProgress(targetProgress), 100)
    return () => clearTimeout(timer)
  }, [cartTotal, threshold])

  return (
    <div className="bg-gradient-to-r from-green-50 via-emerald-50 to-teal-50 border-b border-green-200">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center gap-4">
          {/* Icon */}
          <div className="flex-shrink-0">
            {isQualified ? (
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
            ) : (
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
                <Truck className="h-6 w-6 text-green-600" />
              </div>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            {/* Message */}
            <div className="mb-2">
              {isQualified ? (
                <div className="flex items-center gap-2 text-green-700 font-bold">
                  <Sparkles className="h-4 w-4" />
                  <span className="text-sm md:text-base">
                    🎉 Je hebt gratis verzending verdiend!
                  </span>
                </div>
              ) : remaining < 25 ? (
                <p className="text-sm md:text-base font-bold text-gray-900">
                  <span className="text-orange-600">Bijna daar!</span> Nog{' '}
                  <span className="text-green-600">€{remaining.toFixed(2)}</span> tot{' '}
                  <span className="text-green-600">gratis verzending</span> 🚚
                </p>
              ) : (
                <p className="text-sm md:text-base font-bold text-gray-900">
                  Bestel voor{' '}
                  <span className="text-green-600">€{remaining.toFixed(2)}</span> meer en ontvang{' '}
                  <span className="text-green-600">gratis verzending</span>! 🚚
                </p>
              )}
            </div>

            {/* Progress Bar */}
            <div className="relative h-3 bg-white rounded-full overflow-hidden shadow-inner">
              <div
                className={`absolute inset-y-0 left-0 rounded-full transition-all duration-700 ease-out ${
                  isQualified
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500'
                    : 'bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400'
                }`}
                style={{ width: `${progress}%` }}
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
              </div>

              {/* Threshold marker */}
              {!isQualified && (
                <div 
                  className="absolute top-0 bottom-0 w-0.5 bg-green-600"
                  style={{ left: '100%', marginLeft: '-1px' }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 bg-green-600 rounded-full border-2 border-white shadow-md"></div>
                </div>
              )}
            </div>

            {/* Progress Text */}
            <div className="flex justify-between items-center mt-1 text-xs text-gray-600">
              <span className="font-medium">€{cartTotal.toFixed(2)}</span>
              <span className="font-bold text-green-600">€{threshold}</span>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for shimmer animation */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  )
}

