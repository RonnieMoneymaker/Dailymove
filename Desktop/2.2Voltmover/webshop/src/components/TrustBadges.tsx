export default function TrustBadges() {
  const badges = [
    { icon: "🔒", title: "Veilig Betalen", desc: "SSL beveiligd", color: "blue" },
    { icon: "↩️", title: "30 Dagen Retour", desc: "Geld terug", color: "green" },
    { icon: "🚚", title: "Gratis Verzending", desc: "Vanaf €50", color: "purple" },
    { icon: "⭐", title: "4.9/5 Reviews", desc: "2.847 beoordelingen", color: "yellow" },
    { icon: "📞", title: "24/7 Support", desc: "Altijd bereikbaar", color: "indigo" },
    { icon: "🛡️", title: "2 Jaar Garantie", desc: "Volledige dekking", color: "pink" },
  ];

  return (
    <div className="py-12 bg-gray-50 dark:bg-gray-800/50">
      <div className="container-edge">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {badges.map((badge, i) => (
            <div 
              key={i}
              className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
            >
              <div className="text-3xl mb-2">{badge.icon}</div>
              <div className="font-semibold text-sm text-gray-900 dark:text-white">{badge.title}</div>
              <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">{badge.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}