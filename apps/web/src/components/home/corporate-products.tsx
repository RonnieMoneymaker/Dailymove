import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Star, ShoppingCart, Truck, Shield, ArrowRight } from 'lucide-react'

const products = [
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
    category: 'Premium'
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
    category: 'Premium'
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
    category: 'Professional'
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
    category: 'Budget'
  }
]

export function CorporateProducts() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Corporate section header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Populaire E-steps
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ontdek onze best verkochte E-steps, geselecteerd door onze experts en 
            beoordeeld door duizenden klanten.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {products.map((product) => (
            <Card key={product.id} className="bg-white hover:shadow-lg transition-shadow duration-300 border border-gray-200">
              <div className="relative">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                  {product.originalPrice && (
                    <Badge className="absolute top-3 right-3 bg-red-600 text-white font-bold">
                      -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                    </Badge>
                  )}
                  <Badge className="absolute top-3 left-3 bg-white text-gray-900 font-medium">
                    {product.brand}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                      {product.name}
                    </h3>
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(product.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">
                        {product.rating} ({product.reviewCount.toLocaleString()})
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        {product.originalPrice && (
                          <div className="text-sm text-gray-500 line-through">
                            €{product.originalPrice}
                          </div>
                        )}
                        <div className="text-2xl font-bold text-gray-900">
                          €{product.price}
                        </div>
                      </div>
                      {product.originalPrice && (
                        <div className="text-green-600 font-semibold text-sm">
                          Bespaar €{product.originalPrice - product.price}
                        </div>
                      )}
                    </div>

                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Truck className="h-4 w-4 text-blue-600" />
                      <span>Morgen in huis</span>
                      <span>•</span>
                      <Shield className="h-4 w-4 text-green-600" />
                      <span>2 jaar garantie</span>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      In winkelwagen
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Corporate CTA */}
        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 font-semibold rounded-lg"
            asChild
          >
            <Link href="/shop/e-steps">
              Bekijk alle E-steps
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
