import { Truck, Shield, RefreshCcw, Headphones, BadgeCheck, Gift } from 'lucide-react'

const items = [
  { icon: Truck, title: 'Snelle levering', desc: 'Vandaag besteld, snel in huis' },
  { icon: Shield, title: '2 jaar garantie', desc: 'Officiële garantie en service' },
  { icon: RefreshCcw, title: '30 dagen retour', desc: 'Zonder gedoe' },
  { icon: Headphones, title: 'Klantenservice', desc: 'Altijd bereikbaar voor advies' },
  { icon: BadgeCheck, title: 'Geverifieerde reviews', desc: 'Echte klantbeoordelingen' },
  { icon: Gift, title: 'Acties en bundels', desc: 'Voordeel op accessoires' },
]

export function ValuePropsPro() {
  return (
    <section className="bg-gray-50">
      <div className="container py-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((it, i) => (
            <div key={i} className="flex items-start gap-3 p-5 rounded-lg border bg-white">
              <it.icon className="h-6 w-6 text-primary" />
              <div>
                <div className="font-semibold">{it.title}</div>
                <div className="text-sm text-muted-foreground">{it.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


