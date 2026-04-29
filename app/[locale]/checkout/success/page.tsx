// Purpose: Checkout success page after Polar payment flow.
// Owner: template-billing
// Last updated: 2026-04-29

import { CheckCircle2 } from 'lucide-react'
import { ButtonLink } from '@/components/ui/button-link'
import { getPageCopy } from '@/lib/i18n/page-copy'

export default async function CheckoutSuccessPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const copy = getPageCopy(locale)

  return (
    <main className="mx-auto grid min-h-screen max-w-2xl place-items-center px-6 py-16 text-center">
      <div>
        <CheckCircle2 className="mx-auto h-12 w-12 text-accent" />
        <h1 className="mt-6 text-4xl font-semibold">{copy.checkout.title}</h1>
        <p className="mt-4 text-muted-foreground">
          {copy.checkout.description}
        </p>
        <ButtonLink className="mt-8" href={`/${locale}/dashboard`}>
          {copy.checkout.cta}
        </ButtonLink>
      </div>
    </main>
  )
}
