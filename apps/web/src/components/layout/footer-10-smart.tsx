'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin, Zap, Star, Shield, Truck, Award, ChevronDown, ChevronUp, ArrowRight, Search, Filter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export function Footer() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  const footerSections = {
    products: {
      title: 'Producten',
      links: [
        { name: 'E-steps Budget', href: '/shop/e-steps/budget', desc: 'Vanaf €299' },
        { name: 'E-steps Premium', href: '/shop/e-steps/premium', desc: 'Vanaf €599' },
        { name: 'E-bikes Stad', href: '/shop/e-bikes/stad', desc: 'Vanaf €1.299' },
        { name: 'E-bikes Mountain', href: '/shop/e-bikes/mountain', desc: 'Vanaf €1.899' },
        { name: 'Helmen', href: '/shop/accessoires/helmen', desc: 'Vanaf €49' },
        { name: 'Sloten', href: '/shop/accessoires/sloten', desc: 'Vanaf €29' }
      ]
    },
    service: {
      title: 'Service & Support',
      links: [
        { name: 'Live Chat', href: '/chat', desc: '24/7 beschikbaar' },
        { name: 'Video Tutorials', href: '/tutorials', desc: 'Stap voor stap' },
        { name: 'Reparatie Service', href: '/reparatie', desc: 'Professioneel' },
        { name: 'Garantie Info', href: '/garantie', desc: '2 jaar standaard' },
        { name: 'Verzending', href: '/verzending', desc: 'Gratis vanaf €50' },
        { name: 'Retourneren', href: '/retourneren', desc: '30 dagen' }
      ]
    },
    company: {
      title: 'Over DailyMove',
      links: [
        { name: 'Onze Missie', href: '/missie', desc: 'Duurzame mobiliteit' },
        { name: 'Het Team', href: '/team', desc: 'Ontmoet ons' },
        { name: 'Vacatures', href: '/vacatures', desc: 'Werk bij ons' },
        { name: 'Duurzaamheid', href: '/duurzaamheid', desc: 'Onze impact' },
        { name: 'Blog & News', href: '/blog', desc: 'Laatste nieuws' },
        { name: 'Partner Program', href: '/partners', desc: 'Samenwerken' }
      ]
    }
  }

  const quickStats = [
    { icon: Star, value: '4.9/5', label: 'Klantbeoordeling' },
    { icon: Shield, value: '25.000+', label: 'Tevreden klanten' },
    { icon: Truck, value: '24u', label: 'Snelle levering' },
    { icon: Award, value: '#1', label: 'In Nederland' }
  ]

  const filteredLinks = Object.entries(footerSections).reduce((acc, [key, section]) => {
    const filtered = section.links.filter(link => 
      link.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      link.desc.toLowerCase().includes(searchQuery.toLowerCase())
    )
    if (filtered.length > 0) {
      (acc as any)[key] = { ...section, links: filtered }
    }
    return acc
  }, {} as typeof footerSections)

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  return (
    <footer className="bg-white">
      {/* Quick Stats */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-t border-gray-200">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-4 gap-6">
            {quickStats.map((stat, index) => (
              <div key={index} className="flex items-center justify-center space-x-3 text-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <stat.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-left">
                  <div className="text-xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand & Search */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 shadow-lg">
                <Zap className="h-7 w-7 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                DailyMove
              </span>
            </Link>
            
            <p className="text-gray-600 leading-relaxed">
              Smart shopping voor elektrische mobiliteit. Vind precies wat je zoekt met onze intelligente tools.
            </p>

            {/* Smart Search */}
            <div className="bg-gray-50 rounded-xl p-4">
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                <Search className="h-4 w-4 mr-2" />
                Zoek in footer
              </h4>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Zoek links, info..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none text-sm"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    ×
                  </button>
                )}
              </div>
              {searchQuery && (
                <p className="text-xs text-gray-500 mt-2">
                  {Object.values(filteredLinks).reduce((sum, section) => sum + section.links.length, 0)} resultaten gevonden
                </p>
              )}
            </div>

            {/* Contact */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-600" />
                <span className="text-sm text-gray-700">020-123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-green-600" />
                <span className="text-sm text-gray-700">info@dailymove.nl</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-red-600" />
                <span className="text-sm text-gray-700">Amsterdam, NL</span>
              </div>
            </div>
          </div>

          {/* Dynamic Sections */}
          {Object.entries(searchQuery ? filteredLinks : footerSections).map(([key, section]) => (
            <div key={key}>
              <button
                onClick={() => toggleSection(key)}
                className="flex items-center justify-between w-full mb-4 lg:cursor-default"
              >
                <h3 className="font-bold text-gray-900">{section.title}</h3>
                <div className="lg:hidden">
                  {expandedSection === key ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </div>
              </button>
              
              <ul className={`space-y-3 ${expandedSection === key || !expandedSection ? 'block' : 'hidden lg:block'}`}>
                {section.links.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="group block hover:bg-gray-50 rounded-lg p-2 -m-2 transition-colors">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700 group-hover:text-blue-600 transition-colors text-sm">
                          {link.name}
                        </span>
                        <Badge variant="secondary" className="text-xs opacity-60 group-hover:opacity-100">
                          {link.desc}
                        </Badge>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter & Social */}
      <div className="bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
            <div className="text-center lg:text-left">
              <h3 className="font-semibold text-gray-900 mb-2">Stay Smart, Stay Updated</h3>
              <p className="text-gray-600 text-sm">Ontvang slimme tips en exclusieve deals</p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Je e-mailadres"
                  className="px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none text-sm w-64"
                />
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="flex space-x-2">
                <Link href="#" className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <Facebook className="h-4 w-4" />
                </Link>
                <Link href="#" className="w-8 h-8 bg-pink-600 text-white rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
                  <Instagram className="h-4 w-4" />
                </Link>
                <Link href="#" className="w-8 h-8 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                  <Twitter className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-6">
              <p className="text-sm text-gray-400">
                © 2024 DailyMove - Smart E-Mobility Solutions
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                <Link href="/voorwaarden" className="hover:text-white transition-colors">Voorwaarden</Link>
                <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Filter className="h-4 w-4" />
              <span>Powered by smart technology</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

