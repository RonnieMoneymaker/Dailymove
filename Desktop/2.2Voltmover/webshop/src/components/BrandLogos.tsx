"use client";

export default function BrandLogos() {
  const brands = [
    { name: "Xiaomi", logo: "https://logo.clearbit.com/mi.com" },
    { name: "Segway", logo: "https://logo.clearbit.com/segway.com" },
    { name: "Bosch", logo: "https://logo.clearbit.com/bosch.com" },
    { name: "Shimano", logo: "https://logo.clearbit.com/shimano.com" },
    { name: "Samsung", logo: "https://logo.clearbit.com/samsung.com" },
    { name: "LG", logo: "https://logo.clearbit.com/lg.com" },
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800">
      <div className="container-edge">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-3">
              Officiële dealer van <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">topmerken</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Wij werken samen met de beste merken ter wereld
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="group flex items-center justify-center p-6 rounded-xl bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-purple-400 dark:hover:border-purple-600 transition-all hover:scale-110 hover:shadow-xl"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-12 w-auto object-contain grayscale group-hover:grayscale-0 transition-all opacity-60 group-hover:opacity-100"
                  onError={(e) => {
                    // Fallback to text if logo fails to load
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      const text = document.createElement('div');
                      text.className = 'text-2xl font-black text-gray-400 group-hover:text-purple-600 transition-colors';
                      text.textContent = brand.name;
                      parent.appendChild(text);
                    }
                  }}
                />
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400 font-semibold">
              + nog 50+ andere topmerken in ons assortiment
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
