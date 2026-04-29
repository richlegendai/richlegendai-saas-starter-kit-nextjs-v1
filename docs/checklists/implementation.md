# 구현 체크리스트

- [ ] 제품명, 도메인, 기본 locale을 `lib/site.ts`에서 교체
- [ ] 제품 요구사항을 `docs/requirements/PRD.md`에 작성
- [ ] 사용자 시나리오를 `docs/requirements/Use-Case.md`에 작성
- [ ] 정보 구조와 라우팅을 `docs/requirements/IA.md`에 작성
- [ ] DB 테이블, 관계, PK/FK, 인덱스, 보존/삭제 정책을 `docs/requirements/ERD.md`에 작성
- [ ] 기술 요구사항을 `docs/requirements/TRD.md`에 작성
- [ ] 디자인 기준과 컴포넌트 요구사항을 `docs/design-system/Design-System.md`에 작성
- [ ] i18n 지원 언어, 기본 locale, 번역 범위, 20개 국어 이상 확장 계획을 PRD/IA/TRD에 작성
- [ ] 새 locale 추가 시 `i18n/routing.ts`, `lib/site.ts`, 메시지/카피 파일, sitemap, metadata alternates를 함께 갱신
- [ ] 가격 플랜과 Polar product ID를 실제 상품에 맞게 교체
- [ ] Clerk sign-in/sign-up URL과 redirect 정책 확정
- [ ] Admin route 보호 방식을 password 또는 Clerk role로 확정
- [ ] 블로그 seed 콘텐츠를 실제 콘텐츠 전략으로 교체
- [ ] Supabase migration을 생성하고 staging DB에서 먼저 검증
- [ ] 약관/개인정보처리방침을 실제 법무 문서로 교체
