// Purpose: Locale middleware proxy for next-intl.
// Owner: template-platform
// Last updated: 2026-04-29

import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'

export default createMiddleware(routing)

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
}
