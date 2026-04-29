// Purpose: Usage status placeholder.
// Owner: template-dashboard
// Last updated: 2026-04-29

import { getPageCopy } from '@/lib/i18n/page-copy'

export default async function UsagePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const copy = getPageCopy(locale)

  return (
    <main className="rounded-lg border bg-background p-6 shadow-panel">
      <h1 className="text-3xl font-semibold">{copy.dashboard.usageTitle}</h1>
      <p className="mt-3 text-muted-foreground">
        {copy.dashboard.usageDescription}
      </p>
    </main>
  )
}
