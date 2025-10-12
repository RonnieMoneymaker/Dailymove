'use client'

import { Flame, AlertCircle, Clock, TrendingUp } from 'lucide-react'

interface LimitedStockBadgeProps {
  stock: number
  variant?: 'urgent' | 'low' | 'trending' | 'inline'
  showIcon?: boolean
}

export function LimitedStockBadge({ 
  stock, 
  variant = 'urgent',
  showIcon = true 
}: LimitedStockBadgeProps) {
  
  // Determine urgency level
  const getUrgencyLevel = () => {
    if (stock <= 3) return 'critical'
    if (stock <= 10) return 'low'
    if (stock <= 20) return 'medium'
    return 'normal'
  }

  const urgency = getUrgencyLevel()

  if (variant === 'inline') {
    return (
      <div className="flex items-center gap-2">
        {urgency === 'critical' || urgency === 'low' ? (
          <>
            <div className="flex items-center gap-1.5 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className={`font-bold ${
                urgency === 'critical' ? 'text-red-600' : 'text-orange-600'
              }`}>
                {urgency === 'critical' ? 'Bijna uitverkocht!' : 'Beperkte voorraad'}
              </span>
            </div>
            <span className="text-xs text-gray-600">
              (nog {stock} stuks)
            </span>
          </>
        ) : (
          <div className="flex items-center gap-1.5 text-sm text-green-600">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="font-medium">Op voorraad</span>
          </div>
        )}
      </div>
    )
  }

  if (variant === 'trending') {
    return (
      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full text-sm font-bold shadow-lg">
        <TrendingUp className="h-4 w-4" />
        <span>Hot! Snel uitverkocht</span>
      </div>
    )
  }

  if (urgency === 'critical') {
    return (
      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-500 text-white rounded-lg text-sm font-bold shadow-lg animate-pulse">
        {showIcon && <Flame className="h-4 w-4" />}
        <span>Laatste {stock} stuks!</span>
      </div>
    )
  }

  if (urgency === 'low') {
    return (
      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-orange-500 text-white rounded-lg text-sm font-bold shadow-md">
        {showIcon && <AlertCircle className="h-4 w-4" />}
        <span>Nog maar {stock} op voorraad</span>
      </div>
    )
  }

  if (urgency === 'medium') {
    return (
      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-yellow-100 border border-yellow-300 text-yellow-800 rounded-lg text-sm font-bold">
        {showIcon && <Clock className="h-4 w-4" />}
        <span>Beperkte voorraad</span>
      </div>
    )
  }

  return null
}

// Product Card with Stock Info
interface StockInfoProps {
  stock: number
  soldToday?: number
  viewingNow?: number
}

export function ProductStockInfo({ stock, soldToday, viewingNow }: StockInfoProps) {
  return (
    <div className="space-y-2">
      {/* Stock Level */}
      <LimitedStockBadge stock={stock} variant="inline" />
      
      {/* Social Proof */}
      {(soldToday || viewingNow) && (
        <div className="flex flex-wrap gap-3 text-xs text-gray-600">
          {soldToday && soldToday > 0 && (
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
              <span><strong className="text-gray-900">{soldToday}</strong> verkocht vandaag</span>
            </div>
          )}
          {viewingNow && viewingNow > 0 && (
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
              <span><strong className="text-gray-900">{viewingNow}</strong> mensen bekijken dit</span>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

