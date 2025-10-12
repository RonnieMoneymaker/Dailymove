export default function CookiesPage() {
  return (
    <main className="bg-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-black mb-8">Cookie Beleid</h1>
        <div className="prose prose-lg max-w-none">
          <h2>Wat zijn cookies?</h2>
          <p>Cookies zijn kleine tekstbestanden die op je computer of mobiel apparaat worden geplaatst wanneer je onze website bezoekt.</p>

          <h2>Welke cookies gebruiken wij?</h2>
          <ul>
            <li><strong>Functionele cookies:</strong> Voor het goed functioneren van de website</li>
            <li><strong>Analytische cookies:</strong> Om te begrijpen hoe bezoekers de website gebruiken</li>
            <li><strong>Marketing cookies:</strong> Voor gepersonaliseerde advertenties</li>
          </ul>

          <h2>Cookies beheren</h2>
          <p>Je kunt cookies beheren of verwijderen via je browserinstellingen.</p>
        </div>
      </div>
    </main>
  )
}

