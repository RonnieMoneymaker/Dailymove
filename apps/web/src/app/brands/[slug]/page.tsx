import Image from 'next/image'
import Link from 'next/link'

interface BrandPageProps {
  params: { slug: string }
}

const brandInfo: Record<string, { name: string; description: string; logo?: string }> = {
  xiaomi: { name: 'Xiaomi', description: 'Innovatieve mobiliteitsoplossingen met focus op prijs/kwaliteit.', logo: '/images/logo/dailymove-wordmark.svg' },
  segway: { name: 'Segway', description: 'Bekend om betrouwbare e-steps met sterk bereik en comfort.' },
}

export default function BrandPage({ params }: BrandPageProps) {
  const data = brandInfo[params.slug]

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-2">{data?.name ?? params.slug}</h1>
      <p className="text-muted-foreground mb-8">{data?.description ?? 'Bekijk producten van dit merk.'}</p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[
          { id: '1', name: 'Popular Product 1', slug: 'xiaomi-mi-electric-scooter-4-pro', image: '/images/products/xiaomi-scooter-real.jpg' },
          { id: '2', name: 'Popular Product 2', slug: 'segway-ninebot-max-g30lp', image: '/images/products/escooter-1.jpg' },
          { id: '3', name: 'Popular Product 3', slug: 'kaabo-mantis-8-pro', image: '/images/products/kaabo-mantis.jpg' },
        ].map((p) => (
          <Link key={p.id} href={`/product/${p.slug}`} className="group">
            <div className="relative h-48 rounded-lg overflow-hidden border">
              <Image src={p.image} alt={p.name} fill className="object-cover transition-transform group-hover:scale-105" />
            </div>
            <div className="mt-2 font-medium group-hover:text-primary">{p.name}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}


