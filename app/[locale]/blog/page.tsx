// Purpose: Localized blog index for content marketing.
// Owner: template-content
// Last updated: 2026-04-29

import type { Metadata } from 'next'
import Link from 'next/link'
import { MarketingFooter } from '@/components/layout/marketing-footer'
import { MarketingHeader } from '@/components/layout/marketing-header'
import { getPageCopy } from '@/lib/i18n/page-copy'
import { buildPageMetadata } from '@/lib/seo/metadata'
import { getBlogPosts } from '@/lib/content/blog'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const copy = getPageCopy(locale)
  return buildPageMetadata({
    locale,
    path: 'blog',
    title: copy.blog.title,
    description: copy.blog.description,
  })
}

export default async function BlogIndexPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const copy = getPageCopy(locale)
  const posts = getBlogPosts(locale)

  return (
    <>
      <MarketingHeader locale={locale} />
      <main className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="text-4xl font-semibold">{copy.blog.title}</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          {copy.blog.description}
        </p>
        <div className="mt-10 grid gap-4">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/${locale}/blog/${post.slug}`}
              className="block rounded-lg border bg-background p-6 transition hover:border-primary hover:shadow-panel focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <p className="text-sm text-muted-foreground">{new Date(post.publishedAt).toLocaleDateString(locale)}</p>
              <h2 className="mt-2 text-2xl font-semibold">{post.title}</h2>
              <p className="mt-3 text-muted-foreground">{post.description}</p>
            </Link>
          ))}
        </div>
      </main>
      <MarketingFooter locale={locale} />
    </>
  )
}
