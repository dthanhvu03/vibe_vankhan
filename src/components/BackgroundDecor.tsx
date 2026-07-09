import { Mandala, OrnamentLotus } from './ornaments'

function ScrollBorder({ side }: { side: 'left' | 'right' }) {
  const pos = side === 'left' ? 'left-6 2xl:left-10' : 'right-6 2xl:right-10'
  return (
    <div
      className={`hidden xl:block absolute inset-y-8 ${pos}`}
    >
      <div className="h-full w-1 border-x border-ochre-500/25" />
      <OrnamentLotus className="absolute -top-6 left-1/2 -translate-x-1/2 w-4 h-4 text-ochre-500/40" />
      <OrnamentLotus className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-4 h-4 text-ochre-500/40 rotate-180" />
      <span className="absolute -top-8 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-ochre-500/40" />
      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-ochre-500/40" />
    </div>
  )
}

export function BackgroundDecor() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <Mandala className="absolute -top-24 -right-24 w-[420px] h-[420px] text-ochre-500 opacity-[0.05]" />
      <OrnamentLotus className="absolute -bottom-16 -left-20 w-[320px] h-[320px] text-ochre-500 opacity-[0.04]" />
      <ScrollBorder side="left" />
      <ScrollBorder side="right" />
    </div>
  )
}
