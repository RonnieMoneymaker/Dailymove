"use client"
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Contact</h1>
      <p className="text-muted-foreground mb-6">We reageren meestal binnen 1 werkdag.</p>
      {sent ? (
        <div className="rounded-md border border-green-200 bg-green-50 p-4 text-green-800">
          Bedankt! We hebben je bericht ontvangen.
        </div>
      ) : (
        <form onSubmit={onSubmit} className="grid gap-4 max-w-xl">
          <div>
            <label className="block text-sm font-medium mb-2">Naam</label>
            <Input name="name" value={form.name} onChange={onChange} placeholder="Jouw naam" required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">E-mail</label>
            <Input type="email" name="email" value={form.email} onChange={onChange} placeholder="jij@example.com" required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Bericht</label>
            <textarea name="message" value={form.message} onChange={onChange} className="w-full rounded-md border p-2 h-32" placeholder="Waarmee kunnen we helpen?" required />
          </div>
          <div>
            <Button type="submit">Versturen</Button>
          </div>
        </form>
      )}
    </div>
  )
}


