import { Metadata } from 'next'

interface Params { land: string; stad: string }

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const title = `E‑steps & e‑scooters in ${capitalize(params.stad)}`
  const description = `Levering in ${capitalize(params.stad)}, servicepunten in de regio, tips en topkeuzes.`
  return { title, description }
}

export default function LocationPage({ params }: { params: Params }) {
  const city = capitalize(params.stad)
  const country = capitalize(params.land)
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-2">E‑mobility in {city}</h1>
      <p className="text-muted-foreground mb-6">Levering in {city} ({country}), servicepunten in de regio, tips en topkeuzes.</p>
      <section className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4">
          <p>Ontdek onze selectie E‑steps en E‑scooters met snelle levering in {city}. Profiteer van gratis verzending vanaf €49 en 30 dagen retour.</p>
          <ul className="list-disc pl-6">
            <li>Levertijd: 1–2 werkdagen</li>
            <li>Servicepunten: meerdere locaties in de regio</li>
            <li>Klantenservice: 7 dagen per week</li>
          </ul>
        </div>
        <aside className="space-y-2">
          <div className="p-4 border rounded-lg">
            <div className="font-semibold mb-1">Contact (dummy)</div>
            <div>VoltMover BV</div>
            <div>1234 AB, {city}</div>
            <div>+31 20 123 4567</div>
          </div>
        </aside>
      </section>
    </div>
  )
}

function capitalize(val: string) {
  return val.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ')
}


