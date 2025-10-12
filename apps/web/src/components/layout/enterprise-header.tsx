'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ShoppingCart, Search, Menu, User, Heart, Phone, Mail, MapPin, ChevronDown, Zap, Shield, Truck, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CartDrawer } from '@/components/cart/cart-drawer'
import { useCart } from '@/components/cart/cart-provider'
import { brand } from '@/config/brand'
import { mainMenu } from '@/config/menus'
import { SearchAutocomplete } from './search-autocomplete'
import { site } from '@/config/site'

export function EnterpriseHeader() {
  const { state } = useCart()
  const itemCount = state.items.reduce((total, item) => total + item.quantity, 0)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)

  return (
    <>
      {/* Top corporate bar */}
      <div className="bg-gray-900 text-white">
        <div className="container py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>Klantenservice: {site.contact.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>{site.contact.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>50+ winkels in Nederland</span>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span>4.9/5 - 15.000+ reviews</span>
              </div>
              <div className="flex items-center space-x-2 text-green-400">
                <Truck className="h-4 w-4" />
                <span>Gratis verzending vanaf €50</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main enterprise header */}
      <header className="bg-white shadow-lg border-b-2 border-blue-600 sticky top-0 z-50 relative">
        <div className="container">
          <div className="flex items-center justify-between h-20">
            {/* Corporate logo */}
            <Link href="/" className="flex items-center space-x-3" aria-label={brand.name}>
              <div className="h-10 w-auto relative">
                <Image src={brand.wordmarkSrc} alt={brand.name} width={160} height={40} priority />
              </div>
              <span className="hidden md:inline-block text-xs font-semibold tracking-wide text-blue-700 uppercase">
                E-step specialist
              </span>
            </Link>

            {/* Enterprise navigation */}
            <nav className="hidden lg:flex items-center space-x-6" role="navigation" aria-label="Hoofdmenu">
              {mainMenu.map((item) => (
                <div
                  key={item.key}
                  className="relative"
                  onMouseEnter={() => setActiveMenu(item.key)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <Link
                    href={item.href || '#'}
                    className="flex items-center space-x-2 px-3 py-3 text-gray-800 hover:text-blue-600 font-semibold transition-colors"
                  >
                    <span>{item.label}</span>
                    {item.panel && (
                      <ChevronDown className={`h-4 w-4 transition-transform ${activeMenu === item.key ? 'rotate-180' : ''}`} />
                    )}
                  </Link>
                  {item.panel && activeMenu === item.key && (
                    <div className="absolute left-0 top-full w-[720px] bg-white shadow-2xl rounded-xl border mt-2 p-6">
                      <div className="grid grid-cols-3 gap-6">
                        <div>
                          <div className="text-xs font-semibold text-gray-500 uppercase mb-3">Categorieën</div>
                          <ul className="space-y-2 text-sm">
                            {item.panel.categories?.map((c) => (
                              <li key={c.href}><Link href={c.href} className="hover:text-blue-600">{c.label}</Link></li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-gray-500 uppercase mb-3">Merken</div>
                          <ul className="space-y-2 text-sm">
                            {item.panel.brands?.map((b) => (
                              <li key={b.href}><Link href={b.href} className="hover:text-blue-600">{b.label}</Link></li>
                            ))}
                          </ul>
                          <div className="text-xs font-semibold text-gray-500 uppercase mt-4 mb-2">Vergelijkingen</div>
                          <ul className="space-y-2 text-sm">
                            {item.panel.comparisons?.map((cmp) => (
                              <li key={cmp.href}><Link href={cmp.href} className="hover:text-blue-600">{cmp.label}</Link></li>
                            ))}
                          </ul>
                        </div>
                        <div className="relative h-32 rounded-lg overflow-hidden border">
                          {item.panel.promoImage && (
                            <Image src={item.panel.promoImage} alt={item.label} fill className="object-cover" />
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                          <div className="absolute bottom-2 left-2 text-white text-sm font-semibold">Flash deals tot -30%</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Enterprise search and actions */}
            <div className="flex items-center space-x-4">
              {/* Professional search */}
              <div className="hidden md:flex relative">
                <SearchAutocomplete items={[
                  { label: 'Xiaomi Mi Electric Scooter 4 Pro', href: '/product/xiaomi-mi-electric-scooter-4-pro', type: 'product' },
                  { label: 'Segway Ninebot MAX', href: '/shop/e-steps', type: 'category' },
                  { label: 'Kaabo', href: '/brands/kaabo', type: 'brand' },
                ]} />
              </div>

              {/* Enterprise actions */}
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="icon" className="relative text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl">
                  <User className="h-6 w-6" />
                </Button>
                
                <Button variant="ghost" size="icon" className="relative text-gray-600 hover:text-red-500 hover:bg-red-50 rounded-xl">
                  <Heart className="h-6 w-6" />
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 text-white text-xs">3</Badge>
                </Button>

                <CartDrawer>
                  <Button variant="ghost" size="icon" className="relative text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl">
                    <ShoppingCart className="h-6 w-6" />
                    {itemCount > 0 && (
                      <Badge className="absolute -top-1 -right-1 h-6 w-6 bg-blue-600 text-white font-bold animate-pulse">
                        {itemCount}
                      </Badge>
                    )}
                  </Button>
                </CartDrawer>
              </div>
            </div>
          </div>
        </div>

        {/* Enterprise trust bar */}
        <div className="bg-blue-50 border-t border-blue-100">
          <div className="container py-3">
            <div className="flex items-center justify-center space-x-12 text-sm">
              <div className="flex items-center space-x-2 text-green-700 font-medium">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>✓ Gratis verzending vanaf €50</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-700 font-medium">
                <Shield className="h-4 w-4" />
                <span>✓ 2 jaar garantie op alles</span>
              </div>
              <div className="flex items-center space-x-2 text-purple-700 font-medium">
                <Truck className="h-4 w-4" />
                <span>✓ Morgen in huis (voor 23:59 besteld)</span>
              </div>
              <div className="flex items-center space-x-2 text-orange-700 font-medium">
                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                <span>✓ 4.9/5 sterren - 15.000+ klanten</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
