'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ShoppingCart, Search, Menu, Zap, Star, Heart, User, Bike, Shield, Wrench, Flame, ChevronDown, ArrowRight, Sparkles, Package, Trophy, Gem, HardHat, Eye, Bell, Gift, Clock, Users, TrendingUp, MapPin, Phone, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CartDrawer } from '@/components/cart/cart-drawer'
import { useCart } from '@/components/cart/cart-provider'

const navigation = [
  { name: 'E-steps', href: '/shop/e-steps', icon: Zap, hasMegaMenu: true },
  { name: 'E-bikes', href: '/shop/elektrische-fietsen', icon: Bike },
  { name: 'Accessoires', href: '/shop/accessoires', icon: HardHat },
  { name: 'Onderdelen', href: '/shop/onderdelen', icon: Wrench },
  { name: 'Sale', href: '/sale', icon: Flame, special: true },
]

export function Header() {
  const { state } = useCart()
  const itemCount = state.items.reduce((total, item) => total + item.quantity, 0)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [liveViewers, setLiveViewers] = useState(234)
  const [notifications, setNotifications] = useState(3)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveViewers(prev => prev + Math.floor(Math.random() * 10) - 5)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const renderAdvancedMegaMenu = (menuName: string) => {
    return (
      <div className="absolute top-full left-0 right-0 w-full bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white shadow-2xl py-20 z-50">
        {/* Animated background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.3),transparent_50%),radial-gradient(circle_at_70%_60%,rgba(147,51,234,0.3),transparent_50%)]" />
        
        <div className="relative container">
          <div className="grid grid-cols-12 gap-8">
            
            {/* Mega Product Showcase */}
            <div className="col-span-6">
              <h3 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-8">
                🚀 PREMIUM E-STEPS COLLECTIE
              </h3>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { name: 'Xiaomi Mi 4 Pro', price: '€599', image: '/images/products/xiaomi-scooter-real.jpg', badge: 'HOT' },
                  { name: 'Segway MAX G30LP', price: '€799', image: '/images/products/escooter-1.jpg', badge: 'NEW' },
                  { name: 'Kaabo Mantis 8 Pro', price: '€1.299', image: '/images/products/kaabo-mantis.jpg', badge: 'PRO' },
                  { name: 'Pure Air Pro', price: '€449', image: '/images/products/escooter-2.jpg', badge: 'SALE' },
                ].map((product, index) => (
                  <div key={index} className="group relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity blur-lg" />
                    <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 group-hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
                      <div className="aspect-square bg-gray-700">
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-bold text-white text-sm">{product.name}</h4>
                          <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                            {product.badge}
                          </span>
                        </div>
                        <div className="text-xl font-black text-cyan-400">{product.price}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Advanced Features */}
            <div className="col-span-3">
              <h3 className="text-2xl font-black text-white mb-6">⚡ FEATURES</h3>
              
              <div className="space-y-4">
                {[
                  { icon: Zap, name: 'Smart Features', desc: 'App control & GPS' },
                  { icon: Shield, name: 'Veiligheid', desc: '2 jaar garantie' },
                  { icon: TrendingUp, name: 'Performance', desc: 'Tot 65km bereik' },
                  { icon: Users, name: 'Community', desc: '25K+ members' },
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-4 bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 hover:border-cyan-500/50 transition-colors">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-white">{feature.name}</div>
                      <div className="text-sm text-gray-400">{feature.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Live Stats & CTA */}
            <div className="col-span-3">
              <h3 className="text-2xl font-black text-white mb-6">📊 LIVE STATS</h3>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Eye className="w-4 h-4 text-green-400 animate-pulse" />
                    <span className="text-green-400 font-bold">Live Activity</span>
                  </div>
                  <div className="text-white font-bold text-lg">{liveViewers} mensen online</div>
                  <div className="text-sm text-gray-400">47 verkocht vandaag</div>
                </div>
                
                <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Trophy className="w-4 h-4 text-purple-400" />
                    <span className="text-purple-400 font-bold">Bestseller</span>
                  </div>
                  <div className="text-white font-bold">Xiaomi Mi 4 Pro</div>
                  <div className="text-sm text-gray-400">1.247 reviews • 4.8★</div>
                </div>

                <Button className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-bold py-3 rounded-xl">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Bekijk Collectie
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
      {/* Advanced notification bar */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-2">
        <div className="container">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="font-medium">{liveViewers} live bezoekers</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                <span>47 verkocht vandaag</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 fill-current text-yellow-400" />
                <span>4.9/5 sterren</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-medium">🔥 Flash Sale: Tot 40% korting</span>
              <Clock className="w-4 h-4" />
              <span>Eindigt over 23:41:32</span>
            </div>
          </div>
        </div>
      </div>

      {/* Advanced Header */}
      <header className="bg-white shadow-2xl sticky top-0 z-50 relative border-b-4 border-gradient-to-r from-blue-600 to-purple-600" onMouseLeave={() => setActiveMenu(null)}>
        <div className="container">
          <div className="flex h-24 items-center">
            
            {/* Advanced Logo */}
            <Link href="/" className="flex items-center space-x-4 mr-8">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl opacity-20 blur-xl" />
                <div className="relative w-16 h-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl flex items-center justify-center">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center animate-pulse">
                  <Eye className="w-3 h-3 text-white" />
                </div>
              </div>
              <div>
                <div className="text-3xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  VoltMover
                </div>
                <div className="text-sm text-gray-600 font-medium">Advanced E-mobility Platform</div>
              </div>
            </Link>

            {/* Advanced Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => (
                <div 
                  key={item.name} 
                  className="relative"
                  onMouseEnter={() => item.hasMegaMenu && setActiveMenu(item.name)}
                >
                  <Link
                    href={item.href}
                    className={`group px-6 py-4 rounded-2xl transition-all duration-300 flex items-center space-x-3 ${
                      activeMenu === item.name 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl transform scale-105' 
                        : item.special 
                        ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-red-600 hover:to-pink-600 shadow-lg animate-pulse' 
                        : 'text-gray-700 hover:bg-gradient-to-r hover:from-gray-100 hover:to-blue-50 hover:text-blue-600'
                    }`}
                  >
                    <item.icon className="h-6 w-6" />
                    <span className="font-bold">{item.name}</span>
                    {item.hasMegaMenu && (
                      <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${
                        activeMenu === item.name ? 'rotate-180' : ''
                      }`} />
                    )}
                  </Link>
                </div>
              ))}
            </nav>

            {/* Advanced Search */}
            <div className="hidden lg:flex flex-1 justify-center px-8">
              <div className="relative w-full max-w-2xl">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-30 blur-lg" />
                <div className="relative">
                  <input
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="AI-powered zoeken... Probeer 'snelle E-step voor werk'"
                    className="w-full px-8 py-4 pl-14 bg-white border-2 border-gray-300 rounded-full text-sm focus:outline-none focus:ring-4 focus:ring-purple-500/50 focus:border-purple-500 transition-all duration-300 shadow-lg"
                  />
                  <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-6 w-6 text-gray-400" />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-purple-500" />
                    <span className="text-xs text-purple-600 font-medium">AI</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Advanced Actions */}
            <div className="ml-auto flex items-center space-x-3">
              
              {/* Notifications */}
              <Button variant="ghost" size="icon" className="relative text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-2xl">
                <Bell className="h-6 w-6" />
                {notifications > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-red-500 border-0 animate-bounce">
                    {notifications}
                  </Badge>
                )}
              </Button>

              {/* Live Chat */}
              <Button className="hidden md:flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-2xl font-bold">
                <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse" />
                Live Chat
              </Button>

              {/* Account */}
              <Button variant="ghost" size="icon" className="relative text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-2xl group">
                <User className="h-6 w-6" />
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity blur-lg" />
              </Button>

              {/* Wishlist */}
              <Button variant="ghost" size="icon" className="relative text-gray-600 hover:text-red-500 hover:bg-red-50 rounded-2xl group">
                <Heart className="h-6 w-6" />
                <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity blur-lg" />
              </Button>

              {/* Cart - Advanced */}
              <CartDrawer>
                <Button variant="ghost" size="icon" className="relative text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-2xl group">
                  <ShoppingCart className="h-7 w-7" />
                  {itemCount > 0 && (
                    <Badge className="absolute -top-2 -right-2 h-7 w-7 flex items-center justify-center p-0 text-sm bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 border-0 animate-bounce shadow-lg">
                      {itemCount}
                    </Badge>
                  )}
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity blur-lg" />
                </Button>
              </CartDrawer>
            </div>
          </div>
        </div>

        {/* Advanced Mega Menu */}
        {activeMenu && renderAdvancedMegaMenu(activeMenu)}
      </header>
    </>
  )
}
