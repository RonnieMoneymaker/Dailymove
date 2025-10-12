'use client'

import Link from 'next/link'
import { Calendar, Clock, ArrowRight, TrendingUp } from 'lucide-react'

export function EStepBlogPreview() {
  const blogPosts = [
    {
      id: 1,
      title: 'De 10 Beste E-Steps van 2025 - Uitgebreide Vergelijking',
      excerpt: 'Ontdek welke e-steps dit jaar de beste prijs-kwaliteit verhouding bieden. We hebben alle topmodellen getest en vergeleken op bereik, comfort en betrouwbaarheid.',
      category: 'Koopgids',
      categoryColor: 'bg-blue-600',
      date: '15 januari 2025',
      readTime: '8 min',
      image: '🏆',
      trending: true
    },
    {
      id: 2,
      title: 'E-Step Onderhoud: Complete Gids voor Langere Levensduur',
      excerpt: 'Met deze praktische tips houd je jouw e-step in topconditie. Van bandenspanning tot accu-onderhoud - alles wat je moet weten om jarenlang rijplezier te hebben.',
      category: 'Onderhoud',
      categoryColor: 'bg-green-600',
      date: '12 januari 2025',
      readTime: '6 min',
      image: '🔧'
    },
    {
      id: 3,
      title: 'Nieuwe Wetgeving E-Steps 2025: Dit Moet Je Weten',
      excerpt: 'Belangrijke updates in de regelgeving voor e-steps in Nederland. Blijf op de hoogte van de laatste veranderingen en wat dit betekent voor jou als gebruiker.',
      category: 'Wetgeving',
      categoryColor: 'bg-purple-600',
      date: '10 januari 2025',
      readTime: '5 min',
      image: '⚖️',
      trending: true
    },
    {
      id: 4,
      title: 'Off-Road E-Steps: De Beste Modellen voor Avontuurlijk Rijden',
      excerpt: 'Ga off the beaten path met deze robuuste e-steps. Perfect voor onverharde wegen, strand en terrein. Inclusief review van de beste off-road modellen.',
      category: 'Product Reviews',
      categoryColor: 'bg-orange-600',
      date: '8 januari 2025',
      readTime: '7 min',
      image: '🏔️'
    },
    {
      id: 5,
      title: 'E-Step Veiligheid: Tips voor Veilig Rijden in de Stad',
      excerpt: 'Veilig de weg op met je e-step. Leer hoe je gevaarlijke situaties voorkomt en wat je moet doen bij een ongeval. Plus: de beste veiligheidsaccessoires.',
      category: 'Veiligheid',
      categoryColor: 'bg-red-600',
      date: '5 januari 2025',
      readTime: '6 min',
      image: '🛡️'
    },
    {
      id: 6,
      title: 'Elektrische Mobiliteit: De Toekomst van Stedelijk Transport',
      excerpt: 'E-steps zijn meer dan een trend. Ontdek waarom elektrische mobiliteit de toekomst is en hoe e-steps bijdragen aan een duurzamere stad.',
      category: 'Trends',
      categoryColor: 'bg-teal-600',
      date: '3 januari 2025',
      readTime: '9 min',
      image: '🌍',
      trending: true
    }
  ]

  const popularTopics = [
    { name: 'Beste E-Steps', count: 45, link: '/blog/beste-e-steps' },
    { name: 'Onderhoud Tips', count: 32, link: '/blog/onderhoud' },
    { name: 'Wetgeving', count: 28, link: '/blog/wetgeving' },
    { name: 'Koopgids', count: 56, link: '/blog/koopgids' },
    { name: 'Product Reviews', count: 89, link: '/blog/reviews' },
    { name: 'Accessoires', count: 41, link: '/blog/accessoires' }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full font-semibold mb-4">
            <TrendingUp className="w-5 h-5" />
            <span>Blijf op de hoogte van het laatste nieuws</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            E-Mobility Blog & Nieuws
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Expert tips, koopgidsen, reviews en het laatste nieuws over elektrische mobiliteit
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Blog Grid */}
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-6">
              {blogPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.id}`}
                  className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Image placeholder with emoji */}
                  <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 aspect-video flex items-center justify-center text-6xl">
                    {post.image}
                    {post.trending && (
                      <div className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        Trending
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    {/* Category Badge */}
                    <div className={`inline-block ${post.categoryColor} text-white px-3 py-1 rounded-full text-xs font-bold mb-3`}>
                      {post.category}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-600 mb-4 line-clamp-3 text-sm">
                      {post.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-orange-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Load More */}
            <div className="mt-8 text-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full font-bold transition-colors"
              >
                Bekijk Alle Blog Artikelen
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Popular Topics */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                🔥 Populaire Onderwerpen
              </h3>
              <div className="space-y-2">
                {popularTopics.map((topic, index) => (
                  <Link
                    key={index}
                    href={topic.link}
                    className="flex items-center justify-between p-3 bg-white hover:bg-orange-100 rounded-lg transition-colors group"
                  >
                    <span className="font-semibold text-gray-900 group-hover:text-orange-600">
                      {topic.name}
                    </span>
                    <span className="text-sm text-gray-500 bg-gray-100 group-hover:bg-orange-200 px-2 py-1 rounded-full">
                      {topic.count}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-2">
                📧 Wekelijkse Newsletter
              </h3>
              <p className="text-blue-100 mb-4 text-sm">
                Ontvang wekelijks de beste tips, deals en nieuws direct in je inbox
              </p>
              <input
                type="email"
                placeholder="Jouw e-mailadres"
                className="w-full px-4 py-2 rounded-lg text-gray-900 mb-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button className="w-full bg-white text-blue-600 hover:bg-gray-100 py-2 rounded-lg font-bold transition-colors">
                Inschrijven
              </button>
              <p className="text-xs text-blue-200 mt-2 text-center">
                Geen spam, uitschrijven kan altijd
              </p>
            </div>

            {/* Recent Reviews */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                ⭐ Nieuwste Reviews
              </h3>
              <div className="space-y-3">
                {['Xiaomi Pro 2 Elite', 'Segway Max G30', 'Ninebot F40'].map((product, index) => (
                  <Link
                    key={index}
                    href={`/product/${product.toLowerCase().replace(' ', '-')}`}
                    className="block p-3 bg-gray-50 hover:bg-orange-50 rounded-lg transition-colors group"
                  >
                    <div className="font-semibold text-gray-900 group-hover:text-orange-600 mb-1">
                      {product}
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                      <span className="text-yellow-500">★★★★★</span>
                      <span className="text-gray-500">4.9/5</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* SEO Internal Links */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                📚 Handige Links
              </h3>
              <div className="space-y-2 text-sm">
                <Link href="/koopgids" className="block text-orange-600 hover:underline">
                  → Complete E-Step Koopgids 2025
                </Link>
                <Link href="/vergelijken" className="block text-orange-600 hover:underline">
                  → E-Steps Vergelijken
                </Link>
                <Link href="/merken" className="block text-orange-600 hover:underline">
                  → Alle Merken Overzicht
                </Link>
                <Link href="/accessoires" className="block text-orange-600 hover:underline">
                  → Beste Accessoires
                </Link>
                <Link href="/onderhoud" className="block text-orange-600 hover:underline">
                  → Onderhoudstips
                </Link>
                <Link href="/wetgeving" className="block text-orange-600 hover:underline">
                  → Wetgeving & Regelgeving
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

