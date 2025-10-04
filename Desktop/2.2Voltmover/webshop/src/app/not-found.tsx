import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] grid place-items-center text-center">
      <div className="space-y-4">
        <h1 className="text-3xl">Pagina niet gevonden</h1>
        <p className="text-slate-600 dark:text-slate-300">De pagina die je zoekt bestaat niet.</p>
        <Link className="btn-primary" href="/">Terug naar homepage</Link>
      </div>
    </div>
  );
}




