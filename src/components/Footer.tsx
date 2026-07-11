import { OrnamentLotus, SealMark } from './ornaments'

export function Footer() {
  return (
    <footer
      className="border-t border-ochre-500/30 mt-16"
      style={{ backgroundColor: 'rgba(235, 224, 196, 0.8)' }}
    >
      <div className="container-prose py-12 text-center">
        <div className="ornament-divider max-w-[150px] mx-auto text-ochre-500">
          <OrnamentLotus className="w-5 h-5 flex-shrink-0" />
        </div>

        <div className="flex items-center justify-center gap-2.5 mb-3">
          <SealMark className="w-7 h-7" />
          <p className="font-serif text-xl font-medium text-ink-800">
            Cội Việt
          </p>
        </div>

        <p className="text-sm text-stone-700 max-w-md mx-auto mb-3 leading-relaxed">
          Thư viện văn khấn Việt Nam chuẩn theo sách cổ. Miễn phí, không quảng
          cáo.
        </p>
        <p className="text-xs italic text-stone-500 max-w-md mx-auto mb-5 leading-relaxed">
          Nội dung mang tính tham khảo. Phong tục có thể khác nhau theo địa
          phương và gia đình.
        </p>

        <p className="text-xs tracking-wide text-ink-700">
          © 2026 Cội Việt
        </p>
      </div>
    </footer>
  )
}
