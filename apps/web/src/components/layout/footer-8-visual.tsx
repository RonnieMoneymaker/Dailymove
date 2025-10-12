'use client'

import Link from 'next/link'
import { Facebook, Instagram, Twitter, Youtube, Phone, Mail, MapPin, Zap, Star, Shield, Truck, CreditCard, Award, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export function Footer() {
  const categories = [
    { name: 'E-steps', href: '/shop/e-steps', image: '/images/categories/escooter.jpg', count: '50+' },
    { name: 'E-bikes', href: '/shop/e-bikes', image: '/images/categories/ebike.jpg', count: '30+' },
    { name: 'Accessoires', href: '/shop/accessoires', image: '/images/categories/accessoires.jpg', count: '100+' }
  ]

  const features = [
    { icon: Truck, title: 'Gratis verzending', desc: 'Vanaf €50', color: 'from-blue-500 to-blue-600' },
    { icon: Shield, title: '2 jaar garantie', desc: 'Op alle producten', color: 'from-green-500 to-green-600' },
    { icon: Award, title: 'Beste service', desc: '4.9/5 sterren', color: 'from-yellow-500 to-yellow-600' },
    { icon: CreditCard, title: 'Veilig betalen', desc: 'SSL beveiligd', color: 'from-purple-500 to-purple-600' }
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:bg-blue-600' },
    { icon: Instagram, href: '#', color: 'hover:bg-pink-600' },
    { icon: Twitter, href: '#', color: 'hover:bg-blue-400' },
    { icon: Youtube, href: '#', color: 'hover:bg-red-600' }
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-50 to-white">
      {/* Top Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-1 space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 shadow-lg">
                <Zap className="h-7 w-7 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                DailyMove
              </span>
            </Link>
            
            <p className="text-gray-600 leading-relaxed">
              Nederland's #1 specialist in elektrische mobiliteit. Ontdek de toekomst van vervoer.
            </p>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-3">📧 Blijf op de hoogte</h3>
              <p className="text-sm text-gray-600 mb-4">Ontvang exclusieve deals en nieuws</p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Je e-mailadres"
                  className="flex-1 px-3 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none text-sm"
                />
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold text-gray-900 mb-6">🛒 Shop per categorie</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {categories.map((category, index) => (
                <Link key={index} href={category.href} className="group">
                  <div className="relative overflow-hidden rounded-xl bg-white shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="w-full h-32 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                    <div className="absolute bottom-3 left-3 text-white">
                      <h4 className="font-semibold">{category.name}</h4>
                      <p className="text-sm text-white/80">{category.count} producten</p>
                    </div>
                    <Badge className="absolute top-3 right-3 bg-white text-gray-900">
                      Bekijk →
                    </Badge>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center shadow-lg`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">{feature.title}</h4>
                  <p className="text-xs text-gray-600">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4 flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                Contact
              </h4>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex items-center space-x-2">
                  <Phone className="h-3 w-3" />
                  <span>020-123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-3 w-3" />
                  <span>info@dailymove.nl</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-3 w-3" />
                  <span>Amsterdam, Nederland</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Snel naar</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <Link href="/shop" className="text-gray-300 hover:text-white transition-colors">Alle producten</Link>
                <Link href="/sale" className="text-gray-300 hover:text-white transition-colors">Sale</Link>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link>
                <Link href="/reviews" className="text-gray-300 hover:text-white transition-colors">Reviews</Link>
                <Link href="/over-ons" className="text-gray-300 hover:text-white transition-colors">Over ons</Link>
              </div>
            </div>

            {/* Social & Legal */}
            <div>
              <h4 className="font-semibold mb-4">Volg ons</h4>
              <div className="flex space-x-3 mb-6">
                {socialLinks.map((social, index) => (
                  <Link 
                    key={index}
                    href={social.href} 
                    className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center ${social.color} hover:text-white transition-all duration-300 transform hover:scale-110`}
                  >
                    <social.icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
              <div className="space-y-1 text-xs text-gray-400">
                <p>© 2024 DailyMove</p>
                <div className="flex space-x-3">
                  <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                  <Link href="/voorwaarden" className="hover:text-white transition-colors">Voorwaarden</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

