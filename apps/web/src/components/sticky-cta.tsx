'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ShoppingCart, Zap, ArrowRight, Sparkles } from 'lucide-react'

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 500px
      setIsVisible(window.scrollY > 500)
      
      // Auto-collapse after 3 seconds of scrolling
      if (window.scrollY > 500) {
        setTimeout(() => setIsExpanded(false), 3000)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-in slide-in-from-bottom duration-500">
      <div 
        className={`transition-all duration-300 ${
          isExpanded ? 'w-auto' : 'w-16'
        }`}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <Link
          href="/shop/e-steps"
          className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-full shadow-2xl hover:shadow-3xl hover:scale-105 transition-all font-black text-lg group relative overflow-hidden"
        >
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          
          <div className="relative z-10 flex items-center gap-3">
            <Zap className="h-6 w-6 animate-pulse" />
            {isExpanded && (
              <>
                <span className="whitespace-nowrap">Shop Nu</span>
                <div className="flex items-center gap-2 px-3 py-1 bg-yellow-400 text-gray-900 rounded-full text-sm">
                  <Sparkles className="h-4 w-4" />
                  <span>-30%</span>
                </div>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </div>
        </Link>
      </div>
    </div>
  )
}

// Sticky Add to Cart Bar (voor product pagina's)
interface StickyAddToCartProps {
  productName: string
  price: number
  oldPrice?: number
  image: string
  stock: number
}

export function StickyAddToCart({ productName, price, oldPrice, image, stock }: StickyAddToCartProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show when original add-to-cart button is out of view
      setIsVisible(window.scrollY > 800)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-200 shadow-2xl z-50 animate-in slide-in-from-bottom duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Product Info */}
          <div className="flex items-center gap-4 flex-1 min-w-0">
            <img 
              src={image} 
              alt={productName}
              className="w-16 h-16 object-cover rounded-lg shadow-md"
            />
            <div className="flex-1 min-w-0">
              <h4 className="font-bold text-gray-900 truncate">{productName}</h4>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-black text-gray-900">€{price}</span>
                {oldPrice && (
                  <span className="text-sm text-gray-400 line-through">€{oldPrice}</span>
                )}
              </div>
            </div>
          </div>

          {/* Stock Warning */}
          {stock <= 10 && (
            <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-200 rounded-lg">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-bold text-red-600">
                Nog {stock} op voorraad!
              </span>
            </div>
          )}

          {/* Add to Cart Button */}
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-black text-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl flex items-center gap-2 whitespace-nowrap">
            <ShoppingCart className="h-5 w-5" />
            <span>In Winkelwagen</span>
          </button>
        </div>
      </div>
    </div>
  )
}

