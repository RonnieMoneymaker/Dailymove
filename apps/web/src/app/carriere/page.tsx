'use client'

import Link from 'next/link'
import { Briefcase, Heart, Users, TrendingUp, ArrowRight } from 'lucide-react'

export default function CarrierePage() {
  return (
    <main className="bg-white">
      <section className="py-16 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <Briefcase className="h-16 w-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-black mb-4">Werken bij DailyMove</h1>
          <p className="text-xl text-white/90">Word deel van ons groeiende team</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-black mb-8 text-center">Waarom bij ons werken?</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-blue-50 p-8 rounded-2xl">
              <TrendingUp className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Groeiende Markt</h3>
              <p className="text-gray-700">Word deel van de snelst groeiende e-mobility markt in Nederland.</p>
            </div>
            <div className="bg-purple-50 p-8 rounded-2xl">
              <Users className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Geweldig Team</h3>
              <p className="text-gray-700">Werk samen met gepassioneerde collega's die net zo enthousiast zijn als jij.</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-700 mb-6">Momenteel hebben we geen openstaande vacatures, maar we zijn altijd op zoek naar talent!</p>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all"
            >
              <span>Stuur een open sollicitatie</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

