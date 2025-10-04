import ProductCard from "@/components/ProductCard";

export default function ProductenPage() {
  const products = [
    { id: "1", title: "E-step Urban X", price: 749, category: "E-steps", isNew: true },
    { id: "2", title: "E-bike City Pro", price: 1599, category: "E-bikes", isNew: true },
    { id: "3", title: "E-step Compact Lite", price: 599, category: "E-steps" },
    { id: "4", title: "E-bike Trekker", price: 1899, category: "E-bikes", isNew: true },
    { id: "5", title: "Batterij 500Wh", price: 399, category: "Onderdelen" },
    { id: "6", title: "Remblokken Set", price: 29, category: "Onderdelen" },
  ];

  return (
    <div className="space-y-10">
      {/* Page hero / toolbar */}
      <section className="relative overflow-hidden rounded-3xl gradient-hero border border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/3 via-transparent to-orange-600/3" />
        <div className="container-edge py-10 lg:py-12 relative space-y-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-black text-gray-900 dark:text-white leading-tight">
                <span className="text-gradient">Premium</span> Producten
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
                Ontdek onze zorgvuldig geselecteerde collectie e-bikes, e-steps en onderdelen.
                <span className="font-semibold text-[var(--brand)]"> Snel, duurzaam en klaar voor elke rit.</span>
              </p>
            </div>
            <div className="hidden md:flex items-center gap-3">
              <span className="inline-flex items-center rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-4 py-2 text-sm font-bold border border-gray-200 dark:border-gray-700 shadow-sm">
                <span className="text-[var(--brand)] mr-2">⭐</span>
                {products.length} premium producten
              </span>
              <span className="inline-flex items-center rounded-full bg-green-50 dark:bg-green-900/20 px-4 py-2 text-sm font-bold text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                Op voorraad
              </span>
            </div>
          </div>

          {/* Enhanced Filters */}
          <form className="grid gap-4 lg:grid-cols-[1fr_auto_auto]">
            <div className="relative">
              <input
                placeholder="Zoek naar producten, merken of modellen..."
                className="input-field pr-12 text-base"
              />
              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z" />
                </svg>
              </span>
            </div>
            <select className="input-field text-base font-semibold">
              <option>🏷️ Alle categorieën</option>
              <option>⚡ E-steps</option>
              <option>🚴 E-bikes</option>
              <option>🔧 Onderdelen</option>
              <option>🎯 Accessoires</option>
            </select>
            <select className="input-field text-base font-semibold">
              <option>📊 Sorteren: Populair</option>
              <option>💰 Prijs laag-hoog</option>
              <option>💎 Prijs hoog-laag</option>
              <option>🆕 Nieuwste eerst</option>
              <option>⭐ Beste beoordelingen</option>
            </select>
          </form>

          {/* Enhanced Quick filters */}
          <div className="flex flex-wrap items-center gap-3">
            {[
              { label: "Op voorraad", color: "emerald", icon: "✅" },
              { label: "Gratis verzending", color: "blue", icon: "🚚" },
              { label: "Aanbieding", color: "purple", icon: "🏷️" },
              { label: "Nieuw", color: "orange", icon: "🆕" },
              { label: "Bestseller", color: "yellow", icon: "⭐" },
            ].map((chip) => (
              <button
                key={chip.label}
                type="button"
                className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-4 py-2 text-sm font-semibold hover:border-[var(--brand)] hover:bg-[var(--brand-light)] dark:hover:bg-blue-900/30 hover:text-[var(--brand)] hover:shadow-md transition-all duration-200"
              >
                <span className="text-base">{chip.icon}</span>
                {chip.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Products grid */}
      <section className="container-edge">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Alle producten</h2>
            <span className="text-sm text-gray-500 dark:text-gray-400">({products.length} resultaten)</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <span>Weergave:</span>
            <button className="p-2 rounded-lg bg-[var(--brand)] text-white">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>
            <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}


