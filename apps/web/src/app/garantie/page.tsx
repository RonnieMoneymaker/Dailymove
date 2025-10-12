'use client'

import Link from 'next/link'
import { Shield, CheckCircle, ArrowRight } from 'lucide-react'

export default function GarantiePage() {
  return (
    <main className="bg-white">
      <section className="py-16 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <Shield className="h-16 w-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-black mb-4">2 Jaar Garantie</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Op alle e-steps en e-bikes
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-black mb-6">Garantievoorwaarden</h2>
            
            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-green-900 mb-4">Standaard Garantie</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                  <span>2 jaar fabrieksgarantie op alle e-steps en e-bikes</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                  <span>1 jaar garantie op accessoires en onderdelen</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                  <span>Gratis reparatie of vervanging bij fabricagefouten</span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mb-4">Wat dekt de garantie?</h3>
            <p>De garantie dekt alle fabricagefouten en materiaalgebreken. Dit betekent dat als er een defect optreedt dat niet veroorzaakt is door normaal gebruik, wij het product kosteloos repareren of vervangen.</p>

            <h3 className="text-2xl font-bold mb-4 mt-8">Uitsluitingen</h3>
            <p>De garantie dekt niet:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Normale slijtage</li>
              <li>Schade door verkeerd gebruik</li>
              <li>Ongevallen of valpartijen</li>
              <li>Modificaties door derden</li>
            </ul>

            <div className="text-center mt-12">
              <Link 
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all"
              >
                <span>Vragen? Neem contact op</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

