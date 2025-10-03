type Props = { params: Promise<{ id: string }> };

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params;
  const priceBase = 699;
  const price = priceBase + Number(id) * 50;

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div className="card p-4">
        <div className="aspect-[4/3] w-full rounded-md bg-muted" />
      </div>
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">E-step Model {id}</h1>
        <p className="text-slate-600 dark:text-slate-300">
          Wendbare en krachtige e-step voor woon-werk en vrije tijd.
        </p>
        <div className="text-2xl font-semibold">€ {price},-</div>
        <form action="/winkelwagen" method="get" className="space-y-3">
          <label className="block text-sm">
            Aantal
            <input type="number" name="qty" defaultValue={1} min={1} className="mt-1 w-24 rounded-md border border-[--color-border] bg-white px-3 py-2" />
          </label>
          <input type="hidden" name="id" value={id} />
          <button className="btn-primary" type="submit">Toevoegen aan winkelwagen</button>
        </form>
      </div>
    </div>
  );
}


