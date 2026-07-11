'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { CATEGORY_META } from '@/lib/categories'
import { IconClose, IconMenu } from './icons'
import { SealMark } from './ornaments'

export function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const categories = Object.entries(CATEGORY_META)

  return (
    <header className="border-b border-stone-200 bg-cream/95 sticky top-0 z-40 backdrop-blur no-print">
      <div className="container-wide flex items-center justify-between py-4">
        <Link
          href="/"
          className="flex items-center gap-2.5 no-underline"
          onClick={() => setOpen(false)}
        >
          <SealMark className="w-8 h-8" />
          <span className="font-serif text-2xl font-semibold text-ink-800">
            Cội Việt
          </span>
        </Link>

        <nav className="hidden md:flex gap-6 text-xs tracking-[0.12em] uppercase font-sans">
          {categories.map(([slug, meta]) => (
            <Link
              key={slug}
              href={`/${slug}`}
              className="text-stone-600 no-underline transition-colors hover:text-ink-600"
            >
              {meta.name}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-stone-700 hover:bg-stone-100"
          aria-label={open ? 'Đóng menu' : 'Mở menu'}
          aria-expanded={open}
        >
          {open ? (
            <IconClose className="w-6 h-6" />
          ) : (
            <IconMenu className="w-6 h-6" />
          )}
        </button>
      </div>

      {open && (
        <div
          className="md:hidden border-t border-stone-200 bg-cream"
          role="dialog"
          aria-label="Menu điều hướng"
        >
          <nav className="container-wide py-4 flex flex-col gap-1">
            {categories.map(([slug, meta]) => (
              <Link
                key={slug}
                href={`/${slug}`}
                onClick={() => setOpen(false)}
                className="block py-3 px-2 text-base text-stone-800 no-underline rounded-md hover:bg-stone-100"
              >
                <span className="font-medium">{meta.name}</span>
                <span className="block text-sm text-stone-500 mt-0.5">
                  {meta.description}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
