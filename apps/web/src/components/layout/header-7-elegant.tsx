'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ShoppingCart, Search, Menu, Zap, Star, Heart, User, Bike, Shield, Wrench, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CartDrawer } from '@/components/cart/cart-drawer'
import { useCart } from '@/components/cart/cart-provider'

const elegantMenuData = {
  'E-steps': {
    featured: [
      { name: 'Xiaomi Mi Electric Scooter 4 Pro', href: '/product/xiaomi-mi-electric-scooter-4-pro', price: '€599', image: '/images/products/xiaomi-scooter-real.jpg', badge: 'Bestseller' },
    ],
    categories: [
      { name: 'Budget E-steps', href: '/shop/e-steps/budget', description: 'Vanaf €299' },
      { name: 'Premium E-steps', href: '/shop/e-steps/premium', description: 'Vanaf €599' },
      { name: 'Off-road E-steps', href: '/shop/e-steps/offroad', description: 'Voor elk terrein' },
    ]
  },
  'Elektrische Fietsen': {
    categories: [
      { name: 'Stadsfietsen', href: '/shop/ebikes/stad', description: 'Voor dagelijks gebruik' },
      { name: 'Mountainbikes', href: '/shop/ebikes/mountain', description: 'Voor avontuur' },
    ]
  },
  'Accessoires': {
    categories: [
      { name: 'Helmen', href: '/shop/accessoires/helmen', description: 'Veiligheid eerst' },
      { name: 'Sloten', href: '/shop/accessoires/sloten', description: 'Beveiliging' },
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
      <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-slate-800 to-slate-600">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-light tracking-wide text-slate-800">
                DailyMove
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {Object.entries(elegantMenuData).map(([key, data]) => (
                <div
                  key={key}
                  className="relative"
                  onMouseEnter={() => setActiveMenu(key)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <button className="flex items-center space-x-1 py-2 text-slate-700 hover:text-slate-900 font-medium tracking-wide transition-colors duration-200">
                    <span>{key}</span>
                    <ChevronDown className="h-4 w-4 transition-transform duration-200" />
                  </button>

                  {/* Elegant Dropdown */}
                  {activeMenu === key && (
                    <div className="absolute left-0 top-full mt-2 w-80 bg-white border border-gray-100 rounded-2xl shadow-xl overflow-hidden">
                      <div className="p-6">
                        {data.featured && (
                          <div className="mb-6">
                            <h3 className="text-sm font-semibold text-slate-900 mb-4 tracking-wide">UITGELICHT</h3>
                            {data.featured.map((item, index) => (
                              <Link
                                key={index}
                                href={item.href}
                                className="flex items-center space-x-4 p-4 rounded-xl hover:bg-slate-50 transition-colors duration-200"
                              >
                                <img src={item.image} alt={item.name} className="w-16 h-16 rounded-xl object-cover" />
                                <div className="flex-1">
                                  <h4 className="font-medium text-slate-900 mb-1">{item.name}</h4>
                                  <p className="text-slate-600 font-semibold">{item.price}</p>
                                  {item.badge && (
                                    <Badge variant="secondary" className="mt-2 text-xs font-medium">
                                      {item.badge}
                                    </Badge>
                                  )}
                                </div>
                              </Link>
                            ))}
                          </div>
                        )}

                        <div>
                          <h3 className="text-sm font-semibold text-slate-900 mb-4 tracking-wide">CATEGORIEËN</h3>
                          <div className="space-y-1">
                            {data.categories.map((category, index) => (
                              <Link
                                key={index}
                                href={category.href}
                                className="block p-3 rounded-lg hover:bg-slate-50 transition-colors duration-200"
                              >
                                <p className="font-medium text-slate-900">{category.name}</p>
                                <p className="text-sm text-slate-500 mt-1">{category.description}</p>
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
            <div className="flex items-center space-x-6">
              {/* Search */}
              <form onSubmit={handleSearch} className="hidden sm:block">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    type="search"
                    placeholder="Zoeken..."
                    className="h-12 w-72 pl-12 pr-4 rounded-full border border-slate-200 bg-slate-50/50 text-sm focus:bg-white focus:border-slate-300 focus:outline-none transition-all duration-200"
                  />
                </div>
              </form>

              {/* Action Buttons */}
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm" className="p-3 hover:bg-slate-50 transition-colors duration-200">
                  <Heart className="h-5 w-5 text-slate-600" />
                </Button>
                <Button variant="ghost" size="sm" className="p-3 hover:bg-slate-50 transition-colors duration-200">
                  <User className="h-5 w-5 text-slate-600" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-3 relative hover:bg-slate-50 transition-colors duration-200"
                  onClick={() => setIsCartOpen(true)}
                >
                  <ShoppingCart className="h-5 w-5 text-slate-600" />
                  {getTotalItems() > 0 && (
                    <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-slate-800">
                      {getTotalItems()}
                    </Badge>
                  )}
                </Button>
              </div>

              {/* Mobile Menu */}
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden p-3"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="h-5 w-5 text-slate-600" />
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t bg-white">
            <div className="container mx-auto px-6 py-6">
              <div className="space-y-6">
                {Object.entries(elegantMenuData).map(([key, data]) => (
                  <div key={key} className="space-y-3">
                    <h3 className="font-semibold text-slate-900 tracking-wide">{key}</h3>
                    {data.categories.map((category, index) => (
                      <Link
                        key={index}
                        href={category.href}
                        className="block py-2 text-slate-600 hover:text-slate-900 transition-colors"
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

