// Purpose: Shared public navigation for marketing pages.
// Owner: template-marketing
// Last updated: 2026-04-29

import Link from 'next/link'
import { LayoutDashboard } from 'lucide-react'
import { ButtonLink } from '@/components/ui/button-link'
import { LocaleSwitcher } from '@/components/ui/locale-switcher'
import { ThemeToggle } from '@/components/ui/theme-toggle'
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
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link href={`/${locale}`} className="min-w-0 truncate font-semibold">
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
        <div className="flex shrink-0 items-center gap-2">
          <LocaleSwitcher currentLocale={locale} />
          <ThemeToggle />
          <ButtonLink href={`/${locale}/dashboard`} variant="secondary" className="px-3 sm:px-4">
            <LayoutDashboard className="h-4 w-4" />
            <span className="sr-only sm:not-sr-only">{copy.nav.dashboard}</span>
          </ButtonLink>
        </div>
      </div>
    </header>
  )
}
