'use client'

import { useState, useEffect } from 'react'
import { Star, Users, ShoppingBag, TrendingUp, MapPin } from 'lucide-react'

const recentPurchases = [
  { name: 'Marco uit Amsterdam', product: 'Xiaomi Mi Electric Scooter 4 Pro', time: '2 minuten geleden' },
  { name: 'Lisa uit Rotterdam', product: 'Segway Ninebot MAX G30LP', time: '5 minuten geleden' },
  { name: 'Kevin uit Utrecht', product: 'Pure Air Pro', time: '8 minuten geleden' },
  { name: 'Sarah uit Den Haag', product: 'Kaabo Mantis 8 Pro', time: '12 minuten geleden' },
  { name: 'Tom uit Eindhoven', product: 'Xiaomi Mi Electric Scooter 4 Pro', time: '15 minuten geleden' },
]

export function SocialProof() {
  const [currentPurchase, setCurrentPurchase] = useState(0)
  const [visitorCount, setVisitorCount] = useState(0)

  useEffect(() => {
    // Simulate visitor count
    const baseCount = 1247
    const randomVariation = Math.floor(Math.random() * 50)
    setVisitorCount(baseCount + randomVariation)

    // Rotate through recent purchases
    const interval = setInterval(() => {
      setCurrentPurchase(prev => (prev + 1) % recentPurchases.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
            </div>
            <div className="text-2xl font-bold text-gray-900">4.9</div>
            <div className="text-sm text-gray-600">2,847 reviews</div>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Users className="h-5 w-5 text-blue-500" />
            </div>
            <div className="text-2xl font-bold text-gray-900">{visitorCount.toLocaleString()}</div>
            <div className="text-sm text-gray-600">mensen bekijken nu</div>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <ShoppingBag className="h-5 w-5 text-green-500" />
            </div>
            <div className="text-2xl font-bold text-gray-900">15,000+</div>
            <div className="text-sm text-gray-600">tevreden klanten</div>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <TrendingUp className="h-5 w-5 text-purple-500" />
            </div>
            <div className="text-2xl font-bold text-gray-900">#1</div>
            <div className="text-sm text-gray-600">E-step specialist</div>
          </div>
        </div>

        {/* Recent Purchase Notification */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 max-w-md mx-auto">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <div className="flex-1">
              <div className="flex items-center space-x-1 text-sm">
                <MapPin className="h-4 w-4 text-gray-400" />
                <span className="font-medium text-gray-900">
                  {recentPurchases[currentPurchase].name}
                </span>
                <span className="text-gray-600">kocht</span>
              </div>
              <div className="text-sm font-medium text-blue-600">
                {recentPurchases[currentPurchase].product}
              </div>
              <div className="text-xs text-gray-500">
                {recentPurchases[currentPurchase].time}
              </div>
            </div>
            <ShoppingBag className="h-5 w-5 text-green-500" />
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex justify-center items-center space-x-8 mt-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span>SSL Beveiligd</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            </div>
            <span>Thuiswinkel Waarborg</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
            </div>
            <span>WebwinkelKeur</span>
          </div>
        </div>
      </div>
    </div>
  )
}


