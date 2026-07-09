'use client'

import { IconPrint } from './icons'

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 text-sm font-medium
                 text-stone-700 border border-stone-300 rounded-md
                 px-3 py-2 bg-cream
                 transition-colors duration-200
                 hover:bg-stone-100 hover:border-stone-500"
      aria-label="In hoặc lưu PDF"
    >
      <IconPrint className="w-4 h-4" />
      In / Lưu PDF
    </button>
  )
}
