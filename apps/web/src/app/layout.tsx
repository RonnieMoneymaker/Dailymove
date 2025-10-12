import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://ronniewebsite.com'),
  title: 'Ronnie Website - Premium E-Steps & E-Bikes Worldwide | Free Shipping | 2 Year Warranty',
  description: 'Shop e-scooters & e-bikes at Ronnie Website ⚡ Largest collection worldwide ✓ Free shipping ✓ 2 year warranty ✓ 30 day return ✓ 4.9/5 stars. Order today = ride tomorrow!',
  keywords: [
    'e-step kopen',
    'elektrische step',
    'e-bike kopen',
    'elektrische fiets',
    'xiaomi e-step',
    'segway e-step',
    'vanmoof e-bike',
    'e-step nederland',
    'goedkope e-step',
    'beste e-step 2024',
    'e-step sale',
    'elektrische step kopen',
    'e-mobility',
  ],
  authors: [{ name: 'Ronnie Website' }],
  creator: 'Ronnie Website',
  publisher: 'Ronnie Website',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ronniewebsite.com',
    siteName: 'Ronnie Website',
    title: 'Ronnie Website - Premium E-Steps & E-Bikes | #1 Worldwide',
    description: 'Largest collection e-scooters & e-bikes ✓ Free shipping ✓ 2 year warranty ✓ 4.9/5 stars ✓ Order today = ride tomorrow',
    images: [
      {
        url: 'https://ronniewebsite.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ronnie Website - Premium E-mobility Worldwide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ronnie Website - Premium E-Steps & E-Bikes Worldwide',
    description: 'Largest collection e-scooters & e-bikes ✓ Free shipping ✓ 2 year warranty ✓ 4.9/5 stars',
    images: ['https://ronniewebsite.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://ronniewebsite.com',
    languages: {
      'en': 'https://ronniewebsite.com',
      'nl-NL': 'https://ronniewebsite.com/nl',
      'de-DE': 'https://ronniewebsite.com/de',
      'fr-FR': 'https://ronniewebsite.com/fr',
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <head>
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Ronnie Website',
              url: 'https://ronniewebsite.com',
              logo: 'https://ronniewebsite.com/logo.png',
              description: 'Premium E-mobility specialist - E-scooters, E-bikes & Accessories Worldwide',
              sameAs: [
                'https://www.facebook.com/ronniewebsite',
                'https://www.instagram.com/ronniewebsite',
                'https://twitter.com/ronniewebsite',
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+31-6-12345678',
                contactType: 'Customer Service',
                areaServed: 'NL',
                availableLanguage: ['Dutch', 'English', 'German'],
              },
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'NL',
                addressLocality: 'Amsterdam',
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                reviewCount: '25000',
                bestRating: '5',
                worstRating: '1',
              },
            }),
          }}
        />

        {/* Structured Data - WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Ronnie Website',
              url: 'https://ronniewebsite.com',
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://ronniewebsite.com/search?q={search_term_string}',
                },
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />

        {/* Structured Data - LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Store',
              name: 'Ronnie Website',
              image: 'https://ronniewebsite.com/store-image.jpg',
              '@id': 'https://ronniewebsite.com',
              url: 'https://ronniewebsite.com',
              telephone: '+31612345678',
              priceRange: '€€',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Voorbeeldstraat 123',
                addressLocality: 'Amsterdam',
                postalCode: '1012 AB',
                addressCountry: 'NL',
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '09:00',
                  closes: '18:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Saturday',
                  opens: '10:00',
                  closes: '17:00',
                },
              ],
            }),
          }}
        />

        {/* Preconnect voor snelheid */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="min-h-screen bg-white antialiased">
        {children}
        
        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'Hoe snel wordt mijn bestelling geleverd?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Bestellingen voor 23:00 besteld worden de volgende werkdag geleverd in heel Nederland. Gratis verzending vanaf €50.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'Kan ik mijn e-step of e-bike retourneren?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Ja, je hebt 30 dagen bedenktijd. Niet tevreden? Dan krijg je je geld terug, geen vragen gesteld.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'Welke garantie krijg ik?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Alle producten hebben minimaal 2 jaar fabrieksgarantie. Sommige merken bieden zelfs 3 jaar garantie.'
                  }
                },
                {
                  '@type': 'Question',
                  name: 'Welke betaalmethoden accepteren jullie?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'We accepteren iDEAL, Visa, Mastercard, PayPal en diverse andere betaalmethoden. Betalen is 100% veilig.'
                  }
                }
              ]
            })
          }}
        />

        {/* Chat Widget */}
        <div className="fixed bottom-6 right-6 z-50">
          <a 
            href="https://wa.me/31612345678"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-4 bg-green-500 text-white rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110 font-bold"
          >
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            <span>Chat nu!</span>
          </a>
        </div>
      </body>
    </html>
  )
}
