// Purpose: Search engine crawl rules for public and private routes.
// Owner: template-seo
// Last updated: 2026-04-29

import type { MetadataRoute } from 'next'
import { getBaseUrl } from '@/lib/site'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = getBaseUrl()

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/api', '/*/dashboard'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
