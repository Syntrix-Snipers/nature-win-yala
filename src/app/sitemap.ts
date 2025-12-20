import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.naturewinyala.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://www.naturewinyala.com/explore',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.naturewinyala.com/about-us',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // Add more pages, e.g., villa details if separate routes
  ];
}
