'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ShoppingCart, Search, Menu, Zap, Star, Heart, User, Bike, Shield, Wrench, Flame, ChevronDown, TrendingUp, Award, Clock, Phone, Mail, MapPin, Eye, MessageCircle, Truck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CartDrawer } from '@/components/cart/cart-drawer'
import { useCart } from '@/components/cart/cart-provider'

const megaMenuData = {
  'E-steps': {
    featured: [
      { name: 'Xiaomi Mi Electric Scooter 4 Pro', href: '/product/xiaomi-mi-electric-scooter-4-pro', price: '€599', image: '/images/products/xiaomi-scooter-real.jpg', badge: 'Bestseller' },
      { name: 'Segway Ninebot MAX G30LP', href: '/shop/e-steps', price: '€799', image: '/images/products/escooter-1.jpg', badge: 'Nieuw' },
      { name: 'Pure Air Pro', href: '/shop/e-steps', price: '€449', image: '/images/products/pure-air.jpg', badge: 'Sale' },
    ],
    categories: [
      { name: 'Budget E-steps', href: '/shop/e-steps/budget', description: 'Vanaf €299' },
      { name: 'Premium E-steps', href: '/shop/e-steps/premium', description: 'Vanaf €599' },
      { name: 'Off-road E-steps', href: '/shop/e-steps/offroad', description: 'Voor elk terrein' },
      { name: 'Compacte E-steps', href: '/shop/e-steps/compact', description: 'Opvouwbaar' },
    ],
    brands: [
      { name: 'Xiaomi', href: '/shop/brands/xiaomi' },
      { name: 'Segway', href: '/shop/brands/segway' },
      { name: 'Pure', href: '/shop/brands/pure' },
      { name: 'Kaabo', href: '/shop/brands/kaabo' },
    ]
  },
  'Elektrische Fietsen': {
    featured: [
      { name: 'VanMoof S5', href: '/product/vanmoof-s5', price: '€2.499', image: '/products/vanmoof.jpg', badge: 'Premium' },
      { name: 'Gazelle Ultimate C380', href: '/product/gazelle-ultimate', price: '€3.299', image: '/products/gazelle.jpg', badge: 'Nederlandse kwaliteit' },
    ],
    categories: [
      { name: 'Stadsfietsen', href: '/shop/ebikes/stad', description: 'Voor dagelijks gebruik' },
      { name: 'Mountainbikes', href: '/shop/ebikes/mountain', description: 'Voor avontuur' },
      { name: 'Transportfietsen', href: '/shop/ebikes/transport', description: 'Voor gezinnen' },
    ],
    brands: [
      { name: 'VanMoof', href: '/shop/brands/vanmoof' },
      { name: 'Gazelle', href: '/shop/brands/gazelle' },
      { name: 'Batavus', href: '/shop/brands/batavus' },
    ]
  },
  'Accessoires': {
    categories: [
      { name: 'Helmen', href: '/shop/accessoires/helmen', description: 'Veiligheid eerst' },
      { name: 'Sloten', href: '/shop/accessoires/sloten', description: 'Beveiliging' },
      { name: 'Verlichting', href: '/shop/accessoires/verlichting', description: 'LED & meer' },
      { name: 'Tassen & Koffers', href: '/shop/accessoires/tassen', description: 'Transport' },
    ]
  }
}

const navigation = [
  { 
    name: 'E-steps', 
    href: '/shop/e-steps', 
    featured: true,
    icon: Zap,
    description: 'Premium E-steps',
    hasMegaMenu: true
  },
  { 
    name: 'Elektrische Fietsen', 
    href: '/shop/elektrische-fietsen',
    icon: Bike,
    description: 'E-bikes & meer',
    hasMegaMenu: true
  },
  { 
    name: 'Accessoires', 
    href: '/shop/accessoires',
    icon: Shield,
    description: 'Helmen & gear',
    hasMegaMenu: true
  },
  { 
    name: 'Onderdelen', 
    href: '/shop/onderdelen',
    icon: Wrench,
    description: 'Parts & service'
  },
  { 
    name: 'Sale', 
    href: '/sale', 
    badge: 'HOT',
    icon: Flame,
    special: true,
    description: 'Tot 50% korting'
  },
]

export function Header() {
  const { state } = useCart()
  const itemCount = state.items.reduce((total, item) => total + item.quantity, 0)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [language, setLanguage] = useState<'NL' | 'DE' | 'FR' | 'EN'>('NL')
  const [searchQuery, setSearchQuery] = useState('')
  const [showSuggest, setShowSuggest] = useState(false)
  const [activeIndex, setActiveIndex] = useState(-1)
  const router = useRouter()
  const searchSuggestions = [
    { label: 'E-steps', href: '/shop/e-steps' },
    { label: 'Elektrische Fietsen', href: '/shop/elektrische-fietsen' },
    { label: 'Xiaomi Mi Electric Scooter 4 Pro', href: '/product/xiaomi-mi-electric-scooter-4-pro' },
    { label: 'Helmen', href: '/shop/accessoires' },
  ]
  const filtered = searchSuggestions
    .filter(s => s.label.toLowerCase().includes(searchQuery.toLowerCase()))
    .slice(0, 6)

  const renderMegaMenu = (menuName: string) => {
    const menuData = megaMenuData[menuName as keyof typeof megaMenuData]
    if (!menuData) return null

    return (
      <div className="absolute top-full left-0 right-0 w-full bg-white shadow-2xl border-t border-gray-100 py-12 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-4 gap-8">
            {/* Featured Products */}
            {'featured' in menuData && menuData.featured && (
              <div className="col-span-1">
                <div className="h-full flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Star className="h-5 w-5 text-blue-600" />
                    Populaire E-steps
                  </h3>
                  
                  <div className="space-y-3 flex-1">
                    {menuData.featured.slice(0, 4).map((product: any, index: number) => (
                      <Link 
                        key={index}
                        href={product.href}
                        className="group flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-all duration-200 border border-gray-200 hover:border-blue-300"
                      >
                        <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm border border-gray-200">
                          <img 
                            src={`https://images.unsplash.com/photo-${
                              index === 0 ? '1544966503-7ad531c1bb5e' : 
                              index === 1 ? '1571068316344-75bc76f77890' : 
                              index === 2 ? '1558618047-3c8c76ca7d13' : 
                              '1580273916550-e323be2ae537'
                            }?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80`}
                            alt={product.name} 
                            className="w-12 h-12 object-cover rounded"
                            onError={(e) => {
                              const target = e.currentTarget;
                              target.style.display = 'none';
                              const nextElement = target.nextElementSibling as HTMLElement;
                              if (nextElement) {
                                nextElement.style.display = 'flex';
                              }
                            }}
                          />
                          <div className="w-12 h-12 bg-blue-100 rounded flex items-center justify-center hidden">
                            <Zap className="w-6 h-6 text-blue-600" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 text-sm mb-1 group-hover:text-blue-600">
                            {product.name}
                          </h4>
                          <div className="flex items-center justify-between">
                            <div className="text-base font-bold text-gray-900">{product.price}</div>
                            <div className={`text-xs px-2 py-1 rounded ${
                              product.badge === 'Bestseller' ? 'bg-green-100 text-green-800' :
                              product.badge === 'Nieuw' ? 'bg-blue-100 text-blue-800' :
                              product.badge === 'Sale' ? 'bg-red-100 text-red-800' :
                              product.badge === 'Premium' ? 'bg-purple-100 text-purple-800' :
                              'bg-gray-100 text-gray-800'
                            }`}>
                              {product.badge}
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  
                  {/* Simple button */}
                  <Link href="/shop/e-steps" className="mt-4 p-3 bg-blue-600 rounded-lg text-white hover:bg-blue-700 transition-colors text-center">
                    <div className="font-semibold">Bekijk alle E-steps →</div>
                  </Link>
                </div>
              </div>
            )}

            {/* Categories */}
            <div className="col-span-1">
              <div className="h-full flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Award className="h-5 w-5 text-green-600" />
                  Shop op Prijs
                </h3>
                
                <div className="space-y-3 flex-1">
                  {menuData.categories.slice(0, 4).map((category, index) => (
                    <Link 
                      key={index}
                      href={category.href}
                      className="group flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-green-50 transition-all duration-200"
                    >
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
                        <span className="text-lg">
                          {index === 0 ? '🏙️' : index === 1 ? '🏔️' : index === 2 ? '📦' : '👑'}
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900 text-sm group-hover:text-green-600">
                          {category.name}
                        </div>
                        <div className="text-xs text-gray-600">{category.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>
                
                <Link href="/shop/categories" className="mt-4 p-3 bg-green-600 rounded-lg text-white hover:bg-green-700 transition-colors text-center">
                  <div className="font-semibold">Alle categorieën →</div>
                </Link>
              </div>
            </div>

            {/* Brands */}
            {'brands' in menuData && menuData.brands && (
              <div className="col-span-1">
                <div className="h-full flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Star className="h-5 w-5 text-yellow-500" />
                    Top Merken
                  </h3>
                  
                  <div className="space-y-3 flex-1">
                    {menuData.brands.slice(0, 4).map((brand: any, index: number) => (
                      <Link 
                        key={index}
                        href={brand.href}
                        className="group flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-yellow-50 transition-all duration-200"
                      >
                        <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
                          <img 
                            src={`https://logos-world.net/wp-content/uploads/2020/09/${
                              brand.name === 'Xiaomi' ? 'Xiaomi-Logo' :
                              brand.name === 'Segway' ? 'Segway-Logo' :
                              brand.name === 'Pure' ? 'Pure-Logo' :
                              brand.name
                            }.png`}
                            alt={brand.name}
                            className="w-8 h-8 object-contain"
                            onError={(e) => {
                              const target = e.currentTarget;
                              target.style.display = 'none';
                              const nextElement = target.nextElementSibling as HTMLElement;
                              if (nextElement) {
                                nextElement.style.display = 'flex';
                              }
                            }}
                          />
                          <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center hidden">
                            <span className="text-gray-600 font-bold text-sm">{brand.name[0]}</span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900 text-sm group-hover:text-yellow-600">{brand.name}</div>
                          <div className="text-xs text-gray-600">Premium kwaliteit</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  
                  <Link href="/shop/brands" className="mt-4 p-3 bg-yellow-600 rounded-lg text-white hover:bg-yellow-700 transition-colors text-center">
                    <div className="font-semibold">Alle merken →</div>
                  </Link>
                </div>
              </div>
            )}

            {/* Service */}
            <div className="col-span-1">
              <div className="h-full flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-purple-600" />
                  Service & Support
                </h3>
                
                <div className="space-y-3 flex-1">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="font-semibold text-gray-900 text-sm">✅ Gratis verzending</div>
                    <div className="text-xs text-gray-600">Binnen 24u</div>
                  </div>
                  
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="font-semibold text-gray-900 text-sm">🛡️ 2 jaar garantie</div>
                    <div className="text-xs text-gray-600">Op alle modellen</div>
                  </div>
                  
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="font-semibold text-gray-900 text-sm">🎧 Expert advies</div>
                    <div className="text-xs text-gray-600">Gratis keuzehulp</div>
                  </div>
                </div>

                <Link href="/contact" className="mt-4 p-3 bg-purple-600 rounded-lg text-white hover:bg-purple-700 transition-colors text-center">
                  <div className="font-semibold">💬 Contact →</div>
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
      <header className="bg-white shadow-xl sticky top-0 z-50 relative" onMouseLeave={() => setActiveMenu(null)}>

        <div className="container">
          <div className="flex h-20 items-center justify-between">
            {/* DailyMove logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="relative">
                      <Zap className="w-5 h-5 text-white" />
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-400 rounded-full flex items-center justify-center animate-pulse">
                    <Eye className="w-2.5 h-2.5 text-white" />
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent tracking-tight">
                    DailyMove
                  </div>
                  <div className="text-sm text-gray-600 font-semibold whitespace-nowrap tracking-wide">For your daily movement</div>
                </div>
              </Link>
            </div>

            {/* Center - Navigation */}
            <div className="hidden lg:flex items-center justify-center flex-1 px-8">
              <nav className="flex items-center space-x-1">
                {navigation.map((item) => (
                  <div 
                    key={item.name} 
                    className="relative"
                    onMouseEnter={() => item.hasMegaMenu && setActiveMenu(item.name)}
                  >
                    <Link
                      href={item.href}
                      className={`group px-5 py-3 rounded-xl transition-all duration-200 flex items-center space-x-2 cursor-pointer ${
                        activeMenu === item.name 
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                          : item.special 
                          ? 'bg-red-100 text-red-600 hover:bg-red-200 hover:text-red-700 border border-red-200'
                          : 'text-gray-700 hover:bg-gradient-to-r hover:from-gray-100 hover:to-blue-50 hover:text-blue-600'
                      }`}
                    >
                      {item.icon && <item.icon className="h-4 w-4 flex-shrink-0" />}
                      <span className="text-base font-bold whitespace-nowrap tracking-wide">{item.name}</span>
                      {item.hasMegaMenu && <ChevronDown className={`h-3 w-3 ml-1 flex-shrink-0 transition-transform duration-200 ${activeMenu === item.name ? 'rotate-180' : ''}`} />}
                    </Link>
                  </div>
                ))}
              </nav>
            </div>

            {/* Right side - Search & Actions */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="hidden md:flex items-center space-x-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Zoek E-steps..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
                  />
                </div>
              </div>

              {/* WhatsApp */}
              <Link 
                href="https://wa.me/31612345678" 
                className="hidden md:flex items-center space-x-2 px-3 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors group"
                title="WhatsApp ons direct"
              >
                <MessageCircle className="h-4 w-4" />
                <span className="text-sm font-medium">WhatsApp</span>
              </Link>

              {/* Cart */}
              <CartDrawer>
                <Button variant="ghost" size="sm" className="relative p-2">
                  <ShoppingCart className="h-5 w-5" />
                  {itemCount > 0 && (
                    <Badge variant="destructive" className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                      {itemCount}
                    </Badge>
                  )}
                </Button>
              </CartDrawer>

              {/* User */}
              <Link 
                href="/account" 
                className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                title="Mijn account"
              >
                <User className="h-5 w-5" />
              </Link>

              {/* Mobile menu */}
              <button className="lg:hidden p-2 text-gray-600 hover:text-blue-600">
                <Menu className="h-5 w-5" />
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2">
              {navigation.map((item) => (
                <div 
                  key={item.name} 
                  className="relative"
                  onMouseEnter={() => item.hasMegaMenu && setActiveMenu(item.name)}
                >
                  <Link
                    href={item.href}
                    className={`px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand border-b-2 ${
                      activeMenu === item.name ? 'border-brand text-brand' : 'border-transparent'
                    } transition-colors flex items-center space-x-2`}
                  >
                    {item.icon && <item.icon className="h-4 w-4" />}
                    <span>{item.name}</span>
                    {item.hasMegaMenu && <ChevronDown className={`h-4 w-4 ml-1 transition-transform duration-200 ${activeMenu === item.name ? 'rotate-180' : ''}`} />}
                  </Link>
                </div>
              ))}
            </nav>

            {/* Center search */}
            <div className="hidden lg:flex flex-1 justify-center px-6">
              <div className="relative w-full max-w-2xl" onFocus={() => setShowSuggest(true)} onBlur={() => setTimeout(() => setShowSuggest(false), 150)}>
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => { setSearchQuery(e.target.value); setActiveIndex(-1) }}
                  onKeyDown={(e) => {
                    if (!showSuggest && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
                      setShowSuggest(true)
                    }
                    if (e.key === 'ArrowDown') {
                      e.preventDefault()
                      if (filtered.length > 0) setActiveIndex((prev) => (prev + 1) % filtered.length)
                    } else if (e.key === 'ArrowUp') {
                      e.preventDefault()
                      if (filtered.length > 0) setActiveIndex((prev) => (prev - 1 + filtered.length) % filtered.length)
                    } else if (e.key === 'Enter') {
                      if (activeIndex >= 0 && filtered[activeIndex]) {
                        router.push(filtered[activeIndex].href)
                        setShowSuggest(false)
                        setActiveIndex(-1)
                      }
                    } else if (e.key === 'Escape') {
                      setShowSuggest(false)
                      setActiveIndex(-1)
                    }
                  }}
                  placeholder="Zoek producten, merken of categorieën"
                  className="w-full px-4 py-2 pl-10 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                {showSuggest && filtered.length > 0 && (
                  <div className="absolute z-50 mt-2 w-full rounded-lg border bg-white shadow-lg overflow-hidden" role="listbox">
                    {filtered.map((s, idx) => (
                      <Link
                        key={s.label}
                        href={s.href}
                        className={`block px-3 py-2 text-sm hover:bg-gray-50 ${idx === activeIndex ? 'bg-gray-100' : ''}`}
                        role="option"
                        aria-selected={idx === activeIndex}
                        onMouseEnter={() => setActiveIndex(idx)}
                        onClick={() => { setShowSuggest(false); setActiveIndex(-1) }}
                      >
                        {s.label}
                      </Link>
                    ))}
                    <div className="px-3 py-2 text-xs text-muted-foreground border-t">Gebruik ↑/↓ en Enter</div>
                  </div>
                )}
              </div>
            </div>

            {/* Right side actions */}
            <div className="ml-auto flex items-center space-x-2">
              <Link href="/contact" className="hidden md:inline-flex items-center px-3 py-2 rounded-md text-sm font-medium border hover:bg-gray-50">Contact</Link>

              {/* Account */}
              <Button variant="ghost" size="icon" className="hidden md:flex text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full">
                <User className="h-5 w-5" />
                <span className="sr-only">Account</span>
              </Button>

              {/* Wishlist */}
              <Button variant="ghost" size="icon" className="hidden md:flex text-gray-600 hover:text-red-500 hover:bg-red-50 rounded-full relative">
                <Heart className="h-5 w-5" />
                <span className="sr-only">Verlanglijst</span>
              </Button>

              {/* Cart */}
              <CartDrawer>
                <Button variant="ghost" size="icon" className="relative text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full">
                  <ShoppingCart className="h-5 w-5" />
                  {itemCount > 0 && (
                    <Badge 
                      className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-gradient-to-r from-blue-600 to-purple-600 border-0 animate-bounce"
                    >
                      {itemCount}
                    </Badge>
                  )}
                  <span className="sr-only">Shopping Cart</span>
                </Button>
              </CartDrawer>

              {/* Mobile menu */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Mega Menu */}
        {activeMenu && renderMegaMenu(activeMenu)}
      </header>
    </>
  )
}
