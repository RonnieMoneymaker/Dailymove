'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ShoppingCart, Search, Menu, User, Phone, Mail, MapPin, ChevronDown, Building2, Users, Headphones } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CartDrawer } from '@/components/cart/cart-drawer'
import { useCart } from '@/components/cart/cart-provider'

export function CorporateHeader() {
  const { state } = useCart()
  const itemCount = state.items.reduce((total, item) => total + item.quantity, 0)

  return (
    <>
      {/* Corporate service bar */}
      <div className="bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-2 text-sm">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>Klantenservice: 020-123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@dailymove.nl</span>
              </div>
              <div className="flex items-center space-x-2">
                <Building2 className="h-4 w-4" />
                <span>50+ vestigingen</span>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <span>✓ Gratis verzending vanaf €50</span>
              <span>✓ 2 jaar garantie</span>
              <span>✓ 30 dagen retour</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main corporate header */}
      <header className="bg-white shadow-md border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Corporate logo */}
            <Link href="/" className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-2xl">D</span>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">DailyMove</div>
                <div className="text-sm text-gray-600 font-medium">E-step & E-bike Specialist</div>
              </div>
            </Link>

            {/* Corporate navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <div className="relative group">
                <Button variant="ghost" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium">
                  <span>E-steps</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
                {/* Dropdown would go here */}
              </div>
              
              <Link href="/elektrische-fietsen" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Elektrische Fietsen
              </Link>
              
              <Link href="/accessoires" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Accessoires
              </Link>
              
              <Link href="/zakelijk" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Zakelijk
              </Link>
              
              <Link href="/service" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Service
              </Link>
              
              <Badge className="bg-red-600 text-white font-bold px-3 py-1 hover:bg-red-700 cursor-pointer">
                SALE
              </Badge>
            </nav>

            {/* Corporate search and actions */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="hidden md:flex relative">
                <input
                  type="search"
                  placeholder="Zoek producten..."
                  className="w-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>

              {/* Actions */}
              <Button variant="ghost" size="icon" className="text-gray-600 hover:text-blue-600">
                <User className="h-5 w-5" />
              </Button>

              <CartDrawer>
                <Button variant="ghost" size="icon" className="relative text-gray-600 hover:text-blue-600">
                  <ShoppingCart className="h-5 w-5" />
                  {itemCount > 0 && (
                    <Badge className="absolute -top-1 -right-1 h-5 w-5 bg-blue-600 text-white text-xs">
                      {itemCount}
                    </Badge>
                  )}
                </Button>
              </CartDrawer>

              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
