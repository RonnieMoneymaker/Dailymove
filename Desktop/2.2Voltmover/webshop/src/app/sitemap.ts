import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'http://localhost:2002';
  return [
    { url: base + '/', changeFrequency: 'weekly', priority: 1 },
    { url: base + '/producten', changeFrequency: 'weekly', priority: 0.8 },
    { url: base + '/over', changeFrequency: 'monthly', priority: 0.5 },
    { url: base + '/contact', changeFrequency: 'monthly', priority: 0.5 },
  ];
}




