// Purpose: RSS feed for localized blog seed content.
// Owner: template-content
// Last updated: 2026-04-29

import { NextResponse } from 'next/server'
import { getBlogPosts } from '@/lib/content/blog'
import { getBaseUrl, siteConfig } from '@/lib/site'

function escapeXml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

export async function GET(_request: Request, { params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const baseUrl = getBaseUrl()
  const posts = getBlogPosts(locale)
  const items = posts
    .map((post) => {
      const url = `${baseUrl}/${locale}/blog/${post.slug}`
      return `
        <item>
          <title>${escapeXml(post.title)}</title>
          <description>${escapeXml(post.description)}</description>
          <link>${url}</link>
          <guid>${url}</guid>
          <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
        </item>`
    })
    .join('')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0">
      <channel>
        <title>${escapeXml(siteConfig.name)}</title>
        <description>${escapeXml(siteConfig.description)}</description>
        <link>${baseUrl}/${locale}/blog</link>
        ${items}
      </channel>
    </rss>`

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
    },
  })
}
