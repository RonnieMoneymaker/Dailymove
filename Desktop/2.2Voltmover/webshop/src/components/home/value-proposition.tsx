"use client";

import { CheckCircle, Truck, Shield, Headphones, Award, Zap } from 'lucide-react'

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
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container-edge">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Waarom kiezen voor ons
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Ontdek waarom duizenden klanten voor ons kiezen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div 
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all"
                >
                  <div className={`inline-flex p-3 rounded-lg ${benefit.color} mb-4`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
