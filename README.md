# RichLegend AI SaaS Starter Kit

RichLegend AI SaaS Starter Kit은 **구독형 웹서비스를 빠르게 시작하기 위한 Next.js 템플릿**입니다.

처음부터 로그인, 결제, 대시보드, 관리자 화면, 데이터베이스, 검색엔진 노출, 배포 준비를 모두 직접 만들지 않아도 되도록 기본 뼈대를 담아 둔 프로젝트입니다. 개발자가 아닌 분도 “어떤 기능이 들어 있는지”, “어떤 외부 서비스를 연결해야 하는지”, “어떤 순서로 준비하면 되는지”를 확인할 수 있게 구성했습니다.

## 한눈에 보기

| 구분 | 사용 기술/서비스 | 하는 일 |
| --- | --- | --- |
| 웹사이트 기반 | Next.js App Router | 랜딩페이지, 가격 페이지, 블로그, 대시보드 같은 화면을 만듭니다. |
| 화면 개발 | React, TypeScript, TailwindCSS | 버튼, 카드, 레이아웃을 안정적으로 만들고 스타일을 관리합니다. |
| UI 컴포넌트 | Base UI | 접근성을 고려한 다이얼로그 같은 기본 UI를 제공합니다. |
| 인증 | Clerk | 회원가입, 로그인, 사용자 세션을 담당합니다. |
| 결제 | Polar.sh | 유료 플랜 결제, 체크아웃, 구독 webhook 처리를 담당합니다. |
| 데이터베이스 | Supabase Postgres | 사용자, 구독, 결제, 콘텐츠 데이터를 저장합니다. |
| DB 코드 관리 | Drizzle ORM | 데이터베이스 테이블 구조와 조회 코드를 TypeScript로 관리합니다. |
| 다국어 | next-intl | 한국어와 영어 라우팅을 제공하고, 다른 언어 선택 시 영어로 폴백합니다. |
| 다크/라이트 모드 | next-themes | 기본은 라이트모드이며 사용자가 다크모드로 전환할 수 있습니다. |
| 검색 노출 | SEO/GEO, sitemap, robots, JSON-LD | Google과 AI 검색이 사이트 내용을 이해하기 쉽게 만듭니다. |
| 분석 | GA4, Vercel Analytics, Speed Insights | 방문자 흐름과 웹 성능을 확인할 수 있습니다. |
| 배포 | Vercel | 실제 서비스로 배포하기 위한 설정 흐름을 제공합니다. |
| 공개 저장소 안전장치 | secret scan, `.env.example` | 비밀키가 GitHub에 올라가지 않도록 점검합니다. |

## 들어 있는 화면

| 화면 | 경로 예시 | 설명 |
| --- | --- | --- |
| 랜딩페이지 | `/ko`, `/en` | 제품 소개, 핵심 기능, CTA 버튼이 있는 첫 화면입니다. |
| 가격 페이지 | `/ko/pricing`, `/en/pricing` | 무료/유료 플랜을 보여주고 결제로 연결합니다. |
| 블로그 | `/ko/blog`, `/en/blog` | 콘텐츠 마케팅과 SEO를 위한 블로그 목록/상세 화면입니다. |
| 디자인 시스템 | `/ko/design-system`, `/en/design-system` | 색상, 컴포넌트, 요구사항 문서 기준을 확인하는 화면입니다. |
| 약관/개인정보 | `/ko/terms`, `/ko/privacy` | SaaS 운영에 필요한 법적 문서 템플릿 화면입니다. |
| 대시보드 | `/ko/dashboard` | 로그인 후 제품 상태와 설정을 확인하는 사용자 영역입니다. |
| 결제 관리 | `/ko/dashboard/billing` | 사용자가 결제/구독 상태를 확인하는 영역입니다. |
| 사용량 | `/ko/dashboard/usage` | 사용량, 제한, 플랜 정보를 보여주기 위한 기본 화면입니다. |
| 계정 | `/ko/dashboard/account` | 사용자 계정 관련 정보를 담기 위한 기본 화면입니다. |
| 관리자 | `/admin` | 구독 override, webhook 상태 같은 운영자용 화면입니다. |

## 핵심 기능 설명

### 1. 인증: Clerk

Clerk는 회원가입, 로그인, 세션 관리를 담당합니다.

- 사용자가 로그인했는지 확인합니다.
- 로그인한 사용자만 대시보드에 접근하도록 만들 수 있습니다.
- `user.created` webhook으로 새 사용자가 생겼을 때 무료 구독 상태를 준비할 수 있습니다.
- 필요한 환경변수는 `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`, `CLERK_SECRET_KEY`, `CLERK_WEBHOOK_SECRET`입니다.

### 2. 결제: Polar.sh

Polar.sh는 SaaS 유료 플랜 결제와 구독 이벤트를 처리합니다.

- `/api/checkout`에서 Polar checkout으로 이동합니다.
- `/api/webhooks/polar`에서 결제/구독 webhook을 받을 수 있도록 준비되어 있습니다.
- `/api/subscriptions/sync`는 구독 상태를 동기화하기 위한 기본 API입니다.
- 필요한 환경변수는 `POLAR_ACCESS_TOKEN`, `NEXT_PUBLIC_POLAR_PRODUCT_ID_PRO`, `POLAR_WEBHOOK_SECRET`입니다.

### 3. 데이터베이스: Supabase Postgres + Drizzle ORM

Supabase Postgres는 서비스 데이터를 저장하고, Drizzle ORM은 DB 구조를 코드로 관리합니다.

- 사용자, 구독, 결제, 수동 구독 override 같은 기본 테이블 설계가 들어 있습니다.
- `pnpm db:generate`, `pnpm db:migrate`, `pnpm db:studio` 명령으로 DB 작업을 진행할 수 있습니다.
- 필요한 환경변수는 `DATABASE_URL`입니다.

### 4. 다국어: 한국어/English + 영어 폴백

기본 언어는 한국어입니다.

- `/ko`와 `/en` 라우팅을 제공합니다.
- 상단 언어 선택은 드롭다운입니다.
- 한국어를 선택하면 한국어 페이지로 이동합니다.
- English를 선택하면 영어 페이지로 이동합니다.
- 일본어, 중국어, 스페인어 등 다른 언어를 선택하면 아직 번역 파일이 없기 때문에 English로 이동합니다.

### 5. 다크모드/라이트모드

기본 화면은 라이트모드입니다.

- 상단 아이콘 버튼으로 다크모드와 라이트모드를 전환할 수 있습니다.
- 사용자가 선택한 테마는 브라우저에 저장됩니다.
- 색상은 TailwindCSS 토큰과 CSS 변수로 관리합니다.

### 6. SEO/GEO 검색 최적화

검색엔진과 AI 검색이 사이트를 더 잘 이해하도록 기본 설정이 들어 있습니다.

- Metadata API
- Open Graph
- Twitter Card
- `sitemap.xml`
- `robots.txt`
- RSS
- JSON-LD
- 다국어 `hreflang`
- Google Search Console verification

### 7. 분석과 성능 측정

서비스 운영자가 방문자와 성능을 확인할 수 있도록 기본 연결 지점이 있습니다.

- GA4: `NEXT_PUBLIC_GA_ID`로 Google Analytics를 연결합니다.
- Vercel Analytics: 배포 후 방문 이벤트를 확인할 수 있습니다.
- Vercel Speed Insights: Core Web Vitals 기반 성능을 확인할 수 있습니다.

### 8. 문서 템플릿

기획과 개발을 시작하기 전에 채워 넣을 문서들이 준비되어 있습니다.

- `docs/requirements/PRD.md`: 제품 목표와 성공 기준
- `docs/requirements/TRD.md`: 기술 요구사항
- `docs/requirements/Use-Case.md`: 사용자 시나리오
- `docs/requirements/IA.md`: 페이지와 메뉴 구조
- `docs/requirements/ERD.md`: 데이터베이스 구조
- `docs/requirements/SEO.md`: 검색 노출 요구사항
- `docs/design-system/Design-System.md`: 디자인 기준

## 빠른 시작

개발 환경에서 먼저 실행해 보려면 아래 순서로 진행합니다.

```bash
pnpm install
cp .env.local.example .env.local
pnpm dev
```

실행 후 브라우저에서 `http://localhost:3000/ko`를 열면 한국어 화면을 볼 수 있습니다.

## 처음 설정 순서

1. `docs/requirements/PRD.md`에 만들 제품의 목표를 적습니다.
2. `docs/requirements/Use-Case.md`에 사용자가 어떤 흐름으로 제품을 쓸지 적습니다.
3. `docs/requirements/IA.md`에 메뉴와 페이지 구조를 적습니다.
4. `docs/requirements/ERD.md`에 저장할 데이터 구조를 정리합니다.
5. `docs/requirements/TRD.md`에 인증, 결제, DB, 배포 요구사항을 적습니다.
6. Supabase에서 Postgres 프로젝트를 만들고 `DATABASE_URL`을 설정합니다.
7. Clerk에서 애플리케이션을 만들고 인증 환경변수를 설정합니다.
8. Polar.sh에서 상품을 만들고 결제 환경변수를 설정합니다.
9. Vercel 프로젝트를 만들고 production 환경변수를 등록합니다.
10. Google Search Console과 GA4를 사용할 경우 관련 값을 환경변수에 넣습니다.
11. `pnpm lint`, `pnpm type-check`, `pnpm test`, `pnpm secret-scan`, `pnpm build`로 공개 전 점검을 합니다.

## 주요 환경변수

| 환경변수 | 연결 대상 | 설명 |
| --- | --- | --- |
| `NEXT_PUBLIC_APP_URL` | 앱 기본 URL | 배포된 사이트 주소입니다. |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk | 브라우저에서 Clerk 인증을 시작할 때 사용합니다. |
| `CLERK_SECRET_KEY` | Clerk | 서버에서 Clerk 사용자/세션을 확인할 때 사용합니다. |
| `CLERK_WEBHOOK_SECRET` | Clerk | Clerk webhook 요청이 진짜인지 검증합니다. |
| `POLAR_ACCESS_TOKEN` | Polar.sh | 서버에서 Polar API를 호출할 때 사용합니다. |
| `NEXT_PUBLIC_POLAR_PRODUCT_ID_PRO` | Polar.sh | Pro 플랜 상품 ID입니다. |
| `POLAR_WEBHOOK_SECRET` | Polar.sh | Polar webhook 요청이 진짜인지 검증합니다. |
| `DATABASE_URL` | Supabase Postgres | 데이터베이스 접속 주소입니다. |
| `GOOGLE_SITE_VERIFICATION` | Google Search Console | 검색 콘솔 소유권 확인 meta 값입니다. |
| `NEXT_PUBLIC_GA_ID` | GA4 | Google Analytics 측정 ID입니다. |

실제 비밀키는 `.env.local`이나 배포 환경변수에만 넣어야 합니다. README, 문서, GitHub 공개 저장소에는 실제 키를 적지 마세요.

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
- `NEXT_PUBLIC_*` 값은 브라우저에 노출될 수 있으므로 비밀키를 넣으면 안 됩니다.
- README와 docs에는 실제 토큰, webhook URL, DB URL, 고객 데이터, 개인 정보를 넣지 않습니다.
- 공개 전 `docs/checklists/public-release.md`를 끝까지 확인합니다.

## English Summary

RichLegend AI SaaS Starter Kit is a public Next.js SaaS starter with Clerk authentication, Polar.sh billing, Supabase Postgres, Drizzle ORM, TailwindCSS, Base UI, next-intl, light/dark theme support, SEO/GEO setup, analytics, Vercel deployment guidance, and public repository safety checks.
