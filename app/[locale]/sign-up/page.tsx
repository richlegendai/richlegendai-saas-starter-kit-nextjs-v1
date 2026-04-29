// Purpose: Sign-up entry page that points to Clerk when configured.
// Owner: template-auth
// Last updated: 2026-04-29

import type { Metadata } from 'next'
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
    path: 'sign-up',
    title: copy.signup.title,
    description: copy.signup.description,
  })
}

export default async function SignUpPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const copy = getPageCopy(locale)
  const signUpUrl = process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL || `/${locale}/dashboard`

  return (
    <>
      <MarketingHeader locale={locale} />
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-4xl font-semibold">{copy.signup.title}</h1>
        <p className="mt-4 text-muted-foreground">
          {copy.signup.description}
        </p>
        <ButtonLink className="mt-8" href={signUpUrl}>
          {copy.signup.cta}
        </ButtonLink>
      </main>
    </>
  )
}
