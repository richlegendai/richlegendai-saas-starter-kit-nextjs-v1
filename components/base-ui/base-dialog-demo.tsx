// Purpose: Base UI dialog example proving the template uses @base-ui/react primitives.
// Owner: template-design
// Last updated: 2026-04-29

'use client'

import { Dialog } from '@base-ui/react/dialog'

export function BaseDialogDemo({ locale, framed = true }: { locale: string; framed?: boolean }) {
  const copy =
    locale === 'en'
      ? {
          title: 'Accessible modal primitive',
          description: 'Base UI provides behavior. TailwindCSS owns the visual system.',
          trigger: 'Open Base UI dialog',
          dialogTitle: 'Base UI is installed',
          dialogDescription:
            'Use these unstyled primitives for dialogs, menus, tabs, fields, and other interactive SaaS controls.',
          close: 'Close',
        }
      : {
          title: '접근성 있는 모달 primitive',
          description: 'Base UI는 동작을 담당하고 TailwindCSS는 시각 시스템을 담당합니다.',
          trigger: 'Base UI 다이얼로그 열기',
          dialogTitle: 'Base UI가 설치되어 있습니다',
          dialogDescription:
            '다이얼로그, 메뉴, 탭, 필드 등 SaaS 상호작용 UI에 이 unstyled primitive를 사용할 수 있습니다.',
          close: '닫기',
        }

  return (
    <Dialog.Root>
      <div className={framed ? 'rounded-lg border bg-background p-6 shadow-panel' : ''}>
        <h3 className="text-xl font-semibold">{copy.title}</h3>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          {copy.description}
        </p>
        <Dialog.Trigger className="mt-5 inline-flex h-10 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground">
          {copy.trigger}
        </Dialog.Trigger>
      </div>
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-40 bg-black/40" />
        <Dialog.Popup className="fixed left-1/2 top-1/2 z-50 w-[min(92vw,28rem)] -translate-x-1/2 -translate-y-1/2 rounded-lg border bg-background p-6 shadow-panel">
          <Dialog.Title className="text-lg font-semibold">{copy.dialogTitle}</Dialog.Title>
          <Dialog.Description className="mt-2 text-sm leading-6 text-muted-foreground">
            {copy.dialogDescription}
          </Dialog.Description>
          <div className="mt-6 flex justify-end">
            <Dialog.Close className="inline-flex h-10 items-center rounded-md border bg-background px-4 text-sm font-medium hover:bg-muted">
              {copy.close}
            </Dialog.Close>
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
