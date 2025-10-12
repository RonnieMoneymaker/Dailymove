'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ShoppingCart, Search, Menu, Zap, Star, Heart, User, Bike, Shield, Wrench, Flame, ChevronDown, Award, Phone, MessageCircle, Package, Truck, Clock, CheckCircle, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CartDrawer } from '@/components/cart/cart-drawer'
import { useCart } from '@/components/cart/cart-provider'

const megaMenuData = {
  'E-steps': {
    featured: [
      { name: 'Xiaomi Mi Electric Scooter 4 Pro', href: '/product/xiaomi-mi-electric-scooter-4-pro', price: '€599', oldPrice: '€699', badge: 'Bestseller', rating: 4.8, reviews: 234 },
      { name: 'Segway Ninebot MAX G30LP', href: '/shop/e-steps', price: '€799', oldPrice: '€899', badge: 'Nieuw', rating: 4.9, reviews: 156 },
      { name: 'Pure Air Pro', href: '/shop/e-steps', price: '€449', oldPrice: '€549', badge: 'Sale -20%', rating: 4.7, reviews: 89 },
    ],
    categories: [
      { name: 'Budget E-steps', href: '/shop/e-steps/budget', description: 'Vanaf €299', icon: '💰', color: 'from-blue-500 to-blue-600' },
      { name: 'Premium E-steps', href: '/shop/e-steps/premium', description: 'Vanaf €599', icon: '👑', color: 'from-purple-500 to-purple-600' },
      { name: 'Off-road E-steps', href: '/shop/e-steps/offroad', description: 'Voor elk terrein', icon: '🏔️', color: 'from-green-500 to-green-600' },
      { name: 'Compacte E-steps', href: '/shop/e-steps/compact', description: 'Opvouwbaar', icon: '📦', color: 'from-orange-500 to-orange-600' },
    ],
    brands: [
      { name: 'Xiaomi', href: '/shop/brands/xiaomi', popular: true },
      { name: 'Segway', href: '/shop/brands/segway', popular: true },
      { name: 'Pure', href: '/shop/brands/pure' },
      { name: 'Kaabo', href: '/shop/brands/kaabo' },
      { name: 'Ninebot', href: '/shop/brands/ninebot' },
      { name: 'Razor', href: '/shop/brands/razor' },
    ],
  },
  'Elektrische Fietsen': {
    featured: [
      { name: 'VanMoof S5', href: '/product/vanmoof-s5', price: '€2.499', oldPrice: '€2.799', badge: 'Premium', rating: 4.9, reviews: 67 },
      { name: 'Gazelle Ultimate C380', href: '/product/gazelle-ultimate', price: '€3.299', badge: 'Top kwaliteit', rating: 4.8, reviews: 45 },
    ],
    categories: [
      { name: 'Stadsfietsen', href: '/shop/ebikes/stad', description: 'Voor dagelijks gebruik', icon: '🏙️', color: 'from-blue-500 to-cyan-500' },
      { name: 'Mountainbikes', href: '/shop/ebikes/mountain', description: 'Voor avontuur', icon: '⛰️', color: 'from-green-500 to-emerald-600' },
      { name: 'Transportfietsen', href: '/shop/ebikes/transport', description: 'Voor gezinnen', icon: '👨‍👩‍👧‍👦', color: 'from-purple-500 to-pink-500' },
      { name: 'Vouwfietsen', href: '/shop/ebikes/vouw', description: 'Compact & handig', icon: '🚲', color: 'from-orange-500 to-red-500' },
    ],
    brands: [
      { name: 'VanMoof', href: '/shop/brands/vanmoof', popular: true },
      { name: 'Gazelle', href: '/shop/brands/gazelle', popular: true },
      { name: 'Batavus', href: '/shop/brands/batavus' },
      { name: 'Sparta', href: '/shop/brands/sparta' },
    ],
  },
  'Accessoires': {
    categories: [
      { name: 'Helmen', href: '/shop/accessoires/helmen', description: 'Veiligheid eerst', icon: '🪖', color: 'from-red-500 to-pink-500', count: 45 },
      { name: 'Sloten', href: '/shop/accessoires/sloten', description: 'Maximale beveiliging', icon: '🔒', color: 'from-gray-600 to-gray-700', count: 32 },
      { name: 'Verlichting', href: '/shop/accessoires/verlichting', description: 'LED & meer', icon: '💡', color: 'from-yellow-400 to-yellow-500', count: 28 },
      { name: 'Tassen & Koffers', href: '/shop/accessoires/tassen', description: 'Transport oplossingen', icon: '🎒', color: 'from-blue-500 to-indigo-500', count: 19 },
      { name: 'Onderdelen', href: '/shop/accessoires/onderdelen', description: 'Parts & service', icon: '🔧', color: 'from-green-500 to-teal-500', count: 156 },
      { name: 'Kleding', href: '/shop/accessoires/kleding', description: 'Veilig & comfortabel', icon: '👕', color: 'from-purple-500 to-purple-600', count: 67 },
    ]
  }
}

const navigation = [
  { name: 'E-steps', href: '/shop/e-steps', icon: Zap, hasMegaMenu: true },
  { name: 'Elektrische Fietsen', href: '/shop/elektrische-fietsen', icon: Bike, hasMegaMenu: true },
  { name: 'Accessoires', href: '/shop/accessoires', icon: Shield, hasMegaMenu: true },
  { name: 'Onderdelen', href: '/shop/onderdelen', icon: Wrench },
  { name: 'Sale', href: '/sale', badge: '🔥', icon: Flame, special: true },
]

export function Header() {
  const { state } = useCart()
  const itemCount = state.items.reduce((total, item) => total + item.quantity, 0)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [showSuggest, setShowSuggest] = useState(false)
  const router = useRouter()
  
  const searchSuggestions = [
    { label: 'E-steps', href: '/shop/e-steps' },
    { label: 'Elektrische Fietsen', href: '/shop/elektrische-fietsen' },
    { label: 'Xiaomi Mi Electric Scooter 4 Pro', href: '/product/xiaomi-mi-electric-scooter-4-pro' },
    { label: 'Helmen', href: '/shop/accessoires' },
  ]
  
  const filtered = searchSuggestions.filter(s => s.label.toLowerCase().includes(searchQuery.toLowerCase())).slice(0, 6)

  const renderMegaMenu = (menuName: string) => {
    const menuData = megaMenuData[menuName as keyof typeof megaMenuData]
    if (!menuData) return null

    return (
      <div className="absolute top-full left-0 right-0 w-full bg-gradient-to-b from-white to-gray-50 shadow-2xl border-t border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid grid-cols-12 gap-8">
            
            {/* Featured Products */}
            {'featured' in menuData && menuData.featured && (
              <div className="col-span-4">
                <div className="flex items-center gap-2 mb-5">
                  <div className="p-2 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg">
                    <TrendingUp className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Trending Nu</h3>
                </div>
                
                <div className="space-y-3">
                  {menuData.featured.map((product: any, index: number) => (
                    <Link 
                      key={index}
                      href={product.href}
                      className="group block p-4 bg-white rounded-xl hover:shadow-lg transition-all duration-300 border-2 border-gray-100 hover:border-blue-300"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Zap className="w-10 h-10 text-blue-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2 mb-1">
                            <h4 className="font-bold text-sm text-gray-900 group-hover:text-blue-600 line-clamp-2">
                              {product.name}
                            </h4>
                            <Badge className={`flex-shrink-0 ${
                              product.badge.includes('Sale') ? 'bg-red-500' :
                              product.badge === 'Bestseller' ? 'bg-green-500' :
                              'bg-blue-500'
                            }`}>
                              {product.badge}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-2 mb-2">
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm font-semibold text-gray-900">{product.rating}</span>
                            </div>
                            <span className="text-xs text-gray-500">({product.reviews})</span>
                          </div>
                          <div className="flex items-baseline gap-2">
                            <span className="text-xl font-bold text-gray-900">{product.price}</span>
                            {product.oldPrice && (
                              <span className="text-sm text-gray-400 line-through">{product.oldPrice}</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                
                <Link 
                  href="/shop/e-steps" 
                  className="mt-5 flex items-center justify-center gap-2 p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white hover:from-blue-700 hover:to-purple-700 transition-all font-bold shadow-lg hover:shadow-xl"
                >
                  <span>Bekijk alle producten</span>
                  <ChevronDown className="rotate-[-90deg] h-5 w-5" />
                </Link>
              </div>
            )}

            {/* Categories */}
            <div className="col-span-4">
              <div className="flex items-center gap-2 mb-5">
                <div className="p-2 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg">
                  <Award className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Shop op Type</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {menuData.categories.map((category, index) => (
                  <Link 
                    key={index}
                    href={category.href}
                    className="group relative overflow-hidden rounded-xl p-4 bg-white hover:shadow-lg transition-all duration-300 border-2 border-gray-100 hover:border-gray-200"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                    <div className="relative">
                      <div className="text-3xl mb-2">{category.icon}</div>
                      <div className="font-bold text-sm text-gray-900 group-hover:text-blue-600 mb-1">
                        {category.name}
                      </div>
                      <div className="text-xs text-gray-600">{category.description}</div>
                      {'count' in category && (
                        <div className="text-xs text-gray-500 mt-1">{category.count} producten</div>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Brands & USPs */}
            <div className="col-span-4">
              {'brands' in menuData && menuData.brands && (
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="p-2 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg">
                      <Star className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Top Merken</h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2">
                    {menuData.brands.map((brand: any, index: number) => (
                      <Link 
                        key={index}
                        href={brand.href}
                        className="group flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-all duration-200 border border-gray-200 hover:border-purple-300"
                      >
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-lg font-bold text-purple-600">
                            {brand.name.charAt(0)}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-sm text-gray-900 group-hover:text-purple-600 truncate">
                            {brand.name}
                          </div>
                          {brand.popular && (
                            <div className="text-xs text-purple-600">Populair</div>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
              
              {/* USPs */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-5 border border-blue-100">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Waarom DailyMove?</span>
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Truck className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-gray-900">Gratis verzending</div>
                      <div className="text-xs text-gray-600">Vanaf €50 in heel NL</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Shield className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-gray-900">2 jaar garantie</div>
                      <div className="text-xs text-gray-600">Op alle voertuigen</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                      <MessageCircle className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-gray-900">Expert advies</div>
                      <div className="text-xs text-gray-600">Chat met ons team</div>
                    </div>
                  </div>
                </div>
                <Link 
                  href="https://wa.me/31612345678"
                  className="mt-4 flex items-center justify-center gap-2 px-4 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-semibold shadow-md"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp nu
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }

  return (
    <header className="bg-white/70 backdrop-blur-xl shadow-lg sticky top-0 z-50 border-b border-white/20" onMouseLeave={() => setActiveMenu(null)}>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group flex-shrink-0">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-2xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                DailyMove
              </div>
              <div className="text-xs text-gray-600 font-medium">Premium E-mobility</div>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 flex-shrink-0">
            {navigation.map((item) => (
              <div 
                key={item.name} 
                className="relative"
                onMouseEnter={() => item.hasMegaMenu && setActiveMenu(item.name)}
              >
                <Link
                  href={item.href}
                  className={`group px-4 py-2.5 rounded-xl transition-all duration-200 flex items-center space-x-2 font-semibold text-sm ${
                    activeMenu === item.name 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105' 
                      : item.special 
                      ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white hover:from-red-600 hover:to-orange-600 shadow-md'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
                  }`}
                >
                  {item.icon && <item.icon className="h-4 w-4" />}
                  <span className="whitespace-nowrap">{item.name}</span>
                  {item.hasMegaMenu && (
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeMenu === item.name ? 'rotate-180' : ''}`} />
                  )}
                  {item.badge && <span className="ml-1">{item.badge}</span>}
                </Link>
              </div>
            ))}
          </nav>

          {/* Search */}
          <div className="hidden md:block flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setShowSuggest(true)}
                onBlur={() => setTimeout(() => setShowSuggest(false), 200)}
                placeholder="Zoek producten, merken..."
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all"
              />
              {showSuggest && filtered.length > 0 && (
                <div className="absolute z-50 mt-2 w-full rounded-xl border-2 border-gray-200 bg-white shadow-xl overflow-hidden">
                  {filtered.map((s) => (
                    <Link
                      key={s.label}
                      href={s.href}
                      className="block px-4 py-3 text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      onClick={() => setShowSuggest(false)}
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-2 flex-shrink-0">
            
            <Link 
              href="https://wa.me/31612345678" 
              className="hidden md:flex items-center gap-2 px-4 py-2.5 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-all font-semibold shadow-md hover:shadow-lg"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Chat</span>
            </Link>

            <Link 
              href="/contact" 
              className="hidden lg:flex items-center gap-2 px-4 py-2.5 border-2 border-gray-200 rounded-xl hover:bg-gray-50 transition-all font-semibold"
            >
              <Phone className="h-4 w-4" />
              <span>Contact</span>
            </Link>

            <Button variant="ghost" size="icon" className="hidden md:flex rounded-xl hover:bg-gray-100">
              <User className="h-5 w-5" />
            </Button>

            <Button variant="ghost" size="icon" className="hidden md:flex rounded-xl hover:bg-red-50 hover:text-red-500">
              <Heart className="h-5 w-5" />
            </Button>

            <CartDrawer>
              <Button variant="ghost" size="icon" className="relative rounded-xl hover:bg-blue-50 hover:text-blue-600">
                <ShoppingCart className="h-5 w-5" />
                {itemCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-6 w-6 flex items-center justify-center p-0 text-xs bg-gradient-to-r from-blue-600 to-purple-600 animate-bounce">
                    {itemCount}
                  </Badge>
                )}
              </Button>
            </CartDrawer>

            <Button variant="ghost" size="icon" className="lg:hidden rounded-xl">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mega Menu */}
      {activeMenu && renderMegaMenu(activeMenu)}
    </header>
  )
}
