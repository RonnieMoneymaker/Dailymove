import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight, Star, Truck, Shield, Zap, Users, Clock, CheckCircle } from 'lucide-react'

export function Hero() {
  return (
    <section className="bg-white py-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Clean professional content */}
          <div className="space-y-8">
            {/* Subtle kicker */}
            <div className="text-sm font-semibold text-brand">Elektrische mobiliteit</div>

            {/* Clean heading */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Premium E‑steps & E‑bikes
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Nederland's grootste specialist in elektrische mobiliteit. 
                Meer dan 25.000 tevreden klanten kozen al voor onze kwaliteit en service.
              </p>
            </div>

            {/* Clean stats */}
            <div className="flex gap-8 py-4">
              <div>
                <div className="text-2xl font-bold text-gray-900">25.000+</div>
                <div className="text-sm text-gray-600">Klanten</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">50+</div>
                <div className="text-sm text-gray-600">Vestigingen</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">4.9/5</div>
                <div className="text-sm text-gray-600">Beoordeling</div>
              </div>
            </div>

            {/* Clean benefits */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-lg text-gray-700">Gratis verzending vanaf €50</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="h-5 w-5 text-blue-600" />
                <span className="text-lg text-gray-700">2 jaar garantie op alle producten</span>
              </div>
              <div className="flex items-center space-x-3">
                <Truck className="h-5 w-5 text-purple-600" />
                <span className="text-lg text-gray-700">Morgen in huis (voor 23:59 besteld)</span>
              </div>
              <div className="flex items-center space-x-3">
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <span className="text-lg text-gray-700">4.9/5 sterren - 2.847 reviews</span>
              </div>
            </div>
            
            {/* Clean CTA buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button 
                size="lg" 
                className="px-8 py-4 text-lg font-semibold rounded-lg" 
                asChild
              >
                <Link href="/shop/e-steps">
                  Bekijk E-steps
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-lg"
                asChild
              >
                <Link href="/guides/e-step-kopen">
                  Gratis advies
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Clean product showcase */}
          <div className="relative">
            <div className="relative h-[500px] bg-gray-100 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/products/xiaomi-scooter-real.jpg"
                alt="Premium E-step - DailyMove"
                fill
                className="object-cover"
                priority
              />
              
              {/* Simple product info */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-600 font-medium">Bestseller</div>
                    <h3 className="text-xl font-bold text-gray-900">Xiaomi Mi Electric Scooter 4 Pro</h3>
                    <div className="flex items-center space-x-2 mt-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">4.8 (2.847 reviews)</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500 line-through">€699</div>
                    <div className="text-2xl font-bold text-blue-600">€599</div>
                  </div>
                </div>
              </div>
              
              {/* Simple badges */}
              <div className="absolute top-6 left-6">
                <div className="bg-red-600 text-white px-4 py-2 rounded-lg font-bold text-sm">
                  -15% KORTING
                </div>
              </div>
              
              <div className="absolute top-6 right-6">
                <div className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium text-sm">
                  OP VOORRAAD
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
