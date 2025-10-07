import Link from "next/link";

interface Product {
  id: string;
  title: string;
  price: number;
  category: string;
  isNew: boolean;
  image?: string;
}

export default function ProductCard({ product }: { product: Product }) {
  const categoryColors = {
    "E-steps": "from-blue-500 to-indigo-600",
    "E-bikes": "from-purple-500 to-pink-600",
    "Accessoires": "from-green-500 to-emerald-600"
  };

  const categoryColor = categoryColors[product.category as keyof typeof categoryColors] || "from-gray-500 to-gray-600";

  return (
    <Link href={`/producten/${product.id}`} className="group block">
      <div className="h-full bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-3 hover:border-blue-400 hover:rotate-1 dark:hover:border-blue-500 transition-all duration-300">
        
        {/* Product Image */}
        <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 relative overflow-hidden">
          {product.image ? (
            <>
              <img 
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-t ${categoryColor} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center text-6xl">
              {product.category === "E-steps" && "⚡"}
              {product.category === "E-bikes" && "🚴"}
              {product.category === "Accessoires" && "🎒"}
            </div>
          )}
          
          {/* Badges */}
          {product.isNew && (
            <span className={`absolute top-3 left-3 px-4 py-2 bg-gradient-to-r ${categoryColor} text-white text-xs font-bold rounded-xl shadow-xl animate-pulse`}>
              ✨ Nieuw
            </span>
          )}

          {/* Quick action on hover */}
          <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
            <button className={`w-full py-3 bg-gradient-to-r ${categoryColor} text-white rounded-xl font-bold text-sm shadow-lg hover:scale-105 transition-transform flex items-center justify-center gap-2`}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              Snel bekijken
            </button>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-5 space-y-3">
          <div className={`inline-block px-3 py-1 bg-gradient-to-r ${categoryColor} text-white text-xs font-semibold rounded`}>
            {product.category}
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
            {product.title}
          </h3>

          {/* Price & CTA */}
          <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
            <div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                €{product.price}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                Gratis verzending
              </div>
            </div>
            
            <svg className="w-6 h-6 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>

          {/* Rating & Extra Info */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <div className="flex">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-600 dark:text-gray-400 font-semibold">4.9</span>
              <span className="text-gray-400 dark:text-gray-500 text-xs">(247)</span>
            </div>

            {/* Product Features */}
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full font-semibold flex items-center gap-1">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Op voorraad
              </span>
              <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full font-semibold flex items-center gap-1">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                24u levering
              </span>
            </div>

            {/* Warranty Badge */}
            <div className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400">
              <svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="font-semibold">2 jaar garantie</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}