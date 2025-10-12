'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { CartProvider } from '@/components/cart/cart-provider'
import { AnnouncementBar } from '@/components/announcement-2-minimal'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer-2-basic'
import { ExitIntentPopup } from '@/components/exit-intent-popup'
import { FreeShippingBar } from '@/components/free-shipping-bar'
import { TrustBadges } from '@/components/trust-badges'
import { LimitedStockBadge, ProductStockInfo } from '@/components/limited-stock-badge'
import { StickyCTA } from '@/components/sticky-cta'
import { LiveChatWidget } from '@/components/live-chat-widget'
import { LogoWall } from '@/components/logo-wall'
import { BundleDeals } from '@/components/frequently-bought-together'
import { ProductFinderQuiz } from '@/components/product-finder-quiz'
import { HotItemBadge, LiveTracking, RecentlyViewed } from '@/components/hot-item-indicator'
import { InstagramFeed, VideoTestimonials } from '@/components/social-proof-feed'
import { FlashSaleTimer } from '@/components/flash-sale-timer'
import { AppDownloadCTA, PriceMatchGuarantee, FreeGiftWidget } from '@/components/app-download-cta'
import { SpinTheWheel } from '@/components/spin-the-wheel'
import { Zap, Bike, Shield, Wrench, Star, TrendingUp, Award, Truck, Clock, CheckCircle, ArrowRight, Heart, Package, Phone, MessageCircle, ChevronRight, Eye, Users, ThumbsUp, Sparkles, Gift, Timer, MapPin, CreditCard, RotateCcw, BadgeCheck, Play, Calendar, Mail, ShoppingCart } from 'lucide-react'

// SEO-optimized Homepage met alle moderne technieken
function Homepage() {
  const [countdown, setCountdown] = useState({ hours: 23, minutes: 45, seconds: 30 })
  const [viewCount, setViewCount] = useState(1247)
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Countdown timer voor urgency
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        let { hours, minutes, seconds } = prev
        if (seconds > 0) seconds--
        else if (minutes > 0) { minutes--; seconds = 59 }
        else if (hours > 0) { hours--; minutes = 59; seconds = 59 }
        return { hours, minutes, seconds }
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  // Real-time view counter effect
  useEffect(() => {
    const interval = setInterval(() => {
      setViewCount(prev => prev + Math.floor(Math.random() * 5))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const categories = [
    { 
      name: 'E-Steps', 
      href: '/shop/e-steps', 
      image: '/images/categories/escooter2.jpg',
      icon: Zap,
      description: 'Vanaf €299',
      count: '150+ modellen',
      color: 'from-blue-500 to-blue-600',
      benefits: ['Gratis verzending', '2 jaar garantie', '30 dagen bedenktijd']
    },
    { 
      name: 'Elektrische Fietsen', 
      href: '/shop/elektrische-fietsen', 
      image: '/images/categories/ebike-real.jpg',
      icon: Bike,
      description: 'Vanaf €1.299',
      count: '80+ modellen',
      color: 'from-green-500 to-green-600',
      benefits: ['Gratis montage', 'Thuisbezorgd', '1 jaar onderhoud']
    },
    { 
      name: 'Accessoires', 
      href: '/shop/accessoires', 
      image: '/images/categories/accessories.jpg',
      icon: Shield,
      description: 'Vanaf €9,99',
      count: '300+ producten',
      color: 'from-purple-500 to-purple-600',
      benefits: ['Beste prijs garantie', 'Snelle levering', 'Expert advies']
    },
    { 
      name: 'Onderdelen', 
      href: '/shop/onderdelen', 
      image: '/images/categories/parts.jpg',
      icon: Wrench,
      description: 'Vanaf €4,99',
      count: '200+ producten',
      color: 'from-orange-500 to-orange-600',
      benefits: ['Originele parts', 'Direct uit voorraad', 'Installatie handleiding']
    },
  ]

  const featuredProducts = [
    { 
      id: 1,
      name: 'Xiaomi Mi Electric Scooter 4 Pro', 
      price: 599, 
      oldPrice: 699, 
      discount: '-14%',
      rating: 4.8, 
      reviews: 234,
      sold: 156,
      image: '/images/products/xiaomi-scooter-real.jpg',
      badge: 'Bestseller',
      href: '/product/xiaomi-scooter',
      features: ['Max 30 km bereik', '25 km/u topsnelheid', 'Opvouwbaar'],
      inStock: true,
      fastDelivery: true,
      stock: 7,
      soldToday: 12,
      viewingNow: 23
    },
    { 
      id: 2,
      name: 'Segway Ninebot MAX G30LP', 
      price: 799, 
      oldPrice: 899,
      discount: '-11%',
      rating: 4.9, 
      reviews: 156,
      sold: 89,
      image: '/images/products/segway-max.jpg',
      badge: 'Nieuw',
      href: '/product/segway-max',
      features: ['Max 65 km bereik', 'IPX5 waterbestendig', 'App connected'],
      inStock: true,
      fastDelivery: true,
      stock: 15,
      soldToday: 8,
      viewingNow: 17
    },
    { 
      id: 3,
      name: 'VanMoof S5 E-bike', 
      price: 2499, 
      oldPrice: 2799,
      discount: '-11%',
      rating: 4.9, 
      reviews: 67,
      sold: 34,
      image: '/images/categories/ebike-real.jpg',
      badge: 'Premium',
      href: '/product/vanmoof',
      features: ['Smart bike technology', 'Anti-diefstal tracking', '150 km bereik'],
      inStock: true,
      fastDelivery: false,
      stock: 3,
      soldToday: 5,
      viewingNow: 31
    },
    { 
      id: 4,
      name: 'Pure Air Pro E-step', 
      price: 449, 
      oldPrice: 549,
      discount: '-18%',
      rating: 4.7, 
      reviews: 89,
      sold: 234,
      image: '/images/products/pure-air.jpg',
      badge: 'Sale',
      href: '/product/pure-air',
      features: ['Ultra lichtgewicht', '40 km bereik', 'Dubbelgeveerd'],
      inStock: true,
      fastDelivery: true,
      stock: 22,
      soldToday: 18,
      viewingNow: 14
    },
    { 
      id: 5,
      name: 'Kaabo Wolf Warrior 11', 
      price: 2899, 
      oldPrice: 3299,
      discount: '-12%',
      rating: 4.9, 
      reviews: 45,
      sold: 23,
      image: '/images/products/kaabo-mantis.jpg',
      badge: 'Limited',
      href: '/product/kaabo-wolf',
      features: ['100+ km bereik', 'Off-road ready', 'Dual motor 5400W'],
      inStock: true,
      fastDelivery: true,
      stock: 2,
      soldToday: 3,
      viewingNow: 45
    },
    { 
      id: 6,
      name: 'Ninebot E25E Kick Scooter', 
      price: 399, 
      oldPrice: 479,
      discount: '-17%',
      rating: 4.6, 
      reviews: 178,
      sold: 298,
      image: '/images/products/escooter-1.jpg',
      badge: 'Deal',
      href: '/product/ninebot-e25',
      features: ['25 km bereik', 'Smart app', 'Compact design'],
      inStock: true,
      fastDelivery: true,
      stock: 12,
      soldToday: 24,
      viewingNow: 19
    },
  ]

  const trustSignals = [
    { icon: Truck, title: 'Gratis verzending', description: 'Vanaf €50 in heel NL', color: 'blue' },
    { icon: Clock, title: 'Vandaag besteld', description: 'Morgen in huis', color: 'green' },
    { icon: Shield, title: '2 jaar garantie', description: 'Op alle voertuigen', color: 'purple' },
    { icon: RotateCcw, title: '30 dagen retour', description: 'Niet goed = geld terug', color: 'orange' },
    { icon: BadgeCheck, title: 'Keurmerk gecertificeerd', description: 'Veilig online betalen', color: 'green' },
    { icon: Award, title: '4.9/5 sterren', description: 'Van 25.000+ klanten', color: 'yellow' },
  ]

  const [currentActivityIndex, setCurrentActivityIndex] = useState(0)

  const liveActivity = [
    { name: 'Petra K.', location: 'Amsterdam', product: 'Xiaomi Mi Scooter 4 Pro', time: '2 minuten geleden' },
    { name: 'Jan D.', location: 'Rotterdam', product: 'VanMoof S5 E-bike', time: '5 minuten geleden' },
    { name: 'Lisa M.', location: 'Utrecht', product: 'Segway Ninebot MAX', time: '8 minuten geleden' },
    { name: 'Mark B.', location: 'Den Haag', product: 'Pure Air Pro E-step', time: '12 minuten geleden' },
    { name: 'Sophie V.', location: 'Eindhoven', product: 'Kaabo Wolf Warrior', time: '18 minuten geleden' },
    { name: 'Ruben S.', location: 'Groningen', product: 'Xiaomi Pro 2', time: '23 minuten geleden' },
    { name: 'Emma J.', location: 'Maastricht', product: 'Segway E45E', time: '28 minuten geleden' },
    { name: 'David L.', location: 'Haarlem', product: 'Pure Air Gen 2', time: '35 minuten geleden' },
  ]

  // Auto-scroll activity feed
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentActivityIndex(prev => (prev + 1) % liveActivity.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const reviews = [
    { 
      name: 'Lisa van der Berg', 
      rating: 5, 
      date: '3 dagen geleden',
      verified: true,
      text: 'Fantastische service! Besteld op maandag en dinsdag al binnen. De e-step rijdt perfect en het team heeft me super goed geholpen met het kiezen.', 
      product: 'Xiaomi Mi Electric Scooter 4 Pro',
      helpful: 89,
      avatar: 'https://i.pravatar.cc/150?img=5'
    },
    { 
      name: 'Tom Bakker', 
      rating: 5, 
      date: '1 week geleden',
      verified: true,
      text: 'Beste prijs-kwaliteit verhouding! Overal gekeken en dit was verreweg de beste deal. E-bike rijdt als een zonnetje en de montage service was top.', 
      product: 'VanMoof S5',
      helpful: 67,
      avatar: 'https://i.pravatar.cc/150?img=12'
    },
    { 
      name: 'Sarah Jansen', 
      rating: 5, 
      date: '2 weken geleden',
      verified: true,
      text: 'Super blij met mijn aankoop! WhatsApp support is geweldig, alle vragen werden direct beantwoord. Aanrader!', 
      product: 'Segway Ninebot MAX',
      helpful: 124,
      avatar: 'https://i.pravatar.cc/150?img=9'
    },
  ]

  const faqItems = [
    { q: 'Hoe snel wordt mijn bestelling geleverd?', a: 'Bestellingen voor 23:00 besteld worden de volgende werkdag geleverd in heel Nederland.' },
    { q: 'Kan ik mijn e-step of e-bike retourneren?', a: 'Ja, je hebt 30 dagen bedenktijd. Niet tevreden? Dan krijg je je geld terug.' },
    { q: 'Welke garantie krijg ik?', a: 'Alle producten hebben minimaal 2 jaar fabrieksgarantie. Sommige merken bieden zelfs 3 jaar garantie.' },
    { q: 'Is er service en onderhoud beschikbaar?', a: 'Ja, we bieden onderhoudscontracten en hebben een eigen serviceteam voor reparaties.' },
  ]

  const blogPosts = [
    { title: 'De beste e-steps van 2024', image: 'https://images.unsplash.com/photo-1544966503-7ad531c1bb5e?w=400&h=250&fit=crop', date: '5 dagen geleden', category: 'Koopgids' },
    { title: 'E-bike onderhoud tips', image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=250&fit=crop', date: '1 week geleden', category: 'Tips' },
    { title: 'Wetgeving e-steps Nederland 2024', image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=250&fit=crop', date: '2 weken geleden', category: 'Nieuws' },
  ]

  return (
    <main className="bg-white">
      
      {/* Flash Sale Banner */}
      <FlashSaleTimer variant="banner" />
      
      {/* Hero Section - Video Background */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 overflow-hidden min-h-[600px]">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/Stoere_Offroad_Step_Stunt_Video.mp4" type="video/mp4" />
          </video>
          {/* Dark gradient overlay voor leesbaarheid */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/80 to-pink-900/80"></div>
        </div>
        
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="text-white">
              {/* Trust Badges */}
              <div className="flex flex-wrap gap-3 mb-6">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-bold">4.9/5 (25.000+ reviews)</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full">
                  <Truck className="h-4 w-4" />
                  <span className="text-sm font-bold">Gratis verzending</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full">
                  <Shield className="h-4 w-4" />
                  <span className="text-sm font-bold">2 jaar garantie</span>
                </div>
              </div>

              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                Nederland's #1<br />
                <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  E-mobility Store
                </span>
              </h1>
              
              <p className="text-2xl mb-4 text-white/95 font-medium">
                Premium e-steps & e-bikes met <span className="font-black">laagste prijs garantie</span>
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-lg">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                  <span>Vandaag besteld = morgen rijden</span>
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                  <span>30 dagen bedenktijd & gratis retour</span>
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                  <span>Expert advies via WhatsApp</span>
                </li>
              </ul>

              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/shop/e-steps"
                  className="group px-10 py-5 bg-white text-blue-600 rounded-2xl font-black text-lg hover:bg-gray-100 transition-all shadow-2xl hover:shadow-3xl hover:scale-105 flex items-center gap-3"
                >
                  <Zap className="h-6 w-6" />
                  <span>Shop E-steps</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="/shop/elektrische-fietsen"
                  className="px-10 py-5 bg-white/10 backdrop-blur-md text-white rounded-2xl font-black text-lg hover:bg-white/20 transition-all border-2 border-white/30 flex items-center gap-3"
                >
                  <Bike className="h-6 w-6" />
                  <span>Shop E-bikes</span>
                </Link>
              </div>

              {/* Real-time Social Proof - Inline */}
              <div className="mt-6 inline-flex items-center gap-3 px-4 py-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                <div className="relative">
                  <Eye className="h-6 w-6 text-green-400 animate-pulse" />
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                </div>
                <div>
                  <span className="font-bold text-base">{viewCount} mensen</span>
                  <span className="text-sm text-white/80 ml-1">bekijken dit nu</span>
                </div>
              </div>
            </div>

            {/* Right Side - Quick Categories met Plaatjes */}
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 self-start">
                <h3 className="text-lg font-bold text-white mb-4">Snel naar:</h3>
                <div className="grid grid-cols-2 gap-3">
                  {categories.slice(0, 4).map((cat, idx) => (
                    <Link 
                      key={idx}
                      href={cat.href}
                      className="group relative overflow-hidden rounded-xl bg-white/5 hover:bg-white/10 transition-all border border-white/20 hover:scale-105"
                    >
                      <div className="aspect-square relative overflow-hidden">
                        <img 
                          src={cat.image}
                          alt={cat.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                      </div>
                      <div className="absolute inset-0 p-3 flex flex-col justify-end">
                        <div className={`inline-flex items-center gap-1.5 px-2 py-1 bg-gradient-to-r ${cat.color} rounded-full text-xs font-bold mb-2 w-fit`}>
                          <cat.icon className="h-3 w-3 text-white" />
                          <span className="text-white">{cat.count}</span>
                        </div>
                        <h4 className="font-black text-white text-sm mb-0.5">{cat.name}</h4>
                        <p className="text-xs text-white/80">{cat.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip - Clean & Modern */}
      <section className="py-10 bg-gradient-to-br from-blue-50 to-purple-50 border-y border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {trustSignals.map((signal, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="w-16 h-16 flex items-center justify-center mb-4">
                  <signal.icon className={`h-12 w-12 ${
                    signal.color === 'blue' ? 'text-blue-600' :
                    signal.color === 'green' ? 'text-green-600' :
                    signal.color === 'purple' ? 'text-purple-600' :
                    signal.color === 'orange' ? 'text-orange-600' :
                    'text-yellow-500'
                  }`} />
                </div>
                <div className="font-bold text-sm text-gray-900 mb-1">{signal.title}</div>
                <div className="text-xs text-gray-600">{signal.description}</div>
              </div>
            ))}
          </div>
          
          {/* Trust Badges Section */}
          <div className="mt-8">
            <TrustBadges variant="horizontal" showPaymentIcons={true} showTrustpilot={true} />
          </div>
        </div>
      </section>

      {/* Logo Wall - As Seen In + Brands */}
      <LogoWall />

      {/* Live Activity Feed - Slider */}
      <section className="py-4 bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50 border-y-2 border-yellow-200 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-6">
            {/* Sales Counter */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <div className="relative">
                <Package className="h-6 w-6 text-green-600" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
              </div>
              <div>
                <span className="font-bold text-gray-900 text-lg">156</span>
                <span className="text-gray-600 text-sm ml-1">verkocht vandaag</span>
              </div>
            </div>

            {/* Sliding Activity */}
            <div className="flex-1 relative h-12 overflow-hidden">
              <div 
                className="absolute inset-0 flex items-center transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentActivityIndex * 100}%)` }}
              >
                {liveActivity.map((activity, idx) => (
                  <div 
                    key={idx} 
                    className="min-w-full flex items-center justify-center gap-3 text-sm"
                  >
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse flex-shrink-0"></div>
                    <div className="flex items-center gap-2 flex-wrap justify-center">
                      <span className="font-bold text-gray-900">{activity.name}</span>
                      <span className="text-gray-600">uit</span>
                      <span className="font-semibold text-purple-600">{activity.location}</span>
                      <span className="text-gray-600">kocht</span>
                      <span className="font-bold text-blue-600">{activity.product}</span>
                      <span className="text-gray-500 text-xs">• {activity.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Progress Dots */}
            <div className="flex gap-1.5 flex-shrink-0">
              {liveActivity.map((_, idx) => (
                <div 
                  key={idx}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentActivityIndex ? 'bg-blue-600 w-6' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-100 to-red-100 rounded-full mb-4">
              <Sparkles className="h-5 w-5 text-orange-600" />
              <span className="font-bold text-orange-600">Trending vandaag</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              🔥 Meest Populaire Producten
            </h2>
            <p className="text-xl text-gray-600">
              Deze modellen worden het meest gekocht in Nederland
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <div 
                key={product.id}
                className="group bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-blue-300 hover:-translate-y-2"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Discount badge */}
                  {product.discount && (
                    <div className="absolute top-3 right-3">
                      <div className="px-3 py-1.5 bg-red-500 text-white rounded-full font-bold text-sm shadow-lg">
                        {product.discount}
                      </div>
                    </div>
                  )}

                  {/* Limited Stock Badge */}
                  {product.stock && product.stock <= 10 && (
                    <div className="absolute top-3 left-3">
                      <LimitedStockBadge stock={product.stock} />
                    </div>
                  )}

                  {/* Hot Item Badge */}
                  {product.soldToday && product.soldToday > 15 && (
                    <HotItemBadge soldLast24h={product.soldToday} trending={true} />
                  )}

                  {/* Wishlist button */}
                  <button className="absolute bottom-3 left-3 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:bg-white hover:text-red-500 transition-all opacity-0 group-hover:opacity-100">
                    <Heart className="h-4 w-4" />
                  </button>
                </div>

                <div className="p-5">
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                      ))}
                    </div>
                    <span className="font-bold text-sm">{product.rating}</span>
                    <span className="text-sm text-gray-500">({product.reviews})</span>
                  </div>

                  <h3 className="font-bold text-base text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {product.name}
                  </h3>

                  {/* Stock Info */}
                  {product.stock && (
                    <div className="mb-3">
                      <ProductStockInfo 
                        stock={product.stock}
                        soldToday={product.soldToday}
                        viewingNow={product.viewingNow}
                      />
                    </div>
                  )}

                  {/* Pricing */}
                  <div className="flex items-baseline gap-2 mb-4">
                    <div className="text-3xl font-black text-gray-900">
                      €{product.price}
                    </div>
                    {product.oldPrice && (
                      <span className="text-base text-gray-400 line-through">€{product.oldPrice}</span>
                    )}
                  </div>

                  {/* CTA Button */}
                  <Link 
                    href={product.href}
                    className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all text-center shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    <span>Bekijk product</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/shop/all"
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-black text-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-xl hover:shadow-2xl"
            >
              <span>Bekijk alle producten</span>
              <ArrowRight className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* Product Finder Quiz */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-4">
              <Sparkles className="h-5 w-5 text-blue-600" />
              <span className="font-bold text-blue-900">Persoonlijk Advies</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              🎯 Vind Jouw Perfecte Match
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Beantwoord 4 vragen en ontdek welke e-step of e-bike perfect bij jou past
            </p>
          </div>
          <ProductFinderQuiz />
        </div>
      </section>

      {/* Bundle Deals */}
      <BundleDeals />

      {/* Categories - Netjes Naast Elkaar */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
              Shop op Categorie
            </h2>
            <p className="text-lg text-gray-600">
              Vind exact wat je zoekt
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link 
                key={index}
                href={category.href}
                className="group relative overflow-hidden rounded-2xl bg-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="aspect-[3/4] relative overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                </div>

                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                  <div className={`inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r ${category.color} rounded-full text-xs font-bold mb-3 w-fit`}>
                    <category.icon className="h-4 w-4" />
                    <span>{category.count}</span>
                  </div>
                  
                  <h3 className="text-2xl font-black mb-2">{category.name}</h3>
                  <p className="text-sm text-white/90 mb-3">{category.description}</p>
                  
                  <div className="flex items-center gap-2 text-sm font-bold group-hover:gap-3 transition-all">
                    <span>Bekijk</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-gradient-to-b from-yellow-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full mb-4">
              <Star className="h-6 w-6 fill-yellow-500 text-yellow-500" />
              <span className="font-black text-2xl text-gray-900">4.9 / 5</span>
              <span className="text-gray-600">•</span>
              <span className="font-bold text-gray-700">25.000+ reviews</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Wat Onze Klanten Zeggen
            </h2>
            <p className="text-xl text-gray-600">
              Echte reviews van echte klanten
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-xl border-2 border-gray-100 hover:border-blue-300 transition-all hover:-translate-y-2">
                {/* Avatar en verificatie */}
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={review.avatar} 
                    alt={review.name}
                    className="w-16 h-16 rounded-full border-4 border-blue-100 shadow-lg"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="font-bold text-gray-900">{review.name}</div>
                      {review.verified && (
                        <BadgeCheck className="h-5 w-5 text-green-600" />
                      )}
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-900 mb-6 text-base leading-relaxed">
                  "{review.text}"
                </p>
                
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm text-gray-600">Kocht: {review.product}</div>
                    <div className="text-xs text-gray-500">{review.date}</div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <ThumbsUp className="h-4 w-4" />
                    <span>{review.helpful} vonden dit nuttig</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link 
              href="/reviews"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-gray-300 rounded-xl font-bold hover:bg-gray-50 transition-all"
            >
              <span>Lees alle 25.000+ reviews</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <VideoTestimonials />

      {/* Instagram Feed */}
      <InstagramFeed />

      {/* Recently Viewed */}
      <RecentlyViewed />

      {/* Promotional Banner */}
      <section className="py-20 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=1920&h=600&fit=crop')] opacity-10 bg-cover bg-center"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-bold mb-6">
                <Gift className="h-5 w-5" />
                <span>Limited Time Offer</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-black mb-6">
                Mega Sale Weekend!
              </h2>
              
              <p className="text-2xl mb-6 text-white/95">
                <span className="font-black text-yellow-300">Tot 30% korting</span> op geselecteerde e-steps en e-bikes
              </p>
              
              <ul className="space-y-3 mb-8 text-lg">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-green-300 flex-shrink-0" />
                  <span>Gratis verzending op alle orders</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-green-300 flex-shrink-0" />
                  <span>Extra accessoire cadeau bij aankoop</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-green-300 flex-shrink-0" />
                  <span>Verlengde garantie tot 3 jaar</span>
                </li>
              </ul>

              {/* Countdown */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-8 border border-white/20">
                <div className="text-sm font-bold mb-3">Sale eindigt over:</div>
                <div className="grid grid-cols-4 gap-4">
                  {[
                    { label: 'Dagen', value: Math.floor(countdown.hours / 24) },
                    { label: 'Uren', value: countdown.hours % 24 },
                    { label: 'Min', value: countdown.minutes },
                    { label: 'Sec', value: countdown.seconds }
                  ].map((time, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-4xl font-black">{String(time.value).padStart(2, '0')}</div>
                      <div className="text-sm text-white/80">{time.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <Link 
                href="/sale"
                className="inline-flex items-center gap-3 px-10 py-5 bg-white text-orange-600 rounded-2xl font-black text-xl hover:bg-gray-100 transition-all shadow-2xl hover:shadow-3xl hover:scale-105"
              >
                <Sparkles className="h-6 w-6" />
                <span>Bekijk alle deals</span>
                <ArrowRight className="h-6 w-6" />
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=800&fit=crop" 
                  alt="Sale"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-6 -right-6 bg-yellow-400 text-gray-900 p-8 rounded-2xl shadow-2xl transform rotate-12">
                <div className="text-6xl font-black">-30%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Veelgestelde Vragen
            </h2>
            <p className="text-xl text-gray-600">
              Alles wat je moet weten
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((faq, index) => (
              <details key={index} className="group bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all border-2 border-gray-100">
                <summary className="flex items-center justify-between cursor-pointer font-bold text-lg text-gray-900 list-none">
                  <span>{faq.q}</span>
                  <ChevronRight className="h-6 w-6 text-blue-600 group-open:rotate-90 transition-transform" />
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Staat je vraag er niet bij?</p>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Chat met ons team</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog/Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-black text-gray-900 mb-2">
                E-mobility Nieuws & Tips
              </h2>
              <p className="text-xl text-gray-600">
                Blijf op de hoogte van het laatste nieuws
              </p>
            </div>
            <Link 
              href="/blog"
              className="hidden md:flex items-center gap-2 px-6 py-3 border-2 border-gray-300 rounded-xl font-bold hover:bg-gray-50 transition-all"
            >
              <span>Alle artikelen</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Link 
                key={index}
                href="/blog/1"
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-gray-100"
              >
                <div className="aspect-[16/10] overflow-hidden bg-gray-100">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-bold">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                  <h3 className="font-bold text-xl text-gray-900 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              Klaar Om Te Bestellen?
            </h2>
            <p className="text-2xl mb-8 text-white/95">
              Ontdek waarom 25.000+ Nederlanders voor ons kozen
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-black mb-2">30 dagen</div>
                <div className="text-white/90">Bedenktijd</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-black mb-2">2 jaar</div>
                <div className="text-white/90">Garantie</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-black mb-2">24/7</div>
                <div className="text-white/90">Support</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                href="/shop/all"
                className="inline-flex items-center gap-3 px-10 py-5 bg-white text-blue-600 rounded-2xl font-black text-xl hover:bg-gray-100 transition-all shadow-2xl"
              >
                <span>Start met shoppen</span>
                <ArrowRight className="h-6 w-6" />
              </Link>
              <Link 
                href="https://wa.me/31612345678"
                className="inline-flex items-center gap-3 px-10 py-5 bg-green-500 text-white rounded-2xl font-black text-xl hover:bg-green-600 transition-all shadow-2xl"
              >
                <MessageCircle className="h-6 w-6" />
                <span>Chat met expert</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* App Download CTA */}
      <AppDownloadCTA />

      {/* Newsletter */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl shadow-2xl p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">📧</div>
                <h3 className="text-4xl font-black mb-4">
                  Ontvang 10% Korting!
                </h3>
                <p className="text-xl text-white/90">
                  Meld je aan voor onze nieuwsbrief en ontvang exclusieve deals
                </p>
              </div>
              
              <div className="flex gap-3 max-w-2xl mx-auto">
                <input 
                  type="email" 
                  placeholder="jouw@email.nl"
                  className="flex-1 px-6 py-4 rounded-xl text-gray-900 font-medium focus:ring-4 focus:ring-white/50 focus:outline-none"
                />
                <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-black hover:bg-gray-100 transition-all shadow-xl whitespace-nowrap">
                  Aanmelden
                </button>
              </div>
              
              <p className="text-center text-sm text-white/80 mt-4">
                ✓ Exclusieve kortingen ✓ Nieuwe producten ✓ Tips & tricks
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

export default function Page() {
  return (
    <CartProvider>
      <AnnouncementBar />
      <FreeShippingBar cartTotal={35} threshold={50} />
      <Header />
      <Homepage />
      <Footer />
      
      {/* Conversion Boosters */}
      <ExitIntentPopup />
      <StickyCTA />
      <LiveChatWidget />
      <SpinTheWheel />
    </CartProvider>
  )
}
