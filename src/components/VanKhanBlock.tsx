'use client'

import { Fragment, type ReactNode } from 'react'
import { CopyButton } from './CopyButton'
import { usePersonalize } from './PersonalizeProvider'
import { OrnamentCorner, OrnamentLotus } from './ornaments'
import {
  personalizePlainText,
  PLACEHOLDER_RE,
  resolvePlaceholder,
  type PersonalizeValues,
} from '@/lib/personalize'

interface Props {
  text: string
  title?: string
}

function renderPersonalized(
  text: string,
  values: PersonalizeValues
): ReactNode[] {
  const nodes: ReactNode[] = []
  const re = new RegExp(PLACEHOLDER_RE.source, 'g')
  let last = 0
  let key = 0
  let m: RegExpExecArray | null
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) {
      nodes.push(<Fragment key={key++}>{text.slice(last, m.index)}</Fragment>)
    }
    const resolved = resolvePlaceholder(m[1], values)
    if (resolved) {
      nodes.push(
        <mark
          key={key++}
          className="bg-ochre-100 text-ochre-700 font-medium rounded px-1 not-italic"
        >
          {resolved}
        </mark>
      )
    } else {
      nodes.push(
        <span
          key={key++}
          className="text-stone-500 border-b border-dashed border-ochre-500"
        >
          {m[0]}
        </span>
      )
    }
    last = m.index + m[0].length
  }
  if (last < text.length) {
    nodes.push(<Fragment key={key++}>{text.slice(last)}</Fragment>)
  }
  return nodes
}

export function VanKhanBlock({ text, title }: Props) {
  const { ten, diaChi, lunar } = usePersonalize()
  const values: PersonalizeValues = {
    ten,
    diaChi,
    thangAm: lunar?.monthLabel ?? '',
    namAm: lunar?.yearCanChi ?? '',
  }
  const copyText = personalizePlainText(text, values)

  return (
    <div className="my-10">
      <div className="van-khan-frame">
        <OrnamentCorner className="absolute top-2 left-2 w-8 h-8 text-ochre-500/70" />
        <OrnamentCorner className="absolute top-2 right-2 w-8 h-8 text-ochre-500/70 -scale-x-100" />
        <OrnamentCorner className="absolute bottom-2 left-2 w-8 h-8 text-ochre-500/70 -scale-y-100" />
        <OrnamentCorner className="absolute bottom-2 right-2 w-8 h-8 text-ochre-500/70 -scale-100" />

        {title && <h2 className="frame-label">{title}</h2>}

        <div className="van-khan-text">{renderPersonalized(text, values)}</div>

        <div className="flex justify-center mt-6" aria-hidden="true">
          <OrnamentLotus className="w-6 h-6 text-ochre-400" />
        </div>
      </div>

      <div className="flex justify-center mt-4 no-print">
        <CopyButton text={copyText} />
      </div>
    </div>
  )
}
