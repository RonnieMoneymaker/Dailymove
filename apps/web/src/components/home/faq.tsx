'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: 'Hoe snel wordt mijn E-step geleverd?',
    answer: 'Bij bestelling voor 23:59 wordt je E-step de volgende werkdag gratis thuisbezorgd. We werken samen met betrouwbare koeriers voor een veilige levering.'
  },
  {
    question: 'Welke garantie krijg ik op mijn E-step?',
    answer: 'Alle E-steps komen met 2 jaar volledige garantie. Dit dekt zowel onderdelen als reparaties. Daarnaast bieden we 30 dagen retourrecht als je niet 100% tevreden bent.'
  },
  {
    question: 'Zijn jullie E-steps toegestaan op de openbare weg?',
    answer: 'Ja, alle onze E-steps voldoen aan de Nederlandse wetgeving. Ze hebben een maximumsnelheid van 25 km/h en zijn voorzien van de vereiste verlichting en reflectoren.'
  },
  {
    question: 'Hoe lang gaat de batterij mee?',
    answer: 'De batterijduur varieert per model, maar gemiddeld kun je 25-45 km rijden op een volle lading. Dit hangt af van factoren zoals gewicht, terrein en rijstijl.'
  },
  {
    question: 'Kan ik mijn E-step uitproberen voordat ik definitief koop?',
    answer: 'Absoluut! We bieden 30 dagen retourrecht. Als je niet tevreden bent, kun je de E-step kosteloos retourneren en krijg je je geld terug.'
  },
  {
    question: 'Bieden jullie onderhoud en reparaties aan?',
    answer: 'Ja, we hebben een eigen servicecentrum waar we onderhoud en reparaties uitvoeren. Ook bieden we handige tips en tutorials voor basis onderhoud thuis.'
  },
  {
    question: 'Welke betaalmethoden accepteren jullie?',
    answer: 'We accepteren alle gangbare betaalmethoden: iDEAL, creditcard, PayPal, Klarna (achteraf betalen) en bankoverschrijving. Alle betalingen zijn 100% veilig via SSL-encryptie.'
  },
  {
    question: 'Is er klantenservice beschikbaar als ik vragen heb?',
    answer: 'Natuurlijk! Onze Nederlandse klantenservice is 24/7 bereikbaar via telefoon, email en live chat. We helpen je graag met al je vragen over producten, bestellingen en onderhoud.'
  }
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Veelgestelde vragen
          </h2>
          <p className="text-xl text-gray-600">
            Alles wat je wilt weten over onze E-steps en service
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                aria-expanded={openIndex === index}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="h-6 w-6 text-blue-600" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-gray-400" />
                  )}
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Heb je nog andere vragen?
          </h3>
          <p className="text-gray-600 mb-6">
            Onze klantenservice staat 24/7 voor je klaar
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
              Start live chat
            </button>
            <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors">
              Bel ons: 020-123-4567
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}


