import type { MetadataRoute } from 'next'
import { getAllVanKhan, CATEGORY_META } from '@/lib/content'

const SITE = 'https://coi-viet.vercel.app'

function parseReviewDate(raw: string | undefined, fallback: Date): Date {
  if (!raw) return fallback
  const parts = raw.split('/')
  if (parts.length !== 3) return fallback
  const d = new Date(parts.reverse().join('-'))
  return isNaN(d.getTime()) ? fallback : d
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE}/`, lastModified: now, priority: 1.0, changeFrequency: 'weekly' },
    ...Object.keys(CATEGORY_META).map((slug) => ({
      url: `${SITE}/${slug}`,
      lastModified: now,
      priority: 0.7,
      changeFrequency: 'monthly' as const,
    })),
  ]

  const vanKhanRoutes: MetadataRoute.Sitemap = getAllVanKhan().map((entry) => ({
    url: `${SITE}/van-khan/${entry.frontmatter.slug}`,
    lastModified: parseReviewDate(entry.frontmatter.lastReviewed, now),
    priority: 0.8,
    changeFrequency: 'monthly',
  }))

  return [...staticRoutes, ...vanKhanRoutes]
}
