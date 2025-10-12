import { CheckCircle, Truck, Shield, Headphones, Award, Zap } from 'lucide-react'
import Image from 'next/image'

const benefits = [
  {
    icon: CheckCircle,
    title: 'Gratis verzending vanaf €50',
    description: 'Geen verrassingen bij het afrekenen',
    color: 'text-green-600 bg-green-100',
    image: '/images/benefits/shipping.jpg'
  },
  {
    icon: Truck,
    title: 'Voor 23:59 besteld, morgen in huis',
    description: 'Supersnel geleverd door heel Nederland',
    color: 'text-blue-600 bg-blue-100',
    image: '/images/benefits/delivery2.jpg'
  },
  {
    icon: Shield,
    title: '2 jaar garantie',
    description: 'Op alle E-steps en accessoires',
    color: 'text-purple-600 bg-purple-100',
    image: '/images/benefits/warranty.jpg'
  },
  {
    icon: Headphones,
    title: '24/7 klantenservice',
    description: 'Altijd bereikbaar voor al je vragen',
    color: 'text-orange-600 bg-orange-100',
    image: '/images/benefits/support2.jpg'
  },
  {
    icon: Award,
    title: '30 dagen retourrecht',
    description: 'Niet tevreden? Geld terug garantie',
    color: 'text-red-600 bg-red-100',
    image: '/images/benefits/return.jpg'
  },
  {
    icon: Zap,
    title: 'Laagste prijsgarantie',
    description: 'Goedkoper gezien? Wij matchen de prijs',
    color: 'text-yellow-600 bg-yellow-100',
    image: '/images/benefits/price.jpg'
  }
]

export function ValueProposition() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Waarom 15.000+ klanten voor ons kiezen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bij DailyMove staat jouw tevredenheid voorop. Ontdek waarom wij de #1 keuze zijn voor E-steps in Nederland.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
            >
              {/* Background Image */}
              <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                <Image
                  src={benefit.image}
                  alt={benefit.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="relative p-6">
                <div className={`inline-flex p-3 rounded-xl ${benefit.color} mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <benefit.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
                
                {/* Decorative gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <span>Start je elektrische reis vandaag</span>
            <Zap className="h-5 w-5" />
          </div>
        </div>
      </div>
    </section>
  )
}
