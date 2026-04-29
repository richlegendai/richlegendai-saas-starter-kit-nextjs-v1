// Purpose: Header language switcher that keeps the current path while changing locale.
// Owner: template-i18n
// Last updated: 2026-04-29

'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils/cn'

const labels = {
  ko: '한국어',
  en: 'English',
}

export function LocaleSwitcher({ currentLocale }: { currentLocale: string }) {
  const pathname = usePathname()

  function hrefFor(locale: 'ko' | 'en') {
    const segments = pathname.split('/')
    if (segments[1] === 'ko' || segments[1] === 'en') {
      segments[1] = locale
      return segments.join('/') || `/${locale}`
    }
    return `/${locale}`
  }

  return (
    <div className="flex rounded-md border bg-background p-1" aria-label="언어 선택">
      {(['ko', 'en'] as const).map((locale) => (
        <Link
          key={locale}
          href={hrefFor(locale)}
          className={cn(
            'rounded px-2 py-1 text-xs font-medium transition hover:bg-muted',
            currentLocale === locale ? 'bg-primary text-primary-foreground hover:bg-primary' : 'text-muted-foreground',
          )}
        >
          {labels[locale]}
        </Link>
      ))}
    </div>
  )
}
