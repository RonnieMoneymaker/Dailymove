"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { formatPrice } from '@/lib/utils'

const products = [
  {
    id: '1',
    name: 'Xiaomi Mi Electric Scooter 4 Pro',
    slug: 'xiaomi-mi-electric-scooter-4-pro',
    price: 599,
    comparePrice: 699,
    image: '/images/products/xiaomi-scooter-real.jpg',
  },
  {
    id: '2',
    name: 'Segway Ninebot MAX G30LP',
    slug: 'segway-ninebot-max-g30lp',
    price: 799,
    comparePrice: 899,
    image: '/images/products/escooter-1.jpg',
  },
  {
    id: '3',
    name: 'Kaabo Mantis 8 Pro',
    slug: 'kaabo-mantis-8-pro',
    price: 1299,
    comparePrice: 1499,
    image: '/images/products/kaabo-mantis.jpg',
  },
  {
    id: '4',
    name: 'Pure Air Pro',
    slug: 'pure-air-pro',
    price: 449,
    comparePrice: 549,
    image: '/images/products/escooter-2.jpg',
  },
  {
    id: '5',
    name: 'Ninebot KickScooter E25E',
    slug: 'ninebot-e25e',
    price: 399,
    comparePrice: 499,
    image: '/images/lifestyle/modern-escooter.jpg',
  },
  {
    id: '6',
    name: 'Razor E Prime III',
    slug: 'razor-e-prime-3',
    price: 329,
    comparePrice: 399,
    image: '/images/lifestyle/urban-mobility.jpg',
  },
]

export function SimpleFeatured() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Populaire producten
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ontdek onze meest geliefde E-steps en E-bikes, gekozen door duizenden tevreden klanten.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <Link key={p.id} href={`/product/${p.slug}`} className="group">
              <div className="card p-0 overflow-hidden h-full">
                <div className="relative h-64 bg-secondary">
                  <Image 
                    src={p.image} 
                    alt={p.name} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                  {p.comparePrice && (
                    <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Bespaar €{p.comparePrice - p.price}
                    </div>
                  )}
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {p.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {p.comparePrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          {formatPrice(p.comparePrice)}
                        </span>
                      )}
                      <span className="text-2xl font-bold text-foreground">
                        {formatPrice(p.price)}
                      </span>
                    </div>
                  </div>
                  <Button className="w-full btn-primary">
                    Bekijk product
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="btn-secondary" asChild>
            <Link href="/shop/e-steps">
              Bekijk alle producten
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}


