import Link from 'next/link'
import { Facebook, Instagram, Twitter, Youtube, Linkedin, Phone, Mail, MapPin, Clock, Star, Shield, Truck, CreditCard, Award, Users, TrendingUp, Zap, Heart, CheckCircle, Globe, Smartphone, Headphones, FileText, BookOpen, Video, Calendar, Gift } from 'lucide-react'

const megaFooterLinks = {
  shop: {
    title: 'Shop Categorieën',
    links: [
      { name: 'E-steps', href: '/shop/e-steps', count: '120+ modellen' },
      { name: 'Elektrische Fietsen', href: '/shop/elektrische-fietsen', count: '85+ modellen' },
      { name: 'Accessoires', href: '/shop/accessoires', count: '200+ producten' },
      { name: 'Onderdelen', href: '/shop/onderdelen', count: '150+ parts' },
      { name: 'Sale Producten', href: '/sale', count: 'Tot 50% korting' },
      { name: 'Nieuwe Aankomsten', href: '/nieuw', count: 'Weekly updates' },
      { name: 'Bestsellers', href: '/bestsellers', count: 'Top verkocht' },
      { name: 'Premium Collectie', href: '/shop/premium', count: 'Luxury modellen' },
      { name: 'Budget Vriendelijk', href: '/shop/budget', count: 'Vanaf €299' },
      { name: 'Refurbished', href: '/shop/refurbished', count: 'Als nieuw' },
    ]
  },
  brands: {
    title: 'Alle Merken',
    links: [
      { name: 'Xiaomi', href: '/brands/xiaomi', count: '40+ modellen' },
      { name: 'Segway', href: '/brands/segway', count: '25+ modellen' },
      { name: 'Kaabo', href: '/brands/kaabo', count: '15+ modellen' },
      { name: 'Pure', href: '/brands/pure', count: '12+ modellen' },
      { name: 'VanMoof', href: '/brands/vanmoof', count: 'Premium E-bikes' },
      { name: 'Gazelle', href: '/brands/gazelle', count: 'Nederlandse kwaliteit' },
      { name: 'Ninebot', href: '/brands/ninebot', count: 'Segway familie' },
      { name: 'Razor', href: '/brands/razor', count: 'Amerikaanse kwaliteit' },
      { name: 'Dualtron', href: '/brands/dualtron', count: 'High-performance' },
      { name: 'Alle Merken', href: '/brands', count: '22+ top merken' },
    ]
  },
  support: {
    title: 'Klantenservice',
    links: [
      { name: 'Contact Formulier', href: '/contact', icon: Mail },
      { name: 'Live Chat Support', href: '/chat', icon: Heart },
      { name: 'Telefonische Support', href: '/telefoon', icon: Phone },
      { name: 'WhatsApp Support', href: '/whatsapp', icon: Smartphone },
      { name: 'Email Support', href: '/email-support', icon: Mail },
      { name: 'FAQ & Hulp', href: '/faq', icon: CheckCircle },
      { name: 'Verzending & Retour', href: '/verzending-retour', icon: Truck },
      { name: 'Garantie Informatie', href: '/garantie', icon: Shield },
      { name: 'Service & Reparatie', href: '/service', icon: Award },
      { name: 'Track & Trace', href: '/track', icon: MapPin },
      { name: 'Retour Aanmelden', href: '/retour', icon: CheckCircle },
      { name: 'Klachten & Feedback', href: '/klachten', icon: Heart },
    ]
  },
  content: {
    title: 'Content & Gidsen',
    links: [
      { name: 'Blog Artikelen', href: '/blog', icon: FileText, count: '80+ artikelen' },
      { name: 'E-step Koopgidsen', href: '/guides', icon: BookOpen, count: '40+ gidsen' },
      { name: 'Product Vergelijkingen', href: '/compare', icon: TrendingUp, count: '25+ vergelijkingen' },
      { name: 'Video Reviews', href: '/videos', icon: Video, count: 'Expert reviews' },
      { name: 'Nieuws & Trends', href: '/nieuws', icon: Globe, count: 'Dagelijks updates' },
      { name: 'Tips & Tricks', href: '/tips', icon: CheckCircle, count: 'Expert advies' },
      { name: 'E-step Test Tool', href: '/test', icon: Award, count: 'Vind jouw match' },
      { name: 'Onderhoud Gidsen', href: '/onderhoud', icon: Award, count: 'DIY reparaties' },
    ]
  },
  company: {
    title: 'VoltMover Bedrijf',
    links: [
      { name: 'Over VoltMover', href: '/over-ons', icon: Users },
      { name: 'Onze Missie', href: '/missie', icon: Heart },
      { name: 'Het Team', href: '/team', icon: Users },
      { name: 'Carrière & Vacatures', href: '/carriere', icon: Award },
      { name: 'Stage & Afstuderen', href: '/stage', icon: BookOpen },
      { name: 'Investeerders', href: '/investeerders', icon: TrendingUp },
      { name: 'Pers & Media', href: '/pers', icon: Globe },
      { name: 'Partnerships', href: '/partners', icon: Heart },
      { name: 'Affiliate Programma', href: '/affiliate', icon: Gift },
      { name: 'Duurzaamheid', href: '/duurzaamheid', icon: Shield },
    ]
  },
  locations: {
    title: 'Vestigingen & Service',
    links: [
      { name: 'Amsterdam', href: '/amsterdam', count: '5 vestigingen' },
      { name: 'Rotterdam', href: '/rotterdam', count: '3 vestigingen' },
      { name: 'Utrecht', href: '/utrecht', count: '2 vestigingen' },
      { name: 'Den Haag', href: '/den-haag', count: '2 vestigingen' },
      { name: 'Eindhoven', href: '/eindhoven', count: '1 vestiging' },
      { name: 'Groningen', href: '/groningen', count: '1 vestiging' },
      { name: 'Alle Vestigingen', href: '/vestigingen', count: '50+ locaties' },
      { name: 'Service Punten', href: '/service-punten', count: '100+ punten' },
    ]
  }
}

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 to-gray-900 text-white">
      {/* Mega Stats Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-white mb-4">
              Nederland's Grootste E-Mobility Platform
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Meer dan een webshop - jouw complete partner in elektrische mobiliteit
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {[
              { icon: Users, label: 'Tevreden Klanten', value: '25.000+', color: 'text-blue-400' },
              { icon: Star, label: 'Gemiddelde Rating', value: '4.9★', color: 'text-yellow-400' },
              { icon: TrendingUp, label: 'Verkocht Dit Jaar', value: '50.000+', color: 'text-green-400' },
              { icon: MapPin, label: 'Vestigingen', value: '50+', color: 'text-purple-400' },
              { icon: Award, label: 'Awards Gewonnen', value: '15+', color: 'text-orange-400' },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto bg-gray-800 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className="text-3xl font-black text-white">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mega Footer Links */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-6 gap-12">
          
          {/* Brand & Contact */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <Link href="/" className="text-3xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                VoltMover
              </Link>
              <p className="text-gray-300 mt-4 leading-relaxed">
                Nederland's meest complete E-mobility specialist. Van budget tot premium, 
                wij hebben de perfecte elektrische oplossing voor iedereen.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <h4 className="font-bold text-white">Contact Informatie</h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <div>
                    <div className="font-medium">020-123-4567</div>
                    <div className="text-sm text-gray-400">Ma-Za: 9:00-22:00</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-green-400" />
                  <div>
                    <div className="font-medium">info@voltmover.nl</div>
                    <div className="text-sm text-gray-400">24u response</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-purple-400" />
                  <div>
                    <div className="font-medium">50+ vestigingen</div>
                    <div className="text-sm text-gray-400">Door heel Nederland</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Headphones className="w-5 h-5 text-orange-400" />
                  <div>
                    <div className="font-medium">Live Chat</div>
                    <div className="text-sm text-gray-400">Direct beschikbaar</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Shop Categories */}
          <div>
            <h3 className="font-bold text-white text-lg mb-6">{megaFooterLinks.shop.title}</h3>
            <div className="space-y-3">
              {megaFooterLinks.shop.links.map((link, index) => (
                <Link key={index} href={link.href} className="group block">
                  <div className="font-medium text-gray-300 group-hover:text-white transition-colors">{link.name}</div>
                  <div className="text-xs text-gray-500">{link.count}</div>
                </Link>
              ))}
            </div>
          </div>

          {/* Brands */}
          <div>
            <h3 className="font-bold text-white text-lg mb-6">{megaFooterLinks.brands.title}</h3>
            <div className="space-y-3">
              {megaFooterLinks.brands.links.map((link, index) => (
                <Link key={index} href={link.href} className="group block">
                  <div className="font-medium text-gray-300 group-hover:text-white transition-colors">{link.name}</div>
                  <div className="text-xs text-gray-500">{link.count}</div>
                </Link>
              ))}
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold text-white text-lg mb-6">{megaFooterLinks.support.title}</h3>
            <div className="space-y-3">
              {megaFooterLinks.support.links.map((link, index) => (
                <Link key={index} href={link.href} className="group flex items-center gap-2">
                  <link.icon className="w-4 h-4 text-gray-400 group-hover:text-white" />
                  <div className="font-medium text-gray-300 group-hover:text-white transition-colors text-sm">{link.name}</div>
                </Link>
              ))}
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="font-bold text-white text-lg mb-6">{megaFooterLinks.content.title}</h3>
            <div className="space-y-3">
              {megaFooterLinks.content.links.map((link, index) => (
                <Link key={index} href={link.href} className="group block">
                  <div className="flex items-center gap-2">
                    <link.icon className="w-4 h-4 text-gray-400 group-hover:text-white" />
                    <div className="font-medium text-gray-300 group-hover:text-white transition-colors text-sm">{link.name}</div>
                  </div>
                  <div className="text-xs text-gray-500 ml-6">{link.count}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid md:grid-cols-3 gap-12 mt-16">
          
          {/* Company */}
          <div>
            <h3 className="font-bold text-white text-lg mb-6">{megaFooterLinks.company.title}</h3>
            <div className="space-y-3">
              {megaFooterLinks.company.links.map((link, index) => (
                <Link key={index} href={link.href} className="group flex items-center gap-2">
                  <link.icon className="w-4 h-4 text-gray-400 group-hover:text-white" />
                  <div className="font-medium text-gray-300 group-hover:text-white transition-colors text-sm">{link.name}</div>
                </Link>
              ))}
            </div>
          </div>

          {/* Locations */}
          <div>
            <h3 className="font-bold text-white text-lg mb-6">{megaFooterLinks.locations.title}</h3>
            <div className="space-y-3">
              {megaFooterLinks.locations.links.map((link, index) => (
                <Link key={index} href={link.href} className="group block">
                  <div className="font-medium text-gray-300 group-hover:text-white transition-colors">{link.name}</div>
                  <div className="text-xs text-gray-500">{link.count}</div>
                </Link>
              ))}
            </div>
          </div>

          {/* Payment & Security */}
          <div className="space-y-6">
            {/* Payment Methods */}
            <div>
              <h4 className="font-bold text-white mb-4 flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-blue-400" />
                Betaalmethoden
              </h4>
              <div className="grid grid-cols-3 gap-2">
                {[
                  'iDEAL', 'VISA', 'Mastercard', 'PayPal', 'Bancontact', 'Apple Pay',
                  'Klarna', 'AMEX', 'SOFORT', 'Google Pay', 'Afterpay', 'In3'
                ].map((payment, index) => (
                  <div key={index} className="bg-white text-gray-900 text-center py-2 rounded text-xs font-bold">
                    {payment}
                  </div>
                ))}
              </div>
            </div>

            {/* Security */}
            <div>
              <h4 className="font-bold text-white mb-4 flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-400" />
                Veiligheid & Certificaten
              </h4>
              <div className="space-y-2">
                {[
                  { name: 'SSL 256-bit Versleuteling', color: 'bg-green-600' },
                  { name: 'PCI DSS Level 1', color: 'bg-blue-600' },
                  { name: 'GDPR Compliant', color: 'bg-purple-600' },
                  { name: 'ISO 27001 Gecertificeerd', color: 'bg-orange-600' },
                  { name: 'Thuiswinkel Waarborg', color: 'bg-yellow-600' },
                  { name: 'WebwinkelKeur', color: 'bg-green-600' },
                ].map((cert, index) => (
                  <div key={index} className={`${cert.color} text-white text-center py-2 rounded text-xs font-bold`}>
                    {cert.name}
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-bold text-white mb-4">Volg Ons</h4>
              <div className="grid grid-cols-5 gap-2">
                {[
                  { icon: Facebook, name: 'Facebook', followers: '15K' },
                  { icon: Instagram, name: 'Instagram', followers: '28K' },
                  { icon: Twitter, name: 'Twitter', followers: '8K' },
                  { icon: Youtube, name: 'YouTube', followers: '12K' },
                  { icon: Linkedin, name: 'LinkedIn', followers: '5K' },
                ].map((social, index) => (
                  <Link key={index} href={`https://${social.name.toLowerCase()}.com/voltmover`} className="group text-center">
                    <div className="bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition-colors mb-1">
                      <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white mx-auto" />
                    </div>
                    <div className="text-xs text-gray-400">{social.followers}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Bottom */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold text-white mb-4">Juridisch</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <Link href="/privacy" className="block hover:text-white">Privacy Policy</Link>
                <Link href="/algemene-voorwaarden" className="block hover:text-white">Algemene Voorwaarden</Link>
                <Link href="/cookie-policy" className="block hover:text-white">Cookie Policy</Link>
                <Link href="/disclaimer" className="block hover:text-white">Disclaimer</Link>
                <Link href="/gdpr" className="block hover:text-white">GDPR Informatie</Link>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Bedrijfsinfo</h4>
              <div className="text-sm text-gray-400 space-y-1">
                <p>VoltMover B.V.</p>
                <p>KvK: 12345678</p>
                <p>BTW: NL123456789B01</p>
                <p>Hoofdkantoor: Amsterdam</p>
                <p>Opgericht: 2020</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Laatste Updates</h4>
              <div className="text-sm text-gray-400 space-y-2">
                <p>✓ 47 nieuwe producten deze maand</p>
                <p>✓ 5 nieuwe vestigingen geopend</p>
                <p>✓ 2.847 nieuwe reviews</p>
                <p>✓ ISO 27001 certificering behaald</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
            © 2025 VoltMover B.V. Alle rechten voorbehouden. Made with ❤️ in Nederland.
          </div>
        </div>
      </div>
    </footer>
  )
}
