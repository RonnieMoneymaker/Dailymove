'use client'

import Link from 'next/link'
import { Flame, Star, ArrowRight, Heart } from 'lucide-react'

export default function SalePage() {
  const saleProducts = [
    { name: 'Xiaomi Mi Scooter 4 Pro', price: '€599', oldPrice: '€699', discount: '-14%', image: '/images/products/xiaomi-scooter-real.jpg', rating: 4.8, href: '/product/xiaomi-scooter' },
    { name: 'Pure Air Pro', price: '€449', oldPrice: '€549', discount: '-18%', image: '/images/products/pure-air.jpg', rating: 4.7, href: '/product/pure-air' },
    { name: 'Segway MAX G30LP', price: '€799', oldPrice: '€899', discount: '-11%', image: '/images/products/segway-max.jpg', rating: 4.9, href: '/product/segway-max' },
    { name: 'Kaabo Mantis', price: '€2.899', oldPrice: '€3.299', discount: '-12%', image: '/images/products/kaabo-mantis.jpg', rating: 4.9, href: '/product/kaabo' },
  ]

  return (
    <main className="bg-white">
      <section className="py-16 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <Flame className="h-16 w-16 mx-auto mb-6 animate-pulse" />
          <h1 className="text-5xl md:text-6xl font-black mb-4">🔥 Mega Sale</h1>
          <p className="text-2xl text-white/90 mb-6">Tot 30% Korting Op Geselecteerde Producten</p>
          <div className="inline-block px-6 py-3 bg-white/20 backdrop-blur-md rounded-full text-lg font-bold">
            Beperkte voorraad - Wees er snel bij!
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {saleProducts.map((product, idx) => (
              <Link 
                key={idx}
                href={product.href}
                className="group bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-gray-100"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-3 right-3 px-4 py-2 bg-red-500 text-white rounded-full font-black text-lg shadow-xl">
                    {product.discount}
                  </div>
                  <button className="absolute top-3 left-3 p-2 bg-white/90 rounded-full opacity-0 group-hover:opacity-100 transition-all">
                    <Heart className="h-4 w-4" />
                  </button>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                    ))}
                    <span className="ml-2 text-sm font-bold">{product.rating}</span>
                  </div>
                  <h3 className="font-bold text-base text-gray-900 mb-3 group-hover:text-blue-600">{product.name}</h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-3xl font-black text-gray-900">{product.price}</span>
                    <span className="text-base text-gray-400 line-through">{product.oldPrice}</span>
                  </div>
                  <button className="w-full py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl font-bold hover:from-orange-700 hover:to-red-700 transition-all">
                    Bekijk Deal
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

