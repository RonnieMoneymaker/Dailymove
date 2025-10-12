'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Facebook, Instagram, Twitter, Youtube, Linkedin, Phone, Mail, MapPin, Clock, Star, Shield, Truck, CreditCard, Award, Users, TrendingUp, Zap, Heart, CheckCircle, ArrowRight, Sparkles, Bike, HardHat, Wrench, Flame, Package, Trophy, Gem, Eye, Wifi, Battery, Globe } from 'lucide-react'

export function Footer() {
  const [liveViewers, setLiveViewers] = useState(234)
  const [salesCount, setSalesCount] = useState(47)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    // Live viewer simulation
    const viewerInterval = setInterval(() => {
      setLiveViewers(prev => prev + Math.floor(Math.random() * 10) - 5)
    }, 3000)

    // Sales counter
    const salesInterval = setInterval(() => {
      setSalesCount(prev => prev + 1)
    }, 30000)

    // Mouse tracking for 3D effect
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      clearInterval(viewerInterval)
      clearInterval(salesInterval)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      {/* 3D Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.2),transparent_50%),radial-gradient(circle_at_75%_75%,rgba(147,51,234,0.2),transparent_50%),radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_70%)]" />
        <div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 animate-pulse"
          style={{
            transform: `translateX(${mousePos.x * 0.01}px) translateY(${mousePos.y * 0.01}px) skewX(-12deg)`
          }}
        />
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Holographic Stats Bar */}
      <div className="relative border-b border-cyan-500/30 bg-gradient-to-r from-blue-900/50 via-purple-900/50 to-cyan-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="text-center mb-8">
            <h2 className="text-5xl font-black mb-4">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                NEDERLAND'S #1
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                E-MOBILITY SPECIALIST
              </span>
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
            {/* Live Stats with 3D effect */}
            <div className="group relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-3xl opacity-30 group-hover:opacity-50 transition-opacity blur-xl" />
              <div className="relative bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-500 hover:scale-110 hover:rotate-3d">
                <Eye className="w-8 h-8 text-cyan-400 mx-auto mb-2 animate-pulse" />
                <div className="text-2xl font-black text-cyan-400">{liveViewers}</div>
                <div className="text-xs text-gray-400">Live bezoekers</div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl opacity-30 group-hover:opacity-50 transition-opacity blur-xl" />
              <div className="relative bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-green-500/30 hover:border-green-400/50 transition-all duration-500 hover:scale-110 hover:-rotate-3d">
                <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <div className="text-2xl font-black text-green-400">{salesCount}</div>
                <div className="text-xs text-gray-400">Vandaag verkocht</div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-3xl opacity-30 group-hover:opacity-50 transition-opacity blur-xl" />
              <div className="relative bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-yellow-500/30 hover:border-yellow-400/50 transition-all duration-500 hover:scale-110">
                <Star className="w-8 h-8 text-yellow-400 mx-auto mb-2 fill-current" />
                <div className="text-2xl font-black text-yellow-400">4.9★</div>
                <div className="text-xs text-gray-400">Rating</div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl opacity-30 group-hover:opacity-50 transition-opacity blur-xl" />
              <div className="relative bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-purple-500/30 hover:border-purple-400/50 transition-all duration-500 hover:scale-110">
                <Users className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <div className="text-2xl font-black text-purple-400">25K+</div>
                <div className="text-xs text-gray-400">Klanten</div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl opacity-30 group-hover:opacity-50 transition-opacity blur-xl" />
              <div className="relative bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-blue-500/30 hover:border-blue-400/50 transition-all duration-500 hover:scale-110">
                <Clock className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <div className="text-2xl font-black text-blue-400">24u</div>
                <div className="text-xs text-gray-400">Levering</div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-red-600 to-pink-600 rounded-3xl opacity-30 group-hover:opacity-50 transition-opacity blur-xl" />
              <div className="relative bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-red-500/30 hover:border-red-400/50 transition-all duration-500 hover:scale-110">
                <Shield className="w-8 h-8 text-red-400 mx-auto mb-2" />
                <div className="text-2xl font-black text-red-400">2j</div>
                <div className="text-xs text-gray-400">Garantie</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer with 3D Cards */}
      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-5 gap-8">
          
          {/* Brand Section - Holographic */}
          <div className="md:col-span-2 space-y-8">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 rounded-3xl opacity-20 group-hover:opacity-40 transition-opacity blur-2xl" />
              <div className="relative bg-gray-800/50 backdrop-blur-xl border border-cyan-500/30 rounded-3xl p-8 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105">
                <Link href="/" className="group inline-block">
                  <div className="text-4xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                    VoltMover
                  </div>
                  <div className="text-sm text-cyan-400 mt-2 opacity-80">De toekomst rijdt elektrisch</div>
                </Link>
                
                <p className="text-gray-300 mt-4 leading-relaxed">
                  Nederland's meest geavanceerde E-mobility specialist met cutting-edge technologie en premium service.
                </p>

                {/* Holographic Social */}
                <div className="mt-8">
                  <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                    <Wifi className="w-5 h-5 text-cyan-400 animate-pulse" />
                    Connected
                  </h4>
                  <div className="flex gap-3">
                    {[
                      { icon: Facebook, color: 'from-blue-600 to-blue-800', followers: '15K' },
                      { icon: Instagram, color: 'from-purple-600 to-pink-600', followers: '28K' },
                      { icon: Twitter, color: 'from-blue-400 to-cyan-400', followers: '8K' },
                      { icon: Youtube, color: 'from-red-600 to-red-800', followers: '12K' },
                      { icon: Linkedin, color: 'from-blue-700 to-blue-900', followers: '5K' },
                    ].map((social, index) => (
                      <div key={index} className="group relative">
                        <div className={`absolute -inset-1 bg-gradient-to-r ${social.color} rounded-xl opacity-0 group-hover:opacity-50 transition-opacity blur-lg`} />
                        <div className={`relative bg-gradient-to-r ${social.color} p-3 rounded-xl hover:scale-110 transition-all duration-300 cursor-pointer`}>
                          <social.icon className="w-5 h-5 text-white" />
                          <div className="absolute -top-2 -right-2 bg-white text-gray-900 text-xs font-bold px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                            {social.followers}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Shop - 3D Interactive */}
          <div className="space-y-6">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity blur-xl" />
              <h3 className="relative font-black text-2xl text-white mb-6 flex items-center gap-3 bg-gray-800/50 backdrop-blur-xl border border-blue-500/30 rounded-2xl p-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center animate-spin-slow">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                Shop
              </h3>
            </div>
            
            <div className="space-y-2">
              {[
                { name: 'E-steps', icon: Zap, color: 'from-blue-500 to-cyan-500', count: '120+' },
                { name: 'E-bikes', icon: Bike, color: 'from-green-500 to-emerald-500', count: '85+' },
                { name: 'Accessoires', icon: HardHat, color: 'from-purple-500 to-violet-500', count: '200+' },
                { name: 'Onderdelen', icon: Wrench, color: 'from-orange-500 to-red-500', count: '150+' },
                { name: 'Sale', icon: Flame, color: 'from-red-500 to-pink-500', count: 'HOT', hot: true },
              ].map((item, index) => (
                <div key={index} className="group relative">
                  <div className={`absolute -inset-1 bg-gradient-to-r ${item.color} rounded-xl opacity-0 group-hover:opacity-30 transition-opacity blur-lg`} />
                  <Link href={`/shop/${item.name.toLowerCase()}`} className="relative flex items-center gap-4 bg-gray-800/30 hover:bg-gray-700/50 p-3 rounded-xl transition-all duration-300 hover:scale-105 hover:translate-x-2 border border-gray-700/50 hover:border-gray-500/50 backdrop-blur-sm">
                    <div className={`w-8 h-8 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300`}>
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-white">{item.name}</div>
                      <div className="text-xs text-gray-400">{item.count} producten</div>
                    </div>
                    {item.hot && (
                      <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                        HOT
                      </div>
                    )}
                    <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-white group-hover:translate-x-2 transition-all duration-300" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Support - Holographic */}
          <div className="space-y-6">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity blur-xl" />
              <h3 className="relative font-black text-2xl text-white mb-6 flex items-center gap-3 bg-gray-800/50 backdrop-blur-xl border border-green-500/30 rounded-2xl p-4">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white animate-pulse" />
                </div>
                Support
              </h3>
            </div>
            
            <div className="space-y-2">
              {[
                { name: 'Live Chat', icon: Heart, status: 'ONLINE', color: 'text-green-400' },
                { name: 'Contact', icon: Phone, status: '24/7', color: 'text-blue-400' },
                { name: 'FAQ', icon: CheckCircle, status: '500+', color: 'text-purple-400' },
                { name: 'Garantie', icon: Shield, status: '2 jaar', color: 'text-orange-400' },
                { name: 'Reviews', icon: Star, status: '4.9★', color: 'text-yellow-400' },
              ].map((item, index) => (
                <Link key={index} href={`/${item.name.toLowerCase()}`} className="group flex items-center gap-3 bg-gray-800/20 hover:bg-gray-700/40 p-3 rounded-xl transition-all duration-300 hover:scale-105 border border-gray-700/30 hover:border-gray-500/50 backdrop-blur-sm">
                  <item.icon className={`w-5 h-5 ${item.color} group-hover:scale-125 transition-transform duration-300`} />
                  <div className="flex-1 font-medium text-gray-300 group-hover:text-white transition-colors">{item.name}</div>
                  <div className={`text-xs font-bold px-2 py-1 rounded-full ${item.color} bg-gray-700/50`}>
                    {item.status}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Company - Futuristic */}
          <div className="space-y-6">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity blur-xl" />
              <h3 className="relative font-black text-2xl text-white mb-6 flex items-center gap-3 bg-gray-800/50 backdrop-blur-xl border border-orange-500/30 rounded-2xl p-4">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                Bedrijf
              </h3>
            </div>
            
            <div className="space-y-2">
              {[
                { name: 'Over Ons', icon: Users },
                { name: 'Blog', icon: TrendingUp },
                { name: 'Carrière', icon: Award },
                { name: 'Vestigingen', icon: MapPin },
                { name: 'Duurzaamheid', icon: Shield },
              ].map((item, index) => (
                <Link key={index} href={`/${item.name.toLowerCase().replace(' ', '-')}`} className="group flex items-center gap-3 bg-gray-800/20 hover:bg-gray-700/40 p-3 rounded-xl transition-all duration-300 hover:scale-105 border border-gray-700/30 hover:border-gray-500/50 backdrop-blur-sm">
                  <item.icon className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:rotate-12 transition-all duration-300" />
                  <div className="font-medium text-gray-300 group-hover:text-white transition-colors">{item.name}</div>
                  <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-white ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300" />
                </Link>
              ))}
            </div>
          </div>

          {/* Payment & Security - Ultra Futuristic */}
          <div className="space-y-6">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity blur-xl" />
              <h3 className="relative font-black text-2xl text-white mb-6 flex items-center gap-3 bg-gray-800/50 backdrop-blur-xl border border-pink-500/30 rounded-2xl p-4">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-white animate-pulse" />
                </div>
                Betalen
              </h3>
            </div>

            {/* 3D Payment Grid */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { name: 'iDEAL', color: 'from-blue-600 to-blue-800' },
                { name: 'VISA', color: 'from-blue-800 to-indigo-800' },
                { name: 'MC', color: 'from-red-600 to-red-800' },
                { name: 'PayPal', color: 'from-blue-500 to-cyan-600' },
                { name: 'Apple Pay', color: 'from-gray-800 to-black' },
                { name: 'Klarna', color: 'from-pink-500 to-pink-700' },
              ].map((payment, index) => (
                <div key={index} className="group relative">
                  <div className={`absolute -inset-1 bg-gradient-to-r ${payment.color} rounded-xl opacity-50 group-hover:opacity-80 transition-opacity blur-sm`} />
                  <div className={`relative bg-gradient-to-r ${payment.color} text-white text-center py-3 rounded-xl font-bold text-xs hover:scale-110 transition-all duration-300 border border-white/20`}>
                    {payment.name}
                  </div>
                </div>
              ))}
            </div>

            {/* Security Badges - Glowing */}
            <div className="space-y-3">
              <h4 className="text-white font-bold flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-400 animate-pulse" />
                Veiligheid
              </h4>
              <div className="flex flex-wrap gap-2">
                {['SSL 256-bit', 'PCI DSS', 'GDPR', 'ISO 27001'].map((cert, index) => (
                  <div key={index} className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-3 py-2 rounded-full text-xs font-bold hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-green-500/25">
                    {cert}
                  </div>
                ))}
              </div>
            </div>

            {/* Live Trust Score */}
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl opacity-30 group-hover:opacity-50 transition-opacity blur-xl" />
              <div className="relative bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border border-yellow-500/30 rounded-2xl p-4 text-center backdrop-blur-sm">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current animate-pulse" />
                  <div className="text-2xl font-black text-yellow-400">4.9/5</div>
                </div>
                <div className="text-xs text-gray-400">Trustpilot • 2.847 reviews</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Holographic */}
        <div className="mt-20 pt-8 border-t border-gradient-to-r from-cyan-500/30 via-purple-500/30 to-pink-500/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex gap-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-cyan-400 transition-colors">Privacy</Link>
              <Link href="/algemene-voorwaarden" className="hover:text-purple-400 transition-colors">Voorwaarden</Link>
              <Link href="/cookies" className="hover:text-pink-400 transition-colors">Cookies</Link>
            </div>
            
            <div className="text-center md:text-right">
              <div className="text-gray-400 mb-2">
                © 2025 <span className="font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">VoltMover B.V.</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <CheckCircle className="w-3 h-3 text-green-400" />
                <span>KvK: 12345678 • BTW: NL123456789B01</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <div className="relative group">
          <div className="absolute -inset-3 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full opacity-50 group-hover:opacity-80 transition-opacity blur-xl animate-pulse" />
          <button className="relative bg-gradient-to-r from-cyan-500 to-purple-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 border border-white/20">
            <Heart className="w-6 h-6 animate-pulse" />
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        .hover\\:rotate-3d:hover {
          transform: perspective(1000px) rotateX(10deg) rotateY(10deg);
        }
        .hover\\:-rotate-3d:hover {
          transform: perspective(1000px) rotateX(-10deg) rotateY(-10deg);
        }
      `}</style>
    </footer>
  )
}
