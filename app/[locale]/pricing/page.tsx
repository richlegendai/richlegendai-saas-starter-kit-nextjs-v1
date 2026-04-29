// Purpose: Public pricing page with Polar-ready checkout links.
// Owner: template-billing
// Last updated: 2026-04-29

import type { Metadata } from 'next'
import { Check } from 'lucide-react'
import { MarketingFooter } from '@/components/layout/marketing-footer'
import { MarketingHeader } from '@/components/layout/marketing-header'
import { ButtonLink } from '@/components/ui/button-link'
import { getPageCopy } from '@/lib/i18n/page-copy'
import { buildPageMetadata } from '@/lib/seo/metadata'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const copy = getPageCopy(locale)
  return buildPageMetadata({
    locale,
    path: 'pricing',
    title: copy.nav.pricing,
    description: copy.pricing.description,
  })
}

export default async function PricingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const copy = getPageCopy(locale)
  const tiers = [
    {
      name: copy.pricing.tiers[0][0],
      price: '$0',
      href: `/${locale}/sign-up`,
      features: copy.pricing.tiers[0][1],
    },
    {
      name: copy.pricing.tiers[1][0],
      price: '$19',
      href: '/api/checkout',
      features: copy.pricing.tiers[1][1],
    },
  ]

  return (
    <>
      <MarketingHeader locale={locale} />
      <main className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-semibold">{copy.pricing.title}</h1>
          <p className="mt-4 text-muted-foreground">
            {copy.pricing.description}
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {tiers.map((tier) => (
            <section key={tier.name} className="rounded-lg border bg-background p-6 shadow-panel">
              <h2 className="text-2xl font-semibold">{tier.name}</h2>
              <p className="mt-3 text-4xl font-semibold">{tier.price}</p>
              <p className="text-sm text-muted-foreground">{copy.pricing.perMonth}</p>
              <ul className="mt-6 grid gap-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-2 text-sm">
                    <Check className="h-5 w-5 text-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
              <ButtonLink className="mt-6 w-full justify-center" href={tier.href}>
                {copy.pricing.choose} {tier.name}
              </ButtonLink>
            </section>
          ))}
        </div>
      </main>
      <MarketingFooter locale={locale} />
    </>
  )
}
