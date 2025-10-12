'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ShoppingCart, Search, Menu, Zap, Star, Heart, User, Bike, Shield, Wrench, Flame, ChevronDown, ArrowRight, Sparkles, Package, Trophy, Gem, HardHat, Eye } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CartDrawer } from '@/components/cart/cart-drawer'
import { useCart } from '@/components/cart/cart-provider'

const modernMegaMenu = {
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
  { name: 'Accessoires', href: '/shop/accessoires', icon: HardHat, color: 'text-purple-600' },
  { name: 'Sale', href: '/sale', icon: Flame, special: true, color: 'text-red-600' },
]

export function Header() {
  const { state } = useCart()
  const itemCount = state.items.reduce((total, item) => total + item.quantity, 0)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)

  const renderModernMegaMenu = (menuName: string) => {
    const menuData = modernMegaMenu[menuName as keyof typeof modernMegaMenu]
    if (!menuData) return null

    return (
      <div className="absolute top-full left-0 right-0 w-full bg-gradient-to-br from-white to-blue-50 shadow-2xl border-t border-blue-200 py-16 z-50">
        <div className="container">
          <div className="grid grid-cols-12 gap-12">
            
            {/* Hero Section */}
            <div className="col-span-5">
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-600 to-purple-600 text-white p-8">
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-2">{menuData.hero.title}</h3>
                  <p className="text-blue-100 mb-6">{menuData.hero.subtitle}</p>
                  <Button className="bg-white text-blue-600 hover:bg-blue-50 font-bold">
                    {menuData.hero.cta}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Featured Products */}
            <div className="col-span-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-purple-600" />
                Populair deze week
              </h3>
              
              <div className="space-y-4">
                {menuData.featured.map((product, index) => (
                  <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-purple-200">
                    <div className="flex items-center p-4">
                      <div className="w-20 h-20 bg-gray-100 rounded-xl overflow-hidden">
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div className="ml-4 flex-1">
                        <div className="flex items-center gap-2 mb-1">
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
                        <h4 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors leading-tight">
                          {product.name}
                        </h4>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-sm text-gray-500 line-through">{product.oldPrice}</span>
                          <span className="text-xl font-bold text-gray-900">{product.price}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-span-3">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Snel naar</h3>
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
            {/* Modern logo */}
            <Link href="/" className="flex items-center space-x-3 mr-8">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full flex items-center justify-center">
                  <Eye className="w-2 h-2 text-white" />
                </div>
              </div>
              <div>
                <div className="text-2xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  VoltMover
                </div>
                <div className="text-xs text-gray-500">Modern E-mobility</div>
              </div>
            </Link>

            {/* Modern Navigation */}
            <nav className="hidden lg:flex items-center space-x-2">
              {navigation.map((item) => (
                <div 
                  key={item.name} 
                  className="relative"
                  onMouseEnter={() => item.hasMegaMenu && setActiveMenu(item.name)}
                >
                  <Link
                    href={item.href}
                    className={`group px-4 py-3 rounded-xl transition-all duration-300 flex items-center space-x-2 ${
                      activeMenu === item.name 
                        ? 'bg-blue-600 text-white shadow-lg' 
                        : item.special 
                        ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-red-600 hover:to-pink-600 shadow-md' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <item.icon className="h-5 w-5" />
                    <span className="font-medium">{item.name}</span>
                    {item.hasMegaMenu && (
                      <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                        activeMenu === item.name ? 'rotate-180' : ''
                      }`} />
                    )}
                  </Link>
                </div>
              ))}
            </nav>

            {/* Modern Search */}
            <div className="hidden lg:flex flex-1 justify-center px-6">
              <div className="relative w-full max-w-lg">
                <input
                  type="search"
                  placeholder="Wat zoek je?"
                  className="w-full px-6 py-3 pl-12 bg-gray-50 border-2 border-gray-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* Modern Actions */}
            <div className="ml-auto flex items-center space-x-2">
              <Button variant="ghost" size="icon" className="text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-xl">
                <User className="h-5 w-5" />
              </Button>

              <Button variant="ghost" size="icon" className="text-gray-600 hover:text-red-500 hover:bg-red-50 rounded-xl relative">
                <Heart className="h-5 w-5" />
              </Button>

              <CartDrawer>
                <Button variant="ghost" size="icon" className="relative text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl">
                  <ShoppingCart className="h-5 w-5" />
                  {itemCount > 0 && (
                    <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-gradient-to-r from-purple-600 to-pink-600 border-0 animate-pulse">
                      {itemCount}
                    </Badge>
                  )}
                </Button>
              </CartDrawer>
            </div>
          </div>
        </div>

        {/* Modern Visual Mega Menu */}
        {activeMenu && renderModernMegaMenu(activeMenu)}
      </header>
    </>
  )
}
