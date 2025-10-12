import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { ProductDetails } from '@/components/product/product-details'
import { ProductImages } from '@/components/product/product-images'
import { ProductReviews } from '@/components/product/product-reviews'
import dynamic from 'next/dynamic'
const RelatedProductsClient = dynamic(() => import('@/components/product/related-products'), { ssr: false })
import { Breadcrumbs } from '@/components/seo/breadcrumbs'
import { InternalLinkBlock } from '@/components/seo/internal-link-block'
import { ProductJsonLd } from '@/components/seo/product-json-ld'

// Mock product data
const products = {
  'xiaomi-mi-electric-scooter-4-pro': {
    id: '1',
    name: 'Xiaomi Mi Electric Scooter 4 Pro',
    slug: 'xiaomi-mi-electric-scooter-4-pro',
    description: 'De Xiaomi Mi Electric Scooter 4 Pro is de perfecte E-step voor dagelijks gebruik. Met een bereik van 30km en een topsnelheid van 25km/h is deze scooter ideaal voor woon-werkverkeer en korte ritten door de stad.',
    longDescription: `De Xiaomi Mi Electric Scooter 4 Pro combineert prestaties met gebruiksgemak. Deze E-step beschikt over een krachtige motor die je tot 25km/h brengt, terwijl de grote batterij zorgt voor een bereik van wel 30km op een enkele lading.

De scooter is voorzien van een helder LED-display dat alle belangrijke informatie toont, inclusief snelheid, batterijniveau en geselecteerde rijmodus. De dubbele remsysteem zorgt voor veilig remmen in alle weersomstandigheden.

Met zijn opvouwbare design is de Mi Electric Scooter 4 Pro gemakkelijk mee te nemen en op te bergen. De stevige constructie en hoge kwaliteit materialen zorgen voor jarenlang plezier.`,
    price: 599,
    comparePrice: 699,
    sku: 'XIAOMI-4PRO-001',
    stock: 15,
    inStock: true,
    images: [
      '/images/products/xiaomi-scooter-real.jpg',
      '/images/products/escooter-1.jpg',
      '/images/products/kaabo-mantis.jpg',
    ],
    features: [
      '30km bereik',
      '25km/h topsnelheid',
      'LED display',
      'Opvouwbaar',
      'Dubbele remsysteem',
      '3 rijmodi',
    ],
    specifications: {
      'Bereik': '30km',
      'Topsnelheid': '25km/h',
      'Gewicht': '14.2kg',
      'Maximaal gewicht': '100kg',
      'Batterij': '36V 7.8Ah',
      'Oplaadtijd': '5-6 uur',
      'Wielen': '8.5 inch',
      'Garantie': '2 jaar',
    },
    rating: 4.8,
    reviewCount: 124,
    category: {
      name: 'E-steps',
      slug: 'e-steps',
    },
    reviews: [
      {
        id: '1',
        name: 'Jan de Vries',
        rating: 5,
        title: 'Perfecte E-step!',
        comment: 'Gebruik deze E-step nu al 6 maanden voor woon-werkverkeer. Zeer tevreden met de prestaties en kwaliteit.',
        date: '2024-01-15',
        verified: true,
      },
      {
        id: '2',
        name: 'Maria Jansen',
        rating: 4,
        title: 'Goede kwaliteit',
        comment: 'Mooie E-step, goede prijs-kwaliteitverhouding. Alleen de oplaadtijd is wat lang.',
        date: '2024-01-10',
        verified: true,
      },
    ],
  },
}

interface ProductPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = products[params.slug as keyof typeof products]
  
  if (!product) {
    return {
      title: 'Product niet gevonden',
    }
  }

  return {
    title: `${product.name} | VoltMover`,
    description: product.description,
    openGraph: {
      title: `${product.name} | VoltMover`,
      description: product.description,
      images: [product.images[0]],
    },
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products[params.slug as keyof typeof products]
  
  if (!product) {
    notFound()
  }

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: product.category.name, href: `/shop/${product.category.slug}` },
    { name: product.name, href: `/product/${product.slug}` },
  ]

  const relatedProducts = [
    {
      id: '2',
      name: 'Segway Ninebot MAX G30LP',
      slug: 'segway-ninebot-max-g30lp',
      price: 799,
      image: '/images/products/escooter-1.jpg',
      rating: 4.9,
      reviewCount: 89,
    },
    {
      id: '3',
      name: 'Kaabo Mantis 8 Pro',
      slug: 'kaabo-mantis-8-pro',
      price: 1299,
      image: '/images/products/kaabo-mantis.jpg',
      rating: 4.7,
      reviewCount: 67,
    },
  ]

  const internalLinks = [
    { href: '/guides/e-step-kopen', text: 'E-step kopen: waar let je op?' },
    { href: '/guides/onderhoud-e-step', text: 'E-step onderhoud tips' },
    { href: '/guides/veiligheid-e-step', text: 'Veilig rijden met je E-step' },
    { href: '/contact', text: 'Hulp nodig? Neem contact op' },
  ]

  return (
    <>
      {/** Load client-only RelatedProducts to avoid server hook execution */}
      {/**/}
      
      <ProductJsonLd product={product} />
      <Breadcrumbs items={breadcrumbs} />
      <div className="container py-8">
        {/* Live viewers counter */}
        <div className="mb-4 text-sm text-orange-700 bg-orange-50 border border-orange-200 rounded-md px-3 py-2 inline-flex items-center">
          <span className="mr-2 inline-block w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
          {Math.floor(10 + Math.random() * 20)} mensen bekijken dit product nu
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          <ProductImages images={product.images} name={product.name} />
          <ProductDetails product={product} />
        </div>
        {/* Sticky add-to-cart bar */}
        <div className="sticky bottom-0 left-0 right-0 bg-white/95 backdrop-blur supports-[backdrop-filter]:backdrop-blur border-t mt-8 py-3">
          <div className="container flex items-center justify-between gap-4">
            <div className="hidden sm:flex items-center gap-4 text-sm text-muted-foreground">
              <span>✔ Gratis verzending</span>
              <span>•</span>
              <span>✔ 30 dagen retour</span>
              <span>•</span>
              <span>✔ 2 jaar garantie</span>
            </div>
            <div className="ml-auto">
              <a href="#add-to-cart" className="inline-flex items-center bg-primary text-white px-6 py-2 rounded-md text-sm font-semibold">
                In winkelwagen
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <ProductReviews reviews={product.reviews} />
        </div>
        
        <div className="mt-16">
          <RelatedProductsClient products={relatedProducts} />
        </div>
      </div>
      <InternalLinkBlock 
        title="Meer informatie over E-steps"
        links={internalLinks}
      />
    </>
  )
}
