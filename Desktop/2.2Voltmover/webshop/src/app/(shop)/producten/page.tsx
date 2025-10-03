export default function ProductenPage() {
  const products = [
    { id: "1", title: "E-step Urban X", price: 749 },
    { id: "2", title: "E-bike City Pro", price: 1599 },
    { id: "3", title: "E-step Compact Lite", price: 599 },
    { id: "4", title: "E-bike Trekker", price: 1899 },
    { id: "5", title: "Batterij 500Wh", price: 399 },
    { id: "6", title: "Remblokken Set", price: 29 },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl">Producten</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <a key={p.id} href={`/producten/${p.id}`} className="card p-4 group">
            <div className="aspect-[4/3] w-full rounded-md bg-muted" />
            <div className="mt-4">
              <h3 className="font-semibold group-hover:text-brand">{p.title}</h3>
              <p className="text-slate-600 dark:text-slate-300">€ {p.price},-</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}


