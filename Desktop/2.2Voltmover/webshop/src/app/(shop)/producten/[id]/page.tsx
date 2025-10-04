type Props = { params: Promise<{ id: string }> };

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params;
  const priceBase = 699;
  const price = priceBase + Number(id) * 50;

  return (
    <div className="grid gap-10 lg:grid-cols-2">
      <div className="space-y-4">
        <div className="card p-4">
          <div className="aspect-[4/3] w-full rounded-md bg-muted" />
        </div>
        <div className="grid grid-cols-4 gap-3">
          {[1,2,3,4].map((t) => (
            <div key={t} className="aspect-square rounded-md bg-muted" />
          ))}
        </div>
      </div>
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">E-step Model {id}</h1>
          <div className="flex items-center gap-2 text-amber-500" aria-label="Beoordeling">
            <span>★</span><span>★</span><span>★</span><span>★</span><span className="text-amber-300">★</span>
            <span className="text-sm text-slate-500">(128)</span>
          </div>
        </div>
        <div className="text-3xl font-semibold">€ {price},-</div>
        <p className="text-slate-600 dark:text-slate-300">
          Wendbare en krachtige e-step voor woon-werk en vrije tijd. Lichtgewicht frame,
          lange accuduur en veilige schijfremmen.
        </p>
        <form action="/winkelwagen" method="get" className="space-y-4 max-w-sm">
          <label className="block text-sm">
            Kleur
            <select name="color" className="mt-1 w-full rounded-md border border-[--color-border] bg-white px-3 py-2">
              <option>Zwart</option>
              <option>Wit</option>
              <option>Blauw</option>
            </select>
          </label>
          <label className="block text-sm">
            Aantal
            <input type="number" name="qty" defaultValue={1} min={1} className="mt-1 w-24 rounded-md border border-[--color-border] bg-white px-3 py-2" />
          </label>
          <input type="hidden" name="id" value={id} />
          <div className="flex gap-3">
            <button className="btn-primary" type="submit">Toevoegen aan winkelwagen</button>
            <a href="/afrekenen" className="inline-flex items-center justify-center rounded-md border border-[--color-border] px-5 py-2.5 font-medium hover:bg-muted">Direct afrekenen</a>
          </div>
        </form>
        <div className="grid grid-cols-2 gap-4 text-sm text-slate-600 dark:text-slate-300">
          <div className="rounded-lg border border-[--color-border] p-3">Gratis verzending</div>
          <div className="rounded-lg border border-[--color-border] p-3">2 jaar garantie</div>
        </div>
      </div>
    </div>
  );
}


