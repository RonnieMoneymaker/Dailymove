'use client'

import { Star, BadgeCheck, ThumbsUp } from 'lucide-react'

export default function ReviewsPage() {
  const allReviews = [
    { name: 'Lisa van der Berg', rating: 5, text: 'Fantastische service! Besteld op maandag en dinsdag al binnen.', product: 'Xiaomi Scooter', date: '3 dagen geleden', avatar: 'https://i.pravatar.cc/150?img=5', helpful: 89 },
    { name: 'Tom Bakker', rating: 5, text: 'Beste prijs-kwaliteit verhouding! Overal gekeken en dit was de beste deal.', product: 'VanMoof S5', date: '1 week geleden', avatar: 'https://i.pravatar.cc/150?img=12', helpful: 67 },
    { name: 'Sarah Jansen', rating: 5, text: 'Super blij! WhatsApp support is geweldig.', product: 'Segway MAX', date: '2 weken geleden', avatar: 'https://i.pravatar.cc/150?img=9', helpful: 124 },
    { name: 'Mark Peters', rating: 5, text: 'Snelle levering en top product. Aanrader!', product: 'Pure Air Pro', date: '3 weken geleden', avatar: 'https://i.pravatar.cc/150?img=15', helpful: 56 },
    { name: 'Anna de Vries', rating: 5, text: 'Perfecte e-step voor dagelijks gebruik. Blij mee!', product: 'Ninebot E25', date: '1 maand geleden', avatar: 'https://i.pravatar.cc/150?img=24', helpful: 43 },
    { name: 'Kevin Smit', rating: 4, text: 'Goede kwaliteit en snelle verzending.', product: 'Kaabo Mantis', date: '1 maand geleden', avatar: 'https://i.pravatar.cc/150?img=33', helpful: 38 },
  ]

  return (
    <main className="bg-white">
      <section className="py-16 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/20 backdrop-blur-md rounded-full mb-6">
            <Star className="h-8 w-8 fill-yellow-400 text-yellow-400" />
            <span className="text-3xl font-black">4.9 / 5</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">25.000+ Klantbeoordelingen</h1>
          <p className="text-xl text-white/90">Zie wat onze klanten over ons zeggen</p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allReviews.map((review, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg border-2 border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full border-2 border-blue-200" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <div className="font-bold">{review.name}</div>
                      <BadgeCheck className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-3 w-3 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-900 mb-4">"{review.text}"</p>
                <div className="border-t pt-3 text-sm text-gray-600">
                  <div className="mb-2">Kocht: {review.product}</div>
                  <div className="flex items-center justify-between">
                    <span>{review.date}</span>
                    <div className="flex items-center gap-1">
                      <ThumbsUp className="h-3 w-3" />
                      <span>{review.helpful}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

