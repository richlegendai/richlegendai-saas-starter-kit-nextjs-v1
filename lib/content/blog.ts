// Purpose: Seed blog content for the public template.
// Owner: template-content
// Last updated: 2026-04-29

export type BlogPost = {
  slug: string
  locale: string
  title: string
  description: string
  body: string[]
  publishedAt: string
  updatedAt: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'launch-checklist',
    locale: 'en',
    title: 'SaaS launch checklist for a public Next.js template',
    description: 'A practical checklist for auth, billing, SEO, analytics, deployment, and secret hygiene.',
    body: [
      'Start with environment variables. Public values must use the NEXT_PUBLIC_ prefix intentionally, and secrets must stay server-side.',
      'Connect Clerk, Polar, and Supabase in that order. Authentication creates the user identity, billing updates entitlement, and the database stores local state.',
      'Before pushing a public repo, run lint, type-check, tests, build, and secret scanning.',
    ],
    publishedAt: '2026-04-29T00:00:00.000Z',
    updatedAt: '2026-04-29T00:00:00.000Z',
  },
  {
    slug: 'launch-checklist',
    locale: 'ko',
    title: '공개 Next.js SaaS 템플릿 출시 체크리스트',
    description: '인증, 결제, SEO, 분석, 배포, secret 관리를 위한 실전 체크리스트입니다.',
    body: [
      '환경변수부터 점검합니다. 브라우저에 노출되는 값은 NEXT_PUBLIC_ 접두사를 의도적으로 사용하고, secret은 서버 전용으로 둡니다.',
      'Clerk, Polar, Supabase 순서로 연결합니다. 인증은 사용자 식별을 만들고, 결제는 권한을 갱신하고, 데이터베이스는 로컬 상태를 저장합니다.',
      '공개 저장소에 push하기 전 lint, type-check, test, build, secret scan을 모두 실행합니다.',
    ],
    publishedAt: '2026-04-29T00:00:00.000Z',
    updatedAt: '2026-04-29T00:00:00.000Z',
  },
]

export function getBlogPosts(locale: string) {
  return blogPosts.filter((post) => post.locale === locale)
}

export function getBlogPost(locale: string, slug: string) {
  return blogPosts.find((post) => post.locale === locale && post.slug === slug)
}
