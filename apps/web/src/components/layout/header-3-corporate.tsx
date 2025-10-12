'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ShoppingCart, Search, Menu, Zap, Star, Heart, User, Bike, Shield, Wrench, Flame, ChevronDown, TrendingUp, Award, Clock, Phone, Mail, MapPin, Building2, Users, CheckCircle, Package, Trophy, Gem, HardHat } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CartDrawer } from '@/components/cart/cart-drawer'
import { useCart } from '@/components/cart/cart-provider'

const corporateMegaMenu = {
  'E-steps': {
    categories: [
      { name: 'Budget E-steps', href: '/shop/e-steps/budget', description: 'Vanaf €299', count: '25+ modellen' },
      { name: 'Standaard E-steps', href: '/shop/e-steps/standard', description: '€400-€600', count: '40+ modellen' },
      { name: 'Premium E-steps', href: '/shop/e-steps/premium', description: 'Vanaf €600', count: '35+ modellen' },
      { name: 'Off-road E-steps', href: '/shop/e-steps/offroad', description: 'Voor elk terrein', count: '20+ modellen' },
    ],
    brands: [
      { name: 'Xiaomi', href: '/brands/xiaomi', description: 'Meest populair', count: '40+ modellen' },
      { name: 'Segway', href: '/brands/segway', description: 'Premium kwaliteit', count: '25+ modellen' },
      { name: 'Kaabo', href: '/brands/kaabo', description: 'High-performance', count: '15+ modellen' },
      { name: 'Pure', href: '/brands/pure', description: 'Design & functie', count: '12+ modellen' },
    ],
    featured: [
      { name: 'Xiaomi Mi Electric Scooter 4 Pro', href: '/product/xiaomi-4-pro', price: '€599', badge: 'Bestseller' },
      { name: 'Segway Ninebot MAX G30LP', href: '/product/segway-max', price: '€799', badge: 'Premium' },
      { name: 'Kaabo Mantis 8 Pro', href: '/product/kaabo-mantis', price: '€1.299', badge: 'Pro' },
    ]
  },
  'E-bikes': {
    categories: [
      { name: 'Stadsfietsen', href: '/shop/ebikes/stad', description: 'Voor dagelijks gebruik', count: '30+ modellen' },
      { name: 'Mountainbikes', href: '/shop/ebikes/mountain', description: 'Voor avontuur', count: '25+ modellen' },
      { name: 'Transportfietsen', href: '/shop/ebikes/transport', description: 'Voor gezinnen', count: '20+ modellen' },
      { name: 'Vouwfietsen', href: '/shop/ebikes/vouw', description: 'Compact & praktisch', count: '10+ modellen' },
    ],
    brands: [
      { name: 'VanMoof', href: '/brands/vanmoof', description: 'Nederlandse innovatie', count: '8+ modellen' },
      { name: 'Gazelle', href: '/brands/gazelle', description: 'Traditionele kwaliteit', count: '15+ modellen' },
      { name: 'Batavus', href: '/brands/batavus', description: 'Betrouwbaar', count: '12+ modellen' },
      { name: 'Sparta', href: '/brands/sparta', description: 'Nederlandse traditie', count: '10+ modellen' },
    ]
  },
  'Accessoires': {
    categories: [
      { name: 'Helmen', href: '/shop/accessoires/helmen', description: 'Veiligheid eerst', count: '50+ modellen' },
      { name: 'Sloten', href: '/shop/accessoires/sloten', description: 'Beveiliging', count: '30+ modellen' },
      { name: 'Verlichting', href: '/shop/accessoires/verlichting', description: 'LED & meer', count: '40+ modellen' },
      { name: 'Tassen & Koffers', href: '/shop/accessoires/tassen', description: 'Transport', count: '25+ modellen' },
      { name: 'Telefoonhouders', href: '/shop/accessoires/telefoon', description: 'Navigatie', count: '15+ modellen' },
      { name: 'Regenkleding', href: '/shop/accessoires/regen', description: 'Weer bescherming', count: '20+ modellen' },
    ]
  }
}

const navigation = [
  { 
    name: 'E-steps', 
    href: '/shop/e-steps', 
    icon: Zap,
    hasMegaMenu: true
  },
  { 
    name: 'Elektrische Fietsen', 
    href: '/shop/elektrische-fietsen',
    icon: Bike,
    hasMegaMenu: true
  },
  { 
    name: 'Accessoires', 
    href: '/shop/accessoires',
    icon: HardHat,
    hasMegaMenu: true
  },
  { 
    name: 'Onderdelen', 
    href: '/shop/onderdelen',
    icon: Wrench
  },
  { 
    name: 'Sale', 
    href: '/sale', 
    icon: Flame,
    special: true
  },
]

export function Header() {
  const { state } = useCart()
  const itemCount = state.items.reduce((total, item) => total + item.quantity, 0)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)

  const renderCorporateMegaMenu = (menuName: string) => {
    const menuData = corporateMegaMenu[menuName as keyof typeof corporateMegaMenu]
    if (!menuData) return null

    return (
      <div className="absolute top-full left-0 right-0 w-full bg-white shadow-2xl border-t-4 border-blue-600 py-12 z-50">
        <div className="container">
          <div className="grid grid-cols-12 gap-8">
            
            {/* Categories */}
            <div className="col-span-4">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Building2 className="h-6 w-6 text-blue-600" />
                Categorieën
              </h3>
              <div className="space-y-4">
                {menuData.categories.map((category, index) => (
                  <Link 
                    key={index}
                    href={category.href}
                    className="block p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 group"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {category.name}
                        </div>
                        <div className="text-sm text-gray-600">{category.description}</div>
                      </div>
                      <div className="text-xs text-gray-500 font-medium bg-gray-100 px-2 py-1 rounded-full">
                        {category.count}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Brands */}
            <div className="col-span-3">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Award className="h-6 w-6 text-purple-600" />
                Topmerken
              </h3>
              <div className="space-y-3">
                {menuData.brands.map((brand, index) => (
                  <Link 
                    key={index}
                    href={brand.href}
                    className="block p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <div className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors">
                      {brand.name}
                    </div>
                    <div className="text-sm text-gray-600">{brand.description}</div>
                    <div className="text-xs text-gray-500 mt-1">{brand.count}</div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Featured Products */}
            {menuData.featured && (
              <div className="col-span-3">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Trophy className="h-6 w-6 text-orange-600" />
                  Featured
                </h3>
                <div className="space-y-4">
                  {menuData.featured.map((product, index) => (
                    <Link 
                      key={index}
                      href={product.href}
                      className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-orange-300 hover:bg-orange-50 transition-all duration-200 group"
                    >
                      <div className="w-12 h-12 bg-gray-100 rounded-lg" />
                      <div className="flex-1">
                        <div className="font-medium text-gray-900 group-hover:text-orange-600 transition-colors text-sm">
                          {product.name}
                        </div>
                        <div className="text-lg font-bold text-gray-900">{product.price}</div>
                      </div>
                      <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full font-medium">
                        {product.badge}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Service Info */}
            <div className="col-span-2">
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Users className="h-5 w-5 text-blue-600" />
                  VoltMover Service
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Gratis advies & support</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>2 jaar volledige garantie</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Gratis verzending vanaf €50</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>50+ service locaties</span>
                  </div>
                </div>
                
                <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                  Contact opnemen
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Corporate top bar */}
      <div className="bg-gray-800 text-white">
        <div className="container">
          <div className="flex items-center justify-between py-2 text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>020-123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@voltmover.nl</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>50+ vestigingen</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-green-400">✓ Gratis verzending vanaf €50</span>
              <span className="text-blue-400">✓ 2 jaar garantie</span>
              <span className="text-purple-400">✓ 30 dagen retour</span>
            </div>
          </div>
        </div>
      </div>

      <header className="bg-white shadow-lg border-b sticky top-0 z-50 relative" onMouseLeave={() => setActiveMenu(null)}>
        <div className="container">
          <div className="flex h-20 items-center">
            {/* Professional logo */}
            <Link href="/" className="flex items-center space-x-4 mr-8">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">VoltMover</div>
                <div className="text-xs text-gray-600 uppercase tracking-wide">E-Mobility Specialist</div>
              </div>
            </Link>

            {/* Professional Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => (
                <div 
                  key={item.name} 
                  className="relative"
                  onMouseEnter={() => item.hasMegaMenu && setActiveMenu(item.name)}
                >
                  <Link
                    href={item.href}
                    className={`px-6 py-4 text-sm font-semibold transition-all duration-200 flex items-center space-x-2 ${
                      activeMenu === item.name 
                        ? 'text-blue-600 border-b-2 border-blue-600' 
                        : item.special 
                        ? 'text-red-600 bg-red-50 rounded-lg hover:bg-red-100' 
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg'
                    }`}
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.name}</span>
                    {item.hasMegaMenu && (
                      <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                        activeMenu === item.name ? 'rotate-180' : ''
                      }`} />
                    )}
                  </Link>
                </div>
              ))}
            </nav>

            {/* Professional Search */}
            <div className="hidden lg:flex flex-1 justify-center px-8">
              <div className="relative w-full max-w-xl">
                <input
                  type="search"
                  placeholder="Zoek producten, merken of categorieën..."
                  className="w-full px-4 py-3 pl-12 bg-gray-50 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* Professional Actions */}
            <div className="ml-auto flex items-center space-x-4">
              <Link href="/contact" className="hidden md:inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
                Contact
              </Link>

              <Button variant="ghost" size="icon" className="text-gray-600 hover:text-blue-600 hover:bg-blue-50">
                <User className="h-6 w-6" />
              </Button>

              <Button variant="ghost" size="icon" className="text-gray-600 hover:text-red-500 hover:bg-red-50 relative">
                <Heart className="h-6 w-6" />
              </Button>

              <CartDrawer>
                <Button variant="ghost" size="icon" className="relative text-gray-600 hover:text-blue-600 hover:bg-blue-50">
                  <ShoppingCart className="h-6 w-6" />
                  {itemCount > 0 && (
                    <Badge className="absolute -top-2 -right-2 h-6 w-6 flex items-center justify-center p-0 text-xs bg-blue-600 border-0">
                      {itemCount}
                    </Badge>
                  )}
                </Button>
              </CartDrawer>

              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-gray-600 hover:text-blue-600"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>

        {/* Corporate Mega Menu */}
        {activeMenu && renderCorporateMegaMenu(activeMenu)}
      </header>
    </>
  )
}
