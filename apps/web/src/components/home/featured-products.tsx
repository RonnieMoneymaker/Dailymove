"use client"

import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Star, ShoppingCart, CheckCircle, Truck } from 'lucide-react'
import { formatPrice } from '@/lib/utils'
import { useCart } from '@/components/cart/cart-provider'

// MediaMarkt/Coolblue style product data with real images
const featuredProducts = [
  {
    id: '1',
    name: 'Xiaomi Mi Electric Scooter 4 Pro',
    slug: 'xiaomi-mi-electric-scooter-4-pro',
    price: 599,
    comparePrice: 699,
    image: '/images/products/xiaomi-scooter-real.jpg',
    rating: 4.8,
    reviewCount: 124,
    inStock: true,
    badge: 'Bestseller',
    features: ['25 km bereik', '25 km/h topsnelheid', 'App connectie', 'Opvouwbaar'],
    deliveryTime: 'Morgen in huis',
    stockCount: 12
  },
  {
    id: '2',
    name: 'Segway Ninebot MAX G30LP',
    slug: 'segway-ninebot-max-g30lp',
    price: 799,
    comparePrice: 899,
    image: '/images/products/escooter-1.jpg',
    rating: 4.9,
    reviewCount: 89,
    inStock: true,
    badge: 'Nieuw',
    features: ['65 km bereik', '30 km/h topsnelheid', 'Tubeless banden', 'IPX7 waterproof'],
    deliveryTime: 'Morgen in huis',
    stockCount: 8
  },
  {
    id: '3',
    name: 'Kaabo Mantis 8 Pro',
    slug: 'kaabo-mantis-8-pro',
    price: 1299,
    comparePrice: 1499,
    image: '/images/products/kaabo-mantis.jpg',
    rating: 4.7,
    reviewCount: 67,
    inStock: true,
    badge: 'Premium',
    features: ['60 km bereik', '40 km/h topsnelheid', 'Dual motor', 'Schokdempers'],
    deliveryTime: 'Morgen in huis',
    stockCount: 5
  },
  {
    id: '4',
    name: 'Pure Air Pro',
    slug: 'pure-air-pro',
    price: 449,
    comparePrice: 549,
    image: '/images/products/escooter-2.jpg',
    rating: 4.6,
    reviewCount: 203,
    inStock: false,
    badge: 'Uitverkocht',
    features: ['25 km bereik', '20 km/h topsnelheid', 'Lichtgewicht', 'LED verlichting'],
    deliveryTime: 'Uitverkocht',
    stockCount: 0
  },
  {
    id: '5',
    name: 'Ninebot KickScooter E25E',
    slug: 'ninebot-e25e',
    price: 399,
    comparePrice: 499,
    image: '/images/lifestyle/modern-escooter.jpg',
    rating: 4.5,
    reviewCount: 156,
    inStock: true,
    badge: 'Voordeel',
    features: ['25 km bereik', '20 km/h topsnelheid', 'Cruise control', '12.5 kg gewicht'],
    deliveryTime: 'Morgen in huis',
    stockCount: 23
  },
  {
    id: '6',
    name: 'Razor E Prime III',
    slug: 'razor-e-prime-3',
    price: 329,
    comparePrice: 399,
    image: '/images/lifestyle/urban-mobility.jpg',
    rating: 4.4,
    reviewCount: 98,
    inStock: true,
    badge: 'Budget',
    features: ['18 km bereik', '18 km/h topsnelheid', 'Kick-to-start', 'LED display'],
    deliveryTime: 'Morgen in huis',
    stockCount: 15
  }
]

function ProductCard({ product }: { product: typeof featuredProducts[0] }) {
  const { addItem } = useCart()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      slug: product.slug,
    })
  }

  return (
    <Link href={`/product/${product.slug}`}>
      <Card className="group overflow-hidden transition-all hover:shadow-2xl hover:scale-105 bg-white border-2 border-gray-100 hover:border-blue-200">
        <div className="relative">
          {/* MediaMarkt style image container */}
          <div className="relative h-64 bg-gray-50 overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition-all duration-500 group-hover:scale-110"
            />
            
            {/* MediaMarkt style badges */}
            <div className="absolute top-3 left-3 flex flex-col gap-2">
              {product.badge && (
                <Badge 
                  className={`px-3 py-1 font-bold text-xs uppercase tracking-wide shadow-lg ${
                    product.badge === 'Bestseller' ? 'bg-yellow-500 text-white' :
                    product.badge === 'Nieuw' ? 'bg-green-500 text-white' :
                    product.badge === 'Premium' ? 'bg-purple-600 text-white' :
                    product.badge === 'Voordeel' ? 'bg-blue-500 text-white' :
                    product.badge === 'Budget' ? 'bg-orange-500 text-white' :
                    'bg-red-500 text-white'
                  }`}
                >
                  {product.badge}
                </Badge>
              )}
            </div>
            
            {/* MediaMarkt style discount badge */}
            {product.comparePrice && (
              <div className="absolute top-3 right-3 bg-red-600 text-white px-3 py-2 rounded-lg text-sm font-black shadow-lg">
                -{Math.round(((product.comparePrice - product.price) / product.comparePrice) * 100)}%
              </div>
            )}

            {/* Coolblue style quick actions */}
            <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <Button size="sm" className="bg-white text-blue-600 hover:bg-blue-50 rounded-full shadow-lg font-bold">
                👁️ Bekijk
              </Button>
            </div>

            {/* Stock indicator - MediaMarkt style */}
            <div className="absolute bottom-3 left-3">
              <div className={`px-3 py-1 rounded-full text-xs font-bold shadow-lg ${
                product.inStock 
                  ? 'bg-green-500 text-white' 
                  : 'bg-red-500 text-white'
              }`}>
                {product.inStock ? `${product.stockCount} op voorraad` : 'Uitverkocht'}
              </div>
            </div>
          </div>
        </div>
        
        {/* MediaMarkt/Coolblue style product content */}
        <CardContent className="p-6 space-y-4">
          {/* Product name */}
          <h3 className="font-bold text-xl text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {product.name}
          </h3>
          
          {/* Rating - Coolblue style */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(product.rating)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm font-bold text-gray-900">{product.rating}</span>
            </div>
            <span className="text-sm text-blue-600 font-medium hover:underline cursor-pointer">
              {product.reviewCount} reviews →
            </span>
          </div>

          {/* MediaMarkt style features */}
          <div className="space-y-2">
            {product.features.slice(0, 3).map((feature, index) => (
              <div key={index} className="flex items-center space-x-2 text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
          
          {/* Delivery info - Coolblue style */}
          <div className="flex items-center space-x-2 text-sm">
            <Truck className="h-4 w-4 text-blue-600" />
            <span className="font-medium text-blue-600">{product.deliveryTime}</span>
          </div>

          {/* MediaMarkt style pricing */}
          <div className="space-y-2">
            <div className="flex items-baseline justify-between">
              <div className="flex items-baseline space-x-2">
                {product.comparePrice && (
                  <span className="text-lg text-gray-400 line-through font-medium">
                    {formatPrice(product.comparePrice)}
                  </span>
                )}
                <span className="text-3xl font-black text-gray-900">
                  {formatPrice(product.price)}
                </span>
              </div>
              {product.comparePrice && (
                <div className="text-right">
                  <div className="text-green-600 font-bold text-sm">
                    -{formatPrice(product.comparePrice - product.price)}
                  </div>
                </div>
              )}
            </div>
          </div>
        </CardContent>
        
        {/* MediaMarkt style footer */}
        <CardFooter className="p-6 pt-0 space-y-3">
          <Button 
            className={`w-full py-4 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${
              product.inStock 
                ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
            disabled={!product.inStock}
            onClick={handleAddToCart}
          >
            <ShoppingCart className="h-5 w-5 mr-3" />
            {product.inStock ? 'In winkelwagen' : 'Uitverkocht'}
          </Button>
          
          {/* Coolblue style quick info */}
          <div className="flex items-center justify-between text-xs text-gray-600">
            <span>Gratis retour</span>
            <span>•</span>
            <span>2 jaar garantie</span>
            <span>•</span>
            <span>24/7 service</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}

export function FeaturedProducts() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container">
        {/* MediaMarkt style section header */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-2">
                Populaire E-steps
              </h2>
              <p className="text-xl text-gray-600 font-medium">
                🏆 Best verkochte modellen • ⭐ Hoogste waardering • 🚀 Snelle levering
              </p>
            </div>
            <Button 
              variant="outline" 
              size="lg" 
              className="hidden lg:flex border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 font-bold rounded-xl"
              asChild
            >
              <Link href="/shop/e-steps">
                Alle E-steps →
              </Link>
            </Button>
          </div>

          {/* MediaMarkt style filter tabs */}
          <div className="flex flex-wrap gap-3 mb-8">
            <Button variant="default" className="bg-blue-600 text-white px-6 py-2 rounded-full font-bold">
              Alle E-steps
            </Button>
            <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-2 rounded-full font-medium">
              Budget (€200-€400)
            </Button>
            <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-2 rounded-full font-medium">
              Premium (€600+)
            </Button>
            <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-2 rounded-full font-medium">
              Bestsellers
            </Button>
          </div>
        </div>
        
        {/* MediaMarkt style product grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {/* Coolblue style CTA section */}
        <div className="text-center mt-16 bg-blue-50 rounded-3xl p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Meer dan 50 E-steps op voorraad
          </h3>
          <p className="text-gray-600 mb-8 text-lg">
            Van budget tot premium - vind de perfecte E-step voor jouw situatie
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 text-lg font-bold rounded-xl"
              asChild
            >
              <Link href="/shop/e-steps">
                Bekijk alle E-steps
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-12 py-4 text-lg font-bold rounded-xl"
              asChild
            >
              <Link href="/vergelijken">
                Vergelijk modellen
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
