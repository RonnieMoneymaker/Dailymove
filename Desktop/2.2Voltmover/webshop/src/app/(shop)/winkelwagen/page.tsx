export default function CartPage() {
  // Simple placeholder; wiring to state can be added next
  const items = [
    { id: "1", title: "E-step Urban X", price: 749, qty: 1 },
  ];
  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl">Winkelwagen</h1>
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-4">
          {items.map((i) => (
            <div key={i.id} className="card p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="size-16 rounded bg-muted" />
                <div>
                  <div className="font-medium">{i.title}</div>
                  <div className="text-slate-600 dark:text-slate-300">€ {i.price},-</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <input type="number" defaultValue={i.qty} min={1} className="w-20 rounded-md border border-[--color-border] bg-white px-3 py-2" />
                <button className="text-red-600 hover:underline">Verwijder</button>
              </div>
            </div>
          ))}
        </div>
        <aside className="card p-4 space-y-3 h-fit">
          <div className="flex items-center justify-between">
            <span>Subtotaal</span>
            <span className="font-semibold">€ {total},-</span>
          </div>
          <a href="/afrekenen" className="btn-primary w-full text-center">Verder naar afrekenen</a>
        </aside>
      </div>
    </div>
  );
}


