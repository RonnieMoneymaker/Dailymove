"use client";

import { useState, useEffect } from "react";
import { Settings, X } from "lucide-react";

export default function ComponentSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedHeader, setSelectedHeader] = useState("default");
  const [selectedFooter, setSelectedFooter] = useState("default");

  useEffect(() => {
    // Load saved preferences
    const savedHeader = localStorage.getItem("selectedHeader") || "default";
    const savedFooter = localStorage.getItem("selectedFooter") || "default";
    setSelectedHeader(savedHeader);
    setSelectedFooter(savedFooter);
  }, []);

  const handleHeaderChange = (variant: string) => {
    setSelectedHeader(variant);
    localStorage.setItem("selectedHeader", variant);
    window.location.reload(); // Reload to apply changes
  };

  const handleFooterChange = (variant: string) => {
    setSelectedFooter(variant);
    localStorage.setItem("selectedFooter", variant);
    window.location.reload(); // Reload to apply changes
  };

  const headerVariants = [
    { id: "default", name: "Default Header", description: "Moderne header met zoekbalk en cart" },
    { id: "minimal", name: "Minimal Header", description: "Minimalistische header zonder zoekbalk" },
    { id: "mega", name: "Mega Menu Header", description: "Header met mega dropdown menu" },
    { id: "centered", name: "Centered Header", description: "Gecentreerde logo met symmetrische layout" },
  ];

  const footerVariants = [
    { id: "default", name: "Default Footer", description: "Uitgebreide footer met SEO content" },
    { id: "minimal", name: "Minimal Footer", description: "Compacte footer met basis links" },
    { id: "newsletter", name: "Newsletter Footer", description: "Focus op nieuwsbrief signup" },
    { id: "social", name: "Social Footer", description: "Extra focus op social media" },
  ];

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-[100] w-14 h-14 bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-full shadow-2xl hover:scale-110 transition-all flex items-center justify-center group"
        aria-label="Component Selector"
      >
        <Settings className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-[10px] font-bold animate-pulse">
          🎨
        </div>
      </button>

      {/* Selector Panel */}
      {isOpen && (
        <div className="fixed inset-0 z-[99] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto border-2 border-purple-500">
            {/* Header */}
            <div className="sticky top-0 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 flex items-center justify-between rounded-t-2xl">
              <div>
                <h2 className="text-2xl font-black">Component Selector 🎨</h2>
                <p className="text-sm text-purple-100 mt-1">Kies verschillende header en footer varianten</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 transition-all flex items-center justify-center"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-8">
              {/* Header Selection */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <span className="text-2xl">📱</span> Header Varianten
                </h3>
                <div className="grid gap-3">
                  {headerVariants.map((variant) => (
                    <button
                      key={variant.id}
                      onClick={() => handleHeaderChange(variant.id)}
                      className={`text-left p-4 rounded-xl border-2 transition-all ${
                        selectedHeader === variant.id
                          ? "border-purple-600 bg-purple-50 dark:bg-purple-900/20"
                          : "border-gray-200 dark:border-gray-700 hover:border-purple-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="font-bold text-gray-900 dark:text-white">{variant.name}</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">{variant.description}</div>
                        </div>
                        {selectedHeader === variant.id && (
                          <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold">
                            ✓
                          </div>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Footer Selection */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <span className="text-2xl">🦶</span> Footer Varianten
                </h3>
                <div className="grid gap-3">
                  {footerVariants.map((variant) => (
                    <button
                      key={variant.id}
                      onClick={() => handleFooterChange(variant.id)}
                      className={`text-left p-4 rounded-xl border-2 transition-all ${
                        selectedFooter === variant.id
                          ? "border-blue-600 bg-blue-50 dark:bg-blue-900/20"
                          : "border-gray-200 dark:border-gray-700 hover:border-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="font-bold text-gray-900 dark:text-white">{variant.name}</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">{variant.description}</div>
                        </div>
                        {selectedFooter === variant.id && (
                          <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                            ✓
                          </div>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Info */}
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-xl p-4 border border-purple-200 dark:border-purple-800">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <span className="font-bold text-purple-600 dark:text-purple-400">💡 Tip:</span> De pagina wordt automatisch herladen wanneer je een variant selecteert.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

