export default function CheckoutPage() {
  return (
    <div className="grid gap-8 lg:grid-cols-3">
      <form className="card p-6 space-y-4 lg:col-span-2">
        <h1 className="text-3xl">Afrekenen</h1>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="text-sm">Voornaam
            <input className="mt-1 w-full rounded-md border border-[--color-border] bg-white px-3 py-2" required />
          </label>
          <label className="text-sm">Achternaam
            <input className="mt-1 w-full rounded-md border border-[--color-border] bg-white px-3 py-2" required />
          </label>
          <label className="text-sm sm:col-span-2">E-mail
            <input type="email" className="mt-1 w-full rounded-md border border-[--color-border] bg-white px-3 py-2" required />
          </label>
          <label className="text-sm sm:col-span-2">Adres
            <input className="mt-1 w-full rounded-md border border-[--color-border] bg-white px-3 py-2" required />
          </label>
          <label className="text-sm">Postcode
            <input className="mt-1 w-full rounded-md border border-[--color-border] bg-white px-3 py-2" required />
          </label>
          <label className="text-sm">Plaats
            <input className="mt-1 w-full rounded-md border border-[--color-border] bg-white px-3 py-2" required />
          </label>
        </div>
        <button className="btn-primary" type="submit">Bestelling plaatsen</button>
      </form>
      <aside className="card p-6 space-y-3 h-fit">
        <h2 className="text-xl font-semibold">Overzicht</h2>
        <div className="flex items-center justify-between">
          <span>Subtotaal</span>
          <span className="font-semibold">€ 749,-</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Verzending</span>
          <span>€ 0,-</span>
        </div>
        <div className="flex items-center justify-between border-t border-[--color-border] pt-3">
          <span>Totaal</span>
          <span className="font-semibold">€ 749,-</span>
        </div>
      </aside>
    </div>
  );
}


