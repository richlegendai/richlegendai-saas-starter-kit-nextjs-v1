# Clerk 설정 가이드

## 환경변수

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=""
CLERK_SECRET_KEY=""
CLERK_WEBHOOK_SECRET=""
NEXT_PUBLIC_CLERK_SIGN_IN_URL="/sign-in"
NEXT_PUBLIC_CLERK_SIGN_UP_URL="/sign-up"
```

## Webhook

- Endpoint: `https://your-domain.com/api/webhooks/clerk`
- Required event: `user.created`
- Signature verification: `svix-id`, `svix-timestamp`, `svix-signature`

## 구현 메모

- `lib/auth/clerk-webhook.ts`는 payload 검증과 사용자 정규화를 담당합니다.
- `lib/db/subscriptions.ts`는 user + free subscription bootstrap을 idempotent하게 처리합니다.
- 공개 페이지 빌드를 위해 Clerk secret이 없을 때도 앱이 깨지지 않도록 API에서 503 또는 설정 안내를 반환합니다.
