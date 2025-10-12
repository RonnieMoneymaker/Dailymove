'use client'

import { Shield, Lock, Award, Star, CheckCircle } from 'lucide-react'
import Image from 'next/image'

interface TrustBadgesProps {
  variant?: 'horizontal' | 'compact' | 'full'
  showPaymentIcons?: boolean
  showTrustpilot?: boolean
}

export function TrustBadges({ 
  variant = 'horizontal', 
  showPaymentIcons = true,
  showTrustpilot = true 
}: TrustBadgesProps) {
  
  const badges = [
    {
      icon: Shield,
      text: '2 jaar garantie',
      color: 'text-blue-600',
      bg: 'bg-blue-50'
    },
    {
      icon: Lock,
      text: 'Veilig betalen',
      color: 'text-green-600',
      bg: 'bg-green-50'
    },
    {
      icon: Award,
      text: 'Keurmerk',
      color: 'text-purple-600',
      bg: 'bg-purple-50'
    },
    {
      icon: CheckCircle,
      text: '30 dagen retour',
      color: 'text-orange-600',
      bg: 'bg-orange-50'
    },
  ]

  const paymentMethods = [
    { name: 'iDEAL', src: '/images/payment/ideal.svg' },
    { name: 'Visa', src: '/images/payment/visa.svg' },
    { name: 'Mastercard', src: '/images/payment/mastercard.svg' },
    { name: 'PayPal', src: '/images/payment/paypal.svg' },
  ]

  if (variant === 'compact') {
    return (
      <div className="flex flex-wrap items-center gap-4">
        {/* Trust Score */}
        {showTrustpilot && (
          <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 border border-green-200 rounded-lg">
            <Star className="h-4 w-4 fill-green-600 text-green-600" />
            <span className="font-bold text-sm text-gray-900">4.9/5</span>
            <span className="text-xs text-gray-600">Trustpilot</span>
          </div>
        )}

        {/* Payment Icons */}
        {showPaymentIcons && (
          <div className="flex items-center gap-2">
            {paymentMethods.map((method) => (
              <div key={method.name} className="w-10 h-6 bg-white border border-gray-200 rounded flex items-center justify-center p-1">
                <img 
                  src={method.src} 
                  alt={method.name}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        )}

        {/* Quick badges */}
        <div className="flex items-center gap-2 text-xs text-gray-600">
          <CheckCircle className="h-4 w-4 text-green-600" />
          <span className="font-medium">Veilig & Betrouwbaar</span>
        </div>
      </div>
    )
  }

  if (variant === 'full') {
    return (
      <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100">
        {/* Trustpilot Section */}
        {showTrustpilot && (
          <div className="mb-6 pb-6 border-b border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-2xl font-black text-gray-900">4.9 / 5</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-green-600 text-green-600" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Gebaseerd op <span className="font-bold">25.000+</span> reviews
                </p>
              </div>
              <div className="px-4 py-2 bg-green-600 text-white rounded-lg font-bold text-sm">
                Excellent
              </div>
            </div>
            
            {/* Trustpilot Logo */}
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Star className="h-4 w-4 fill-green-600 text-green-600" />
              <span>Powered by Trustpilot</span>
            </div>
          </div>
        )}

        {/* Trust Badges */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {badges.map((badge, index) => (
            <div 
              key={index}
              className={`flex items-center gap-3 p-3 ${badge.bg} rounded-xl`}
            >
              <badge.icon className={`h-6 w-6 ${badge.color} flex-shrink-0`} />
              <span className="text-sm font-bold text-gray-900">{badge.text}</span>
            </div>
          ))}
        </div>

        {/* Payment Methods */}
        {showPaymentIcons && (
          <div>
            <p className="text-xs font-bold text-gray-600 mb-3">Betaalmethoden:</p>
            <div className="grid grid-cols-4 gap-3">
              {paymentMethods.map((method) => (
                <div 
                  key={method.name}
                  className="aspect-[3/2] bg-white border-2 border-gray-200 rounded-lg flex items-center justify-center p-2 hover:border-blue-300 transition-colors"
                  title={method.name}
                >
                  <img 
                    src={method.src} 
                    alt={method.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Keurmerken */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="flex items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-blue-600" />
              <span className="text-xs font-bold text-gray-700">Thuiswinkel</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="h-5 w-5 text-green-600" />
              <span className="text-xs font-bold text-gray-700">SSL Secure</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-purple-600" />
              <span className="text-xs font-bold text-gray-700">Webwinkel Keur</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Default: horizontal variant
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 py-4">
      {/* Trustpilot */}
      {showTrustpilot && (
        <div className="flex items-center gap-3">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-green-600 text-green-600" />
            ))}
          </div>
          <div>
            <div className="font-black text-gray-900">4.9/5</div>
            <div className="text-xs text-gray-600">25.000+ reviews</div>
          </div>
        </div>
      )}

      {/* Divider */}
      {showTrustpilot && <div className="h-8 w-px bg-gray-300"></div>}

      {/* Badges */}
      {badges.map((badge, index) => (
        <div key={index} className="flex items-center gap-2">
          <badge.icon className={`h-5 w-5 ${badge.color}`} />
          <span className="text-sm font-bold text-gray-900">{badge.text}</span>
        </div>
      ))}

      {/* Payment Methods */}
      {showPaymentIcons && (
        <>
          <div className="h-8 w-px bg-gray-300"></div>
          <div className="flex items-center gap-2">
            {paymentMethods.map((method) => (
              <div key={method.name} className="w-12 h-8 bg-white border border-gray-200 rounded flex items-center justify-center p-1">
                <img 
                  src={method.src} 
                  alt={method.name}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

