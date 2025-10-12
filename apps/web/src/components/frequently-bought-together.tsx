'use client'

import { useState } from 'react'
import { Plus, ShoppingCart, Star, Sparkles, CheckCircle } from 'lucide-react'
import Link from 'next/link'

interface Product {
  id: number
  name: string
  price: number
  image: string
  rating: number
}

interface FrequentlyBoughtTogetherProps {
  mainProduct: Product
  suggestedProducts: Product[]
}

export function FrequentlyBoughtTogether({ mainProduct, suggestedProducts }: FrequentlyBoughtTogetherProps) {
  const [selectedProducts, setSelectedProducts] = useState<number[]>([mainProduct.id, suggestedProducts[0]?.id].filter(Boolean))
  
  const toggleProduct = (productId: number) => {
    if (productId === mainProduct.id) return // Can't deselect main product
    
    setSelectedProducts(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    )
  }

  const allProducts = [mainProduct, ...suggestedProducts]
  const totalPrice = allProducts
    .filter(p => selectedProducts.includes(p.id))
    .reduce((sum, p) => sum + p.price, 0)
  
  const bundleDiscount = selectedProducts.length >= 2 ? 0.10 : 0 // 10% discount for bundles
  const finalPrice = totalPrice * (1 - bundleDiscount)
  const savings = totalPrice - finalPrice

  return (
    <div className="bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 rounded-3xl p-8 border-2 border-orange-200 shadow-xl">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
          <Sparkles className="h-6 w-6 text-white" />
        </div>
        <div>
          <h3 className="text-2xl font-black text-gray-900">Vaak Samen Gekocht</h3>
          <p className="text-sm text-gray-700">Bespaar <span className="font-bold text-orange-600">10%</span> bij bundel aankoop!</p>
        </div>
      </div>

      {/* Products */}
      <div className="flex flex-wrap items-center gap-4 mb-6">
        {allProducts.map((product, index) => (
          <div key={product.id} className="flex items-center gap-4">
            {/* Product Card */}
            <div 
              onClick={() => toggleProduct(product.id)}
              className={`relative group cursor-pointer transition-all ${
                index === 0 ? 'cursor-default' : ''
              }`}
            >
              <div className={`relative bg-white rounded-2xl p-4 border-2 transition-all ${
                selectedProducts.includes(product.id)
                  ? 'border-green-500 shadow-lg scale-105'
                  : 'border-gray-200 hover:border-gray-300'
              }`}>
                {/* Selection Indicator */}
                {selectedProducts.includes(product.id) && (
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg z-10">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                )}

                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 mb-3 relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  
                  <h4 className="font-bold text-sm text-gray-900 text-center mb-2 line-clamp-2 min-h-[40px]">
                    {product.name}
                  </h4>
                  
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-3 w-3 ${i < product.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                    ))}
                  </div>

                  <div className="text-xl font-black text-gray-900">
                    €{product.price}
                  </div>

                  {index === 0 && (
                    <div className="mt-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold">
                      Dit product
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Plus Icon */}
            {index < allProducts.length - 1 && (
              <Plus className="h-6 w-6 text-gray-400 flex-shrink-0" />
            )}
          </div>
        ))}
      </div>

      {/* Bundle Summary */}
      <div className="bg-white rounded-2xl p-6 border-2 border-green-200 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-sm font-bold text-gray-600">
                Totaalprijs voor {selectedProducts.length} {selectedProducts.length === 1 ? 'product' : 'producten'}:
              </span>
            </div>
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-black text-gray-900">
                €{finalPrice.toFixed(2)}
              </span>
              {bundleDiscount > 0 && (
                <>
                  <span className="text-xl text-gray-400 line-through">
                    €{totalPrice.toFixed(2)}
                  </span>
                  <div className="px-3 py-1 bg-green-500 text-white rounded-full text-sm font-bold">
                    Bespaar €{savings.toFixed(2)}
                  </div>
                </>
              )}
            </div>
          </div>

          <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-black text-lg hover:from-green-700 hover:to-emerald-700 transition-all shadow-lg hover:shadow-xl flex items-center gap-2 whitespace-nowrap">
            <ShoppingCart className="h-5 w-5" />
            <span className="hidden sm:inline">Voeg Bundle Toe</span>
            <span className="sm:hidden">Toevoegen</span>
          </button>
        </div>

        {/* Bundle Benefits */}
        {bundleDiscount > 0 && (
          <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200">
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span><strong>10% bundel korting</strong></span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span>Gratis verzending</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span>Direct leverbaar</span>
            </div>
          </div>
        )}
      </div>

      {/* Social Proof */}
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">
          ⭐ <strong className="text-gray-900">2.847 klanten</strong> kochten deze combinatie in de afgelopen maand
        </p>
      </div>
    </div>
  )
}

// Complete the Bundle widget for homepage
export function BundleDeals() {
  const bundles = [
    {
      id: 1,
      name: 'Starter Pakket',
      description: 'E-step + Helm + Slot',
      products: ['Xiaomi Pro 2', 'Premium Helm', 'AXA Slot'],
      price: 549,
      oldPrice: 649,
      discount: '-15%',
      image: '/images/products/xiaomi-pro.jpg',
      badge: 'Meest Gekozen',
      savings: 100
    },
    {
      id: 2,
      name: 'Premium Pakket',
      description: 'E-bike + Accu + Verzekering',
      products: ['VanMoof S5', 'Extra Accu', '1 Jaar Verzekering'],
      price: 2799,
      oldPrice: 3199,
      discount: '-13%',
      image: '/images/categories/ebike-real.jpg',
      badge: 'Beste Deal',
      savings: 400
    },
    {
      id: 3,
      name: 'Safety Pakket',
      description: 'Helm + Kniebeschermers + Licht',
      products: ['Pro Helm', 'Beschermers Set', 'LED Verlichting'],
      price: 129,
      oldPrice: 179,
      discount: '-28%',
      image: '/images/categories/helmet.jpg',
      badge: 'Hot Deal',
      savings: 50
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-100 to-red-100 rounded-full mb-4">
            <Sparkles className="h-5 w-5 text-orange-600" />
            <span className="font-bold text-orange-600">Bundle & Bespaar</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Compleet Pakketten Met Korting
          </h2>
          <p className="text-xl text-gray-600">
            Alles wat je nodig hebt in één keer • Bespaar tot 28%
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {bundles.map((bundle) => (
            <div 
              key={bundle.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-orange-300 hover:-translate-y-2"
            >
              {/* Badge */}
              <div className="relative">
                <div className="absolute top-4 left-4 z-10 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-bold text-sm shadow-lg">
                  {bundle.badge}
                </div>
                <div className="absolute top-4 right-4 z-10 px-4 py-2 bg-red-500 text-white rounded-full font-black text-lg shadow-lg">
                  {bundle.discount}
                </div>
                
                <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
                  <img 
                    src={bundle.image}
                    alt={bundle.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-black text-gray-900 mb-2">{bundle.name}</h3>
                <p className="text-gray-600 mb-4">{bundle.description}</p>

                {/* Included Items */}
                <div className="space-y-2 mb-6">
                  {bundle.products.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Pricing */}
                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-4 mb-4 border border-orange-200">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-3xl font-black text-gray-900">
                      €{bundle.price}
                    </span>
                    <span className="text-lg text-gray-400 line-through">
                      €{bundle.oldPrice}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Sparkles className="h-4 w-4 text-orange-600" />
                    <span className="font-bold text-orange-600">
                      Je bespaart €{bundle.savings}!
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <button className="w-full py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl font-black text-lg hover:from-orange-700 hover:to-red-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                  <ShoppingCart className="h-5 w-5" />
                  <span>Voeg Bundle Toe</span>
                </button>

                <p className="text-center text-xs text-gray-600 mt-3">
                  🚚 Gratis verzending • ✓ Direct leverbaar
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

