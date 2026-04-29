// Purpose: JSON-LD schema builders for SaaS marketing pages and blog posts.
// Owner: template-seo
// Last updated: 2026-04-29

import { getBaseUrl } from '@/lib/site'
import { getPageCopy } from '@/lib/i18n/page-copy'
import type { BlogPost } from '@/lib/content/blog'

export function buildSoftwareApplicationSchema(locale: string) {
  const baseUrl = getBaseUrl()
  const copy = getPageCopy(locale)

  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: copy.productName,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    url: `${baseUrl}/${locale}`,
    description: copy.landing.metadataDescription,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  }
}

export function buildBlogPostingSchema(post: BlogPost, locale: string) {
  const baseUrl = getBaseUrl()
  const copy = getPageCopy(locale)

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    inLanguage: locale,
    url: `${baseUrl}/${locale}/blog/${post.slug}`,
    author: {
      '@type': 'Organization',
      name: copy.productName,
    },
    publisher: {
      '@type': 'Organization',
      name: copy.productName,
    },
  }
}
