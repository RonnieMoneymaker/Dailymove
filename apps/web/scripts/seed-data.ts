#!/usr/bin/env tsx

import { writeFileSync, mkdirSync } from 'fs'
import { join } from 'path'
import { generateMoreProducts } from '../src/data/products'
import { generateMoreBrands } from '../src/data/brands'
import { generateMoreLocations } from '../src/data/locations'

const OUTPUT_DIR = join(process.cwd(), 'src/data/generated')

// Zorg ervoor dat de output directory bestaat
try {
  mkdirSync(OUTPUT_DIR, { recursive: true })
} catch (error) {
  // Directory bestaat al
}

async function seedData() {
  console.log('🌱 Genereren van VoltMover seed data...')
  
  // Genereer 180+ producten
  console.log('📦 Genereren van producten...')
  const products = generateMoreProducts(185)
  writeFileSync(
    join(OUTPUT_DIR, 'products.json'),
    JSON.stringify(products, null, 2)
  )
  console.log(`✅ ${products.length} producten gegenereerd`)
  
  // Genereer 20+ merken
  console.log('🏷️ Genereren van merken...')
  const brands = generateMoreBrands(22)
  writeFileSync(
    join(OUTPUT_DIR, 'brands.json'),
    JSON.stringify(brands, null, 2)
  )
  console.log(`✅ ${brands.length} merken gegenereerd`)
  
  // Genereer 200+ locaties
  console.log('📍 Genereren van locaties...')
  const locations = generateMoreLocations(200)
  writeFileSync(
    join(OUTPUT_DIR, 'locations.json'),
    JSON.stringify(locations, null, 2)
  )
  console.log(`✅ ${locations.length} locaties gegenereerd`)
  
  // Genereer categorieën
  console.log('📂 Genereren van categorieën...')
  const categories = [
    {
      id: '1',
      name: 'E-steps',
      slug: 'e-steps',
      description: 'Premium elektrische steps voor elke behoefte',
      longDescription: 'Ontdek onze uitgebreide collectie E-steps van topmerken zoals Xiaomi, Segway, Kaabo en Pure. Van compacte modellen voor de stad tot krachtige off-road varianten.',
      image: '/images/categories/escooter.jpg',
      productCount: products.filter(p => p.category.slug === 'e-steps').length,
      isPopular: true,
      isFeatured: true,
    },
    {
      id: '2',
      name: 'E-bikes',
      slug: 'e-bikes',
      description: 'Elektrische fietsen voor comfort en prestaties',
      longDescription: 'Van stadsfiets tot mountainbike - onze e-bikes combineren Nederlandse kwaliteit met moderne technologie. Ideaal voor woon-werkverkeer en recreatie.',
      image: '/images/categories/ebike.jpg',
      productCount: products.filter(p => p.category.slug === 'e-bikes').length,
      isPopular: true,
      isFeatured: true,
    },
    {
      id: '3',
      name: 'Accessoires',
      slug: 'accessoires',
      description: 'Veiligheid en comfort accessoires',
      longDescription: 'Compleet je e-mobility setup met onze selectie van helmen, sloten, verlichting en andere essentiële accessoires voor veilig rijden.',
      image: '/images/categories/accessories.jpg',
      productCount: products.filter(p => p.category.slug === 'accessoires').length,
      isPopular: true,
      isFeatured: false,
    },
    {
      id: '4',
      name: 'Onderdelen',
      slug: 'onderdelen',
      description: 'Reserveonderdelen en upgrades',
      longDescription: 'Houd je e-step of e-bike in topconditie met onze originele onderdelen en upgrade componenten van bekende merken.',
      image: '/images/categories/parts.jpg',
      productCount: products.filter(p => p.category.slug === 'onderdelen').length,
      isPopular: false,
      isFeatured: false,
    },
  ]
  
  writeFileSync(
    join(OUTPUT_DIR, 'categories.json'),
    JSON.stringify(categories, null, 2)
  )
  console.log(`✅ ${categories.length} categorieën gegenereerd`)
  
  // Genereer statistieken
  const stats = {
    totalProducts: products.length,
    totalBrands: brands.length,
    totalLocations: locations.length,
    totalCategories: categories.length,
    inStockProducts: products.filter(p => p.inStock).length,
    bestsellers: products.filter(p => p.isBestseller).length,
    newProducts: products.filter(p => p.isNew).length,
    saleProducts: products.filter(p => p.isOnSale).length,
    averagePrice: Math.round(products.reduce((sum, p) => sum + p.price, 0) / products.length),
    averageRating: Math.round((products.reduce((sum, p) => sum + p.rating, 0) / products.length) * 10) / 10,
    totalReviews: products.reduce((sum, p) => sum + p.reviewCount, 0),
    generatedAt: new Date().toISOString(),
  }
  
  writeFileSync(
    join(OUTPUT_DIR, 'stats.json'),
    JSON.stringify(stats, null, 2)
  )
  
  console.log('\n📊 Statistieken:')
  console.log(`   Producten: ${stats.totalProducts} (${stats.inStockProducts} op voorraad)`)
  console.log(`   Merken: ${stats.totalBrands}`)
  console.log(`   Locaties: ${stats.totalLocations}`)
  console.log(`   Categorieën: ${stats.totalCategories}`)
  console.log(`   Gemiddelde prijs: €${stats.averagePrice}`)
  console.log(`   Gemiddelde rating: ${stats.averageRating}/5`)
  console.log(`   Totaal reviews: ${stats.totalReviews}`)
  
  console.log('\n🎉 Seed data succesvol gegenereerd!')
  console.log(`📁 Output directory: ${OUTPUT_DIR}`)
}

// Run het script als het direct wordt uitgevoerd
if (require.main === module) {
  seedData().catch(console.error)
}

export { seedData }
