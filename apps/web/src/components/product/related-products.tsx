"use client"
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Star, ShoppingCart } from 'lucide-react'
import { formatPrice } from '@/lib/utils'
// Removed cart actions to avoid client hook execution issues in this leaf

interface RelatedProduct {
  id: string
  name: string
  slug: string
  price: number
  image: string
  rating: number
  reviewCount: number
}

interface RelatedProductsProps {
  products: RelatedProduct[]
}

function RelatedProductCard({ product }: { product: RelatedProduct }) {

  return (
    <Link href={`/product/${product.slug}`}>
      <Card className="group overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
        
        <CardContent className="p-4">
          <h3 className="font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          
          <div className="flex items-center gap-2 mb-3">
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
          
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold">{formatPrice(product.price)}</span>
          </div>
        </CardContent>
        
        <CardFooter className="p-4 pt-0">
          <Button className="w-full">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Bekijk product
          </Button>
        </CardFooter>
      </Card>
    </Link>
  )
}

export function RelatedProducts({ products }: RelatedProductsProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Gerelateerde producten</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <RelatedProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default RelatedProducts
