import AnimatedCounter from "./AnimatedCounter";

export default function Stats() {
  const stats = [
    {
      number: "25.000+",
      label: "Tevreden Klanten",
      description: "Sinds 2020 vertrouwen duizenden Nederlanders op ons",
      color: "from-blue-500 to-blue-600",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      number: "50+",
      label: "Vestigingen",
      description: "Landelijke dekking voor service en onderhoud",
      color: "from-purple-500 to-purple-600",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      number: "2 jaar",
      label: "Fabrieksgarantie",
      description: "Volledige dekking op alle componenten",
      color: "from-green-500 to-emerald-600",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      number: "4.9/5",
      label: "Klantbeoordeling",
      description: "Gebaseerd op 2.847 geverifieerde reviews",
      color: "from-yellow-400 to-orange-500",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container-edge">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Waarom Emovement
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Feiten en cijfers die ons onderscheiden
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-xl opacity-5 group-hover:opacity-10 transition-opacity`} />
                <div className="relative p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:shadow-lg transition-all">
                  <div className={`text-white bg-gradient-to-br ${stat.color} p-3 rounded-lg inline-flex mb-4`}>
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {index === 0 ? (
                      <>
                        <AnimatedCounter end={25000} suffix="+" />
                      </>
                    ) : index === 1 ? (
                      <>
                        <AnimatedCounter end={50} suffix="+" />
                      </>
                    ) : index === 3 ? (
                      <>
                        <AnimatedCounter end={4.9} suffix="/5" />
                      </>
                    ) : (
                      stat.number
                    )}
                  </div>
                  <div className="text-base font-semibold text-gray-900 dark:text-white mb-2">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {stat.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}