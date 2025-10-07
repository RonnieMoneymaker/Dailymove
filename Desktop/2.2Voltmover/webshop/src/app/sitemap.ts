import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://emovement.nl';
  
  // Static pages
  const staticPages = [
    { url: base + '/', changeFrequency: 'daily' as const, priority: 1, lastModified: new Date() },
    { url: base + '/producten', changeFrequency: 'daily' as const, priority: 0.9, lastModified: new Date() },
    { url: base + '/over', changeFrequency: 'monthly' as const, priority: 0.6, lastModified: new Date() },
    { url: base + '/contact', changeFrequency: 'monthly' as const, priority: 0.6, lastModified: new Date() },
    { url: base + '/winkelwagen', changeFrequency: 'weekly' as const, priority: 0.5, lastModified: new Date() },
    { url: base + '/afrekenen', changeFrequency: 'weekly' as const, priority: 0.5, lastModified: new Date() },
  ];
  
  // Product pages (example - in real app, fetch from database)
  const productPages = [1, 2, 3, 4, 5, 6].map(id => ({
    url: `${base}/producten/${id}`,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
    lastModified: new Date(),
  }));
  
  return [...staticPages, ...productPages];
}




