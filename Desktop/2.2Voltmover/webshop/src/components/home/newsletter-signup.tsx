'use client'

import { useState } from 'react'
import { Gift, Check } from 'lucide-react'

export function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubscribed(true)
    setIsLoading(false)
    setEmail('')
  }

  if (isSubscribed) {
    return (
      <section className="py-16 bg-blue-600">
        <div className="container-edge">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="h-6 w-6 text-green-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Bedankt voor je inschrijving!
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Je ontvangt binnen enkele minuten een welkomstmail.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-blue-600">
      <div className="container-edge">
        <div className="max-w-2xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-3">
            Blijf op de hoogte
          </h2>
          <p className="text-blue-100 mb-8">
            Ontvang exclusieve deals en het laatste nieuws
          </p>

          {/* Signup form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Voer je emailadres in"
                required
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  'Inschrijven'
                )}
              </button>
            </div>
          </form>

          <p className="text-sm text-blue-200 mt-4">
            Geen spam. Je kunt je altijd uitschrijven.
          </p>
        </div>
      </div>
    </section>
  )
}
