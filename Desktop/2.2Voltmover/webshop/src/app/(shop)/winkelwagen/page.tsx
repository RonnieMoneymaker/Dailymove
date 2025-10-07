import Breadcrumbs from "@/components/Breadcrumbs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Winkelwagen - Bekijk je items",
  description: "Bekijk en beheer de items in je winkelwagen. Gratis verzending vanaf €50.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function WinkelwagenPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Winkelwagen" }]} />
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Winkelwagen
          </h1>
          <span className="text-sm text-gray-600 dark:text-gray-400">
            0 items
          </span>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-2xl border-2 border-gray-200 dark:border-gray-700 p-8 text-center">
              <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Je winkelwagen is leeg
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Ontdek onze collectie en voeg producten toe aan je winkelwagen
              </p>
              <a 
                href="/producten"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                Bekijk producten
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-2xl border-2 border-gray-200 dark:border-gray-700 p-6 space-y-4 sticky top-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Samenvatting
              </h3>
              <div className="space-y-3 py-4 border-t border-b border-gray-200 dark:border-gray-700">
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Subtotaal</span>
                  <span>€0,00</span>
                </div>
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Verzending</span>
                  <span>€0,00</span>
                </div>
              </div>
              <div className="flex justify-between text-xl font-bold text-gray-900 dark:text-white">
                <span>Totaal</span>
                <span>€0,00</span>
              </div>
              <button 
                disabled
                className="w-full py-4 bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-full font-bold cursor-not-allowed"
              >
                Afrekenen
              </button>
              <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                Gratis verzending vanaf €50
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}