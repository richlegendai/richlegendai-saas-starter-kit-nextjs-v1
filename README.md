# RichLegend AI SaaS Starter Kit

Next.js App Router 기반 공개 RichLegend AI SaaS Starter Kit입니다. 랜딩페이지, 인증, 결제, 대시보드, 어드민, SEO/GEO, Google Search Console, GA4, Vercel 배포, Supabase Postgres, Drizzle ORM, TailwindCSS, Base UI를 한 번에 시작할 수 있도록 구성했습니다.

## 포함 기능

- Next.js, React, TypeScript strict, TailwindCSS
- Base UI (`@base-ui/react`) 기반 접근성 UI primitive 예시
- i18n(next-intl) 기반 다국어 구조: 기본 한국어, 상단 언어 선택으로 영어 전환, 20개 국어 이상 확장 가능
- 디자인 시스템 문서와 `/ko/design-system`, `/en/design-system` 공개 확인 페이지
- PRD, TRD, Use Case, IA, ERD 요구사항 문서 템플릿
- Clerk 인증 설정 지점과 `user.created` webhook helper
- Polar checkout, webhook, subscription sync scaffold
- Supabase Postgres + Drizzle ORM schema
- 랜딩, 가격, 블로그, 약관, 개인정보처리방침, 대시보드, 어드민 화면
- SEO/GEO 풀스택 적용: Metadata API, Open Graph, Twitter Card, sitemap.xml, robots.txt, RSS, JSON-LD(SoftwareApplication·BlogPosting 스키마), hreflang(다국어), Google Search Console HTML meta 인증
- GA4 측정, Google Search Console 연동, Core Web Vitals 모니터링 기반 제공
- `.env.example`, 공개 전 체크리스트, secret scan, GitHub Actions

## 빠른 시작

```bash
pnpm install
cp .env.local.example .env.local
pnpm dev
```

## 필수 설정 순서

1. `docs/requirements/PRD.md`에 제품 목표와 사용자 요구사항을 작성합니다.
2. `docs/requirements/Use-Case.md`에 사용자 시나리오를 작성합니다.
3. `docs/requirements/IA.md`에 페이지, 메뉴, 라우팅, 정보 구조를 작성합니다.
4. `docs/requirements/ERD.md`에 DB 테이블, 관계, PK/FK, 인덱스, 삭제/보존 정책을 작성합니다.
5. `docs/requirements/TRD.md`에 API, DB, 인증, 결제, 배포, 테스트 요구사항을 작성합니다.
6. `docs/design-system/Design-System.md`에 화면/컴포넌트 요구사항과 디자인 결정을 작성합니다.
7. 지원 언어, 기본 locale, 번역 범위, 20개 국어 이상 확장 계획을 PRD/IA/TRD에 작성합니다.
8. Supabase에서 Postgres 프로젝트를 만들고 `DATABASE_URL`을 설정합니다.
9. Clerk 애플리케이션을 만들고 `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`, `CLERK_SECRET_KEY`, `CLERK_WEBHOOK_SECRET`을 설정합니다.
10. Polar 상품을 만들고 `POLAR_ACCESS_TOKEN`, `NEXT_PUBLIC_POLAR_PRODUCT_ID_PRO`, `POLAR_WEBHOOK_SECRET`을 설정합니다.
11. Vercel 프로젝트 환경변수에 production 값을 등록합니다.
12. Google Search Console에서 HTML meta tag verification 값을 받아 `GOOGLE_SITE_VERIFICATION`에 넣습니다.
13. GA4 측정 ID를 `NEXT_PUBLIC_GA_ID`에 넣습니다.

## 요구사항 문서

새 기능이나 새 제품을 만들 때 요구사항은 먼저 문서에 작성합니다.

- `docs/requirements/PRD.md`: 제품 목표, 범위, 성공 기준
- `docs/requirements/TRD.md`: API, DB, 인증, 결제, 배포, 테스트 요구사항
- `docs/requirements/Use-Case.md`: 사용자 시나리오와 예외 흐름
- `docs/requirements/IA.md`: 페이지, 메뉴, 라우팅, 정보 구조
- `docs/requirements/ERD.md`: DB 테이블, 관계, PK/FK, 인덱스, 보존/삭제 정책
- `docs/requirements/SEO.md`: Metadata, OG, JSON-LD, sitemap, hreflang, GEO, GSC, GA4, Core Web Vitals 요구사항
- `docs/design-system/Design-System.md`: 디자인 토큰, 컴포넌트 기준, 상태, 접근성 기준

다국어 요구사항은 PRD의 국가/언어 정책, IA의 locale 라우팅과 메뉴 구조, TRD의 i18n 구현 방식, 디자인 시스템의 번역 길이 대응 기준에 나눠 작성합니다. 기본 locale은 한국어(`ko`)이며, 현재 영어(`en`) 전환을 포함하고, `i18n/routing.ts`, `lib/site.ts`, 메시지/카피 파일, sitemap/metadata를 확장하면 20개 국어 이상까지 확장할 수 있도록 설계합니다.

브라우저에서는 `/ko/design-system`에서 디자인 시스템 예시를 확인할 수 있습니다.

## 검증 명령

```bash
pnpm lint
pnpm type-check
pnpm test
pnpm secret-scan
pnpm build
```

## 공개 저장소 주의사항

- `.env.local`, `.env.production`, `.vercel`, `.omx`, `.omc`는 커밋하지 않습니다.
- `NEXT_PUBLIC_*` 값은 브라우저 번들에 포함될 수 있으므로 secret을 넣지 않습니다.
- README와 docs에는 실제 토큰, webhook URL, DB URL, 고객 데이터, 개인 이메일을 넣지 않습니다.
- 공개 전 `docs/checklists/public-release.md`를 끝까지 확인합니다.

## English Summary

This is a public SaaS starter for Next.js with Clerk auth, Polar billing, Supabase Postgres, Drizzle ORM, Base UI, TailwindCSS, SEO, analytics, deployment docs, and public repository safety checks.
