# TRD: 기술 요구사항 문서

## 1. 기술 개요

- 관련 PRD:
- 관련 Use Case:
- 관련 IA:
- 관련 ERD:
- 담당 모듈:

## 2. 시스템 구성

- Frontend:
- Backend/API:
- Database:
- Auth:
- Billing:
- i18n:
- Observability:
- Deployment:

## 3. API 요구사항

| Method | Path | 인증 | 요청 | 응답 | 실패 |
| --- | --- | --- | --- | --- | --- |
| GET |  |  |  |  |  |

## 4. 데이터 요구사항

| Table/Model | 목적 | 주요 컬럼 | 보존/삭제 정책 |
| --- | --- | --- | --- |
|  |  |  |  |

- 데이터 모델의 테이블/관계/PK/FK/index는 `docs/requirements/ERD.md`와 일치해야 합니다.
- Drizzle schema와 migration을 작성하기 전에 ERD의 관계와 삭제/보존 정책을 먼저 확정합니다.

## 5. 보안 요구사항

- Secret은 `.env.local`과 배포 환경변수에만 저장합니다.
- `NEXT_PUBLIC_*`에는 공개되어도 되는 값만 넣습니다.
- Webhook은 signature 검증 후 처리합니다.
- 관리자 기능은 production 전 반드시 권한 보호를 적용합니다.

## 6. 테스트 요구사항

- Unit:
- Integration:
- E2E:
- Build:
- Secret scan:

## 7. 배포와 운영

- Vercel 환경변수:
- Supabase migration:
- Clerk webhook:
- Polar webhook:
- GA/GSC:
- Rollback:

## 8. i18n/다국어 요구사항

- 기본 locale은 한국어(`ko`)입니다.
- 영어(`en`)는 상단 언어 선택 메뉴에서 전환합니다.
- 20개 국어 이상 확장이 가능하도록 locale 목록, 메시지 파일, 콘텐츠 데이터, SEO metadata를 분리해서 관리합니다.
- 새 언어 추가 시 `i18n/routing.ts`, `lib/site.ts`, locale별 메시지/카피 파일, 블로그 콘텐츠, sitemap, canonical, alternates, RSS를 함께 갱신합니다.
- 번역되지 않은 문자열이 UI에 하드코딩되지 않도록 페이지 copy helper 또는 메시지 파일을 통해 노출합니다.
- locale별 날짜, 통화, 가격, 법무 문구, 개인정보 처리 기준이 필요한지 확인합니다.
- SEO/GEO 검증에는 locale별 canonical, hreflang, Open Graph locale, sitemap URL, Search Console 색인 상태를 포함합니다.
- 다국어 확장 테스트는 최소 `ko`, `en`, 추가 샘플 locale 1개를 기준으로 빌드와 라우팅을 확인합니다.
