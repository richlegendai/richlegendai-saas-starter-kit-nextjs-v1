// Purpose: Shared legal document layout.
// Owner: template-legal
// Last updated: 2026-04-29

export function LegalPage({ title, sections }: { title: string; sections: string[] }) {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-semibold">{title}</h1>
      <div className="mt-8 grid gap-5">
        {sections.map((section) => (
          <p key={section} className="leading-7 text-muted-foreground">
            {section}
          </p>
        ))}
      </div>
    </main>
  )
}
