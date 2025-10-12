import Link from 'next/link'
import { Facebook, Instagram, Twitter, Youtube, Linkedin, Phone, Mail, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Content */}
        <div className="grid md:grid-cols-5 gap-12">
          
          {/* Brand */}
          <div className="md:col-span-2 space-y-6">
            <Link href="/" className="text-3xl font-bold text-gray-900">
              VoltMover
            </Link>
            <p className="text-gray-600 text-lg leading-relaxed max-w-md">
              Nederland's meest vertrouwde E-mobility specialist. Premium kwaliteit en service sinds 2020.
            </p>
            
            {/* Contact */}
            <div className="space-y-3 text-gray-600">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <span>020-123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <span>info@voltmover.nl</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5" />
                <span>50+ vestigingen</span>
              </div>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-6">Shop</h3>
            <div className="space-y-4 text-gray-600">
              <Link href="/shop/e-steps" className="block hover:text-gray-900">E-steps</Link>
              <Link href="/shop/elektrische-fietsen" className="block hover:text-gray-900">E-bikes</Link>
              <Link href="/shop/accessoires" className="block hover:text-gray-900">Accessoires</Link>
              <Link href="/shop/onderdelen" className="block hover:text-gray-900">Onderdelen</Link>
              <Link href="/sale" className="block hover:text-gray-900 font-medium">Sale</Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-6">Support</h3>
            <div className="space-y-4 text-gray-600">
              <Link href="/contact" className="block hover:text-gray-900">Contact</Link>
              <Link href="/faq" className="block hover:text-gray-900">FAQ</Link>
              <Link href="/garantie" className="block hover:text-gray-900">Garantie</Link>
              <Link href="/verzending-retour" className="block hover:text-gray-900">Verzending</Link>
              <Link href="/reviews" className="block hover:text-gray-900">Reviews</Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-6">Bedrijf</h3>
            <div className="space-y-4 text-gray-600">
              <Link href="/over-ons" className="block hover:text-gray-900">Over Ons</Link>
              <Link href="/blog" className="block hover:text-gray-900">Blog</Link>
              <Link href="/carriere" className="block hover:text-gray-900">Carrière</Link>
              <Link href="/vestigingen" className="block hover:text-gray-900">Vestigingen</Link>
              <Link href="/duurzaamheid" className="block hover:text-gray-900">Duurzaamheid</Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social */}
            <div className="flex gap-6">
              {[
                { icon: Facebook, href: 'https://facebook.com/voltmover.nl' },
                { icon: Instagram, href: 'https://instagram.com/voltmover.nl' },
                { icon: Twitter, href: 'https://twitter.com/voltmover_nl' },
                { icon: Youtube, href: 'https://youtube.com/@voltmover' },
                { icon: Linkedin, href: 'https://linkedin.com/company/voltmover' },
              ].map((social, index) => (
                <Link key={index} href={social.href} className="text-gray-400 hover:text-gray-900 transition-colors">
                  <social.icon className="w-6 h-6" />
                </Link>
              ))}
            </div>
            
            {/* Copyright */}
            <div className="text-gray-500 text-sm text-center md:text-right">
              <div>© 2025 VoltMover B.V. Alle rechten voorbehouden.</div>
              <div className="mt-1">KvK: 12345678 • BTW: NL123456789B01</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
