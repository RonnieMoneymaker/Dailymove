export interface Product {
  id: string
  name: string
  slug: string
  description: string
  longDescription: string
  price: number
  comparePrice?: number
  sku: string
  stock: number
  inStock: boolean
  images: string[]
  features: string[]
  specifications: Record<string, string>
  rating: number
  reviewCount: number
  category: {
    name: string
    slug: string
  }
  brand: {
    name: string
    slug: string
  }
  badge?: string | null
  isNew?: boolean
  isBestseller?: boolean
  isOnSale?: boolean
}

export const products: Product[] = [
  // E-steps - Xiaomi
  {
    id: '1',
    name: 'Xiaomi Mi Electric Scooter 4 Pro',
    slug: 'xiaomi-mi-electric-scooter-4-pro',
    description: 'De Xiaomi Mi Electric Scooter 4 Pro is de perfecte E-step voor dagelijks gebruik. Met een bereik van 30km en een topsnelheid van 25km/h.',
    longDescription: `De Xiaomi Mi Electric Scooter 4 Pro combineert prestaties met gebruiksgemak. Deze E-step beschikt over een krachtige motor die je tot 25km/h brengt, terwijl de grote batterij zorgt voor een bereik van wel 30km op een enkele lading.

De scooter is voorzien van een helder LED-display dat alle belangrijke informatie toont, inclusief snelheid, batterijniveau en geselecteerde rijmodus. Het dubbele remsysteem zorgt voor veilig remmen in alle weersomstandigheden.

Met zijn opvouwbare design is de Mi Electric Scooter 4 Pro gemakkelijk mee te nemen en op te bergen. De stevige constructie en hoogwaardige materialen zorgen voor jarenlang rijplezier.`,
    price: 599,
    comparePrice: 699,
    sku: 'XIAOMI-4PRO-001',
    stock: 15,
    inStock: true,
    images: ['/images/products/xiaomi-scooter-real.jpg', '/images/products/escooter-1.jpg'],
    features: ['30km bereik', '25km/h topsnelheid', 'LED display', 'Opvouwbaar', 'Dubbele remsysteem', '3 rijmodi'],
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
    category: { name: 'E-steps', slug: 'e-steps' },
    brand: { name: 'Xiaomi', slug: 'xiaomi' },
    badge: 'Bestseller',
    isBestseller: true,
  },
  {
    id: '2',
    name: 'Xiaomi Mi Electric Scooter 3',
    slug: 'xiaomi-mi-electric-scooter-3',
    description: 'De Xiaomi Mi Electric Scooter 3 biedt uitstekende prestaties voor een betaalbare prijs. Perfect voor beginners.',
    longDescription: `De Xiaomi Mi Electric Scooter 3 is de ideale instapmodel voor wie op zoek is naar betrouwbare elektrische mobiliteit. Met een bereik van 30km en een comfortabele rijervaring is dit de perfecte keuze voor dagelijks gebruik.

Deze E-step beschikt over een intuïtieve bediening en een duidelijk display. De opvouwbare constructie maakt het gemakkelijk om de scooter mee te nemen in het openbaar vervoer of op te bergen thuis.

Xiaomi staat bekend om zijn kwaliteit en betrouwbaarheid, en de Mi Electric Scooter 3 is daarop geen uitzondering. Met zijn robuuste bouw en moderne features krijg je waar voor je geld.`,
    price: 399,
    comparePrice: 449,
    sku: 'XIAOMI-3-001',
    stock: 23,
    inStock: true,
    images: ['/images/products/xiaomi-scooter-real.jpg'],
    features: ['30km bereik', '25km/h topsnelheid', 'Opvouwbaar', 'LED verlichting', 'App connectiviteit'],
    specifications: {
      'Bereik': '30km',
      'Topsnelheid': '25km/h',
      'Gewicht': '13.2kg',
      'Maximaal gewicht': '100kg',
      'Batterij': '36V 7.65Ah',
      'Oplaadtijd': '5.5 uur',
      'Wielen': '8.5 inch',
      'Garantie': '2 jaar',
    },
    rating: 4.6,
    reviewCount: 89,
    category: { name: 'E-steps', slug: 'e-steps' },
    brand: { name: 'Xiaomi', slug: 'xiaomi' },
    isOnSale: true,
  },

  // E-steps - Segway
  {
    id: '3',
    name: 'Segway Ninebot MAX G30LP',
    slug: 'segway-ninebot-max-g30lp',
    description: 'De Segway Ninebot MAX G30LP biedt een indrukwekkend bereik van 65km en is perfect voor lange ritten.',
    longDescription: `De Segway Ninebot MAX G30LP is ontworpen voor degenen die meer willen dan gemiddeld. Met een bereik van maar liefst 65km op een enkele lading is dit de perfecte E-step voor lange afstanden en dagelijks woon-werkverkeer.

Deze krachtige scooter beschikt over een robuuste motor die je tot 30km/h brengt, terwijl de grote 10-inch wielen zorgen voor een comfortabele rit over verschillende wegoppervlakken. De IPX5 waterbestendigheid betekent dat je ook bij lichte regen kunt rijden.

Het intelligente batterijbeheersysteem zorgt voor optimale prestaties en een lange levensduur van de batterij. Met zijn stevige constructie en premium afwerking is dit een investering die jaren meegaat.`,
    price: 799,
    comparePrice: 899,
    sku: 'SEGWAY-G30LP-001',
    stock: 12,
    inStock: true,
    images: ['/images/products/escooter-1.jpg', '/images/products/segway-max.jpg'],
    features: ['65km bereik', '30km/h topsnelheid', 'IPX5 waterdicht', '10 inch wielen', 'Cruise control'],
    specifications: {
      'Bereik': '65km',
      'Topsnelheid': '30km/h',
      'Gewicht': '18.7kg',
      'Maximaal gewicht': '100kg',
      'Batterij': '36V 12.8Ah',
      'Oplaadtijd': '6 uur',
      'Wielen': '10 inch',
      'Garantie': '2 jaar',
    },
    rating: 4.9,
    reviewCount: 156,
    category: { name: 'E-steps', slug: 'e-steps' },
    brand: { name: 'Segway', slug: 'segway' },
    badge: 'Premium',
  },
  {
    id: '4',
    name: 'Segway Ninebot F2 Pro',
    slug: 'segway-ninebot-f2-pro',
    description: 'De Segway Ninebot F2 Pro combineert kracht met portabiliteit. Ideaal voor stedelijk gebruik.',
    longDescription: `De Segway Ninebot F2 Pro is de perfecte balans tussen prestaties en draagbaarheid. Met zijn lichtgewicht ontwerp van slechts 14.3kg en een bereik van 55km is dit de ideale companion voor het stadsleven.

Deze geavanceerde E-step beschikt over een krachtige motor die soepel accelereert tot 25km/h. Het geïntegreerde LED-display toont alle belangrijke informatie, terwijl de app-connectiviteit extra functionaliteiten biedt.

De F2 Pro is uitgerust met een dubbel remsysteem voor maximale veiligheid en 9-inch tubeless banden voor een comfortabele rit. Het opvouwmechanisme met één hand maakt het gemakkelijk om de scooter mee te nemen.`,
    price: 649,
    comparePrice: 749,
    sku: 'SEGWAY-F2PRO-001',
    stock: 18,
    inStock: true,
    images: ['/images/products/escooter-2.jpg'],
    features: ['55km bereik', '25km/h topsnelheid', 'Tubeless banden', 'App connectiviteit', 'Lichtgewicht'],
    specifications: {
      'Bereik': '55km',
      'Topsnelheid': '25km/h',
      'Gewicht': '14.3kg',
      'Maximaal gewicht': '100kg',
      'Batterij': '36V 10.4Ah',
      'Oplaadtijd': '7 uur',
      'Wielen': '9 inch',
      'Garantie': '2 jaar',
    },
    rating: 4.7,
    reviewCount: 92,
    category: { name: 'E-steps', slug: 'e-steps' },
    brand: { name: 'Segway', slug: 'segway' },
    isNew: true,
  },

  // E-steps - Kaabo
  {
    id: '5',
    name: 'Kaabo Mantis 8 Pro',
    slug: 'kaabo-mantis-8-pro',
    description: 'De Kaabo Mantis 8 Pro is een krachtige off-road E-step met dual motor setup en een bereik van 80km.',
    longDescription: `De Kaabo Mantis 8 Pro is gebouwd voor avontuur en prestaties. Met zijn dual motor configuratie levert deze beast een indrukwekkende kracht die je tot 45km/h brengt, terwijl het bereik van 80km zorgt voor urenlang rijplezier.

Deze premium E-step is uitgerust met hydraulische schokdempers voor en achter, waardoor je comfortabel kunt rijden over elk terrein. De 8-inch off-road banden bieden uitstekende grip en stabiliteit.

Het robuuste frame is gemaakt van luchtvaart-aluminium en kan een gewicht tot 120kg dragen. Met zijn geavanceerde display, LED-verlichting en premium afwerking is dit de ultieme E-step voor de ervaren rijder.`,
    price: 1299,
    comparePrice: 1499,
    sku: 'KAABO-MANTIS8-001',
    stock: 8,
    inStock: true,
    images: ['/images/products/kaabo-mantis.jpg'],
    features: ['80km bereik', '45km/h topsnelheid', 'Dual motor', 'Hydraulische dempers', 'Off-road banden'],
    specifications: {
      'Bereik': '80km',
      'Topsnelheid': '45km/h',
      'Gewicht': '24.5kg',
      'Maximaal gewicht': '120kg',
      'Batterij': '52V 18.2Ah',
      'Oplaadtijd': '8-10 uur',
      'Wielen': '8 inch',
      'Garantie': '2 jaar',
    },
    rating: 4.8,
    reviewCount: 67,
    category: { name: 'E-steps', slug: 'e-steps' },
    brand: { name: 'Kaabo', slug: 'kaabo' },
    badge: 'Premium',
  },

  // E-steps - Pure
  {
    id: '6',
    name: 'Pure Air Pro',
    slug: 'pure-air-pro',
    description: 'De Pure Air Pro is een elegante en lichtgewicht E-step, perfect voor dagelijks gebruik in de stad.',
    longDescription: `De Pure Air Pro combineert stijl met functionaliteit in een elegant pakket. Met zijn minimalistisch design en lichtgewicht constructie van slechts 12.5kg is dit de perfecte E-step voor urban professionals.

Deze slimme scooter beschikt over een bereik van 25km en een topsnelheid van 20km/h, ideaal voor korte tot middellange ritten. Het geïntegreerde LED-display en de smartphone app maken het gemakkelijk om je rit te monitoren.

De Pure Air Pro is uitgerust met punctuurbestendige banden en een betrouwbaar remsysteem. Het opvouwmechanisme is intuïtief en maakt de scooter compact genoeg om mee te nemen in liften of onder je bureau op te bergen.`,
    price: 449,
    comparePrice: 549,
    sku: 'PURE-AIRPRO-001',
    stock: 0,
    inStock: false,
    images: ['/images/products/pure-air.jpg'],
    features: ['25km bereik', '20km/h topsnelheid', 'Lichtgewicht', 'Punctuurbestendig', 'Smartphone app'],
    specifications: {
      'Bereik': '25km',
      'Topsnelheid': '20km/h',
      'Gewicht': '12.5kg',
      'Maximaal gewicht': '100kg',
      'Batterij': '36V 5.2Ah',
      'Oplaadtijd': '4 uur',
      'Wielen': '8.5 inch',
      'Garantie': '2 jaar',
    },
    rating: 4.4,
    reviewCount: 203,
    category: { name: 'E-steps', slug: 'e-steps' },
    brand: { name: 'Pure', slug: 'pure' },
    badge: 'Uitverkocht',
  },

  // Meer producten volgen...
  // E-bikes, accessoires, etc.
]

export const generateMoreProducts = (count: number): Product[] => {
  const baseProducts = products
  const additionalProducts: Product[] = []
  
  const categories = ['e-steps', 'e-bikes', 'accessoires', 'onderdelen']
  const brands = ['Xiaomi', 'Segway', 'Kaabo', 'Pure', 'VanMoof', 'Gazelle', 'Inokim', 'Dualtron']
  
  for (let i = baseProducts.length; i < count; i++) {
    const category = categories[i % categories.length]
    const brand = brands[i % brands.length]
    
    additionalProducts.push({
      id: (i + 1).toString(),
      name: `${brand} ${category === 'e-steps' ? 'E-step' : category === 'e-bikes' ? 'E-bike' : 'Product'} Model ${i + 1}`,
      slug: `${brand.toLowerCase()}-${category}-model-${i + 1}`,
      description: `Premium ${category} van ${brand} met uitstekende prestaties en betrouwbaarheid.`,
      longDescription: `Dit is een premium ${category} van ${brand} dat is ontworpen voor optimale prestaties en gebruiksgemak. Met hoogwaardige materialen en geavanceerde technologie biedt dit product een uitstekende rijervaring.`,
      price: Math.floor(Math.random() * 1000) + 300,
      comparePrice: Math.floor(Math.random() * 1000) + 400,
      sku: `${brand.toUpperCase()}-${i + 1}`,
      stock: Math.floor(Math.random() * 20) + 1,
      inStock: Math.random() > 0.1,
      images: ['/images/products/escooter-1.jpg'],
      features: ['Lange batterijduur', 'Veilig remmen', 'LED verlichting', 'Opvouwbaar'],
      specifications: {
        'Bereik': `${Math.floor(Math.random() * 50) + 20}km`,
        'Topsnelheid': `${Math.floor(Math.random() * 20) + 15}km/h`,
        'Gewicht': `${Math.floor(Math.random() * 10) + 12}kg`,
        'Garantie': '2 jaar',
      },
      rating: Math.round((Math.random() * 1.5 + 3.5) * 10) / 10,
      reviewCount: Math.floor(Math.random() * 200) + 10,
      category: { name: category, slug: category },
      brand: { name: brand, slug: brand.toLowerCase() },
      badge: Math.random() > 0.7 ? ['Bestseller', 'Nieuw', 'Sale'][Math.floor(Math.random() * 3)] : null,
      isBestseller: Math.random() > 0.8,
      isNew: Math.random() > 0.9,
      isOnSale: Math.random() > 0.8,
    })
  }
  
  return [...baseProducts, ...additionalProducts]
}
