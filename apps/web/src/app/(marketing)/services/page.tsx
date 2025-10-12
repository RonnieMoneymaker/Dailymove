import { Truck, Wrench, Shield, Home } from 'lucide-react'

const services = [
  { icon: Wrench, title: 'Reparatie & Onderhoud', text: 'Servicebeurt, remmen, banden, firmware & meer.' },
  { icon: Home, title: 'Service aan huis', text: 'Gratis eerste servicebeurt aan huis in NL.' },
  { icon: Truck, title: 'Ophaal- & brengservice', text: 'Binnen 48u ophalen, repareren en terugbezorgen.' },
  { icon: Shield, title: '2 jaar garantie', text: 'Uitgebreide garantie en snelle afhandeling.' },
]

export default function ServicesPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-2">Service</h1>
      <p className="text-muted-foreground mb-8">Premium service voor zorgeloos rijplezier.</p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => (
          <div key={s.title} className="border rounded-xl p-6 bg-white">
            <s.icon className="h-6 w-6 text-brand mb-3" />
            <h3 className="font-semibold mb-1">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}


