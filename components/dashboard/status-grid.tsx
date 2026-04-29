// Purpose: Integration status grid shared by dashboard and admin pages.
// Owner: template-dashboard
// Last updated: 2026-04-29

import type { IntegrationStatus } from '@/lib/env'

export function StatusGrid({ status }: { status: IntegrationStatus[] }) {
  return (
    <div className="mt-8 grid gap-3 md:grid-cols-2">
      {status.map((item) => (
        <div key={item.name} className="rounded-lg border bg-background p-4">
          <div className="flex items-center justify-between gap-4">
            <h2 className="font-semibold">{item.name}</h2>
            <span
              className={
                item.configured
                  ? 'rounded-md bg-accent/10 px-2 py-1 text-xs font-medium text-accent'
                  : 'rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground'
              }
            >
              {item.configured ? 'Configured' : 'Missing'}
            </span>
          </div>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p>
        </div>
      ))}
    </div>
  )
}
