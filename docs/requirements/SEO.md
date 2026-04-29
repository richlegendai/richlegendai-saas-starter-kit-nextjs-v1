# SEO 요구사항 문서

## 1. 목적

검색엔진(Google, Bing 등) 및 AI 생성 검색(GEO: Generative Engine Optimization)에서 제품 페이지가 올바르게 수집·노출·인용되도록 SEO 요구사항을 정의합니다.

## 2. 적용 범위

| 페이지 | 경로 | SEO 우선순위 |
|---|---|---|
| 랜딩 | `/ko`, `/en` | 최상 |
| 요금 | `/ko/pricing`, `/en/pricing` | 높음 |
| 블로그 목록 | `/ko/blog`, `/en/blog` | 높음 |
| 블로그 상세 | `/ko/blog/[slug]`, `/en/blog/[slug]` | 높음 |
| 디자인 시스템 | `/ko/design-system`, `/en/design-system` | 보통 |
| 대시보드 (인증 필요) | `/ko/dashboard/*` | 낮음 (noindex) |
| 어드민 (인증 필요) | `/ko/admin/*` | 낮음 (noindex) |
| 약관·개인정보 | `/ko/legal/*`, `/en/legal/*` | 보통 |

## 3. Metadata API (Next.js)

- 모든 공개 페이지에 `generateMetadata()` 또는 정적 `metadata` 객체를 적용합니다.
- 필수 태그: `title`, `description`, `canonical`, `og:title`, `og:description`, `og:image`, `og:url`, `og:type`, `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`.
- `title` 형식: `{페이지명} | RichLegend AI SaaS Starter Kit`
- `description`: 150자 이내, 핵심 키워드 포함, 중복 금지.
- 대시보드·어드민 라우트: `robots: { index: false, follow: false }` 명시.

## 4. Open Graph / Twitter Card

- `og:image` 권장 크기: 1200×630px, 용량 1MB 이하.
- `og:type`: 랜딩/요금은 `website`, 블로그 상세는 `article`.
- Twitter Card 타입: `summary_large_image`.
- 이미지 alt 텍스트를 `og:image:alt`에 반드시 포함합니다.

## 5. 구조화 데이터 (JSON-LD)

| 페이지 | 스키마 타입 |
|---|---|
| 랜딩 | `SoftwareApplication` |
| 블로그 상세 | `BlogPosting` |
| 요금 | `Offer` (선택) |

- `lib/seo/schemas.ts`에서 빌더 함수로 중앙 관리합니다.
- 구글 Rich Results Test로 출시 전 검증합니다.

## 6. sitemap.xml

- `app/sitemap.ts`에서 동적 생성합니다.
- 포함 대상: 공개 정적 페이지 + 블로그 포스트 (최신 `updatedAt` 기준 `lastmod`).
- 제외 대상: `/dashboard`, `/admin`, `/api/*`.
- 다국어: `ko`, `en` locale URL 모두 포함.
- `changefreq`: 랜딩·요금 `monthly`, 블로그 `weekly`.

## 7. robots.txt

- `app/robots.ts`에서 생성합니다.
- `Disallow`: `/dashboard`, `/admin`, `/api`.
- `Sitemap`: 절대 URL 명시 (`https://{도메인}/sitemap.xml`).

## 8. hreflang (다국어 SEO)

- `<link rel="alternate" hreflang="ko" href="...">`, `hreflang="en"` 태그를 공개 페이지 `<head>`에 삽입합니다.
- `hreflang="x-default"`는 기본 locale(`ko`)을 가리킵니다.
- locale 추가 시 `i18n/routing.ts`와 sitemap·hreflang을 함께 업데이트합니다.

## 9. RSS 피드

- `/ko/feed.xml`, `/en/feed.xml` 경로에서 블로그 최신 20개를 제공합니다.
- `<title>`, `<link>`, `<description>`, `<pubDate>` 필수 항목 포함.

## 10. GEO (Generative Engine Optimization)

AI 생성 검색(ChatGPT Search, Perplexity, Google AI Overviews)에서 인용되도록 다음을 준수합니다.

- 구조화된 제목 계층(`h1` 1개, `h2`/`h3` 명확한 계층).
- 핵심 질문·답변 패턴(FAQ 형식)을 랜딩·기능 섹션에 포함.
- `JSON-LD` `SoftwareApplication`에 `description`, `featureList`, `keywords` 필드 충실히 작성.
- 외부 권위 사이트(GitHub, npm, Vercel 문서) 링크를 적절히 포함.
- 중복 콘텐츠 없이 각 locale 페이지에 고유한 카피 사용.

## 11. Google Search Console

- HTML meta tag 방식으로 소유권 인증: `GOOGLE_SITE_VERIFICATION` 환경변수 → `app/layout.tsx` `<meta name="google-site-verification">`.
- 인증 완료 후 sitemap URL을 GSC에 제출합니다.
- 인덱싱 오류, Core Web Vitals 리포트를 월 1회 점검합니다.

## 12. GA4 / Core Web Vitals

- `NEXT_PUBLIC_GA_ID` 환경변수로 GA4 측정 ID를 설정합니다.
- `@next/third-parties`의 `GoogleAnalytics` 컴포넌트로 스크립트를 삽입합니다.
- Core Web Vitals(LCP, CLS, FID/INP) 목표:
  - LCP ≤ 2.5s
  - CLS ≤ 0.1
  - INP ≤ 200ms
- Vercel Speed Insights(`@vercel/speed-insights`)로 필드 데이터를 실시간 모니터링합니다.

## 13. 이미지 최적화

- 모든 이미지는 Next.js `<Image>` 컴포넌트를 사용합니다 (WebP 자동 변환, 지연 로딩).
- OG 이미지는 `next/og` (`ImageResponse`)로 동적 생성하거나 정적 파일로 제공합니다.
- `alt` 텍스트는 비어 있지 않게 작성합니다.

## 14. 성능 / 접근성 (SEO 연계)

- Lighthouse SEO 점수 목표: 90점 이상.
- `<html lang="{locale}">` 속성 필수.
- 시맨틱 HTML: `<main>`, `<nav>`, `<article>`, `<section>`, `<header>`, `<footer>` 적절히 사용.
- 내부 링크 구조: 랜딩 → 요금 → 블로그 → 개별 포스트 흐름을 명시적으로 연결.

## 15. 검증 체크리스트

출시 전 `docs/checklists/public-release.md`와 함께 아래 항목을 확인합니다.

- [ ] 모든 공개 페이지 `<title>`, `<description>` 채워짐
- [ ] `og:image` 1200×630px 제공
- [ ] `sitemap.xml` 정상 응답 (`/sitemap.xml`)
- [ ] `robots.txt` 정상 응답, dashboard/admin Disallow 확인
- [ ] JSON-LD Google Rich Results Test 통과
- [ ] Google Search Console 소유권 인증 완료 + sitemap 제출
- [ ] GA4 실시간 이벤트 수신 확인
- [ ] hreflang `ko`/`en` 태그 올바른 URL 지정
- [ ] Lighthouse SEO 점수 90+
- [ ] Core Web Vitals LCP ≤ 2.5s, CLS ≤ 0.1 확인
- [ ] 대시보드·어드민 `noindex` 적용 확인

## 16. 미정 항목

- OG 이미지를 동적(`next/og`) vs 정적 파일 중 어느 방식으로 제공할지 결정 필요.
- 블로그 포스트 별 `canonical` URL 정책 (다국어 버전 간 canonical 관계) 결정 필요.
- Bing Webmaster Tools 등록 여부.
