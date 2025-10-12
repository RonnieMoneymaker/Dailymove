'use client'

import { Award, Tv, Newspaper, Star } from 'lucide-react'

export function LogoWall() {
  const mediaLogos = [
    { name: 'NOS', text: 'NOS', color: 'text-blue-600' },
    { name: 'RTL', text: 'RTL', color: 'text-red-600' },
    { name: 'Telegraaf', text: 'De Telegraaf', color: 'text-gray-900' },
    { name: 'AD', text: 'AD', color: 'text-blue-600' },
    { name: 'NRC', text: 'NRC', color: 'text-gray-900' },
    { name: 'Bright', text: 'Bright.nl', color: 'text-green-600' },
  ]

  const brands = [
    { name: 'Xiaomi', logo: 'XI' },
    { name: 'Segway', logo: 'SG' },
    { name: 'VanMoof', logo: 'VM' },
    { name: 'Pure', logo: 'PR' },
    { name: 'Kaabo', logo: 'KB' },
    { name: 'Ninebot', logo: 'NB' },
  ]

  return (
    <div className="bg-white py-12 border-y border-gray-200">
      <div className="container mx-auto px-4">
        {/* As Seen In Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-3">
              <Tv className="h-4 w-4 text-purple-600" />
              <span className="text-sm font-bold text-purple-900">Zoals gezien in</span>
            </div>
            <h3 className="text-2xl font-black text-gray-900">Vertrouwd door Media & Pers</h3>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 items-center justify-items-center">
            {mediaLogos.map((media, index) => (
              <div 
                key={index}
                className="group relative flex items-center justify-center w-full h-20 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all hover:scale-105 border-2 border-gray-100 hover:border-gray-300"
              >
                <div className={`font-black text-xl ${media.color} group-hover:scale-110 transition-transform`}>
                  {media.text}
                </div>
                {index < 3 && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                    <Star className="h-3 w-3 fill-white text-white" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Brands Section */}
        <div>
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-3">
              <Award className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-bold text-blue-900">Premium Merken</span>
            </div>
            <h3 className="text-2xl font-black text-gray-900">Officiële Dealer Van</h3>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="group flex flex-col items-center justify-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl hover:from-blue-50 hover:to-purple-50 transition-all hover:scale-105 border-2 border-gray-200 hover:border-blue-300 hover:shadow-lg"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-lg">
                  <span className="text-white font-black text-lg">{brand.logo}</span>
                </div>
                <div className="font-bold text-sm text-gray-900 group-hover:text-blue-600 transition-colors">
                  {brand.name}
                </div>
                <div className="flex items-center gap-1 mt-1">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs text-gray-600">Official</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Numbers */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
            <div className="text-4xl font-black text-blue-600 mb-2">25.000+</div>
            <div className="text-sm font-bold text-gray-700">Tevreden Klanten Wereldwijd</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
            <div className="text-4xl font-black text-green-600 mb-2">4.9/5</div>
            <div className="text-sm font-bold text-gray-700">Gemiddelde Beoordeling</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl">
            <div className="text-4xl font-black text-purple-600 mb-2">500+</div>
            <div className="text-sm font-bold text-gray-700">Producten in Collectie</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl">
            <div className="text-4xl font-black text-orange-600 mb-2">50+</div>
            <div className="text-sm font-bold text-gray-700">Landen Wereldwijd</div>
          </div>
        </div>
      </div>
    </div>
  )
}

