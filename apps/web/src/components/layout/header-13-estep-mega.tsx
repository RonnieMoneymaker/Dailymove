'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, ShoppingCart, User, Menu, X, Zap, Battery, Shield, Truck, ChevronDown } from 'lucide-react'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null)

  const categories = {
    'E-Steps': {
      featured: [
        { name: 'Premium E-Steps', desc: 'Top modellen 2025', icon: <Zap className="w-5 h-5" /> },
        { name: 'Budget E-Steps', desc: 'Vanaf €299', icon: <Battery className="w-5 h-5" /> },
        { name: 'Off-Road E-Steps', desc: 'Voor elk terrein', icon: <Shield className="w-5 h-5" /> },
      ],
      byBrand: ['Xiaomi', 'Segway', 'Ninebot', 'Razor', 'Uscooter'],
      byPrice: ['Onder €500', '€500 - €1000', '€1000 - €1500', 'Premium €1500+'],
      byFeature: ['Lange actieradius', 'Snelladers', 'App connectiviteit', 'Dual motor'],
    },
    'Accessoires': {
      items: ['Helmen', 'Sloten', 'Verlichting', 'Telefoonhouders', 'Tassen & Rugzakken', 'Reserveonderdelen']
    },
    'Service': {
      items: ['Reparatie', 'Onderhoud', 'Garantie', 'Verzekering', 'Inruildienst']
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      {/* Top bar - Account & Quick Links */}
      <div className="bg-slate-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2 text-sm">
            <div className="flex items-center gap-6">
              <Link href="/klantenservice" className="flex items-center gap-1.5 hover:text-orange-600 transition-colors">
                <Phone className="w-4 h-4" />
                <span className="hidden md:inline">Klantenservice</span>
              </Link>
              <Link href="/winkels" className="flex items-center gap-1.5 hover:text-orange-600 transition-colors">
                <MapPin className="w-4 h-4" />
                <span className="hidden md:inline">Onze winkels</span>
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/track-order" className="hover:text-orange-600 transition-colors flex items-center gap-1.5">
                <Truck className="w-4 h-4" />
                <span className="hidden sm:inline">Track je bestelling</span>
              </Link>
              <Link href="/account" className="flex items-center gap-1.5 hover:text-orange-600 transition-colors font-medium">
                <User className="w-4 h-4" />
                <span className="hidden sm:inline">Account</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Zap className="w-10 h-10 text-orange-600 group-hover:rotate-12 transition-transform duration-300" />
              <div className="absolute inset-0 bg-orange-600/20 blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            </div>
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">
                DailyMove
              </div>
              <div className="text-xs text-gray-500 -mt-1">E-Mobility Specialist</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {Object.entries(categories).map(([category, _]) => (
              <div
                key={category}
                className="relative group"
                onMouseEnter={() => setActiveMegaMenu(category)}
                onMouseLeave={() => setActiveMegaMenu(null)}
              >
                <button className="flex items-center gap-1 py-2 font-semibold text-gray-700 hover:text-orange-600 transition-colors">
                  {category}
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            ))}
            <Link href="/deals" className="font-semibold text-orange-600 hover:text-orange-700">
              🔥 Deals
            </Link>
          </nav>

          {/* Right side - Search & Cart */}
          <div className="flex items-center gap-4">
            {/* Search bar */}
            <div className="hidden md:block relative">
              <input
                type="search"
                placeholder="Zoek e-steps, merken..."
                className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
            </div>

            {/* Cart */}
            <Link href="/cart" className="relative group">
              <div className="p-2 hover:bg-orange-50 rounded-full transition-colors">
                <ShoppingCart className="w-6 h-6 text-gray-700 group-hover:text-orange-600" />
                <span className="absolute -top-1 -right-1 bg-orange-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  0
                </span>
              </div>
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mega Menu Dropdown - E-Steps */}
      {activeMegaMenu === 'E-Steps' && (
        <div
          className="absolute left-0 right-0 bg-white border-t border-gray-200 shadow-2xl z-40"
          onMouseEnter={() => setActiveMegaMenu('E-Steps')}
          onMouseLeave={() => setActiveMegaMenu(null)}
        >
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-4 gap-8">
              {/* Featured Categories */}
              <div>
                <h3 className="font-bold text-lg mb-4 text-gray-900">Populair</h3>
                <div className="space-y-3">
                  {categories['E-Steps'].featured.map((item) => (
                    <Link
                      key={item.name}
                      href={`/shop/${item.name.toLowerCase().replace(' ', '-')}`}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-orange-50 transition-colors group"
                    >
                      <div className="text-orange-600 group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 group-hover:text-orange-600">
                          {item.name}
                        </div>
                        <div className="text-sm text-gray-500">{item.desc}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* By Brand */}
              <div>
                <h3 className="font-bold text-lg mb-4 text-gray-900">Shop per Merk</h3>
                <ul className="space-y-2">
                  {categories['E-Steps'].byBrand.map((brand) => (
                    <li key={brand}>
                      <Link
                        href={`/brands/${brand.toLowerCase()}`}
                        className="text-gray-700 hover:text-orange-600 hover:pl-2 transition-all duration-200"
                      >
                        {brand}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* By Price */}
              <div>
                <h3 className="font-bold text-lg mb-4 text-gray-900">Shop per Prijs</h3>
                <ul className="space-y-2">
                  {categories['E-Steps'].byPrice.map((price) => (
                    <li key={price}>
                      <Link
                        href={`/shop/prijs/${price}`}
                        className="text-gray-700 hover:text-orange-600 hover:pl-2 transition-all duration-200"
                      >
                        {price}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* By Feature */}
              <div>
                <h3 className="font-bold text-lg mb-4 text-gray-900">Shop per Feature</h3>
                <ul className="space-y-2">
                  {categories['E-Steps'].byFeature.map((feature) => (
                    <li key={feature}>
                      <Link
                        href={`/shop/feature/${feature}`}
                        className="text-gray-700 hover:text-orange-600 hover:pl-2 transition-all duration-200"
                      >
                        {feature}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom promotional banner */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="grid grid-cols-3 gap-6">
                <div className="flex items-center gap-3 p-4 bg-orange-50 rounded-lg">
                  <Truck className="w-8 h-8 text-orange-600" />
                  <div>
                    <div className="font-semibold text-gray-900">Gratis Verzending</div>
                    <div className="text-sm text-gray-600">Vanaf €50</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                  <Shield className="w-8 h-8 text-blue-600" />
                  <div>
                    <div className="font-semibold text-gray-900">2 Jaar Garantie</div>
                    <div className="text-sm text-gray-600">Op alle modellen</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-lg">
                  <Zap className="w-8 h-8 text-purple-600" />
                  <div>
                    <div className="font-semibold text-gray-900">24u Levering</div>
                    <div className="text-sm text-gray-600">Heel Nederland</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mega Menu - Accessoires */}
      {activeMegaMenu === 'Accessoires' && (
        <div
          className="absolute left-0 right-0 bg-white border-t border-gray-200 shadow-2xl z-40"
          onMouseEnter={() => setActiveMegaMenu('Accessoires')}
          onMouseLeave={() => setActiveMegaMenu(null)}
        >
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-3 gap-6">
              {categories['Accessoires'].items.map((item) => (
                <Link
                  key={item}
                  href={`/shop/accessoires/${item.toLowerCase()}`}
                  className="p-4 rounded-lg hover:bg-orange-50 transition-colors group"
                >
                  <div className="font-semibold text-gray-900 group-hover:text-orange-600">
                    {item}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mega Menu - Service */}
      {activeMegaMenu === 'Service' && (
        <div
          className="absolute left-0 right-0 bg-white border-t border-gray-200 shadow-2xl z-40"
          onMouseEnter={() => setActiveMegaMenu('Service')}
          onMouseLeave={() => setActiveMegaMenu(null)}
        >
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-3 gap-6">
              {categories['Service'].items.map((item) => (
                <Link
                  key={item}
                  href={`/service/${item.toLowerCase()}`}
                  className="p-4 rounded-lg hover:bg-orange-50 transition-colors group"
                >
                  <div className="font-semibold text-gray-900 group-hover:text-orange-600">
                    {item}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <div className="relative">
              <input
                type="search"
                placeholder="Zoek e-steps..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
              />
              <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
            </div>
            {Object.keys(categories).map((category) => (
              <div key={category} className="border-b border-gray-100 pb-2">
                <div className="font-semibold text-gray-900">{category}</div>
              </div>
            ))}
            <Link href="/deals" className="block font-semibold text-orange-600">
              🔥 Deals
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

// Add missing imports
function MapPin({ className }: { className: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}

function Phone({ className }: { className: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  )
}

