"use client";
import Link from "next/link";
import { useState } from "react";
import DarkModeToggle from "./DarkModeToggle";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);

  const megaMenus = {
    producten: {
      categories: [
        {
          title: "E-Steps",
          icon: "⚡",
          items: [
            { name: "Budget E-steps", desc: "Vanaf €299", href: "/producten" },
            { name: "Premium E-steps", desc: "Vanaf €599", href: "/producten" },
            { name: "Off-road E-steps", desc: "Voor elk terrein", href: "/producten" },
            { name: "Compacte E-steps", desc: "Opvouwbaar", href: "/producten" },
          ],
          featured: [
            { name: "Xiaomi Pro 4", price: "€599", badge: "Bestseller", img: "⚡" },
            { name: "Segway Max", price: "€799", badge: "Premium", img: "⚡" },
          ]
        },
        {
          title: "E-Bikes", 
          icon: "🚴",
          items: [
            { name: "Stadsfietsen", desc: "Voor dagelijks gebruik", href: "/producten" },
            { name: "Mountainbikes", desc: "Voor avontuur", href: "/producten" },
            { name: "Transportfietsen", desc: "Voor gezinnen", href: "/producten" },
            { name: "Sport E-bikes", desc: "High performance", href: "/producten" },
          ],
          featured: [
            { name: "City Pro Max", price: "€1.599", badge: "Nieuw", img: "🚴" },
            { name: "Mountain Explorer", price: "€2.299", badge: "Premium", img: "🚴" },
          ]
        },
        {
          title: "Accessoires",
          icon: "🎒",
          items: [
            { name: "Helmen", desc: "Veiligheid eerst", href: "/producten" },
            { name: "Sloten", desc: "Extra beveiliging", href: "/producten" },
            { name: "Verlichting", desc: "LED & meer", href: "/producten" },
            { name: "Tassen", desc: "Praktisch transport", href: "/producten" },
          ],
          featured: [
            { name: "Smart Helmet", price: "€149", badge: "Top", img: "🎒" },
            { name: "LED Set Pro", price: "€79", badge: "Sale", img: "🎒" },
          ]
        }
      ],
      brands: [
        { name: "Xiaomi", logo: "🔷" },
        { name: "Segway", logo: "🔶" },
        { name: "Pure", logo: "🔵" },
        { name: "Kaabo", logo: "🟣" },
        { name: "VanMoof", logo: "⚫" },
        { name: "Gazelle", logo: "🟢" },
      ],
      info: {
        title: "Waarom Emovement?",
        items: [
          "✓ 2 jaar garantie op alles",
          "✓ Gratis verzending vanaf €50",
          "✓ 30 dagen retourrecht",
          "✓ Persoonlijk advies"
        ]
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="container-edge">
        {/* Top Bar */}
        <div className="hidden lg:flex items-center justify-between py-2 text-xs border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-6">
            <a href="tel:020-123-4567" className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-semibold">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              020-123-4567
            </a>
            <a href="mailto:info@emovement.nl" className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-semibold">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              info@emovement.nl
            </a>
            <Link href="/vestigingen" className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-semibold">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Vind een vestiging
            </Link>
            <Link href="/track-trace" className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-semibold">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              Track & Trace
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-600 dark:text-gray-400">
              <span className="text-yellow-500">★★★★★</span> 4.9/5
            </span>
          </div>
        </div>

        {/* Main Header */}
        <div className="py-4 flex items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <div className="text-xl font-bold text-gray-900 dark:text-white">
                Emovement
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 -mt-0.5">
                E-Mobility Specialist
              </div>
            </div>
        </Link>
        
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2 flex-1 justify-center">
            <div 
              className="relative"
              onMouseEnter={() => setMegaMenuOpen('producten')}
              onMouseLeave={() => setMegaMenuOpen(null)}
            >
              <Link 
                className="group px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors flex items-center gap-1" 
                href="/producten"
              >
                Producten
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>

              {/* Mega Menu - Uitgebreider */}
              {megaMenuOpen === 'producten' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-screen max-w-7xl">
                  <div className="backdrop-blur-2xl bg-white/98 dark:bg-gray-900/98 border border-gray-200 dark:border-gray-700 rounded-3xl shadow-2xl p-10">
                    <div className="grid grid-cols-[1fr_1fr_1fr_300px] gap-10">
                      {/* Categories met featured products */}
                      {megaMenus.producten.categories.map((category, idx) => (
                        <div key={idx} className="space-y-5">
                          <div className="flex items-center gap-2 pb-3 border-b-2 border-gray-200 dark:border-gray-700">
                            <span className="text-2xl">{category.icon}</span>
                            <h3 className="font-black text-lg text-gray-900 dark:text-white">
                              {category.title}
                            </h3>
                          </div>
                          
                          {/* Category Links */}
                          <ul className="space-y-2">
                            {category.items.map((item, i) => (
                              <li key={i}>
                                <Link 
                                  href={item.href}
                                  className="group/item block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
                                >
                                  <div className="font-bold text-gray-900 dark:text-white group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400">
                                    {item.name}
                                  </div>
                                  <div className="text-sm text-gray-500 dark:text-gray-400">
                                    {item.desc}
                                  </div>
                                </Link>
                              </li>
                            ))}
                          </ul>

                          {/* Featured Products */}
                          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                            <div className="text-xs font-bold text-gray-500 dark:text-gray-400 mb-3">TOP PRODUCTEN</div>
                            <div className="space-y-2">
                              {category.featured.map((product, i) => (
                                <Link
                                  key={i}
                                  href="/producten"
                                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all group/prod border border-transparent hover:border-blue-200 dark:hover:border-blue-800"
                                >
                                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 flex items-center justify-center text-2xl">
                                    {product.img}
                                  </div>
                                  <div className="flex-1">
                                    <div className="font-bold text-sm text-gray-900 dark:text-white group-hover/prod:text-blue-600 dark:group-hover/prod:text-blue-400">
                                      {product.name}
                                    </div>
                                    <div className="text-xs text-gray-600 dark:text-gray-400 font-semibold">
                                      {product.price}
                                    </div>
                                  </div>
                                  <span className="px-2 py-1 bg-blue-600 text-white text-xs font-bold rounded">
                                    {product.badge}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}

                      {/* Sidebar - Merken & Info */}
                      <div className="space-y-6 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 rounded-2xl p-6">
                        {/* Merken */}
                        <div>
                          <h4 className="font-black text-sm text-gray-900 dark:text-white mb-4">POPULAIRE MERKEN</h4>
                          <div className="grid grid-cols-2 gap-2">
                            {megaMenus.producten.brands.map((brand) => (
                              <Link
                                key={brand.name}
                                href="/producten"
                                className="flex items-center gap-2 p-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-600 transition-all text-sm font-bold text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                              >
                                <span className="text-lg">{brand.logo}</span>
                                <span>{brand.name}</span>
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* Info Box */}
                        <div className="p-5 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                          <h4 className="font-black text-sm text-gray-900 dark:text-white mb-3">
                            {megaMenus.producten.info.title}
                          </h4>
                          <ul className="space-y-2 text-sm">
                            {megaMenus.producten.info.items.map((item, i) => (
                              <li key={i} className="text-gray-600 dark:text-gray-400 font-semibold">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* CTA */}
                        <Link
                          href="/producten"
                          className="block text-center px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                          Bekijk Alle Producten →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link 
              className="px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors" 
              href="/merken"
            >
              Merken
            </Link>
            <Link 
              className="px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors" 
              href="/producten"
            >
              Sale
            </Link>
            <Link 
              className="px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors" 
              href="/over"
            >
              Over ons
            </Link>
            <Link 
              className="px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors" 
              href="/contact"
            >
              Contact
            </Link>
        </nav>
        
          {/* Actions */}
        <div className="flex items-center gap-2">
            {/* Dark Mode */}
            <div className="hidden lg:block">
              <DarkModeToggle />
            </div>

            {/* User Account */}
            <Link
              href="/account"
              className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all font-semibold"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="text-sm">Account</span>
            </Link>
            
            {/* Search - Expanded */}
            <button 
              onClick={() => setSearchOpen(!searchOpen)}
              className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all font-semibold"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="text-sm">Zoeken</span>
            </button>

            {/* Wishlist */}
            <Link
              href="/wishlist"
              className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all font-semibold relative"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span className="text-sm">Wishlist</span>
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center font-bold">
                3
              </span>
            </Link>

            {/* Cart */}
            <Link 
              href="/winkelwagen" 
              className="relative px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5 6m0 0h9" />
              </svg>
              <span className="hidden sm:inline">Winkelwagen</span>
              <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center font-bold">
                0
              </span>
            </Link>
          
            {/* Mobile Menu */}
          <button 
            aria-label="Menu" 
              className="md:hidden p-3 rounded-xl border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors" 
            onClick={() => setOpen(!open)}
          >
              <div className="flex flex-col gap-1.5">
                <span className={`block h-0.5 w-6 bg-current transition-all duration-200 ${open ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block h-0.5 w-6 bg-current transition-all duration-200 ${open ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 w-6 bg-current transition-all duration-200 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>
      
        {/* Search Bar - Als het open is */}
        {searchOpen && (
          <div className="py-4 border-t border-gray-200 dark:border-gray-700 animate-in slide-in-from-top-2">
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Zoek op productnaam, merk of categorie..."
                className="flex-1 px-6 py-4 rounded-xl bg-gray-100 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 focus:border-blue-600 focus:outline-none text-gray-900 dark:text-white font-semibold"
                autoFocus
              />
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all">
                Zoeken
              </button>
              <button 
                onClick={() => setSearchOpen(false)}
                className="px-4 py-4 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-bold hover:bg-gray-300 dark:hover:bg-gray-600 transition-all"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
      
      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-700 backdrop-blur-xl bg-white/95 dark:bg-gray-900/95">
          <div className="container-edge py-6 space-y-2">
            <Link 
              className="block px-4 py-3 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 font-bold transition-all" 
              href="/producten" 
              onClick={() => setOpen(false)}
            >
              Producten
            </Link>
            <Link 
              className="block px-4 py-3 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 font-bold transition-all" 
              href="/over" 
              onClick={() => setOpen(false)}
            >
              Over ons
            </Link>
            <Link 
              className="block px-4 py-3 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 font-bold transition-all" 
              href="/contact" 
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}