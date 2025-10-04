export default function ContactPage() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="space-y-4">
        <h1 className="text-3xl">Contact</h1>
        <p className="text-slate-600 dark:text-slate-300">
          Vragen over een product of bestelling? Neem gerust contact op.
        </p>
        <div className="space-y-2 text-sm">
          <div>E-mail: support@emovement.example</div>
          <div>Tel: 010 - 123 45 67</div>
        </div>
      </div>
      <form className="card p-6 space-y-3">
        <label className="text-sm">Naam
          <input className="mt-1 w-full rounded-md border border-[--color-border] bg-white px-3 py-2" />
        </label>
        <label className="text-sm">E-mail
          <input type="email" className="mt-1 w-full rounded-md border border-[--color-border] bg-white px-3 py-2" />
        </label>
        <label className="text-sm">Bericht
          <textarea rows={4} className="mt-1 w-full rounded-md border border-[--color-border] bg-white px-3 py-2" />
        </label>
        <button className="btn-primary" type="submit">Versturen</button>
      </form>
    </div>
  );
}



