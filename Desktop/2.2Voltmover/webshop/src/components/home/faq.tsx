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
    <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
      <div className="container-edge">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Veelgestelde vragen
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Alles wat je wilt weten over onze service
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                  aria-expanded={openIndex === index}
                >
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    )}
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-4 border-t border-gray-100 dark:border-gray-700 pt-4">
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-8 p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Nog meer vragen?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              Neem contact op met ons team
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="/contact" className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm">
                Contact opnemen
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


