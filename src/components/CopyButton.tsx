'use client'

import { useState } from 'react'
import { IconCheck, IconCopy } from './icons'

interface Props {
  text: string
  label?: string
  copiedLabel?: string
  className?: string
}

export function CopyButton({
  text,
  label = 'Sao chép văn khấn',
  copiedLabel = 'Đã sao chép',
  className = '',
}: Props) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      const textarea = document.createElement('textarea')
      textarea.value = text
      textarea.style.position = 'fixed'
      textarea.style.opacity = '0'
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-live="polite"
      className={`inline-flex items-center gap-2 text-sm font-medium
                  text-ink-600 border border-ink-200 rounded-md
                  px-3 py-2 bg-cream
                  transition-colors duration-200
                  hover:bg-ink-50 hover:border-ink-300
                  ${className}`}
    >
      {copied ? (
        <>
          <IconCheck className="w-4 h-4" />
          {copiedLabel}
        </>
      ) : (
        <>
          <IconCopy className="w-4 h-4" />
          {label}
        </>
      )}
    </button>
  )
}
