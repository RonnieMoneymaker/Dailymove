import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Star, Truck, Shield, Zap, CheckCircle, Award, Clock, Users } from 'lucide-react'

export function EnterpriseHero() {
  return (
    <section className="bg-gradient-to-br from-gray-50 via-blue-50 to-white py-16">
      <div className="container">
        {/* Enterprise announcement bar */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-2xl shadow-xl">
            <Zap className="h-6 w-6" />
            <span className="text-lg font-bold">WINTER SALE: Tot 40% korting op alle E-steps</span>
            <Badge className="bg-yellow-400 text-blue-900 font-black px-3 py-1">BEPERKT</Badge>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Enterprise content */}
          <div className="space-y-8">
            {/* Corporate heading */}
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-7xl font-black text-gray-900 leading-tight">
                NEDERLAND'S
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                  #1 E-STEP
                </span>
                <span className="block text-gray-900">
                  SPECIALIST
                </span>
              </h1>
              <p className="text-2xl text-gray-600 font-medium leading-relaxed">
                Meer dan <span className="font-bold text-blue-600">50 winkels</span> • 
                <span className="font-bold text-green-600"> 25.000+ klanten</span> • 
                <span className="font-bold text-purple-600"> 15+ jaar ervaring</span>
              </p>
            </div>

            {/* Enterprise stats */}
            <div className="grid grid-cols-4 gap-6 py-8 bg-white rounded-2xl shadow-lg border border-gray-100">
              <div className="text-center">
                <div className="text-3xl font-black text-blue-600">25.000+</div>
                <div className="text-sm font-medium text-gray-600">Tevreden klanten</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-green-600">50+</div>
                <div className="text-sm font-medium text-gray-600">Winkels</div>
              </div>
              <div className="text-3xl font-black text-purple-600 text-center">4.9</div>
              <div className="text-center">
                <div className="text-3xl font-black text-orange-600">1000+</div>
                <div className="text-sm font-medium text-gray-600">Producten</div>
              </div>
            </div>

            {/* Enterprise USPs */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 bg-green-50 p-4 rounded-xl border border-green-200">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Gratis verzending</div>
                  <div className="text-sm text-gray-600">Vanaf €50 • Heel Nederland</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 bg-blue-50 p-4 rounded-xl border border-blue-200">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">3 jaar garantie</div>
                  <div className="text-sm text-gray-600">Op alle premium modellen</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 bg-purple-50 p-4 rounded-xl border border-purple-200">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">24u levering</div>
                  <div className="text-sm text-gray-600">Express service</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 bg-orange-50 p-4 rounded-xl border border-orange-200">
                <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Klantenservice</div>
                  <div className="text-sm text-gray-600">24/7 beschikbaar</div>
                </div>
              </div>
            </div>

            {/* Enterprise CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-6 text-xl font-bold rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link href="/shop/e-steps">
                  <Zap className="mr-3 h-6 w-6" />
                  BEKIJK ALLE E-STEPS
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-12 py-6 text-xl font-bold rounded-2xl transition-all"
                asChild
              >
                <Link href="/winkels">
                  <Users className="mr-3 h-5 w-5" />
                  VIND EEN WINKEL
                </Link>
              </Button>
            </div>

            {/* Enterprise trust indicators */}
            <div className="flex items-center justify-between bg-gray-50 p-6 rounded-2xl">
              <div className="text-center">
                <div className="text-lg font-black text-gray-900">ISO 9001</div>
                <div className="text-xs text-gray-600">Gecertificeerd</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-black text-gray-900">CE</div>
                <div className="text-xs text-gray-600">Europese norm</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-black text-gray-900">Thuiswinkel</div>
                <div className="text-xs text-gray-600">Waarborg</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-black text-gray-900">WebwinkelKeur</div>
                <div className="text-xs text-gray-600">9.2/10</div>
              </div>
            </div>
          </div>

          {/* Right: Large product showcase */}
          <div className="relative">
            <div className="relative h-[600px] bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/products/xiaomi-scooter-real.jpg"
                alt="Premium E-step collectie - DailyMove"
                fill
                className="object-cover"
                priority
              />
              
              {/* Enterprise product overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              {/* Product info panel */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <Badge className="bg-yellow-500 text-white font-bold mb-3">BESTSELLER</Badge>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Xiaomi Mi Electric Scooter 4 Pro
                    </h3>
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <span className="font-bold text-gray-900">4.8</span>
                      <span className="text-gray-600">(2.847 reviews)</span>
                    </div>
                    <div className="space-y-1 text-sm text-gray-700">
                      <div>✓ 25 km bereik</div>
                      <div>✓ 25 km/h topsnelheid</div>
                      <div>✓ App connectie</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg text-gray-500 line-through">€699</div>
                    <div className="text-4xl font-black text-blue-600">€599</div>
                    <div className="text-green-600 font-bold">Bespaar €100</div>
                    <Button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl">
                      BEKIJK PRODUCT
                    </Button>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute top-8 left-8">
                <Badge className="bg-red-600 text-white font-black px-4 py-2 text-lg">
                  -14% KORTING
                </Badge>
              </div>
              
              <div className="absolute top-8 right-8">
                <Badge className="bg-green-500 text-white font-bold px-4 py-2">
                  OP VOORRAAD
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
