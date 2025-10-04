export default function LoadingProducts() {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="h-8 w-48 rounded bg-muted" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="card p-4">
            <div className="aspect-[4/3] w-full rounded-md bg-muted" />
            <div className="mt-4 h-5 w-2/3 rounded bg-muted" />
            <div className="mt-2 h-4 w-1/3 rounded bg-muted" />
          </div>
        ))}
      </div>
    </div>
  );
}




