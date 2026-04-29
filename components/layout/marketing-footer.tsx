// Purpose: Shared public footer.
// Owner: template-marketing
// Last updated: 2026-04-29

import Link from 'next/link'
import { getPageCopy } from '@/lib/i18n/page-copy'

export function MarketingFooter({ locale }: { locale: string }) {
  const copy = getPageCopy(locale)

  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>
          {locale === 'en'
            ? `${copy.productName} is a public SaaS starter template.`
            : `${copy.productName}는 공개 SaaS 스타터 템플릿입니다.`}
        </p>
        <div className="flex gap-4">
          <Link href={`/${locale}/terms`} target="_blank" rel="noopener noreferrer">
            {copy.nav.terms}
          </Link>
          <Link href={`/${locale}/privacy`} target="_blank" rel="noopener noreferrer">
            {copy.nav.privacy}
          </Link>
          <Link href={`/${locale}/blog`}>{copy.nav.blog}</Link>
        </div>
      </div>
    </footer>
  )
}
