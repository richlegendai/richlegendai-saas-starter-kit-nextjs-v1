// Purpose: Billing history placeholder.
// Owner: template-billing
// Last updated: 2026-04-29

import { CreditCard } from 'lucide-react'
import { ButtonLink } from '@/components/ui/button-link'
import { getPageCopy } from '@/lib/i18n/page-copy'

export default async function BillingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const copy = getPageCopy(locale)

  return (
    <main className="rounded-lg border bg-background p-6 shadow-panel">
      <CreditCard className="h-6 w-6 text-primary" />
      <h1 className="mt-4 text-3xl font-semibold">{copy.dashboard.billingTitle}</h1>
      <p className="mt-3 text-muted-foreground">
        {copy.dashboard.billingDescription}
      </p>
      <ButtonLink className="mt-6" href="/api/checkout">
        {copy.dashboard.checkoutCta}
      </ButtonLink>
    </main>
  )
}
