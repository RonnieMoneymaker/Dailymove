import { Truck, Shield, Headphones, Award, Clock, CreditCard } from 'lucide-react'

const trustElements = [
  {
    icon: Truck,
    title: 'Gratis verzending',
    description: 'Gratis verzending vanaf €50 binnen Nederland',
  },
  {
    icon: Shield,
    title: '2 jaar garantie',
    description: 'Uitgebreide garantie op alle E-steps en accessoires',
  },
  {
    icon: Headphones,
    title: '24/7 support',
    description: 'Altijd bereikbaar voor vragen en ondersteuning',
  },
  {
    icon: Award,
    title: 'Premium kwaliteit',
    description: 'Alleen de beste merken en producten',
  },
  {
    icon: Clock,
    title: 'Snelle levering',
    description: 'Voor 23:59 besteld, morgen in huis',
  },
  {
    icon: CreditCard,
    title: 'Veilig betalen',
    description: 'SSL beveiliging en diverse betaalmethoden',
  },
]

export function TrustElements() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight lg:text-4xl mb-4">
            Waarom kiezen voor DailyMove?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Wij zetten ons in voor de beste service en kwaliteit, zodat jij 
            zorgeloos kunt genieten van je elektrische voertuig.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {trustElements.map((element, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <element.icon className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{element.title}</h3>
                <p className="text-muted-foreground">{element.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                <Shield className="h-4 w-4 text-green-600" />
              </div>
              <span>SSL Beveiligd</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                <Award className="h-4 w-4 text-blue-600" />
              </div>
              <span>Certified Dealer</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                <Headphones className="h-4 w-4 text-purple-600" />
              </div>
              <span>Klantenservice 9.2/10</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
