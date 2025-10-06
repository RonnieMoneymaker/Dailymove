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
    <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
      <div className="container-edge">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Merken waar we mee werken
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Alleen de beste merken voor onze klanten
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {brands.map((brand, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all"
              >
                <h3 className="font-bold text-gray-900 dark:text-white text-sm">{brand.name}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{brand.products}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
