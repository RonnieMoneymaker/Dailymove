'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ShoppingCart, Search, Menu, Zap, Heart, User, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CartDrawer } from '@/components/cart/cart-drawer'
import { useCart } from '@/components/cart/cart-provider'

const compactMenuData = {
  'E-steps': [
    { name: 'Budget E-steps', href: '/shop/e-steps/budget' },
    { name: 'Premium E-steps', href: '/shop/e-steps/premium' },
    { name: 'Off-road E-steps', href: '/shop/e-steps/offroad' },
  ],
  'E-bikes': [
    { name: 'Stadsfietsen', href: '/shop/ebikes/stad' },
    { name: 'Mountainbikes', href: '/shop/ebikes/mountain' },
  ],
  'Accessoires': [
    { name: 'Helmen', href: '/shop/accessoires/helmen' },
    { name: 'Sloten', href: '/shop/accessoires/sloten' },
    { name: 'Verlichting', href: '/shop/accessoires/verlichting' },
  ]
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
      <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4">
          <div className="flex h-14 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <Zap className="h-6 w-6 text-blue-600" />
              <span className="text-lg font-bold text-gray-900">DailyMove</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {Object.entries(compactMenuData).map(([key, items]) => (
                <div
                  key={key}
                  className="relative"
                  onMouseEnter={() => setActiveMenu(key)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <button className="flex items-center space-x-1 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
                    <span>{key}</span>
                    <ChevronDown className="h-3 w-3" />
                  </button>

                  {/* Compact Dropdown */}
                  {activeMenu === key && (
                    <div className="absolute left-0 top-full mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
                      <div className="py-2">
                        {items.map((item, index) => (
                          <Link
                            key={index}
                            href={item.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Search & Actions */}
            <div className="flex items-center space-x-3">
              {/* Search */}
              <form onSubmit={handleSearch} className="hidden sm:block">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-3 w-3 -translate-y-1/2 text-gray-400" />
                  <input
                    type="search"
                    placeholder="Zoeken..."
                    className="h-8 w-48 pl-9 pr-3 rounded-full border border-gray-200 bg-gray-50 text-xs focus:bg-white focus:border-blue-500 focus:outline-none"
                  />
                </div>
              </form>

              {/* Action Buttons */}
              <div className="flex items-center space-x-1">
                <Button variant="ghost" size="sm" className="p-2 h-8 w-8">
                  <Heart className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2 h-8 w-8">
                  <User className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-2 h-8 w-8 relative"
                  onClick={() => setIsCartOpen(true)}
                >
                  <ShoppingCart className="h-4 w-4" />
                  {getTotalItems() > 0 && (
                    <Badge className="absolute -top-1 -right-1 h-4 w-4 rounded-full p-0 flex items-center justify-center text-xs">
                      {getTotalItems()}
                    </Badge>
                  )}
                </Button>
              </div>

              {/* Mobile Menu */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden p-2 h-8 w-8"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-white">
            <div className="container mx-auto px-4 py-3">
              <div className="space-y-3">
                {Object.entries(compactMenuData).map(([key, items]) => (
                  <div key={key} className="space-y-1">
                    <h3 className="font-semibold text-sm text-gray-900">{key}</h3>
                    {items.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="block py-1 pl-2 text-sm text-gray-600 hover:text-blue-600"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
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

