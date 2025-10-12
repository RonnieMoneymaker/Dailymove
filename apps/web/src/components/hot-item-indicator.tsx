'use client'

import Link from 'next/link'
import { Flame, TrendingUp, Eye, ShoppingBag, Clock } from 'lucide-react'
import { useEffect, useState } from 'react'

interface HotItemBadgeProps {
  soldLast24h?: number
  viewingNow?: number
  trending?: boolean
}

export function HotItemBadge({ soldLast24h, viewingNow, trending }: HotItemBadgeProps) {
  const isHot = (soldLast24h && soldLast24h > 20) || trending

  if (!isHot) return null

  return (
    <div className="absolute top-3 left-3 z-10">
      <div className="relative">
        <div className="px-3 py-1.5 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white rounded-lg font-bold text-sm shadow-lg flex items-center gap-2 animate-pulse">
          <Flame className="h-4 w-4" />
          <span>🔥 HOT</span>
        </div>
        {/* Fire particles animation */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-400 rounded-full animate-ping"></div>
      </div>
    </div>
  )
}

interface LiveTrackingProps {
  productId: number
  viewingNow?: number
  inCartCount?: number
  soldLast24h?: number
}

export function LiveTracking({ productId, viewingNow = 0, inCartCount = 0, soldLast24h = 0 }: LiveTrackingProps) {
  const [viewers, setViewers] = useState(viewingNow)
  const [cartCount, setCartCount] = useState(inCartCount)

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      // Randomly adjust viewers (±1-3)
      setViewers(prev => Math.max(1, prev + (Math.random() > 0.5 ? 1 : -1) * Math.floor(Math.random() * 3)))
      
      // Occasionally update cart count
      if (Math.random() > 0.7) {
        setCartCount(prev => Math.max(0, prev + (Math.random() > 0.6 ? 1 : -1)))
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="space-y-2">
      {/* Viewing Now */}
      {viewers > 0 && (
        <div className="flex items-center gap-2 text-sm">
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 border border-blue-200 rounded-lg">
            <Eye className="h-4 w-4 text-blue-600" />
            <span className="font-bold text-blue-600">{viewers}</span>
            <span className="text-gray-700">bekijken nu</span>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse ml-1"></div>
          </div>
        </div>
      )}

      {/* In Cart */}
      {cartCount > 0 && (
        <div className="flex items-center gap-2 text-sm">
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-orange-50 border border-orange-200 rounded-lg">
            <ShoppingBag className="h-4 w-4 text-orange-600" />
            <span className="font-bold text-orange-600">{cartCount}</span>
            <span className="text-gray-700">in winkelwagens</span>
          </div>
        </div>
      )}

      {/* Sold Last 24h */}
      {soldLast24h > 0 && (
        <div className="flex items-center gap-2 text-sm">
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-green-50 border border-green-200 rounded-lg">
            <TrendingUp className="h-4 w-4 text-green-600" />
            <span className="font-bold text-green-600">{soldLast24h}</span>
            <span className="text-gray-700">verkocht vandaag</span>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse ml-1"></div>
          </div>
        </div>
      )}
    </div>
  )
}

// Recently Viewed Products Component
interface RecentProduct {
  id: number
  name: string
  price: number
  image: string
}

export function RecentlyViewed() {
  const [recentProducts, setRecentProducts] = useState<RecentProduct[]>([
    { id: 1, name: 'Xiaomi Pro 2', price: 599, image: '/images/products/xiaomi-pro.jpg' },
    { id: 2, name: 'Segway MAX', price: 799, image: '/images/products/segway-max.jpg' },
    { id: 3, name: 'Pure Air', price: 449, image: '/images/products/pure-air.jpg' },
  ])

  if (recentProducts.length === 0) return null

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Clock className="h-6 w-6 text-purple-600" />
            <h3 className="text-2xl font-black text-gray-900">
              Recent Bekeken
            </h3>
          </div>
          <button className="text-sm font-bold text-blue-600 hover:text-blue-700">
            Wis geschiedenis
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {recentProducts.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className="group bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-200 hover:border-purple-300"
            >
              <div className="aspect-square mb-3 overflow-hidden rounded-lg bg-gray-100">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                />
              </div>
              <h4 className="font-bold text-sm text-gray-900 mb-1 line-clamp-2">
                {product.name}
              </h4>
              <div className="text-lg font-black text-gray-900">
                €{product.price}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

