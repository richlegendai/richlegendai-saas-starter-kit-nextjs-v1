// Purpose: Locale routing configuration.
// Owner: template-i18n
// Last updated: 2026-04-29

import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['ko', 'en'],
  defaultLocale: 'ko',
  localePrefix: 'always',
})
