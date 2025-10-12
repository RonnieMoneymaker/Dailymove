'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Facebook, Instagram, Twitter, Youtube, Phone, Mail, MapPin, Clock, Star, Shield, Truck, Award, Users, Heart, CheckCircle, ArrowRight, MessageCircle, Headphones, Gift, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export function Footer() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const customerTestimonials = [
    {
      name: "Sarah M.",
      location: "Amsterdam",
      text: "Fantastische service! Mijn Xiaomi scooter werd de volgende dag geleverd en werkt perfect.",
      rating: 5,
      product: "Xiaomi Mi Scooter 4 Pro",
      verified: true
    },
    {
      name: "Mark V.", 
      location: "Rotterdam",
      text: "Top klantenservice. Hadden een probleem met mijn bestelling, maar dit werd binnen een uur opgelost!",
      rating: 5,
      product: "Segway Ninebot MAX",
      verified: true
    },
    {
      name: "Lisa K.",
      location: "Utrecht", 
      text: "Geweldige ervaring van begin tot eind. Duidelijke communicatie en snelle levering.",
      rating: 5,
      product: "VanMoof S5",
      verified: true
    }
  ]

  const customerFeatures = [
    { icon: Truck, title: "Gratis verzending", desc: "Vanaf €50 in heel Nederland", color: "text-blue-400" },
    { icon: Shield, title: "2 jaar garantie", desc: "Op alle elektrische voertuigen", color: "text-green-400" },
    { icon: MessageCircle, title: "24/7 Live chat", desc: "Altijd iemand beschikbaar", color: "text-purple-400" },
    { icon: Award, title: "4.9/5 sterren", desc: "Van 25.000+ tevreden klanten", color: "text-yellow-400" }
  ]

  const quickLinks = {
    products: [
      { name: 'E-steps', href: '/shop/e-steps' },
      { name: 'E-bikes', href: '/shop/e-bikes' },
      { name: 'Accessoires', href: '/shop/accessoires' },
      { name: 'Sale', href: '/sale' }
    ],
    service: [
      { name: 'Contact', href: '/contact' },
      { name: 'Live Chat', href: '/chat' },
      { name: 'Verzending', href: '/verzending' },
      { name: 'Retourneren', href: '/retourneren' },
      { name: 'Garantie', href: '/garantie' },
      { name: 'Reparatie', href: '/reparatie' }
    ],
    company: [
      { name: 'Over ons', href: '/over-ons' },
      { name: 'Reviews', href: '/reviews' },
      { name: 'Blog', href: '/blog' },
      { name: 'Careers', href: '/careers' }
    ]
  }

  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Customer Features Bar */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-4 gap-6">
            {customerFeatures.map((feature, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Customer Testimonials */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Wat onze klanten zeggen</h2>
            <p className="text-gray-600">Echte reviews van echte klanten</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="text-center">
                <div className="flex items-center justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-500 fill-current" />
                  ))}
                </div>
                <blockquote className="text-lg text-gray-700 mb-6 italic">
                  "{customerTestimonials[activeTestimonial].text}"
                </blockquote>
                <div className="flex items-center justify-center space-x-4">
                  <div className="text-center">
                    <p className="font-semibold text-gray-900">{customerTestimonials[activeTestimonial].name}</p>
                    <p className="text-sm text-gray-500">{customerTestimonials[activeTestimonial].location}</p>
                  </div>
                  <Badge className="bg-green-100 text-green-800">
                    ✓ Geverifieerde aankoop
                  </Badge>
                  <Badge variant="outline" className="text-blue-600 border-blue-200">
                    {customerTestimonials[activeTestimonial].product}
                  </Badge>
                </div>
              </div>
            </div>
            
            {/* Testimonial Navigation */}
            <div className="flex justify-center space-x-2 mt-6">
              {customerTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeTestimonial === index 
                      ? 'bg-blue-600 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Brand & Contact */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center space-x-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 shadow-lg">
                <Zap className="h-7 w-7 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  DailyMove
                </span>
                <p className="text-sm text-gray-500">Premium E-mobility specialist</p>
              </div>
            </Link>
            
            <p className="text-gray-600 leading-relaxed">
              Nederland's meest vertrouwde specialist in elektrische mobiliteit. 
              Met meer dan 25.000 tevreden klanten helpen wij jou bij de overstap naar duurzaam vervoer.
            </p>

            {/* Customer Service Highlights */}
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                <Headphones className="w-5 h-5 mr-2 text-blue-600" />
                Klantenservice
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-blue-600" />
                  <div>
                    <p className="font-semibold text-gray-900">020-123-4567</p>
                    <p className="text-sm text-gray-600">Ma-Vr 9:00-18:00, Za 10:00-16:00</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageCircle className="w-4 h-4 text-green-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Live Chat</p>
                    <p className="text-sm text-gray-600">24/7 beschikbaar</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-purple-600" />
                  <div>
                    <p className="font-semibold text-gray-900">info@dailymove.nl</p>
                    <p className="text-sm text-gray-600">Reactie binnen 2 uur</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-bold text-gray-900 mb-6">Producten</h3>
            <ul className="space-y-3">
              {quickLinks.products.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-600 hover:text-blue-600 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service */}
          <div>
            <h3 className="font-bold text-gray-900 mb-6">Service</h3>
            <ul className="space-y-3">
              {quickLinks.service.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-600 hover:text-blue-600 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Over DailyMove */}
          <div>
            <h3 className="font-bold text-gray-900 mb-6">Over DailyMove</h3>
            <ul className="space-y-3">
              {quickLinks.company.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-600 hover:text-blue-600 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Social Media */}
            <div className="mt-8">
              <h4 className="font-semibold text-gray-900 mb-4">Volg ons</h4>
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
                <Link href="#" className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                  <Youtube className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Loyalty Program */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-2 flex items-center justify-center md:justify-start">
                <Gift className="w-5 h-5 mr-2" />
                DailyMove VIP Club
              </h3>
              <p className="text-blue-100">Exclusieve voordelen voor onze trouwe klanten</p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-1">
                  <Gift className="w-4 h-4" />
                  <span>Exclusieve deals</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Truck className="w-4 h-4" />
                  <span>Gratis express</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4" />
                  <span>Early access</span>
                </div>
              </div>
              <Button className="bg-white text-blue-600 hover:bg-blue-50 px-6">
                Word VIP member
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Reviews Summary */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-1">25.000+</div>
              <p className="text-gray-600">Tevreden klanten</p>
            </div>
            <div>
              <div className="flex items-center justify-center mb-1">
                <span className="text-3xl font-bold text-yellow-600">4.9</span>
                <Star className="h-6 w-6 text-yellow-500 fill-current ml-1" />
              </div>
              <p className="text-gray-600">Gemiddelde beoordeling</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-1">98%</div>
              <p className="text-gray-600">Zou ons aanbevelen</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-1">&lt;2u</div>
              <p className="text-gray-600">Gemiddelde reactietijd</p>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Blijf op de hoogte van alles wat DailyMove beweegt
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Ontvang exclusieve deals, productlanceringen en expert tips. Plus een welkomstkorting van 10%!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Je e-mailadres"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              />
              <Button className="bg-blue-600 hover:bg-blue-700 px-8">
                Aanmelden
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              ✓ Geen spam ✓ Altijd uitschrijven mogelijk ✓ 10% welkomstkorting
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                DailyMove
              </span>
            </Link>
            <p className="text-gray-600 leading-relaxed">
              Nederland's grootste specialist in elektrische mobiliteit. 
              Wij staan voor kwaliteit, service en tevreden klanten.
            </p>
            
            {/* Awards */}
            <div className="space-y-2">
              <Badge className="bg-yellow-100 text-yellow-800">🏆 Webshop van het Jaar 2024</Badge>
              <Badge className="bg-green-100 text-green-800">✓ Trustpilot Excellence Award</Badge>
              <Badge className="bg-blue-100 text-blue-800">⭐ Beste Klantenservice E-commerce</Badge>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-bold text-gray-900 mb-6">Producten</h3>
            <ul className="space-y-3">
              {quickLinks.products.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-600 hover:text-blue-600 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service */}
          <div>
            <h3 className="font-bold text-gray-900 mb-6">Service</h3>
            <ul className="space-y-3">
              {quickLinks.service.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-600 hover:text-blue-600 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Over DailyMove */}
          <div>
            <h3 className="font-bold text-gray-900 mb-6">Over DailyMove</h3>
            <ul className="space-y-3">
              {quickLinks.company.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-600 hover:text-blue-600 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Customer Service CTA */}
            <div className="mt-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-4 border border-green-200">
              <h4 className="font-semibold text-gray-900 mb-2">Hulp nodig?</h4>
              <p className="text-sm text-gray-600 mb-3">Onze experts helpen je graag!</p>
              <Button size="sm" className="bg-green-600 hover:bg-green-700 w-full">
                <MessageCircle className="w-4 h-4 mr-2" />
                Start Live Chat
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-8">
              <p className="text-sm text-gray-400">
                © 2024 DailyMove B.V. Alle rechten voorbehouden. KvK: 12345678
              </p>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <Link href="/privacy" className="hover:text-white transition-colors">Privacybeleid</Link>
                <Link href="/voorwaarden" className="hover:text-white transition-colors">Algemene voorwaarden</Link>
                <Link href="/cookies" className="hover:text-white transition-colors">Cookiebeleid</Link>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <MapPin className="h-4 w-4" />
              <span>Amsterdam, Nederland</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

