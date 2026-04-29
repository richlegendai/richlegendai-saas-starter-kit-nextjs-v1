// Purpose: Generate localized public sitemap entries.
// Owner: template-seo
// Last updated: 2026-04-29

import type { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/content/blog'
import { getBaseUrl } from '@/lib/site'
import { routing } from '@/i18n/routing'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseUrl()
  const staticPaths = ['', 'pricing', 'blog', 'design-system', 'privacy', 'terms', 'sign-up']

  const staticEntries = routing.locales.flatMap((locale) =>
    staticPaths.map((path) => ({
      url: `${baseUrl}/${locale}${path ? `/${path}` : ''}`,
      lastModified: new Date(),
      changeFrequency: path === '' ? ('weekly' as const) : ('monthly' as const),
      priority: path === '' ? 1 : 0.7,
    })),
  )

  const blogEntries = blogPosts.map((post) => ({
    url: `${baseUrl}/${post.locale}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticEntries, ...blogEntries]
}
