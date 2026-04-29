# Vercel, GA4, Google Search Console 설정 가이드

## Vercel

1. GitHub 저장소를 Vercel에 연결합니다.
2. Production/Preview 환경변수를 분리해서 등록합니다.
3. `pnpm build`가 Vercel에서도 통과하는지 확인합니다.

## GA4

```bash
NEXT_PUBLIC_GA_ID="G-XXXXXXXXXX"
```

값이 있을 때만 `@next/third-parties/google`의 `GoogleAnalytics`가 로드됩니다.

## Google Search Console

```bash
GOOGLE_SITE_VERIFICATION=""
```

HTML tag verification의 content 값만 넣습니다. 템플릿은 Metadata API의 `verification.google`로 `<head>`에 메타 태그를 렌더링합니다.
