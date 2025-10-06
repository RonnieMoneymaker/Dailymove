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
      <div className="h-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:shadow-xl hover:border-transparent transition-all">
        
        {/* Product Image */}
        <div className="aspect-square bg-gray-100 dark:bg-gray-700 relative overflow-hidden">
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
            <span className={`absolute top-3 left-3 px-3 py-1.5 bg-gradient-to-r ${categoryColor} text-white text-xs font-semibold rounded-lg shadow-lg`}>
              Nieuw
            </span>
          )}

          {/* Quick action on hover */}
          <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="w-full py-2 bg-white text-gray-900 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors">
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

          {/* Rating */}
          <div className="flex items-center gap-2 text-sm">
            <div className="flex">
              {[1,2,3,4,5].map(i => (
                <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-gray-600 dark:text-gray-400">4.9</span>
          </div>
        </div>
      </div>
    </Link>
  );
}