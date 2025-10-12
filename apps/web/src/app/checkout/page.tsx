"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useCart } from '@/components/cart/cart-provider'
import { formatPrice } from '@/lib/utils'

export const dynamic = 'force-dynamic'

export default function CheckoutPage() {
  const { state, getTotalPrice } = useCart()
  const [step, setStep] = useState<'details' | 'shipping' | 'payment' | 'review'>('details')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [street, setStreet] = useState('')
  const [postcode, setPostcode] = useState('')
  const [city, setCity] = useState('')
  const detailsValid = firstName && lastName && /.+@.+\..+/.test(email)
  const shippingValid = street && postcode && city
  const [paymentMethod, setPaymentMethod] = useState<'ideal' | 'card' | 'paypal'>('ideal')

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-6">Afrekenen</h1>
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          {/* Steps */}
          <div className="flex items-center gap-3 text-sm">
            {['Gegevens', 'Bezorging', 'Betaling', 'Overzicht'].map((label, i) => (
              <div key={label} className="flex items-center gap-3">
                <span className={`px-2 py-1 rounded ${i === 0 ? 'bg-brand text-white' : 'bg-gray-100'}`}>{label}</span>
                {i < 3 && <span className="text-muted-foreground">→</span>}
              </div>
            ))}
          </div>

          {/* Forms (simplified placeholders) */}
          <div className="border rounded-xl p-6 bg-white">
            {step === 'details' && (
              <div className="space-y-4">
                <h2 className="font-semibold mb-2">Gegevens</h2>
                <input className="w-full border rounded-md px-3 py-2" placeholder="Voornaam" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                <input className="w-full border rounded-md px-3 py-2" placeholder="Achternaam" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                <input className="w-full border rounded-md px-3 py-2" placeholder="E‑mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                <Button disabled={!detailsValid} onClick={() => setStep('shipping')}>Verder</Button>
              </div>
            )}
            {step === 'shipping' && (
              <div className="space-y-4">
                <h2 className="font-semibold mb-2">Bezorging</h2>
                <input className="w-full border rounded-md px-3 py-2" placeholder="Straat + huisnummer" value={street} onChange={(e) => setStreet(e.target.value)} />
                <div className="grid grid-cols-2 gap-3">
                  <input className="border rounded-md px-3 py-2" placeholder="Postcode" value={postcode} onChange={(e) => setPostcode(e.target.value)} />
                  <input className="border rounded-md px-3 py-2" placeholder="Plaats" value={city} onChange={(e) => setCity(e.target.value)} />
                </div>
                <Button disabled={!shippingValid} onClick={() => setStep('payment')}>Verder</Button>
              </div>
            )}
            {step === 'payment' && (
              <div className="space-y-4">
                <h2 className="font-semibold mb-2">Betaling</h2>
                <div className="space-y-2">
                  <label className="flex items-center justify-between gap-3 border rounded-md p-3">
                    <span className="flex items-center gap-2"><input type="radio" name="pm" checked={paymentMethod==='ideal'} onChange={() => setPaymentMethod('ideal')} /> iDEAL</span>
                    <Image src="/images/payment/ideal.svg" alt="iDEAL" width={48} height={24} />
                  </label>
                  <label className="flex items-center justify-between gap-3 border rounded-md p-3">
                    <span className="flex items-center gap-2"><input type="radio" name="pm" checked={paymentMethod==='card'} onChange={() => setPaymentMethod('card')} /> Creditcard</span>
                    <div className="flex items-center gap-2">
                      <Image src="/images/payment/visa.svg" alt="Visa" width={40} height={24} />
                      <Image src="/images/payment/mastercard.svg" alt="Mastercard" width={40} height={24} />
                    </div>
                  </label>
                  <label className="flex items-center justify-between gap-3 border rounded-md p-3">
                    <span className="flex items-center gap-2"><input type="radio" name="pm" checked={paymentMethod==='paypal'} onChange={() => setPaymentMethod('paypal')} /> PayPal</span>
                    <Image src="/images/payment/paypal.svg" alt="PayPal" width={56} height={24} />
                  </label>
                </div>
                <Button onClick={() => setStep('review')}>Verder</Button>
              </div>
            )}
            {step === 'review' && (
              <div className="space-y-4">
                <h2 className="font-semibold mb-2">Overzicht</h2>
                <p className="text-sm text-muted-foreground">Controleer je gegevens en rond de bestelling af.</p>
                <Button>Bestelling plaatsen</Button>
              </div>
            )}
          </div>
        </div>

        {/* Summary */}
        <div className="border rounded-xl p-6 bg-white h-fit sticky top-24 space-y-3">
          <h3 className="font-semibold">Samenvatting</h3>
          <div className="divide-y">
            {state.items.map((i) => (
              <div key={i.id} className="flex items-center justify-between py-3 text-sm">
                <span className="line-clamp-1 pr-4">{i.name}</span>
                <span>{formatPrice(i.price * i.quantity)}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-between font-semibold pt-2">
            <span>Totaal</span>
            <span>{formatPrice(getTotalPrice())}</span>
          </div>
          <div className="pt-3">
            <div className="flex items-center gap-3">
              <Image src="/images/payment/ideal.svg" alt="iDEAL" width={36} height={20} />
              <Image src="/images/payment/visa.svg" alt="Visa" width={36} height={20} />
              <Image src="/images/payment/mastercard.svg" alt="Mastercard" width={36} height={20} />
              <Image src="/images/payment/paypal.svg" alt="PayPal" width={36} height={20} />
            </div>
            <div className="text-xs text-muted-foreground mt-1">Veilig betalen</div>
          </div>
        </div>
      </div>
    </div>
  )
}


