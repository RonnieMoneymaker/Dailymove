'use client'

import { useState } from 'react'
import { ChevronRight, ArrowLeft, Sparkles, Zap, MapPin, Euro, Target } from 'lucide-react'
import Link from 'next/link'

export function ProductFinderQuiz() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [showResults, setShowResults] = useState(false)

  const questions = [
    {
      id: 'usage',
      question: 'Waarvoor ga je de e-step/e-bike gebruiken?',
      icon: Target,
      options: [
        { value: 'commute', label: '🏙️ Woon-werk verkeer', description: 'Dagelijks naar kantoor' },
        { value: 'leisure', label: '🌳 Recreatie', description: 'Weekend uitstapjes' },
        { value: 'sport', label: '⚡ Sport & Stunts', description: 'Off-road avontuur' },
        { value: 'shopping', label: '🛍️ Boodschappen', description: 'Door de stad' },
      ]
    },
    {
      id: 'distance',
      question: 'Hoeveel kilometer rij je gemiddeld per dag?',
      icon: MapPin,
      options: [
        { value: 'short', label: '0-10 km', description: 'Korte ritjes' },
        { value: 'medium', label: '10-25 km', description: 'Gemiddelde afstand' },
        { value: 'long', label: '25-50 km', description: 'Lange afstand' },
        { value: 'verylong', label: '50+ km', description: 'Extra lang bereik' },
      ]
    },
    {
      id: 'budget',
      question: 'Wat is je budget?',
      icon: Euro,
      options: [
        { value: 'low', label: '€200 - €400', description: 'Budget vriendelijk' },
        { value: 'medium', label: '€400 - €800', description: 'Mid-range kwaliteit' },
        { value: 'high', label: '€800 - €1500', description: 'Premium segment' },
        { value: 'premium', label: '€1500+', description: 'Top of the line' },
      ]
    },
    {
      id: 'speed',
      question: 'Welke snelheid heb je nodig?',
      icon: Zap,
      options: [
        { value: 'slow', label: '15-20 km/u', description: 'Rustig cruisen' },
        { value: 'medium', label: '20-25 km/u', description: 'Standaard snelheid' },
        { value: 'fast', label: '25-35 km/u', description: 'Snelle verplaatsing' },
        { value: 'veryfast', label: '35+ km/u', description: 'Maximum snelheid' },
      ]
    },
  ]

  const currentQuestion = questions[step]

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [currentQuestion.id]: value })
    
    if (step < questions.length - 1) {
      setTimeout(() => setStep(step + 1), 300)
    } else {
      setTimeout(() => setShowResults(true), 300)
    }
  }

  const getRecommendations = () => {
    // Simple recommendation logic based on answers
    const usage = answers.usage
    const budget = answers.budget
    const distance = answers.distance

    let recommendations = []

    if (budget === 'low' && distance === 'short') {
      recommendations.push({
        name: 'Ninebot E25E',
        price: 399,
        image: '/images/products/escooter-1.jpg',
        match: 95,
        why: 'Perfect voor korte ritten en betaalbaar'
      })
    }

    if (budget === 'medium' || budget === 'high') {
      recommendations.push({
        name: 'Xiaomi Mi Scooter 4 Pro',
        price: 599,
        image: '/images/products/xiaomi-scooter-real.jpg',
        match: 92,
        why: 'Beste prijs-kwaliteit, groot bereik'
      })
    }

    if (budget === 'high' || budget === 'premium') {
      recommendations.push({
        name: 'Segway Ninebot MAX',
        price: 799,
        image: '/images/products/segway-max.jpg',
        match: 89,
        why: 'Premium kwaliteit, waterbestendig'
      })
    }

    // Fallback
    if (recommendations.length === 0) {
      recommendations.push({
        name: 'Xiaomi Mi Scooter 4 Pro',
        price: 599,
        image: '/images/products/xiaomi-scooter-real.jpg',
        match: 85,
        why: 'Populairste keuze voor iedereen'
      })
    }

    return recommendations
  }

  const resetQuiz = () => {
    setStep(0)
    setAnswers({})
    setShowResults(false)
  }

  if (showResults) {
    const recommendations = getRecommendations()

    return (
      <div className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-gray-200 max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">🎯</div>
          <h3 className="text-3xl font-black text-gray-900 mb-2">
            Jouw Perfecte Match!
          </h3>
          <p className="text-gray-600">
            Op basis van jouw antwoorden hebben we deze producten geselecteerd
          </p>
        </div>

        <div className="space-y-6 mb-8">
          {recommendations.map((product, index) => (
            <div 
              key={index}
              className="flex items-center gap-6 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border-2 border-blue-200 hover:border-blue-400 transition-all group"
            >
              {/* Match Score */}
              <div className="flex-shrink-0">
                <div className="relative w-20 h-20">
                  <svg className="transform -rotate-90 w-20 h-20">
                    <circle
                      cx="40"
                      cy="40"
                      r="36"
                      stroke="#e5e7eb"
                      strokeWidth="8"
                      fill="none"
                    />
                    <circle
                      cx="40"
                      cy="40"
                      r="36"
                      stroke="#10b981"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 36}`}
                      strokeDashoffset={`${2 * Math.PI * 36 * (1 - product.match / 100)}`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl font-black text-green-600">{product.match}%</span>
                  </div>
                </div>
              </div>

              {/* Product */}
              <img 
                src={product.image}
                alt={product.name}
                className="w-24 h-24 object-cover rounded-xl shadow-md"
              />

              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  {index === 0 && (
                    <div className="px-3 py-1 bg-green-500 text-white rounded-full text-xs font-bold">
                      #1 Match
                    </div>
                  )}
                </div>
                <h4 className="text-xl font-black text-gray-900 mb-1">{product.name}</h4>
                <p className="text-sm text-gray-600 mb-2">{product.why}</p>
                <div className="text-2xl font-black text-gray-900">€{product.price}</div>
              </div>

              <Link
                href={`/product/${product.name.toLowerCase().replace(/ /g, '-')}`}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg whitespace-nowrap"
              >
                Bekijk
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={resetQuiz}
            className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-bold hover:bg-gray-50 transition-all"
          >
            ← Opnieuw doen
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-gray-200 max-w-2xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-bold text-gray-600">
            Vraag {step + 1} van {questions.length}
          </span>
          <span className="text-sm font-bold text-blue-600">
            {Math.round(((step + 1) / questions.length) * 100)}% compleet
          </span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500 rounded-full"
            style={{ width: `${((step + 1) / questions.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Question */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
            <currentQuestion.icon className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-2xl font-black text-gray-900">
            {currentQuestion.question}
          </h3>
        </div>
      </div>

      {/* Options */}
      <div className="space-y-3">
        {currentQuestion.options.map((option) => (
          <button
            key={option.value}
            onClick={() => handleAnswer(option.value)}
            className="w-full p-5 bg-white border-2 border-gray-200 rounded-2xl hover:border-blue-500 hover:bg-blue-50 transition-all text-left group"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="font-bold text-lg text-gray-900 mb-1">{option.label}</div>
                <div className="text-sm text-gray-600">{option.description}</div>
              </div>
              <ChevronRight className="h-6 w-6 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
            </div>
          </button>
        ))}
      </div>

      {/* Back Button */}
      {step > 0 && (
        <button
          onClick={() => setStep(step - 1)}
          className="mt-6 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-bold hover:bg-gray-50 transition-all flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Vorige vraag</span>
        </button>
      )}
    </div>
  )
}

