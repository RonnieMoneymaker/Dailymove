'use client'

import { useState } from 'react'
import { Gift, Sparkles, X, RotateCw } from 'lucide-react'

export function SpinTheWheel() {
  const [isOpen, setIsOpen] = useState(false)
  const [spinning, setSpinning] = useState(false)
  const [result, setResult] = useState<string | null>(null)
  const [email, setEmail] = useState('')

  const prizes = [
    { label: '5% korting', value: 5, color: 'bg-blue-500' },
    { label: '10% korting', value: 10, color: 'bg-green-500' },
    { label: '15% korting', value: 15, color: 'bg-orange-500' },
    { label: 'Gratis verzending', value: 0, color: 'bg-purple-500' },
    { label: '20% korting', value: 20, color: 'bg-red-500' },
    { label: 'Gratis cadeau', value: 0, color: 'bg-pink-500' },
    { label: '€10 korting', value: 10, color: 'bg-yellow-500' },
    { label: '25% korting', value: 25, color: 'bg-indigo-500' },
  ]

  const handleSpin = () => {
    if (!email) return
    
    setSpinning(true)
    setTimeout(() => {
      const randomPrize = prizes[Math.floor(Math.random() * prizes.length)]
      setResult(randomPrize.label)
      setSpinning(false)
    }, 3000)
  }

  return (
    <>
      {/* Trigger Button - Floating */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed left-6 bottom-24 z-40 group"
      >
        <div className="relative">
          <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl hover:scale-110 transition-all animate-bounce">
            <Gift className="h-8 w-8 text-white" />
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 text-white text-xs font-black rounded-full flex items-center justify-center border-2 border-white">
            🎁
          </div>
        </div>
        
        <div className="absolute left-20 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <div className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap shadow-xl">
            🎰 Draai & Win tot 25% korting!
          </div>
        </div>
      </button>

      {/* Modal */}
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100]"
            onClick={() => setIsOpen(false)}
          />

          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 z-10 p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="h-6 w-6 text-gray-600" />
              </button>

              <div className="bg-gradient-to-br from-yellow-400 via-orange-400 to-red-400 p-8 text-center">
                <div className="text-6xl mb-4 animate-bounce">🎰</div>
                <h2 className="text-4xl font-black text-white mb-2">
                  Spin & Win!
                </h2>
                <p className="text-xl text-white/90">
                  Iedereen wint gegarandeerd • Tot 25% korting
                </p>
              </div>

              <div className="p-8">
                {!result ? (
                  <>
                    {/* Wheel Placeholder */}
                    <div className="relative w-80 h-80 mx-auto mb-8">
                      <div className={`w-full h-full rounded-full border-8 border-gray-200 bg-gradient-to-br from-yellow-100 to-orange-100 flex items-center justify-center ${spinning ? 'animate-spin' : ''}`}>
                        <div className="grid grid-cols-4 gap-2 w-64 h-64">
                          {prizes.slice(0, 8).map((prize, idx) => (
                            <div 
                              key={idx}
                              className={`${prize.color} rounded-lg flex items-center justify-center p-2 text-white text-xs font-bold text-center`}
                            >
                              {prize.label}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Pointer */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 border-l-12 border-r-12 border-t-12 border-transparent border-t-red-500" style={{ borderLeftWidth: '12px', borderRightWidth: '12px', borderTopWidth: '24px' }}></div>
                    </div>

                    {/* Email Input */}
                    <div className="max-w-md mx-auto">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Vul je email in om te spelen"
                        className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 outline-none mb-4 font-medium"
                      />

                      <button
                        onClick={handleSpin}
                        disabled={spinning || !email}
                        className="w-full py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-xl font-black text-xl hover:from-yellow-600 hover:to-orange-600 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                      >
                        {spinning ? (
                          <>
                            <RotateCw className="h-6 w-6 animate-spin" />
                            <span>Aan het draaien...</span>
                          </>
                        ) : (
                          <>
                            <Gift className="h-6 w-6" />
                            <span>Draai het Rad!</span>
                          </>
                        )}
                      </button>
                    </div>
                  </>
                ) : (
                  // Results
                  <div className="text-center">
                    <div className="text-8xl mb-6">🎉</div>
                    <h3 className="text-3xl font-black text-gray-900 mb-4">
                      Gefeliciteerd!
                    </h3>
                    <div className="text-5xl font-black text-transparent bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text mb-6">
                      {result}
                    </div>
                    <p className="text-gray-700 mb-6">
                      Je kortingscode is verstuurd naar <strong>{email}</strong>
                    </p>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg"
                    >
                      Start met Shoppen!
                    </button>
                  </div>
                )}

                <p className="text-center text-xs text-gray-500 mt-6">
                  Elke email kan maar 1x spelen • Code geldig 24 uur
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

