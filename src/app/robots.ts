import type { MetadataRoute } from 'next'

const SITE = 'https://coi-viet.vercel.app'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
    ],
    sitemap: `${SITE}/sitemap.xml`,
  }
}
