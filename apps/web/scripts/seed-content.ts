#!/usr/bin/env tsx

import { writeFileSync, mkdirSync } from 'fs'
import { join } from 'path'

const OUTPUT_DIR = join(process.cwd(), 'src/content/generated')

// Zorg ervoor dat de output directory bestaat
try {
  mkdirSync(OUTPUT_DIR, { recursive: true })
} catch (error) {
  // Directory bestaat al
}

interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  category: string
  tags: string[]
  author: string
  publishedAt: string
  readingTime: number
  image: string
  seo: {
    metaTitle: string
    metaDescription: string
    keywords: string[]
  }
}

interface Guide {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  difficulty: 'Beginner' | 'Gemiddeld' | 'Gevorderd'
  estimatedTime: string
  category: string
  tags: string[]
  author: string
  publishedAt: string
  image: string
  seo: {
    metaTitle: string
    metaDescription: string
    keywords: string[]
  }
}

interface Comparison {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  productA: {
    name: string
    slug: string
    image: string
  }
  productB: {
    name: string
    slug: string
    image: string
  }
  winner: string
  category: string
  publishedAt: string
  author: string
  seo: {
    metaTitle: string
    metaDescription: string
    keywords: string[]
  }
}

// Blog post templates
const blogTitles = [
  'De Beste E-steps van 2024: Complete Koopgids',
  'E-step Onderhoud: 10 Tips voor een Lange Levensduur',
  'Elektrische Mobiliteit in Nederland: Trends en Ontwikkelingen',
  'E-step Veiligheid: Wat Je Moet Weten Voor Je de Weg Op Gaat',
  'De Voordelen van E-bikes voor Woon-Werkverkeer',
  'E-step Batterij Onderhoud: Maximale Levensduur Tips',
  'Welke E-step Past Bij Jouw Levensstijl?',
  'E-mobility Wetgeving Nederland 2024: Wat is Toegestaan?',
  'De Evolutie van Elektrische Steps: Van Speelgoed tot Vervoermiddel',
  'E-step vs Openbaar Vervoer: Kosten en Tijdsbesparing',
  'De Beste E-step Accessoires voor Comfort en Veiligheid',
  'E-bike Trends 2024: Wat Kunnen We Verwachten?',
  'Duurzame Mobiliteit: Waarom E-steps de Toekomst Zijn',
  'E-step Kopen: Nieuwe vs Tweedehands - Voor- en Nadelen',
  'De Impact van Weer op Je E-step: Rijden in Alle Seizoenen'
]

const guideTopics = [
  'E-step Kopen: Complete Beginnersgids',
  'E-bike Onderhoud: Stap-voor-Stap Handleiding',
  'E-step Reparatie: Veelvoorkomende Problemen Oplossen',
  'Veilig Rijden met E-steps: Verkeersregels en Tips',
  'E-step Batterij Vervangen: DIY Handleiding',
  'E-bike Route Planning: De Beste Apps en Tools',
  'E-step Winterstalling: Zo Berg Je Je Step Op',
  'E-mobility Verzekering: Wat Heb Je Nodig?',
  'E-step Accessoires Installeren: Complete Gids',
  'E-bike Fitnessvoordelen: Trainen met Elektrische Ondersteuning'
]

const comparisonPairs = [
  { a: 'Xiaomi Mi Electric Scooter 4 Pro', b: 'Segway Ninebot MAX G30LP' },
  { a: 'Kaabo Mantis 8 Pro', b: 'Dualtron Mini' },
  { a: 'Pure Air Pro', b: 'Inokim Quick 4' },
  { a: 'VanMoof S5', b: 'Gazelle Ultimate C380' },
  { a: 'Xiaomi Mi Electric Scooter 3', b: 'Segway Ninebot F2 Pro' },
]

function generateBlogContent(title: string, category: string): string {
  return `# ${title}

Welkom bij deze uitgebreide gids over ${title.toLowerCase()}. In dit artikel behandelen we alles wat je moet weten om de juiste keuze te maken voor jouw elektrische mobiliteit.

## Inleiding

De wereld van elektrische mobiliteit evolueert constant. Met nieuwe technologieën en verbeterde prestaties worden E-steps en E-bikes steeds populairder als alternatief voor traditionele vervoermiddelen.

### Waarom Kiezen voor Elektrische Mobiliteit?

- **Milieuvriendelijk**: Geen uitstoot tijdens het rijden
- **Kostenbesparend**: Lage operationele kosten
- **Efficiënt**: Vermijd files en parkeerproblemen
- **Gezond**: Actieve vorm van vervoer
- **Praktisch**: Compact en gemakkelijk op te bergen

## Belangrijkste Overwegingen

### 1. Bereik en Batterijduur

Het bereik van je elektrische voertuig is cruciaal voor dagelijks gebruik. Overweeg je gemiddelde ritafstand en kies een model met voldoende marge.

### 2. Snelheid en Prestaties

Verschillende modellen bieden verschillende topsnelheden. Houd rekening met lokale wetgeving en je persoonlijke behoeften.

### 3. Comfort en Ergonomie

Een comfortabele rit is essentieel, vooral voor langere afstanden. Let op factoren zoals:
- Wielgrootte en type
- Schokdemping
- Stuurhoogte en -breedte
- Dekgrootte en grip

## Top Aanbevelingen

Op basis van onze ervaring en klantfeedback raden we de volgende modellen aan:

1. **Voor Beginners**: Xiaomi Mi Electric Scooter 3
2. **Voor Dagelijks Gebruik**: Segway Ninebot MAX G30LP
3. **Voor Prestaties**: Kaabo Mantis 8 Pro
4. **Voor Stijl**: Pure Air Pro

## Onderhoud en Verzorging

Regelmatig onderhoud verlengt de levensduur van je elektrische voertuig aanzienlijk:

- Controleer bandenspanning wekelijks
- Houd de batterij tussen 20-80% geladen
- Reinig regelmatig met een vochtige doek
- Controleer bouten en schroeven maandelijks

## Conclusie

De keuze voor elektrische mobiliteit is een investering in je toekomst en die van onze planeet. Met de juiste informatie en het juiste product kun je genieten van jaren zorgeloos rijplezier.

Heb je vragen of wil je persoonlijk advies? Neem contact op met onze experts bij VoltMover. We helpen je graag bij het maken van de perfecte keuze.

---

*Dit artikel is geschreven door het VoltMover team, Nederland's #1 E-Mobility specialist. Voor meer informatie en de nieuwste producten, bezoek onze [webshop](/).*`
}

function generateGuideContent(title: string, difficulty: string): string {
  return `# ${title}

**Moeilijkheidsgraad**: ${difficulty}  
**Geschatte tijd**: 15-30 minuten  
**Benodigdheden**: Basis gereedschap

## Overzicht

Deze stap-voor-stap gids helpt je bij ${title.toLowerCase()}. We behandelen alles wat je moet weten om succesvol te zijn.

## Voor Je Begint

Zorg ervoor dat je het volgende bij de hand hebt:
- Basis gereedschapsset
- Schone werkruimte
- Goede verlichting
- Eventuele reserveonderdelen

## Stap-voor-Stap Instructies

### Stap 1: Voorbereiding
Begin altijd met een grondige inspectie van je equipment. Controleer op zichtbare schade of slijtage.

### Stap 2: Veiligheid Eerst
Zorg ervoor dat je voertuig is uitgeschakeld en de batterij is losgekoppeld voordat je begint.

### Stap 3: Hoofdprocedure
Volg deze stappen zorgvuldig:

1. Lokaliseer de relevante componenten
2. Maak foto's voor de referentie
3. Werk systematisch van buiten naar binnen
4. Noteer eventuele bijzonderheden

### Stap 4: Controle en Test
Na voltooiing van de hoofdprocedure:
- Controleer alle verbindingen
- Test de functionaliteit
- Maak een proefrit indien van toepassing

## Veelvoorkomende Problemen

### Probleem 1: Component werkt niet
**Oorzaak**: Losse verbinding of defect onderdeel
**Oplossing**: Controleer alle aansluitingen en vervang indien nodig

### Probleem 2: Onverwachte geluiden
**Oorzaak**: Slijtage of verkeerde montage
**Oplossing**: Inspecteer grondig en herinstalleer indien nodig

## Tips van de Professionals

- Werk altijd in goede verlichting
- Forceer nooit onderdelen die niet passen
- Bewaar alle originele onderdelen
- Maak foto's tijdens demontage
- Gebruik altijd originele reserveonderdelen

## Wanneer Professionele Hulp Zoeken?

Hoewel veel onderhoud zelf te doen is, zijn er situaties waarin professionele hulp noodzakelijk is:
- Complexe elektrische problemen
- Structurele schade
- Garantiekwesties
- Onzekerheid over veiligheid

## Conclusie

Met deze gids zou je in staat moeten zijn om ${title.toLowerCase()} uit te voeren. Neem altijd de tijd en werk veilig.

Voor professionele service of originele onderdelen kun je altijd terecht bij VoltMover. Onze experts staan klaar om je te helpen.

---

*Voor meer gidsen en tips, bezoek onze [blog](/blog) of neem [contact](/contact) met ons op.*`
}

function generateComparisonContent(productA: string, productB: string): string {
  return `# ${productA} vs ${productB}: Welke E-step is Beter?

In deze uitgebreide vergelijking zetten we de ${productA} en ${productB} naast elkaar om je te helpen bij het maken van de juiste keuze.

## Snelle Vergelijking

| Eigenschap | ${productA} | ${productB} |
|------------|-------------|-------------|
| **Prijs** | €599 | €799 |
| **Bereik** | 30km | 65km |
| **Topsnelheid** | 25km/h | 30km/h |
| **Gewicht** | 14.2kg | 18.7kg |
| **Oplaadtijd** | 5-6 uur | 6 uur |

## Gedetailleerde Analyse

### Prestaties en Bereik

**${productA}**
De ${productA} biedt solide prestaties voor dagelijks gebruik. Met een bereik van 30km is dit voldoende voor de meeste stedelijke ritten.

**${productB}**
De ${productB} excelleert in bereik met indrukwekkende 65km op een enkele lading. Dit maakt het ideaal voor langere ritten en woon-werkverkeer.

### Design en Bouwkwaliteit

Beide modellen zijn gebouwd met hoogwaardige materialen, maar verschillen in hun benadering:

- **${productA}**: Focus op portabiliteit en gebruiksgemak
- **${productB}**: Emphasis op robuustheid en prestaties

### Gebruikerservaring

**Comfort**
De ${productB} heeft grotere wielen (10 inch vs 8.5 inch) wat resulteert in een comfortabelere rit over oneffen oppervlakken.

**Draagbaarheid**
De ${productA} is lichter en compacter, waardoor het gemakkelijker mee te nemen is in het openbaar vervoer.

### Prijs-Kwaliteit Verhouding

- **${productA}**: Uitstekende waarde voor geld voor casual gebruikers
- **${productB}**: Hogere investering, maar meer features en prestaties

## Voor Wie is Welke E-step?

### Kies de ${productA} als:
- Je een betrouwbare, betaalbare E-step zoekt
- Portabiliteit belangrijk is
- Je voornamelijk korte tot middellange ritten maakt
- Je net begint met E-steps

### Kies de ${productB} als:
- Bereik je hoogste prioriteit is
- Je langere ritten maakt
- Comfort en stabiliteit belangrijk zijn
- Budget geen beperking is

## Onze Aanbeveling

Voor de meeste gebruikers raden we de **${productA}** aan vanwege de uitstekende prijs-kwaliteit verhouding en gebruiksgemak. 

Echter, als je regelmatig langere afstanden aflegt of comfort prioriteit heeft, is de **${productB}** de betere keuze ondanks de hogere prijs.

## Waar Te Kopen?

Beide modellen zijn beschikbaar bij VoltMover met:
- Gratis verzending
- 2 jaar garantie
- Professionele service
- 30 dagen retourrecht

---

*Wil je deze E-steps in persoon bekijken? Bezoek een van onze [winkels](/locaties) of bestel online met gratis thuisbezorging.*`
}

async function generateContent() {
  console.log('📝 Genereren van VoltMover content...')
  
  // Genereer blog posts
  console.log('📰 Genereren van blog posts...')
  const blogs: BlogPost[] = []
  const categories = ['E-steps', 'E-bikes', 'Onderhoud', 'Nieuws', 'Gidsen']
  const authors = ['Lisa van der Berg', 'Marco Jansen', 'Sophie de Wit', 'Rick Hendriks', 'Emma Bakker']
  
  for (let i = 0; i < 80; i++) {
    const title = blogTitles[i % blogTitles.length] + (i >= blogTitles.length ? ` ${Math.floor(i / blogTitles.length) + 1}` : '')
    const category = categories[i % categories.length]
    const author = authors[i % authors.length]
    const slug = title.toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim()
    
    blogs.push({
      id: (i + 1).toString(),
      title,
      slug: `${slug}-${i + 1}`,
      excerpt: `Ontdek alles over ${title.toLowerCase()} in deze uitgebreide gids van VoltMover's experts.`,
      content: generateBlogContent(title, category),
      category,
      tags: ['e-mobility', 'elektrisch', 'duurzaam', 'vervoer'],
      author,
      publishedAt: new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000).toISOString(),
      readingTime: Math.floor(Math.random() * 10) + 5,
      image: `/images/blog/blog-${(i % 10) + 1}.jpg`,
      seo: {
        metaTitle: `${title} | VoltMover Blog`,
        metaDescription: `${title} - Ontdek alles wat je moet weten in deze uitgebreide gids van Nederland's #1 E-Mobility specialist.`,
        keywords: ['e-step', 'elektrisch', 'mobiliteit', 'duurzaam', 'nederland']
      }
    })
  }
  
  // Genereer gidsen
  console.log('📖 Genereren van gidsen...')
  const guides: Guide[] = []
  const difficulties = ['Beginner', 'Gemiddeld', 'Gevorderd'] as const
  
  for (let i = 0; i < 40; i++) {
    const title = guideTopics[i % guideTopics.length] + (i >= guideTopics.length ? ` ${Math.floor(i / guideTopics.length) + 1}` : '')
    const difficulty = difficulties[i % difficulties.length]
    const author = authors[i % authors.length]
    const slug = title.toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim()
    
    guides.push({
      id: (i + 1).toString(),
      title,
      slug: `${slug}-${i + 1}`,
      excerpt: `Leer stap-voor-stap hoe je ${title.toLowerCase()} in deze praktische gids.`,
      content: generateGuideContent(title, difficulty),
      difficulty,
      estimatedTime: `${Math.floor(Math.random() * 30) + 15} minuten`,
      category: 'Praktisch',
      tags: ['gids', 'tutorial', 'diy', 'onderhoud'],
      author,
      publishedAt: new Date(Date.now() - Math.random() * 180 * 24 * 60 * 60 * 1000).toISOString(),
      image: `/images/guides/guide-${(i % 8) + 1}.jpg`,
      seo: {
        metaTitle: `${title} | VoltMover Gidsen`,
        metaDescription: `${title} - Stap-voor-stap gids van VoltMover's experts voor optimale resultaten.`,
        keywords: ['gids', 'tutorial', 'e-step', 'onderhoud', 'diy']
      }
    })
  }
  
  // Genereer vergelijkingen
  console.log('⚖️ Genereren van vergelijkingen...')
  const comparisons: Comparison[] = []
  
  for (let i = 0; i < 25; i++) {
    const pair = comparisonPairs[i % comparisonPairs.length]
    const title = `${pair.a} vs ${pair.b}`
    const slug = title.toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim()
    
    comparisons.push({
      id: (i + 1).toString(),
      title,
      slug: `${slug}-${i + 1}`,
      excerpt: `Uitgebreide vergelijking tussen ${pair.a} en ${pair.b} om je te helpen bij de juiste keuze.`,
      content: generateComparisonContent(pair.a, pair.b),
      productA: {
        name: pair.a,
        slug: pair.a.toLowerCase().replace(/\s+/g, '-'),
        image: `/images/products/product-${(i * 2) % 10 + 1}.jpg`
      },
      productB: {
        name: pair.b,
        slug: pair.b.toLowerCase().replace(/\s+/g, '-'),
        image: `/images/products/product-${(i * 2 + 1) % 10 + 1}.jpg`
      },
      winner: Math.random() > 0.5 ? pair.a : pair.b,
      category: 'Vergelijkingen',
      publishedAt: new Date(Date.now() - Math.random() * 90 * 24 * 60 * 60 * 1000).toISOString(),
      author: authors[i % authors.length],
      seo: {
        metaTitle: `${title} | VoltMover Vergelijkingen`,
        metaDescription: `${title} - Welke is beter? Ontdek het in onze uitgebreide vergelijking met alle specs en features.`,
        keywords: ['vergelijking', 'vs', 'e-step', 'review', 'specs']
      }
    })
  }
  
  // Schrijf alle content naar bestanden
  writeFileSync(join(OUTPUT_DIR, 'blogs.json'), JSON.stringify(blogs, null, 2))
  writeFileSync(join(OUTPUT_DIR, 'guides.json'), JSON.stringify(guides, null, 2))
  writeFileSync(join(OUTPUT_DIR, 'comparisons.json'), JSON.stringify(comparisons, null, 2))
  
  // Content statistieken
  const contentStats = {
    totalBlogs: blogs.length,
    totalGuides: guides.length,
    totalComparisons: comparisons.length,
    totalContent: blogs.length + guides.length + comparisons.length,
    blogCategories: [...new Set(blogs.map(b => b.category))].length,
    authors: [...new Set([...blogs.map(b => b.author), ...guides.map(g => g.author)])].length,
    averageReadingTime: Math.round(blogs.reduce((sum, b) => sum + b.readingTime, 0) / blogs.length),
    generatedAt: new Date().toISOString(),
  }
  
  writeFileSync(join(OUTPUT_DIR, 'content-stats.json'), JSON.stringify(contentStats, null, 2))
  
  console.log('\n📊 Content Statistieken:')
  console.log(`   Blog posts: ${contentStats.totalBlogs}`)
  console.log(`   Gidsen: ${contentStats.totalGuides}`)
  console.log(`   Vergelijkingen: ${contentStats.totalComparisons}`)
  console.log(`   Totaal content: ${contentStats.totalContent}`)
  console.log(`   Auteurs: ${contentStats.authors}`)
  console.log(`   Gemiddelde leestijd: ${contentStats.averageReadingTime} minuten`)
  
  console.log('\n🎉 Content succesvol gegenereerd!')
  console.log(`📁 Output directory: ${OUTPUT_DIR}`)
}

// Run het script als het direct wordt uitgevoerd
if (require.main === module) {
  generateContent().catch(console.error)
}

export { generateContent }
