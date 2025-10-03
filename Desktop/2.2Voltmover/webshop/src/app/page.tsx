export default function Home() {
  return (
    <div className="space-y-12">
      <section className="grid gap-6 items-center md:grid-cols-2">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl">Beweeg slimmer met Emovement</h1>
          <p className="text-slate-600 dark:text-slate-300 text-lg">
            Ontdek elektrische fietsen, steps en onderdelen. Duurzaam, snel en stijlvol.
          </p>
          <div className="flex gap-3">
            <a className="btn-primary" href="/producten">Shop nu</a>
            <a className="inline-flex items-center justify-center rounded-md border border-[--color-border] px-5 py-2.5 font-medium hover:bg-muted" href="/over">Meer over ons</a>
          </div>
        </div>
        <div className="card p-6">
          <div className="aspect-[4/3] w-full bg-gradient-to-br from-brand/20 via-accent/10 to-brand/30 rounded-lg grid place-items-center text-brand">
            Emovement
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-baseline justify-between">
          <h2 className="text-2xl">Populaire producten</h2>
          <a className="text-brand hover:underline" href="/producten">Alles bekijken</a>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1,2,3].map((i) => (
            <a key={i} href={`/producten/${i}`} className="card group p-4">
              <div className="aspect-[4/3] w-full rounded-md bg-muted" />
              <div className="mt-4">
                <h3 className="font-semibold group-hover:text-brand">E-step Model {i}</h3>
                <p className="text-slate-600 dark:text-slate-300">€ {699 + i * 50},-</p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
