'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Star, Phone, Mail, ShoppingBag, Truck, Shield, RotateCcw, ArrowRight, Flame, Trophy, Zap, Clock, Users, Award } from 'lucide-react'

export function Footer() {
  const [email, setEmail] = useState('')

  return (
    <footer className="bg-gradient-to-br from-blue-900 to-purple-900 text-white">
      {/* Conversion Hero */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Flame className="w-8 h-8 text-white animate-bounce" />
            <h2 className="text-3xl font-black text-white">LAATSTE KANS!</h2>
            <Flame className="w-8 h-8 text-white animate-bounce" />
          </div>
          <p className="text-xl text-white/90 mb-6">
            🔥 Tot 40% korting op alle E-steps - Nog maar 47 stuks beschikbaar!
          </p>
          <Link href="/shop/e-steps" className="inline-flex items-center gap-2 bg-white text-red-600 font-bold px-8 py-4 rounded-full text-lg hover:scale-105 transition-transform duration-300 shadow-2xl">
            <ShoppingBag className="w-5 h-5" />
            SHOP NU - BESPAAR €300+
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Trust Bar */}
      <div className="bg-white/10 backdrop-blur-sm py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <div className="font-bold text-white">Gratis verzending</div>
              <div className="text-sm text-white/80">Vanaf €50</div>
            </div>
            
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div className="font-bold text-white">2 jaar garantie</div>
              <div className="text-sm text-white/80">Op alles</div>
            </div>
            
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                <RotateCcw className="w-6 h-6 text-white" />
              </div>
              <div className="font-bold text-white">30 dagen retour</div>
              <div className="text-sm text-white/80">Zonder gedoe</div>
            </div>
            
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                <Star className="w-6 h-6 text-white fill-current" />
              </div>
              <div className="font-bold text-white">4.9/5 sterren</div>
              <div className="text-sm text-white/80">25.000+ reviews</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer - Conversion Focused */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          
          {/* Newsletter CTA */}
          <div className="md:col-span-2 space-y-6">
            <h3 className="text-3xl font-black text-white mb-4">
              Krijg €50 korting op je eerste bestelling! 🎁
            </h3>
            <p className="text-xl text-white/90 mb-6">
              Schrijf je in voor exclusieve deals en ontvang direct een €50 kortingscode
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Je emailadres voor €50 korting"
                  className="flex-1 px-6 py-4 rounded-xl bg-white text-gray-900 placeholder-gray-500 font-medium text-lg border-0 focus:outline-none focus:ring-4 focus:ring-yellow-400/50"
                />
                <button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all duration-300 hover:scale-105 shadow-2xl">
                  KRIJG €50 KORTING
                </button>
              </div>
              
              <div className="flex items-center justify-between mt-4 text-sm text-white/80">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>12.847+ mensen ontvingen al korting</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  <span>Geen spam</span>
                </div>
              </div>
            </div>

            {/* Social Proof */}
            <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-xl p-4">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-2 border-white flex items-center justify-center text-white font-bold text-sm">
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="font-bold text-white">2.847 klanten kochten deze week</div>
                  <div className="text-sm text-green-400">⭐ Gemiddeld €127 bespaard per bestelling</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links - Conversion */}
          <div className="space-y-8">
            {/* Top Categories */}
            <div>
              <h3 className="font-bold text-white text-xl mb-4">🔥 Populairste Categorieën</h3>
              <div className="space-y-3">
                {[
                  { name: 'E-steps Sale', href: '/shop/e-steps?sale=true', badge: 'Tot 40% korting', color: 'bg-red-500' },
                  { name: 'Bestseller E-steps', href: '/bestsellers', badge: 'Meest verkocht', color: 'bg-orange-500' },
                  { name: 'Premium E-bikes', href: '/shop/premium', badge: 'Luxe modellen', color: 'bg-purple-500' },
                  { name: 'Budget E-steps', href: '/shop/budget', badge: 'Vanaf €299', color: 'bg-green-500' },
                ].map((item, index) => (
                  <Link key={index} href={item.href} className="group flex items-center gap-3 bg-white/10 hover:bg-white/20 p-3 rounded-xl transition-all duration-300 hover:scale-105">
                    <div className="font-medium text-white group-hover:text-yellow-400 transition-colors">{item.name}</div>
                    <div className={`${item.color} text-white text-xs font-bold px-2 py-1 rounded-full`}>
                      {item.badge}
                    </div>
                    <ArrowRight className="w-4 h-4 text-white ml-auto group-hover:translate-x-1 transition-transform" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact CTA */}
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-6">
              <h4 className="font-bold text-white text-lg mb-3">💬 Hulp nodig?</h4>
              <p className="text-white/90 mb-4 text-sm">
                Onze experts helpen je graag bij het kiezen van de perfecte E-step
              </p>
              <div className="space-y-2">
                <Link href="/chat" className="flex items-center gap-2 text-green-400 font-medium hover:text-green-300">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  Live Chat (nu online)
                </Link>
                <Link href="tel:020-123-4567" className="flex items-center gap-2 text-blue-400 font-medium hover:text-blue-300">
                  <Phone className="w-4 h-4" />
                  Bel direct: 020-123-4567
                </Link>
              </div>
            </div>

            {/* Trust Elements */}
            <div className="text-center">
              <div className="text-yellow-400 text-2xl font-bold mb-2">4.9/5 ⭐</div>
              <div className="text-white/80 text-sm">2.847 geverifieerde reviews</div>
              <div className="text-green-400 text-sm font-medium mt-2">✓ 100% veilige betalingen</div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-white/20 text-center text-white/70 text-sm">
          © 2025 VoltMover B.V. • KvK: 12345678
        </div>
      </div>
    </footer>
  )
}
