'use client'

import Link from 'next/link'
import { Wrench, CheckCircle, ArrowRight } from 'lucide-react'

export default function OnderhoudPage() {
  return (
    <main className="bg-white">
      <section className="py-16 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <Wrench className="h-16 w-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-black mb-4">Onderhoud & Service</h1>
          <p className="text-xl text-white/90">Houd je e-step of e-bike in topconditie</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-black mb-8">Onze Services</h2>
          
          <div className="space-y-6 mb-12">
            <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
              <h3 className="text-xl font-bold mb-3">Basis Onderhoudsbeurt - €49</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Algemene controle</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Bandenspanning check</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Remmen controle</span>
                </li>
              </ul>
            </div>

            <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-200">
              <h3 className="text-xl font-bold mb-3">Uitgebreide Beurt - €89</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Alles van basis beurt</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Accu check & optimalisatie</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Software update</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Schoonmaakbeurt</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all"
            >
              <span>Plan een afspraak</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

