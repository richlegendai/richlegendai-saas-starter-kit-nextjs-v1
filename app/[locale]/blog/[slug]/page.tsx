// Purpose: Localized blog detail page with JSON-LD.
// Owner: template-content
// Last updated: 2026-04-29

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { MarketingFooter } from '@/components/layout/marketing-footer'
import { MarketingHeader } from '@/components/layout/marketing-header'
import { JsonLd } from '@/components/seo/json-ld'
import { getBlogPost, getBlogPosts } from '@/lib/content/blog'
import { buildPageMetadata } from '@/lib/seo/metadata'
import { buildBlogPostingSchema } from '@/lib/seo/schemas'
import { routing } from '@/i18n/routing'

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getBlogPosts(locale).map((post) => ({
      locale,
      slug: post.slug,
    })),
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  const post = getBlogPost(locale, slug)

  if (!post) {
    return {}
  }

  return buildPageMetadata({
    locale,
    path: `blog/${slug}`,
    title: post.title,
    description: post.description,
  })
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  const post = getBlogPost(locale, slug)

  if (!post) {
    notFound()
  }

  return (
    <>
      <MarketingHeader locale={locale} />
      <main className="mx-auto max-w-3xl px-6 py-16">
        <JsonLd data={buildBlogPostingSchema(post, locale)} />
        <p className="text-sm text-muted-foreground">{new Date(post.publishedAt).toLocaleDateString(locale)}</p>
        <h1 className="mt-3 text-4xl font-semibold">{post.title}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{post.description}</p>
        <div className="mt-10 grid gap-5 leading-8">
          {post.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </main>
      <MarketingFooter locale={locale} />
    </>
  )
}
