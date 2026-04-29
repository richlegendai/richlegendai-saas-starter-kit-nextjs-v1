// Purpose: Locale-specific visible copy for public template pages.
// Owner: template-i18n
// Last updated: 2026-04-29

export function getPageCopy(locale: string) {
  if (locale === 'en') {
    return {
      productName: 'RichLegend AI SaaS Starter Kit',
      nav: {
        pricing: 'Pricing',
        blog: 'Blog',
        designSystem: 'Design System',
        privacy: 'Privacy',
        dashboard: 'Dashboard',
        terms: 'Terms',
      },
      landing: {
        metadataTitle: 'Launch a production SaaS faster',
        metadataDescription:
          'A public Next.js SaaS starter kit with landing pages, auth, billing, dashboard, admin, SEO, analytics, Supabase, and Vercel deployment docs.',
        eyebrow: 'Next.js + Clerk + Polar + Supabase + Base UI',
        title: 'Production SaaS starter kit without leaked secrets or vendor lock-in.',
        description:
          'Start with real SaaS foundations: landing pages, authentication, billing, dashboard, admin, SEO, analytics, deployment docs, and a public-repo checklist.',
        primaryCta: 'Start template',
        secondaryCta: 'View pricing',
        baseUiTitle: 'Base UI component layer',
        baseUiDescription:
          'The template uses TailwindCSS for styling and Base UI for accessible, unstyled interaction primitives.',
      },
      features: [
        ['Clerk authentication', 'Sign-in, sign-up, webhooks, and dashboard entry points are wired for production setup.'],
        ['Polar subscriptions', 'Checkout, subscription sync, webhook verification, and payment history patterns are included.'],
        ['Supabase + Drizzle', 'Typed schema, soft delete, UUID public IDs, timestamptz, and migration scripts are ready.'],
        ['SEO and GEO', 'Metadata, sitemap, robots, RSS, JSON-LD, GA4, and Search Console verification are built in.'],
        ['Dashboard and admin', 'User status, usage, billing history, admin subscription overrides, and setup states are visible.'],
        ['Public repo safety', 'Secret scan, env examples, setup guides, and launch checklists reduce accidental exposure.'],
      ] as const,
      pricing: {
        title: 'Pricing built for subscription SaaS.',
        description:
          'Keep the copy, product IDs, and plan rules in one place. The checkout route stays disabled until Polar environment variables are configured.',
        choose: 'Choose',
        perMonth: 'per month',
        tiers: [
          ['Free', ['Landing pages', 'Auth-ready dashboard', 'SEO setup checklist']],
          ['Pro', ['Polar subscription flow', 'Admin overrides', 'Usage and payment history']],
        ] as const,
      },
      checkout: {
        title: 'Checkout completed',
        description:
          'Polar will send a webhook to synchronize the subscription status. Use the dashboard status endpoint to verify the result.',
        cta: 'Open dashboard',
      },
      blog: {
        title: 'Blog',
        description: 'Seed content is intentionally generic. Replace it with your product-specific content strategy.',
      },
      signup: {
        title: 'Create your SaaS account',
        description: 'Configure Clerk URLs in `.env.local` to connect this page to your hosted sign-up flow.',
        cta: 'Continue to sign up',
      },
      legal: {
        privacyTitle: 'Privacy Policy',
        termsTitle: 'Terms of Service',
      },
      dashboard: {
        overview: 'Overview',
        billing: 'Billing',
        usage: 'Usage',
        account: 'Account',
        title: 'Dashboard',
        description: 'This page is the protected app surface. Wire Clerk middleware or role checks before production launch.',
        billingTitle: 'Billing',
        billingDescription:
          'Use `/api/checkout`, `/api/webhooks/polar`, and subscription tables to keep local billing state in sync.',
        checkoutCta: 'Open checkout',
        usageTitle: 'Usage',
        usageDescription:
          'Add product-specific counters here. Keep free and total usage counters separate for entitlement logic.',
        accountTitle: 'Account',
        accountDescription: 'Add Clerk user profile controls, organization switchers, and account deletion flows here.',
      },
      designSystem: {
        metadataTitle: 'Design System',
        metadataDescription:
          'Design tokens, component standards, states, accessibility rules, and requirements documentation for the SaaS starter kit.',
        title: 'Design System',
        description:
          'Use this page with docs/design-system and docs/requirements before building new screens.',
        docsNotice:
          'Write PRD, TRD, Use Case, IA, ERD, design system, and i18n requirements before implementation. The template starts with Korean and English and can expand to 20+ languages.',
        tokenTitle: 'Tokens',
        componentTitle: 'Components',
        requirementTitle: 'Requirements documents',
      },
    }
  }

  return {
    productName: 'RichLegend AI SaaS Starter Kit',
    nav: {
      pricing: '요금',
      blog: '블로그',
      designSystem: '디자인 시스템',
      privacy: '개인정보',
      dashboard: '대시보드',
      terms: '약관',
    },
    landing: {
      metadataTitle: '프로덕션 SaaS를 더 빠르게 출시하세요',
      metadataDescription:
        '랜딩페이지, 인증, 결제, 대시보드, 어드민, SEO, 분석, Supabase, Vercel 배포 문서를 포함한 공개 RichLegend AI SaaS Starter Kit입니다.',
      eyebrow: 'Next.js + Clerk + Polar + Supabase + Base UI',
      title: '시크릿 노출 걱정 없이 시작하는 RichLegend AI SaaS Starter Kit',
      description:
        '랜딩페이지, 인증, 결제, 대시보드, 어드민, SEO, 분석, 배포 문서, 공개 저장소 체크리스트까지 실제 SaaS에 필요한 기반을 한 번에 제공합니다.',
      primaryCta: '템플릿 시작하기',
      secondaryCta: '요금 보기',
      baseUiTitle: 'Base UI 컴포넌트 계층',
      baseUiDescription:
        'TailwindCSS는 스타일을 담당하고 Base UI는 접근성 있는 상호작용 primitive를 담당합니다.',
    },
    features: [
      ['Clerk 인증', '로그인, 회원가입, 웹훅, 대시보드 진입 지점을 프로덕션 설정 기준으로 준비했습니다.'],
      ['Polar 구독 결제', '체크아웃, 구독 동기화, 웹훅 검증, 결제 이력 패턴을 포함했습니다.'],
      ['Supabase + Drizzle', '타입 안전 스키마, soft delete, 공개용 UUID, timestamptz, 마이그레이션 스크립트를 제공합니다.'],
      ['SEO와 GEO', '메타데이터, 사이트맵, robots, RSS, JSON-LD, GA4, Search Console 검증을 기본 제공합니다.'],
      ['대시보드와 어드민', '사용자 상태, 사용량, 결제 이력, 구독 수동 부여, 설정 상태를 확인할 수 있습니다.'],
      ['공개 저장소 안전장치', 'Secret scan, env 예시, 설정 가이드, 출시 체크리스트로 실수 노출을 줄입니다.'],
    ] as const,
    pricing: {
      title: '구독형 SaaS에 맞춘 요금 페이지',
      description:
        '카피, 상품 ID, 플랜 규칙을 한 곳에서 관리합니다. Polar 환경변수가 없으면 체크아웃 라우트는 명확한 설정 안내를 반환합니다.',
      choose: '선택',
      perMonth: '월',
      tiers: [
        ['무료', ['랜딩페이지', '인증 준비 대시보드', 'SEO 설정 체크리스트']],
        ['프로', ['Polar 구독 결제 플로우', '어드민 수동 부여', '사용량 및 결제 이력']],
      ] as const,
    },
    checkout: {
      title: '결제가 완료되었습니다',
      description: 'Polar가 웹훅을 보내면 구독 상태가 동기화됩니다. 대시보드 상태 API로 결과를 확인하세요.',
      cta: '대시보드 열기',
    },
    blog: {
      title: '블로그',
      description: '기본 콘텐츠는 범용 예시입니다. 실제 제품의 콘텐츠 전략에 맞게 교체하세요.',
    },
    signup: {
      title: 'SaaS 계정 만들기',
      description: '`.env.local`에 Clerk URL을 설정하면 이 페이지가 호스팅 회원가입 플로우와 연결됩니다.',
      cta: '회원가입 계속하기',
    },
    legal: {
      privacyTitle: '개인정보처리방침',
      termsTitle: '서비스 이용약관',
    },
    dashboard: {
      overview: '개요',
      billing: '결제',
      usage: '사용량',
      account: '계정',
      title: '대시보드',
      description: '이 페이지는 보호된 앱 영역입니다. 운영 전 Clerk middleware 또는 role check를 연결하세요.',
      billingTitle: '결제',
      billingDescription:
        '`/api/checkout`, `/api/webhooks/polar`, 구독 테이블을 사용해 로컬 결제 상태를 동기화하세요.',
      checkoutCta: '체크아웃 열기',
      usageTitle: '사용량',
      usageDescription:
        '제품별 사용량 카운터를 여기에 추가하세요. 무료 사용량과 전체 사용량은 권한 로직을 위해 분리해서 관리합니다.',
      accountTitle: '계정',
      accountDescription: 'Clerk 사용자 프로필, 조직 전환, 계정 삭제 플로우를 여기에 추가하세요.',
    },
    designSystem: {
      metadataTitle: '디자인 시스템',
      metadataDescription:
        'RichLegend AI SaaS Starter Kit의 디자인 토큰, 컴포넌트 기준, 상태, 접근성 규칙, 요구사항 문서 작성 기준입니다.',
      title: '디자인 시스템',
      description:
        '새 화면을 만들기 전에 이 페이지와 docs/design-system, docs/requirements 문서를 함께 확인하세요.',
      docsNotice:
        '구현 전 PRD, TRD, Use Case, IA, ERD, 디자인 시스템, i18n 요구사항을 먼저 작성해야 합니다. 기본 한국어와 영어 전환을 포함하고, 20개 국어 이상 확장할 수 있습니다.',
      tokenTitle: '토큰',
      componentTitle: '컴포넌트',
      requirementTitle: '요구사항 문서',
    },
  }
}
