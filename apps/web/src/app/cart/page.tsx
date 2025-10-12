'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useCart } from '@/components/cart/cart-provider'
import { formatPrice } from '@/lib/utils'
import PaymentLogos from '@/components/cart/payment-logos'

export const dynamic = 'force-dynamic'

export default function CartPage() {
  const { state, removeItem, updateQuantity, getTotalPrice } = useCart()

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-6">Winkelwagen</h1>
      {state.items.length === 0 ? (
        <div className="text-muted-foreground">Je winkelwagen is leeg.</div>
      ) : (
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-4">
            {state.items.map((item) => (
              <div key={item.id} className="flex items-center gap-4 border rounded-xl p-4 bg-white">
                <div className="relative h-20 w-20 flex-shrink-0 rounded-md overflow-hidden">
                  <Image src={item.image} alt={item.name} fill className="object-cover" />
                </div>
                <div className="flex-1">
                  <Link href={`/product/${item.slug}`} className="font-medium hover:underline">{item.name}</Link>
                  <div className="text-sm text-muted-foreground">{formatPrice(item.price)}</div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}>-</Button>
                  <span className="w-6 text-center">{item.quantity}</span>
                  <Button variant="outline" size="sm" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</Button>
                </div>
                <Button variant="ghost" onClick={() => removeItem(item.id)}>Verwijder</Button>
              </div>
            ))}
          </div>
          <div className="border rounded-xl p-6 bg-white h-fit sticky top-24">
            <div className="flex justify-between mb-2">
              <span className="text-muted-foreground">Subtotaal</span>
              <span>{formatPrice(getTotalPrice())}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="text-muted-foreground">Verzending</span>
              <span>Berekenen bij afrekenen</span>
            </div>
            <Button className="w-full" size="lg" asChild>
              <Link href="/checkout">Verder naar afrekenen</Link>
            </Button>
            <div className="mt-3">
              <PaymentLogos size="sm" />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}


