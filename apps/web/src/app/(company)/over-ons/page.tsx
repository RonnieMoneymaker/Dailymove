export default function OverOnsPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-2">Over DailyMove</h1>
      <p className="text-muted-foreground mb-8">Onze missie: duurzame micro‑mobiliteit toegankelijk maken met premium service.</p>
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-4 text-sm leading-6 text-muted-foreground">
          <p>Dagelijks helpen wij duizenden mensen sneller, groener en leuker van A naar B te gaan. Met een zorgvuldig geselecteerd assortiment en service op topniveau.</p>
          <p>We investeren in lange termijn relaties: transparant advies, eerlijke prijzen en een netwerk van servicepartners door heel Nederland.</p>
        </div>
        <div className="rounded-xl border p-6 bg-white">
          <h3 className="font-semibold mb-2">Kernwaarden</h3>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
            <li>Klant eerst, altijd</li>
            <li>Duurzaam en verantwoord</li>
            <li>Innovatie en betrouwbaarheid</li>
          </ul>
        </div>
      </div>
    </div>
  )
}


