import Link from 'next/link'
import { Facebook, Instagram, Twitter, Youtube, Linkedin, Phone, Mail, MapPin, Clock, Star, Shield, Truck, CreditCard, Award, Users, TrendingUp, Zap, Heart, CheckCircle, ArrowRight, Sparkles, Bike, HardHat, Wrench, Flame, Package, Trophy, Gem } from 'lucide-react'

const footerLinks = {
  shop: [
    { name: 'E-steps', href: '/shop/e-steps', icon: Zap },
    { name: 'E-bikes', href: '/shop/elektrische-fietsen', icon: Bike },
    { name: 'Accessoires', href: '/shop/accessoires', icon: HardHat },
    { name: 'Onderdelen', href: '/shop/onderdelen', icon: Wrench },
    { name: 'Sale', href: '/sale', icon: Flame, hot: true },
    { name: 'Nieuwe Producten', href: '/nieuw', icon: Package },
    { name: 'Bestsellers', href: '/bestsellers', icon: Trophy },
    { name: 'Premium', href: '/shop/premium', icon: Gem },
  ],
  brands: [
    { name: 'Xiaomi', href: '/brands/xiaomi', popular: true },
    { name: 'Segway', href: '/brands/segway', popular: true },
    { name: 'Kaabo', href: '/brands/kaabo' },
    { name: 'Pure', href: '/brands/pure' },
    { name: 'VanMoof', href: '/brands/vanmoof' },
    { name: 'Gazelle', href: '/brands/gazelle' },
    { name: 'Ninebot', href: '/brands/ninebot' },
    { name: 'Alle merken', href: '/brands', icon: '🔗' },
  ],
  support: [
    { name: 'Live Chat', href: '/chat', icon: Heart, hot: true },
    { name: 'Contact', href: '/contact', icon: Phone },
    { name: 'FAQ', href: '/faq', icon: CheckCircle },
    { name: 'Garantie', href: '/garantie', icon: Shield },
    { name: 'Verzending', href: '/verzending-retour', icon: Truck },
    { name: 'Service', href: '/service', icon: Wrench },
    { name: 'Reviews', href: '/reviews', icon: Star },
    { name: 'Track & Trace', href: '/track', icon: MapPin },
  ],
  company: [
    { name: 'Over Ons', href: '/over-ons', icon: Users },
    { name: 'Blog', href: '/blog', icon: TrendingUp },
    { name: 'Gidsen', href: '/guides', icon: CheckCircle },
    { name: 'Nieuws', href: '/nieuws', icon: Award },
    { name: 'Carrière', href: '/carriere', icon: Users },
    { name: 'Vestigingen', href: '/vestigingen', icon: MapPin },
    { name: 'Duurzaamheid', href: '/duurzaamheid', icon: Shield },
    { name: 'Partnerships', href: '/partners', icon: Heart },
  ],
}

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/voltmover.nl', followers: '15K', color: 'hover:bg-blue-600' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/voltmover.nl', followers: '28K', color: 'hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/voltmover_nl', followers: '8K', color: 'hover:bg-blue-400' },
  { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/@voltmover', followers: '12K', color: 'hover:bg-red-600' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/voltmover', followers: '5K', color: 'hover:bg-blue-700' },
]

const stats = [
  { label: 'Tevreden klanten', value: '25.000+', icon: Users, color: 'text-blue-400' },
  { label: 'Gemiddelde rating', value: '4.9★', icon: Star, color: 'text-yellow-400' },
  { label: 'Producten verkocht', value: '50.000+', icon: TrendingUp, color: 'text-green-400' },
  { label: 'Vestigingen', value: '50+', icon: MapPin, color: 'text-purple-400' },
]

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white overflow-hidden">

      {/* Stats Hero Section */}
      <div className="relative border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Nederland's #1
              </span>
              <br />
              <span className="text-white">E-Mobility Specialist</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Vertrouwd door duizenden klanten voor premium kwaliteit en service
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="group text-center space-y-4">
                <div className="relative">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-gray-800 to-gray-700 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-2xl group-hover:shadow-blue-500/25">
                    <stat.icon className={`w-10 h-10 ${stat.color} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl" />
                </div>
                <div>
                  <div className="text-3xl font-black text-white">{stat.value}</div>
                  <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Section - Super Cool */}
          <div className="lg:col-span-1 space-y-6">
          <div className="space-y-4">
              <Link href="/" className="group inline-block">
                <div className="text-3xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                  VoltMover
                </div>
                <div className="text-sm text-gray-400 mt-1">De toekomst rijdt elektrisch</div>
              </Link>
              
              <p className="text-sm text-gray-300 leading-relaxed">
                Nederland's meest vertrouwde E-mobility specialist. Premium kwaliteit, 
                expert service en 2 jaar garantie.
              </p>
            </div>
            
            {/* Contact Cards */}
            <div className="space-y-3">
              <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-xl p-3 hover:border-blue-500/40 transition-colors">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-blue-400" />
                  <div>
                    <div className="font-bold text-white text-sm">020-123-4567</div>
                    <div className="text-xs text-gray-400">24/7 beschikbaar</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-green-600/10 to-emerald-600/10 border border-green-500/20 rounded-xl p-3 hover:border-green-500/40 transition-colors">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-green-400" />
                  <div>
                    <div className="font-bold text-white text-sm">info@voltmover.nl</div>
                    <div className="text-xs text-gray-400">Support team</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Media - Clean */}
            <div className="space-y-3">
              <h4 className="font-bold text-white text-sm uppercase tracking-wide">
                Volg ons
              </h4>
              <div className="flex gap-2">
                {socialLinks.map((social) => (
                  <Link key={social.name} href={social.href} className="group p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all duration-200">
                    <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
            </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Shop - Met coole icons */}
          <div className="space-y-6">
            <h3 className="font-bold text-xl text-white mb-4 flex items-center gap-3">
              <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              Shop
            </h3>
            <div className="space-y-3">
              {footerLinks.shop.map((link) => (
                <Link key={link.name} href={link.href} className="group flex items-center gap-3 hover:bg-gray-800/50 p-2 rounded-xl transition-all duration-300 hover:translate-x-2">
                  <link.icon className="h-5 w-5 text-blue-400" />
                  <div className="font-medium text-gray-300 group-hover:text-white transition-colors">{link.name}</div>
                  {link.hot && (
                    <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
                      HOT
                    </div>
                  )}
                  <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-white ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300" />
                </Link>
              ))}
            </div>
          </div>

          {/* Brands - Clean List */}
          <div className="space-y-6">
            <h3 className="font-bold text-xl text-white mb-4 flex items-center gap-3">
              <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Award className="w-4 h-4 text-white" />
              </div>
              Merken
            </h3>
            <div className="space-y-3">
              {footerLinks.brands.map((link) => (
                <Link key={link.name} href={link.href} className="group block text-gray-300 hover:text-white transition-colors py-1">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">{link.name}</div>
                    {link.popular && (
                      <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        TOP
                      </span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Support - Interactive */}
          <div className="space-y-6">
            <h3 className="font-bold text-xl text-white mb-4 flex items-center gap-3">
              <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <Heart className="w-4 h-4 text-white" />
          </div>
              Support
            </h3>
            <div className="space-y-3">
              {footerLinks.support.map((link) => (
                <Link key={link.name} href={link.href} className="group flex items-center gap-3 hover:bg-gray-800/20 p-2 rounded-lg transition-colors">
                  <link.icon className="w-4 h-4 text-gray-400 group-hover:text-white" />
                  <div className="font-medium text-gray-300 group-hover:text-white transition-colors">{link.name}</div>
                  {link.hot && (
                    <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      LIVE
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Company - Stylish */}
          <div className="space-y-6">
            <h3 className="font-bold text-xl text-white mb-4 flex items-center gap-3">
              <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <Users className="w-4 h-4 text-white" />
          </div>
              Bedrijf
            </h3>
            <div className="space-y-3">
              {footerLinks.company.map((link) => (
                <Link key={link.name} href={link.href} className="group flex items-center gap-3 hover:bg-gray-800/20 p-2 rounded-lg transition-colors">
                  <link.icon className="w-4 h-4 text-gray-400 group-hover:text-white" />
                  <div className="font-medium text-gray-300 group-hover:text-white transition-colors">{link.name}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Payment & Trust Section - Clean */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            
            {/* Payment Methods - Real Icons */}
            <div className="space-y-4">
              <h4 className="font-bold text-white flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-blue-400" />
                Betaalmethoden
              </h4>
              <div className="grid grid-cols-4 gap-3">
                {/* Row 1 - Popular */}
                <div className="bg-white rounded-lg p-2 flex items-center justify-center h-10 shadow-sm hover:shadow-md transition-shadow">
                  <svg viewBox="0 0 64 32" className="h-6">
                    <rect width="64" height="32" rx="4" fill="#0066CC"/>
                    <text x="32" y="20" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">iDEAL</text>
                  </svg>
                </div>
                <div className="bg-white rounded-lg p-2 flex items-center justify-center h-10 shadow-sm hover:shadow-md transition-shadow">
                  <svg viewBox="0 0 64 32" className="h-6">
                    <rect width="64" height="32" rx="4" fill="#1A1F71"/>
                    <text x="32" y="20" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">VISA</text>
                  </svg>
                </div>
                <div className="bg-white rounded-lg p-2 flex items-center justify-center h-10 shadow-sm hover:shadow-md transition-shadow">
                  <svg viewBox="0 0 64 32" className="h-6">
                    <rect width="64" height="32" rx="4" fill="#EB001B"/>
                    <circle cx="20" cy="16" r="10" fill="#EB001B"/>
                    <circle cx="44" cy="16" r="10" fill="#FF5F00"/>
                  </svg>
                </div>
                <div className="bg-white rounded-lg p-2 flex items-center justify-center h-10 shadow-sm hover:shadow-md transition-shadow">
                  <svg viewBox="0 0 64 32" className="h-6">
                    <rect width="64" height="32" rx="4" fill="#003087"/>
                    <text x="32" y="12" textAnchor="middle" fill="#009CDE" fontSize="8" fontWeight="bold">PayPal</text>
                    <text x="32" y="22" textAnchor="middle" fill="#009CDE" fontSize="6">BETALEN</text>
                  </svg>
                </div>
                
                {/* Row 2 - European */}
                <div className="bg-white rounded-lg p-2 flex items-center justify-center h-10 shadow-sm hover:shadow-md transition-shadow">
                  <svg viewBox="0 0 64 32" className="h-6">
                    <rect width="64" height="32" rx="4" fill="#005498"/>
                    <text x="32" y="20" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">Bancontact</text>
                  </svg>
                </div>
                <div className="bg-white rounded-lg p-2 flex items-center justify-center h-10 shadow-sm hover:shadow-md transition-shadow">
                  <svg viewBox="0 0 64 32" className="h-6">
                    <rect width="64" height="32" rx="4" fill="#000"/>
                    <text x="32" y="12" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">Apple</text>
                    <text x="32" y="22" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">Pay</text>
                  </svg>
                </div>
                <div className="bg-white rounded-lg p-2 flex items-center justify-center h-10 shadow-sm hover:shadow-md transition-shadow">
                  <svg viewBox="0 0 64 32" className="h-6">
                    <rect width="64" height="32" rx="4" fill="#FFB3C1"/>
                    <text x="32" y="20" textAnchor="middle" fill="#0A0B09" fontSize="9" fontWeight="bold">Klarna</text>
                  </svg>
                </div>
                
                {/* Row 3 - Additional */}
                <div className="bg-white rounded-lg p-2 flex items-center justify-center h-10 shadow-sm hover:shadow-md transition-shadow">
                  <svg viewBox="0 0 64 32" className="h-6">
                    <rect width="64" height="32" rx="4" fill="#006FCF"/>
                    <text x="32" y="20" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">American Express</text>
                  </svg>
                </div>
                <div className="bg-white rounded-lg p-2 flex items-center justify-center h-10 shadow-sm hover:shadow-md transition-shadow">
                  <svg viewBox="0 0 64 32" className="h-6">
                    <rect width="64" height="32" rx="4" fill="#D20A7D"/>
                    <text x="32" y="20" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">SOFORT</text>
                  </svg>
                </div>
                <div className="bg-white rounded-lg p-2 flex items-center justify-center h-10 shadow-sm hover:shadow-md transition-shadow">
                  <svg viewBox="0 0 64 32" className="h-6">
                    <rect width="64" height="32" rx="4" fill="#6772E5"/>
                    <text x="32" y="20" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">Stripe</text>
                  </svg>
                </div>
              </div>
              <div className="text-xs text-gray-400 text-center">
                ✓ 256-bit SSL versleuteling • ✓ PCI DSS Level 1 gecertificeerd
              </div>
            </div>

            {/* Live Stats - Simple */}
            <div className="space-y-4 text-center">
              <h4 className="font-bold text-white flex items-center justify-center gap-2">
                <TrendingUp className="w-4 h-4 text-green-400" />
                Live Stats
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Vandaag verkocht:</span>
                  <span className="font-bold text-green-400">47 E-steps</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Online nu:</span>
                  <span className="font-bold text-blue-400">234 bezoekers</span>
                </div>
              </div>
            </div>

            {/* Security & Trust - Extended */}
            <div className="space-y-4">
              <h4 className="font-bold text-white flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-400" />
                Veiligheid & Vertrouwen
              </h4>
              
              {/* Security Badges */}
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-green-600 text-white text-center py-2 px-3 rounded-lg font-bold text-xs">
                  SSL 256-bit
                </div>
                <div className="bg-blue-600 text-white text-center py-2 px-3 rounded-lg font-bold text-xs">
                  PCI DSS
                </div>
                <div className="bg-purple-600 text-white text-center py-2 px-3 rounded-lg font-bold text-xs">
                  GDPR
                </div>
                <div className="bg-orange-600 text-white text-center py-2 px-3 rounded-lg font-bold text-xs">
                  ISO 27001
                </div>
              </div>
              
              {/* Trust Elements */}
              <div className="space-y-2 text-xs text-gray-400">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 text-green-400" />
                  <span>100% veilige betalingen</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 text-green-400" />
                  <span>Klantgegevens beschermd</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 text-green-400" />
                  <span>Geverifieerde reviews</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 text-green-400" />
                  <span>Officiële dealer garantie</span>
                </div>
              </div>
              
              {/* Trust Score */}
              <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-lg p-3 text-center">
                <div className="text-green-400 font-bold text-lg">4.9/5</div>
                <div className="text-xs text-gray-400">Trustpilot score</div>
              </div>
          </div>
        </div>
      </div>

        {/* Bottom Bar - Ultra Modern */}
        <div className="mt-16 pt-8 border-t border-gray-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Legal Links */}
            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="/algemene-voorwaarden" className="hover:text-white transition-colors">Voorwaarden</Link>
              <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
              <Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
            </div>
            
            {/* Copyright - Stylish */}
            <div className="text-center md:text-right space-y-2">
              <div className="text-gray-400">
                © 2025 <span className="font-bold text-white">VoltMover B.V.</span> Alle rechten voorbehouden.
              </div>
              <div className="flex items-center justify-center md:justify-end gap-2 text-xs text-gray-500">
                <CheckCircle className="w-3 h-3 text-green-400" />
                <span>KvK: 12345678</span>
                <span>•</span>
                <span>BTW: NL123456789B01</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}