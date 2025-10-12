import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { CategoryHero } from '@/components/category/category-hero'
import { ProductGrid } from '@/components/category/product-grid'
import { CategoryFilters, type CategoryFiltersState } from '@/components/category/category-filters'
import { Breadcrumbs } from '@/components/seo/breadcrumbs'
import { InternalLinkBlock } from '@/components/seo/internal-link-block'

// Mock data for E-steps
const categories = {
  'e-steps': {
    name: 'E-steps',
    description: 'Ontdek onze collectie van premium E-steps. Van compacte modellen voor de stad tot krachtige off-road varianten. Alle E-steps zijn geselecteerd op kwaliteit, prestaties en betrouwbaarheid.',
    image: '/images/categories/escooter.jpg',
    products: [
      {
        id: '1',
        name: 'Xiaomi Mi Electric Scooter 4 Pro',
        slug: 'xiaomi-mi-electric-scooter-4-pro',
        price: 599,
        comparePrice: 699,
        image: '/images/products/xiaomi-scooter-real.jpg',
        rating: 4.8,
        reviewCount: 124,
        inStock: true,
        badge: 'Bestseller',
        features: ['30km bereik', '25km/h topsnelheid', 'LED display'],
      },
      {
        id: '2',
        name: 'Segway Ninebot MAX G30LP',
        slug: 'segway-ninebot-max-g30lp',
        price: 799,
        comparePrice: 899,
        image: '/images/products/escooter-1.jpg',
        rating: 4.9,
        reviewCount: 89,
        inStock: true,
        badge: 'Nieuw',
        features: ['65km bereik', '30km/h topsnelheid', 'IPX5 waterdicht'],
      },
      {
        id: '3',
        name: 'Kaabo Mantis 8 Pro',
        slug: 'kaabo-mantis-8-pro',
        price: 1299,
        comparePrice: 1499,
        image: '/images/products/kaabo-mantis.jpg',
        rating: 4.7,
        reviewCount: 67,
        inStock: true,
        badge: 'Premium',
        features: ['80km bereik', '45km/h topsnelheid', 'Dual motor'],
      },
      {
        id: '4',
        name: 'Pure Air Pro',
        slug: 'pure-air-pro',
        price: 449,
        comparePrice: 549,
        image: '/images/products/escooter-2.jpg',
        rating: 4.6,
        reviewCount: 203,
        inStock: false,
        badge: 'Uitverkocht',
        features: ['25km bereik', '20km/h topsnelheid', 'Lichtgewicht'],
      },
      {
        id: '5',
        name: 'Inokim Quick 4',
        slug: 'inokim-quick-4',
        price: 899,
        comparePrice: 999,
        image: '/images/lifestyle/modern-escooter.jpg',
        rating: 4.8,
        reviewCount: 156,
        inStock: true,
        badge: null,
        features: ['40km bereik', '25km/h topsnelheid', 'Opvouwbaar'],
      },
      {
        id: '6',
        name: 'Dualtron Mini',
        slug: 'dualtron-mini',
        price: 1599,
        comparePrice: 1799,
        image: '/images/lifestyle/urban-mobility.jpg',
        rating: 4.9,
        reviewCount: 45,
        inStock: true,
        badge: 'Premium',
        features: ['60km bereik', '50km/h topsnelheid', 'Sport modus'],
      },
    ],
  },
}

interface CategoryPageProps {
  params: {
    category: string
  }
  searchParams: {
    [key: string]: string | string[] | undefined
  }
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const category = categories[params.category as keyof typeof categories]
  
  if (!category) {
    return {
      title: 'Categorie niet gevonden',
    }
  }

  return {
    title: `${category.name} | VoltMover`,
    description: category.description,
    openGraph: {
      title: `${category.name} | VoltMover`,
      description: category.description,
      images: [category.image],
    },
  }
}

export default function CategoryPage({ params, searchParams }: CategoryPageProps) {
  const category = categories[params.category as keyof typeof categories]
  
  if (!category) {
    notFound()
  }

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: category.name, href: `/shop/${params.category}` },
  ]

  const internalLinks = [
    { href: '/guides/e-step-kopen', text: 'E-step kopen: waar let je op?' },
    { href: '/guides/onderhoud-e-step', text: 'E-step onderhoud tips' },
    { href: '/guides/veiligheid-e-step', text: 'Veilig rijden met je E-step' },
    { href: '/contact', text: 'Hulp nodig? Neem contact op' },
  ]

  // derive facet counts (simple mock by scanning features/brands from names)
  const brandCounts: Record<string, number> = {}
  const featureCounts: Record<string, number> = {}
  category.products.forEach(p => {
    const brand = p.name.split(' ')[0]
    brandCounts[brand] = (brandCounts[brand] || 0) + 1
    p.features.forEach(f => featureCounts[f] = (featureCounts[f] || 0) + 1)
  })

  // simple client-side filter in server component via URL params (no-op mock)
  // Sorting placeholder

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      <CategoryHero category={category} />
      <div className="container py-8">
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <CategoryFilters 
              brandCounts={brandCounts}
              featureCounts={featureCounts}
            />
          </div>
          <div className="lg:col-span-3">
            <ProductGrid products={category.products} />
          </div>
        </div>
      </div>
      <InternalLinkBlock 
        title="Meer informatie over E-steps"
        links={internalLinks}
      />
    </>
  )
}
