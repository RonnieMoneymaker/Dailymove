'use client'

import { Smartphone, Star, Download, QrCode, Apple, Play as GooglePlay } from 'lucide-react'

export function AppDownloadCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full mb-6">
              <Smartphone className="h-4 w-4" />
              <span className="text-sm font-bold">Download Onze App</span>
            </div>

            <h2 className="text-5xl font-black mb-6">
              Shop Makkelijker<br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Met Onze App
              </span>
            </h2>

            <p className="text-xl text-white/90 mb-8">
              Exclusieve app-only deals, snellere checkout en real-time tracking van je bestelling
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                  <Download className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-bold">10% Extra Korting</div>
                  <div className="text-sm text-white/80">Op je eerste app-bestelling</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                </div>
                <div>
                  <div className="font-bold">Loyaliteit Punten</div>
                  <div className="text-sm text-white/80">Verdien bij elke aankoop</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                  <Smartphone className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-bold">Push Notificaties</div>
                  <div className="text-sm text-white/80">Flash sales & nieuwe producten</div>
                </div>
              </div>
            </div>

            {/* App Store Buttons */}
            <div className="flex flex-wrap gap-4">
              <a 
                href="#"
                className="flex items-center gap-3 px-6 py-4 bg-white text-gray-900 rounded-2xl font-bold hover:bg-gray-100 transition-all shadow-xl"
              >
                <Apple className="h-6 w-6" />
                <div className="text-left">
                  <div className="text-xs">Download op de</div>
                  <div className="font-black">App Store</div>
                </div>
              </a>
              <a 
                href="#"
                className="flex items-center gap-3 px-6 py-4 bg-white text-gray-900 rounded-2xl font-bold hover:bg-gray-100 transition-all shadow-xl"
              >
                <GooglePlay className="h-6 w-6" />
                <div className="text-left">
                  <div className="text-xs">Download via</div>
                  <div className="font-black">Google Play</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Side - QR Code */}
          <div className="flex justify-center">
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-black text-gray-900 mb-2">
                  📱 Scan & Download
                </h3>
                <p className="text-gray-600">Scan met je camera</p>
              </div>

              {/* QR Code Placeholder */}
              <div className="w-64 h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mb-6 border-4 border-gray-200">
                <QrCode className="h-32 w-32 text-gray-400" />
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center gap-2 text-sm text-gray-600 mb-2">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-bold text-gray-900">4.8/5</span>
                  <span>in App Store</span>
                </div>
                <p className="text-xs text-gray-500">
                  100.000+ downloads wereldwijd
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Price Match Guarantee Banner
export function PriceMatchGuarantee() {
  return (
    <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-6 text-white shadow-xl border-2 border-green-400">
      <div className="flex items-center gap-6">
        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center flex-shrink-0">
          <span className="text-4xl">💰</span>
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-black mb-2">
            Laagste Prijs Garantie
          </h3>
          <p className="text-white/90 mb-3">
            Vond je het elders goedkoper? We matchen de prijs + geven <strong>5% extra korting!</strong>
          </p>
          <button className="px-6 py-3 bg-white text-green-600 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-lg text-sm">
            Claim Prijsmatch
          </button>
        </div>
      </div>
    </div>
  )
}

// Gratis Cadeau Widget
interface FreeGiftProps {
  minAmount?: number
}

export function FreeGiftWidget({ minAmount = 100 }: FreeGiftProps) {
  return (
    <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 border-2 border-pink-200">
      <div className="flex items-center gap-4 mb-4">
        <div className="text-5xl">🎁</div>
        <div>
          <h4 className="text-xl font-black text-gray-900">Gratis Cadeau!</h4>
          <p className="text-gray-700">Bij bestellingen vanaf €{minAmount}</p>
        </div>
      </div>

      <div className="bg-white rounded-xl p-4 border border-pink-200 mb-4">
        <div className="flex items-center gap-3">
          <img 
            src="/images/categories/accessories.jpg"
            alt="Free gift"
            className="w-20 h-20 object-cover rounded-lg"
          />
          <div className="flex-1">
            <div className="font-bold text-gray-900 mb-1">Premium Phone Holder</div>
            <div className="text-sm text-gray-600">t.w.v. €24,99</div>
            <div className="text-xs text-green-600 font-bold mt-1">✓ Automatisch toegevoegd</div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 text-sm text-gray-700">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        <span>Nog <strong className="text-gray-900">47</strong> gratis cadeaus beschikbaar</span>
      </div>
    </div>
  )
}

