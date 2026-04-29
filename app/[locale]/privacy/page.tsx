// Purpose: Template privacy policy page.
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
    path: 'privacy',
    title: copy.legal.privacyTitle,
    description:
      locale === 'en'
        ? 'Privacy policy template for SaaS products using analytics, authentication, and billing providers.'
        : '분석, 인증, 결제 제공자를 사용하는 SaaS 제품용 개인정보처리방침 템플릿입니다.',
  })
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const copy = getPageCopy(locale)

  return (
    <LegalPage
      title={copy.legal.privacyTitle}
      sections={
        locale === 'en'
          ? [
              'Replace this template with legal text reviewed for your jurisdiction.',
              'Document how you use Clerk for authentication, Polar for billing, Supabase for data storage, and GA4 for analytics.',
              'Never describe data handling that your app does not actually perform.',
            ]
          : [
              '이 템플릿 문구는 실제 관할권에 맞게 검토된 법무 문서로 교체하세요.',
              'Clerk 인증, Polar 결제, Supabase 데이터 저장, GA4 분석 사용 방식을 실제 구현과 일치하게 문서화하세요.',
              '앱이 실제로 수행하지 않는 데이터 처리를 문서에 적지 마세요.',
            ]
      }
    />
  )
}
