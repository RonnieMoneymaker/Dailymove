import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Star, Truck, Shield, Award, CheckCircle, Users, MapPin } from 'lucide-react'

export function CorporateHero() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Corporate messaging */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-blue-600 text-white px-4 py-2 text-sm font-semibold">
                NEDERLAND'S MARKTLEIDER
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                E-steps & Elektrische Mobiliteit
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Sinds 2019 helpen wij meer dan 25.000 klanten met de overstap naar duurzame mobiliteit. 
                Met 50+ vestigingen en 1000+ producten zijn wij de grootste specialist van Nederland.
              </p>
            </div>

            {/* Corporate stats */}
            <div className="grid grid-cols-3 gap-6 py-6 bg-gray-50 rounded-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">25.000+</div>
                <div className="text-sm text-gray-600 font-medium">Tevreden klanten</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">50+</div>
                <div className="text-sm text-gray-600 font-medium">Vestigingen</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">4.9</div>
                <div className="text-sm text-gray-600 font-medium">Klantbeoordeling</div>
              </div>
            </div>

            {/* Corporate USPs */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-600" />
                <span className="text-lg font-medium text-gray-800">Gratis verzending vanaf €50 naar heel Nederland</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="h-6 w-6 text-blue-600" />
                <span className="text-lg font-medium text-gray-800">2-3 jaar garantie op alle producten</span>
              </div>
              <div className="flex items-center space-x-3">
                <Truck className="h-6 w-6 text-purple-600" />
                <span className="text-lg font-medium text-gray-800">Morgen in huis (voor 23:59 besteld)</span>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="h-6 w-6 text-orange-600" />
                <span className="text-lg font-medium text-gray-800">Erkend dealer van alle topmerken</span>
              </div>
            </div>

            {/* Corporate CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg"
                asChild
              >
                <Link href="/shop/e-steps">
                  Bekijk alle E-steps
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-lg"
                asChild
              >
                <Link href="/winkels">
                  <MapPin className="mr-2 h-5 w-5" />
                  Vind een winkel
                </Link>
              </Button>
            </div>
          </div>

          {/* Right: Product showcase */}
          <div className="relative">
            <div className="relative h-[500px] bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src="/images/products/xiaomi-scooter-real.jpg"
                alt="E-step collectie DailyMove"
                fill
                className="object-cover"
                priority
              />
              
              {/* Product info overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-600 font-medium">Bestseller</div>
                    <div className="text-xl font-bold text-gray-900">Xiaomi Mi Electric Scooter 4 Pro</div>
                    <div className="flex items-center space-x-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                      <span className="text-sm text-gray-600 ml-2">4.8 (2.847 reviews)</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500 line-through">€699</div>
                    <div className="text-2xl font-bold text-blue-600">€599</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
