# Polar 설정 가이드

## 환경변수

```bash
POLAR_ACCESS_TOKEN=""
POLAR_ORGANIZATION_ID=""
POLAR_WEBHOOK_SECRET=""
POLAR_SERVER="sandbox"
NEXT_PUBLIC_POLAR_PRODUCT_ID_PRO=""
```

## Checkout

- Route: `/api/checkout`
- Product: `NEXT_PUBLIC_POLAR_PRODUCT_ID_PRO`
- Success URL: `/en/checkout/success`

## Webhook

- Endpoint: `https://your-domain.com/api/webhooks/polar`
- Secret: `POLAR_WEBHOOK_SECRET`
- 현재 템플릿은 signature guard와 event routing scaffold를 제공합니다. 실제 운영 전 Polar 공식 webhook helper 또는 현재 계정의 signature header 규칙에 맞춰 검증 로직을 확정하세요.
