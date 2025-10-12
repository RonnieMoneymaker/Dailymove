'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Facebook, Instagram, Twitter, Youtube, Linkedin, Phone, Mail, MapPin, Clock, Star, Shield, Truck, CreditCard, Award, Users, TrendingUp, Zap, Heart, CheckCircle, ArrowRight, Sparkles, Bike, HardHat, Wrench, Flame, Package, Trophy, Gem, Eye, Wifi, Battery, Globe } from 'lucide-react'

export function Footer() {
  const [liveViewers, setLiveViewers] = useState(234)
  const [salesCount, setSalesCount] = useState(47)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    // Live viewer simulation
    const viewerInterval = setInterval(() => {
      setLiveViewers(prev => prev + Math.floor(Math.random() * 10) - 5)
    }, 3000)

    // Sales counter
    const salesInterval = setInterval(() => {
      setSalesCount(prev => prev + 1)
    }, 30000)

    // Mouse tracking for 3D effect
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      clearInterval(viewerInterval)
      clearInterval(salesInterval)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  // Content structure zoals uitgebreid
  const footerSections = {
    products: {
      title: 'Producten',
      links: [
        { name: 'E-steps', href: '/shop/e-steps', count: '120+ modellen' },
        { name: 'Elektrische Fietsen', href: '/shop/elektrische-fietsen', count: '85+ modellen' },
        { name: 'Accessoires', href: '/shop/accessoires', count: '200+ producten' },
        { name: 'Sale Producten', href: '/sale', count: 'Tot 50% korting' },
        { name: 'Nieuwe Aankomsten', href: '/nieuw', count: 'Weekly updates' },
        { name: 'Bestsellers', href: '/bestsellers', count: 'Top verkocht' }
      ]
    },
    service: {
      title: 'Service',
      links: [
        { name: 'Live Chat Support', href: '/chat', icon: Heart },
        { name: 'Telefonische Support', href: '/telefoon', icon: Phone },
        { name: 'Email Support', href: '/email-support', icon: Mail },
        { name: 'Verzending & Retour', href: '/verzending-retour', icon: Truck },
        { name: 'Garantie Informatie', href: '/garantie', icon: Shield },
        { name: 'Service & Reparatie', href: '/service', icon: Award }
      ]
    },
    support: {
      title: 'Support',
      links: [
        { name: 'FAQ & Hulp', href: '/faq', icon: CheckCircle },
        { name: 'Contact Formulier', href: '/contact', icon: Mail },
        { name: 'Track & Trace', href: '/track', icon: MapPin },
        { name: 'Retour Aanmelden', href: '/retour', icon: CheckCircle },
        { name: 'Klachten & Feedback', href: '/klachten', icon: Heart },
        { name: 'Installatie Service', href: '/installatie', icon: Wrench }
      ]
    },
    company: {
      title: 'Over DailyMove',
      links: [
        { name: 'Over Ons', href: '/over-ons', icon: Users },
        { name: 'Onze Missie', href: '/missie', icon: Heart },
        { name: 'Careers', href: '/careers', icon: TrendingUp },
        { name: 'Duurzaamheid', href: '/duurzaamheid', icon: Globe },
        { name: 'Pers & Media', href: '/pers', icon: Award },
        { name: 'Investor Relations', href: '/investors', icon: TrendingUp }
      ]
    }
  }

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      {/* 3D Animated Background zoals 3D features */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.2),transparent_50%),radial-gradient(circle_at_75%_75%,rgba(147,51,234,0.2),transparent_50%),radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_70%)]" />
        <div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 animate-pulse"
          style={{
            transform: `translateX(${mousePos.x * 0.01}px) translateY(${mousePos.y * 0.01}px) skewX(-12deg)`
          }}
        />
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              transform: `translate(${mousePos.x * 0.02}px, ${mousePos.y * 0.02}px)`
            }}
          />
        ))}
      </div>

      {/* Top Stats Bar zoals uitgebreid style */}
      <div className="relative z-10 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-green-600/20 border-b border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-center mb-2">
                <Eye className="w-6 h-6 text-blue-400 mr-2 animate-pulse" />
                <span className="text-2xl font-bold text-blue-400">{liveViewers}</span>
              </div>
              <p className="text-sm text-gray-300">Live bezoekers</p>
            </div>
            <div className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-center mb-2">
                <Trophy className="w-6 h-6 text-yellow-400 mr-2 animate-bounce" />
                <span className="text-2xl font-bold text-yellow-400">{salesCount}</span>
              </div>
              <p className="text-sm text-gray-300">Verkocht vandaag</p>
            </div>
            <div className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-center mb-2">
                <Star className="w-6 h-6 text-green-400 mr-2 fill-current animate-pulse" />
                <span className="text-2xl font-bold text-green-400">4.9</span>
              </div>
              <p className="text-sm text-gray-300">Gemiddelde rating</p>
            </div>
            <div className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-6 h-6 text-purple-400 mr-2 animate-pulse" />
                <span className="text-2xl font-bold text-purple-400">25K+</span>
              </div>
              <p className="text-sm text-gray-300">Tevreden klanten</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content - Indeling zoals uitgebreid */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Producten Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Package className="w-6 h-6 mr-2 text-blue-400" />
              {footerSections.products.title}
            </h3>
            <div className="space-y-4">
              {footerSections.products.links.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="group flex items-center justify-between py-2 hover:bg-white/5 rounded-lg px-3 transition-all duration-300 transform hover:translate-x-2"
                  style={{
                    transform: `translateX(${mousePos.x * 0.005}px)`
                  }}
                >
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    {link.name}
                  </span>
                  <span className="text-xs text-blue-400 opacity-70 group-hover:opacity-100">
                    {link.count}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Service Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Wrench className="w-6 h-6 mr-2 text-green-400" />
              {footerSections.service.title}
            </h3>
            <div className="space-y-4">
              {footerSections.service.links.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="group flex items-center space-x-3 py-2 hover:bg-white/5 rounded-lg px-3 transition-all duration-300 transform hover:translate-x-2"
                  style={{
                    transform: `translateX(${mousePos.x * 0.005}px)`
                  }}
                >
                  <link.icon className="w-4 h-4 text-green-400 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    {link.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Support Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Shield className="w-6 h-6 mr-2 text-purple-400" />
              {footerSections.support.title}
            </h3>
            <div className="space-y-4">
              {footerSections.support.links.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="group flex items-center space-x-3 py-2 hover:bg-white/5 rounded-lg px-3 transition-all duration-300 transform hover:translate-x-2"
                  style={{
                    transform: `translateX(${mousePos.x * 0.005}px)`
                  }}
                >
                  <link.icon className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    {link.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Over DailyMove Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Heart className="w-6 h-6 mr-2 text-red-400" />
              {footerSections.company.title}
            </h3>
            <div className="space-y-4">
              {footerSections.company.links.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="group flex items-center space-x-3 py-2 hover:bg-white/5 rounded-lg px-3 transition-all duration-300 transform hover:translate-x-2"
                  style={{
                    transform: `translateX(${mousePos.x * 0.005}px)`
                  }}
                >
                  <link.icon className="w-4 h-4 text-red-400 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    {link.name}
                  </span>
                </Link>
              ))}
            </div>

            {/* Contact Info */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-4 h-4 text-blue-400" />
                  <span>020-123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-4 h-4 text-green-400" />
                  <span>info@dailymove.nl</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-purple-400" />
                  <span>Amsterdam, Nederland</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar zoals uitgebreid style */}
      <div className="relative z-10 bg-black/50 border-t border-white/10">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
            <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-8">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
                  DailyMove
                </div>
                <p className="text-sm text-gray-400 mt-1">Premium E-mobility Solutions</p>
              </div>
              <div className="flex items-center space-x-6">
                <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110">
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-pink-400 transition-colors transform hover:scale-110">
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110">
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-red-400 transition-colors transform hover:scale-110">
                  <Youtube className="w-5 h-5" />
                </Link>
              </div>
            </div>
            
            <div className="text-center lg:text-right">
              <p className="text-sm text-gray-400 mb-2">
                © 2024 DailyMove B.V. Alle rechten voorbehouden.
              </p>
              <div className="flex items-center justify-center lg:justify-end space-x-4 text-xs text-gray-500">
                <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                <Link href="/voorwaarden" className="hover:text-white transition-colors">Voorwaarden</Link>
                <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3D Interactive Elements */}
      <div 
        className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse"
        style={{
          transform: `translate(${mousePos.x * 0.02}px, ${mousePos.y * 0.02}px) rotate(${mousePos.x * 0.1}deg)`
        }}
      />
      <div 
        className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full blur-xl animate-pulse"
        style={{
          transform: `translate(${-mousePos.x * 0.01}px, ${-mousePos.y * 0.01}px) rotate(${-mousePos.x * 0.1}deg)`
        }}
      />
    </footer>
  )
}

