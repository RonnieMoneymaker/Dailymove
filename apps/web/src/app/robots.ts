import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const host = 'https://voltmover.nl'
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: '/admin' },
      { userAgent: '*', disallow: '/api' },
    ],
    sitemap: `${host}/sitemap.xml`,
    host,
  }
}


