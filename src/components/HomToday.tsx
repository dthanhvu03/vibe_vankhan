'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { IconCalendar, IconChevronRight } from './icons'
import {
  getLunarInfo,
  nextOccasion,
  type LunarToday,
  type UpcomingOccasion,
} from '@/lib/lunar'

export function HomToday() {
  const [lunar, setLunar] = useState<LunarToday | null>(null)
  const [next, setNext] = useState<UpcomingOccasion | null>(null)

  useEffect(() => {
    try {
      const now = new Date()
      setLunar(getLunarInfo(now))
      setNext(nextOccasion(now))
    } catch {
      /* lỗi tính lịch — ẩn dải */
    }
  }, [])

  if (!lunar) return null

  return (
    <section className="container-wide pt-6">
      <div className="paper-panel rounded-md flex flex-col sm:flex-row sm:items-stretch overflow-hidden">
        <div className="flex items-center gap-3 px-5 py-4 flex-1">
          <span className="inline-flex w-10 h-10 flex-shrink-0 items-center justify-center border-[1.5px] border-ochre-500 text-ochre-600 rounded-md">
            <IconCalendar className="w-5 h-5" />
          </span>
          <div>
            <p className="text-[11px] tracking-[0.15em] text-ochre-700 uppercase font-sans">
              Hôm nay
            </p>
            <p className="font-serif text-stone-900">{lunar.solarLabel}</p>
            <p className="text-ink-600 font-medium text-sm">
              {lunar.day} tháng {lunar.monthLabel} năm {lunar.yearCanChi} (âm
              lịch)
            </p>
          </div>
        </div>

        {next && (
          <>
            <div className="hidden sm:block w-px bg-stone-200 my-3" />
            <div className="flex items-center gap-4 px-5 py-4 flex-1 border-t sm:border-t-0 border-stone-200">
              <div className="flex-1">
                <p className="text-[11px] tracking-[0.15em] text-ochre-700 uppercase font-sans">
                  Sắp tới
                </p>
                <p className="font-serif text-stone-900">
                  {next.label} tháng {next.monthLabel}
                </p>
                <p className="text-sm text-stone-500">
                  {next.daysAway === 0
                    ? 'chính là hôm nay'
                    : `còn ${next.daysAway} ngày nữa`}
                </p>
              </div>
              <Link
                href={`/van-khan/${next.slug}`}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-vermilion-500 no-underline whitespace-nowrap hover:text-vermilion-600"
              >
                Xem bài khấn
                <IconChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
