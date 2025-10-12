import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle, Star, Users } from 'lucide-react'

export function CinematicHero() {
  return (
    <section className="relative overflow-hidden gradient-bg">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Users className="h-4 w-4" />
              25.000+ tevreden klanten
              <div className="flex ml-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-current text-yellow-500" />
                ))}
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-foreground">
                De toekomst van
                <span className="text-primary block">mobiliteit</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Ontdek onze premium collectie E-steps en E-bikes. Duurzaam, stijlvol en perfect voor het moderne leven.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="btn-primary group" asChild>
                <Link href="/shop/e-steps">
                  Bekijk collectie
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="btn-secondary" asChild>
                <Link href="/guides/e-step-kopen">
                  Koopgids
                </Link>
              </Button>
            </div>

            {/* Trust Elements */}
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-accent" />
                Gratis verzending
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-accent" />
                2 jaar garantie
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-accent" />
                30 dagen retour
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 p-8">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                <div className="text-6xl">⚡</div>
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -top-4 -right-4 bg-card p-4 rounded-xl shadow-lg border">
                <div className="text-sm font-medium">4.9/5 sterren</div>
                <div className="text-xs text-muted-foreground">2.847 reviews</div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-card p-4 rounded-xl shadow-lg border">
                <div className="text-sm font-medium text-accent">€50+ gratis verzending</div>
                <div className="text-xs text-muted-foreground">Morgen in huis</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


