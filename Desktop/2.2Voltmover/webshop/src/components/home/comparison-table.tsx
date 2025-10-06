import { Check, X } from 'lucide-react'

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
    <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
      <div className="container-edge">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Waarom wij de beste keuze zijn
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Vergelijk onze service met anderen
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-700/50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Feature</th>
                    <th className="px-4 py-3 text-center text-sm font-semibold text-gray-900 dark:text-white bg-blue-50 dark:bg-blue-900/30">
                      <div className="flex flex-col items-center gap-1">
                        <span>Ons</span>
                        <span className="text-xs text-blue-600 dark:text-blue-400">⭐ Aanbevolen</span>
                      </div>
                    </th>
                    <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700 dark:text-gray-300">Concurrent A</th>
                    <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700 dark:text-gray-300">Concurrent B</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {featureLabels.slice(0, 5).map((feature, featureIndex) => (
                    <tr key={featureIndex}>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">{feature}</td>
                      {competitors.map((competitor, compIndex) => (
                        <td key={compIndex} className={`px-4 py-3 text-center text-sm ${competitor.highlight ? 'bg-blue-50 dark:bg-blue-900/20' : ''}`}>
                          {typeof competitor.features[feature as keyof typeof competitor.features] === 'boolean' ? (
                            competitor.features[feature as keyof typeof competitor.features] ? (
                              <Check className={`h-5 w-5 mx-auto ${competitor.highlight ? 'text-green-600' : 'text-green-500'}`} />
                            ) : (
                              <X className="h-5 w-5 text-red-500 mx-auto opacity-50" />
                            )
                          ) : (
                            <span className={`font-medium ${competitor.highlight ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'}`}>
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
          </div>
        </div>
      </div>
    </section>
  )
}


