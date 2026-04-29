// Purpose: Header language switcher that keeps the current path while changing locale.
// Owner: template-i18n
// Last updated: 2026-04-29

'use client'

import { ChevronDown } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import type { ChangeEvent } from 'react'

const actualLocales = ['ko', 'en'] as const

const languageOptions = [
  { value: 'ko', label: '한국어' },
  { value: 'en', label: 'English' },
  { value: 'ja', label: '日本語' },
  { value: 'zh-CN', label: '简体中文' },
  { value: 'zh-TW', label: '繁體中文' },
  { value: 'es', label: 'Español' },
  { value: 'fr', label: 'Français' },
  { value: 'de', label: 'Deutsch' },
  { value: 'pt', label: 'Português' },
  { value: 'it', label: 'Italiano' },
  { value: 'nl', label: 'Nederlands' },
  { value: 'pl', label: 'Polski' },
  { value: 'ru', label: 'Русский' },
  { value: 'uk', label: 'Українська' },
  { value: 'ar', label: 'العربية' },
  { value: 'hi', label: 'हिन्दी' },
  { value: 'id', label: 'Bahasa Indonesia' },
  { value: 'ms', label: 'Bahasa Melayu' },
  { value: 'vi', label: 'Tiếng Việt' },
  { value: 'th', label: 'ไทย' },
  { value: 'tr', label: 'Türkçe' },
  { value: 'sv', label: 'Svenska' },
  { value: 'da', label: 'Dansk' },
  { value: 'fi', label: 'Suomi' },
  { value: 'no', label: 'Norsk' },
  { value: 'cs', label: 'Čeština' },
  { value: 'el', label: 'Ελληνικά' },
  { value: 'he', label: 'עברית' },
]

type ActualLocale = (typeof actualLocales)[number]

function toActualLocale(locale: string): ActualLocale {
  return locale === 'ko' ? 'ko' : 'en'
}

export function LocaleSwitcher({ currentLocale }: { currentLocale: string }) {
  const pathname = usePathname()
  const router = useRouter()

  function hrefFor(locale: ActualLocale) {
    const segments = pathname.split('/')

    if (actualLocales.includes(segments[1] as ActualLocale)) {
      segments[1] = locale
      return segments.join('/') || `/${locale}`
    }

    return `/${locale}`
  }

  function handleChange(event: ChangeEvent<HTMLSelectElement>) {
    router.push(hrefFor(toActualLocale(event.target.value)))
  }

  return (
    <label className="relative inline-flex h-10 shrink-0 items-center rounded-md border bg-background text-sm text-foreground transition hover:bg-muted">
      <span className="sr-only">언어 선택</span>
      <select
        aria-label="언어 선택"
        className="h-full appearance-none rounded-md bg-transparent px-3 pr-8 text-sm font-medium outline-none"
        value={toActualLocale(currentLocale)}
        onChange={handleChange}
      >
        {languageOptions.map((language) => (
          <option key={language.value} value={language.value}>
            {language.label}
          </option>
        ))}
      </select>
      <ChevronDown
        className="pointer-events-none absolute right-2 h-4 w-4 text-muted-foreground"
        aria-hidden="true"
      />
    </label>
  )
}
