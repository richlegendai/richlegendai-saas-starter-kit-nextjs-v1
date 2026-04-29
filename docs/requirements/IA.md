# IA: 정보구조 문서

## 1. 사이트맵

| 영역 | URL | 목적 | 공개 여부 |
| --- | --- | --- | --- |
| 랜딩 | `/ko` | 제품 소개 | 공개 |
| 요금 | `/ko/pricing` | 플랜/가격 안내 | 공개 |
| 블로그 | `/ko/blog` | 콘텐츠 마케팅 | 공개 |
| 디자인 시스템 | `/ko/design-system` | UI 기준 확인 | 공개 |
| 대시보드 | `/ko/dashboard` | 사용자 앱 영역 | 보호 필요 |
| 어드민 | `/admin` | 운영 관리 | 보호 필수 |

## 2. 내비게이션

- Header:
- Footer:
- Dashboard sidebar:
- Admin navigation:

## 3. 페이지별 정보 구조

### 랜딩

- Hero:
- Feature:
- CTA:

### 대시보드

- Overview:
- Billing:
- Usage:
- Account:

## 4. 라우팅 규칙

- 기본 locale은 `ko`입니다.
- 영어는 상단 언어 선택기에서 `/en`으로 전환합니다.
- i18n 구조는 20개 국어 이상 확장할 수 있도록 locale prefix 기반 라우팅을 유지합니다.
- 새 언어를 추가할 때는 `i18n/routing.ts`, `lib/site.ts`, header 언어 선택기, footer 링크, sitemap, metadata alternates를 함께 갱신합니다.
- 새 공개 페이지를 추가하면 `app/sitemap.ts`, header/footer 링크, metadata를 함께 갱신합니다.

## 5. 다국어 정보 구조

| Locale | URL 예시 | 상태 | 비고 |
| --- | --- | --- | --- |
| `ko` | `/ko` | 기본 제공 | 한국어 기본 화면 |
| `en` | `/en` | 기본 제공 | 상단 언어 선택 메뉴에서 전환 |
| 추가 locale | `/ja`, `/zh`, `/es`, `/fr` 등 | 확장 가능 | 20개 국어 이상 확장 시 PRD/TRD에 우선순위와 번역 범위 작성 |

- 메뉴명, CTA, 폼 라벨, 오류 메시지, 법무 문구는 locale별로 관리합니다.
- 언어별 페이지 수가 달라지면 사용자가 빈 페이지로 이동하지 않도록 fallback 또는 비노출 정책을 정합니다.
- 블로그와 SEO 페이지는 locale별 slug, canonical, alternates 정책을 명확히 적습니다.
