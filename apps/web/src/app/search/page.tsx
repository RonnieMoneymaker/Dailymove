import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

type SearchParams = {
  q?: string | string[]
}

interface ProductItem {
  id: string
  name: string
  slug: string
  price: number
  image: string
}

const allProducts: ProductItem[] = [
  { id: '1', name: 'Xiaomi Mi Electric Scooter 4 Pro', slug: 'xiaomi-mi-electric-scooter-4-pro', price: 599, image: '/images/products/xiaomi-scooter-real.jpg' },
  { id: '2', name: 'Segway Ninebot MAX G30LP', slug: 'segway-ninebot-max-g30lp', price: 799, image: '/images/products/escooter-1.jpg' },
  { id: '3', name: 'Kaabo Mantis 8 Pro', slug: 'kaabo-mantis-8-pro', price: 1299, image: '/images/products/kaabo-mantis.jpg' },
]

export default function SearchPage({ searchParams }: { searchParams: SearchParams }) {
  const qRaw = searchParams.q
  const q = Array.isArray(qRaw) ? qRaw[0] : (qRaw ?? '')
  const query = q.toLowerCase()

  const results = query
    ? allProducts.filter(p => p.name.toLowerCase().includes(query))
    : []

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Zoekresultaten</h1>
      {q && (
        <p className="text-sm text-muted-foreground mb-6">
          {results.length} resultaat{results.length !== 1 ? 'en' : ''} voor "{q}"
        </p>
      )}

      {(!q || results.length === 0) && (
        <div className="text-muted-foreground">
          <p>Geen resultaten gevonden. Probeer een andere zoekterm.</p>
        </div>
      )}

      {results.length > 0 && (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {results.map((product) => (
            <Link key={product.id} href={`/product/${product.slug}`}>
              <Card className="group overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <Image src={product.image} alt={product.name} fill className="object-cover transition-transform group-hover:scale-105" />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">{product.name}</h3>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button className="w-full">Bekijk product</Button>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}


