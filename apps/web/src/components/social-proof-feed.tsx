'use client'

import { Instagram, Play, Heart, MessageCircle, Star, Award } from 'lucide-react'
import { useState } from 'react'

export function InstagramFeed() {
  const instagramPosts = [
    {
      id: 1,
      image: '/images/lifestyle/escooter-urban.jpg',
      likes: 1247,
      comments: 89,
      username: '@daily_rider_nl'
    },
    {
      id: 2,
      image: '/images/lifestyle/modern-escooter.jpg',
      likes: 2156,
      comments: 134,
      username: '@urban_explorer'
    },
    {
      id: 3,
      image: '/images/lifestyle/city-mobility.jpg',
      likes: 892,
      comments: 67,
      username: '@escooter_life'
    },
    {
      id: 4,
      image: '/images/lifestyle/escooter-city.jpg',
      likes: 1534,
      comments: 98,
      username: '@green_commute'
    },
    {
      id: 5,
      image: '/images/products/xiaomi-lifestyle.jpg',
      likes: 3421,
      comments: 287,
      username: '@xiaomi_fans_nl'
    },
    {
      id: 6,
      image: '/images/products/electric-scooter-city-1.jpg',
      likes: 945,
      comments: 54,
      username: '@mobility_matters'
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full mb-4">
            <Instagram className="h-5 w-5 text-pink-600" />
            <span className="font-bold text-pink-900">@ronniewebsite</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            📸 Klanten Aan Het Woord
          </h2>
          <p className="text-xl text-gray-600">
            Echte foto's van echte klanten • Tag ons voor een feature!
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post) => (
            <div
              key={post.id}
              className="group relative aspect-square overflow-hidden rounded-2xl bg-gray-100 cursor-pointer hover:scale-105 transition-transform shadow-lg hover:shadow-2xl"
            >
              <img 
                src={post.image}
                alt={`Instagram post by ${post.username}`}
                className="w-full h-full object-cover"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <div className="text-white space-y-2">
                    <div className="flex items-center gap-3 text-sm">
                      <div className="flex items-center gap-1">
                        <Heart className="h-4 w-4 fill-white" />
                        <span className="font-bold">{post.likes.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="h-4 w-4" />
                        <span className="font-bold">{post.comments}</span>
                      </div>
                    </div>
                    <div className="text-xs font-bold">{post.username}</div>
                  </div>
                </div>
              </div>

              {/* Instagram Icon */}
              <div className="absolute top-3 right-3 w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Instagram className="h-4 w-4 text-white" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="https://instagram.com/ronniewebsite"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-xl font-black hover:from-pink-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
          >
            <Instagram className="h-5 w-5" />
            <span>Volg ons op Instagram</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export function VideoTestimonials() {
  const [activeVideo, setActiveVideo] = useState<number | null>(null)

  const testimonials = [
    {
      id: 1,
      name: 'Lisa van den Berg',
      location: 'Amsterdam, Nederland',
      product: 'Xiaomi Mi Scooter 4 Pro',
      thumbnail: '/images/lifestyle/escooter-urban.jpg',
      rating: 5,
      videoUrl: '#',
      quote: 'Beste aankoop ooit! Perfecte kwaliteit en super snelle levering.'
    },
    {
      id: 2,
      name: 'Tom Anderson',
      location: 'London, UK',
      product: 'VanMoof S5 E-bike',
      thumbnail: '/images/categories/ebike-real.jpg',
      rating: 5,
      videoUrl: '#',
      quote: 'Amazing quality and customer service. Highly recommended!'
    },
    {
      id: 3,
      name: 'Sophie Müller',
      location: 'Berlin, Germany',
      product: 'Segway Ninebot MAX',
      thumbnail: '/images/products/segway-max.jpg',
      rating: 5,
      videoUrl: '#',
      quote: 'Fantastische Service! Mein bester E-Scooter bisher.'
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-4">
            <Play className="h-5 w-5 text-blue-600" />
            <span className="font-bold text-blue-900">Video Reviews</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            🎬 Klanten Vertellen Hun Ervaring
          </h2>
          <p className="text-xl text-gray-600">
            Echte reviews van echte klanten wereldwijd
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-gray-100"
            >
              {/* Video Thumbnail */}
              <div 
                className="relative aspect-[16/10] bg-gray-900 cursor-pointer overflow-hidden"
                onClick={() => setActiveVideo(testimonial.id)}
              >
                <img 
                  src={testimonial.thumbnail}
                  alt={testimonial.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                    <Play className="h-10 w-10 text-blue-600 ml-1" fill="currentColor" />
                  </div>
                </div>

                {/* Duration */}
                <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/80 text-white text-sm font-bold rounded-lg">
                  2:34
                </div>
              </div>

              <div className="p-6">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-900 font-medium mb-4 italic">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.location}</div>
                  </div>
                  <Award className="h-5 w-5 text-green-600" />
                </div>

                <div className="mt-3 text-xs text-gray-600">
                  Kocht: <span className="font-bold text-gray-900">{testimonial.product}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Wil jij ook je ervaring delen?
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg">
            📹 Upload je Video Review (win €50!)
          </button>
        </div>
      </div>
    </section>
  )
}

