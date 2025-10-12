'use client'

import Link from 'next/link'
import { Zap, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube, CreditCard, Shield, Truck, Award, Clock, RotateCcw, MessageCircle, ChevronRight, BadgeCheck } from 'lucide-react'

export function Footer() {
  const popularCategories = [
    'Xiaomi E-steps', 'Segway E-steps', 'VanMoof E-bikes', 'Gazelle E-bikes', 
    'E-step Helmen', 'E-bike Accu\'s', 'E-step Onderdelen', 'Budget E-steps'
  ]

  const shopLinks = [
    { name: 'E-steps', href: '/shop/e-steps' },
    { name: 'Elektrische Fietsen', href: '/shop/elektrische-fietsen' },
    { name: 'Accessoires', href: '/shop/accessoires' },
    { name: 'Onderdelen', href: '/shop/onderdelen' },
    { name: 'Sale', href: '/sale', hot: true },
    { name: 'Nieuwe Collectie', href: '/nieuw' },
  ]

  const supportLinks = [
    { name: 'Contact', href: '/contact' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Garantie Info', href: '/garantie' },
    { name: 'Verzending & Retour', href: '/verzending' },
    { name: 'Klantbeoordelingen', href: '/reviews' },
    { name: 'Onderhoud & Service', href: '/service' },
    { name: 'Klantenservice', href: '/klantenservice' },
    { name: 'Track & Trace', href: '/track' },
  ]

  const companyLinks = [
    { name: 'Over DailyMove', href: '/over-ons' },
    { name: 'Onze Vestigingen', href: '/vestigingen' },
    { name: 'Blog & Nieuws', href: '/blog' },
    { name: 'Carrière', href: '/carriere' },
    { name: 'Duurzaamheid', href: '/duurzaamheid' },
    { name: 'Partnerships', href: '/partnerships' },
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      
      {/* Top Section - CTA */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-4xl md:text-5xl font-black mb-4">
                Klaar om te Bestellen? 🚀
              </h3>
              <p className="text-xl text-white/90 mb-6">
                Ontdek onze collectie en vind jouw perfecte e-mobility oplossing. 
                Gratis verzending, 2 jaar garantie en 30 dagen bedenktijd.
              </p>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-green-300" />
                  <span className="text-sm">Veilig betalen</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="h-5 w-5 text-green-300" />
                  <span className="text-sm">Gratis verzending</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-yellow-300" />
                  <span className="text-sm">4.9/5 sterren</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <Link 
                href="/shop/e-steps"
                className="py-5 bg-white text-blue-600 rounded-2xl font-black text-lg hover:bg-gray-100 transition-all text-center shadow-2xl flex items-center justify-center gap-2"
              >
                <Zap className="h-6 w-6" />
                <span>Shop Nu</span>
                <ChevronRight className="h-5 w-5" />
              </Link>
              <Link 
                href="https://wa.me/31612345678"
                className="py-5 bg-white/10 backdrop-blur-md text-white rounded-2xl font-black text-lg hover:bg-white/20 transition-all text-center border-2 border-white/30 flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-6 w-6" />
                <span>WhatsApp Chat</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          
          {/* Brand & Contact - 2 columns width */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6 group">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="text-3xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Ronnie Website
                </div>
                <div className="text-sm text-gray-400">Premium E-mobility Worldwide</div>
              </div>
            </Link>
            
            <p className="text-gray-400 mb-6 leading-relaxed text-base">
              World's leading specialist in electric scooters, bikes & accessories. 
              With over <span className="font-bold text-white">25,000+ happy customers worldwide</span> and a <span className="font-bold text-yellow-400">4.9/5 average</span> rating.
            </p>
            
            <div className="space-y-4">
              <a href="tel:+31612345678" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
                <div className="p-3 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl group-hover:scale-110 transition-transform shadow-lg">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Bel ons gratis</div>
                  <div className="font-bold">+31 6 12345678</div>
                </div>
              </a>
              
              <a href="mailto:info@dailymove.nl" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
                <div className="p-3 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl group-hover:scale-110 transition-transform shadow-lg">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Email ons</div>
                  <div className="font-bold">info@dailymove.nl</div>
                </div>
              </a>
              
              <div className="flex items-center gap-3 text-gray-300">
                <div className="p-3 bg-gradient-to-br from-pink-600 to-pink-700 rounded-xl shadow-lg">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Bezoek ons</div>
                  <div className="font-bold">Amsterdam, Nederland</div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h5 className="text-sm font-bold text-white mb-4">Volg ons:</h5>
              <div className="flex gap-3">
                <a href="https://facebook.com/dailymove" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 hover:bg-blue-600 rounded-xl transition-all hover:scale-110 group">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="https://instagram.com/dailymove" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 rounded-xl transition-all hover:scale-110 group">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="https://twitter.com/dailymove" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 hover:bg-blue-400 rounded-xl transition-all hover:scale-110 group">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="https://youtube.com/dailymove" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 hover:bg-red-600 rounded-xl transition-all hover:scale-110 group">
                  <Youtube className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-bold text-xl text-white mb-6 flex items-center gap-2">
              <Zap className="h-5 w-5 text-blue-400" />
              Shop
            </h4>
            <div className="space-y-3">
              {shopLinks.map((link, idx) => (
                <Link 
                  key={idx}
                  href={link.href} 
                  className={`flex items-center gap-2 text-gray-400 hover:text-white transition-all hover:translate-x-2 transform duration-200 group ${link.hot ? 'text-orange-400 hover:text-orange-300' : ''}`}
                >
                  <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>{link.name}</span>
                  {link.hot && <span className="ml-auto bg-orange-500 px-2 py-0.5 rounded-full text-xs font-bold text-white">HOT</span>}
                </Link>
              ))}
            </div>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-bold text-xl text-white mb-6 flex items-center gap-2">
              <Shield className="h-5 w-5 text-green-400" />
              Klantenservice
            </h4>
            <div className="space-y-3">
              {supportLinks.map((link, idx) => (
                <Link 
                  key={idx}
                  href={link.href} 
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-all hover:translate-x-2 transform duration-200 group"
                >
                  <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>{link.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Company Links + Popular */}
          <div>
            <h4 className="font-bold text-xl text-white mb-6 flex items-center gap-2">
              <Award className="h-5 w-5 text-purple-400" />
              Bedrijf
            </h4>
            <div className="space-y-3 mb-8">
              {companyLinks.map((link, idx) => (
                <Link 
                  key={idx}
                  href={link.href} 
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-all hover:translate-x-2 transform duration-200 group"
                >
                  <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>{link.name}</span>
                </Link>
              ))}
            </div>

            {/* Trust Badges in Footer */}
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <h5 className="font-bold text-sm text-white mb-3">Waarom Ronnie Website?</h5>
              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2 text-gray-400">
                  <Shield className="h-4 w-4 text-green-400" />
                  <span>SSL Beveiligd</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Award className="h-4 w-4 text-yellow-400" />
                  <span>4.9/5 Trustpilot</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Truck className="h-4 w-4 text-blue-400" />
                  <span>Gratis verzending</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <RotateCcw className="h-4 w-4 text-purple-400" />
                  <span>30 dagen retour</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Categories - SEO */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <h4 className="font-bold text-lg text-white mb-4">Populaire Zoekopdrachten:</h4>
          <div className="flex flex-wrap gap-3">
            {popularCategories.map((cat, idx) => (
              <Link 
                key={idx}
                href={`/search?q=${encodeURIComponent(cat)}`}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm text-gray-300 hover:text-white transition-all border border-white/10"
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>

        {/* Payment & Social */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Payment Methods */}
            <div>
              <h5 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                <CreditCard className="h-4 w-4" />
                Veilig betalen met:
              </h5>
              <div className="flex flex-wrap gap-3">
                <div className="w-16 h-12 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 p-2 flex items-center justify-center">
                  <img src="/images/payment/ideal.svg" alt="iDEAL" className="w-full h-full object-contain" />
                </div>
                <div className="w-16 h-12 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 p-2 flex items-center justify-center">
                  <img src="/images/payment/visa.svg" alt="Visa" className="w-full h-full object-contain" />
                </div>
                <div className="w-16 h-12 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 p-2 flex items-center justify-center">
                  <img src="/images/payment/mastercard.svg" alt="Mastercard" className="w-full h-full object-contain" />
                </div>
                <div className="w-16 h-12 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 p-2 flex items-center justify-center">
                  <img src="/images/payment/paypal.svg" alt="PayPal" className="w-full h-full object-contain" />
                </div>
                <div className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center">
                  <span className="text-pink-400 font-black text-sm">Klarna</span>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-3">
                🔒 SSL Beveiligde betalingen • 100% veilig
              </p>
            </div>

            {/* USPs */}
            <div>
              <h5 className="text-sm font-bold text-white mb-4">Onze Service:</h5>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-600/20 rounded-lg">
                    <Truck className="h-4 w-4 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">Gratis verzending</div>
                    <div className="text-xs text-gray-500">Vanaf €50</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-600/20 rounded-lg">
                    <Clock className="h-4 w-4 text-green-400" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">Snelle levering</div>
                    <div className="text-xs text-gray-500">Vandaag besteld = morgen in huis</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-600/20 rounded-lg">
                    <Shield className="h-4 w-4 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">2 jaar garantie</div>
                    <div className="text-xs text-gray-500">Op alle producten</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-orange-600/20 rounded-lg">
                    <RotateCcw className="h-4 w-4 text-orange-400" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">30 dagen retour</div>
                    <div className="text-xs text-gray-500">Geld terug garantie</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div>
              <h5 className="text-sm font-bold text-white mb-4">📧 Nieuwsbrief</h5>
              <p className="text-sm text-gray-400 mb-4">
                Ontvang 10% korting + exclusieve deals
              </p>
              <div className="flex gap-2 mb-3">
                <input 
                  type="email" 
                  placeholder="Email..."
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <button className="px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg">
                  →
                </button>
              </div>
              <p className="text-xs text-gray-500">
                ✓ Exclusieve kortingen<br/>
                ✓ Productlanceringen<br/>
                ✓ Tips & tricks
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
            <div className="text-gray-400">
              © 2025 Ronnie Website • All rights reserved worldwide • 
              <span className="text-green-400 ml-2">✓ Trusted since 2019</span>
            </div>
            <div className="flex flex-wrap gap-6 text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/algemene-voorwaarden" className="hover:text-white transition-colors">
                Algemene Voorwaarden
              </Link>
              <Link href="/cookies" className="hover:text-white transition-colors">
                Cookie Beleid
              </Link>
              <Link href="/sitemap" className="hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
            <div className="text-xs text-gray-500">
              KvK: 12345678 • BTW: NL123456789B01
            </div>
          </div>
        </div>
      </div>

      {/* Extra Trust Bar */}
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 py-4 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
            <div className="flex items-center gap-2 text-gray-300">
              <Shield className="h-4 w-4 text-green-400" />
              <span>WebwinkelKeur 9.2</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Award className="h-4 w-4 text-yellow-400" />
              <span>Trustpilot 4.9/5</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <BadgeCheck className="h-4 w-4 text-blue-400" />
              <span>Thuiswinkel Waarborg</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <CreditCard className="h-4 w-4 text-purple-400" />
              <span>100% Veilig Betalen</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
