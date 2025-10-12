'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Star, ShoppingCart, Heart, Share2, Truck, Shield, RotateCcw } from 'lucide-react'
import { PaymentLogos } from '@/components/cart/payment-logos'
import { formatPrice } from '@/lib/utils'
import { useCart } from '@/components/cart/cart-provider'

interface Product {
  id: string
  name: string
  slug: string
  description: string
  longDescription: string
  price: number
  comparePrice?: number
  sku: string
  stock: number
  inStock: boolean
  features: string[]
  specifications: Record<string, string>
  rating: number
  reviewCount: number
}

interface ProductDetailsProps {
  product: Product
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useCart()

  const handleAddToCart = () => {
    try { (window as any).gtag?.('event', 'add_to_cart', { item_id: product.id, value: product.price, currency: 'EUR' }) } catch {}
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        slug: product.slug,
      })
    }
  }

  return (
    <div className="space-y-6">
      {/* Product info */}
      <div>
        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
        
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${
                  i < Math.floor(product.rating)
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-muted-foreground">
            {product.rating} ({product.reviewCount} beoordelingen)
          </span>
        </div>
        
        <p className="text-muted-foreground mb-4">{product.description}</p>
        
        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="text-3xl font-bold">{formatPrice(product.price)}</span>
            {product.comparePrice && (
              <span className="text-lg text-muted-foreground line-through">
                {formatPrice(product.comparePrice)}
              </span>
            )}
          </div>
          {product.comparePrice && (
            <Badge variant="destructive">
              -{Math.round(((product.comparePrice - product.price) / product.comparePrice) * 100)}%
            </Badge>
          )}
        </div>

        {/* Payment & trust right below price */}
        <div className="flex items-center gap-4 mb-6">
          <PaymentLogos size="md" />
          <div className="text-sm text-muted-foreground">
            Veilig betalen • iDEAL / Creditcard / PayPal
          </div>
        </div>
      </div>
      
      {/* Quantity and add to cart */}
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <label htmlFor="quantity" className="text-sm font-medium">
              Aantal:
            </label>
            <select
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="rounded-md border border-input bg-background px-3 py-2 text-sm"
            >
              {[...Array(Math.min(product.stock, 10))].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>
          <div className="text-sm text-muted-foreground">
            {product.stock} op voorraad
          </div>
        </div>
        
        <div className="flex gap-3" id="add-to-cart">
          <Button 
            className="flex-1" 
            size="lg"
            disabled={!product.inStock}
            onClick={handleAddToCart}
          >
            <ShoppingCart className="h-5 w-5 mr-2" />
            {product.inStock ? 'Toevoegen aan winkelwagen' : 'Niet op voorraad'}
          </Button>
          <Button variant="outline" size="lg">
            <Heart className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="lg">
            <Share2 className="h-5 w-5" />
          </Button>
        </div>
      </div>
      
      {/* Features */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Belangrijkste features</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="grid grid-cols-2 gap-2">
            {product.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
      
      {/* Specifications */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Specificaties</CardTitle>
        </CardHeader>
        <CardContent>
          <dl className="space-y-2">
            {Object.entries(product.specifications).map(([key, value]) => (
              <div key={key} className="flex justify-between py-2 border-b last:border-b-0">
                <dt className="font-medium text-muted-foreground">{key}</dt>
                <dd className="font-medium">{value}</dd>
              </div>
            ))}
          </dl>
        </CardContent>
      </Card>
      
      {/* Trust elements */}
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center p-4 border rounded-lg">
          <Truck className="h-6 w-6 mx-auto mb-2 text-primary" />
          <p className="text-sm font-medium">Gratis verzending</p>
          <p className="text-xs text-muted-foreground">Vanaf €50</p>
        </div>
        <div className="text-center p-4 border rounded-lg">
          <Shield className="h-6 w-6 mx-auto mb-2 text-primary" />
          <p className="text-sm font-medium">2 jaar garantie</p>
          <p className="text-xs text-muted-foreground">Op alle producten</p>
        </div>
        <div className="text-center p-4 border rounded-lg">
          <RotateCcw className="h-6 w-6 mx-auto mb-2 text-primary" />
          <p className="text-sm font-medium">30 dagen retour</p>
          <p className="text-xs text-muted-foreground">Niet goed, geld terug</p>
        </div>
      </div>
    </div>
  )
}
