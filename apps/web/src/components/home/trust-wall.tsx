import { Shield, Truck, CreditCard, ThumbsUp, Award, Clock } from 'lucide-react'
import Image from 'next/image'

export function TrustWall() {
  const logos = [
    { src: '/images/payment/ideal.svg', alt: 'iDEAL' },
    { src: '/images/payment/visa.svg', alt: 'Visa' },
    { src: '/images/payment/mastercard.svg', alt: 'Mastercard' },
    { src: '/images/payment/paypal.svg', alt: 'PayPal' },
  ]

  const points = [
    { icon: Truck, title: 'Vandaag besteld, snel in huis', desc: 'Snelle levering via betrouwbare partners' },
    { icon: Shield, title: '2 jaar garantie', desc: 'Altijd service en ondersteuning' },
    { icon: CreditCard, title: 'Veilig betalen', desc: 'iDEAL, Creditcard en PayPal' },
    { icon: ThumbsUp, title: 'Uitstekende reviews', desc: 'Door echte klanten' },
    { icon: Award, title: 'Topmerken', desc: 'Xiaomi, Segway, Kaabo en meer' },
    { icon: Clock, title: '30 dagen retour', desc: 'Zonder gedoe' },
  ]

  return (
    <section className="bg-white border-y">
      <div className="container py-10">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold mb-2">Koop met vertrouwen</h2>
            <p className="text-muted-foreground mb-6">Transparant, snel en veilig. Dat is hoe wij werken.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {points.map((p, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-lg border bg-white">
                  <p.icon className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium">{p.title}</div>
                    <div className="text-sm text-muted-foreground">{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="rounded-xl border bg-gradient-to-br from-slate-50 to-white p-6">
              <div className="text-sm text-muted-foreground mb-2">Betaalmethoden</div>
              <div className="flex items-center gap-3 flex-wrap mb-6">
                {logos.map((l, i) => (
                  <div key={i} className="h-8 w-14 relative">
                    <Image src={l.src} alt={l.alt} fill className="object-contain" />
                  </div>
                ))}
              </div>
              <div className="rounded-lg border bg-white p-4">
                <div className="text-sm text-muted-foreground">Klantwaardering</div>
                <div className="mt-1 text-2xl font-bold">4.8/5</div>
                <div className="text-sm text-muted-foreground">Gebaseerd op 1.250+ reviews</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


