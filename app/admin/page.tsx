// Purpose: Admin dashboard overview.
// Owner: template-admin
// Last updated: 2026-04-29

import Link from 'next/link'
import { StatusGrid } from '@/components/dashboard/status-grid'
import { getIntegrationStatus } from '@/lib/env'

export default function AdminPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <div className="rounded-lg border bg-background p-6 shadow-panel">
        <h1 className="text-3xl font-semibold">Admin</h1>
        <p className="mt-3 text-muted-foreground">
          Add password or Clerk role protection before exposing this route outside local development.
        </p>
        <div className="mt-6 flex flex-wrap gap-3 text-sm">
          <Link className="rounded-md border px-3 py-2 hover:bg-muted" href="/admin/subscriptions">
            Subscription overrides
          </Link>
          <Link className="rounded-md border px-3 py-2 hover:bg-muted" href="/admin/webhooks">
            Webhook status
          </Link>
        </div>
        <StatusGrid status={getIntegrationStatus()} />
      </div>
    </main>
  )
}
