import Image from 'next/image'

const photos = [
  '/images/lifestyle/modern-escooter.jpg',
  '/images/lifestyle/urban-mobility.jpg',
  '/images/lifestyle/escooter-city.jpg',
]

export default function CommunityPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-2">Community</h1>
      <p className="text-muted-foreground mb-8">Rides, klantenfoto’s en social feeds.</p>
      <div className="grid gap-4 grid-cols-2 md:grid-cols-3">
        {photos.map((src) => (
          <div key={src} className="relative h-40 md:h-56 rounded-xl overflow-hidden">
            <Image src={src} alt="Community" fill className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  )
}


