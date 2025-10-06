"use client";
import { useState } from "react";

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah van der Berg",
      role: "Marketing Manager, Amsterdam",
      company: "TechCorp",
      image: "https://i.pravatar.cc/150?img=5",
      rating: 5,
      date: "3 weken geleden",
      verified: true,
      content: "Na 6 maanden dagelijks gebruik van mijn E-bike City Pro kan ik met zekerheid zeggen dat dit de beste investering was die ik kon maken. De batterij houdt moeiteloos 75km vol, zelfs in de winter. De klantenservice hielp me binnen 24 uur toen ik een vraag had over onderhoud.",
      productPurchased: "E-bike City Pro Max"
    },
    {
      name: "Mark Janssen",
      role: "Ondernemer, Rotterdam",
      company: "Janssen Consulting",
      image: "https://i.pravatar.cc/150?img=12",
      rating: 5,
      date: "1 maand geleden",
      verified: true,
      content: "Ik was sceptisch over e-steps voor zakelijk gebruik, maar de Urban X Pro heeft me volledig overtuigd. Professionele uitstraling, betrouwbaar en de snelheid is perfect voor korte zakelijke afspraken in de stad. ROI binnen 4 maanden door besparingen op taxi's.",
      productPurchased: "E-step Urban X Pro"
    },
    {
      name: "Lisa Chen",
      role: "Software Developer, Utrecht",
      company: "StartupHub",
      image: "https://i.pravatar.cc/150?img=47",
      rating: 5,
      date: "2 maanden geleden",
      verified: true,
      content: "Als tech-persoon heb ik hoge eisen. De build quality is uitstekend, de app integratie werkt perfect en de customer support is van zeer hoog niveau. Het belangrijkste: na 500km geen enkel technisch probleem gehad. Dat spreekt boekdelen over de kwaliteit.",
      productPurchased: "E-step Speed Demon"
    },
    {
      name: "David de Vries",
      role: "Architect, Den Haag",
      company: "Studio DV",
      image: "https://i.pravatar.cc/150?img=13",
      rating: 5,
      date: "2 weken geleden",
      verified: true,
      content: "Perfect voor mijn dagelijkse woon-werkverkeer! 30 minuten fietsen werd 15 minuten genieten op mijn e-bike. De kwaliteit is top en de prijs-kwaliteit verhouding is uitstekend. Ook de after-sales service is geweldig.",
      productPurchased: "E-bike Mountain Explorer"
    },
    {
      name: "Emma Bakker",
      role: "Verpleegkundige, Eindhoven",
      company: "Catharina Ziekenhuis",
      image: "https://i.pravatar.cc/150?img=9",
      rating: 5,
      date: "1 week geleden",
      verified: true,
      content: "Mijn e-step is mijn beste investering van het jaar! Ik gebruik hem dagelijks voor mijn werk en de batterij gaat echt lang mee. Veilig, snel en super handig in de stad. Aanrader voor iedereen!",
      productPurchased: "E-step Compact Lite"
    },
    {
      name: "Thomas Vermeer",
      role: "Student, Groningen",
      company: "RUG",
      image: "https://i.pravatar.cc/150?img=14",
      rating: 5,
      date: "1 maand geleden",
      verified: true,
      content: "Als student was dit een grote investering, maar het is het 100% waard! Geen OV-kosten meer en ik ben altijd op tijd. De e-step is compact, licht en gaat super lang mee op één lading. Top koop!",
      productPurchased: "E-step Urban X Pro"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20">
      <div className="container-edge">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-700 dark:text-blue-300 font-bold text-sm mb-4">
              Klantbeoordelingen
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-4">
              Wat onze klanten zeggen
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Onafhankelijke reviews van geverifieerde klanten
            </p>
          </div>

          {/* Main Testimonial */}
          <div className="backdrop-blur-xl bg-white/80 dark:bg-gray-800/80 rounded-3xl p-12 shadow-2xl border border-gray-200/50 dark:border-gray-700/50">
            <div className="flex items-start gap-8">
              <div className="flex-shrink-0">
                <img 
                  src={testimonials[activeTestimonial].image}
                  alt={testimonials[activeTestimonial].name}
                  className="w-24 h-24 rounded-2xl object-cover shadow-lg"
                />
              </div>
              
              <div className="flex-1 space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-black text-gray-900 dark:text-white">
                        {testimonials[activeTestimonial].name}
                      </h3>
                      {testimonials[activeTestimonial].verified && (
                        <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-xs font-bold flex items-center gap-1">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Geverifieerde aankoop
                        </span>
                      )}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400 font-semibold">
                      {testimonials[activeTestimonial].role}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-500">
                      {testimonials[activeTestimonial].company}
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="flex gap-1 mb-2">
                      {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                        <svg key={i} className="w-6 h-6 text-yellow-500 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-500">
                      {testimonials[activeTestimonial].date}
                    </div>
                  </div>
                </div>

                <blockquote className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed italic border-l-4 border-blue-500 pl-6 my-6">
                  "{testimonials[activeTestimonial].content}"
                </blockquote>

                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Gekocht product:{" "}
                    <span className="font-bold text-gray-900 dark:text-white">
                      {testimonials[activeTestimonial].productPurchased}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-4 h-4 rounded-full transition-all ${
                  index === activeTestimonial
                    ? 'bg-blue-600 w-12'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6 mt-16">
            {[
              { value: "4.9/5.0", label: "Gemiddelde beoordeling", sublabel: "Gebaseerd op 2.847 reviews" },
              { value: "98%", label: "Aanbeveelt ons", sublabel: "Zou opnieuw kopen" },
              { value: "24u", label: "Response tijd", sublabel: "Gemiddelde support reactie" },
              { value: "5.000+", label: "Tevreden klanten", sublabel: "En groeiend" }
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 backdrop-blur-xl bg-white/60 dark:bg-gray-800/60 rounded-2xl border border-gray-200/50 dark:border-gray-700/50">
                <div className="text-4xl font-black text-blue-600 dark:text-blue-400 mb-2">
                  {stat.value}
                </div>
                <div className="font-bold text-gray-900 dark:text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.sublabel}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


