"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    shop: [
      { name: "E-Steps", href: "/producten" },
      { name: "E-Bikes", href: "/producten" },
      { name: "Accessoires", href: "/producten" },
      { name: "Sale", href: "/producten" },
    ],
    info: [
      { name: "Over ons", href: "/over" },
      { name: "Contact", href: "/contact" },
      { name: "Vestigingen", href: "/vestigingen" },
      { name: "Carrière", href: "/careers" },
    ],
    service: [
      { name: "Verzending", href: "/verzending" },
      { name: "Retourneren", href: "/retourneren" },
      { name: "Garantie", href: "/garantie" },
      { name: "FAQ", href: "/faq" },
    ],
    legal: [
      { name: "Privacy", href: "/privacy" },
      { name: "Algemene Voorwaarden", href: "/voorwaarden" },
      { name: "Cookies", href: "/cookies" },
      { name: "Disclaimer", href: "/disclaimer" },
    ],
  };

  const socialLinks = [
    { name: "Facebook", icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z", href: "#", color: "hover:bg-blue-600" },
    { name: "Instagram", icon: "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z", href: "#", color: "hover:bg-pink-600" },
    { name: "Twitter", icon: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z", href: "#", color: "hover:bg-blue-400" },
    { name: "LinkedIn", icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z", href: "#", color: "hover:bg-blue-700" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-950 via-blue-950 to-purple-950 text-white overflow-hidden">
      {/* Animated background with pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIgb3BhY2l0eT0iMC4wMyIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-50"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-purple-600/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Newsletter Section - Enhanced */}
      <div className="relative border-b border-white/10">
        <div className="container-edge py-24">
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-xl border-2 border-white/20 rounded-3xl p-12 shadow-2xl">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur opacity-20 animate-pulse"></div>
              
              <div className="relative text-center space-y-8">
                <div className="flex justify-center mb-6">
                  <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-bold text-sm shadow-lg">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                    <span>Exclusieve Voordelen</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-4xl lg:text-6xl font-black bg-gradient-to-r from-white via-blue-100 to-purple-100 text-transparent bg-clip-text">
                    Mis geen enkele deal!
                  </h3>
                  <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                    Schrijf je in en ontvang <span className="px-3 py-1 bg-white text-blue-600 rounded-full font-black">10% KORTING</span> + exclusive early access
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4 my-8">
                  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-white text-sm">Flash Deals</div>
                      <div className="text-xs text-blue-200">Als eerste</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-white text-sm">Gratis verzending</div>
                      <div className="text-xs text-blue-200">Op alles</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-pink-500 to-red-600 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-white text-sm">VIP Tips</div>
                      <div className="text-xs text-blue-200">Exclusief</div>
                    </div>
                  </div>
                </div>
            
                <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-xl mx-auto">
                  <input
                    type="email"
                    placeholder="Jouw e-mailadres"
                    className="flex-1 px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all backdrop-blur-xl"
                  />
                  <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2">
                    Inschrijven
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="relative border-b border-white/10">
        <div className="container-edge py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group hover:scale-110 transition-transform">
              <div className="text-4xl font-black bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text mb-2">
                25K+
              </div>
              <div className="text-sm text-gray-400 font-semibold">Tevreden Klanten</div>
            </div>
            <div className="text-center group hover:scale-110 transition-transform">
              <div className="text-4xl font-black bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text mb-2">
                500+
              </div>
              <div className="text-sm text-gray-400 font-semibold">Producten</div>
            </div>
            <div className="text-center group hover:scale-110 transition-transform">
              <div className="text-4xl font-black bg-gradient-to-r from-pink-400 to-red-400 text-transparent bg-clip-text mb-2">
                50+
              </div>
              <div className="text-sm text-gray-400 font-semibold">Vestigingen</div>
            </div>
            <div className="text-center group hover:scale-110 transition-transform">
              <div className="text-4xl font-black bg-gradient-to-r from-green-400 to-emerald-400 text-transparent bg-clip-text mb-2">
                4.9★
              </div>
              <div className="text-sm text-gray-400 font-semibold">Gemiddeld Review</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative">
        <div className="container-edge py-20">
          <div className="grid gap-12 lg:grid-cols-[2.5fr_1fr_1fr_1fr_1fr]">
            
            {/* Brand Column - Extended */}
            <div className="space-y-8">
              <Link href="/" className="flex items-center gap-3 group w-fit">
                <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all shadow-2xl">
                  <svg className="w-8 h-8 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <div className="absolute inset-0 bg-white/20 rounded-2xl animate-ping"></div>
                </div>
                <div>
                  <div className="text-2xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                    Emovement
                  </div>
                  <div className="text-xs text-gray-500 font-bold tracking-wider uppercase">E-Mobility Specialist</div>
                </div>
              </Link>
              
              <div className="space-y-3">
                <p className="text-gray-300 leading-relaxed">
                  De <span className="text-white font-bold">grootste specialist</span> in elektrische mobiliteit van Nederland. 
                </p>
                <p className="text-sm text-gray-400 leading-relaxed">
                  ⚡ Duurzaam • 🎯 Betrouwbaar • 🚀 Innovatief
                </p>
              </div>
              
              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2 p-3 bg-white/5 rounded-xl border border-white/10">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <div className="text-xs">
                    <div className="font-bold text-white">SSL Veilig</div>
                    <div className="text-gray-500">Betalen</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-3 bg-white/5 rounded-xl border border-white/10">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                  <div className="text-xs">
                    <div className="font-bold text-white">iDEAL</div>
                    <div className="text-gray-500">& meer</div>
                  </div>
                </div>
              </div>
              
              {/* Social Media - Enhanced */}
              <div>
                <div className="text-sm font-bold text-white mb-3">Volg ons</div>
                <div className="flex items-center gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className={`group relative w-12 h-12 rounded-xl bg-white/5 ${social.color} flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg border border-white/10`}
                      aria-label={social.name}
                    >
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors relative z-10" fill="currentColor" viewBox="0 0 24 24">
                        <path d={social.icon} />
                      </svg>
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Shop Links */}
            <div className="space-y-5">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <h4 className="text-sm font-black uppercase tracking-wider bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">Shop</h4>
              </div>
              <ul className="space-y-3">
                {footerLinks.shop.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-gray-400 hover:text-white hover:translate-x-2 transition-all flex items-center gap-2 group">
                      <span className="w-1 h-1 bg-blue-600 rounded-full group-hover:w-2 group-hover:h-2 transition-all"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Info Links */}
            <div className="space-y-5">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-sm font-black uppercase tracking-wider bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">Info</h4>
              </div>
              <ul className="space-y-3">
                {footerLinks.info.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-gray-400 hover:text-white hover:translate-x-2 transition-all flex items-center gap-2 group">
                      <span className="w-1 h-1 bg-purple-600 rounded-full group-hover:w-2 group-hover:h-2 transition-all"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Links */}
            <div className="space-y-5">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-600 to-red-600 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h4 className="text-sm font-black uppercase tracking-wider bg-gradient-to-r from-pink-400 to-red-400 text-transparent bg-clip-text">Service</h4>
              </div>
              <ul className="space-y-3">
                {footerLinks.service.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-gray-400 hover:text-white hover:translate-x-2 transition-all flex items-center gap-2 group">
                      <span className="w-1 h-1 bg-pink-600 rounded-full group-hover:w-2 group-hover:h-2 transition-all"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div className="space-y-5">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h4 className="text-sm font-black uppercase tracking-wider bg-gradient-to-r from-green-400 to-emerald-400 text-transparent bg-clip-text">Juridisch</h4>
              </div>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-gray-400 hover:text-white hover:translate-x-2 transition-all flex items-center gap-2 group">
                      <span className="w-1 h-1 bg-green-600 rounded-full group-hover:w-2 group-hover:h-2 transition-all"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* SEO Content Section */}
      <div className="relative border-t border-white/10 bg-black/30">
        <div className="container-edge py-16">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text mb-4">
                Jouw E-Mobility Specialist in Nederland
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 text-sm text-gray-400 leading-relaxed">
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-white">Premium E-Steps & E-Bikes Online</h3>
                <p>
                  Welkom bij <span className="text-white font-bold">Emovement</span>, de grootste online specialist in <strong className="text-blue-400">elektrische steps</strong> en <strong className="text-purple-400">e-bikes</strong> in Nederland. 
                  Met meer dan <span className="text-white font-bold">25.000 tevreden klanten</span> en een gemiddelde beoordeling van <span className="text-yellow-400 font-bold">4.9 sterren</span>, 
                  zijn wij dé nummer één keuze voor kwaliteit en service.
                </p>
                <p>
                  Of je nu op zoek bent naar een <strong className="text-blue-400">budget e-step</strong> voor dagelijks woon-werkverkeer, een <strong className="text-purple-400">premium e-bike</strong> voor lange tochten, 
                  of een <strong className="text-pink-400">off-road model</strong> voor avontuur - bij ons vind je altijd het perfecte product.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-white">Waarom Kiezen voor Emovement?</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span><strong className="text-white">Gratis verzending</strong> binnen 24 uur bij bestellingen boven €50</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span><strong className="text-white">2 jaar volledige garantie</strong> op alle e-steps en e-bikes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span><strong className="text-white">30 dagen retourrecht</strong> - niet goed? Geld terug!</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span><strong className="text-white">Persoonlijk advies</strong> van onze e-mobility experts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    <span><strong className="text-white">50+ service locaties</strong> door heel Nederland</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Popular Searches / Keywords */}
            <div className="pt-8 border-t border-white/10">
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Populaire zoekopdrachten</h3>
              <div className="flex flex-wrap gap-2">
                {['E-step kopen', 'E-bike Amsterdam', 'Elektrische step', 'Xiaomi scooter', 'Segway Nederland', 'E-bike dames', 'Off-road e-step', 'Budget e-bike', 'Premium e-step', 'E-step accessoires', 'E-bike accu', 'Snelle levering e-step', 'E-bike garantie', 'Elektrische fiets'].map((keyword, i) => (
                  <span key={i} className="px-3 py-1.5 bg-white/5 hover:bg-white/10 rounded-full text-xs text-gray-400 hover:text-white border border-white/10 hover:border-blue-500 transition-all cursor-pointer">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SEO Rich Content Section */}
      <div className="relative border-t border-white/10 bg-gradient-to-br from-gray-900 via-blue-900/30 to-purple-900/30">
        <div className="container-edge py-16">
          <div className="max-w-6xl mx-auto space-y-8">
            <h3 className="text-2xl font-black bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text text-center mb-8">
              E-Mobility Expert Nederland
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 text-sm text-gray-400 leading-relaxed">
              <div className="space-y-4">
                <h4 className="font-bold text-white">E-Steps & E-Bikes Online Kopen</h4>
                <p>
                  Emovement is dé specialist in <strong className="text-white">elektrische steps</strong> en <strong className="text-white">elektrische fietsen</strong> in Nederland. 
                  Wij bieden een breed assortiment van topmerken zoals Xiaomi, Segway, Pure, Kaabo, VanMoof en Gazelle. 
                  Of je nu op zoek bent naar een compacte e-step voor woon-werkverkeer, een sportieve e-bike voor het weekend, of accessoires voor jouw e-mobility vehicle - bij ons vind je alles.
                </p>
                <p>
                  Met meer dan <strong className="text-white">25.000 tevreden klanten</strong> en een gemiddelde beoordeling van <strong className="text-white">4.9/5 sterren</strong> zijn wij de meest betrouwbare keuze voor jouw elektrische mobiliteit.
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-bold text-white">Waarom Kiezen voor Emovement?</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong className="text-white">Gratis bezorging</strong> bij bestellingen vanaf €50 door heel Nederland</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong className="text-white">2 jaar volledige garantie</strong> op alle e-steps en e-bikes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong className="text-white">30 dagen retourrecht</strong> - niet goed, geld terug</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong className="text-white">50+ fysieke vestigingen</strong> voor persoonlijk advies en onderhoud</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong className="text-white">Veilig online betalen</strong> met iDEAL, creditcard, PayPal en meer</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Popular Keywords for SEO */}
            <div className="pt-8 border-t border-white/10">
              <div className="text-xs text-gray-600 text-center">
                <span className="font-bold text-gray-500">Populaire zoekopdrachten:</span>{" "}
                e-step kopen • elektrische step • e-bike kopen • elektrische fiets • e-scooter • xiaomi step • segway ninebot • 
                e-step met groot bereik • opvouwbare e-step • mountainbike elektrisch • stadsfiets elektrisch • 
                e-step accessoires • helm kopen • step slot • led verlichting step
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Enhanced */}
      <div className="relative border-t border-white/10 bg-black/30">
        <div className="container-edge py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col items-center md:items-start gap-2">
              <p className="text-sm text-gray-400">
                © {currentYear} <span className="font-black bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">Emovement</span> B.V. KVK: 12345678 • BTW: NL123456789B01
              </p>
              <p className="text-xs text-gray-600">
                Made with ❤️ in Amsterdam • Hoofdkantoor: Keizersgracht 123, 1015 CJ Amsterdam
              </p>
            </div>
            
            {/* Payment Methods */}
            <div className="flex flex-col items-center md:items-end gap-3">
              <div className="text-xs text-gray-500 font-bold">Veilig betalen met</div>
              <div className="flex items-center gap-2">
                <div className="px-4 py-2 bg-white/5 rounded-full border border-white/10 hover:bg-white/10 transition-all">
                  <span className="text-sm font-bold text-white">iDEAL</span>
                </div>
                <div className="px-4 py-2 bg-white/5 rounded-full border border-white/10 hover:bg-white/10 transition-all">
                  <span className="text-sm font-bold text-white">VISA</span>
                </div>
                <div className="px-4 py-2 bg-white/5 rounded-full border border-white/10 hover:bg-white/10 transition-all">
                  <span className="text-sm font-bold text-white">MC</span>
                </div>
                <div className="px-4 py-2 bg-white/5 rounded-full border border-white/10 hover:bg-white/10 transition-all">
                  <span className="text-sm font-bold text-white">PayPal</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-green-600/20 border border-green-500/30 rounded-full ml-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-green-400 font-bold">SSL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}