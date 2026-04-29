// Purpose: Admin subscription override placeholder.
// Owner: template-admin
// Last updated: 2026-04-29

export default function AdminSubscriptionsPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <div className="rounded-lg border bg-background p-6 shadow-panel">
        <h1 className="text-3xl font-semibold">Subscription overrides</h1>
        <p className="mt-3 text-muted-foreground">
          Use this screen to grant, revoke, and audit manual subscriptions. The API route is scaffolded at
          `/api/admin/subscription-overrides`.
        </p>
      </div>
    </main>
  )
}
