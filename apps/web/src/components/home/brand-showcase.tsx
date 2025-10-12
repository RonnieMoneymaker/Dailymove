import Image from 'next/image'

const brands = [
  {
    name: 'Xiaomi',
    logo: '/images/products/xiaomi-pro.jpg',
    description: 'Innovatieve technologie',
    products: '12 modellen',
    featured: true
  },
  {
    name: 'Segway',
    logo: '/images/products/escooter-1.jpg',
    description: 'Wereldwijde marktleider',
    products: '8 modellen',
    featured: true
  },
  {
    name: 'Pure',
    logo: '/images/products/pure-air.jpg',
    description: 'Britse kwaliteit',
    products: '6 modellen',
    featured: false
  },
  {
    name: 'Kaabo',
    logo: '/images/products/kaabo-mantis.jpg',
    description: 'Performance specialist',
    products: '4 modellen',
    featured: false
  },
  {
    name: 'Ninebot',
    logo: '/images/categories/escooter.jpg',
    description: 'Smart mobility',
    products: '7 modellen',
    featured: false
  },
  {
    name: 'Razor',
    logo: '/images/products/escooter-2.jpg',
    description: 'Amerikaanse kwaliteit',
    products: '5 modellen',
    featured: false
  }
]

export function BrandShowcase() {
  return (
    <section className="py-12 bg-white border-t">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Merken waar we mee werken
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {brands.map((brand, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-xl p-6 text-center border border-gray-100 hover:shadow-sm"
            >
              
              <div className="relative h-16 w-16 mx-auto mb-4 rounded-lg overflow-hidden">
                <Image
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  fill
                  className="object-cover"
                />
              </div>
              
              <h3 className="font-bold text-gray-900 mb-1">{brand.name}</h3>
              <p className="text-xs text-gray-500">{brand.products}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
