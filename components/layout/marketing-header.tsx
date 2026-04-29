// Purpose: Shared public navigation for marketing pages.
// Owner: template-marketing
// Last updated: 2026-04-29

import Link from 'next/link'
import { LayoutDashboard } from 'lucide-react'
import { ButtonLink } from '@/components/ui/button-link'
import { LocaleSwitcher } from '@/components/ui/locale-switcher'
import { getPageCopy } from '@/lib/i18n/page-copy'

export function MarketingHeader({ locale }: { locale: string }) {
  const copy = getPageCopy(locale)
  const items = [
    { href: `/${locale}/pricing`, label: copy.nav.pricing },
    { href: `/${locale}/blog`, label: copy.nav.blog },
    { href: `/${locale}/design-system`, label: copy.nav.designSystem },
    { href: `/${locale}/privacy`, label: copy.nav.privacy, newTab: true },
  ]

  return (
    <header className="sticky top-0 z-30 border-b bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href={`/${locale}`} className="font-semibold">
          {copy.productName}
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-foreground"
              target={item.newTab ? '_blank' : undefined}
              rel={item.newTab ? 'noopener noreferrer' : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <LocaleSwitcher currentLocale={locale} />
          <ButtonLink href={`/${locale}/dashboard`} variant="secondary">
            <LayoutDashboard className="h-4 w-4" />
            {copy.nav.dashboard}
          </ButtonLink>
        </div>
      </div>
    </header>
  )
}
