'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ShoppingCart, Search, Menu, Zap, Star, Heart, User, Bike, Shield, Wrench, ChevronDown, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CartDrawer } from '@/components/cart/cart-drawer'
import { useCart } from '@/components/cart/cart-provider'

const visualMenuData = {
  'E-steps': {
    featured: [
      { name: 'Xiaomi Mi Electric Scooter 4 Pro', href: '/product/xiaomi-mi-electric-scooter-4-pro', price: '€599', image: '/images/products/xiaomi-scooter-real.jpg', badge: 'Bestseller', color: 'from-blue-500 to-blue-600' },
      { name: 'Segway Ninebot MAX G30LP', href: '/shop/e-steps', price: '€799', image: '/images/products/escooter-1.jpg', badge: 'Premium', color: 'from-purple-500 to-purple-600' },
    ],
    categories: [
      { name: 'Budget E-steps', href: '/shop/e-steps/budget', description: 'Vanaf €299', icon: Bike, color: 'from-green-500 to-green-600' },
      { name: 'Premium E-steps', href: '/shop/e-steps/premium', description: 'Vanaf €599', icon: Zap, color: 'from-blue-500 to-blue-600' },
      { name: 'Off-road E-steps', href: '/shop/e-steps/offroad', description: 'Voor elk terrein', icon: Shield, color: 'from-orange-500 to-orange-600' },
    ]
  },
  'Elektrische Fietsen': {
    featured: [
      { name: 'VanMoof S5', href: '/product/vanmoof-s5', price: '€2.499', image: '/products/vanmoof.jpg', badge: 'Premium', color: 'from-indigo-500 to-indigo-600' },
    ],
    categories: [
      { name: 'Stadsfietsen', href: '/shop/ebikes/stad', description: 'Voor dagelijks gebruik', icon: Bike, color: 'from-teal-500 to-teal-600' },
      { name: 'Mountainbikes', href: '/shop/ebikes/mountain', description: 'Voor avontuur', icon: TrendingUp, color: 'from-red-500 to-red-600' },
    ]
  },
  'Accessoires': {
    categories: [
      { name: 'Helmen', href: '/shop/accessoires/helmen', description: 'Veiligheid eerst', icon: Shield, color: 'from-yellow-500 to-yellow-600' },
      { name: 'Sloten', href: '/shop/accessoires/sloten', description: 'Beveiliging', icon: Shield, color: 'from-gray-500 to-gray-600' },
      { name: 'Verlichting', href: '/shop/accessoires/verlichting', description: 'Zichtbaarheid', icon: Zap, color: 'from-amber-500 to-amber-600' },
    ]
  }
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { getTotalItems } = useCart()
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    router.push('/search')
  }

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                DailyMove
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {Object.entries(visualMenuData).map(([key, data]) => (
                <div
                  key={key}
                  className="relative"
                  onMouseEnter={() => setActiveMenu(key)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <button className="flex items-center space-x-1 px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
                    <span>{key}</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>

                  {/* Visual Mega Menu */}
                  {activeMenu === key && (
                    <div className="absolute left-0 top-full mt-1 w-[500px] bg-white border border-gray-200 rounded-2xl shadow-2xl overflow-hidden">
                      <div className="p-6">
                        {data.featured && (
                          <div className="mb-6">
                            <h3 className="text-sm font-semibold text-gray-900 mb-4">Uitgelicht</h3>
                            <div className="grid grid-cols-2 gap-4">
                              {data.featured.map((item, index) => (
                                <Link
                                  key={index}
                                  href={item.href}
                                  className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 p-4 hover:shadow-lg transition-all duration-300"
                                >
                                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                                  <div className="relative">
                                    <img src={item.image} alt={item.name} className="w-full h-24 rounded-lg object-cover mb-3" />
                                    <h4 className="font-medium text-sm text-gray-900 mb-1">{item.name}</h4>
                                    <div className="flex items-center justify-between">
                                      <p className="text-blue-600 font-semibold">{item.price}</p>
                                      {item.badge && (
                                        <Badge variant="secondary" className="text-xs">
                                          {item.badge}
                                        </Badge>
                                      )}
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}

                        <div>
                          <h3 className="text-sm font-semibold text-gray-900 mb-4">Categorieën</h3>
                          <div className="grid grid-cols-3 gap-3">
                            {data.categories.map((category, index) => (
                              <Link
                                key={index}
                                href={category.href}
                                className="group relative overflow-hidden rounded-xl p-4 bg-gradient-to-br from-gray-50 to-gray-100 hover:shadow-lg transition-all duration-300"
                              >
                                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                                <div className="relative text-center">
                                  {category.icon && (
                                    <div className={`w-8 h-8 mx-auto mb-2 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                                      <category.icon className="w-4 h-4 text-white" />
                                    </div>
                                  )}
                                  <p className="font-medium text-sm text-gray-900 mb-1">{category.name}</p>
                                  <p className="text-xs text-gray-500">{category.description}</p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Search & Actions */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <form onSubmit={handleSearch} className="hidden sm:block">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <input
                    type="search"
                    placeholder="Zoeken..."
                    className="h-10 w-64 pl-10 pr-4 rounded-full border border-gray-200 bg-gray-50 text-sm focus:bg-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>
              </form>

              {/* Action Buttons */}
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm" className="p-2">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2">
                  <User className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-2 relative"
                  onClick={() => setIsCartOpen(true)}
                >
                  <ShoppingCart className="h-5 w-5" />
                  {getTotalItems() > 0 && (
                    <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                      {getTotalItems()}
                    </Badge>
                  )}
                </Button>
              </div>

              {/* Mobile Menu */}
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t bg-white">
            <div className="container mx-auto px-4 py-4">
              <div className="space-y-4">
                {Object.entries(visualMenuData).map(([key, data]) => (
                  <div key={key} className="space-y-2">
                    <h3 className="font-semibold text-gray-900">{key}</h3>
                    {data.categories.map((category, index) => (
                      <Link
                        key={index}
                        href={category.href}
                        className="block py-2 text-sm text-gray-600 hover:text-blue-600"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
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

