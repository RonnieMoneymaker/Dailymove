import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'

const categories = [
  {
    name: 'E-steps',
    slug: 'e-steps',
    description: 'Snelle en wendbare E-steps voor dagelijks gebruik',
    image: '/images/categories/escooter.jpg',
    productCount: 12,
  },
  {
    name: 'Elektrische Fietsen',
    slug: 'elektrische-fietsen',
    description: 'Comfortabele e-bikes voor lange ritten',
    image: '/images/categories/ebike2.jpg',
    productCount: 8,
  },
  {
    name: 'Accessoires',
    slug: 'accessoires',
    description: 'Helmen, kleding en andere essentiële accessoires',
    image: '/images/categories/helmet.jpg',
    productCount: 25,
  },
  {
    name: 'Onderdelen',
    slug: 'onderdelen',
    description: 'Onderdelen en onderhoud voor je elektrische voertuig',
    image: '/images/categories/tools.jpg',
    productCount: 15,
  },
]

export function Categories() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight lg:text-4xl mb-4">
            Ontdek onze categorieën
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Van E-steps tot elektrische fietsen, wij hebben alles wat je nodig hebt 
            voor je elektrische mobiliteit.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link key={category.slug} href={`/shop/${category.slug}`}>
              <Card className="group overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-semibold mb-1">{category.name}</h3>
                    <p className="text-sm opacity-90">{category.productCount} producten</p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground mb-3">
                    {category.description}
                  </p>
                  <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                    <span>Bekijk categorie</span>
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
