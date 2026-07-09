const GREEN_DEEP = '#3E4C2E'
const GREEN_OLIVE = '#5E6E42'
const GREEN_SAGE = '#8A9968'

function WillowLeft() {
  const bough = 'M-12 26 C 60 14, 138 46, 214 118'
  const fronds = Array.from({ length: 11 }, (_, i) => {
    const sx = 10 + i * 18
    const sy = 30 + i * 9
    const ex = sx + 8 - (i % 3) * 5
    const ey = 340 + (i % 4) * 120 + i * 16
    const c1x = sx - 7
    const c1y = sy + 150
    const c2x = sx + 18
    const c2y = (sy + ey) / 2 + 70
    return {
      d: `M${sx} ${sy} C ${c1x} ${c1y}, ${c2x} ${c2y}, ${ex} ${ey}`,
      w: 1.1 + (i % 3) * 0.7,
      tipX: ex,
      tipY: ey,
    }
  })
  return (
    <svg
      viewBox="0 0 240 900"
      preserveAspectRatio="xMinYMin slice"
      className="h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="willowStroke" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={GREEN_SAGE} />
          <stop offset="100%" stopColor={GREEN_OLIVE} />
        </linearGradient>
        <filter id="willowSoft" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="2" dy="4" stdDeviation="5" floodColor="#2C3A1E" floodOpacity="0.2" />
        </filter>
      </defs>
      <g style={{ filter: 'blur(3px)' }} opacity="0.35">
        {fronds.map((f, i) => (
          <path key={`b${i}`} d={f.d} fill="none" stroke={GREEN_OLIVE} strokeWidth={f.w + 0.6} strokeLinecap="round" />
        ))}
      </g>
      <g filter="url(#willowSoft)">
        <path d={bough} fill="none" stroke={GREEN_DEEP} strokeWidth="6" strokeLinecap="round" />
        {fronds.map((f, i) => (
          <g key={i}>
            <path d={f.d} fill="none" stroke="url(#willowStroke)" strokeWidth={f.w} strokeLinecap="round" />
            <ellipse cx={f.tipX} cy={f.tipY} rx="2.4" ry="6" fill={GREEN_OLIVE} transform={`rotate(12 ${f.tipX} ${f.tipY})`} />
          </g>
        ))}
      </g>
    </svg>
  )
}

function Leaf({ x, y, angle, len = 30 }: { x: number; y: number; angle: number; len?: number }) {
  return (
    <path
      d={`M0 0 Q ${len * 0.4} -3 ${len} -${len * 0.42} Q ${len * 0.35} 4 0 0 Z`}
      transform={`translate(${x} ${y}) rotate(${angle})`}
      fill="url(#bambooLeaf)"
    />
  )
}

function LeafCluster({ x, y, flip = false }: { x: number; y: number; flip?: boolean }) {
  const dir = flip ? -1 : 1
  return (
    <g transform={`scale(${dir} 1) translate(${flip ? -x : x} ${y})`}>
      <Leaf x={0} y={0} angle={-52} len={34} />
      <Leaf x={0} y={0} angle={-30} len={40} />
      <Leaf x={0} y={0} angle={-8} len={36} />
      <Leaf x={0} y={0} angle={16} len={30} />
    </g>
  )
}

function BambooRight() {
  const nodes1 = [140, 250, 360, 470, 580, 690, 800]
  const nodes2 = [200, 320, 440, 560, 680]
  return (
    <svg
      viewBox="0 0 220 900"
      preserveAspectRatio="xMaxYMax slice"
      className="h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="bambooCyl1" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#4A5636" />
          <stop offset="45%" stopColor="#93A06B" />
          <stop offset="100%" stopColor="#4A5636" />
        </linearGradient>
        <linearGradient id="bambooCyl2" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#48532F" />
          <stop offset="50%" stopColor="#7E8C5A" />
          <stop offset="100%" stopColor="#48532F" />
        </linearGradient>
        <linearGradient id="bambooLeaf" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#6E8049" />
          <stop offset="100%" stopColor="#45562C" />
        </linearGradient>
        <filter id="bambooSoft" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="-2" dy="4" stdDeviation="5" floodColor="#2C3A1E" floodOpacity="0.22" />
        </filter>
      </defs>

      <g style={{ filter: 'blur(3px)' }} opacity="0.3">
        <rect x="96" y="120" width="8" height="780" rx="4" fill={GREEN_OLIVE} />
      </g>

      <g filter="url(#bambooSoft)">
        <rect x="150" y="40" width="12" height="860" rx="6" fill="url(#bambooCyl1)" />
        {nodes1.map((y) => (
          <rect key={y} x="148" y={y} width="16" height="4" rx="2" fill="#3B472A" />
        ))}
        <rect x="186" y="150" width="8" height="750" rx="4" fill="url(#bambooCyl2)" />
        {nodes2.map((y) => (
          <rect key={y} x="184" y={y} width="12" height="3" rx="1.5" fill="#3B472A" />
        ))}
        <LeafCluster x={156} y={140} />
        <LeafCluster x={156} y={360} flip />
        <LeafCluster x={190} y={200} />
        <LeafCluster x={156} y={580} />
        <LeafCluster x={190} y={470} flip />
      </g>
    </svg>
  )
}

export function BackgroundDecor() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="hidden lg:block absolute inset-y-0 left-0 w-[200px] xl:w-[260px] opacity-[0.4]">
        <WillowLeft />
      </div>
      <div className="hidden lg:block absolute inset-y-0 right-0 w-[180px] xl:w-[230px] opacity-[0.45]">
        <BambooRight />
      </div>
    </div>
  )
}
