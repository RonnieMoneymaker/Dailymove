"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-8 left-8 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-2xl transition-all hover:scale-110 hover:shadow-green-500/50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 animate-pulse"
          aria-label="Open live chat"
        >
          <MessageCircle className="h-7 w-7" />
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-8 left-8 z-50 w-96 max-w-[calc(100vw-4rem)] rounded-2xl bg-white dark:bg-gray-800 shadow-2xl border-2 border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between bg-gradient-to-r from-green-500 to-emerald-600 p-4 rounded-t-2xl">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                  <MessageCircle className="h-5 w-5 text-green-600" />
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <div className="font-bold text-white">Live Chat</div>
                <div className="text-xs text-green-100">Meestal binnen 2 min. online</div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 rounded-lg p-1 transition-colors"
              aria-label="Sluit chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="p-6 space-y-4 max-h-96 overflow-y-auto">
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                E
              </div>
              <div className="bg-gray-100 dark:bg-gray-700 rounded-2xl rounded-tl-none p-4 max-w-[80%]">
                <p className="text-sm text-gray-900 dark:text-white">
                  Hallo! 👋 Welkom bij Emovement. Hoe kunnen we je helpen?
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <button className="w-full text-left p-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-green-500 dark:hover:border-green-500 hover:bg-green-50 dark:hover:bg-green-900/20 transition-all text-sm font-medium text-gray-900 dark:text-white">
                🚴 Vraag over producten
              </button>
              <button className="w-full text-left p-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-green-500 dark:hover:border-green-500 hover:bg-green-50 dark:hover:bg-green-900/20 transition-all text-sm font-medium text-gray-900 dark:text-white">
                📦 Track mijn bestelling
              </button>
              <button className="w-full text-left p-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-green-500 dark:hover:border-green-500 hover:bg-green-50 dark:hover:bg-green-900/20 transition-all text-sm font-medium text-gray-900 dark:text-white">
                🔧 Technische support
              </button>
              <button className="w-full text-left p-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-green-500 dark:hover:border-green-500 hover:bg-green-50 dark:hover:bg-green-900/20 transition-all text-sm font-medium text-gray-900 dark:text-white">
                💬 Anders
              </button>
            </div>
          </div>

          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Typ je bericht..."
                className="flex-1 px-4 py-2 rounded-full border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:border-green-500 focus:outline-none"
              />
              <button className="px-6 py-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold hover:scale-105 transition-transform">
                Stuur
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
