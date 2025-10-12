'use client'

import { useState } from 'react'
import { ChevronDown, HelpCircle, ExternalLink } from 'lucide-react'
import Link from 'next/link'

export function EStepFAQPremium() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqCategories = [
    {
      category: 'Kopen & Bestellen',
      questions: [
        {
          question: 'Welke e-step past bij mij?',
          answer: 'De ideale e-step hangt af van je gebruik. Voor dagelijks woon-werkverkeer tot 15km raden we modellen aan met minimaal 30km bereik. Voor langere afstanden kies je voor premium modellen met 45km+ bereik. Bekijk onze interactieve koopgids voor persoonlijk advies op maat!'
        },
        {
          question: 'Hoe werkt de levering en bezorging?',
          answer: 'We bieden gratis verzending op alle bestellingen vanaf €50. Besteld voor 23:00? Dan bezorgen we de volgende werkdag! Je ontvangt een track & trace code om je bestelling te volgen. We werken samen met PostNL en DHL voor snelle en betrouwbare levering door heel Nederland.'
        },
        {
          question: 'Kan ik een e-step retourneren?',
          answer: 'Ja! Je hebt 30 dagen bedenktijd. Niet tevreden? Stuur de e-step gratis retour. We vergoeden het volledige aankoopbedrag binnen 5 werkdagen. De e-step moet wel in originele staat zijn met alle accessoires en verpakking.'
        },
        {
          question: 'Bieden jullie garantie?',
          answer: 'Alle e-steps komen met standaard 2 jaar fabrieksgarantie. Dit dekt fabricagefouten en defecten. Optioneel kun je bij aanschaf een extra all-risk verzekering afsluiten voor volledige dekking inclusief schade, diefstal en ongevallen.'
        }
      ]
    },
    {
      category: 'Techniek & Specificaties',
      questions: [
        {
          question: 'Hoe ver kan ik rijden op één acculading?',
          answer: 'Het bereik varieert per model tussen 20-60km. Dit hangt af van factoren zoals je gewicht, terrein, snelheid, temperatuur en rijstijl. In onze productbeschrijvingen vind je altijd het realistische bereik onder normale omstandigheden. Budget modellen: 20-30km, Midrange: 30-45km, Premium: 45-60km.'
        },
        {
          question: 'Hoe lang duurt het opladen?',
          answer: 'Standaard opladers doen er 4-6 uur over om volledig op te laden. Veel modellen hebben een snellaadfunctie waarmee je in 2-3 uur weer vol zit. Je kunt de e-step tijdens het laden gewoon gebruiken. Wij adviseren om niet altijd tot 0% te laten zakken voor een langere levensduur van je accu.'
        },
        {
          question: 'Wat is het maximale gewicht dat een e-step kan dragen?',
          answer: 'De meeste e-steps hebben een maximaal draagvermogen tussen 100-120kg. Premium modellen ondersteunen vaak tot 150kg. Dit is inclusief eventuele bagage. Voor zwaardere gebruikers raden we specifiek onze Heavy Duty serie aan met versterkte frames en krachtigere motoren.'
        },
        {
          question: 'Kan ik in de regen rijden?',
          answer: 'Ja! Alle onze e-steps hebben minimaal IPX4 waterdichtheid, wat betekent dat ze spatwaterdicht zijn. Premium modellen hebben vaak IPX7 rating en zijn waterbestendig. Je kunt dus veilig in de regen rijden. We raden wel aan om de e-step niet in diepe plassen te rijden en na gebruik droog te maken.'
        }
      ]
    },
    {
      category: 'Veiligheid & Wetgeving',
      questions: [
        {
          question: 'Mag ik overal met een e-step rijden?',
          answer: 'In Nederland mag je met e-steps op het fietspad rijden. Op de stoep mag alleen als de maximumsnelheid 6 km/u is. In sommige gemeentes gelden aanvullende regels, check altijd de lokale wetgeving. E-steps tot 25 km/u vallen onder dezelfde regels als fietsen. Snellere modellen mogen alleen op afgesloten terreinen.'
        },
        {
          question: 'Is een helm verplicht?',
          answer: 'In Nederland is het dragen van een helm niet wettelijk verplicht voor e-steps tot 25 km/u. Wel raden wij het ten zeerste aan voor je eigen veiligheid! Vooral bij hogere snelheden of in druk verkeer. Bekijk onze selectie stylish veiligheidshelmen speciaal voor e-step rijders.'
        },
        {
          question: 'Heb ik een verzekering nodig?',
          answer: 'Voor e-steps tot 25 km/u is verzekeren niet verplicht, maar wel verstandig. Je privé-aansprakelijkheidsverzekering dekt vaak schade die je met je e-step aan anderen toebrengt. Voor diefstal en eigen schade kun je een speciale e-step verzekering afsluiten. Wij bieden bij aankoop een optionele all-risk verzekering.'
        },
        {
          question: 'Wat zijn de belangrijkste veiligheidstips?',
          answer: 'Top 5 veiligheidstips: 1) Draag altijd een helm 2) Gebruik voor- en achterlicht bij duisternis 3) Check regelmatig de bandenspanning en remmen 4) Rij defensief en anticipeer op ander verkeer 5) Zorg voor goede zichtbaarheid met reflecterende kleding. Download onze gratis veiligheidshandleiding voor meer tips!'
        }
      ]
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold mb-4">
            <HelpCircle className="w-5 h-5" />
            <span>Hulp nodig? We staan voor je klaar!</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Veelgestelde Vragen over E-Steps
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Vind snel antwoorden op al je vragen - van aankoop tot onderhoud
          </p>
        </div>

        {/* FAQ Tabs/Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {faqCategories.map((category, catIndex) => (
            <div key={catIndex} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <div className="w-2 h-8 bg-gradient-to-b from-orange-500 to-red-500 rounded-full"></div>
                {category.category}
              </h3>

              <div className="space-y-3">
                {category.questions.map((faq, faqIndex) => {
                  const globalIndex = catIndex * 100 + faqIndex
                  const isOpen = openIndex === globalIndex

                  return (
                    <div
                      key={faqIndex}
                      className="border border-gray-200 rounded-xl overflow-hidden hover:border-orange-300 transition-colors"
                    >
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                        className="w-full flex items-start justify-between p-4 text-left hover:bg-orange-50 transition-colors"
                      >
                        <span className="font-semibold text-gray-900 pr-4">
                          {faq.question}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-orange-600 flex-shrink-0 transition-transform ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      
                      {isOpen && (
                        <div className="px-4 pb-4">
                          <p className="text-gray-700 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Vind je het antwoord niet?
          </h3>
          <p className="text-xl mb-6 opacity-90">
            Ons klantenservice team staat 7 dagen per week voor je klaar
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-full font-bold transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
              Bekijk Volledige FAQ Pagina
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 px-8 py-3 rounded-full font-bold transition-colors"
            >
              Neem Contact Op
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link
            href="/koopgids"
            className="p-4 bg-blue-50 hover:bg-blue-100 rounded-xl text-center transition-colors group"
          >
            <div className="text-3xl mb-2">📖</div>
            <div className="font-semibold text-gray-900 group-hover:text-blue-600">
              E-Step Koopgids
            </div>
          </Link>
          <Link
            href="/onderhoud"
            className="p-4 bg-green-50 hover:bg-green-100 rounded-xl text-center transition-colors group"
          >
            <div className="text-3xl mb-2">🔧</div>
            <div className="font-semibold text-gray-900 group-hover:text-green-600">
              Onderhoudstips
            </div>
          </Link>
          <Link
            href="/wetgeving"
            className="p-4 bg-purple-50 hover:bg-purple-100 rounded-xl text-center transition-colors group"
          >
            <div className="text-3xl mb-2">⚖️</div>
            <div className="font-semibold text-gray-900 group-hover:text-purple-600">
              Wetgeving
            </div>
          </Link>
          <Link
            href="/contact"
            className="p-4 bg-orange-50 hover:bg-orange-100 rounded-xl text-center transition-colors group"
          >
            <div className="text-3xl mb-2">💬</div>
            <div className="font-semibold text-gray-900 group-hover:text-orange-600">
              Live Chat
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

