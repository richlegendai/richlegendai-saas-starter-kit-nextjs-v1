// Purpose: User dashboard overview with integration status.
// Owner: template-dashboard
// Last updated: 2026-04-29

import { StatusGrid } from '@/components/dashboard/status-grid'
import { getPageCopy } from '@/lib/i18n/page-copy'
import { getIntegrationStatus } from '@/lib/env'

export default async function DashboardPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const copy = getPageCopy(locale)

  return (
    <main className="rounded-lg border bg-background p-6 shadow-panel">
      <h1 className="text-3xl font-semibold">{copy.dashboard.title}</h1>
      <p className="mt-3 text-muted-foreground">
        {copy.dashboard.description}
      </p>
      <StatusGrid status={getIntegrationStatus()} />
    </main>
  )
}
