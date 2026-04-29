// Purpose: Template terms of service page.
// Owner: template-legal
// Last updated: 2026-04-29

import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal/legal-page'
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
    path: 'terms',
    title: copy.legal.termsTitle,
    description: locale === 'en' ? 'Terms of service template for a subscription SaaS.' : '구독형 SaaS용 이용약관 템플릿입니다.',
  })
}

export default async function TermsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const copy = getPageCopy(locale)

  return (
    <LegalPage
      title={copy.legal.termsTitle}
      sections={
        locale === 'en'
          ? [
              'Replace this template before launch.',
              'Clarify account rules, billing terms, refund rules, acceptable use, support scope, and service availability.',
              'Keep marketing claims aligned with the actual product behavior.',
            ]
          : [
              '출시 전 이 템플릿 문구를 실제 약관으로 교체하세요.',
              '계정 규칙, 결제 조건, 환불 규칙, 허용 사용 범위, 지원 범위, 서비스 가용성을 명확히 적으세요.',
              '마케팅 문구와 실제 제품 동작이 어긋나지 않도록 유지하세요.',
            ]
      }
    />
  )
}
