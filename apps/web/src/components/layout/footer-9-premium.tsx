'use client'

import Link from 'next/link'
import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail, MapPin, Clock, Zap, Star, Shield, Truck, Award, Users, ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export function Footer() {
  const productCategories = [
    { name: 'Budget E-steps', href: '/shop/e-steps/budget', price: 'Vanaf €299' },
    { name: 'Premium E-steps', href: '/shop/e-steps/premium', price: 'Vanaf €599' },
    { name: 'E-bikes', href: '/shop/e-bikes', price: 'Vanaf €1.299' },
    { name: 'Accessoires', href: '/shop/accessoires', price: 'Vanaf €19' }
  ]

  const services = [
    { name: 'Gratis bezorging', href: '/bezorging', icon: Truck },
    { name: 'Installatie service', href: '/installatie', icon: CheckCircle },
    { name: 'Onderhoud', href: '/onderhoud', icon: Shield },
    { name: 'Garantie', href: '/garantie', icon: Award }
  ]

  const company = [
    { name: 'Over DailyMove', href: '/over-ons' },
    { name: 'Onze missie', href: '/missie' },
    { name: 'Duurzaamheid', href: '/duurzaamheid' },
    { name: 'Careers', href: '/careers' },
    { name: 'Pers', href: '/pers' },
    { name: 'Investeerders', href: '/investeerders' }
  ]

  const support = [
    { name: 'Help Center', href: '/help' },
    { name: 'Live Chat', href: '/chat' },
    { name: 'Video Guides', href: '/guides' },
    { name: 'Community', href: '/community' },
    { name: 'API Docs', href: '/api' },
    { name: 'Status', href: '/status' }
  ]

  const achievements = [
    { icon: Users, number: '25.000+', text: 'Tevreden klanten' },
    { icon: Star, number: '4.9/5', text: 'Gemiddelde beoordeling' },
    { icon: Award, number: '#1', text: 'E-mobility specialist NL' }
  ]

  return (
    <footer className="bg-white">
      {/* Achievements Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center justify-center space-x-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <achievement.icon className="h-6 w-6" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold">{achievement.number}</div>
                  <div className="text-blue-100 text-sm">{achievement.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-6 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center space-x-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 shadow-lg">
                <Zap className="h-7 w-7 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                DailyMove
              </span>
            </Link>
            
            <p className="text-gray-600 leading-relaxed">
              Nederland's meest vertrouwde specialist in elektrische mobiliteit. 
              Wij helpen je bij de overstap naar een duurzame toekomst.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Phone className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">020-123-4567</p>
                  <p className="text-sm text-gray-500">Ma-Vr 9:00-18:00</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Mail className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">info@dailymove.nl</p>
                  <p className="text-sm text-gray-500">24/7 support</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-3">
              <Link href="#" className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="w-10 h-10 bg-pink-600 text-white rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="w-10 h-10 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-bold text-gray-900 mb-6">Producten</h3>
            <ul className="space-y-4">
              {productCategories.map((category, index) => (
                <li key={index}>
                  <Link href={category.href} className="group block">
                    <p className="font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                      {category.name}
                    </p>
                    <p className="text-sm text-gray-500">{category.price}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-gray-900 mb-6">Services</h3>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index}>
                  <Link href={service.href} className="flex items-center space-x-3 group">
                    <service.icon className="h-4 w-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                    <span className="text-gray-700 group-hover:text-blue-600 transition-colors">
                      {service.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-gray-900 mb-6">Bedrijf</h3>
            <ul className="space-y-3">
              {company.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-700 hover:text-blue-600 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold text-gray-900 mb-6">Support</h3>
            <ul className="space-y-3">
              {support.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-700 hover:text-blue-600 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Blijf op de hoogte van de nieuwste ontwikkelingen
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Ontvang exclusieve deals, productlanceringen en expert tips over elektrische mobiliteit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Je e-mailadres"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none"
              />
              <Button className="bg-blue-600 hover:bg-blue-700 px-8">
                Aanmelden
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              Geen spam. Je kunt je altijd uitschrijven.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-8">
              <p className="text-sm text-gray-400">
                © 2024 DailyMove B.V. Alle rechten voorbehouden.
              </p>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <Link href="/privacy" className="hover:text-white transition-colors">Privacybeleid</Link>
                <Link href="/voorwaarden" className="hover:text-white transition-colors">Algemene voorwaarden</Link>
                <Link href="/cookies" className="hover:text-white transition-colors">Cookiebeleid</Link>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <MapPin className="h-4 w-4" />
              <span>KvK: 12345678 | Amsterdam, Nederland</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

