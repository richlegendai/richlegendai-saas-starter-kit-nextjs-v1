// Purpose: Central public site configuration.
// Owner: template-platform
// Last updated: 2026-04-29

export const siteConfig = {
  name: 'RichLegend AI SaaS Starter Kit',
  description:
    '인증, 결제, 대시보드, 어드민, SEO, 분석, Supabase, Vercel 가이드를 포함한 공개 RichLegend AI SaaS Starter Kit입니다.',
  defaultLocale: 'ko',
  locales: ['ko', 'en'],
}

export function getBaseUrl() {
  const rawUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'
  return rawUrl.replace(/\/$/, '')
}
