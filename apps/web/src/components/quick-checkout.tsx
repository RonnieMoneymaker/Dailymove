'use client'

import { useState } from 'react'
import { Zap, CreditCard, Calendar, CheckCircle, ShieldCheck, Sparkles } from 'lucide-react'

interface QuickCheckoutProps {
  productName: string
  price: number
  productId: number
}

export function QuickCheckout({ productName, price, productId }: QuickCheckoutProps) {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      {/* 1-Click Buy Button */}
      <button 
        onClick={() => setShowModal(true)}
        className="w-full py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-black text-lg hover:from-green-700 hover:to-emerald-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 border-2 border-green-400"
      >
        <Zap className="h-5 w-5" />
        <span>⚡ Direct Kopen met iDEAL</span>
      </button>

      {/* Modal */}
      {showModal && (
        <>
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            onClick={() => setShowModal(false)}
          />
          
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-2">
                  ⚡ Express Checkout
                </h3>
                <p className="text-gray-600">
                  Betaal direct met iDEAL in 30 seconden
                </p>
              </div>

              {/* Product Summary */}
              <div className="bg-gray-50 rounded-2xl p-4 mb-6 border border-gray-200">
                <div className="font-bold text-gray-900 mb-2">{productName}</div>
                <div className="text-3xl font-black text-gray-900">€{price}</div>
              </div>

              {/* Benefits */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Geen account nodig</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Direct betalen met iDEAL</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Morgen al in huis</span>
                </div>
              </div>

              <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-black text-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg mb-3">
                Doorgaan naar iDEAL
              </button>

              <button 
                onClick={() => setShowModal(false)}
                className="w-full py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-bold hover:bg-gray-50 transition-all"
              >
                Annuleren
              </button>
            </div>
          </div>
        </>
      )}
    </>
  )
}

interface InstallmentOptionsProps {
  totalPrice: number
}

export function InstallmentOptions({ totalPrice }: InstallmentOptionsProps) {
  const installmentPlans = [
    { months: 3, monthlyPayment: totalPrice / 3, interest: 0, label: '3 maanden' },
    { months: 6, monthlyPayment: totalPrice / 6, interest: 0, label: '6 maanden' },
    { months: 12, monthlyPayment: totalPrice / 12, interest: 2.9, label: '12 maanden' },
    { months: 24, monthlyPayment: (totalPrice * 1.049) / 24, interest: 4.9, label: '24 maanden' },
  ]

  return (
    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border-2 border-purple-200">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
          <Calendar className="h-5 w-5 text-white" />
        </div>
        <div>
          <h4 className="font-black text-lg text-gray-900">Betaal in Termijnen</h4>
          <p className="text-sm text-gray-600">Met Klarna of in3</p>
        </div>
      </div>

      <div className="space-y-3 mb-4">
        {installmentPlans.map((plan) => (
          <div 
            key={plan.months}
            className="bg-white rounded-xl p-4 border-2 border-gray-200 hover:border-purple-400 transition-all cursor-pointer group"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-bold text-gray-900">{plan.label}</span>
                  {plan.interest === 0 && (
                    <div className="px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-xs font-bold">
                      0% rente
                    </div>
                  )}
                </div>
                <div className="text-2xl font-black text-gray-900">
                  €{plan.monthlyPayment.toFixed(2)}<span className="text-sm text-gray-600 font-normal">/maand</span>
                </div>
                {plan.interest > 0 && (
                  <div className="text-xs text-gray-500 mt-1">
                    {plan.interest}% rente • €{(totalPrice * (1 + plan.interest/100)).toFixed(2)} totaal
                  </div>
                )}
              </div>
              <div className="w-6 h-6 border-2 border-gray-300 rounded-full group-hover:border-purple-600 group-hover:bg-purple-600 transition-all flex items-center justify-center">
                <div className="w-3 h-3 bg-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-purple-200">
        <ShieldCheck className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
        <div className="text-sm text-gray-700">
          <strong className="text-gray-900">100% veilig</strong> • Geen BKR registratie • Direct goedkeuring
        </div>
      </div>

      {/* Payment Partner Logos */}
      <div className="mt-4 flex items-center justify-center gap-4">
        <div className="px-4 py-2 bg-white rounded-lg border border-gray-200">
          <span className="font-black text-pink-600">Klarna</span>
        </div>
        <div className="px-4 py-2 bg-white rounded-lg border border-gray-200">
          <span className="font-black text-orange-600">in3</span>
        </div>
      </div>
    </div>
  )
}

