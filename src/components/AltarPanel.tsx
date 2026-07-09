import type { ReactNode } from 'react'
import { Mandala, OrnamentCorner } from './ornaments'

interface Props {
  children: ReactNode
  className?: string
  watermark?: ReactNode
  cornerSize?: string
}

export function AltarPanel({
  children,
  className = '',
  watermark,
  cornerSize = 'w-10 h-10',
}: Props) {
  return (
    <div
      className={`relative overflow-hidden bg-[#0A2623] ${className}`}
    >
      <Mandala className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] text-ochre-400 opacity-[0.13] pointer-events-none" />
      {watermark}
      <OrnamentCorner
        className={`absolute top-3.5 left-3.5 ${cornerSize} text-ochre-500/70`}
      />
      <OrnamentCorner
        className={`absolute top-3.5 right-3.5 ${cornerSize} text-ochre-500/70 -scale-x-100`}
      />
      <OrnamentCorner
        className={`absolute bottom-3.5 left-3.5 ${cornerSize} text-ochre-500/70 -scale-y-100`}
      />
      <OrnamentCorner
        className={`absolute bottom-3.5 right-3.5 ${cornerSize} text-ochre-500/70 -scale-100`}
      />
      <div className="relative">{children}</div>
    </div>
  )
}
