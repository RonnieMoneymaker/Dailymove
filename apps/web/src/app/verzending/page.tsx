'use client'

import Link from 'next/link'
import { Truck, Clock, MapPin, Package, CheckCircle, ArrowRight } from 'lucide-react'

export default function VerzendingPage() {
  return (
    <main className="bg-white">
      <section className="py-16 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <Truck className="h-16 w-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-black mb-4">Verzending & Retour</h1>
          <p className="text-xl text-white/90">
            Gratis verzending • Vandaag besteld, morgen in huis
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <Truck className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Gratis Verzending</h3>
              <p className="text-gray-600">Vanaf €50 in heel Nederland</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <Clock className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Snelle Levering</h3>
              <p className="text-gray-600">Voor 23:00 besteld = morgen in huis</p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-xl">
              <Package className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Track & Trace</h3>
              <p className="text-gray-600">Volg je pakket realtime</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-black mb-6">Verzendkosten</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                <span><strong>Gratis verzending</strong> bij bestellingen vanaf €50</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                <span>€4,95 verzendkosten bij bestellingen onder €50</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                <span>Express levering mogelijk (voor 12:00 besteld = vandaag bezorgd)</span>
              </li>
            </ul>

            <h2 className="text-3xl font-black mb-6 mt-12">Retourbeleid</h2>
            <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-bold text-orange-900 mb-4">30 Dagen Bedenktijd</h3>
              <p>Niet tevreden? Je kunt je bestelling tot 30 dagen na ontvangst retourneren. Geld terug garantie!</p>
            </div>

            <h3 className="text-2xl font-bold mb-4">Hoe retourneren?</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Neem contact met ons op via email of telefoon</li>
              <li>Ontvang een retourlabel</li>
              <li>Stuur het product terug in originele staat</li>
              <li>Ontvang binnen 5 werkdagen je geld terug</li>
            </ol>

            <div className="text-center mt-12">
              <Link 
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all"
              >
                <span>Contact opnemen</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

