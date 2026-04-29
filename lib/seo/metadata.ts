// Purpose: Shared Metadata API helpers for localized public pages.
// Owner: template-seo
// Last updated: 2026-04-29

import type { Metadata } from 'next'
import { getPageCopy } from '@/lib/i18n/page-copy'
import { getBaseUrl, siteConfig } from '@/lib/site'

type MetadataInput = {
  locale: string
  path: string
  title: string
  description: string
}

export function buildPageMetadata({ locale, path, title, description }: MetadataInput): Metadata {
  const baseUrl = getBaseUrl()
  const copy = getPageCopy(locale)
  const pathname = path ? `/${locale}/${path}` : `/${locale}`
  const url = `${baseUrl}${pathname}`

  return {
    title: {
      absolute: `${title} | ${copy.productName}`,
    },
    description,
    alternates: {
      canonical: url,
      languages: Object.fromEntries(siteConfig.locales.map((item) => [item, `${baseUrl}/${item}/${path}`.replace(/\/$/, '')])),
    },
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      siteName: copy.productName,
      locale,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}
