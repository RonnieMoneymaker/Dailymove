'use client'

import Link from 'next/link'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function VestigingenPage() {
  const vestigingen = [
    { stad: 'Amsterdam', adres: 'Voorbeeldstraat 123', postcode: '1012 AB', telefoon: '+31 20 1234567' },
    { stad: 'Rotterdam', adres: 'Testlaan 456', postcode: '3011 CD', telefoon: '+31 10 7654321' },
    { stad: 'Utrecht', adres: 'Demoplein 789', postcode: '3511 EF', telefoon: '+31 30 9876543' },
  ]

  return (
    <main className="bg-white">
      <section className="py-16 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <MapPin className="h-16 w-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-black mb-4">Onze Vestigingen</h1>
          <p className="text-xl text-white/90">Kom langs in één van onze winkels</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {vestigingen.map((vestiging, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-xl border-2 border-gray-100">
                <h3 className="text-2xl font-black text-gray-900 mb-6">{vestiging.stad}</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <div>{vestiging.adres}</div>
                      <div>{vestiging.postcode} {vestiging.stad}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-green-600" />
                    <a href={`tel:${vestiging.telefoon}`} className="hover:text-blue-600">{vestiging.telefoon}</a>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                    <div className="text-sm">
                      <div>Ma-Vr: 09:00 - 18:00</div>
                      <div>Za: 10:00 - 17:00</div>
                      <div>Zo: Gesloten</div>
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

