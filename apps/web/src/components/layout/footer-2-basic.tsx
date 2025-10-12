import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-700">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div>
            <h3 className="font-bold text-xl text-gray-900 mb-4">VoltMover</h3>
            <p className="text-gray-600 mb-4">
              E-steps en E-bikes specialist
            </p>
            <div className="text-sm text-gray-500 space-y-1">
              <p>020-123-4567</p>
              <p>info@voltmover.nl</p>
              <p>50+ vestigingen</p>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Shop</h4>
            <div className="space-y-2 text-sm">
              <Link href="/shop/e-steps" className="block hover:text-blue-600">E-steps</Link>
              <Link href="/shop/elektrische-fietsen" className="block hover:text-blue-600">E-bikes</Link>
              <Link href="/shop/accessoires" className="block hover:text-blue-600">Accessoires</Link>
              <Link href="/shop/onderdelen" className="block hover:text-blue-600">Onderdelen</Link>
              <Link href="/sale" className="block hover:text-blue-600 font-medium">Sale</Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Support</h4>
            <div className="space-y-2 text-sm">
              <Link href="/contact" className="block hover:text-blue-600">Contact</Link>
              <Link href="/faq" className="block hover:text-blue-600">FAQ</Link>
              <Link href="/garantie" className="block hover:text-blue-600">Garantie</Link>
              <Link href="/verzending-retour" className="block hover:text-blue-600">Verzending</Link>
              <Link href="/reviews" className="block hover:text-blue-600">Reviews</Link>
            </div>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Bedrijf</h4>
            <div className="space-y-2 text-sm">
              <Link href="/over-ons" className="block hover:text-blue-600">Over Ons</Link>
              <Link href="/blog" className="block hover:text-blue-600">Blog</Link>
              <Link href="/vestigingen" className="block hover:text-blue-600">Vestigingen</Link>
              <Link href="/carriere" className="block hover:text-blue-600">Carrière</Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-500">
              © 2025 VoltMover B.V. Alle rechten voorbehouden.
            </div>
            <div className="text-sm text-gray-500">
              KvK: 12345678 • BTW: NL123456789B01
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}