import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="container-prose py-24 text-center">
        <h1 className="font-serif text-4xl font-semibold text-stone-900 mb-4">
          Không tìm thấy nội dung
        </h1>
        <p className="text-lg text-stone-600 mb-8">
          Trang bạn tìm chưa có hoặc đã được di chuyển.
        </p>
        <Link href="/" className="btn-primary no-underline">
          Về trang chủ
        </Link>
      </main>
      <Footer />
    </>
  )
}
