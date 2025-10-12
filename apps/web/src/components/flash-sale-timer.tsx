'use client'

import { useState, useEffect } from 'react'
import { Flame, Clock, TrendingDown, Calendar } from 'lucide-react'

interface FlashSaleTimerProps {
  endDate?: Date
  variant?: 'compact' | 'full' | 'banner'
}

export function FlashSaleTimer({ endDate, variant = 'compact' }: FlashSaleTimerProps) {
  const targetDate = endDate || new Date(Date.now() + 1000 * 60 * 60 * 24 * 2) // 2 days from now
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date().getTime()
      const distance = targetDate.getTime() - now

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      })
    }

    updateTimer()
    const interval = setInterval(updateTimer, 1000)
    return () => clearInterval(interval)
  }, [targetDate])

  if (variant === 'banner') {
    return (
      <div className="bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 text-white py-4 overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-3">
              <Flame className="h-8 w-8 animate-pulse" />
              <div>
                <div className="text-2xl font-black">FLASH SALE</div>
                <div className="text-sm">Tot 40% korting!</div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <Clock className="h-5 w-5" />
              <span className="font-bold">Deal eindigt over:</span>
            </div>

            <div className="flex gap-2">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="flex flex-col items-center min-w-[60px]">
                  <div className="bg-white text-gray-900 rounded-lg px-3 py-2 font-black text-2xl shadow-lg">
                    {String(value).padStart(2, '0')}
                  </div>
                  <div className="text-xs mt-1 capitalize">{unit}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (variant === 'full') {
    return (
      <div className="bg-gradient-to-br from-red-500 to-pink-500 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <Flame className="h-10 w-10 animate-bounce" />
            <div>
              <h3 className="text-3xl font-black">Flash Sale Active!</h3>
              <p className="text-white/90">Deze deal eindigt snel...</p>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4 mb-6">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="text-center">
                <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 border border-white/30">
                  <div className="text-5xl font-black mb-1">
                    {String(value).padStart(2, '0')}
                  </div>
                  <div className="text-sm capitalize opacity-90">{unit}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
            <p className="text-center font-bold">
              ⚡ Nog maar <span className="text-yellow-300 text-xl">{47 - Math.floor(Math.random() * 10)}</span> producten beschikbaar
            </p>
          </div>
        </div>
      </div>
    )
  }

  // Compact variant
  return (
    <div className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full font-bold shadow-lg">
      <Flame className="h-4 w-4 animate-pulse" />
      <span className="text-sm">Sale eindigt over:</span>
      <div className="flex gap-1 text-sm">
        <span>{String(timeLeft.hours).padStart(2, '0')}</span>:
        <span>{String(timeLeft.minutes).padStart(2, '0')}</span>:
        <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
      </div>
    </div>
  )
}

interface PriceHistoryProps {
  currentPrice: number
  historicalPrices?: Array<{ date: string; price: number }>
}

export function PriceHistory({ currentPrice, historicalPrices }: PriceHistoryProps) {
  const defaultHistory = [
    { date: '6 mnd geleden', price: currentPrice * 1.35 },
    { date: '3 mnd geleden', price: currentPrice * 1.25 },
    { date: '1 mnd geleden', price: currentPrice * 1.15 },
    { date: 'Nu', price: currentPrice },
  ]

  const history = historicalPrices || defaultHistory
  const maxPrice = Math.max(...history.map(h => h.price))
  const savings = maxPrice - currentPrice
  const savingsPercent = Math.round((savings / maxPrice) * 100)

  return (
    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200">
      <div className="flex items-center gap-2 mb-4">
        <TrendingDown className="h-5 w-5 text-green-600" />
        <h4 className="font-black text-lg text-gray-900">Prijsgeschiedenis</h4>
      </div>

      {/* Price Chart (simplified) */}
      <div className="mb-4">
        <div className="flex items-end justify-between gap-2 h-32">
          {history.map((point, index) => (
            <div key={index} className="flex-1 flex flex-col items-center justify-end">
              <div className="text-xs font-bold text-gray-900 mb-2">
                €{Math.round(point.price)}
              </div>
              <div 
                className={`w-full rounded-t-lg transition-all ${
                  index === history.length - 1 
                    ? 'bg-gradient-to-t from-green-500 to-green-400' 
                    : 'bg-gradient-to-t from-gray-300 to-gray-200'
                }`}
                style={{ height: `${(point.price / maxPrice) * 100}%` }}
              ></div>
              <div className="text-xs text-gray-600 mt-2">{point.date}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Savings Message */}
      <div className="bg-white rounded-xl p-4 border border-green-300">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-bold text-gray-600 mb-1">Je bespaart:</div>
            <div className="text-2xl font-black text-green-600">
              €{Math.round(savings)} ({savingsPercent}%)
            </div>
          </div>
          <div className="text-4xl">📉</div>
        </div>
        <p className="text-xs text-gray-600 mt-2">
          ⭐ Laagste prijs in de afgelopen 6 maanden!
        </p>
      </div>
    </div>
  )
}

