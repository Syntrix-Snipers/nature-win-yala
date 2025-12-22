import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    // Home
    {
      url: 'https://naturewinyala.com',
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://www.naturewinyala.com',
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    // Explore
    {
      url: 'https://naturewinyala.com/explore',
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://www.naturewinyala.com/explore',
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Book Now
    {
      url: 'https://naturewinyala.com/book-now',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.naturewinyala.com/book-now',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}
