'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Star, ShoppingCart, CheckCircle, Truck, Filter, Grid, List, Heart, Eye } from 'lucide-react'

const enterpriseProducts = [
  {
    id: '1',
    name: 'Xiaomi Mi Electric Scooter 4 Pro',
    brand: 'Xiaomi',
    price: 599,
    originalPrice: 699,
    image: '/images/products/xiaomi-scooter-real.jpg',
    rating: 4.8,
    reviewCount: 2847,
    inStock: true,
    stockCount: 12,
    category: 'Premium',
    features: ['25 km bereik', '25 km/h', 'App connectie', 'Opvouwbaar'],
    delivery: 'Morgen in huis',
    warranty: '2 jaar',
    badge: 'Bestseller'
  },
  {
    id: '2',
    name: 'Segway Ninebot MAX G30LP',
    brand: 'Segway',
    price: 799,
    originalPrice: 899,
    image: '/images/products/escooter-1.jpg',
    rating: 4.9,
    reviewCount: 1956,
    inStock: true,
    stockCount: 8,
    category: 'Premium',
    features: ['65 km bereik', '30 km/h', 'Tubeless banden', 'IPX7'],
    delivery: 'Morgen in huis',
    warranty: '3 jaar',
    badge: 'Nieuw'
  },
  {
    id: '3',
    name: 'Kaabo Mantis 8 Pro',
    brand: 'Kaabo',
    price: 1299,
    originalPrice: 1499,
    image: '/images/products/kaabo-mantis.jpg',
    rating: 4.7,
    reviewCount: 1234,
    inStock: true,
    stockCount: 5,
    category: 'Professional',
    features: ['60 km bereik', '40 km/h', 'Dual motor', 'Schokdempers'],
    delivery: 'Morgen in huis',
    warranty: '3 jaar',
    badge: 'Professional'
  },
  {
    id: '4',
    name: 'Ninebot KickScooter E25E',
    brand: 'Ninebot',
    price: 399,
    originalPrice: 499,
    image: '/images/lifestyle/modern-escooter.jpg',
    rating: 4.5,
    reviewCount: 987,
    inStock: true,
    stockCount: 23,
    category: 'Budget',
    features: ['25 km bereik', '20 km/h', 'Cruise control', '12.5 kg'],
    delivery: 'Morgen in huis',
    warranty: '2 jaar',
    badge: 'Budget'
  },
  {
    id: '5',
    name: 'Pure Air Pro Max',
    brand: 'Pure',
    price: 549,
    originalPrice: 649,
    image: '/images/products/escooter-2.jpg',
    rating: 4.6,
    reviewCount: 756,
    inStock: true,
    stockCount: 15,
    category: 'Premium',
    features: ['30 km bereik', '25 km/h', 'LED verlichting', 'App'],
    delivery: 'Morgen in huis',
    warranty: '2 jaar',
    badge: 'Voordeel'
  },
  {
    id: '6',
    name: 'Razor E Prime III Elite',
    brand: 'Razor',
    price: 329,
    originalPrice: 399,
    image: '/images/lifestyle/urban-mobility.jpg',
    rating: 4.4,
    reviewCount: 543,
    inStock: true,
    stockCount: 18,
    category: 'Budget',
    features: ['18 km bereik', '18 km/h', 'LED display', 'Kick-start'],
    delivery: 'Morgen in huis',
    warranty: '2 jaar',
    badge: 'Budget'
  }
]

export function EnterpriseProducts() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [sortBy, setSortBy] = useState('popular')

  return (
    <section className="py-20 bg-white">
      <div className="container">
        {/* Enterprise section header */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-5xl font-black text-gray-900 mb-4">
                PREMIUM E-STEP COLLECTIE
              </h2>
              <p className="text-xl text-gray-600 font-medium">
                Ontdek onze volledige collectie van 1000+ E-steps van 25+ topmerken
              </p>
            </div>
            
            {/* Enterprise controls */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-gray-100 rounded-xl p-2">
                <Button 
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="rounded-lg"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button 
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="rounded-lg"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
              
              <Button variant="outline" className="flex items-center space-x-2 border-2 border-gray-300 hover:border-blue-600">
                <Filter className="h-4 w-4" />
                <span>Filters</span>
              </Button>
            </div>
          </div>

          {/* Enterprise filter bar */}
          <div className="flex flex-wrap gap-3 mb-8 p-6 bg-gray-50 rounded-2xl">
            <Button className="bg-blue-600 text-white font-bold px-6 py-2 rounded-xl">
              Alle producten
            </Button>
            <Button variant="outline" className="border-gray-300 hover:border-blue-600 font-medium px-6 py-2 rounded-xl">
              Budget (€200-€500)
            </Button>
            <Button variant="outline" className="border-gray-300 hover:border-blue-600 font-medium px-6 py-2 rounded-xl">
              Premium (€500-€1000)
            </Button>
            <Button variant="outline" className="border-gray-300 hover:border-blue-600 font-medium px-6 py-2 rounded-xl">
              Professional (€1000+)
            </Button>
            <Button variant="outline" className="border-gray-300 hover:border-blue-600 font-medium px-6 py-2 rounded-xl">
              Bestsellers
            </Button>
            <Button variant="outline" className="border-gray-300 hover:border-blue-600 font-medium px-6 py-2 rounded-xl">
              Nieuwste
            </Button>
          </div>
        </div>

        {/* Enterprise product grid */}
        <div className={`grid gap-8 ${viewMode === 'grid' ? 'lg:grid-cols-3' : 'lg:grid-cols-1'}`}>
          {enterpriseProducts.map((product) => (
            <Card key={product.id} className="group overflow-hidden bg-white border-2 border-gray-100 hover:border-blue-300 hover:shadow-2xl transition-all duration-300 rounded-2xl">
              <div className="relative">
                {/* Enterprise image container */}
                <div className="relative h-80 bg-gray-50 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Enterprise badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <Badge className={`font-bold px-3 py-1 ${
                      product.badge === 'Bestseller' ? 'bg-yellow-500 text-white' :
                      product.badge === 'Nieuw' ? 'bg-green-500 text-white' :
                      product.badge === 'Professional' ? 'bg-purple-600 text-white' :
                      product.badge === 'Budget' ? 'bg-orange-500 text-white' :
                      'bg-blue-500 text-white'
                    }`}>
                      {product.badge}
                    </Badge>
                    <Badge className="bg-gray-900 text-white font-medium px-3 py-1">
                      {product.brand}
                    </Badge>
                  </div>
                  
                  {/* Discount badge */}
                  {product.originalPrice && (
                    <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-xl font-black text-lg shadow-lg">
                      -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                    </div>
                  )}
                  
                  {/* Quick actions */}
                  <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="sm" className="bg-white text-gray-700 hover:bg-gray-100 rounded-full shadow-lg">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button size="sm" className="bg-white text-gray-700 hover:bg-gray-100 rounded-full shadow-lg">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  {/* Stock indicator */}
                  <div className="absolute bottom-4 left-4">
                    <Badge className={`font-bold ${
                      product.stockCount > 10 ? 'bg-green-500' :
                      product.stockCount > 5 ? 'bg-orange-500' :
                      'bg-red-500'
                    } text-white px-3 py-1`}>
                      {product.stockCount} op voorraad
                    </Badge>
                  </div>
                </div>

                {/* Enterprise product content */}
                <CardContent className="p-8 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`h-5 w-5 ${
                              i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                            }`} />
                          ))}
                        </div>
                        <span className="font-bold text-gray-900">{product.rating}</span>
                      </div>
                      <span className="text-blue-600 font-medium hover:underline cursor-pointer">
                        {product.reviewCount.toLocaleString()} reviews →
                      </span>
                    </div>
                  </div>

                  {/* Enterprise features */}
                  <div className="grid grid-cols-2 gap-3">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm font-medium text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Enterprise delivery & warranty */}
                  <div className="flex items-center justify-between py-4 bg-gray-50 rounded-xl px-4">
                    <div className="flex items-center space-x-2">
                      <Truck className="h-5 w-5 text-blue-600" />
                      <span className="font-bold text-blue-600">{product.delivery}</span>
                    </div>
                    <div className="text-sm font-medium text-gray-600">
                      {product.warranty} garantie
                    </div>
                  </div>

                  {/* Enterprise pricing */}
                  <div className="flex items-center justify-between">
                    <div>
                      {product.originalPrice && (
                        <div className="text-lg text-gray-400 line-through font-medium">
                          €{product.originalPrice}
                        </div>
                      )}
                      <div className="text-4xl font-black text-gray-900">
                        €{product.price}
                      </div>
                      {product.originalPrice && (
                        <div className="text-green-600 font-bold">
                          Bespaar €{product.originalPrice - product.price}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Enterprise action buttons */}
                  <div className="flex space-x-3">
                    <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all">
                      <ShoppingCart className="h-5 w-5 mr-2" />
                      IN WINKELWAGEN
                    </Button>
                    <Button variant="outline" className="px-6 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-xl">
                      <Eye className="h-5 w-5" />
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Enterprise CTA section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-black mb-4">
            ONTDEK ONZE VOLLEDIGE COLLECTIE
          </h3>
          <p className="text-xl mb-8 opacity-90">
            1000+ E-steps van 25+ topmerken • Altijd de laagste prijs • Gratis advies van experts
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-12 py-4 text-lg rounded-xl"
              asChild
            >
              <Link href="/shop">
                BEKIJK ALLE PRODUCTEN
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold px-12 py-4 text-lg rounded-xl"
              asChild
            >
              <Link href="/advies">
                GRATIS EXPERT ADVIES
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
