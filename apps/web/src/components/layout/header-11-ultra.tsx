'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ShoppingCart, Search, Menu, Zap, Star, Heart, User, Bike, Shield, Wrench, ChevronDown, Sparkles, Clock, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CartDrawer } from '@/components/cart/cart-drawer'
import { useCart } from '@/components/cart/cart-provider'

const ultraMenuData = {
  'E-steps': {
    featured: [
      { name: 'Xiaomi Mi Electric Scooter 4 Pro', href: '/product/xiaomi-mi-electric-scooter-4-pro', price: '€599', image: '/images/products/xiaomi-scooter-real.jpg', badge: 'AI Recommended', rating: 4.8 },
      { name: 'Segway Ninebot MAX G30LP', href: '/shop/e-steps', price: '€799', image: '/images/products/escooter-1.jpg', badge: 'Trending', rating: 4.9 },
    ],
    categories: [
      { name: 'Budget E-steps', href: '/shop/e-steps/budget', description: 'Vanaf €299', icon: Bike },
      { name: 'Premium E-steps', href: '/shop/e-steps/premium', description: 'Vanaf €599', icon: Zap },
      { name: 'Off-road E-steps', href: '/shop/e-steps/offroad', description: 'Voor elk terrein', icon: Shield },
    ]
  },
  'Elektrische Fietsen': {
    featured: [
      { name: 'VanMoof S5', href: '/product/vanmoof-s5', price: '€2.499', image: '/products/vanmoof.jpg', badge: 'Smart Choice', rating: 4.7 },
    ],
    categories: [
      { name: 'Stadsfietsen', href: '/shop/ebikes/stad', description: 'Voor dagelijks gebruik', icon: Bike },
      { name: 'Mountainbikes', href: '/shop/ebikes/mountain', description: 'Voor avontuur', icon: Shield },
    ]
  },
  'Accessoires': {
    categories: [
      { name: 'Helmen', href: '/shop/accessoires/helmen', description: 'Veiligheid eerst', icon: Shield },
      { name: 'Sloten', href: '/shop/accessoires/sloten', description: 'Beveiliging', icon: Wrench },
    ]
  }
}

const searchSuggestions = [
  'Xiaomi Mi Scooter 4 Pro',
  'Segway Ninebot MAX',
  'VanMoof S5 E-bike',
  'Premium helmen',
  'Off-road accessoires',
  'Elektrische step',
  'E-bike accu',
  'Fietsslot'
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [recentSearches] = useState(['Xiaomi scooter', 'E-bike helm'])
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const headerRef = useRef<HTMLDivElement>(null)
  const { getTotalItems } = useCart()
  const router = useRouter()

  // Mouse tracking for magnetic effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (headerRef.current) {
        const rect = headerRef.current.getBoundingClientRect()
        setMousePos({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100
        })
      }
    }

    const header = headerRef.current
    if (header) {
      header.addEventListener('mousemove', handleMouseMove)
      return () => header.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
      setShowSuggestions(false)
    }
  }

  const filteredSuggestions = searchSuggestions.filter(suggestion =>
    suggestion.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <>
      <header 
        ref={headerRef}
        className="sticky top-0 z-50 w-full backdrop-blur-2xl bg-white/10 border-b border-white/20 shadow-2xl"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(59, 130, 246, 0.15) 0%, rgba(147, 51, 234, 0.1) 50%, transparent 100%), rgba(255, 255, 255, 0.1)`
        }}
      >
        {/* Glassmorphism overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex h-20 items-center justify-between">
            {/* Ultra Logo with 3D effect */}
            <Link href="/" className="group flex items-center space-x-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 shadow-2xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Zap className="h-7 w-7 text-white drop-shadow-lg" />
                  <Sparkles className="absolute -top-1 -right-1 h-4 w-4 text-yellow-400 animate-pulse" />
                </div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                DailyMove
              </span>
            </Link>

            {/* Ultra Navigation with Magnetic Effects */}
            <nav className="hidden lg:flex items-center space-x-2">
              {Object.entries(ultraMenuData).map(([key, data]) => (
                <div
                  key={key}
                  className="relative group"
                  onMouseEnter={() => setActiveMenu(key)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <button className="relative px-6 py-3 text-sm font-medium text-gray-800 hover:text-white rounded-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                    <div className="absolute inset-0 bg-white/20 backdrop-blur-sm rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10 flex items-center space-x-2">
                      <span>{key}</span>
                      <ChevronDown className="h-4 w-4 transform group-hover:rotate-180 transition-transform duration-300" />
                    </span>
                  </button>

                  {/* Ultra Mega Menu with Glassmorphism */}
                  {activeMenu === key && (
                    <div className="absolute left-0 top-full mt-2 w-[500px] backdrop-blur-2xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl overflow-hidden transform animate-in slide-in-from-top-5 duration-300">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20"></div>
                      <div className="relative z-10 p-8">
                        {data.featured && (
                          <div className="mb-8">
                            <h3 className="text-sm font-semibold text-gray-800 mb-4 flex items-center">
                              <Bot className="w-4 h-4 mr-2 text-blue-600" />
                              AI Aanbevelingen
                            </h3>
                            <div className="space-y-4">
                              {data.featured.map((item, index) => (
                                <Link
                                  key={index}
                                  href={item.href}
                                  className="group flex items-center space-x-4 p-4 rounded-2xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                                >
                                  <div className="relative">
                                    <img src={item.image} alt={item.name} className="w-16 h-16 rounded-xl object-cover shadow-lg" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                                  </div>
                                  <div className="flex-1">
                                    <h4 className="font-semibold text-gray-800 mb-1">{item.name}</h4>
                                    <div className="flex items-center space-x-3">
                                      <span className="text-blue-600 font-bold">{item.price}</span>
                                      <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs">
                                        {item.badge}
                                      </Badge>
                                      <div className="flex items-center space-x-1">
                                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                        <span className="text-xs text-gray-600">{item.rating}</span>
                                      </div>
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}

                        <div>
                          <h3 className="text-sm font-semibold text-gray-800 mb-4">Categorieën</h3>
                          <div className="grid grid-cols-2 gap-3">
                            {data.categories.map((category, index) => (
                              <Link
                                key={index}
                                href={category.href}
                                className="group flex items-center space-x-3 p-3 rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                              >
                                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300">
                                  <category.icon className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                  <p className="font-medium text-gray-800">{category.name}</p>
                                  <p className="text-xs text-gray-600">{category.description}</p>
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

            {/* Ultra AI Search */}
            <div className="flex items-center space-x-4">
              <form onSubmit={handleSearch} className="hidden sm:block relative">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <div className="relative backdrop-blur-xl bg-white/20 border border-white/30 rounded-2xl overflow-hidden">
                    <div className="flex items-center">
                      <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-600" />
                      <input
                        type="search"
                        placeholder="Zoek producten, merken..."
                        value={searchQuery}
                        onChange={(e) => {
                          setSearchQuery(e.target.value)
                          setShowSuggestions(e.target.value.length > 0)
                        }}
                        className="h-12 w-80 pl-12 pr-12 bg-transparent text-gray-800 placeholder-gray-500 focus:outline-none"
                      />
                      <button
                        type="submit"
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:scale-110 transition-transform duration-300"
                      >
                        <Search className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  {/* Search Suggestions Dropdown */}
                  {showSuggestions && (
                    <div className="absolute top-full left-0 right-0 mt-2 backdrop-blur-xl bg-white/20 border border-white/30 rounded-2xl shadow-2xl overflow-hidden">
                      {filteredSuggestions.length > 0 && (
                        <div>
                          <div className="px-4 py-2 text-xs font-semibold text-gray-600 bg-white/10">Suggesties</div>
                          {filteredSuggestions.slice(0, 5).map((suggestion, index) => (
                            <button
                              key={index}
                              onClick={() => {
                                setSearchQuery(suggestion)
                                setShowSuggestions(false)
                                handleSearch({ preventDefault: () => {} } as React.FormEvent)
                              }}
                              className="w-full text-left px-4 py-3 hover:bg-white/20 transition-colors duration-200 flex items-center space-x-2"
                            >
                              <Search className="h-4 w-4 text-blue-500" />
                              <span className="text-gray-800">{suggestion}</span>
                            </button>
                          ))}
                        </div>
                      )}
                      {recentSearches.length > 0 && (
                        <div>
                          <div className="px-4 py-2 text-xs font-semibold text-gray-600 bg-white/10">Recent gezocht</div>
                          {recentSearches.map((recent, index) => (
                            <button
                              key={index}
                              onClick={() => {
                                setSearchQuery(recent)
                                setShowSuggestions(false)
                                handleSearch({ preventDefault: () => {} } as React.FormEvent)
                              }}
                              className="w-full text-left px-4 py-3 hover:bg-white/20 transition-colors duration-200 flex items-center space-x-2"
                            >
                              <Clock className="h-4 w-4 text-gray-500" />
                              <span className="text-gray-800">{recent}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </form>

              {/* Ultra Action Buttons */}
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm" className="relative p-3 rounded-xl backdrop-blur-sm bg-white/10 hover:bg-white/20 hover:scale-110 transition-all duration-300 group">
                  <Heart className="h-5 w-5 text-gray-700 group-hover:text-red-500 transition-colors duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-red-500 opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-300"></div>
                </Button>
                
                <Button variant="ghost" size="sm" className="relative p-3 rounded-xl backdrop-blur-sm bg-white/10 hover:bg-white/20 hover:scale-110 transition-all duration-300 group">
                  <User className="h-5 w-5 text-gray-700 group-hover:text-blue-500 transition-colors duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-300"></div>
                </Button>
                
                <Button
                  variant="ghost"
                  size="sm"
                  className="relative p-3 rounded-xl backdrop-blur-sm bg-white/10 hover:bg-white/20 hover:scale-110 transition-all duration-300 group"
                  onClick={() => setIsCartOpen(true)}
                >
                  <ShoppingCart className="h-5 w-5 text-gray-700 group-hover:text-green-500 transition-colors duration-300" />
                  {getTotalItems() > 0 && (
                    <Badge className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0 flex items-center justify-center text-xs bg-gradient-to-r from-orange-500 to-red-500 text-white animate-bounce">
                      {getTotalItems()}
                    </Badge>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-300"></div>
                </Button>
              </div>

              {/* Mobile Menu */}
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden p-3 rounded-xl backdrop-blur-sm bg-white/10 hover:bg-white/20 hover:scale-110 transition-all duration-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="h-5 w-5 text-gray-700" />
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu with Glassmorphism */}
        {isMenuOpen && (
          <div className="lg:hidden backdrop-blur-2xl bg-white/10 border-t border-white/20">
            <div className="container mx-auto px-4 py-6">
              <div className="space-y-4">
                {Object.entries(ultraMenuData).map(([key, data]) => (
                  <div key={key} className="space-y-2">
                    <h3 className="font-semibold text-gray-800">{key}</h3>
                    {data.categories.map((category, index) => (
                      <Link
                        key={index}
                        href={category.href}
                        className="block py-2 pl-4 text-gray-600 hover:text-blue-600 transition-colors duration-200"
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
