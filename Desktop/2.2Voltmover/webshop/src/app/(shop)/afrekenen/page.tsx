import Breadcrumbs from "@/components/Breadcrumbs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Afrekenen - Voltooi je bestelling",
  description: "Voltooi veilig je bestelling. Gratis verzending vanaf €50.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AfrekenPage() {
  return (
    <>
      <Breadcrumbs 
        items={[
          { label: "Winkelwagen", href: "/winkelwagen" },
          { label: "Afrekenen" }
        ]} 
      />
      <div className="space-y-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Afrekenen
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Info */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl border-2 border-gray-200 dark:border-gray-700 p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Contact informatie
              </h2>
              <div className="space-y-4">
                <input 
                  type="email"
                  placeholder="E-mailadres"
                  className="input-field"
                />
              </div>
            </div>

            {/* Shipping Address */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl border-2 border-gray-200 dark:border-gray-700 p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Verzendadres
              </h2>
              <div className="grid gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input 
                    type="text"
                    placeholder="Voornaam"
                    className="input-field"
                  />
                  <input 
                    type="text"
                    placeholder="Achternaam"
                    className="input-field"
                  />
                </div>
                <input 
                  type="text"
                  placeholder="Adres"
                  className="input-field"
                />
                <div className="grid sm:grid-cols-3 gap-4">
                  <input 
                    type="text"
                    placeholder="Postcode"
                    className="input-field"
                  />
                  <input 
                    type="text"
                    placeholder="Plaats"
                    className="input-field sm:col-span-2"
                  />
                </div>
                <input 
                  type="tel"
                  placeholder="Telefoonnummer"
                  className="input-field"
                />
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl border-2 border-gray-200 dark:border-gray-700 p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Betaalmethode
              </h2>
              <div className="space-y-3">
                {["iDEAL", "Creditcard", "PayPal", "Bankoverschrijving"].map((method) => (
                  <label key={method} className="flex items-center gap-3 p-4 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-500 cursor-pointer transition-all">
                    <input type="radio" name="payment" className="w-5 h-5" />
                    <span className="font-semibold text-gray-900 dark:text-white">{method}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-2xl border-2 border-gray-200 dark:border-gray-700 p-6 space-y-4 sticky top-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Bestelling
              </h3>
              <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                Geen items in winkelwagen
              </div>
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
                Bestelling plaatsen
              </button>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Veilige betaling
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}