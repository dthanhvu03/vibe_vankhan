import type { Metadata } from 'next'
import { Be_Vietnam_Pro, Lora } from 'next/font/google'
import { BackgroundDecor } from '@/components/BackgroundDecor'
import './globals.css'

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ['vietnamese', 'latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-be-vietnam-pro',
})

const lora = Lora({
  subsets: ['vietnamese', 'latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-lora',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://vankhanviet.com'),
  title: {
    default: 'Cội Việt — Văn khấn và phong tục cúng lễ Việt Nam',
    template: '%s | Cội Việt',
  },
  description:
    'Thư viện văn khấn Việt Nam chuẩn theo sách cổ. Đầy đủ mùng 1, rằm, giao thừa, nhập trạch, đầy tháng, cưới hỏi. Miễn phí, không quảng cáo.',
  keywords: [
    'văn khấn',
    'phong tục Việt Nam',
    'cúng lễ',
    'văn khấn mùng 1',
    'văn khấn rằm',
    'văn khấn giao thừa',
    'văn khấn nhập trạch',
  ],
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    siteName: 'Cội Việt',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="vi"
      className={`${beVietnamPro.variable} ${lora.variable}`}
    >
      <body>
        <BackgroundDecor />
        {children}
      </body>
    </html>
  )
}
