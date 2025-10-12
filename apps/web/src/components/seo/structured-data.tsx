export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DailyMove",
    "alternateName": "DailyMove Nederland",
    "url": "https://dailymove.nl",
    "logo": "https://dailymove.nl/logo.png",
    "description": "Nederland's #1 E-step specialist met 15.000+ tevreden klanten. Premium E-steps, elektrische fietsen en accessoires met 2 jaar garantie.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Hoofdstraat 123",
      "addressLocality": "Amsterdam",
      "postalCode": "1012 AB",
      "addressCountry": "NL"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+31-20-123-4567",
      "contactType": "customer service",
      "availableLanguage": "Dutch",
      "areaServed": "NL"
    },
    "sameAs": [
      "https://facebook.com/dailymove.nl",
      "https://instagram.com/dailymove.nl",
      "https://twitter.com/dailymove_nl",
      "https://linkedin.com/company/dailymove"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "2847",
      "bestRating": "5",
      "worstRating": "1"
    }
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "DailyMove",
    "url": "https://dailymove.nl",
    "description": "Nederland's #1 E-step specialist. Koop premium E-steps met gratis verzending, 2 jaar garantie en 24u levering.",
    "publisher": {
      "@type": "Organization",
      "name": "DailyMove"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://dailymove.nl/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Store",
    "name": "DailyMove",
    "image": "https://dailymove.nl/store-image.jpg",
    "description": "Nederland's #1 E-step specialist met fysieke showroom en online webshop.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Hoofdstraat 123",
      "addressLocality": "Amsterdam",
      "postalCode": "1012 AB",
      "addressCountry": "NL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 52.3676,
      "longitude": 4.9041
    },
    "url": "https://dailymove.nl",
    "telephone": "+31-20-123-4567",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday", 
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "10:00",
        "closes": "17:00"
      }
    ],
    "priceRange": "€€",
    "paymentAccepted": ["Cash", "Credit Card", "iDEAL", "PayPal", "Klarna"],
    "currenciesAccepted": "EUR",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "2847"
    }
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://dailymove.nl"
      }
    ]
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Hoe snel wordt mijn E-step geleverd?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bij bestelling voor 23:59 wordt je E-step de volgende werkdag gratis thuisbezorgd. We werken samen met betrouwbare koeriers voor een veilige levering."
        }
      },
      {
        "@type": "Question",
        "name": "Welke garantie krijg ik op mijn E-step?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Alle E-steps komen met 2 jaar volledige garantie. Dit dekt zowel onderdelen als reparaties. Daarnaast bieden we 30 dagen retourrecht als je niet 100% tevreden bent."
        }
      },
      {
        "@type": "Question",
        "name": "Zijn jullie E-steps toegestaan op de openbare weg?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, alle onze E-steps voldoen aan de Nederlandse wetgeving. Ze hebben een maximumsnelheid van 25 km/h en zijn voorzien van de vereiste verlichting en reflectoren."
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </>
  )
}


