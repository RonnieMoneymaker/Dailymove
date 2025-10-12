'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Star, ShoppingCart, Heart, Scale } from 'lucide-react'
import { formatPrice } from '@/lib/utils'
import { useCart } from '@/components/cart/cart-provider'

interface Product {
  id: string
  name: string
  slug: string
  price: number
  comparePrice?: number
  image: string
  rating: number
  reviewCount: number
  inStock: boolean
  badge?: string | null
  features: string[]
}

interface ProductGridProps {
  products: Product[]
}

function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      slug: product.slug,
    })
    try { (window as any).gtag?.('event', 'add_to_cart', { item_id: product.id, value: product.price, currency: 'EUR' }) } catch {}
  }

  return (
    <Link href={`/product/${product.slug}`}>
      <Card className="group overflow-hidden transition-shadow hover:shadow-md">
        <div className="relative">
          <div className="relative h-64 overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            {/* Quick actions */}
            <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="p-2 rounded-full bg-white/90 shadow hover:bg-white" aria-label="Vergelijken">
                <Scale className="h-4 w-4" />
              </button>
              <button className="p-2 rounded-full bg-white/90 shadow hover:bg-white" aria-label="Wishlist">
                <Heart className="h-4 w-4" />
              </button>
            </div>
            {product.badge && (
              <Badge 
                variant={product.badge === 'Uitverkocht' ? 'destructive' : 'default'}
                className="absolute top-3 left-3"
              >
                {product.badge}
              </Badge>
            )}
            {product.comparePrice && (
              <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">
                -{Math.round(((product.comparePrice - product.price) / product.comparePrice) * 100)}%
              </div>
            )}
          </div>
        </div>
        
        <CardContent className="p-4">
          <h3 className="font-semibold mb-2 line-clamp-2 group-hover:text-brand transition-colors">
            {product.name}
          </h3>
          
          <div className="flex items-center gap-2 mb-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(product.rating)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              {product.rating} ({product.reviewCount})
            </span>
          </div>
          <div className="text-sm text-green-600 mb-3">Morgen in huis • {product.inStock ? 'Op voorraad' : 'Niet op voorraad'}</div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-extrabold text-gray-900">{formatPrice(product.price)}</span>
                {product.comparePrice && (
                  <span className="text-sm text-muted-foreground line-through">
                    {formatPrice(product.comparePrice)}
                  </span>
                )}
              </div>
            </div>
            
            <div className="flex flex-wrap gap-1">
              {product.features.slice(0, 2).map((feature, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {feature}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="p-4 pt-0">
          <Button 
            className="w-full" 
            disabled={!product.inStock}
            onClick={handleAddToCart}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            {product.inStock ? 'Snel toevoegen' : 'Niet op voorraad'}
          </Button>
        </CardFooter>
      </Card>
    </Link>
  )
}

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Alle producten</h2>
          <p className="text-muted-foreground">{products.length} producten gevonden</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Sorteren op:</span>
          <select className="rounded-md border border-input bg-background px-3 py-2 text-sm">
            <option value="popularity">Populariteit</option>
            <option value="price-low">Prijs: laag naar hoog</option>
            <option value="price-high">Prijs: hoog naar laag</option>
            <option value="rating">Beoordeling</option>
            <option value="newest">Nieuwste</option>
          </select>
        </div>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
