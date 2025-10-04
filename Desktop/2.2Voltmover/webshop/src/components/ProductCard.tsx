import Link from "next/link";

export type Product = { id: string; title: string; price: number; imageUrl?: string; category?: string; isNew?: boolean };

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/producten/${product.id}`} className="group block">
      <div className="card overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-blue-50/80 to-orange-50/40 dark:from-blue-900/20 dark:to-amber-900/10">
          {/* Placeholder image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[var(--brand)] to-blue-600 text-white flex items-center justify-center font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">EM</div>
          </div>

          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {(product.isNew !== false) && (
              <span className="inline-flex items-center rounded-full bg-gradient-to-r from-[var(--accent)] to-orange-500 px-3 py-1 text-xs font-bold text-white shadow-md">Nieuw</span>
            )}
            {product.category && (
              <span className="inline-flex items-center rounded-full bg-[var(--brand)]/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-white shadow-sm">
                {product.category}
              </span>
            )}
          </div>
        </div>

        <div className="p-6">
          <h3 className="font-bold text-lg text-gray-900 dark:text-white line-clamp-2 group-hover:text-[var(--brand)] transition-colors duration-200">{product.title}</h3>
          <div className="mt-4 flex items-end justify-between">
            <div className="space-y-1">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-black text-gray-900 dark:text-white">€{product.price.toLocaleString('nl-NL')}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">incl. btw</span>
              </div>
              <div className="flex items-center gap-1 text-amber-400">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">4.8 (127)</span>
              </div>
            </div>
            <button className="btn-primary text-sm px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5 6m0 0h9" />
              </svg>
              Toevoegen
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}


