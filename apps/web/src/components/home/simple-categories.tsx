import Image from 'next/image'
import Link from 'next/link'

const items = [
  { name: 'E-steps', slug: 'e-steps', image: '/images/categories/escooter.jpg' },
  { name: 'Elektrische Fietsen', slug: 'elektrische-fietsen', image: '/images/categories/ebike2.jpg' },
  { name: 'Accessoires', slug: 'accessoires', image: '/images/categories/helmet.jpg' },
  { name: 'Onderdelen', slug: 'onderdelen', image: '/images/categories/tools.jpg' },
]

export function SimpleCategories() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">Categorieën</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((c) => (
            <Link key={c.slug} href={`/shop/${c.slug}`} className="block group overflow-hidden rounded-lg bg-white border hover:shadow-md transition-shadow">
              <div className="relative h-44">
                <Image src={c.image} alt={c.name} fill className="object-cover" />
              </div>
              <div className="p-4">
                <div className="font-semibold text-gray-900 group-hover:text-blue-600">{c.name}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}


