export interface Location {
  id: string
  name: string
  slug: string
  province: string
  country: string
  population: number
  description: string
  longDescription: string
  popularProducts: string[]
  localFeatures: string[]
  deliveryTime: string
  hasStore: boolean
  storeAddress?: string
  coordinates: {
    lat: number
    lng: number
  }
}

export const locations: Location[] = [
  // Grote steden
  {
    id: '1',
    name: 'Amsterdam',
    slug: 'amsterdam',
    province: 'Noord-Holland',
    country: 'Nederland',
    population: 872757,
    description: 'Amsterdam is de hoofdstad van Nederland en een van de meest fiets- en E-step vriendelijke steden ter wereld.',
    longDescription: `Amsterdam staat bekend als de fietshoofstad van de wereld, en E-steps passen perfect in het mobiliteitsprofiel van de stad. Met zijn uitgebreide fietspadnetwerk en compacte stadscentrum is Amsterdam de ideale omgeving voor elektrische mobiliteit.

De stad heeft een progressief beleid ten aanzien van elektrische voertuigen en biedt uitstekende infrastructuur voor E-steps en E-bikes. Veel Amsterdammers gebruiken deze voertuigen voor hun dagelijkse woon-werkverkeer en als alternatief voor het openbaar vervoer.

VoltMover levert dagelijks aan honderden klanten in Amsterdam en omgeving. Onze producten zijn perfect geschikt voor de Amsterdamse straten, van de grachten van het centrum tot de moderne wijken in Noord en Zuidoost.`,
    popularProducts: ['Xiaomi Mi Electric Scooter 4 Pro', 'Segway Ninebot MAX G30LP', 'VanMoof S5'],
    localFeatures: [
      'Uitgebreid fietspadnetwerk',
      'E-step vriendelijke wetgeving',
      'Veel oplaadpunten',
      'Compacte afstanden',
      'Goed openbaar vervoer als backup'
    ],
    deliveryTime: 'Vandaag besteld, morgen in huis',
    hasStore: true,
    storeAddress: 'Nieuwezijds Voorburgwal 123, 1012 RJ Amsterdam',
    coordinates: { lat: 52.3676, lng: 4.9041 }
  },
  {
    id: '2',
    name: 'Rotterdam',
    slug: 'rotterdam',
    province: 'Zuid-Holland',
    country: 'Nederland',
    population: 651446,
    description: 'Rotterdam is een moderne havenstad met uitstekende infrastructuur voor elektrische mobiliteit.',
    longDescription: `Rotterdam, de grootste haven van Europa, is een moderne stad die voorop loopt in duurzame mobiliteit. De stad heeft geïnvesteerd in uitstekende infrastructuur voor E-steps en E-bikes, met brede fietspaden en moderne verkeerssystemen.

Als innovatieve stad omarmt Rotterdam nieuwe technologieën en mobiliteitsoplossingen. E-steps zijn hier populair voor zowel woon-werkverkeer als recreatieve ritten langs de Maas en door het moderne stadscentrum.

VoltMover heeft een sterke aanwezigheid in Rotterdam met snelle levering en uitstekende service. Onze producten zijn ideaal voor de Rotterdamse context, van het drukke Centrum tot de rustige wijken in de buitengebieden.`,
    popularProducts: ['Segway Ninebot F2 Pro', 'Kaabo Mantis 8 Pro', 'Gazelle Ultimate C380'],
    localFeatures: [
      'Moderne infrastructuur',
      'Brede fietspaden',
      'Innovatieve verkeerssystemen',
      'Haven en waterfront routes',
      'Duurzaamheidsfocus'
    ],
    deliveryTime: 'Vandaag besteld, morgen in huis',
    hasStore: true,
    storeAddress: 'Coolsingel 456, 3012 AG Rotterdam',
    coordinates: { lat: 52.0907, lng: 4.4777 }
  },
  {
    id: '3',
    name: 'Den Haag',
    slug: 'den-haag',
    province: 'Zuid-Holland',
    country: 'Nederland',
    population: 548320,
    description: 'Den Haag, de politieke hoofdstad, combineert historie met moderne mobiliteitsoplossingen.',
    longDescription: `Den Haag, zetel van de Nederlandse regering en internationale organisaties, is een stad die traditie combineert met innovatie. De stad heeft een uitgebreid netwerk van fietspaden en is zeer geschikt voor E-steps en E-bikes.

Met zijn mix van historische wijken, moderne kantoorgebieden en de nabijheid van de kust, biedt Den Haag diverse scenario's voor elektrische mobiliteit. Veel ambtenaren en internationale professionals gebruiken E-steps voor hun dagelijkse verplaatsingen.

VoltMover serveert de Haagse markt met een breed assortiment dat past bij de diverse behoeften van de stad. Van compacte modellen voor het stadscentrum tot krachtige E-bikes voor ritten naar Scheveningen.`,
    popularProducts: ['Pure Air Pro', 'Xiaomi Mi Electric Scooter 3', 'VanMoof X3'],
    localFeatures: [
      'Politieke en internationale sfeer',
      'Historisch centrum',
      'Nabijheid van strand',
      'Goede verbindingen',
      'Diverse wijken'
    ],
    deliveryTime: 'Vandaag besteld, morgen in huis',
    hasStore: false,
    coordinates: { lat: 52.0705, lng: 4.3007 }
  },
  {
    id: '4',
    name: 'Utrecht',
    slug: 'utrecht',
    province: 'Utrecht',
    country: 'Nederland',
    population: 361699,
    description: 'Utrecht is het hart van Nederland met een compact centrum perfect voor E-steps en E-bikes.',
    longDescription: `Utrecht, gelegen in het hart van Nederland, is een compacte universitetsstad met een rijke geschiedenis en een jong, dynamisch karakter. De stad is bijzonder geschikt voor elektrische mobiliteit dankzij zijn compacte opzet en uitstekende infrastructuur.

Het historische centrum met zijn unieke werfkelders en de moderne Uithof campus maken Utrecht tot een diverse stad waar E-steps en E-bikes uitstekend functioneren. De stad investeert actief in duurzame mobiliteit en heeft een van de beste fietsinfrastructuren van Nederland.

VoltMover heeft veel klanten in Utrecht, van studenten tot professionals. Onze producten zijn perfect geschikt voor de korte afstanden in de stad en de verbindingen tussen verschillende wijken en de universiteit.`,
    popularProducts: ['Xiaomi Mi Electric Scooter 4 Pro', 'Inokim Quick 4', 'Gazelle CityZen C8'],
    localFeatures: [
      'Compact stadscentrum',
      'Universitaire atmosfeer',
      'Uitstekende fietsinfrastructuur',
      'Centraal gelegen',
      'Jong en dynamisch'
    ],
    deliveryTime: 'Vandaag besteld, morgen in huis',
    hasStore: true,
    storeAddress: 'Vredenburg 789, 3511 BD Utrecht',
    coordinates: { lat: 52.0907, lng: 5.1214 }
  },
  {
    id: '5',
    name: 'Eindhoven',
    slug: 'eindhoven',
    province: 'Noord-Brabant',
    country: 'Nederland',
    population: 234456,
    description: 'Eindhoven, de technologiestad van Nederland, omarmt innovatieve mobiliteitsoplossingen.',
    longDescription: `Eindhoven staat bekend als de technologiehoofstad van Nederland en de geboorteplaats van Philips. Deze innovatieve stad omarmt nieuwe technologieën, inclusief elektrische mobiliteit, met open armen.

Met zijn focus op technologie en innovatie is Eindhoven een ideale omgeving voor E-steps en E-bikes. De stad heeft geïnvesteerd in slimme verkeerssystemen en duurzame mobiliteitsoplossingen die perfect aansluiten bij de high-tech industrie.

VoltMover heeft een sterke aanwezigheid in Eindhoven, waar onze technologisch geavanceerde producten perfect passen bij de innovatieve geest van de stad. Van de TU/e campus tot het stadscentrum en de high-tech bedrijven.`,
    popularProducts: ['Segway Ninebot MAX G30LP', 'Kaabo Mantis 8 Pro', 'Dualtron Mini'],
    localFeatures: [
      'Technologie en innovatie focus',
      'High-tech industrie',
      'Moderne infrastructuur',
      'Universitaire campus',
      'Duurzaamheidsinitiatieven'
    ],
    deliveryTime: 'Vandaag besteld, morgen in huis',
    hasStore: false,
    coordinates: { lat: 51.4416, lng: 5.4697 }
  },
  {
    id: '6',
    name: 'Tilburg',
    slug: 'tilburg',
    province: 'Noord-Brabant',
    country: 'Nederland',
    population: 219800,
    description: 'Tilburg is een levendige studentenstad met groeiende interesse in elektrische mobiliteit.',
    longDescription: `Tilburg is een dynamische stad in het hart van Noord-Brabant, bekend om zijn universiteit en levendige cultuurscene. De stad heeft de afgelopen jaren flink geïnvesteerd in duurzame mobiliteit en fietsinfrastructuur.

Met zijn mix van studenten, professionals en gezinnen biedt Tilburg een diverse markt voor elektrische mobiliteit. De stad is compact genoeg voor E-steps maar heeft ook uitstekende verbindingen naar omliggende gebieden die ideaal zijn voor E-bikes.

VoltMover serveert de Tilburgse markt met producten die passen bij de diverse behoeften van de stad. Van betaalbare modellen voor studenten tot premium E-bikes voor professionals en gezinnen.`,
    popularProducts: ['Pure Air Pro', 'Xiaomi Mi Electric Scooter 3', 'Gazelle Arroyo C8'],
    localFeatures: [
      'Universitaire atmosfeer',
      'Culturele diversiteit',
      'Groeiende fietsinfrastructuur',
      'Centrale ligging Brabant',
      'Mix van bewoners'
    ],
    deliveryTime: 'Vandaag besteld, morgen in huis',
    hasStore: false,
    coordinates: { lat: 51.5656, lng: 5.0913 }
  },
  // Meer steden...
]

// Functie om meer Nederlandse locaties te genereren
export const generateMoreLocations = (count: number): Location[] => {
  const baseLocations = locations
  const additionalLocations: Location[] = []
  
  const dutchCities = [
    { name: 'Groningen', province: 'Groningen', population: 233273 },
    { name: 'Almere', province: 'Flevoland', population: 214715 },
    { name: 'Breda', province: 'Noord-Brabant', population: 184403 },
    { name: 'Nijmegen', province: 'Gelderland', population: 177659 },
    { name: 'Enschede', province: 'Overijssel', population: 158986 },
    { name: 'Apeldoorn', province: 'Gelderland', population: 164222 },
    { name: 'Haarlem', province: 'Noord-Holland', population: 162961 },
    { name: 'Amersfoort', province: 'Utrecht', population: 157279 },
    { name: 'Zaanstad', province: 'Noord-Holland', population: 156901 },
    { name: 'Haarlemmermeer', province: 'Noord-Holland', population: 156039 },
    { name: 'Arnhem', province: 'Gelderland', population: 161368 },
    { name: 'Zoetermeer', province: 'Zuid-Holland', population: 125283 },
    { name: 'Zwolle', province: 'Overijssel', population: 130592 },
    { name: 'Maastricht', province: 'Limburg', population: 121558 },
    { name: 'Dordrecht', province: 'Zuid-Holland', population: 119300 },
    { name: 'Leiden', province: 'Zuid-Holland', population: 125174 },
    { name: 'Alphen aan den Rijn', province: 'Zuid-Holland', population: 111889 },
    { name: 'Emmen', province: 'Drenthe', population: 107055 },
    { name: 'Deventer', province: 'Overijssel', population: 100718 },
    { name: 'Leeuwarden', province: 'Friesland', population: 124058 },
    { name: 'Alkmaar', province: 'Noord-Holland', population: 109896 },
    { name: 'Hilversum', province: 'Noord-Holland', population: 92407 },
    { name: 'Oss', province: 'Noord-Brabant', population: 91932 },
    { name: 'Roosendaal', province: 'Noord-Brabant', population: 77226 },
    { name: 'Purmerend', province: 'Noord-Holland', population: 81233 },
  ]
  
  for (let i = baseLocations.length; i < count && i - baseLocations.length < dutchCities.length; i++) {
    const cityData = dutchCities[i - baseLocations.length]
    
    additionalLocations.push({
      id: (i + 1).toString(),
      name: cityData.name,
      slug: cityData.name.toLowerCase().replace(/\s+/g, '-'),
      province: cityData.province,
      country: 'Nederland',
      population: cityData.population,
      description: `${cityData.name} is een mooie stad in ${cityData.province} waar VoltMover graag levert.`,
      longDescription: `${cityData.name} is een levendige stad in de provincie ${cityData.province}. Met ${cityData.population} inwoners biedt de stad uitstekende mogelijkheden voor elektrische mobiliteit. VoltMover levert hier dagelijks aan tevreden klanten die kiezen voor duurzame en efficiënte vervoersoplossingen.

De stad heeft goede infrastructuur voor E-steps en E-bikes, met groeiende acceptatie van elektrische mobiliteit onder de bevolking. Onze producten zijn perfect geschikt voor de lokale omstandigheden en behoeften.`,
      popularProducts: ['Xiaomi Mi Electric Scooter 4 Pro', 'Segway Ninebot F2 Pro', 'Pure Air Pro'],
      localFeatures: [
        'Groeiende e-mobility acceptatie',
        'Goede infrastructuur',
        'Diverse bevolking',
        'Lokale service beschikbaar'
      ],
      deliveryTime: i < 20 ? 'Vandaag besteld, morgen in huis' : 'Binnen 2 werkdagen geleverd',
      hasStore: Math.random() > 0.8,
      storeAddress: Math.random() > 0.8 ? `Hoofdstraat ${Math.floor(Math.random() * 500) + 1}, ${cityData.name}` : undefined,
      coordinates: {
        lat: 52.0 + Math.random() * 1.5,
        lng: 4.0 + Math.random() * 3.0
      }
    })
  }
  
  return [...baseLocations, ...additionalLocations]
}
