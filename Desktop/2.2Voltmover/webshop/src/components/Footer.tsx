import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="border-b border-gray-800">
        <div className="container-edge py-16">
          <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand Column */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xl font-bold">Emovement</div>
                  <div className="text-xs text-gray-400">E-Mobility Specialist</div>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Jouw specialist in elektrische mobiliteit. Van e-steps tot e-bikes, wij helpen je op weg.
              </p>
              
              {/* Social Media */}
              <div>
                <div className="font-semibold mb-3 text-sm">Volg ons</div>
                <div className="flex gap-3">
                  {[
                    { icon: 'facebook', href: '#' },
                    { icon: 'instagram', href: '#' },
                    { icon: 'twitter', href: '#' },
                    { icon: 'linkedin', href: '#' },
                  ].map((social) => (
                    <a
                      key={social.icon}
                      href={social.href}
                      className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
                      aria-label={social.icon}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10z"/>
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Shop Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg mb-6">Shop</h4>
              <ul className="space-y-3">
                {[
                  { name: 'E-steps', href: '/producten' },
                  { name: 'E-bikes', href: '/producten' },
                  { name: 'Accessoires', href: '/producten' },
                  { name: 'Onderdelen', href: '/producten' },
                  { name: 'Sale', href: '/producten' },
                ].map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg mb-6">Support</h4>
              <ul className="space-y-3">
                {[
                  { name: 'Contact', href: '/contact' },
                  { name: 'FAQ', href: '/contact' },
                  { name: 'Verzending', href: '/contact' },
                  { name: 'Retourneren', href: '/contact' },
                  { name: 'Garantie', href: '/contact' },
                  { name: 'Track & Trace', href: '/contact' },
                ].map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company & Contact */}
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg mb-6">Bedrijf</h4>
                <ul className="space-y-3">
                  {[
                    { name: 'Over ons', href: '/over' },
                    { name: 'Vestigingen', href: '/over' },
                    { name: 'Vacatures', href: '/over' },
                    { name: 'Blog', href: '/over' },
                  ].map((link) => (
                    <li key={link.name}>
                      <Link 
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-gray-800">
                <div className="space-y-3">
                  <a href="tel:020-123-4567" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    020-123-4567
                  </a>
                  <a href="mailto:info@emovement.nl" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    info@emovement.nl
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="border-b border-gray-800">
        <div className="container-edge py-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4">
              <div className="text-sm text-gray-400">Veilig betalen met</div>
              <div className="flex items-center justify-center gap-6 flex-wrap">
                {['iDEAL', 'PayPal', 'Visa', 'Mastercard', 'Klarna', 'Apple Pay'].map((method) => (
                  <div key={method} className="px-4 py-2 bg-gray-800 rounded text-sm font-medium">
                    {method}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-950">
        <div className="container-edge py-6">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div>
              © {currentYear} Emovement B.V. Alle rechten voorbehouden.
            </div>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Voorwaarden</Link>
              <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}