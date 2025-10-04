import ProductCard from "@/components/ProductCard";

export default function Home() {
  const featured = [
    { id: "1", title: "E-step Urban X Pro", price: 749, category: "E-steps", isNew: true },
    { id: "2", title: "E-bike City Pro Max", price: 1599, category: "E-bikes", isNew: true },
    { id: "3", title: "E-step Compact Lite", price: 599, category: "E-steps", isNew: false },
    { id: "4", title: "E-bike Mountain Explorer", price: 2299, category: "E-bikes", isNew: true },
    { id: "5", title: "E-step Speed Demon", price: 899, category: "E-steps", isNew: false },
    { id: "6", title: "Smart Helmet Pro", price: 149, category: "Accessoires", isNew: true },
  ];

  const testimonials = [
    {
      name: "Sarah van der Berg",
      role: "Dagelijkse forens",
      content: "Mijn E-bike City Pro heeft mijn leven veranderd! Geen files meer en ik kom fris aan op kantoor.",
      rating: 5,
      image: "👩‍💼"
    },
    {
      name: "Mark Janssen", 
      role: "Student",
      content: "De E-step Urban X is perfect voor door de stad. Compact, snel en super betrouwbaar!",
      rating: 5,
      image: "👨‍🎓"
    },
    {
      name: "Lisa Chen",
      role: "Ondernemer",
      content: "Uitstekende service en kwaliteit. Emovement denkt echt mee in duurzame mobiliteit.",
      rating: 5,
      image: "👩‍💻"
    }
  ];

  const features = [
    {
      icon: "⚡",
      title: "Snelladen",
      description: "Volledig opgeladen in 2-4 uur met onze smart charging technologie"
    },
    {
      icon: "🔋",
      title: "Lange Actieradius", 
      description: "Tot 80km bereik op één lading, perfect voor dagelijks gebruik"
    },
    {
      icon: "🛡️",
      title: "2 Jaar Garantie",
      description: "Volledige dekking op alle onderdelen en gratis onderhoud"
    },
    {
      icon: "🚚",
      title: "Gratis Bezorging",
      description: "Binnen 24 uur geleverd in heel Nederland, inclusief montage"
    },
    {
      icon: "📱",
      title: "Smart App",
      description: "Beheer je voertuig via onze app met GPS tracking en diagnostiek"
    },
    {
      icon: "♻️",
      title: "100% Duurzaam",
      description: "Geproduceerd met groene energie en recycleerbare materialen"
    }
  ];

  const categories = [
    { 
      name: 'E-steps', 
      description: 'Elektrische steps voor de stad',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    { 
      name: 'E-bikes', 
      description: 'Elektrische fietsen voor elke rit',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    },
    { 
      name: 'Onderdelen', 
      description: 'Accessoires en reserveonderdelen',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl gradient-hero border border-gray-200 dark:border-gray-700">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-emerald-600/5" />
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
        
        <div className="container-edge py-20 lg:py-32 grid gap-16 lg:grid-cols-2 items-center relative">
          <div className="space-y-10">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-3 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-6 py-3 text-sm font-semibold border border-gray-200 dark:border-gray-600 shadow-lg">
                <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                🚀 Nieuw seizoen • 2025
                <span className="bg-[var(--accent)]/10 text-[var(--accent)] px-2 py-1 rounded-full text-xs font-bold">HOT</span>
              </span>
            </div>
            
          <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black leading-[0.95] text-gray-900 dark:text-white">
                Beweeg slimmer met{" "}
                <span className="bg-gradient-to-r from-[var(--brand)] via-blue-600 to-[var(--accent)] bg-clip-text text-transparent">
                  Emovement
            </span>
            </h1>
              
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full" />
            </div>
            
            <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed font-medium">
              🌱 Ontdek onze premium collectie elektrische fietsen, steps en onderdelen. 
              <span className="text-blue-600 dark:text-blue-400 font-semibold">Duurzaam, snel en stijlvol</span> voor elke rit door de stad.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a className="group btn-primary text-lg px-8 py-4 shadow-md" href="/producten">
                <svg className="w-6 h-6 mr-3 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                🛒 Shop nu
              </a>
              <a className="group btn-secondary text-lg px-8 py-4" href="/over">
                📖 Meer over ons
                <svg className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
            
            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-8 pt-10 border-t border-gray-200 dark:border-gray-700">
              <div className="text-center group">
                <div className="text-3xl lg:text-4xl font-black text-transparent bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text group-hover:scale-110 transition-transform">1000+</div>
                <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 mt-1">😊 Tevreden klanten</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl lg:text-4xl font-black text-transparent bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text group-hover:scale-110 transition-transform">100+</div>
                <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 mt-1">⚡ Premium producten</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl lg:text-4xl font-black text-transparent bg-gradient-to-r from-purple-600 to-emerald-600 bg-clip-text group-hover:scale-110 transition-transform">24/7</div>
                <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 mt-1">🛡️ Support & garantie</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square w-full max-w-xl mx-auto relative">
              {/* Enhanced main showcase */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-100 via-white to-emerald-100 dark:from-blue-900/20 dark:via-gray-800 dark:to-emerald-900/20 shadow-2xl border border-white/50 dark:border-gray-700/50">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-6">
                    <div className="relative">
                      <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-blue-600 via-purple-600 to-emerald-500 flex items-center justify-center shadow-2xl animate-pulse">
                        <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div className="absolute inset-0 w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-blue-600 to-emerald-500 opacity-20 animate-ping" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-3xl font-black text-gray-900 dark:text-white">⚡ E-mobility</h3>
                      <p className="text-lg font-semibold text-gray-600 dark:text-gray-400">De toekomst van vervoer</p>
                      <div className="flex justify-center gap-2 mt-4">
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-xs font-bold">🚀 Snel</span>
                        <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 rounded-full text-xs font-bold">🌱 Duurzaam</span>
                        <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-xs font-bold">💎 Premium</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Enhanced floating elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-2xl bg-[var(--accent)] flex items-center justify-center shadow-xl">
                <div className="text-center">
                  <div className="text-white font-black text-lg">🔥</div>
                  <div className="text-white font-bold text-xs">Nieuw!</div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-2xl bg-[var(--brand)] flex items-center justify-center shadow-xl">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              
              <div className="absolute top-1/2 -left-8 w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg animate-pulse">
                <span className="text-2xl">⭐</span>
              </div>
              
              <div className="absolute top-1/4 -right-8 w-14 h-14 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg animate-bounce delay-500">
                <span className="text-xl">💡</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="space-y-12">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-100 to-emerald-100 dark:from-blue-900/20 dark:to-emerald-900/20 px-6 py-2 text-sm font-semibold text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700">
            ⭐ Premium Collectie
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 dark:text-white">
            🔥 Populaire producten
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Ontdek onze best verkochte e-mobility producten, gekozen door duizenden tevreden klanten
          </p>
          <a className="inline-flex items-center gap-3 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-bold text-lg group hover:bg-blue-50 dark:hover:bg-blue-900/20 px-6 py-3 rounded-full transition-all" href="/producten">
            🛍️ Bekijk alle producten
            <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {/* Product highlights */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-16">
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200 dark:border-blue-700">
            <div className="text-3xl mb-3">🚚</div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">Gratis verzending</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Vanaf €50 in heel Nederland</p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20 border border-emerald-200 dark:border-emerald-700">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">Snelle levering</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Binnen 24 uur in huis</p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border border-purple-200 dark:border-purple-700">
            <div className="text-3xl mb-3">🛡️</div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">2 jaar garantie</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Volledige dekking</p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border border-orange-200 dark:border-orange-700">
            <div className="text-3xl mb-3">💬</div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">24/7 support</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Altijd bereikbaar</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20 border border-gray-200 dark:border-gray-700">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-emerald-600/5" />
        <div className="container-edge py-20 relative">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-100 to-blue-100 dark:from-emerald-900/20 dark:to-blue-900/20 px-6 py-2 text-sm font-semibold text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-700">
              ✨ Waarom Emovement
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 dark:text-white">
              🚀 Premium e-mobility features
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Ontdek waarom duizenden klanten kiezen voor onze innovatieve elektrische voertuigen
            </p>
          </div>
          
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="group p-8 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:scale-105 transition-all duration-300">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="space-y-12">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/20 dark:to-orange-900/20 px-6 py-2 text-sm font-semibold text-yellow-700 dark:text-yellow-300 border border-yellow-200 dark:border-yellow-700">
            💬 Klantbeoordelingen
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 dark:text-white">
            ⭐ Wat onze klanten zeggen
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Lees de ervaringen van duizenden tevreden Emovement klanten
          </p>
        </div>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl">{testimonial.image}</div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <blockquote className="text-gray-700 dark:text-gray-300 italic leading-relaxed">
                "{testimonial.content}"
              </blockquote>
            </div>
          ))}
        </div>
        
        <div className="text-center pt-8">
          <a className="inline-flex items-center gap-3 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-bold text-lg group hover:bg-blue-50 dark:hover:bg-blue-900/20 px-8 py-4 rounded-full transition-all border border-blue-200 dark:border-blue-700" href="/reviews">
            📝 Lees meer reviews
            <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Categories */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
            Shop per categorie
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Vind precies wat je zoekt in onze zorgvuldig samengestelde categorieën
          </p>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <a 
              key={category.name} 
              href="/producten" 
              className="group card p-8 hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-emerald-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <svg className="w-6 h-6 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                {category.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {category.description}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-purple-600 to-emerald-600 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        
        <div className="container-edge py-20 lg:py-24 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-6 py-2 text-sm font-semibold border border-white/30">
                📧 Blijf op de hoogte
              </div>
              <h2 className="text-4xl lg:text-5xl font-black">
                🚀 Klaar voor de toekomst van mobiliteit?
              </h2>
              <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Ontdek onze volledige collectie en ontvang exclusieve aanbiedingen, tips en het laatste nieuws over e-mobility!
              </p>
            </div>
            
            {/* Newsletter Signup */}
            <div className="max-w-md mx-auto">
              <div className="flex gap-3">
                <input 
                  type="email" 
                  placeholder="✉️ Jouw e-mailadres"
                  className="flex-1 px-6 py-4 rounded-xl bg-white/90 backdrop-blur-sm text-gray-900 placeholder-gray-500 border border-white/50 focus:outline-none focus:ring-4 focus:ring-white/30 font-medium"
                />
                <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105">
                  🚀 Aanmelden
                </button>
              </div>
              <p className="text-sm text-blue-100 mt-3 opacity-80">
                💌 Geen spam, alleen waardevolle content. Uitschrijven kan altijd.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <a className="group inline-flex items-center justify-center rounded-xl bg-white text-blue-600 px-10 py-5 text-lg font-bold hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105" href="/producten">
                🛍️ Bekijk alle producten
                <svg className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a className="group inline-flex items-center justify-center rounded-xl border-2 border-white text-white px-10 py-5 text-lg font-bold hover:bg-white hover:text-blue-600 transition-all" href="/contact">
                💬 Neem contact op
                <svg className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </a>
            </div>
            
            {/* Trust indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-12 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-black text-white">1000+</div>
                <div className="text-sm text-blue-100 opacity-80">😊 Tevreden klanten</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-white">4.9/5</div>
                <div className="text-sm text-blue-100 opacity-80">⭐ Gemiddelde beoordeling</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-white">24/7</div>
                <div className="text-sm text-blue-100 opacity-80">🛡️ Support beschikbaar</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-white">2 jaar</div>
                <div className="text-sm text-blue-100 opacity-80">✅ Volledige garantie</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
