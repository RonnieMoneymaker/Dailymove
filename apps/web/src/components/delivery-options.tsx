'use client'

import { useState } from 'react'
import { Truck, MapPin, Clock, Calendar, CheckCircle, Package, Home, Building2, Bell } from 'lucide-react'

export function DeliveryOptions() {
  const [selectedOption, setSelectedOption] = useState('standard')
  const [postalCode, setPostalCode] = useState('')
  const [showTimes, setShowTimes] = useState(false)

  const deliveryOptions = [
    {
      id: 'standard',
      name: 'Standaard Levering',
      icon: Truck,
      price: 0,
      duration: '1-2 werkdagen',
      description: 'Gratis bij bestellingen vanaf €50',
      color: 'blue'
    },
    {
      id: 'express',
      name: 'Express Levering',
      icon: Package,
      price: 9.95,
      duration: 'Morgen in huis',
      description: 'Voor 23:00 besteld',
      color: 'orange',
      badge: 'Populair'
    },
    {
      id: 'evening',
      name: 'Avond Levering',
      icon: Clock,
      price: 6.95,
      duration: 'Morgen 18-22u',
      description: 'Niet thuis overdag?',
      color: 'purple'
    },
    {
      id: 'weekend',
      name: 'Weekend Levering',
      icon: Calendar,
      price: 7.95,
      duration: 'Zaterdag of zondag',
      description: 'Vrij weekend kiezen',
      color: 'green'
    },
  ]

  const handlePostalCheck = () => {
    setShowTimes(true)
  }

  return (
    <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-200">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
          <Truck className="h-6 w-6 text-white" />
        </div>
        <div>
          <h3 className="text-2xl font-black text-gray-900">Bezorgopties</h3>
          <p className="text-sm text-gray-600">Kies je ideale levertijd</p>
        </div>
      </div>

      {/* Postal Code Check */}
      <div className="mb-6">
        <label className="block text-sm font-bold text-gray-700 mb-2">
          Check beschikbaarheid in jouw regio:
        </label>
        <div className="flex gap-2">
          <div className="relative flex-1">
            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              placeholder="1234 AB"
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 outline-none transition-all"
            />
          </div>
          <button
            onClick={handlePostalCheck}
            className="px-6 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all whitespace-nowrap"
          >
            Check
          </button>
        </div>
      </div>

      {/* Delivery Options */}
      <div className="space-y-3">
        {deliveryOptions.map((option) => (
          <div
            key={option.id}
            onClick={() => setSelectedOption(option.id)}
            className={`relative p-5 rounded-2xl border-2 cursor-pointer transition-all ${
              selectedOption === option.id
                ? 'border-blue-500 bg-blue-50 shadow-lg'
                : 'border-gray-200 hover:border-gray-300 bg-white'
            }`}
          >
            {option.badge && (
              <div className="absolute top-3 right-3 px-3 py-1 bg-orange-500 text-white rounded-full text-xs font-bold">
                {option.badge}
              </div>
            )}

            <div className="flex items-center gap-4">
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                selectedOption === option.id
                  ? 'border-blue-600 bg-blue-600'
                  : 'border-gray-300'
              }`}>
                {selectedOption === option.id && (
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                )}
              </div>

              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                option.color === 'blue' ? 'bg-blue-100' :
                option.color === 'orange' ? 'bg-orange-100' :
                option.color === 'purple' ? 'bg-purple-100' :
                'bg-green-100'
              }`}>
                <option.icon className={`h-6 w-6 ${
                  option.color === 'blue' ? 'text-blue-600' :
                  option.color === 'orange' ? 'text-orange-600' :
                  option.color === 'purple' ? 'text-purple-600' :
                  'text-green-600'
                }`} />
              </div>

              <div className="flex-1">
                <div className="font-black text-gray-900 mb-1">{option.name}</div>
                <div className="text-sm text-gray-600">{option.description}</div>
              </div>

              <div className="text-right">
                <div className="font-black text-gray-900">
                  {option.price === 0 ? 'Gratis' : `€${option.price}`}
                </div>
                <div className="text-sm text-gray-600">{option.duration}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Delivery Time Slots */}
      {showTimes && selectedOption === 'express' && (
        <div className="mt-6 p-6 bg-blue-50 rounded-2xl border-2 border-blue-200 animate-in slide-in-from-top duration-300">
          <h4 className="font-bold text-gray-900 mb-4">Kies je tijdslot (morgen):</h4>
          <div className="grid grid-cols-2 gap-3">
            {['09:00 - 12:00', '12:00 - 15:00', '15:00 - 18:00', '18:00 - 21:00'].map((slot) => (
              <button
                key={slot}
                className="p-4 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all font-bold text-gray-900"
              >
                <Clock className="h-4 w-4 inline mr-2 text-blue-600" />
                {slot}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

// Price Drop Alert
interface PriceDropAlertProps {
  productName: string
  currentPrice: number
}

export function PriceDropAlert({ productName, currentPrice }: PriceDropAlertProps) {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubscribed(true)
    console.log('Price alert set for:', email)
  }

  if (subscribed) {
    return (
      <div className="bg-green-50 rounded-2xl p-6 border-2 border-green-200">
        <div className="flex items-center gap-3 text-green-700">
          <CheckCircle className="h-6 w-6" />
          <div>
            <div className="font-bold">Prijs alert ingesteld!</div>
            <div className="text-sm">We sturen je een email als de prijs daalt</div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 border-2 border-yellow-200">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-yellow-500 rounded-xl flex items-center justify-center">
          <Bell className="h-5 w-5 text-white" />
        </div>
        <div>
          <h4 className="font-black text-gray-900">Prijs Alert</h4>
          <p className="text-sm text-gray-700">Krijg een email bij prijsdaling</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="jouw@email.nl"
            required
            className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-yellow-500 focus:ring-4 focus:ring-yellow-500/20 outline-none transition-all"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-yellow-500 text-white rounded-xl font-bold hover:bg-yellow-600 transition-all whitespace-nowrap"
          >
            Activeer
          </button>
        </div>
        <p className="text-xs text-gray-600">
          We sturen je een email zodra de prijs onder <strong>€{currentPrice - 20}</strong> komt
        </p>
      </form>
    </div>
  )
}

