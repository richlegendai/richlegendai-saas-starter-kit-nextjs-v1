// Purpose: Public SaaS landing page.
// Owner: template-marketing
// Last updated: 2026-04-29

import type { Metadata } from 'next'
import { ArrowRight, BarChart3, CreditCard, Database, LockKeyhole, Search, ShieldCheck } from 'lucide-react'
import { BaseDialogDemo } from '@/components/base-ui/base-dialog-demo'
import { MarketingFooter } from '@/components/layout/marketing-footer'
import { MarketingHeader } from '@/components/layout/marketing-header'
import { ButtonLink } from '@/components/ui/button-link'
import { getPageCopy } from '@/lib/i18n/page-copy'
import { FeatureCard } from '@/components/ui/feature-card'
import { buildPageMetadata } from '@/lib/seo/metadata'
import { JsonLd } from '@/components/seo/json-ld'
import { buildSoftwareApplicationSchema } from '@/lib/seo/schemas'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const copy = getPageCopy(locale)

  return buildPageMetadata({
    locale,
    path: '',
    title: copy.landing.metadataTitle,
    description: copy.landing.metadataDescription,
  })
}

const featureIcons = [LockKeyhole, CreditCard, Database, Search, BarChart3, ShieldCheck]

export default async function LandingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const copy = getPageCopy(locale)
  const features = copy.features.map(([title, description], index) => ({
    icon: featureIcons[index],
    title,
    description,
  }))

  return (
    <>
      <JsonLd data={buildSoftwareApplicationSchema(locale)} />
      <MarketingHeader locale={locale} />
      <main>
        <section className="border-b bg-muted/40">
          <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl items-center gap-10 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="mb-4 inline-flex rounded-md border bg-background px-3 py-1 text-sm text-muted-foreground">
                {copy.landing.eyebrow}
              </p>
              <h1 className="max-w-4xl text-5xl font-semibold tracking-normal text-foreground sm:text-6xl">
                {copy.landing.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                {copy.landing.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href={`/${locale}/sign-up`}>
                  {copy.landing.primaryCta}
                  <ArrowRight className="h-4 w-4" />
                </ButtonLink>
                <ButtonLink href={`/${locale}/pricing`} variant="secondary">
                  {copy.landing.secondaryCta}
                </ButtonLink>
              </div>
            </div>
            <div className="rounded-lg border bg-background p-4 shadow-panel">
              <div className="grid gap-3">
                {features.slice(0, 4).map((feature) => (
                  <div key={feature.title} className="flex items-start gap-3 rounded-md border bg-muted/40 p-4">
                    <feature.icon className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <h2 className="text-base font-semibold">{feature.title}</h2>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-4 md:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </section>
        <section className="border-y bg-muted/30">
          <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold">{copy.landing.baseUiTitle}</h2>
              <p className="mt-4 text-muted-foreground">
                {copy.landing.baseUiDescription}
              </p>
            </div>
            <BaseDialogDemo locale={locale} />
          </div>
        </section>
      </main>
      <MarketingFooter locale={locale} />
    </>
  )
}
