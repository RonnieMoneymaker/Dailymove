'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Facebook, Instagram, Twitter, Youtube, Phone, Mail, MapPin, Zap, Star, Shield, Truck, Award, Users, TrendingUp, Activity, Cpu, Wifi, Battery, Globe, ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export function Footer() {
  const [liveStats, setLiveStats] = useState({
    onlineUsers: 1247,
    ordersToday: 89,
    satisfaction: 98.7,
    deliveries: 15623
  })
  const [hologramEffect, setHologramEffect] = useState(0)
  const [dataStream, setDataStream] = useState<string[]>([])

  // Real-time data simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveStats(prev => ({
        onlineUsers: prev.onlineUsers + Math.floor(Math.random() * 20) - 10,
        ordersToday: prev.ordersToday + (Math.random() > 0.8 ? 1 : 0),
        satisfaction: Math.min(99.9, prev.satisfaction + (Math.random() - 0.5) * 0.2),
        deliveries: prev.deliveries + (Math.random() > 0.9 ? 1 : 0)
      }))
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  // Hologram effect
  useEffect(() => {
    const interval = setInterval(() => {
      setHologramEffect(prev => (prev + 1) % 360)
    }, 100)

    return () => clearInterval(interval)
  }, [])

  // Data stream effect
  useEffect(() => {
    const dataPoints = [
      'Neural.Link.Active',
      'Quantum.Battery.Charged',
      'AI.Navigation.Online',
      'Hologram.Display.Ready',
      'Matrix.Connection.Stable',
      'Transport.Pod.Available',
      'Cyber.Security.Active',
      'Nano.Tech.Operational'
    ]

    const interval = setInterval(() => {
      const newData = dataPoints[Math.floor(Math.random() * dataPoints.length)]
      setDataStream(prev => [...prev.slice(-4), newData])
    }, 1500)

    return () => clearInterval(interval)
  }, [])

  const quickLinks = [
    { name: 'Quantum E-Steps', href: '/quantum-steps', icon: Zap },
    { name: 'Neural E-Bikes', href: '/neural-bikes', icon: Cpu },
    { name: 'Holo Accessories', href: '/holo-accessories', icon: Sparkles },
    { name: 'Matrix Support', href: '/matrix-support', icon: Shield }
  ]

  const realTimeData = [
    { icon: Users, label: 'Live Users', value: liveStats.onlineUsers.toLocaleString(), color: 'text-blue-400' },
    { icon: TrendingUp, label: 'Orders Today', value: liveStats.ordersToday.toString(), color: 'text-green-400' },
    { icon: Star, label: 'Satisfaction', value: `${liveStats.satisfaction.toFixed(1)}%`, color: 'text-yellow-400' },
    { icon: Truck, label: 'Deliveries', value: liveStats.deliveries.toLocaleString(), color: 'text-purple-400' }
  ]

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Holographic background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: `
            radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.2) 0%, transparent 70%)
          `,
          filter: `hue-rotate(${hologramEffect}deg)`
        }}
      />

      {/* Matrix grid */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px'
          }}
        />
      </div>

      {/* Real-time Data Stream */}
      <div className="absolute top-0 left-0 right-0 bg-black/50 backdrop-blur-sm border-b border-cyan-400/30 py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-xs font-mono">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Activity className="h-3 w-3 text-green-400 animate-pulse" />
                <span className="text-green-400">SYSTEM.ONLINE</span>
              </div>
              <div className="flex items-center space-x-2">
                <Wifi className="h-3 w-3 text-blue-400 animate-pulse" />
                <span className="text-blue-400">NEURAL.LINK.ACTIVE</span>
              </div>
            </div>
            <div className="flex items-center space-x-4 overflow-hidden">
              <span className="text-cyan-400">DATA.STREAM:</span>
              <div className="flex space-x-2 animate-pulse">
                {dataStream.slice(-2).map((data, index) => (
                  <span key={index} className="text-green-400">{data}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16 relative z-10 mt-12">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Holographic Brand */}
          <div className="space-y-8">
            <Link href="/" className="group block">
              <div className="relative">
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"
                  style={{ filter: `hue-rotate(${hologramEffect}deg)` }}
                />
                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 shadow-2xl">
                  <Zap className="h-8 w-8 text-white drop-shadow-lg" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse rounded-2xl" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mt-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                DailyMove
              </h3>
              <p className="text-cyan-300 font-mono text-sm">NEURAL.TRANSPORT.SYSTEMS</p>
            </Link>
            
            <p className="text-gray-300 leading-relaxed">
              Experience the future of transportation with our quantum-powered vehicles and neural interface technology.
            </p>

            {/* Holographic contact info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-blue-900/50 rounded-lg flex items-center justify-center border border-blue-400/30 group-hover:border-blue-400 transition-colors duration-300">
                  <Phone className="h-4 w-4 text-blue-400" />
                </div>
                <div>
                  <p className="text-white font-mono">+31.NEURAL.LINK</p>
                  <p className="text-xs text-gray-400">24/7 Quantum Support</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-purple-900/50 rounded-lg flex items-center justify-center border border-purple-400/30 group-hover:border-purple-400 transition-colors duration-300">
                  <Mail className="h-4 w-4 text-purple-400" />
                </div>
                <div>
                  <p className="text-white font-mono">matrix@dailymove.nl</p>
                  <p className="text-xs text-gray-400">Neural Mail System</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quantum Products */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-cyan-400 font-mono">QUANTUM.PRODUCTS</h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="group flex items-center space-x-3 p-2 rounded-lg hover:bg-white/5 transition-all duration-300">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <link.icon className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300 font-mono">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Real-time Analytics */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-green-400 font-mono">LIVE.ANALYTICS</h3>
            <div className="space-y-4">
              {realTimeData.map((stat, index) => (
                <div key={index} className="bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 hover:border-gray-600 transition-colors duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <stat.icon className={`h-5 w-5 ${stat.color} animate-pulse`} />
                      <span className="text-gray-300 text-sm font-mono">{stat.label}</span>
                    </div>
                    <span className={`font-bold text-lg ${stat.color} font-mono`}>
                      {stat.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Neural Network */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-purple-400 font-mono">NEURAL.NETWORK</h3>
            
            {/* Social connections */}
            <div className="space-y-4 mb-8">
              <p className="text-gray-400 text-sm font-mono">CONNECT.TO.MATRIX</p>
              <div className="flex space-x-3">
                {[
                  { icon: Facebook, color: 'hover:text-blue-400', bg: 'hover:bg-blue-900/50' },
                  { icon: Instagram, color: 'hover:text-pink-400', bg: 'hover:bg-pink-900/50' },
                  { icon: Twitter, color: 'hover:text-cyan-400', bg: 'hover:bg-cyan-900/50' },
                  { icon: Youtube, color: 'hover:text-red-400', bg: 'hover:bg-red-900/50' }
                ].map((social, index) => (
                  <Link 
                    key={index}
                    href="#" 
                    className={`w-12 h-12 bg-gray-800/50 rounded-xl flex items-center justify-center border border-gray-700/50 ${social.color} ${social.bg} transition-all duration-300 hover:scale-110 hover:border-gray-600`}
                  >
                    <social.icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Neural newsletter */}
            <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-2xl p-6 border border-purple-400/20">
              <h4 className="font-semibold text-purple-400 mb-3 font-mono">NEURAL.UPDATES</h4>
              <p className="text-gray-300 text-sm mb-4">Subscribe to quantum news feed</p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="neural.email@matrix.net"
                  className="flex-1 px-3 py-2 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:border-purple-400 focus:outline-none font-mono text-sm"
                />
                <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 px-4">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Holographic bottom bar */}
      <div className="relative bg-black/80 backdrop-blur-sm border-t border-cyan-400/30">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-8">
              <p className="text-sm text-gray-400 font-mono">
                © 2024 DAILYMOVE.NEURAL.SYSTEMS - ALL.RIGHTS.RESERVED
              </p>
              <div className="flex items-center space-x-6 text-sm text-gray-400 font-mono">
                <Link href="/privacy" className="hover:text-cyan-400 transition-colors duration-300">PRIVACY.PROTOCOL</Link>
                <Link href="/terms" className="hover:text-cyan-400 transition-colors duration-300">NEURAL.TERMS</Link>
                <Link href="/cookies" className="hover:text-cyan-400 transition-colors duration-300">DATA.COOKIES</Link>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-400 font-mono">
                <Globe className="h-4 w-4 text-green-400 animate-pulse" />
                <span>MATRIX.AMSTERDAM.NL</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400 font-mono">
                <Battery className="h-4 w-4 text-blue-400 animate-pulse" />
                <span>QUANTUM.POWERED</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scanning line effect */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" />
      </div>
    </footer>
  )
}

