'use client'

import { useState } from 'react'
import { RotateCw, Play, Maximize2, ZoomIn, ZoomOut } from 'lucide-react'

interface Product360ViewerProps {
  images: string[]
  productName: string
}

export function Product360Viewer({ images, productName }: Product360ViewerProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [zoom, setZoom] = useState(1)

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.clientX)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    
    const diff = e.clientX - startX
    const sensitivity = 10
    
    if (Math.abs(diff) > sensitivity) {
      const direction = diff > 0 ? 1 : -1
      const newIndex = (currentImageIndex + direction + images.length) % images.length
      setCurrentImageIndex(newIndex)
      setStartX(e.clientX)
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  return (
    <div className="bg-white rounded-3xl p-6 border-2 border-gray-200 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <RotateCw className="h-5 w-5 text-blue-600" />
          <h3 className="font-black text-gray-900">360° Bekijken</h3>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setZoom(Math.max(1, zoom - 0.25))}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ZoomOut className="h-4 w-4 text-gray-600" />
          </button>
          <button 
            onClick={() => setZoom(Math.min(3, zoom + 0.25))}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ZoomIn className="h-4 w-4 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Maximize2 className="h-4 w-4 text-gray-600" />
          </button>
        </div>
      </div>

      {/* 360 Viewer */}
      <div 
        className="relative aspect-square bg-gray-100 rounded-2xl overflow-hidden cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <img 
          src={images[currentImageIndex] || images[0]}
          alt={`${productName} - view ${currentImageIndex + 1}`}
          className="w-full h-full object-cover transition-transform duration-200"
          style={{ transform: `scale(${zoom})` }}
          draggable={false}
        />

        {/* Instruction Overlay */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/70 text-white rounded-lg text-sm font-bold backdrop-blur-sm">
          <RotateCw className="h-4 w-4 inline mr-2" />
          Sleep om te draaien
        </div>

        {/* Progress Dots */}
        <div className="absolute bottom-4 right-4 flex gap-1">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentImageIndex ? 'bg-blue-600 w-6' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      <p className="text-center text-sm text-gray-600 mt-4">
        {currentImageIndex + 1} / {images.length} • Gebruik je muis om te draaien
      </p>
    </div>
  )
}

export function ProductDemoVideos() {
  const [activeVideo, setActiveVideo] = useState<number | null>(null)

  const videos = [
    {
      id: 1,
      title: 'Unboxing & Eerste Indruk',
      duration: '3:45',
      thumbnail: '/images/products/xiaomi-scooter-real.jpg',
      views: '12.4K',
      youtubeId: 'dQw4w9WgXcQ' // Example
    },
    {
      id: 2,
      title: 'Snelheidstest & Bereik Check',
      duration: '5:12',
      thumbnail: '/images/products/segway-max.jpg',
      views: '8.9K',
      youtubeId: 'dQw4w9WgXcQ'
    },
    {
      id: 3,
      title: 'Off-Road Performance Test',
      duration: '4:28',
      thumbnail: '/images/products/kaabo-mantis.jpg',
      views: '15.2K',
      youtubeId: 'dQw4w9WgXcQ'
    },
  ]

  return (
    <div className="bg-white rounded-3xl p-8 border-2 border-gray-200 shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-pink-600 rounded-2xl flex items-center justify-center">
          <Play className="h-6 w-6 text-white" />
        </div>
        <div>
          <h3 className="text-2xl font-black text-gray-900">Product Demo's</h3>
          <p className="text-sm text-gray-600">Expert reviews & unboxings</p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {videos.map((video) => (
          <div
            key={video.id}
            onClick={() => setActiveVideo(video.id)}
            className="group relative aspect-video bg-gray-900 rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform shadow-lg"
          >
            <img 
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
              <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                <Play className="h-8 w-8 text-red-600 ml-1" fill="currentColor" />
              </div>
            </div>

            {/* Info */}
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
              <div className="text-white">
                <div className="font-bold text-sm mb-1 line-clamp-2">{video.title}</div>
                <div className="flex items-center gap-3 text-xs">
                  <span>{video.duration}</span>
                  <span>•</span>
                  <span>{video.views} views</span>
                </div>
              </div>
            </div>

            {/* Duration Badge */}
            <div className="absolute top-3 right-3 px-2 py-1 bg-black/80 text-white text-xs font-bold rounded">
              {video.duration}
            </div>
          </div>
        ))}
      </div>

      {/* Video Player Modal */}
      {activeVideo && (
        <>
          <div 
            className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4"
            onClick={() => setActiveVideo(null)}
          >
            <div className="max-w-5xl w-full aspect-video bg-black rounded-2xl overflow-hidden">
              <iframe
                src={`https://www.youtube.com/embed/${videos.find(v => v.id === activeVideo)?.youtubeId}?autoplay=1`}
                className="w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </div>
        </>
      )}

      <div className="mt-4 p-4 bg-blue-50 rounded-xl border border-blue-200 text-center">
        <p className="text-sm text-gray-700">
          💡 <strong className="text-gray-900">Pro tip:</strong> Bekijk de video's voor een compleet overzicht van alle features!
        </p>
      </div>
    </div>
  )
}

