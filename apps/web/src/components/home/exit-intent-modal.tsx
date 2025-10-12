'use client'

import { useEffect, useState } from 'react'
import { X, Gift } from 'lucide-react'

export default function ExitIntentModal() {
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const hasSeen = typeof window !== 'undefined' && sessionStorage.getItem('exit-intent-shown')
    if (hasSeen) return

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setOpen(true)
        sessionStorage.setItem('exit-intent-shown', '1')
      }
    }
    document.addEventListener('mouseout', handleMouseLeave)
    return () => document.removeEventListener('mouseout', handleMouseLeave)
  }, [])

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await new Promise((r) => setTimeout(r, 600))
    setSubmitted(true)
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4">
      <div className="relative w-full max-w-lg rounded-xl bg-white p-6 shadow-xl">
        <button
          className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
          onClick={() => setOpen(false)}
          aria-label="Sluiten"
        >
          <X className="h-5 w-5" />
        </button>

        {submitted ? (
          <div className="text-center space-y-2 py-6">
            <div className="mx-auto h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
              <Gift className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold">Kortingscode is verstuurd!</h3>
            <p className="text-sm text-muted-foreground">Check je inbox voor je welkomstkorting.</p>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                <Gift className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Wacht! Neem €10 korting mee</h3>
                <p className="text-sm text-muted-foreground">Schrijf je in en ontvang direct je code.</p>
              </div>
            </div>
            <form onSubmit={onSubmit} className="flex gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Je e-mailadres"
                className="flex-1 rounded-md border px-3 py-2"
              />
              <button type="submit" className="rounded-md bg-blue-600 px-4 py-2 text-white font-medium">
                Ontvang €10
              </button>
            </form>
            <p className="text-xs text-muted-foreground">Geen spam. Uitschrijven kan altijd.</p>
          </div>
        )}
      </div>
    </div>
  )
}


