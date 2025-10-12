import Image from 'next/image'
import Link from 'next/link'

const brands = [
  { name: 'Xiaomi', logo: '/images/products/xiaomi-pro.jpg', blurb: 'Innovatieve technologie met uitstekende prijs/kwaliteit.' },
  { name: 'Segway', logo: '/images/products/escooter-1.jpg', blurb: 'Wereldwijde marktleider in micro‑mobiliteit.' },
  { name: 'Pure', logo: '/images/products/pure-air.jpg', blurb: 'Britse kwaliteit, robuust en waterbestendig.' },
  { name: 'Kaabo', logo: '/images/products/kaabo-mantis.jpg', blurb: 'Performance en bereik voor de veeleisende rijder.' },
  { name: 'Ninebot', logo: '/images/categories/escooter.jpg', blurb: 'Slimme mobiliteit met betrouwbare techniek.' },
  { name: 'Razor', logo: '/images/products/escooter-2.jpg', blurb: 'Amerikaanse kwaliteit, fun en functionaliteit.' },
]

export default function BrandsPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-2">Merken</h1>
      <p className="text-muted-foreground mb-8">De sterkste merken in elektrische mobiliteit, door ons geselecteerd.</p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {brands.map((b) => (
          <div key={b.name} className="border rounded-xl p-6 bg-white hover:shadow-sm transition-shadow">
            <div className="relative h-12 w-36 mb-4">
              <Image src={b.logo} alt={b.name} fill className="object-cover rounded" />
            </div>
            <h3 className="font-semibold mb-1">{b.name}</h3>
            <p className="text-sm text-muted-foreground mb-4">{b.blurb}</p>
            <Link href={`/shop/e-steps`} className="text-sm font-medium text-brand hover:underline">Bekijk modellen →</Link>
          </div>
        ))}
      </div>
    </div>
  )
}


