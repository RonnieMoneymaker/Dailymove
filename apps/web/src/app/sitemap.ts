import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://ronniewebsite.com'
  
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: 'daily' as const, priority: 1 },
    { url: `${base}/shop/e-steps`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${base}/shop/elektrische-fietsen`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${base}/shop/accessoires`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${base}/shop/onderdelen`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${base}/services`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${base}/over-ons`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.5 },
  ]

  // Product pages (mock data)
  const productPages: MetadataRoute.Sitemap = [
    { url: `${base}/product/xiaomi-mi-electric-scooter-4-pro`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${base}/product/segway-ninebot-max-g30lp`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${base}/product/kaabo-mantis-8-pro`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${base}/product/pure-air-pro`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
  ]

  // Brand pages
  const brandPages: MetadataRoute.Sitemap = [
    { url: `${base}/brands/xiaomi`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${base}/brands/segway`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${base}/brands/kaabo`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${base}/brands/pure`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
  ]

  // Location pages (sample)
  const locationPages: MetadataRoute.Sitemap = [
    { url: `${base}/locatie/nederland/amsterdam`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${base}/locatie/nederland/rotterdam`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${base}/locatie/nederland/den-haag`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${base}/locatie/nederland/utrecht`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
  ]

  return [
    ...staticPages,
    ...productPages,
    ...brandPages,
    ...locationPages,
  ]
}


