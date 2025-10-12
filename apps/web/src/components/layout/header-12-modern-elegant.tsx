'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ShoppingCart, Search, Menu, Zap, Star, Heart, User, Bike, Shield, Wrench, Flame, ChevronDown, ArrowRight, Sparkles, Package, Trophy, Gem, HardHat, Eye } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CartDrawer } from '@/components/cart/cart-drawer'
import { useCart } from '@/components/cart/cart-provider'

const elegantMegaMenu = {
  'E-steps': {
    hero: {
      title: 'Premium E-steps Collectie',
      subtitle: 'Ontdek de toekomst van stedelijke mobiliteit',
      cta: 'Bekijk alle 120+ modellen',
      image: '/images/lifestyle/escooter-city.jpg'
    },
    featured: [
      { 
        name: 'Xiaomi Mi Electric Scooter 4 Pro', 
        price: '€599', 
        oldPrice: '€699',
        image: '/images/products/xiaomi-scooter-real.jpg',
        badge: 'Bestseller',
        rating: 4.8,
        reviews: 1247
      },
      { 
        name: 'Segway Ninebot MAX G30LP', 
        price: '€799', 
        oldPrice: '€899',
        image: '/images/products/escooter-1.jpg',
        badge: 'Premium',
        rating: 4.9,
        reviews: 892
      },
    ],
    quickLinks: [
      { name: 'Instapmodellen', href: '/shop/budget', icon: Package, color: 'bg-green-50 text-green-700 border-green-200' },
      { name: 'Premium Collectie', href: '/shop/premium', icon: Gem, color: 'bg-purple-50 text-purple-700 border-purple-200' },
      { name: 'Exclusieve Aanbiedingen', href: '/sale', icon: Flame, color: 'bg-rose-50 text-rose-700 border-rose-200' },
      { name: 'Meest Gekozen', href: '/bestsellers', icon: Trophy, color: 'bg-amber-50 text-amber-700 border-amber-200' },
    ]
  }
}

const navigation = [
  { name: 'E-steps', href: '/shop/e-steps', icon: Zap, hasMegaMenu: true, color: 'text-blue-600' },
  { name: 'E-bikes', href: '/shop/elektrische-fietsen', icon: Bike, color: 'text-green-600' },
  { name: 'Accessoires', href: '/shop/accessoires', icon: Shield, color: 'text-purple-600' },
  { name: 'Sale', href: '/sale', icon: Flame, color: 'text-red-600', badge: 'Hot' },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { getTotalItems } = useCart()

  const renderMegaMenu = () => {
    if (activeMenu !== 'E-steps') return null
    const menuData = elegantMegaMenu['E-steps']

    return (
      <div className="absolute left-0 top-full w-screen bg-white shadow-2xl border-t border-gray-100 z-50">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-12 gap-8">
            {/* Hero Section */}
            <div className="col-span-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 relative overflow-hidden">
              <div className="relative z-10">
                <Badge className="bg-blue-100 text-blue-600 mb-4">Nieuw</Badge>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">{menuData.hero.title}</h2>
                <p className="text-gray-600 text-lg mb-6">{menuData.hero.subtitle}</p>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  {menuData.hero.cta}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-20"></div>
            </div>

            {/* Featured Products */}
            <div className="col-span-3">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Uitgelicht</h3>
              <div className="space-y-6">
                {menuData.featured.map((product, index) => (
                  <div key={index} className="group">
                    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                      <div className="flex gap-4">
                        <img src={product.image} alt={product.name} className="w-20 h-20 rounded-xl object-cover" />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                              product.badge === 'Bestseller' ? 'bg-orange-100 text-orange-600' :
                              product.badge === 'Premium' ? 'bg-purple-100 text-purple-600' :
                              'bg-gray-100 text-gray-600'
                            }`}>
                              {product.badge}
                            </span>
                            <div className="flex items-center gap-1">
                              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm font-medium text-gray-600">{product.rating}</span>
                              <span className="text-xs text-gray-400">({product.reviews})</span>
                            </div>
                          </div>
                          <h4 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors leading-tight text-sm">
                            {product.name}
                          </h4>
                          <div className="flex items-center gap-2 mt-2">
                            <span className="text-xs text-gray-500 line-through">{product.oldPrice}</span>
                            <span className="text-lg font-bold text-gray-900">{product.price}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Elegant Quick Links */}
            <div className="col-span-3">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Ontdek</h3>
              <div className="grid grid-cols-2 gap-3">
                {menuData.quickLinks.map((link, index) => (
                  <Link key={index} href={link.href} className="group">
                    <div className={`text-center p-4 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border hover:scale-105 ${link.color}`}>
                      <div className="w-12 h-12 bg-white/80 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                        <link.icon className="w-6 h-6" />
                      </div>
                      <div className="font-semibold text-sm">{link.name}</div>
                    </div>
                  </Link>
                ))}
              </div>
              
              {/* Trust Badge */}
              <div className="mt-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-4 border border-green-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Star className="w-5 h-5 text-green-600 fill-current" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">4.9/5 sterren</div>
                    <div className="text-sm text-gray-600">25.000+ tevreden klanten</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <header className="bg-white shadow-xl sticky top-0 z-50 relative" onMouseLeave={() => setActiveMenu(null)}>
        <div className="container">
          <div className="flex h-18 items-center">
            {/* Elegant logo */}
            <Link href="/" className="flex items-center space-x-3 mr-8">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                  <Sparkles className="w-2 h-2 text-white" />
                </div>
              </div>
              <div>
                <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  DailyMove
                </div>
                <div className="text-xs text-gray-500 -mt-1">Premium E-mobility</div>
              </div>
            </Link>

            {/* Elegant navigation */}
            <nav className="hidden lg:flex items-center space-x-1 flex-1">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  <Link
                    href={item.href}
                    className={`group flex items-center space-x-2 px-4 py-3 rounded-xl transition-all duration-300 hover:bg-gray-50 ${item.color}`}
                    onMouseEnter={() => item.hasMegaMenu && setActiveMenu(item.name)}
                  >
                    <item.icon className="w-4 h-4" />
                    <span className="font-medium">{item.name}</span>
                    {item.badge && (
                      <Badge className="bg-red-500 text-white text-xs px-2 py-0.5">
                        {item.badge}
                      </Badge>
                    )}
                    {item.hasMegaMenu && <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />}
                  </Link>
                </div>
              ))}
            </nav>

            {/* Elegant search & actions */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="hidden md:flex relative">
                <Search className="absolute left-3 top-1/2 w-4 h-4 text-gray-400 -translate-y-1/2" />
                <input
                  type="search"
                  placeholder="Zoeken..."
                  className="w-64 pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:bg-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                />
              </div>

              {/* Action buttons */}
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm" className="p-2.5 hover:bg-gray-100 rounded-xl">
                  <Heart className="w-5 h-5 text-gray-600" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2.5 hover:bg-gray-100 rounded-xl">
                  <User className="w-5 h-5 text-gray-600" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-2.5 hover:bg-gray-100 rounded-xl relative"
                  onClick={() => setIsCartOpen(true)}
                >
                  <ShoppingCart className="w-5 h-5 text-gray-600" />
                  {getTotalItems() > 0 && (
                    <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-blue-600 text-white">
                      {getTotalItems()}
                    </Badge>
                  )}
                </Button>
              </div>

              {/* Mobile menu */}
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden p-2.5"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Mega Menu */}
        {renderMegaMenu()}

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="container mx-auto px-4 py-6">
              <div className="space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center space-x-3 py-3 px-4 rounded-xl hover:bg-gray-50 transition-colors ${item.color}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.name}</span>
                    {item.badge && (
                      <Badge className="bg-red-500 text-white text-xs">
                        {item.badge}
                      </Badge>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  )
}

