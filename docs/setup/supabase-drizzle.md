# Supabase + Drizzle 설정 가이드

## 환경변수

```bash
DATABASE_URL="postgresql://USER@HOST:5432/DATABASE"
```

## 명령

```bash
pnpm db:generate
pnpm db:migrate
pnpm db:studio
```

## 스키마 규칙

- 모든 테이블 첫 컬럼은 `idx SERIAL PRIMARY KEY`
- 외부 노출 식별자는 `id UUID DEFAULT gen_random_uuid()`
- 시간 컬럼은 `TIMESTAMPTZ`
- 삭제는 `deleted_at` 기반 soft delete
- 공개 템플릿에서는 브랜드 없는 테이블명(`app_users`, `app_subscriptions`)을 사용
