import { Shield, Truck, CreditCard, ThumbsUp, Award, Clock } from 'lucide-react'

export function TrustWall() {
  const points = [
    { icon: Truck, title: 'Snelle levering', desc: 'Vandaag besteld, snel in huis' },
    { icon: Shield, title: '2 jaar garantie', desc: 'Op alle producten' },
    { icon: CreditCard, title: 'Veilig betalen', desc: 'iDEAL, Creditcard en meer' },
    { icon: ThumbsUp, title: '4.9/5 reviews', desc: 'Door echte klanten' },
    { icon: Award, title: 'Topmerken', desc: 'Alleen kwaliteitsproducten' },
    { icon: Clock, title: '30 dagen retour', desc: 'Niet goed? Geld terug' },
  ]

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container-edge">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Koop met vertrouwen
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Dit kun je van ons verwachten
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {points.map((p, i) => (
              <div key={i} className="flex items-start gap-4 p-5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                  <p.icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white mb-1">{p.title}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


