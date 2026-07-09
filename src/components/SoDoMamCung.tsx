'use client'

import { useState } from 'react'
import {
  MAM_CUNG_DETAILS,
  MAM_CUNG_REGION_NOTES,
  MAM_CUNG_STEPS,
} from '@/lib/mamCung'

type Region = 'bac' | 'trung' | 'nam'

const REGION_LABEL: Record<Region, string> = {
  bac: 'Miền Bắc',
  trung: 'Miền Trung',
  nam: 'Miền Nam',
}

const HIGHLIGHT: Record<string, { cx: number; cy: number; r: number }[]> = {
  'bat-huong': [{ cx: 200, cy: 210, r: 40 }],
  den: [
    { cx: 124, cy: 226, r: 20 },
    { cx: 275, cy: 226, r: 20 },
  ],
  hoa: [{ cx: 326, cy: 214, r: 26 }],
  qua: [{ cx: 76, cy: 246, r: 30 }],
  nuoc: [{ cx: 276, cy: 294, r: 30 }],
  le: [{ cx: 200, cy: 290, r: 38 }],
  trau: [{ cx: 112, cy: 296, r: 26 }],
  vang: [{ cx: 312, cy: 294, r: 22 }],
}

const RAYS = [-75, -56, -37, -18, 0, 18, 37, 56, 75].map((a) => {
  const rad = (a * Math.PI) / 180
  return { x2: 200 + 150 * Math.sin(rad), y2: 150 - 150 * Math.cos(rad) }
})

const PETALS = [0, 45, 90, 135, 180, 225, 270, 315]

export function SoDoMamCung({ variant = 'standard' }: { variant?: string }) {
  void variant
  const [sel, setSel] = useState<string | null>(null)
  const [region, setRegion] = useState<Region>('bac')
  const detail = sel ? MAM_CUNG_DETAILS[sel] : null

  const itemProps = (k: string) => ({
    className: 'vk-item',
    role: 'button',
    'aria-label': MAM_CUNG_DETAILS[k].title,
    onClick: () => setSel(k),
    style: { cursor: 'pointer' as const },
  })

  return (
    <div className="my-8 not-prose">
      <div className="flex gap-1.5 mb-3">
        {(Object.keys(REGION_LABEL) as Region[]).map((r) => (
          <button
            key={r}
            type="button"
            onClick={() => setRegion(r)}
            className={
              'text-sm px-3 py-1.5 rounded-md border transition-colors ' +
              (region === r
                ? 'bg-ochre-500 text-cream border-ochre-500'
                : 'bg-transparent text-stone-700 border-stone-300 hover:border-ochre-400')
            }
          >
            {REGION_LABEL[r]}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-4 items-start">
        <svg
          viewBox="0 0 400 350"
          className="flex-1 min-w-[300px] bg-[#0A2623] border border-ink-800 rounded-lg"
          role="img"
          aria-label="Minh hoạ bàn thờ — chạm vào từng lễ vật để xem chi tiết"
        >
          <ellipse cx="200" cy="150" rx="175" ry="110" fill="#B08D3D" opacity="0.10" />

          <g stroke="#D9BB78" strokeWidth="1" opacity="0.06">
            {RAYS.map((p, i) => (
              <line key={i} x1="200" y1="150" x2={p.x2} y2={p.y2} />
            ))}
          </g>

          <g fill="none" stroke="#C4A557" opacity="0.10">
            <circle cx="200" cy="150" r="55" />
            <circle cx="200" cy="150" r="85" />
            <circle cx="200" cy="150" r="115" />
            {PETALS.map((a) => (
              <ellipse
                key={a}
                cx="200"
                cy="55"
                rx="5"
                ry="13"
                transform={`rotate(${a} 200 150)`}
              />
            ))}
          </g>

          <g fill="none" stroke="#C4A557" strokeWidth="1.4" strokeLinecap="round" opacity="0.16">
            <path d="M40 46 q8 -12 18 -5 q6 -8 14 -1 q8 0 6 9 q10 1 6 10" transform="translate(-6 0)" />
            <path d="M348 46 q-8 -12 -18 -5 q-6 -8 -14 -1 q-8 0 -6 9 q-10 1 -6 10" transform="translate(6 0)" />
          </g>

          <rect x="26" y="270" width="348" height="10" rx="2" fill="#5C3A1E" />
          <rect x="26" y="280" width="348" height="40" fill="#3E2713" />
          <rect x="26" y="270" width="348" height="3" fill="#B08D3D" opacity="0.7" />

          {sel &&
            HIGHLIGHT[sel]?.map((h, i) => (
              <ellipse
                key={i}
                cx={h.cx}
                cy={h.cy}
                rx={h.r}
                ry={h.r * 0.72}
                fill="#B08D3D"
                fillOpacity="0.16"
                stroke="#D9BB78"
                strokeWidth="1.4"
                strokeOpacity="0.85"
              />
            ))}

          <g {...itemProps('qua')}>
            <path d="M50 268 q28 14 56 0 l-6 -16 q-22 8 -44 0 z" fill="#123E42" stroke="#B08D3D" strokeWidth="1" />
            <rect x="72" y="268" width="8" height="12" fill="#0E2E26" />
            <rect x="66" y="280" width="20" height="5" rx="2" fill="#B08D3D" />
            <circle cx="66" cy="244" r="9" fill="#B84A38" />
            <circle cx="86" cy="246" r="9" fill="#C4A557" />
            <circle cx="76" cy="232" r="9" fill="#7C8C3E" />
            <circle cx="58" cy="250" r="7" fill="#997A32" />
            <circle cx="94" cy="250" r="7" fill="#CC6D5B" />
          </g>

          <g {...itemProps('hoa')}>
            <path d="M318 268 l-8 -34 q16 -6 32 0 l-8 34 z" fill="#123E42" stroke="#B08D3D" strokeWidth="1" />
            <path d="M326 238 v-20" stroke="#4A7C3E" strokeWidth="1.5" fill="none" />
            <g fill="#E29585" stroke="#B84A38" strokeWidth="0.6">
              <ellipse cx="326" cy="206" rx="5" ry="11" />
              <ellipse cx="318" cy="210" rx="5" ry="10" transform="rotate(-32 318 210)" />
              <ellipse cx="334" cy="210" rx="5" ry="10" transform="rotate(32 334 210)" />
            </g>
            <circle cx="326" cy="208" r="3.5" fill="#C4A557" />
          </g>

          <g {...itemProps('den')}>
            <rect x="120" y="238" width="9" height="32" rx="2" fill="#C4A557" />
            <rect x="117" y="234" width="15" height="5" rx="2" fill="#B08D3D" />
            <ellipse cx="124.5" cy="228" rx="9" ry="12" fill="#B08D3D" opacity="0.35" />
            <path className="vk-flame" d="M124.5 214 q6 8 0 16 q-6 -8 0 -16z" fill="#F5C06A" />
            <path className="vk-flame" d="M124.5 219 q3 5 0 9 q-3 -4 0 -9z" fill="#FBE8A0" />
            <rect x="271" y="238" width="9" height="32" rx="2" fill="#C4A557" />
            <rect x="268" y="234" width="15" height="5" rx="2" fill="#B08D3D" />
            <ellipse cx="275.5" cy="228" rx="9" ry="12" fill="#B08D3D" opacity="0.35" />
            <path className="vk-flame" d="M275.5 214 q6 8 0 16 q-6 -8 0 -16z" fill="#F5C06A" />
            <path className="vk-flame" d="M275.5 219 q3 5 0 9 q-3 -4 0 -9z" fill="#FBE8A0" />
          </g>

          <path className="vk-smoke" d="M193 168 q-8 -16 2 -30 q8 -12 0 -26" stroke="#D9BB78" strokeWidth="1.6" fill="none" strokeLinecap="round" />
          <path className="vk-smoke-2" d="M207 168 q8 -16 -2 -30 q-8 -12 0 -26" stroke="#D9BB78" strokeWidth="1.6" fill="none" strokeLinecap="round" />

          <g {...itemProps('bat-huong')}>
            <g stroke="#8B2E1F" strokeWidth="2" strokeLinecap="round">
              <path d="M188 232 v-58" />
              <path d="M200 232 v-66" />
              <path d="M212 232 v-58" />
            </g>
            <circle cx="188" cy="172" r="2.4" fill="#F0C060" />
            <circle cx="200" cy="164" r="2.6" fill="#F0C060" />
            <circle cx="212" cy="172" r="2.4" fill="#F0C060" />
            <path d="M170 236 q30 26 60 0 q4 -14 -6 -18 q-24 8 -48 0 q-10 4 -6 18z" fill="#7A2E1F" stroke="#B08D3D" strokeWidth="1.2" />
            <ellipse cx="200" cy="222" rx="24" ry="6" fill="#5C1F13" />
            <path d="M178 236 q22 6 44 0" stroke="#D9BB78" strokeWidth="1" fill="none" opacity="0.7" />
          </g>

          <g {...itemProps('le')}>
            <ellipse cx="200" cy="300" rx="34" ry="9" fill="#123E42" stroke="#B08D3D" strokeWidth="1" />
            <path d="M176 298 q24 -26 48 0z" fill="#245B5F" stroke="#B08D3D" strokeWidth="1" />
            <circle cx="200" cy="272" r="3" fill="#D9BB78" />
          </g>

          <g {...itemProps('nuoc')}>
            <g fill="#EFE7D2" stroke="#B08D3D" strokeWidth="0.9">
              <path d="M250 300 l2 -12 h12 l2 12z" />
              <path d="M270 300 l2 -12 h12 l2 12z" />
              <path d="M290 300 l2 -12 h12 l2 12z" />
            </g>
          </g>

          <g {...itemProps('trau')}>
            <ellipse cx="112" cy="300" rx="22" ry="7" fill="#123E42" stroke="#B08D3D" strokeWidth="0.9" />
            <path d="M104 298 q-6 -12 6 -16 q12 4 6 16z" fill="#4A7C3E" />
            <path d="M118 299 q-4 -9 5 -12 q9 3 5 12z" fill="#639922" />
            <circle cx="120" cy="296" r="4" fill="#C4A557" />
          </g>

          <g {...itemProps('vang')}>
            <g fill="#D9BB78" stroke="#8B6D28" strokeWidth="0.8">
              <path d="M300 300 l4 -9 h18 l4 9z" />
              <path d="M306 291 l3 -7 h14 l3 7z" />
            </g>
            <path d="M309 296 h10" stroke="#8B6D28" strokeWidth="0.7" />
          </g>

          <text x="200" y="338" textAnchor="middle" fontFamily="var(--font-lora), Georgia, serif" fontSize="12" fill="#67A3A6">
            Chạm vào từng lễ vật để xem chi tiết
          </text>
        </svg>

        <div className="flex-1 min-w-[220px]">
          <div className="bg-ink-50 border border-ink-200 rounded-lg p-4 min-h-[130px]">
            <p className="text-[11px] tracking-[0.1em] text-ochre-700 uppercase font-sans mb-1">
              {detail ? 'Lễ vật' : 'Chạm vào bàn thờ'}
            </p>
            <p className="text-lg font-serif text-ink-800 mb-1.5">
              {detail ? detail.title : 'Bày mâm cúng'}
            </p>
            <p className="text-sm text-stone-700 leading-relaxed">
              {detail
                ? detail.detail
                : 'Chạm vào từng lễ vật trên bàn thờ để xem nên đặt gì và ý nghĩa.'}
            </p>
          </div>
          <p className="mt-2.5 px-0.5 text-xs italic text-stone-500">
            {MAM_CUNG_REGION_NOTES[region]}
          </p>
        </div>
      </div>

      <div className="mt-5 paper-panel rounded-lg px-5 py-4">
        <p className="text-base font-serif text-stone-900 mb-2.5">
          Trình tự hành lễ
        </p>
        <ol className="list-decimal pl-5 text-sm text-stone-700 leading-loose">
          {MAM_CUNG_STEPS.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ol>
      </div>
    </div>
  )
}
