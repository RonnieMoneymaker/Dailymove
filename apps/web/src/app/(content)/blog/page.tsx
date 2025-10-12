import Link from 'next/link'
import { Metadata } from 'next'
import { Clock, User, Calendar, Tag } from 'lucide-react'

// Mock blog data - in productie zou dit uit een CMS of database komen
const featuredPosts = [
  {
    id: '1',
    title: 'De Beste E-steps van 2024: Complete Koopgids',
    slug: 'beste-e-steps-2024-koopgids',
    excerpt: 'Ontdek welke E-steps het beste presteren in 2024. Van budget-modellen tot premium options, wij testen ze allemaal.',
    image: '/images/blog/e-steps-2024.jpg',
    category: 'Koopgids',
    author: 'Lisa van der Berg',
    publishedAt: '2024-01-15',
    readingTime: 8,
    featured: true
  },
  {
    id: '2',
    title: 'E-step Onderhoud: 10 Tips voor een Lange Levensduur',
    slug: 'e-step-onderhoud-tips',
    excerpt: 'Houd je E-step in topconditie met deze praktische onderhoudstips van onze experts.',
    image: '/images/blog/onderhoud-tips.jpg',
    category: 'Onderhoud',
    author: 'Marco Jansen',
    publishedAt: '2024-01-12',
    readingTime: 6,
    featured: true
  },
  {
    id: '3',
    title: 'Elektrische Mobiliteit in Nederland: Trends 2024',
    slug: 'elektrische-mobiliteit-trends-2024',
    excerpt: 'De laatste ontwikkelingen in e-mobility en wat dit betekent voor Nederlandse consumenten.',
    image: '/images/blog/trends-2024.jpg',
    category: 'Nieuws',
    author: 'Sophie de Wit',
    publishedAt: '2024-01-10',
    readingTime: 7,
    featured: true
  }
]

const recentPosts = [
  {
    id: '4',
    title: 'E-step Veiligheid: Wat Je Moet Weten',
    slug: 'e-step-veiligheid-tips',
    excerpt: 'Alles over veilig rijden met je E-step in Nederland.',
    category: 'Veiligheid',
    author: 'Rick Hendriks',
    publishedAt: '2024-01-08',
    readingTime: 5
  },
  {
    id: '5',
    title: 'De Voordelen van E-bikes voor Woon-Werkverkeer',
    slug: 'e-bikes-woon-werkverkeer',
    excerpt: 'Waarom steeds meer Nederlanders kiezen voor een E-bike.',
    category: 'E-bikes',
    author: 'Emma Bakker',
    publishedAt: '2024-01-05',
    readingTime: 6
  },
  {
    id: '6',
    title: 'E-step Batterij Onderhoud: Maximale Levensduur',
    slug: 'batterij-onderhoud-tips',
    excerpt: 'Zo houd je de batterij van je E-step optimaal.',
    category: 'Onderhoud',
    author: 'Lisa van der Berg',
    publishedAt: '2024-01-03',
    readingTime: 4
  },
  {
    id: '7',
    title: 'Welke E-step Past Bij Jouw Levensstijl?',
    slug: 'welke-e-step-past-bij-jou',
    excerpt: 'Een persoonlijke gids om de perfecte E-step te kiezen.',
    category: 'Koopgids',
    author: 'Marco Jansen',
    publishedAt: '2024-01-01',
    readingTime: 9
  },
  {
    id: '8',
    title: 'E-mobility Wetgeving Nederland 2024',
    slug: 'e-mobility-wetgeving-2024',
    excerpt: 'Wat is toegestaan en wat verandert er in 2024?',
    category: 'Wetgeving',
    author: 'Sophie de Wit',
    publishedAt: '2023-12-28',
    readingTime: 7
  },
  {
    id: '9',
    title: 'E-step vs Openbaar Vervoer: Kosten Vergelijking',
    slug: 'e-step-vs-ov-kosten',
    excerpt: 'Wat is goedkoper: een E-step of het openbaar vervoer?',
    category: 'Vergelijking',
    author: 'Rick Hendriks',
    publishedAt: '2023-12-25',
    readingTime: 6
  }
]

const categories = [
  { name: 'Koopgids', count: 12, slug: 'koopgids' },
  { name: 'Onderhoud', count: 8, slug: 'onderhoud' },
  { name: 'Nieuws', count: 15, slug: 'nieuws' },
  { name: 'E-bikes', count: 6, slug: 'e-bikes' },
  { name: 'Veiligheid', count: 5, slug: 'veiligheid' },
  { name: 'Vergelijking', count: 9, slug: 'vergelijking' },
  { name: 'Wetgeving', count: 4, slug: 'wetgeving' }
]

export const metadata: Metadata = {
  title: 'Blog & Nieuws | VoltMover',
  description: 'Ontdek de laatste tips, trends en nieuws over E-steps, E-bikes en elektrische mobiliteit. Expert advice van Nederland\'s #1 E-Mobility specialist.',
  keywords: ['e-step blog', 'e-bike nieuws', 'elektrische mobiliteit', 'e-step tips', 'onderhoud gids'],
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              VoltMover Blog
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Ontdek de laatste tips, trends en expert advice over E-steps, E-bikes en elektrische mobiliteit
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {categories.slice(0, 4).map((category) => (
                <Link
                  key={category.slug}
                  href={`/blog/category/${category.slug}`}
                  className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-primary hover:text-white transition-colors"
                >
                  {category.name} ({category.count})
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="container py-12">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Posts */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Uitgelichte Artikelen</h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {featuredPosts.map((post) => (
                  <article key={post.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                    <div className="aspect-video bg-gray-200 relative">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2 py-1 bg-primary text-white text-xs font-medium rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                        <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <User className="h-3 w-3" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-3 w-3" />
                            <span>{post.readingTime} min</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>{new Date(post.publishedAt).toLocaleDateString('nl-NL')}</span>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* Recent Posts */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Recente Artikelen</h2>
              <div className="space-y-6">
                {recentPosts.map((post) => (
                  <article key={post.id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                            {post.category}
                          </span>
                          <span className="text-gray-400">•</span>
                          <span className="text-xs text-gray-500">
                            {new Date(post.publishedAt).toLocaleDateString('nl-NL')}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                            {post.title}
                          </Link>
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <User className="h-4 w-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{post.readingTime} min leestijd</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Load More Button */}
              <div className="text-center mt-8">
                <button className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                  Meer Artikelen Laden
                </button>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              {/* Categories */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Categorieën</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <Link
                      key={category.slug}
                      href={`/blog/category/${category.slug}`}
                      className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-gray-700">{category.name}</span>
                      <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Blijf op de hoogte
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Ontvang wekelijks de nieuwste tips en trends over elektrische mobiliteit.
                </p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Je e-mailadres"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <button
                    type="submit"
                    className="w-full px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Aanmelden
                  </button>
                </form>
              </div>

              {/* Popular Tags */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Populaire Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {['e-step', 'onderhoud', 'veiligheid', 'koopgids', 'xiaomi', 'segway', 'batterij', 'wetgeving'].map((tag) => (
                    <Link
                      key={tag}
                      href={`/blog/tag/${tag}`}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-primary hover:text-white transition-colors"
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


