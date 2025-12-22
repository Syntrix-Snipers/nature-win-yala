import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        crawlDelay: 2,
      },
    ],
    sitemap: [
      'https://naturewinyala.com/sitemap.xml',
      'https://www.naturewinyala.com/sitemap.xml',
    ],
    host: 'https://www.naturewinyala.com',
  };
}
