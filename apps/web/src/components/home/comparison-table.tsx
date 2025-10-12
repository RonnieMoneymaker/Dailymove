import { Check, X, Star, Zap } from 'lucide-react'

const competitors = [
  {
    name: 'DailyMove',
    logo: '🏆',
    price: '€599',
    features: {
      'Gratis verzending': true,
      '2 jaar garantie': true,
      '24/7 support': true,
      'Retourrecht': '30 dagen',
      'Levertijd': '1 dag',
      'Klantenservice': '9.2/10',
      'Reviews': '4.9/5',
      'Prijs-kwaliteit': true
    },
    highlight: true,
    badge: 'Meest gekozen'
  },
  {
    name: 'Concurrent A',
    logo: '🏪',
    price: '€649',
    features: {
      'Gratis verzending': false,
      '2 jaar garantie': false,
      '24/7 support': false,
      'Retourrecht': '14 dagen',
      'Levertijd': '3-5 dagen',
      'Klantenservice': '7.1/10',
      'Reviews': '4.2/5',
      'Prijs-kwaliteit': false
    },
    highlight: false
  },
  {
    name: 'Concurrent B',
    logo: '🛒',
    price: '€699',
    features: {
      'Gratis verzending': true,
      '2 jaar garantie': true,
      '24/7 support': false,
      'Retourrecht': '14 dagen',
      'Levertijd': '2-3 dagen',
      'Klantenservice': '8.1/10',
      'Reviews': '4.5/5',
      'Prijs-kwaliteit': false
    },
    highlight: false
  }
]

const featureLabels = [
  'Gratis verzending',
  '2 jaar garantie', 
  '24/7 support',
  'Retourrecht',
  'Levertijd',
  'Klantenservice',
  'Reviews',
  'Prijs-kwaliteit'
]

export function ComparisonTable() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Vergelijk en bespaar
          </h2>
          <p className="text-xl text-gray-600">
            Zie waarom DailyMove de beste keuze is voor jouw E-step
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Vergelijking</th>
                  {competitors.map((competitor, index) => (
                    <th key={index} className="px-6 py-4 text-center relative">
                      <div className="flex flex-col items-center space-y-2">
                        <div className="text-2xl">{competitor.logo}</div>
                        <div className="font-semibold">{competitor.name}</div>
                        <div className="text-2xl font-bold">{competitor.price}</div>
                        {competitor.badge && (
                          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-yellow-900 text-xs px-3 py-1 rounded-full font-semibold">
                            {competitor.badge}
                          </div>
                        )}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {featureLabels.map((feature, featureIndex) => (
                  <tr key={featureIndex} className={featureIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-6 py-4 font-medium text-gray-900">{feature}</td>
                    {competitors.map((competitor, compIndex) => (
                      <td key={compIndex} className={`px-6 py-4 text-center ${competitor.highlight ? 'bg-blue-50' : ''}`}>
                        {typeof competitor.features[feature as keyof typeof competitor.features] === 'boolean' ? (
                          competitor.features[feature as keyof typeof competitor.features] ? (
                            <Check className={`h-6 w-6 mx-auto ${competitor.highlight ? 'text-green-600' : 'text-green-500'}`} />
                          ) : (
                            <X className="h-6 w-6 text-red-500 mx-auto" />
                          )
                        ) : (
                          <span className={`font-medium ${competitor.highlight ? 'text-blue-600' : 'text-gray-700'}`}>
                            {competitor.features[feature as keyof typeof competitor.features]}
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Call to action */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Klaar om de beste keuze te maken?
              </h3>
              <p className="text-blue-100 mb-6">
                Sluit je aan bij 15.000+ tevreden klanten die al kozen voor DailyMove
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2">
                  <span>Bekijk alle E-steps</span>
                  <Zap className="h-5 w-5" />
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center space-x-2">
                  <Star className="h-5 w-5" />
                  <span>Lees alle reviews</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="flex justify-center items-center space-x-8 mt-8 text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span>Laagste prijsgarantie</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span>Gratis retourneren</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
            <span>Nederlandse klantenservice</span>
          </div>
        </div>
      </div>
    </section>
  )
}


