"use client";

import { Star } from "lucide-react";

export default function TrustpilotReviews() {
  const reviews = [
    {
      name: "Sophie van der Berg",
      date: "3 dagen geleden",
      rating: 5,
      title: "Geweldige klantenservice!",
      text: "Mijn e-bike werd binnen 24 uur geleverd en de kwaliteit is uitstekend. Het team heeft me perfect geholpen met het kiezen van het juiste model. Absoluut een aanrader!",
      verified: true,
      avatar: "https://i.pravatar.cc/100?img=5"
    },
    {
      name: "Mark Jansen", 
      date: "1 week geleden",
      rating: 5,
      title: "Beste e-step die ik ooit gehad heb",
      text: "Na maanden onderzoek deze besteld en totaal niet spijt van. De accu gaat lang mee en de snelheid is perfect voor in de stad. Top product!",
      verified: true,
      avatar: "https://i.pravatar.cc/100?img=12"
    },
    {
      name: "Lisa Vermeer",
      date: "2 weken geleden", 
      rating: 5,
      title: "Snelle levering en topkwaliteit",
      text: "Besteld op maandag, dinsdag al in huis! De e-bike rijdt heerlijk en het design is prachtig. Precies wat ik zocht voor mijn dagelijkse woon-werkverkeer.",
      verified: true,
      avatar: "https://i.pravatar.cc/100?img=47"
    },
    {
      name: "David Peters",
      date: "3 weken geleden",
      rating: 5,
      title: "Uitstekende prijs-kwaliteit verhouding",
      text: "Ik heb meerdere webshops vergeleken en dit was veruit de beste deal. De kwaliteit van de step is top en de service was perfect. Heel blij mee!",
      verified: true,
      avatar: "https://i.pravatar.cc/100?img=33"
    },
    {
      name: "Emma de Vries",
      date: "1 maand geleden",
      rating: 5,
      title: "Aanrader voor iedereen!",
      text: "Mijn eerste e-bike en ik ben er super blij mee. Het team heeft al mijn vragen beantwoord en me goed geholpen. De fiets is comfortabel en krachtig.",
      verified: true,
      avatar: "https://i.pravatar.cc/100?img=9"
    },
    {
      name: "Thomas Bakker",
      date: "1 maand geleden",
      rating: 5,
      title: "Professionele service",
      text: "Van bestelling tot levering alles perfect geregeld. De e-step doet precies wat beloofd wordt. Ik raad Emovement aan iedereen aan!",
      verified: true,
      avatar: "https://i.pravatar.cc/100?img=14"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-purple-900/10 dark:to-gray-900">
      <div className="container-edge">
        <div className="max-w-7xl mx-auto">
          {/* Header met Trustpilot Branding */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-lg border-2 border-purple-200 dark:border-purple-800">
              <div className="flex items-center gap-2">
                <Star className="w-6 h-6 fill-green-500 text-green-500" />
                <span className="text-3xl font-black text-gray-900 dark:text-white">Trustpilot</span>
              </div>
            </div>
            
            <h2 className="text-5xl font-black text-gray-900 dark:text-white mb-4">
              Wat onze klanten <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">zeggen</span>
            </h2>
            
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="flex gap-1">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className="w-8 h-8 fill-green-500 text-green-500" />
                ))}
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">4.9 / 5</div>
            </div>
            
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Gebaseerd op <span className="font-bold text-purple-600 dark:text-purple-400">2.847 geverifieerde reviews</span>
            </p>
          </div>

          {/* Reviews Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {reviews.map((review, index) => (
              <div 
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-purple-100 dark:border-purple-900 hover:border-purple-400 dark:hover:border-purple-600 hover:scale-105"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map(i => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i <= review.rating ? 'fill-green-500 text-green-500' : 'fill-gray-300 text-gray-300'}`}
                    />
                  ))}
                </div>

                {/* Review Title */}
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  {review.title}
                </h3>

                {/* Review Text */}
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {review.text}
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <img 
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full border-2 border-purple-200 dark:border-purple-800"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <div className="font-bold text-gray-900 dark:text-white">
                        {review.name}
                      </div>
                      {review.verified && (
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {review.date}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trustpilot Logo & CTA */}
          <div className="text-center">
            <div className="inline-flex items-center gap-4 px-8 py-4 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border-2 border-purple-200 dark:border-purple-800">
              <Star className="w-8 h-8 fill-green-500 text-green-500" />
              <div className="text-left">
                <div className="text-sm text-gray-600 dark:text-gray-400">Beoordeling op</div>
                <div className="text-xl font-black text-gray-900 dark:text-white">Trustpilot</div>
              </div>
              <a 
                href="https://nl.trustpilot.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-bold hover:from-purple-700 hover:to-blue-700 transition-all"
              >
                Bekijk alle reviews →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
