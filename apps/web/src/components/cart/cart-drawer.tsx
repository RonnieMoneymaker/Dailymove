'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { X, Plus, Minus, ShoppingBag, Truck, Shield, CreditCard, Tag } from 'lucide-react'
import PaymentLogos from './payment-logos'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useCart } from './cart-provider'
import { formatPrice } from '@/lib/utils'

interface CartDrawerProps {
  children: React.ReactNode
}

export function CartDrawer({ children }: CartDrawerProps) {
  const [isOpen, setIsOpen] = useState(false)
  const { state, removeItem, updateQuantity, getTotalPrice, getTotalItems } = useCart()
  const freeShippingThreshold = 50
  const total = getTotalPrice()
  const progress = Math.min(100, Math.floor((total / freeShippingThreshold) * 100))

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(id)
    } else {
      updateQuantity(id, newQuantity)
    }
  }

  return (
    <>
      <div onClick={() => setIsOpen(true)}>
        {children}
      </div>
      
      {isOpen && (
        <div className="fixed inset-0 z-50">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Drawer */}
          <div className="fixed right-0 top-0 h-full w-full max-w-md bg-background shadow-lg">
            <div className="flex h-full flex-col">
              {/* Header */}
              <div className="flex items-center justify-between border-b p-4">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="h-5 w-5" />
                  <h2 className="text-lg font-semibold">
                    Winkelwagen ({getTotalItems()})
                  </h2>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              
              {/* Content */}
              <div className="flex-1 overflow-y-auto p-4">
                {state.items.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-center">
                    <ShoppingBag className="h-12 w-12 text-muted-foreground mb-4" />
                    <h3 className="text-lg font-medium mb-2">Je winkelwagen is leeg</h3>
                    <p className="text-muted-foreground mb-4">
                      Voeg wat producten toe om te beginnen met winkelen
                    </p>
                    <Button onClick={() => setIsOpen(false)}>
                      Verder winkelen
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {state.items.map((item) => (
                      <div key={item.id} className="flex gap-4 border-b pb-4">
                        <div className="relative h-20 w-20 flex-shrink-0">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="rounded-md object-cover"
                          />
                        </div>
                        
                        <div className="flex-1 space-y-2">
                          <div>
                            <Link 
                              href={`/product/${item.slug}`}
                              className="font-medium hover:underline"
                              onClick={() => setIsOpen(false)}
                            >
                              {item.name}
                            </Link>
                            <p className="text-sm text-muted-foreground">
                              {formatPrice(item.price)}
                            </p>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                              >
                                <Minus className="h-3 w-3" />
                              </Button>
                              <span className="w-8 text-center text-sm">
                                {item.quantity}
                              </span>
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                              >
                                <Plus className="h-3 w-3" />
                              </Button>
                            </div>
                            
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 text-destructive hover:text-destructive"
                              onClick={() => removeItem(item.id)}
                            >
                              <X className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Footer */}
              {state.items.length > 0 && (
                <div className="border-t p-4 space-y-4">
                  {/* Free shipping progress */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Gratis verzending vanaf €{freeShippingThreshold}</span>
                      <span className="font-medium">{progress}%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div
                        className="h-2 rounded-full bg-green-600 transition-all"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                    {total < freeShippingThreshold ? (
                      <div className="text-xs text-muted-foreground">
                        Nog {formatPrice(freeShippingThreshold - total)} tot gratis verzending
                      </div>
                    ) : (
                      <div className="text-xs text-green-700">Je hebt gratis verzending!</div>
                    )}
                  </div>
                  {/* Delivery info */}
                  <div className="flex items-center gap-2 text-sm text-green-700 bg-green-50 border border-green-200 rounded-md px-3 py-2">
                    <Truck className="h-4 w-4" /> Voor 23:59 besteld, morgen in huis
                  </div>

                  {/* Coupon */}
                  <div className="flex items-center gap-2">
                    <div className="relative flex-1">
                      <Tag className="h-4 w-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="Kortingscode"
                        className="w-full pl-9 pr-3 py-2 border rounded-md text-sm"
                      />
                    </div>
                    <Button variant="outline">Toepassen</Button>
                  </div>

                  {/* Total */}
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Totaal:</span>
                    <span>{formatPrice(getTotalPrice())}</span>
                  </div>

                  {/* Actions */}
                  <div className="space-y-2">
                    <Button className="w-full" size="lg" onClick={() => {
                      // basic event hook; GA snippet is in layout
                      try { (window as any).gtag?.('event', 'begin_checkout') } catch {}
                    }}>
                      <Link href="/checkout" onClick={() => setIsOpen(false)}>
                        Naar kassa
                      </Link>
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Link href="/cart" onClick={() => setIsOpen(false)}>
                        Winkelwagen bekijken
                      </Link>
                    </Button>
                  </div>

                  {/* Trust */}
                  <div className="grid grid-cols-3 gap-3 text-center pt-2">
                    <div className="text-xs text-muted-foreground flex flex-col items-center gap-1">
                      <Shield className="h-4 w-4" /> 2 jaar garantie
                    </div>
                    <div className="text-xs text-muted-foreground flex flex-col items-center gap-1">
                      <CreditCard className="h-4 w-4" /> Veilige betaling
                    </div>
                    <div className="text-xs text-muted-foreground flex flex-col items-center gap-1">
                      <Truck className="h-4 w-4" /> Gratis verzending
                    </div>
                  </div>
                  <div className="pt-3">
                    <PaymentLogos size="sm" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
