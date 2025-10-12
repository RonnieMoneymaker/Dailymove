'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ShoppingCart, Search, Menu, Zap, Star, Heart, User, Bike, Shield, Wrench, ChevronDown, TrendingUp, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CartDrawer } from '@/components/cart/cart-drawer'
import { useCart } from '@/components/cart/cart-provider'

const hybridMenuData = {
  'E-steps': {
    featured: [
      { name: 'Xiaomi Mi Electric Scooter 4 Pro', href: '/product/xiaomi-mi-electric-scooter-4-pro', price: '€599', image: '/images/products/xiaomi-scooter-real.jpg', badge: 'Bestseller', rating: 4.8 },
    ],
    categories: [
      { name: 'Budget E-steps', href: '/shop/e-steps/budget', description: 'Vanaf €299', icon: Bike },
      { name: 'Premium E-steps', href: '/shop/e-steps/premium', description: 'Vanaf €599', icon: Zap },
      { name: 'Off-road E-steps', href: '/shop/e-steps/offroad', description: 'Voor elk terrein', icon: Shield },
    ],
    quickLinks: [
      { name: 'Nieuwste modellen', href: '/shop/e-steps/nieuw', icon: TrendingUp },
      { name: 'Bestsellers', href: '/shop/e-steps/bestsellers', icon: Award },
    ]
  },
  'Elektrische Fietsen': {
    categories: [
      { name: 'Stadsfietsen', href: '/shop/ebikes/stad', description: 'Voor dagelijks gebruik', icon: Bike },
      { name: 'Mountainbikes', href: '/shop/ebikes/mountain', description: 'Voor avontuur', icon: TrendingUp },
    ],
    quickLinks: [
      { name: 'Alle merken', href: '/shop/ebikes/merken', icon: Award },
    ]
  },
  'Accessoires': {
    categories: [
      { name: 'Helmen', href: '/shop/accessoires/helmen', description: 'Veiligheid eerst', icon: Shield },
      { name: 'Sloten', href: '/shop/accessoires/sloten', description: 'Beveiliging', icon: Shield },
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
      <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                DailyMove
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2">
              {Object.entries(hybridMenuData).map(([key, data]) => (
                <div
                  key={key}
                  className="relative"
                  onMouseEnter={() => setActiveMenu(key)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <button className="flex items-center space-x-1 px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200">
                    <span>{key}</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>

                  {/* Hybrid Mega Menu */}
                  {activeMenu === key && (
                    <div className="absolute left-0 top-full mt-2 w-[420px] bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden">
                      <div className="p-6">
                        {data.featured && (
                          <div className="mb-6">
                            <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
                              <Star className="w-4 h-4 mr-2 text-yellow-500" />
                              Uitgelicht
                            </h3>
                            {data.featured.map((item, index) => (
                              <Link
                                key={index}
                                href={item.href}
                                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 border border-gray-100"
                              >
                                <img src={item.image} alt={item.name} className="w-14 h-14 rounded-lg object-cover" />
                                <div className="flex-1">
                                  <h4 className="font-medium text-sm text-gray-900">{item.name}</h4>
                                  <div className="flex items-center space-x-2 mt-1">
                                    <p className="text-blue-600 font-semibold text-sm">{item.price}</p>
                                    {item.rating && (
                                      <div className="flex items-center space-x-1">
                                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                        <span className="text-xs text-gray-500">{item.rating}</span>
                                      </div>
                                    )}
                                    {item.badge && (
                                      <Badge variant="secondary" className="text-xs">{item.badge}</Badge>
                                    )}
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        )}

                        <div className="grid grid-cols-2 gap-6">
                          <div>
                            <h3 className="text-sm font-semibold text-gray-900 mb-3">Categorieën</h3>
                            <div className="space-y-1">
                              {data.categories.map((category, index) => (
                                <Link
                                  key={index}
                                  href={category.href}
                                  className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                                >
                                  {category.icon && <category.icon className="w-4 h-4 text-blue-600" />}
                                  <div>
                                    <p className="font-medium text-sm text-gray-900">{category.name}</p>
                                    <p className="text-xs text-gray-500">{category.description}</p>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>

                          {data.quickLinks && (
                            <div>
                              <h3 className="text-sm font-semibold text-gray-900 mb-3">Snel naar</h3>
                              <div className="space-y-1">
                                {data.quickLinks.map((link, index) => (
                                  <Link
                                    key={index}
                                    href={link.href}
                                    className="flex items-center space-x-2 p-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
                                  >
                                    <link.icon className="w-4 h-4" />
                                    <span className="text-sm font-medium">{link.name}</span>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}
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
                    className="h-10 w-60 pl-10 pr-4 rounded-full border border-gray-200 bg-gray-50/50 text-sm focus:bg-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                  />
                </div>
              </form>

              {/* Action Buttons */}
              <div className="flex items-center space-x-1">
                <Button variant="ghost" size="sm" className="p-2 hover:bg-gray-100 transition-colors">
                  <Heart className="h-5 w-5 text-gray-600" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2 hover:bg-gray-100 transition-colors">
                  <User className="h-5 w-5 text-gray-600" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-2 relative hover:bg-gray-100 transition-colors"
                  onClick={() => setIsCartOpen(true)}
                >
                  <ShoppingCart className="h-5 w-5 text-gray-600" />
                  {getTotalItems() > 0 && (
                    <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-blue-600">
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
                {Object.entries(hybridMenuData).map(([key, data]) => (
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

