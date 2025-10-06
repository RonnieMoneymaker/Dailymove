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
      {/* Announcement Bar */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-3">
        <div className="container-edge">
          <div className="flex items-center justify-center gap-6 text-sm font-medium">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Gratis verzending vanaf €50
            </span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              2 jaar garantie
            </span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900/20">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-100/30 to-transparent dark:from-blue-900/10 pointer-events-none"></div>
        
        <div className="container-edge relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full text-blue-700 dark:text-blue-300 text-sm font-semibold border border-blue-200 dark:border-blue-800">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Nieuw seizoen 2025
                </div>
                
                <div>
                  <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white mb-6">
                    Ontdek de toekomst van{" "}
                    <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">mobiliteit</span>
                  </h1>
                  <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                    Premium e-steps en e-bikes voor dagelijks gebruik. 
                    Duurzaam, stijlvol en betrouwbaar.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="/producten"
                    className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
                  >
                    Bekijk collectie
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  <a 
                    href="/over"
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:border-purple-600 hover:text-purple-600 dark:hover:border-purple-400 dark:hover:text-purple-400 transition-all"
                  >
                    Meer info
                  </a>
                </div>

                {/* Social Proof */}
                <div className="flex items-center gap-6 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex -space-x-3">
                    {[5, 12, 47, 9, 14].map((imgId, i) => (
                      <img 
                        key={i}
                        src={`https://i.pravatar.cc/80?img=${imgId}`}
                        alt="Customer"
                        className="w-12 h-12 rounded-full border-3 border-white dark:border-gray-900 object-cover"
                      />
                    ))}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">5.000+ tevreden klanten</div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex">
                        {[1,2,3,4,5].map(i => (
                          <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span>4.9/5 beoordeling</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="relative">
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1559386484-97dfc0e15539?w=800&h=800&fit=crop"
                    alt="E-mobility lifestyle"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  
                  {/* Floating badge */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Vanaf</div>
                        <div className="text-2xl font-bold text-gray-900 dark:text-white">€599</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-600 dark:text-gray-400">Levering</div>
                        <div className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">24 uur</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustBadges />

      {/* Categories Section */}
      <Categories />

      {/* Brand Showcase */}
      <BrandShowcase />

      {/* Value Proposition */}
      <ValueProposition />

      {/* Featured Products */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container-edge">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full text-blue-700 dark:text-blue-300 text-sm font-semibold border border-blue-200 dark:border-blue-800">
                Onze collectie
              </div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                Populaire producten
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Ontdek onze meest gekozen e-steps en e-bikes
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

      <Testimonials />

      {/* Trust Wall */}
      <TrustWall />

      {/* FAQ Section */}
      <FAQ />

      {/* Newsletter Signup */}
      <NewsletterSignup />

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
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