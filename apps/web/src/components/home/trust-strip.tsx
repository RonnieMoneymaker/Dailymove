export function TrustStrip() {
  const logos = ['NOS', 'RTL Z', 'Bright', 'AD', 'Tweakers']
  return (
    <section className="bg-white border-t">
      <div className="container py-8">
        <div className="text-center text-sm text-gray-500 mb-4">Bekend van</div>
        <div className="flex flex-wrap items-center justify-center gap-8 opacity-70">
          {logos.map((name) => (
            <div key={name} className="text-gray-400 text-base md:text-lg tracking-wide">
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


