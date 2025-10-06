import Link from 'next/link'

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
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container-edge">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Ontdek onze categorieën
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Van E-steps tot elektrische fietsen, wij hebben alles wat je nodig hebt 
              voor je elektrische mobiliteit.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <Link key={category.slug} href={`/producten`}>
                <div className="group overflow-hidden transition-all hover:shadow-lg border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800">
                  <div className="p-8 text-center">
                    <div className="text-4xl mb-4">
                      {category.slug === 'e-steps' && '⚡'}
                      {category.slug === 'elektrische-fietsen' && '🚴'}
                      {category.slug === 'accessoires' && '🎒'}
                      {category.slug === 'onderdelen' && '🔧'}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{category.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      {category.description}
                    </p>
                    <div className="text-sm font-semibold text-gray-500 dark:text-gray-500">
                      {category.productCount} producten
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
