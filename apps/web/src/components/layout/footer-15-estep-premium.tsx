'use client'

import Link from 'next/link'
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, Zap, Shield, Truck, ArrowRight } from 'lucide-react'
import { useState } from 'react'

export function Footer() {
  const [email, setEmail] = useState('')

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Newsletter signup:', email)
    setEmail('')
  }

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-slate-800">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">
                Blijf op de hoogte! 📧
              </h3>
              <p className="text-gray-400">
                Ontvang exclusieve deals, tips & nieuws over e-mobility
              </p>
            </div>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Jouw e-mailadres"
                className="px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 min-w-[280px]"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-orange-600 hover:bg-orange-700 rounded-lg font-semibold flex items-center gap-2 transition-colors"
              >
                Inschrijven <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <Zap className="w-8 h-8 text-orange-600 group-hover:rotate-12 transition-transform" />
              <div>
                <div className="text-xl font-bold">DailyMove</div>
                <div className="text-xs text-gray-400">E-Mobility Specialist</div>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Nederland's nummer 1 specialist in elektrische mobiliteit. Met meer dan 25.000+ tevreden klanten 
              en een passie voor innovatie, brengen wij de toekomst van transport naar jouw deur.
            </p>
            
            {/* Trust Badges */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Truck className="w-5 h-5 text-emerald-500" />
                <span>Gratis verzending vanaf €50</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Shield className="w-5 h-5 text-blue-500" />
                <span>2 jaar garantie op alle producten</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Zap className="w-5 h-5 text-orange-500" />
                <span>24 uur levering in heel Nederland</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-4 mt-6">
              <Link href="https://facebook.com" className="p-2 bg-slate-800 hover:bg-orange-600 rounded-lg transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="https://instagram.com" className="p-2 bg-slate-800 hover:bg-orange-600 rounded-lg transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="https://twitter.com" className="p-2 bg-slate-800 hover:bg-orange-600 rounded-lg transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="https://youtube.com" className="p-2 bg-slate-800 hover:bg-orange-600 rounded-lg transition-colors">
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Shop</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/shop/e-steps" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Alle E-Steps
                </Link>
              </li>
              <li>
                <Link href="/shop/premium" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Premium Modellen
                </Link>
              </li>
              <li>
                <Link href="/shop/budget" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Budget E-Steps
                </Link>
              </li>
              <li>
                <Link href="/shop/accessoires" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Accessoires
                </Link>
              </li>
              <li>
                <Link href="/brands" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Merken
                </Link>
              </li>
              <li>
                <Link href="/deals" className="text-gray-400 hover:text-orange-500 transition-colors">
                  🔥 Deals & Aanbiedingen
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-bold text-lg mb-4">Klantenservice</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Veelgestelde Vragen
                </Link>
              </li>
              <li>
                <Link href="/verzending" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Verzending & Levering
                </Link>
              </li>
              <li>
                <Link href="/retourneren" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Retourneren
                </Link>
              </li>
              <li>
                <Link href="/garantie" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Garantie
                </Link>
              </li>
              <li>
                <Link href="/track-order" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Track je Bestelling
                </Link>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="font-bold text-lg mb-4">Informatie</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/over-ons" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Over Ons
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Blog & Nieuws
                </Link>
              </li>
              <li>
                <Link href="/koopgids" className="text-gray-400 hover:text-orange-500 transition-colors">
                  E-Step Koopgids
                </Link>
              </li>
              <li>
                <Link href="/onderhoud" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Onderhoudstips
                </Link>
              </li>
              <li>
                <Link href="/wetgeving" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Wetgeving E-Steps
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Klantreviews
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-slate-800 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-orange-500 mt-1" />
              <div>
                <div className="font-semibold mb-1">Telefoon</div>
                <a href="tel:+31201234567" className="text-gray-400 hover:text-orange-500">
                  +31 (0)20 123 4567
                </a>
                <div className="text-sm text-gray-500 mt-1">Ma-Za: 9:00 - 21:00</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-orange-500 mt-1" />
              <div>
                <div className="font-semibold mb-1">Email</div>
                <a href="mailto:info@dailymove.nl" className="text-gray-400 hover:text-orange-500">
                  info@dailymove.nl
                </a>
                <div className="text-sm text-gray-500 mt-1">24/7 binnen 2 uur reactie</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-orange-500 mt-1" />
              <div>
                <div className="font-semibold mb-1">Showroom</div>
                <address className="text-gray-400 not-italic">
                  Techniekweg 123<br />
                  1234 AB Amsterdam
                </address>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods & Certifications */}
        <div className="border-t border-slate-800 pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-sm text-gray-400 mb-2">Betaalmethoden</div>
              <div className="flex items-center gap-3 opacity-60">
                <div className="bg-white text-gray-900 px-3 py-1 rounded text-xs font-bold">iDEAL</div>
                <div className="bg-white text-gray-900 px-3 py-1 rounded text-xs font-bold">PayPal</div>
                <div className="bg-white text-gray-900 px-3 py-1 rounded text-xs font-bold">Visa</div>
                <div className="bg-white text-gray-900 px-3 py-1 rounded text-xs font-bold">Mastercard</div>
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-400 mb-2">Keurmerken</div>
              <div className="flex items-center gap-3">
                <div className="bg-emerald-600 px-3 py-1 rounded text-xs font-bold">Thuiswinkel Waarborg</div>
                <div className="bg-blue-600 px-3 py-1 rounded text-xs font-bold">★ 4.9/5 Trustpilot</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <div>
              © 2025 DailyMove. Alle rechten voorbehouden.
            </div>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="hover:text-orange-500 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/algemene-voorwaarden" className="hover:text-orange-500 transition-colors">
                Algemene Voorwaarden
              </Link>
              <Link href="/cookies" className="hover:text-orange-500 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top indicator */}
      <div className="h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
    </footer>
  )
}

