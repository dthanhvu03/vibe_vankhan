'use client'

import { usePersonalize } from './PersonalizeProvider'
import { InfoCard } from './InfoCard'
import { IconCalendar, IconLock, IconUser } from './icons'

const inputClass =
  'w-full box-border bg-cream border border-stone-300 rounded-md ' +
  'px-3 py-2 text-base text-stone-900 placeholder:text-stone-400 ' +
  'transition-colors focus:border-ink-400 focus:outline-none ' +
  'focus:ring-2 focus:ring-ink-200'

export function PersonalizeForm() {
  const { ten, diaChi, lunar, setTen, setDiaChi } = usePersonalize()

  return (
    <InfoCard
      icon={<IconUser className="w-4 h-4" />}
      title="Bản khấn của gia đình bạn"
      accent="ink"
      className="no-print"
    >
      <p className="text-sm text-stone-600 mb-4">
        Điền thông tin, bài khấn bên dưới sẽ tự hoàn chỉnh để bạn sao chép hoặc
        in ra.
      </p>

      <label
        htmlFor="pf-ten"
        className="block text-sm text-stone-700 mb-1"
      >
        Họ và tên gia chủ
      </label>
      <input
        id="pf-ten"
        type="text"
        value={ten}
        onChange={(e) => setTen(e.target.value)}
        placeholder="Nguyễn Văn Minh"
        autoComplete="name"
        className={inputClass}
      />

      <label
        htmlFor="pf-diachi"
        className="block text-sm text-stone-700 mb-1 mt-3"
      >
        Địa chỉ
      </label>
      <input
        id="pf-diachi"
        type="text"
        value={diaChi}
        onChange={(e) => setDiaChi(e.target.value)}
        placeholder="số 12 Nguyễn Trãi, Thanh Xuân, Hà Nội"
        className={inputClass}
      />

      {lunar && (
        <div className="mt-4 pt-4 border-t border-stone-200">
          <div className="flex items-start gap-2">
            <IconCalendar className="w-4 h-4 text-ink-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-stone-700">
              {lunar.solarLabel}
              <br />
              nhằm{' '}
              <span className="font-medium text-ink-800">{lunar.full}</span>
            </p>
          </div>
          <p className="text-xs text-stone-500 mt-1.5">
            Bài khấn đã tự điền tháng và năm âm lịch hôm nay. Nếu bạn cúng vào
            ngày khác, hãy chỉnh lại khi chép ra.
          </p>
        </div>
      )}

      <p className="text-xs text-stone-500 mt-3 flex items-center gap-1.5">
        <IconLock className="w-3.5 h-3.5 flex-shrink-0" />
        Thông tin chỉ lưu trên máy của bạn, không gửi đi đâu.
      </p>
    </InfoCard>
  )
}
