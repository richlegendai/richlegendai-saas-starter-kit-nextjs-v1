# RichLegend AI SaaS Starter Kit Agent Notes

- 존댓말과 한국어를 기본으로 사용합니다.
- 공개 저장소 기준으로 secret, 개인 도메인, 실서비스 브랜드 문자열을 커밋하지 않습니다.
- `.env.example`은 placeholder만 포함하고, `.env.local`과 `.env*` 실제 파일은 커밋하지 않습니다.
- Next.js App Router, TypeScript strict, TailwindCSS, Base UI, Clerk, Polar, Supabase Postgres, Drizzle ORM을 기본 스택으로 유지합니다.
- 변경 후 `pnpm lint`, `pnpm type-check`, `pnpm test`, `pnpm secret-scan`, `pnpm build` 순서로 검증합니다.
