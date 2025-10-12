export interface Brand {
  id: string
  name: string
  slug: string
  description: string
  longDescription: string
  logo: string
  website: string
  founded: number
  country: string
  specialties: string[]
  productCount: number
  rating: number
  isPopular: boolean
  isFeatured: boolean
}

export const brands: Brand[] = [
  {
    id: '1',
    name: 'Xiaomi',
    slug: 'xiaomi',
    description: 'Xiaomi is een wereldwijde technologieleider die hoogwaardige, betaalbare E-steps produceert met geavanceerde features.',
    longDescription: `Xiaomi heeft zich gevestigd als één van de meest vertrouwde merken in de E-mobility sector. Het Chinese technologiebedrijf combineert innovatie met betaalbaarheid, waardoor premium E-steps toegankelijk zijn voor iedereen.

Met hun Mi Electric Scooter serie heeft Xiaomi de markt revolutionair veranderd. Hun producten staan bekend om hun betrouwbaarheid, slimme connectiviteit en uitstekende prijs-kwaliteitverhouding.

Xiaomi investeert zwaar in onderzoek en ontwikkeling, wat resulteert in constante innovaties op het gebied van batterijduur, veiligheid en gebruiksvriendelijkheid. Hun E-steps zijn uitgerust met de nieuwste technologie, inclusief smartphone apps voor monitoring en aanpassingen.`,
    logo: '/images/brands/xiaomi-logo.png',
    website: 'https://www.mi.com',
    founded: 2010,
    country: 'China',
    specialties: ['E-steps', 'Smart technology', 'Betaalbare premium producten', 'App connectiviteit'],
    productCount: 8,
    rating: 4.7,
    isPopular: true,
    isFeatured: true,
  },
  {
    id: '2',
    name: 'Segway',
    slug: 'segway',
    description: 'Segway-Ninebot is een pionier in persoonlijke mobiliteit en produceert premium E-steps met geavanceerde technologie.',
    longDescription: `Segway-Ninebot is de onbetwiste leider in intelligente korte-afstand mobiliteitsoplossingen. Als uitvinder van de zelfbalancerende scooter heeft Segway zijn expertise uitgebreid naar elektrische steps die de standaard zetten in de industrie.

Hun Ninebot serie combineert robuuste engineering met intelligente features. Elke Segway E-step wordt gebouwd met premium materialen en ondergaat strenge kwaliteitstests om de hoogste standaarden te garanderen.

Segway staat aan de voorhoede van innovatie met features zoals regeneratief remmen, geavanceerde batterijbeheersystemen en intelligente rijmodi. Hun producten zijn ontworpen voor zowel dagelijks gebruik als recreatie, met modellen die geschikt zijn voor elk type rijder.`,
    logo: '/images/brands/segway-logo.png',
    website: 'https://www.segway.com',
    founded: 1999,
    country: 'USA',
    specialties: ['Premium E-steps', 'Lange afstand', 'Geavanceerde technologie', 'Duurzaamheid'],
    productCount: 12,
    rating: 4.8,
    isPopular: true,
    isFeatured: true,
  },
  {
    id: '3',
    name: 'Kaabo',
    slug: 'kaabo',
    description: 'Kaabo specialiseert zich in high-performance E-steps voor ervaren rijders die kracht en snelheid zoeken.',
    longDescription: `Kaabo heeft zich gepositioneerd als het premium merk voor high-performance elektrische mobiliteit. Hun E-steps zijn ontworpen voor rijders die geen compromissen willen maken op het gebied van prestaties, kwaliteit en rijervaring.

De Mantis en Wolf series van Kaabo staan bekend om hun indrukwekkende specificaties: dual motor setups, lange afstanden, hoge snelheden en robuuste constructie. Deze E-steps zijn gebouwd om te presteren in alle omstandigheden, van stadswegen tot off-road terrein.

Kaabo gebruikt alleen de beste materialen en componenten, waaronder luchtvaart-aluminium frames, hydraulische schokdempers en premium batterijcellen. Hun aandacht voor detail en kwaliteit maakt elke Kaabo E-step een investering die jaren meegaat.`,
    logo: '/images/brands/kaabo-logo.png',
    website: 'https://www.kaabo.com',
    founded: 2015,
    country: 'Singapore',
    specialties: ['High-performance', 'Dual motor', 'Off-road capability', 'Premium build quality'],
    productCount: 6,
    rating: 4.6,
    isPopular: true,
    isFeatured: true,
  },
  {
    id: '4',
    name: 'Pure',
    slug: 'pure',
    description: 'Pure Electric focust op elegante, gebruiksvriendelijke E-steps met een minimalistisch design voor urban professionals.',
    longDescription: `Pure Electric heeft een frisse benadering van E-mobility met hun focus op elegant design en gebruiksvriendelijkheid. Het Britse merk heeft zich gespecialiseerd in het creëren van E-steps die perfect passen in het moderne stadsleven.

Hun producten onderscheiden zich door hun minimalistische esthetiek, intuïtieve bediening en slimme features. Pure E-steps zijn ontworpen voor urban professionals die waarde hechten aan stijl zonder in te boeten op functionaliteit.

Pure investeert zwaar in gebruikerservaring en software-ontwikkeling. Hun smartphone app biedt geavanceerde features zoals rit-tracking, remote locking en personalisatie-opties. Dit maakt Pure E-steps niet alleen een vervoermiddel, maar een geïntegreerd onderdeel van je digitale lifestyle.`,
    logo: '/images/brands/pure-logo.png',
    website: 'https://www.pure-electric.com',
    founded: 2019,
    country: 'United Kingdom',
    specialties: ['Urban design', 'Lichtgewicht', 'Smartphone integratie', 'Minimalistisch'],
    productCount: 4,
    rating: 4.4,
    isPopular: true,
    isFeatured: false,
  },
  {
    id: '5',
    name: 'VanMoof',
    slug: 'vanmoof',
    description: 'VanMoof revolutioneert elektrische fietsen met slimme technologie en Nederlands design voor de moderne stadsbewoner.',
    longDescription: `VanMoof is het Nederlandse merk dat de elektrische fiets opnieuw heeft uitgevonden. Met hun revolutionaire aanpak van design en technologie hebben ze de standaard gezet voor slimme stedelijke mobiliteit.

Hun S-series en X-series e-bikes combineren elegant Nederlands design met geavanceerde technologie zoals automatische versnellingen, geïntegreerde verlichting en anti-diefstal systemen. Elke VanMoof fiets is gebouwd om het stadsleven gemakkelijker en aangenamer te maken.

VanMoof staat bekend om hun innovatieve features zoals Turbo Boost, automatische koppeling met je smartphone en een wereldwijd service netwerk. Hun holistische benadering van e-mobility maakt hen een favoriet onder urban professionals wereldwijd.`,
    logo: '/images/brands/vanmoof-logo.png',
    website: 'https://www.vanmoof.com',
    founded: 2009,
    country: 'Netherlands',
    specialties: ['E-bikes', 'Smart technology', 'Anti-theft', 'Urban design'],
    productCount: 5,
    rating: 4.5,
    isPopular: true,
    isFeatured: true,
  },
  {
    id: '6',
    name: 'Gazelle',
    slug: 'gazelle',
    description: 'Gazelle is een traditioneel Nederlands fietsmerk met meer dan 125 jaar ervaring in het bouwen van kwalitatieve elektrische fietsen.',
    longDescription: `Gazelle is een icoon in de Nederlandse fietswereld met een rijke geschiedenis die teruggaat tot 1892. Dit traditionele merk heeft zich succesvol aangepast aan de moderne tijd door hun expertise in fietsbouw te combineren met elektrische aandrijving.

Hun elektrische fietsen staan bekend om hun uitstekende kwaliteit, comfort en betrouwbaarheid. Gazelle gebruikt alleen premium componenten en heeft een uitgebreid netwerk van dealers en servicepunten door heel Nederland en Europa.

Met modellen variërend van stadsfiets tot touring e-bikes, biedt Gazelle voor elke rijder de perfecte elektrische fiets. Hun focus op Nederlandse fietstraditie gecombineerd met moderne technologie maakt hen tot een vertrouwde keuze voor gezinnen en professionals.`,
    logo: '/images/brands/gazelle-logo.png',
    website: 'https://www.gazelle.nl',
    founded: 1892,
    country: 'Netherlands',
    specialties: ['E-bikes', 'Nederlandse kwaliteit', 'Comfort', 'Traditioneel vakmanschap'],
    productCount: 15,
    rating: 4.7,
    isPopular: true,
    isFeatured: true,
  },
  {
    id: '7',
    name: 'Inokim',
    slug: 'inokim',
    description: 'Inokim produceert premium E-steps met focus op kwaliteit, prestaties en innovatieve technologie.',
    longDescription: `Inokim is een Israëlisch merk dat zich heeft gevestigd als producent van premium elektrische steps. Hun focus ligt op het leveren van superieure kwaliteit en prestaties voor veeleisende gebruikers.

Hun Quick en OXO series staan bekend om hun robuuste constructie, lange levensduur en geavanceerde features. Inokim E-steps worden gebouwd met premium materialen en componenten, wat resulteert in producten die jarenlang meegaan.

Het merk onderscheidt zich door hun aandacht voor detail en innovatieve engineering. Features zoals regeneratief remmen, geavanceerde schokdemping en modulaire ontwerpen maken Inokim E-steps tot een favoriet onder ervaren rijders die kwaliteit waarderen.`,
    logo: '/images/brands/inokim-logo.png',
    website: 'https://www.inokim.com',
    founded: 2014,
    country: 'Israel',
    specialties: ['Premium build', 'Lange levensduur', 'Innovatieve engineering', 'Modulair design'],
    productCount: 7,
    rating: 4.6,
    isPopular: false,
    isFeatured: false,
  },
  {
    id: '8',
    name: 'Dualtron',
    slug: 'dualtron',
    description: 'Dualtron is het ultieme merk voor extreme performance E-steps met ongeëvenaarde kracht en snelheid.',
    longDescription: `Dualtron staat voor het absolute summum van elektrische step technologie. Dit Zuid-Koreaanse merk produceert de meest krachtige en snelste E-steps ter wereld, ontworpen voor rijders die geen compromissen accepteren.

Hun Thunder, Ultra en Storm series leveren prestaties die vergelijkbaar zijn met motorfietsen, maar dan in een compacte en wendbare vorm. Met dual motor setups die tot 6000W kunnen leveren, bereiken Dualtron E-steps snelheden tot 100km/h.

Dualtron E-steps zijn gebouwd voor extreme prestaties met features zoals hydraulische schokdempers, high-end remsystemen en geavanceerde elektronica. Deze machines zijn niet alleen vervoermiddelen, maar echte performance beesten voor de ultieme rijervaring.`,
    logo: '/images/brands/dualtron-logo.png',
    website: 'https://www.dualtron.com',
    founded: 2016,
    country: 'South Korea',
    specialties: ['Extreme performance', 'Hoge snelheid', 'Dual motor', 'Professional grade'],
    productCount: 9,
    rating: 4.8,
    isPopular: false,
    isFeatured: false,
  },
]

export const generateMoreBrands = (count: number): Brand[] => {
  const baseBrands = brands
  const additionalBrands: Brand[] = []
  
  const countries = ['Germany', 'France', 'Italy', 'Japan', 'Taiwan', 'USA']
  const specialtyOptions = [
    ['Budget vriendelijk', 'Betrouwbaarheid'],
    ['Innovatief design', 'Duurzaamheid'],
    ['High-tech features', 'Premium materialen'],
    ['Comfort', 'Gebruiksvriendelijk'],
    ['Sportieve prestaties', 'Robuuste bouw'],
  ]
  
  for (let i = baseBrands.length; i < count; i++) {
    const country = countries[i % countries.length]
    const specialties = specialtyOptions[i % specialtyOptions.length]
    
    additionalBrands.push({
      id: (i + 1).toString(),
      name: `Brand ${i + 1}`,
      slug: `brand-${i + 1}`,
      description: `Een innovatief merk uit ${country} dat zich specialiseert in hoogwaardige elektrische mobiliteit.`,
      longDescription: `Dit merk heeft zich gevestigd als een betrouwbare producent van elektrische voertuigen met focus op kwaliteit en innovatie. Hun producten staan bekend om hun uitstekende prestaties en duurzaamheid.`,
      logo: `/images/brands/brand-${i + 1}-logo.png`,
      website: `https://www.brand${i + 1}.com`,
      founded: Math.floor(Math.random() * 30) + 1990,
      country,
      specialties,
      productCount: Math.floor(Math.random() * 15) + 3,
      rating: Math.round((Math.random() * 1.0 + 4.0) * 10) / 10,
      isPopular: Math.random() > 0.7,
      isFeatured: Math.random() > 0.8,
    })
  }
  
  return [...baseBrands, ...additionalBrands]
}
