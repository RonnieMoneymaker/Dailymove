"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800 glass shadow-sm">
      <div className="container-edge py-4 flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3 font-bold text-2xl text-gray-900 dark:text-white hover:opacity-90 transition-opacity">
          <div className="relative">
            <span className="inline-block h-8 w-8 rounded-full bg-[var(--brand)]" />
            <span className="absolute inset-0 h-8 w-8 rounded-full bg-gradient-to-br from-blue-600 to-emerald-500 animate-pulse opacity-75" />
          </div>
          Emovement
        </Link>
        {/* Search bar */}
        <div className="hidden md:flex flex-1 max-w-xl mx-4">
          <div className="relative w-full">
            <input
              placeholder="Zoek naar producten..."
              className="input-field pr-12"
            />
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z" />
              </svg>
            </span>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold">
          <Link className="text-gray-700 dark:text-gray-300 hover:text-[var(--brand)] transition-colors relative group" href="/producten">
            Producten
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--brand)] group-hover:w-full transition-all duration-200" />
          </Link>
          <Link className="text-gray-700 dark:text-gray-300 hover:text-[var(--brand)] transition-colors relative group" href="/over">
            Over ons
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--brand)] group-hover:w-full transition-all duration-200" />
          </Link>
          <Link className="text-gray-700 dark:text-gray-300 hover:text-[var(--brand)] transition-colors relative group" href="/contact">
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--brand)] group-hover:w-full transition-all duration-200" />
          </Link>
        </nav>
        
        <div className="flex items-center gap-3">
          <Link href="/winkelwagen" className="relative btn-primary hidden sm:inline-flex items-center gap-2 text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5 6m0 0h9" />
            </svg>
            Winkelwagen
            <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-emerald-500 text-white text-xs flex items-center justify-center font-bold">
              0
            </span>
          </Link>
          
          <button 
            aria-label="Menu" 
            className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-xl border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200" 
            onClick={() => setOpen(!open)}
          >
            <div className="flex flex-col gap-1">
              <span className={`block h-0.5 w-5 bg-current transition-all duration-200 ${open ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`block h-0.5 w-5 bg-current transition-all duration-200 ${open ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-5 bg-current transition-all duration-200 ${open ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </div>
          </button>
        </div>
      </div>
      {/* Category bar with mega menu */}
      <div className="hidden lg:block border-t border-gray-100 dark:border-gray-800 bg-gradient-to-r from-gray-50/80 to-white/80 dark:from-gray-900/80 dark:to-gray-800/80 backdrop-blur-sm">
        <div className="container-edge py-3 relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="relative group">
                <button className="inline-flex items-center gap-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-4 py-2 text-sm font-semibold text-gray-900 dark:text-gray-100 hover:border-[var(--brand)] hover:shadow-md transition-all duration-200">
                  <svg className="w-5 h-5 text-[var(--brand)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  Categorieën
                </button>
                {/* Mega menu */}
                <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity absolute left-0 right-0 top-full">
                  <div className="pt-3">
                    <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-xl">
                      <div className="grid grid-cols-4 gap-6 p-6 text-sm">
                        <div>
                          <div className="font-semibold mb-2">E-steps</div>
                          <div className="space-y-1 text-gray-600 dark:text-gray-400">
                            <a href="/producten" className="block hover:text-[var(--brand)]">Stad</a>
                            <a href="/producten" className="block hover:text-[var(--brand)]">Sport</a>
                            <a href="/producten" className="block hover:text-[var(--brand)]">Compact</a>
                          </div>
                        </div>
                        <div>
                          <div className="font-semibold mb-2">E-bikes</div>
                          <div className="space-y-1 text-gray-600 dark:text-gray-400">
                            <a href="/producten" className="block hover:text-[var(--brand)]">Stad</a>
                            <a href="/producten" className="block hover:text-[var(--brand)]">Trekking</a>
                            <a href="/producten" className="block hover:text-[var(--brand)]">Cargo</a>
                          </div>
                        </div>
                        <div>
                          <div className="font-semibold mb-2">Onderdelen</div>
                          <div className="space-y-1 text-gray-600 dark:text-gray-400">
                            <a href="/producten" className="block hover:text-[var(--brand)]">Batterijen</a>
                            <a href="/producten" className="block hover:text-[var(--brand)]">Remmen</a>
                            <a href="/producten" className="block hover:text-[var(--brand)]">Banden</a>
                          </div>
                        </div>
                        <div>
                          <div className="font-semibold mb-2">Accessoires</div>
                          <div className="space-y-1 text-gray-600 dark:text-gray-400">
                            <a href="/producten" className="block hover:text-[var(--brand)]">Helmen</a>
                            <a href="/producten" className="block hover:text-[var(--brand)]">Sloten</a>
                            <a href="/producten" className="block hover:text-[var(--brand)]">Verlichting</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a href="/producten" className="text-sm font-semibold text-gray-800 dark:text-gray-200 hover:text-[var(--brand)] px-3 py-2 rounded-lg hover:bg-white/60 dark:hover:bg-gray-800/60 transition-all duration-200">E-steps</a>
              <a href="/producten" className="text-sm font-semibold text-gray-800 dark:text-gray-200 hover:text-[var(--brand)] px-3 py-2 rounded-lg hover:bg-white/60 dark:hover:bg-gray-800/60 transition-all duration-200">E-bikes</a>
              <a href="/producten" className="text-sm font-semibold text-gray-800 dark:text-gray-200 hover:text-[var(--brand)] px-3 py-2 rounded-lg hover:bg-white/60 dark:hover:bg-gray-800/60 transition-all duration-200">Onderdelen</a>
              <a href="/producten" className="text-sm font-semibold text-gray-800 dark:text-gray-200 hover:text-[var(--brand)] px-3 py-2 rounded-lg hover:bg-white/60 dark:hover:bg-gray-800/60 transition-all duration-200">Deals</a>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-700 dark:text-gray-300">
              <a href="/contact" className="hover:text-[var(--brand)] px-3 py-2 rounded-lg hover:bg-white/60 dark:hover:bg-gray-800/60 transition-all duration-200">Klantenservice</a>
              <a href="/over" className="hover:text-[var(--brand)] px-3 py-2 rounded-lg hover:bg-white/60 dark:hover:bg-gray-800/60 transition-all duration-200">Zakelijk</a>
            </div>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md">
          <div className="container-edge py-6 grid gap-4 text-sm">
            <div className="space-y-2">
              <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">Categorieën</div>
              <div className="grid grid-cols-2 gap-2">
                <a className="block rounded-lg border border-gray-200 dark:border-gray-800 p-3 hover:bg-gray-50 dark:hover:bg-gray-800" href="/producten" onClick={() => setOpen(false)}>E-steps</a>
                <a className="block rounded-lg border border-gray-200 dark:border-gray-800 p-3 hover:bg-gray-50 dark:hover:bg-gray-800" href="/producten" onClick={() => setOpen(false)}>E-bikes</a>
                <a className="block rounded-lg border border-gray-200 dark:border-gray-800 p-3 hover:bg-gray-50 dark:hover:bg-gray-800" href="/producten" onClick={() => setOpen(false)}>Onderdelen</a>
                <a className="block rounded-lg border border-gray-200 dark:border-gray-800 p-3 hover:bg-gray-50 dark:hover:bg-gray-800" href="/producten" onClick={() => setOpen(false)}>Accessoires</a>
              </div>
            </div>
            <Link className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium py-2" href="/producten" onClick={() => setOpen(false)}>
              Producten
            </Link>
            <Link className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium py-2" href="/over" onClick={() => setOpen(false)}>
              Over ons
            </Link>
            <Link className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium py-2" href="/contact" onClick={() => setOpen(false)}>
              Contact
            </Link>
            <Link className="btn-primary text-center mt-2" href="/winkelwagen" onClick={() => setOpen(false)}>
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5 6m0 0h9" />
              </svg>
              Winkelwagen
            </Link>
            <div className="grid grid-cols-3 gap-3 text-xs text-gray-600 dark:text-gray-400 pt-2">
              <div className="flex items-center gap-2"><span>🚚</span><span>Snelle bezorging</span></div>
              <div className="flex items-center gap-2"><span>🔄</span><span>30 dagen retour</span></div>
              <div className="flex items-center gap-2"><span>💬</span><span>Dag & avond service</span></div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}


