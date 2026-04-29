// Purpose: Admin webhook status placeholder.
// Owner: template-admin
// Last updated: 2026-04-29

export default function AdminWebhooksPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <div className="rounded-lg border bg-background p-6 shadow-panel">
        <h1 className="text-3xl font-semibold">Webhook status</h1>
        <p className="mt-3 text-muted-foreground">
          Verify Clerk and Polar webhook deliveries, signature failures, and subscription sync results here.
        </p>
      </div>
    </main>
  )
}
