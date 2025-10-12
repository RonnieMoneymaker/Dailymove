interface Product {
  id: string
  name: string
  slug: string
  description: string
  price: number
  comparePrice?: number
  sku: string
  inStock: boolean
  rating: number
  reviewCount: number
  images: string[]
}

interface ProductJsonLdProps {
  product: Product
}

export function ProductJsonLd({ product }: ProductJsonLdProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    sku: product.sku,
    image: product.images,
    brand: {
      '@type': 'Brand',
      name: 'DailyMove'
    },
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: 'EUR',
      availability: product.inStock ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
      seller: {
        '@type': 'Organization',
        name: 'DailyMove'
      }
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.rating,
      reviewCount: product.reviewCount
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
