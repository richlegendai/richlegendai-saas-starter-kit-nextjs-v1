// Purpose: Redirect bare root traffic to the default localized marketing page.
// Owner: template-platform
// Last updated: 2026-04-29

import { redirect } from 'next/navigation'
import { routing } from '@/i18n/routing'

export default function RootPage() {
  redirect(`/${routing.defaultLocale}`)
}
