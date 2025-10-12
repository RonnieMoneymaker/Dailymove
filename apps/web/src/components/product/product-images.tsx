'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface ProductImagesProps {
  images: string[]
  name: string
}

export function ProductImages({ images, name }: ProductImagesProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="space-y-4">
      {/* Main image */}
      <div className="relative aspect-square overflow-hidden rounded-lg border cursor-zoom-in" onClick={() => setLightboxOpen(true)}>
        <Image
          src={images[selectedImage]}
          alt={`${name} - Afbeelding ${selectedImage + 1}`}
          fill
          className="object-cover"
          priority
        />
        
        {images.length > 1 && (
          <>
            <Button
              variant="outline"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2"
              onClick={prevImage}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2"
              onClick={nextImage}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </>
        )}
      </div>
      
      {/* Thumbnail images */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-2">
          {images.map((image, index) => (
            <button
              key={index}
              className={`relative aspect-square overflow-hidden rounded-md border-2 transition-colors ${
                selectedImage === index
                  ? 'border-primary'
                  : 'border-transparent hover:border-muted-foreground'
              }`}
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={image}
                alt={`${name} - Thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Simple lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center" onClick={() => setLightboxOpen(false)}>
          <div className="relative w-[90vw] h-[90vh]">
            <Image src={images[selectedImage]} alt={`${name} - Lightbox`} fill className="object-contain" />
          </div>
        </div>
      )}
    </div>
  )
}
