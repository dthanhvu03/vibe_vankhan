import type { ReactNode } from 'react'

type Accent = 'ink' | 'ochre' | 'vermilion'

const ACCENT: Record<Accent, { badge: string; title: string }> = {
  ink: { badge: 'bg-ink-100 text-ink-600', title: 'text-stone-900' },
  ochre: { badge: 'bg-ochre-100 text-ochre-700', title: 'text-stone-900' },
  vermilion: {
    badge: 'bg-vermilion-100 text-vermilion-700',
    title: 'text-vermilion-700',
  },
}

interface Props {
  icon: ReactNode
  title: string
  accent?: Accent
  children: ReactNode
  className?: string
}

export function InfoCard({
  icon,
  title,
  accent = 'ink',
  children,
  className = '',
}: Props) {
  const a = ACCENT[accent]
  return (
    <section
      className={`not-prose my-6 bg-stone-50 border border-stone-200 rounded-xl p-5 shadow-sm ${className}`}
    >
      <div className="flex items-center gap-2.5 mb-3">
        <span
          className={`inline-flex w-8 h-8 flex-shrink-0 items-center justify-center rounded-lg ${a.badge}`}
        >
          {icon}
        </span>
        <h3 className={`font-serif text-lg font-medium ${a.title}`}>{title}</h3>
      </div>
      <div className="text-stone-700">{children}</div>
    </section>
  )
}
