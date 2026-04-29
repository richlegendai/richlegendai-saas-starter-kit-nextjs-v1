# 공개 저장소 출시 체크리스트

## Secret

- [ ] `.env.local`, `.env.production`, `.env.prod`, `.vercel`이 커밋되지 않았습니다.
- [ ] README/docs에 실제 DB URL, API token, webhook URL, 개인 이메일이 없습니다.
- [ ] `pnpm secret-scan`이 통과합니다.
- [ ] `NEXT_PUBLIC_*`에는 공개되어도 되는 값만 있습니다.

## 기능

- [ ] PRD/TRD/Use Case/IA/ERD 문서가 실제 제품 요구사항으로 갱신되었습니다.
- [ ] 디자인 시스템 문서와 `/ko/design-system` 페이지가 실제 브랜드 기준으로 갱신되었습니다.
- [ ] i18n 기본 언어, 지원 언어, 번역 범위, 20개 국어 이상 확장 계획이 문서화되었습니다.
- [ ] 랜딩, 가격, 블로그, 약관, 개인정보처리방침 페이지가 열립니다.
- [ ] 대시보드와 어드민은 production 전 보호 정책이 확정되었습니다.
- [ ] Clerk webhook endpoint가 `user.created` 중복 이벤트를 안전하게 처리합니다.
- [ ] Polar checkout과 webhook은 sandbox에서 검증했습니다.
- [ ] Supabase migration이 dev/prod에서 분리되어 있습니다.

## SEO/Analytics

- [ ] `sitemap.xml`, `robots.txt`, RSS가 생성됩니다.
- [ ] canonical, Open Graph, Twitter card가 페이지별로 설정됩니다.
- [ ] locale별 canonical, alternates/hreflang, sitemap URL이 확인되었습니다.
- [ ] JSON-LD가 Rich Results Test에서 오류 없이 검증됩니다.
- [ ] Search Console ownership verification이 완료되었습니다.
- [ ] GA4 realtime report에서 page view가 확인됩니다.

## 배포

- [ ] `pnpm lint`
- [ ] `pnpm type-check`
- [ ] `pnpm test`
- [ ] `pnpm build`
- [ ] Vercel Production deployment warning/error를 확인했습니다.
