'use client'

import { useState } from 'react'
import { MessageCircle, Phone, X, Send, Clock, Users } from 'lucide-react'

export function LiveChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [showCallbackForm, setShowCallbackForm] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState('')

  const handleCallback = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Callback requested for:', phoneNumber)
    alert(`Bedankt! We bellen je binnen 5 minuten op ${phoneNumber}`)
    setShowCallbackForm(false)
    setPhoneNumber('')
  }

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50 group">
          <button
            onClick={() => setIsOpen(true)}
            className="relative flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-2xl hover:shadow-3xl hover:scale-110 transition-all font-bold"
          >
            {/* Notification badge */}
            <div className="absolute -top-2 -right-2 flex items-center justify-center w-8 h-8 bg-red-500 text-white text-xs font-black rounded-full border-2 border-white animate-bounce">
              3
            </div>
            
            <MessageCircle className="h-6 w-6" />
            <span className="hidden sm:inline">Chat met ons!</span>
            
            {/* Pulse ring */}
            <div className="absolute inset-0 rounded-full bg-blue-600 animate-ping opacity-20"></div>
          </button>

          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            <div className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap shadow-xl">
              💬 Online nu • Gemiddelde reactietijd: 30 sec
              <div className="absolute top-full right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-gray-900"></div>
            </div>
          </div>
        </div>
      )}

      {/* Chat Panel */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border-2 border-gray-200 animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-black text-lg">Live Chat</h3>
                  <div className="flex items-center gap-2 text-sm text-white/90">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span>Online • We antwoorden snel</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Quick Stats */}
            <div className="flex gap-3 text-xs">
              <div className="flex items-center gap-1 px-3 py-1 bg-white/20 rounded-full">
                <Clock className="h-3 w-3" />
                <span>~30 sec reactietijd</span>
              </div>
              <div className="flex items-center gap-1 px-3 py-1 bg-white/20 rounded-full">
                <Users className="h-3 w-3" />
                <span>3 experts online</span>
              </div>
            </div>
          </div>

          {/* Chat Options */}
          {!showCallbackForm ? (
            <div className="flex-1 p-6 overflow-y-auto">
              <div className="space-y-4">
                {/* Welcome Message */}
                <div className="bg-gray-100 rounded-2xl rounded-tl-none p-4">
                  <p className="text-gray-900 font-medium mb-2">
                    👋 Hallo! Hoe kunnen we je helpen?
                  </p>
                  <p className="text-sm text-gray-600">
                    Kies een optie of stel direct je vraag!
                  </p>
                </div>

                {/* Quick Action Buttons */}
                <div className="space-y-3">
                  <button className="w-full p-4 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all text-left group">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                          <MessageCircle className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <div className="font-bold text-gray-900">Start Live Chat</div>
                          <div className="text-xs text-gray-600">Gemiddelde reactie: 30 sec</div>
                        </div>
                      </div>
                      <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                    </div>
                  </button>

                  <button 
                    onClick={() => setShowCallbackForm(true)}
                    className="w-full p-4 bg-white border-2 border-gray-200 rounded-xl hover:border-green-500 hover:bg-green-50 transition-all text-left group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                          <Phone className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <div className="font-bold text-gray-900">Bel me gratis terug</div>
                          <div className="text-xs text-gray-600">Binnen 5 minuten contact</div>
                        </div>
                      </div>
                      <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-green-600 group-hover:translate-x-1 transition-all" />
                    </div>
                  </button>

                  <a 
                    href="https://wa.me/31612345678"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full p-4 bg-white border-2 border-gray-200 rounded-xl hover:border-green-500 hover:bg-green-50 transition-all group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                          <svg className="h-5 w-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                          </svg>
                        </div>
                        <div>
                          <div className="font-bold text-gray-900">WhatsApp Chat</div>
                          <div className="text-xs text-gray-600">Direct beschikbaar</div>
                        </div>
                      </div>
                      <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-green-600 group-hover:translate-x-1 transition-all" />
                    </div>
                  </a>
                </div>

                {/* Trust Indicator */}
                <div className="mt-6 p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-blue-200">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400">★</span>
                      ))}
                    </div>
                    <span className="font-bold text-gray-900">4.9/5</span>
                  </div>
                  <p className="text-sm text-gray-700">
                    <strong>25.000+</strong> klanten gaven ons een gemiddelde score van 4.9 sterren
                  </p>
                </div>
              </div>
            </div>
          ) : (
            // Callback Form
            <div className="flex-1 p-6">
              <button
                onClick={() => setShowCallbackForm(false)}
                className="mb-4 text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1"
              >
                ← Terug
              </button>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 mb-6 border-2 border-green-200">
                <div className="text-4xl mb-3">📞</div>
                <h3 className="text-xl font-black text-gray-900 mb-2">
                  We bellen je gratis terug!
                </h3>
                <p className="text-sm text-gray-700">
                  Vul je telefoonnummer in en we nemen binnen <strong className="text-green-600">5 minuten</strong> contact op.
                </p>
              </div>

              <form onSubmit={handleCallback} className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Telefoonnummer
                  </label>
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="+31 6 12345678"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-4 focus:ring-green-500/20 outline-none transition-all"
                  />
                </div>

                <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-gray-700">
                      <strong className="text-gray-900">Bereikbaar:</strong><br />
                      Ma-Vr: 9:00 - 21:00<br />
                      Za-Zo: 10:00 - 18:00
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-black text-lg hover:from-green-700 hover:to-emerald-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <Phone className="h-5 w-5" />
                  <span>Bel me terug</span>
                </button>
              </form>

              <p className="text-xs text-gray-500 text-center mt-4">
                Gratis & vrijblijvend • Geen verplichtingen
              </p>
            </div>
          )}
        </div>
      )}
    </>
  )
}

