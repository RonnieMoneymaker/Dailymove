"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'

const faqData = [
  {
    category: "Algemeen",
    questions: [
      {
        question: "Wat is VoltMover?",
        answer: "VoltMover is Nederland's #1 E-mobility specialist. We verkopen premium E-steps en E-bikes met de beste service en garantie. Ons doel is duurzame micro-mobiliteit toegankelijk maken voor iedereen."
      },
      {
        question: "Waar zijn jullie gevestigd?",
        answer: "Ons hoofdkantoor en showroom bevindt zich in Amsterdam op E-mobility Straat 123, 1012 AB Amsterdam. We zijn geopend van maandag tot vrijdag van 9:00-18:00 en zaterdag van 10:00-16:00."
      },
      {
        question: "Hoe lang bestaat VoltMover?",
        answer: "VoltMover is opgericht in 2020 en heeft sindsdien meer dan 25.000 tevreden klanten geholpen met hun E-mobility behoeften. We zijn uitgegroeid tot de marktleider in Nederland."
      }
    ]
  },
  {
    category: "Producten",
    questions: [
      {
        question: "Welke merken verkopen jullie?",
        answer: "We verkopen alleen de beste merken zoals Xiaomi, Segway, Kaabo, Pure Air, Ninebot en Razor. Alle producten zijn zorgvuldig geselecteerd op kwaliteit, betrouwbaarheid en prijs-kwaliteitverhouding."
      },
      {
        question: "Hoe kies ik de juiste E-step?",
        answer: "De keuze hangt af van je behoeften: bereik, snelheid, gewicht en budget. Voor dagelijks woon-werkverkeer raden we de Xiaomi Mi Electric Scooter 4 Pro aan. Voor lange ritten de Segway Ninebot MAX G30LP. Onze experts helpen je graag met advies."
      },
      {
        question: "Wat is het verschil tussen E-steps en E-bikes?",
        answer: "E-steps zijn compacte, opvouwbare scooters voor korte ritten (5-50km). E-bikes zijn elektrische fietsen met trapondersteuning voor langere afstanden (50-150km). E-steps zijn ideaal voor de stad, E-bikes voor recreatie en langere ritten."
      },
      {
        question: "Hoe lang gaat een batterij mee?",
        answer: "Dit verschilt per model. De Xiaomi Mi Electric Scooter 4 Pro heeft een bereik van 30km, de Segway Ninebot MAX G30LP tot 40km, en de Kaabo Mantis 8 Pro tot 50km. Factoren zoals gewicht, snelheid en terrein beïnvloeden het bereik."
      }
    ]
  },
  {
    category: "Bestelling & Levering",
    questions: [
      {
        question: "Hoe lang duurt de levering?",
        answer: "Voorraadproducten leveren we binnen 1-2 werkdagen. Voor producten die niet op voorraad zijn, duurt het 3-5 werkdagen. We bieden ook express levering aan voor een extra toeslag."
      },
      {
        question: "Is verzending gratis?",
        answer: "Ja! We bieden gratis verzending vanaf €50. Voor bestellingen onder €50 rekenen we €4,95 verzendkosten. Express levering kost €9,95 extra."
      },
      {
        question: "Kan ik mijn bestelling annuleren?",
        answer: "Ja, je kunt je bestelling annuleren zolang deze nog niet is verzonden. Neem contact met ons op via info@voltmover.nl of 020-123-4567. Na verzending kun je gebruik maken van ons 30-dagen retourrecht."
      },
      {
        question: "Welke betaalmethoden accepteren jullie?",
        answer: "We accepteren iDEAL, creditcard (Visa, Mastercard), PayPal, Apple Pay en Klarna. Alle betalingen zijn 100% veilig en beveiligd met SSL encryptie."
      }
    ]
  },
  {
    category: "Garantie & Service",
    questions: [
      {
        question: "Hoe lang is de garantie?",
        answer: "Alle E-steps en E-bikes hebben 2 jaar fabrieksgarantie. Batterijen hebben 1 jaar garantie. We bieden ook uitgebreide servicepakketten aan voor extra bescherming."
      },
      {
        question: "Wat valt er onder de garantie?",
        answer: "De garantie dekt fabricagefouten en defecten onder normaal gebruik. Slijtage, schade door onjuist gebruik, ongelukken of weersinvloeden vallen niet onder de garantie. Batterijen hebben een beperkte garantie van 1 jaar."
      },
      {
        question: "Waar kan ik mijn E-step laten repareren?",
        answer: "We hebben een netwerk van gecertificeerde servicepartners door heel Nederland. Je kunt je E-step ook naar ons hoofdkantoor in Amsterdam sturen voor reparatie. Voor kleine reparaties bieden we ook een mobiele service aan."
      },
      {
        question: "Hoe onderhoud ik mijn E-step?",
        answer: "Regelmatig onderhoud verlengt de levensduur van je E-step. Controleer maandelijks de bandenspanning, reinig de E-step regelmatig, laad de batterij op volgens de instructies en laat jaarlijks een onderhoudsbeurt uitvoeren door een professional."
      }
    ]
  },
  {
    category: "Retour & Retourneren",
    questions: [
      {
        question: "Kan ik mijn bestelling retourneren?",
        answer: "Ja, je hebt 30 dagen om je bestelling te retourneren. Het product moet in originele staat zijn, compleet met alle accessoires en verpakking. We betalen de retourkosten terug als het product defect is."
      },
      {
        question: "Hoe werkt het retourproces?",
        answer: "Stuur een e-mail naar info@voltmover.nl met je bestelnummer en reden voor retour. We sturen je een retourlabel en instructies. Na ontvangst en controle van het product, krijg je binnen 5 werkdagen je geld terug."
      },
      {
        question: "Wanneer krijg ik mijn geld terug?",
        answer: "Na ontvangst en controle van het geretourneerde product, krijg je binnen 5 werkdagen je geld terug op dezelfde manier als je hebt betaald. Voor iDEAL en creditcard betalingen kan het 1-3 werkdagen duren."
      }
    ]
  }
]

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("Algemeen")
  const [openQuestions, setOpenQuestions] = useState<number[]>([])

  const toggleQuestion = (index: number) => {
    setOpenQuestions(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const currentCategory = faqData.find(cat => cat.category === activeCategory)

  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Veelgestelde Vragen</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Hier vind je antwoorden op de meest gestelde vragen over onze E-steps, E-bikes en service.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-4">
        {/* Category Navigation */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <h2 className="font-semibold mb-4">Categorieën</h2>
            <div className="space-y-2">
              {faqData.map((category) => (
                <Button
                  key={category.category}
                  variant={activeCategory === category.category ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveCategory(category.category)}
                >
                  {category.category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Content */}
        <div className="lg:col-span-3">
          <div className="space-y-4">
            {currentCategory?.questions.map((faq, index) => (
              <div key={index} className="border rounded-lg">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  onClick={() => toggleQuestion(index)}
                >
                  <span className="font-medium">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 transition-transform ${
                      openQuestions.includes(index) ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openQuestions.includes(index) && (
                  <div className="px-6 pb-4">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-12 border rounded-xl p-8 bg-gradient-to-br from-blue-50 to-indigo-50 text-center">
            <h3 className="text-xl font-semibold mb-2">Vraag niet gevonden?</h3>
            <p className="text-muted-foreground mb-6">
              Ons team van experts staat klaar om je te helpen met al je vragen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <a href="/contact">Contact opnemen</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="tel:020-123-4567">020-123-4567</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


