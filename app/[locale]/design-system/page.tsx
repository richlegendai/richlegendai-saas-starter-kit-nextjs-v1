// Purpose: Public design system overview for the SaaS starter kit.
// Owner: template-design
// Last updated: 2026-04-29

import type { Metadata } from 'next'
import { CheckCircle2, FileText, LayoutPanelTop, Palette } from 'lucide-react'
import { BaseDialogDemo } from '@/components/base-ui/base-dialog-demo'
import { MarketingFooter } from '@/components/layout/marketing-footer'
import { MarketingHeader } from '@/components/layout/marketing-header'
import { getPageCopy } from '@/lib/i18n/page-copy'
import { buildPageMetadata } from '@/lib/seo/metadata'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const copy = getPageCopy(locale)

  return buildPageMetadata({
    locale,
    path: 'design-system',
    title: copy.designSystem.metadataTitle,
    description: copy.designSystem.metadataDescription,
  })
}

const tokenItems = [
  ['background', '전체 화면 배경', 'bg-background'],
  ['foreground', '주요 텍스트', 'bg-foreground'],
  ['muted', '보조 영역 배경', 'bg-muted'],
  ['primary', '주요 CTA', 'bg-primary'],
  ['accent', '성공/강조', 'bg-accent'],
  ['danger', '오류/위험', 'bg-danger'],
]

export default async function DesignSystemPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const copy = getPageCopy(locale)
  const requirementDocs = ['PRD.md', 'TRD.md', 'Use-Case.md', 'IA.md', 'ERD.md', 'Design-System.md']

  return (
    <>
      <MarketingHeader locale={locale} />
      <main>
        <section className="border-b bg-muted/40">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <p className="inline-flex items-center gap-2 rounded-md border bg-background px-3 py-1 text-sm text-muted-foreground">
              <Palette className="h-4 w-4" />
              Base UI + TailwindCSS
            </p>
            <h1 className="mt-5 max-w-3xl text-5xl font-semibold">{copy.designSystem.title}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">{copy.designSystem.description}</p>
            <div className="mt-8 rounded-lg border bg-background p-5 text-sm font-medium">
              {copy.designSystem.docsNotice}
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-6 px-6 py-16 lg:grid-cols-3">
          <article className="rounded-lg border bg-background p-6">
            <Palette className="h-5 w-5 text-primary" />
            <h2 className="mt-4 text-2xl font-semibold">{copy.designSystem.tokenTitle}</h2>
            <div className="mt-5 grid gap-3">
              {tokenItems.map(([name, description, className]) => (
                <div key={name} className="flex items-center justify-between gap-4 rounded-md border p-3">
                  <div>
                    <p className="font-mono text-sm">--{name}</p>
                    <p className="text-xs text-muted-foreground">{description}</p>
                  </div>
                  <span className={`h-6 w-6 rounded border ${className}`} aria-hidden="true" />
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-lg border bg-background p-6">
            <LayoutPanelTop className="h-5 w-5 text-primary" />
            <h2 className="mt-4 text-2xl font-semibold">{copy.designSystem.componentTitle}</h2>
            <ul className="mt-5 grid gap-3 text-sm text-muted-foreground">
              {['Button', 'Link', 'Dialog', 'Card', 'Badge', 'Table'].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <BaseDialogDemo locale={locale} framed={false} />
            </div>
          </article>

          <article className="rounded-lg border bg-background p-6">
            <FileText className="h-5 w-5 text-primary" />
            <h2 className="mt-4 text-2xl font-semibold">{copy.designSystem.requirementTitle}</h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              {locale === 'en'
                ? 'Write requirements in docs/requirements and docs/design-system before implementation.'
                : 'docs/requirements와 docs/design-system 문서에 요구사항을 먼저 적은 뒤 구현합니다.'}
            </p>
            <ul className="mt-5 grid gap-3 text-sm">
              {requirementDocs.map((item) => (
                <li key={item} className="rounded-md border px-3 py-2 font-mono text-xs">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </section>
      </main>
      <MarketingFooter locale={locale} />
    </>
  )
}
