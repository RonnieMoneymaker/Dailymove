'use client'

import Link from 'next/link'
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin, Zap, Star, Shield, Truck, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Footer() {
  const quickLinks = [
    { name: 'E-steps', href: '/shop/e-steps' },
    { name: 'E-bikes', href: '/shop/e-bikes' },
    { name: 'Accessoires', href: '/shop/accessoires' },
    { name: 'Sale', href: '/shop/sale' }
  ]

  const support = [
    { name: 'Contact', href: '/contact' },
    { name: 'Verzending', href: '/verzending' },
    { name: 'Retourneren', href: '/retourneren' },
    { name: 'Garantie', href: '/garantie' }
  ]

  const company = [
    { name: 'Over ons', href: '/over-ons' },
    { name: 'Careers', href: '/careers' },
    { name: 'Blog', href: '/blog' },
    { name: 'Reviews', href: '/reviews' }
  ]

  const benefits = [
    { icon: Truck, text: 'Gratis verzending vanaf €50' },
    { icon: Shield, text: '2 jaar garantie' },
    { icon: Star, text: '4.9/5 sterren' }
  ]

  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Benefits Bar */}
      <div className="bg-blue-50 border-b border-blue-100">
        <div className="container mx-auto px-4 py-6">
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 text-center md:text-left justify-center md:justify-start">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <benefit.icon className="h-5 w-5 text-white" />
                </div>
                <span className="text-gray-700 font-medium">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                DailyMove
              </span>
            </Link>
            <p className="text-gray-600 leading-relaxed max-w-md">
              Nederland's grootste specialist in elektrische mobiliteit. Van E-steps tot E-bikes, 
              wij helpen je bij de overstap naar duurzaam vervoer.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Shop</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-600 hover:text-blue-600 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
            <ul className="space-y-3">
              {support.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-600 hover:text-blue-600 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Bedrijf</h3>
            <ul className="space-y-3">
              {company.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-600 hover:text-blue-600 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Blijf op de hoogte</h3>
              <p className="text-gray-600">Ontvang nieuws en exclusieve aanbiedingen</p>
            </div>
            <div className="flex space-x-2 w-full md:w-auto max-w-md">
              <input
                type="email"
                placeholder="Je e-mailadres"
                className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none"
              />
              <Button className="bg-blue-600 hover:bg-blue-700">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-sm text-gray-400">
                © 2024 DailyMove. Alle rechten voorbehouden.
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                <Link href="/voorwaarden" className="hover:text-white transition-colors">Voorwaarden</Link>
                <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-gray-400" />
              <span className="text-sm text-gray-400">Amsterdam, Nederland</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

