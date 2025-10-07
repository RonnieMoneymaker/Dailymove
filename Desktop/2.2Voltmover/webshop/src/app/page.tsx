"use client";

import ProductCard from "@/components/ProductCard";
import { BrandShowcase } from "@/components/home/brand-showcase";
import { Categories } from "@/components/home/categories";
import { FAQ } from "@/components/home/faq";
import { NewsletterSignup } from "@/components/home/newsletter-signup";
import { TrustWall } from "@/components/home/trust-wall";
import { ValueProposition } from "@/components/home/value-proposition";
import { ComparisonTable } from "@/components/home/comparison-table";
import Testimonials from "@/components/Testimonials";
import TrustBadges from "@/components/TrustBadges";
import Stats from "@/components/Stats";
import TrustpilotReviews from "@/components/TrustpilotReviews";
import BrandLogos from "@/components/BrandLogos";

export default function Home() {
  const featured = [
    { 
      id: "1", 
      title: "E-step Urban X Pro", 
      price: 749, 
      category: "E-steps", 
      isNew: true,
      image: "https://images.unsplash.com/photo-1598128558393-70ff21433be0?w=600&h=600&fit=crop"
    },
    { 
      id: "2", 
      title: "E-bike City Pro Max", 
      price: 1599, 
      category: "E-bikes", 
      isNew: true,
      image: "https://images.unsplash.com/photo-1571333250630-f0230c320b6d?w=600&h=600&fit=crop"
    },
    { 
      id: "3", 
      title: "E-step Compact Lite", 
      price: 599, 
      category: "E-steps", 
      isNew: false,
      image: "https://images.unsplash.com/photo-1622445272461-c6580cab8755?w=600&h=600&fit=crop"
    },
    { 
      id: "4", 
      title: "E-bike Mountain Explorer", 
      price: 2299, 
      category: "E-bikes", 
      isNew: true,
      image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=600&h=600&fit=crop"
    },
    { 
      id: "5", 
      title: "E-step Speed Demon", 
      price: 899, 
      category: "E-steps", 
      isNew: false,
      image: "https://images.unsplash.com/photo-1603033537138-dd3f336f4019?w=600&h=600&fit=crop"
    },
    { 
      id: "6", 
      title: "Smart Helmet Pro", 
      price: 149, 
      category: "Accessoires", 
      isNew: true,
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=600&fit=crop"
    },
  ];

  return (
    <div className="space-y-0">
      {/* Announcement Bar - Super Modern */}
      <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 via-pink-600 to-red-600 text-white py-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImRvdHMiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuMiIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNkb3RzKSIvPjwvc3ZnPg==')] opacity-40"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-full bg-white/10 blur-2xl animate-pulse"></div>
          <div className="absolute top-0 right-0 w-96 h-full bg-white/10 blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        <div className="container-edge relative">
          <div className="flex items-center justify-center gap-8 text-sm">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 animate-bounce">
              <span className="text-2xl">🔥</span>
              <span className="font-black">MEGA SALE</span>
              <span className="px-2 py-0.5 bg-yellow-400 text-gray-900 rounded-full text-xs font-black">-25%</span>
            </div>
            <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-xl">🚀</span>
              <span className="font-bold">Gratis verzending €50+</span>
            </div>
            <div className="hidden lg:flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-xl">⭐</span>
              <span className="font-bold">4.9/5 Reviews</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20">
        {/* Animated background blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-400/10 dark:bg-pink-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container-edge relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 dark:from-blue-900/30 dark:via-purple-900/30 dark:to-pink-900/30 rounded-full text-blue-700 dark:text-blue-300 text-sm font-black border-2 border-blue-200 dark:border-blue-800 shadow-lg hover:scale-105 transition-all">
                  <span className="w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-pulse"></span>
                  ✨ Nieuw seizoen 2025
                </div>
                
                <div>
                  <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-6">
                    <span className="text-gray-900 dark:text-white">Ontdek de</span>{" "}
                    <span className="relative inline-block">
                      <span className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 blur-2xl opacity-30 animate-pulse"></span>
                      <span className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
                        toekomst
                      </span>
                    </span>{" "}
                    <span className="text-gray-900 dark:text-white">van mobiliteit</span>
                  </h1>
                  <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                    Premium e-steps en e-bikes voor dagelijks gebruik. 
                    <span className="block mt-2 text-blue-600 dark:text-blue-400 font-bold">
                      ⚡ Duurzaam • 🎯 Stijlvol • 🚀 Betrouwbaar
                    </span>
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="/producten"
                    className="group relative inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-full font-black text-lg hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 transition-all shadow-2xl hover:shadow-3xl hover:shadow-blue-500/50 hover:scale-110 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    <span className="relative">🚀 Bekijk collectie</span>
                    <svg className="w-6 h-6 ml-2 relative group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  <a 
                    href="/over"
                    className="group inline-flex items-center justify-center px-10 py-5 border-3 border-gray-300 dark:border-gray-600 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl text-gray-900 dark:text-white rounded-full font-black text-lg hover:border-purple-600 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 dark:hover:border-purple-400 dark:hover:from-purple-900/30 dark:hover:to-pink-900/30 transition-all shadow-xl hover:shadow-2xl hover:scale-110"
                  >
                    💡 Meer info
                    <svg className="w-6 h-6 ml-2 group-hover:rotate-45 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </a>
                </div>

                {/* Social Proof - Enhanced */}
                <div className="flex items-center gap-6 pt-8">
                  <div className="flex -space-x-4">
                    {[5, 12, 47, 9, 14].map((imgId, i) => (
                      <img 
                        key={i}
                        src={`https://i.pravatar.cc/80?img=${imgId}`}
                        alt="Customer"
                        className="w-14 h-14 rounded-full border-4 border-white dark:border-gray-900 object-cover shadow-lg hover:scale-110 hover:z-10 transition-all"
                      />
                    ))}
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 px-6 py-3 rounded-full border-2 border-blue-200 dark:border-blue-800">
                    <div className="font-black text-gray-900 dark:text-white text-lg">25.000+ tevreden klanten</div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="flex">
                        {[1,2,3,4,5].map(i => (
                          <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="font-bold text-gray-700 dark:text-gray-300">4.9/5 ★★★★★</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image Gallery - Ultra Modern */}
              <div className="relative">
                {/* Main image with organic shape */}
                <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl group hover:shadow-blue-500/40 transition-all duration-500 hover:scale-[1.03] hover:rotate-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-purple-600/30 to-pink-600/30 mix-blend-multiply"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1559386484-97dfc0e15539?w=900&h=900&fit=crop"
                    alt="E-mobility lifestyle"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  
                  {/* Floating sparkle effect */}
                  <div className="absolute top-10 right-10 w-20 h-20 bg-white/20 rounded-full blur-2xl animate-pulse"></div>
                  <div className="absolute bottom-20 left-10 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
                  
                  {/* Floating features */}
                  <div className="absolute top-6 right-6 bg-white/95 dark:bg-gray-800/95 backdrop-blur-lg rounded-3xl p-5 shadow-2xl border-2 border-green-200 dark:border-green-800 animate-bounce">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-xs text-gray-600 dark:text-gray-400 font-bold">CO₂ besparing</div>
                        <div className="font-black text-lg bg-gradient-to-r from-green-600 to-emerald-600 text-transparent bg-clip-text">-2.5 ton/jaar</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating pricing card */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white/95 dark:bg-gray-800/95 backdrop-blur-lg rounded-3xl p-6 shadow-2xl border-2 border-blue-200 dark:border-blue-700">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Vanaf</div>
                        <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
                          €599
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Levering</div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          <div className="text-lg font-bold text-gray-900 dark:text-white">24 uur</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Mini features */}
                    <div className="flex gap-4 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                        <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        2 jaar garantie
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                        <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Gratis service
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Small floating images with rotation */}
                <div className="absolute -top-8 -left-8 w-36 h-36 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white dark:border-gray-900 hover:scale-110 hover:-rotate-6 transition-all duration-300 ring-4 ring-blue-200/50 dark:ring-blue-800/50">
                  <img src="https://images.unsplash.com/photo-1571333250630-f0230c320b6d?w=200&h=200&fit=crop" alt="E-bike" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-10 -right-10 w-44 h-44 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white dark:border-gray-900 hover:scale-110 hover:rotate-6 transition-all duration-300 ring-4 ring-purple-200/50 dark:ring-purple-800/50">
                  <img src="https://images.unsplash.com/photo-1598128558393-70ff21433be0?w=200&h=200&fit=crop" alt="E-step" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USP Section with gradient flow */}
      <section className="relative py-20 bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/10 dark:to-purple-900/10">
        <div className="container-edge">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-all"></div>
              <div className="relative bg-white dark:bg-gray-800 border-2 border-blue-200 dark:border-blue-800 rounded-3xl p-8 hover:scale-105 transition-all shadow-xl hover:shadow-2xl">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-3 text-center">
                  Supersnel Laden
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-center leading-relaxed">
                  Volledig opgeladen in <span className="font-bold text-blue-600 dark:text-blue-400">3-4 uur</span>. Ideaal voor dagelijks gebruik.
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-all"></div>
              <div className="relative bg-white dark:bg-gray-800 border-2 border-purple-200 dark:border-purple-800 rounded-3xl p-8 hover:scale-105 transition-all shadow-xl hover:shadow-2xl">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-3 text-center">
                  2 Jaar Garantie
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-center leading-relaxed">
                  Volledige garantie op <span className="font-bold text-purple-600 dark:text-purple-400">alle onderdelen</span>. Zorgeloos rijden!
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-600 to-red-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-all"></div>
              <div className="relative bg-white dark:bg-gray-800 border-2 border-pink-200 dark:border-pink-800 rounded-3xl p-8 hover:scale-105 transition-all shadow-xl hover:shadow-2xl">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-pink-600 to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-3 text-center">
                  Beste Prijs
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-center leading-relaxed">
                  <span className="font-bold text-pink-600 dark:text-pink-400">Laagste prijsgarantie</span> of we betalen het verschil!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustBadges />

      {/* Brand Logos - Echte merken */}
      <BrandLogos />

      {/* Categories Section */}
      <Categories />

      {/* Brand Showcase */}
      <BrandShowcase />

      {/* Value Proposition */}
      <ValueProposition />

      {/* Featured Products */}
      <section className="relative py-20 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-purple-300/10 dark:bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-300/10 dark:bg-blue-500/5 rounded-full blur-3xl"></div>
        
        <div className="container-edge relative">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 dark:from-blue-900/30 dark:via-purple-900/30 dark:to-pink-900/30 rounded-full text-blue-700 dark:text-blue-300 text-sm font-bold border-2 border-blue-200 dark:border-blue-800 shadow-lg">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                Onze collectie
              </div>
              <div>
                <h2 className="text-5xl font-black text-gray-900 dark:text-white mb-4">
                  Populaire producten
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mx-auto rounded-full"></div>
              </div>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Ontdek onze meest gekozen e-steps en e-bikes met de beste features en reviews
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {featured.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="text-center pt-4">
              <a 
                href="/producten"
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:gap-3 transition-all"
              >
                Bekijk alle producten
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Stats />

      {/* Comparison Table */}
      <ComparisonTable />

      {/* Trustpilot Reviews - Echte reviews */}
      <TrustpilotReviews />

      <Testimonials />

      {/* Trust Wall */}
      <TrustWall />

      {/* FAQ Section */}
      <FAQ />

      {/* Newsletter Signup */}
      <NewsletterSignup />

      {/* SEO Content Section */}
      <section className="py-20 bg-gradient-to-br from-white via-purple-50/30 to-blue-50/30 dark:from-gray-900 dark:via-purple-900/10 dark:to-blue-900/10">
        <div className="container-edge">
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Hoofdtekst */}
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-6">
                E-bikes en E-steps kopen bij Emovement - <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">De #1 E-mobility specialist van Nederland</span>
              </h2>
              
              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Welkom bij <strong>Emovement</strong>, jouw betrouwbare partner voor <strong>elektrische mobiliteit</strong>. Of je nu op zoek bent naar een <strong>e-bike</strong> voor het woon-werkverkeer, een krachtige <strong>e-step</strong> voor in de stad, of hoogwaardige <strong>accessoires</strong> - bij ons vind je het allemaal. Met meer dan <strong>25.000 tevreden klanten</strong> en een uitstekende beoordeling van <strong>4.9/5 sterren op Trustpilot</strong>, zijn we de grootste en meest vertrouwde e-mobility webshop van Nederland.
              </p>

              <div className="grid md:grid-cols-2 gap-8 my-12">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border-2 border-purple-200 dark:border-purple-800">
                  <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <span className="text-3xl">🚴</span> E-bikes - Elektrische Fietsen voor Ieder Doel
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Onze <strong>e-bikes</strong> combineren innovatieve technologie met comfort en stijl. Of je nu kiest voor een stadsfiets, mountainbike of transportfiets - al onze elektrische fietsen zijn uitgerust met krachtige motoren (250W-750W), duurzame accu's (tot 80km bereik) en hoogwaardige componenten van merken als <strong>Bosch, Shimano en Yamaha</strong>. Perfect voor dagelijks gebruik, sport of gezinsuitjes.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border-2 border-blue-200 dark:border-blue-800">
                  <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <span className="text-3xl">⚡</span> E-steps - Compacte Elektrische Mobiliteit
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Onze <strong>elektrische steps</strong> zijn ideaal voor korte afstanden, woon-werkverkeer en stedelijke mobiliteit. Met topmerken zoals <strong>Xiaomi, Segway, Ninebot en Kaabo</strong> bieden we modellen van €299 tot €1.999. Alle steps beschikken over LED-verlichting, schokdemping, schijfremmen en een bereik tot 65 kilometer. Opvouwbaar voor gemakkelijk transport.
                  </p>
                </div>
              </div>

              <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-4">
                Waarom Kiezen voor Emovement?
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✅</span>
                  <div>
                    <strong>2 Jaar Volledige Garantie</strong> - Op alle producten, inclusief accu en motor. Zorgeloos genieten van je aankoop.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🚚</span>
                  <div>
                    <strong>Gratis Verzending vanaf €50</strong> - Snelle levering door heel Nederland en België. Besteld voor 23:00, morgen in huis.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">💰</span>
                  <div>
                    <strong>Beste Prijs Garantie</strong> - Vind je het goedkoper? We betalen het verschil. Altijd de laagste prijs.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🔧</span>
                  <div>
                    <strong>Gratis Service & Onderhoud</strong> - Eerste onderhoudsbeurt gratis bij 50+ vestigingen door heel Nederland.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">📞</span>
                  <div>
                    <strong>24/7 Klantenservice</strong> - Persoonlijk advies via telefoon, WhatsApp, email of live chat. We helpen je graag.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">↩️</span>
                  <div>
                    <strong>30 Dagen Bedenktijd</strong> - Niet tevreden? Geen probleem. Gratis retourneren binnen 30 dagen.
                  </div>
                </li>
              </ul>

              <h3 className="text-3xl font-black text-gray-900 dark:text-white mt-12 mb-4">
                Duurzaam en Milieuvriendelijk
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Met een <strong>e-bike of e-step</strong> draag je bij aan een <strong>schonere toekomst</strong>. Gemiddeld bespaar je <strong>2,5 ton CO₂ per jaar</strong> ten opzichte van autogebruik. Onze producten zijn energiezuinig, hebben een lange levensduur en zijn 100% recyclebaar. Samen maken we Nederland groener!
              </p>

              <h3 className="text-3xl font-black text-gray-900 dark:text-white mt-12 mb-4">
                Veelgestelde Vragen over E-bikes en E-steps
              </h3>
              <div className="space-y-4">
                <details className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border-2 border-gray-200 dark:border-gray-700">
                  <summary className="font-bold text-lg text-gray-900 dark:text-white cursor-pointer">
                    Wat is het bereik van een e-bike of e-step?
                  </summary>
                  <p className="mt-3 text-gray-600 dark:text-gray-400">
                    Het bereik varieert per model en gebruiksomstandigheden. E-bikes hebben gemiddeld een bereik van 40-80km, e-steps van 25-65km. Factoren zoals gewicht, terrein, snelheid en accucapaciteit beïnvloeden het bereik.
                  </p>
                </details>

                <details className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border-2 border-gray-200 dark:border-gray-700">
                  <summary className="font-bold text-lg text-gray-900 dark:text-white cursor-pointer">
                    Hoe lang duurt het opladen van de accu?
                  </summary>
                  <p className="mt-3 text-gray-600 dark:text-gray-400">
                    De oplaadtijd is afhankelijk van de accucapaciteit. Gemiddeld duurt volledig opladen 3-6 uur. Snelladers kunnen dit verkorten tot 2-3 uur.
                  </p>
                </details>

                <details className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border-2 border-gray-200 dark:border-gray-700">
                  <summary className="font-bold text-lg text-gray-900 dark:text-white cursor-pointer">
                    Is een e-step of e-bike verzekeringsplichtig?
                  </summary>
                  <p className="mt-3 text-gray-600 dark:text-gray-400">
                    E-bikes tot 25 km/u vallen onder fietsverzekering. E-steps tot 25 km/u zijn niet verzekeringsplichtig maar wel aan te raden voor diefstal. Snellere modellen vereisen vaak een verzekering.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-edge relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-bold">
              Klaar om te beginnen?
            </h2>
            <p className="text-xl text-blue-100">
              Ontdek onze volledige collectie en vind jouw perfecte e-mobility oplossing
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/producten"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg"
              >
                Bekijk producten
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a 
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}