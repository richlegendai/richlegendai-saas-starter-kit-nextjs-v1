// Purpose: Dashboard shell for authenticated SaaS areas.
// Owner: template-dashboard
// Last updated: 2026-04-29

import Link from 'next/link'
import { getPageCopy } from '@/lib/i18n/page-copy'

export default async function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const copy = getPageCopy(locale)
  const items = [
    { href: `/${locale}/dashboard`, label: copy.dashboard.overview },
    { href: `/${locale}/dashboard/billing`, label: copy.dashboard.billing },
    { href: `/${locale}/dashboard/usage`, label: copy.dashboard.usage },
    { href: `/${locale}/dashboard/account`, label: copy.dashboard.account },
  ]

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="mx-auto grid max-w-6xl gap-6 px-6 py-8 lg:grid-cols-[14rem_1fr]">
        <aside className="rounded-lg border bg-background p-4">
          <Link href={`/${locale}`} className="font-semibold">
            {copy.productName}
          </Link>
          <nav className="mt-6 grid gap-1 text-sm">
            {items.map((item) => (
              <Link key={item.href} className="rounded-md px-3 py-2 hover:bg-muted" href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>
        <section>{children}</section>
      </div>
    </div>
  )
}
