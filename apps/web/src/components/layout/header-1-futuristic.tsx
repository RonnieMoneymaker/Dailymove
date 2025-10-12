'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ShoppingCart, Search, Menu, Zap, Star, Heart, User, Bike, Shield, Wrench, Flame, ChevronDown, TrendingUp, Award, Clock, Phone, Mail, MapPin, Eye, Wifi, Battery, Sparkles, Trophy, Gem, Package } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CartDrawer } from '@/components/cart/cart-drawer'
import { useCart } from '@/components/cart/cart-provider'

const futuristicMegaMenu = {
  'E-steps': {
    featured: [
      { 
        name: 'Xiaomi Mi Electric Scooter 4 Pro', 
        href: '/product/xiaomi-mi-electric-scooter-4-pro', 
        price: '€599', 
        oldPrice: '€699',
        image: '/images/products/xiaomi-scooter-real.jpg', 
        badge: 'Bestseller',
        rating: 4.8,
        features: ['30km bereik', '25km/h', 'LED display']
      },
      { 
        name: 'Segway Ninebot MAX G30LP', 
        href: '/product/segway-ninebot-max-g30lp', 
        price: '€799', 
        oldPrice: '€899',
        image: '/images/products/escooter-1.jpg', 
        badge: 'Premium',
        rating: 4.9,
        features: ['65km bereik', '30km/h', 'App control']
      },
      { 
        name: 'Kaabo Mantis 8 Pro', 
        href: '/product/kaabo-mantis-8-pro', 
        price: '€1.299', 
        oldPrice: '€1.499',
        image: '/images/products/kaabo-mantis.jpg', 
        badge: 'Pro',
        rating: 4.7,
        features: ['60km bereik', '45km/h', 'Dual motor']
      },
    ],
    categories: [
      { name: 'Budget E-steps', href: '/shop/e-steps/budget', description: 'Vanaf €299', icon: Package, color: 'from-green-500 to-emerald-500' },
      { name: 'Premium E-steps', href: '/shop/e-steps/premium', description: 'Vanaf €599', icon: Gem, color: 'from-purple-500 to-violet-500' },
      { name: 'Off-road E-steps', href: '/shop/e-steps/offroad', description: 'Voor elk terrein', icon: Zap, color: 'from-orange-500 to-red-500' },
      { name: 'Compacte E-steps', href: '/shop/e-steps/compact', description: 'Opvouwbaar', icon: Package, color: 'from-blue-500 to-cyan-500' },
    ],
    brands: [
      { name: 'Xiaomi', href: '/shop/brands/xiaomi', count: '40+ modellen', popular: true },
      { name: 'Segway', href: '/shop/brands/segway', count: '25+ modellen', popular: true },
      { name: 'Kaabo', href: '/shop/brands/kaabo', count: '15+ modellen' },
      { name: 'Pure', href: '/shop/brands/pure', count: '12+ modellen' },
    ],
    stats: {
      totalProducts: '120+',
      avgRating: '4.8',
      soldThisWeek: '47',
      topSpeed: '45km/h'
    }
  }
}

const navigation = [
  { 
    name: 'E-steps', 
    href: '/shop/e-steps', 
    icon: Zap,
    description: 'Premium E-steps',
    hasMegaMenu: true,
    color: 'from-blue-500 to-purple-500'
  },
  { 
    name: 'E-bikes', 
    href: '/shop/elektrische-fietsen',
    icon: Bike,
    description: 'Elektrische fietsen',
    color: 'from-green-500 to-emerald-500'
  },
  { 
    name: 'Accessoires', 
    href: '/shop/accessoires',
    icon: Shield,
    description: 'Helmen & gear',
    color: 'from-purple-500 to-violet-500'
  },
  { 
    name: 'Sale', 
    href: '/sale', 
    icon: Flame,
    special: true,
    description: 'Tot 50% korting',
    color: 'from-red-500 to-pink-500'
  },
]

export function Header() {
  const { state } = useCart()
  const itemCount = state.items.reduce((total, item) => total + item.quantity, 0)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [liveViewers, setLiveViewers] = useState(234)
  const [searchQuery, setSearchQuery] = useState('')
  const [showSuggest, setShowSuggest] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveViewers(prev => prev + Math.floor(Math.random() * 10) - 5)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const renderFuturisticMegaMenu = (menuName: string) => {
    const menuData = futuristicMegaMenu[menuName as keyof typeof futuristicMegaMenu]
    if (!menuData) return null

    return (
      <div className="absolute top-full left-0 right-0 w-full bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white shadow-2xl border-t border-purple-500/30 py-12 z-50">
        {/* Animated background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.1),transparent_50%),radial-gradient(circle_at_75%_75%,rgba(147,51,234,0.1),transparent_50%)]" />
        
        <div className="relative container">
          <div className="grid grid-cols-12 gap-8">
            
            {/* Featured Products - 3D Cards */}
            <div className="col-span-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-black bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  🔥 Featured Products
                </h3>
              </div>
              
              <div className="grid grid-cols-3 gap-6">
                {menuData.featured.map((product, index) => (
                  <Link key={index} href={product.href} className="group">
                    <div className="relative">
                      {/* Glow effect */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-lg" />
                      
                      <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 group-hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
                        {/* Badge */}
                        <div className="absolute top-3 left-3 z-10">
                          <span className={`px-2 py-1 rounded-full text-xs font-bold text-white ${
                            product.badge === 'Bestseller' ? 'bg-gradient-to-r from-orange-500 to-red-500' :
                            product.badge === 'Premium' ? 'bg-gradient-to-r from-purple-500 to-indigo-500' :
                            'bg-gradient-to-r from-gray-800 to-black'
                          }`}>
                            {product.badge}
                          </span>
                        </div>
                        
                        {/* Image */}
                        <div className="aspect-square bg-gradient-to-br from-gray-700 to-gray-800">
                          <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        
                        {/* Info */}
                        <div className="p-4 space-y-3">
                          <h4 className="font-bold text-white group-hover:text-yellow-400 transition-colors leading-tight">
                            {product.name}
                          </h4>
                          
                          {/* Features */}
                          <div className="flex flex-wrap gap-1">
                            {product.features.map((feature, i) => (
                              <span key={i} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-full">
                                {feature}
                              </span>
                            ))}
                          </div>
                          
                          {/* Rating */}
                          <div className="flex items-center gap-2">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                            <span className="text-sm text-gray-400">{product.rating}</span>
                          </div>
                          
                          {/* Price */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="text-sm text-gray-500 line-through">{product.oldPrice}</span>
                              <span className="text-xl font-black text-white">{product.price}</span>
                            </div>
                            <div className="text-xs font-bold text-green-400 bg-green-400/20 px-2 py-1 rounded-full">
                              Bespaar €{parseInt(product.oldPrice.slice(1)) - parseInt(product.price.slice(1))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Categories & Stats */}
            <div className="col-span-3">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Categorieën
                </h3>
              </div>
              
              <div className="space-y-3">
                {menuData.categories.map((category, index) => (
                  <Link key={index} href={category.href} className="group block">
                    <div className="bg-gray-800/30 hover:bg-gray-700/50 border border-gray-700/50 hover:border-gray-500/50 rounded-xl p-4 transition-all duration-300 hover:scale-105">
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-8 h-8 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300`}>
                          <category.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="font-bold text-white group-hover:text-purple-400 transition-colors">
                            {category.name}
                          </div>
                          <div className="text-sm text-gray-400">{category.description}</div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Live Stats */}
              <div className="mt-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-4">
                <h4 className="font-bold text-white mb-4 flex items-center gap-2">
                  <Eye className="w-4 h-4 text-cyan-400 animate-pulse" />
                  Live Stats
                </h4>
                <div className="grid grid-cols-2 gap-3 text-center">
                  <div>
                    <div className="text-2xl font-black text-cyan-400">{menuData.stats.totalProducts}</div>
                    <div className="text-xs text-gray-400">Producten</div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-yellow-400">{menuData.stats.avgRating}★</div>
                    <div className="text-xs text-gray-400">Gemiddeld</div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-green-400">{menuData.stats.soldThisWeek}</div>
                    <div className="text-xs text-gray-400">Deze week</div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-red-400">{menuData.stats.topSpeed}</div>
                    <div className="text-xs text-gray-400">Max snelheid</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Brands & Live Info */}
            <div className="col-span-3">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Top Merken
                </h3>
              </div>
              
              <div className="grid grid-cols-2 gap-3 mb-8">
                {menuData.brands.map((brand, index) => (
                  <Link key={index} href={brand.href} className="group">
                    <div className="bg-gray-800/30 hover:bg-gray-700/50 border border-gray-700/50 hover:border-cyan-500/50 rounded-xl p-3 text-center transition-all duration-300 hover:scale-105">
                      <div className="font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {brand.name}
                      </div>
                      <div className="text-xs text-gray-400">{brand.count}</div>
                      {brand.popular && (
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-pulse" />
                      )}
                    </div>
                  </Link>
                ))}
              </div>

              {/* Live Viewers */}
              <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-xl p-4">
                <div className="flex items-center gap-2 text-green-400 mb-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="font-bold text-sm">Live Activity</span>
                </div>
                <div className="text-white font-bold">{liveViewers} mensen bekijken nu</div>
                <div className="text-xs text-gray-400 mt-1">47 verkocht vandaag</div>
              </div>

              {/* CTA */}
              <div className="mt-6">
                <Link href="/shop/e-steps" className="group block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white p-4 rounded-xl transition-all duration-300 hover:scale-105 text-center">
                  <div className="font-bold">Bekijk alle E-steps</div>
                  <div className="text-sm opacity-90">120+ modellen beschikbaar</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Futuristic top bar */}
      <div className="bg-gradient-to-r from-gray-900 via-slate-900 to-gray-900 text-white">
        <div className="container">
          <div className="flex items-center justify-between py-3 text-sm">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="font-medium">020-123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-green-400" />
                <span>info@voltmover.nl</span>
              </div>
              <div className="flex items-center space-x-2">
                <Eye className="h-4 w-4 text-purple-400 animate-pulse" />
                <span>{liveViewers} live bezoekers</span>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center gap-2 bg-green-500/20 text-green-400 px-3 py-1 rounded-full">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="font-medium">Gratis verzending vanaf €50</span>
              </div>
              <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full font-medium">2 jaar garantie</div>
            </div>
          </div>
        </div>
      </div>

      <header className="bg-white shadow-2xl border-b sticky top-0 z-50 relative" onMouseLeave={() => setActiveMenu(null)}>
        <div className="container">
          <div className="flex h-20 items-center">
            {/* VoltMover logo - Futuristic */}
            <Link href="/" className="flex items-center space-x-3 mr-8">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-20 blur-lg" />
                <div className="relative w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
                  <Zap className="w-8 h-8 text-white" />
                </div>
              </div>
              <div>
                <div className="text-2xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  VoltMover
                </div>
                <div className="text-xs text-gray-500">De toekomst rijdt elektrisch</div>
              </div>
            </Link>

            {/* Futuristic Navigation */}
            <nav className="hidden lg:flex items-center space-x-2">
              {navigation.map((item) => (
                <div 
                  key={item.name} 
                  className="relative"
                  onMouseEnter={() => item.hasMegaMenu && setActiveMenu(item.name)}
                >
                  <Link
                    href={item.href}
                    className={`group px-6 py-3 text-sm font-bold rounded-xl transition-all duration-300 flex items-center space-x-2 ${
                      activeMenu === item.name 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                        : item.special 
                        ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-red-600 hover:to-pink-600 animate-pulse' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.name}</span>
                    {item.hasMegaMenu && (
                      <ChevronDown className={`h-4 w-4 ml-1 transition-transform duration-200 ${
                        activeMenu === item.name ? 'rotate-180' : ''
                      }`} />
                    )}
                  </Link>
                </div>
              ))}
            </nav>

            {/* Futuristic Search */}
            <div className="hidden lg:flex flex-1 justify-center px-8">
              <div className="relative w-full max-w-2xl">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-20 blur-lg" />
                <div className="relative">
                  <input
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Zoek je perfecte E-step..."
                    className="w-full px-6 py-3 pl-12 bg-gray-50 border-2 border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  />
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Right side actions - Futuristic */}
            <div className="ml-auto flex items-center space-x-3">
              {/* Live Chat */}
              <Button variant="ghost" className="hidden md:flex items-center gap-2 text-green-600 hover:text-green-700 hover:bg-green-50 rounded-xl px-4 py-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="font-medium">Live Chat</span>
              </Button>

              {/* Account */}
              <Button variant="ghost" size="icon" className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl relative group">
                <User className="h-5 w-5" />
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity blur-lg" />
              </Button>

              {/* Wishlist */}
              <Button variant="ghost" size="icon" className="text-gray-600 hover:text-red-500 hover:bg-red-50 rounded-xl relative group">
                <Heart className="h-5 w-5" />
                <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity blur-lg" />
              </Button>

              {/* Cart - Futuristic */}
              <CartDrawer>
                <Button variant="ghost" size="icon" className="relative text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-xl group">
                  <ShoppingCart className="h-6 w-6" />
                  {itemCount > 0 && (
                    <Badge className="absolute -top-2 -right-2 h-6 w-6 flex items-center justify-center p-0 text-xs bg-gradient-to-r from-purple-600 to-pink-600 border-0 animate-bounce">
                      {itemCount}
                    </Badge>
                  )}
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity blur-lg" />
                </Button>
              </CartDrawer>
            </div>
          </div>
        </div>

        {/* Futuristic Mega Menu */}
        {activeMenu && renderFuturisticMegaMenu(activeMenu)}
      </header>
    </>
  )
}
