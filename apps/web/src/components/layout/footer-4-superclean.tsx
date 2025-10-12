import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-5xl mx-auto px-6 py-20">
        {/* Minimal Content */}
        <div className="text-center space-y-12">
          
          {/* Brand */}
          <div>
            <Link href="/" className="text-4xl font-light text-gray-900 tracking-wide">
              VoltMover
            </Link>
            <p className="text-gray-500 mt-2 text-lg">
              E-mobility. Simplified.
            </p>
          </div>

          {/* Simple Links */}
          <div className="flex flex-wrap justify-center gap-8 text-gray-600">
            <Link href="/shop/e-steps" className="hover:text-gray-900 transition-colors font-medium">E-steps</Link>
            <Link href="/shop/elektrische-fietsen" className="hover:text-gray-900 transition-colors font-medium">E-bikes</Link>
            <Link href="/shop/accessoires" className="hover:text-gray-900 transition-colors font-medium">Accessoires</Link>
            <Link href="/contact" className="hover:text-gray-900 transition-colors font-medium">Contact</Link>
            <Link href="/over-ons" className="hover:text-gray-900 transition-colors font-medium">Over Ons</Link>
            <Link href="/blog" className="hover:text-gray-900 transition-colors font-medium">Blog</Link>
          </div>

          {/* Trust Line */}
          <div className="flex justify-center items-center gap-8 text-sm text-gray-500">
            <span>✓ Gratis verzending</span>
            <span>•</span>
            <span>✓ 2 jaar garantie</span>
            <span>•</span>
            <span>✓ 4.9/5 sterren</span>
          </div>

          {/* Contact */}
          <div className="text-gray-500">
            <p>020-123-4567 • info@voltmover.nl</p>
          </div>

          {/* Copyright */}
          <div className="text-gray-400 text-sm">
            © 2025 VoltMover
          </div>
        </div>
      </div>
    </footer>
  )
}
