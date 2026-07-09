import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { AltarPanel } from '@/components/AltarPanel'
import {
  CATEGORY_META,
  getVanKhanByCategory,
  type Category,
} from '@/lib/content'

const VALID_CATEGORIES: Category[] = [
  'hang-thang',
  'le-tet',
  'gia-dinh',
  'kinh-doanh',
]

const CATEGORY_NUMERAL: Record<Category, string> = {
  'hang-thang': '壹',
  'le-tet': '貳',
  'gia-dinh': '叁',
  'kinh-doanh': '肆',
}

export function generateStaticParams() {
  return VALID_CATEGORIES.map((category) => ({ category }))
}

interface Props {
  params: { category: string }
}

export function generateMetadata({ params }: Props): Metadata {
  if (!VALID_CATEGORIES.includes(params.category as Category)) return {}
  const meta = CATEGORY_META[params.category as Category]
  return {
    title: meta.name,
    description: meta.description,
  }
}

export default function CategoryPage({ params }: Props) {
  if (!VALID_CATEGORIES.includes(params.category as Category)) notFound()
  const cat = params.category as Category
  const meta = CATEGORY_META[cat]
  const entries = getVanKhanByCategory(cat)

  const numeral = (
    <span className="absolute -right-2 top-1/2 -translate-y-1/2 font-serif text-ochre-400/15 select-none pointer-events-none leading-none text-[160px] md:text-[220px]">
      {CATEGORY_NUMERAL[cat]}
    </span>
  )

  return (
    <>
      <Header />
      <main>
        <section className="container-wide pt-6">
          <AltarPanel
            className="rounded-md px-6 py-12 md:px-10 md:py-16"
            cornerSize="w-9 h-9"
            watermark={numeral}
          >
            <nav className="text-sm text-ink-200/80 mb-4">
              <Link href="/" className="no-underline text-ink-200/80">
                Trang chủ
              </Link>
              <span className="mx-2">/</span>
              <span className="text-ochre-300">{meta.name}</span>
            </nav>
            <span className="eyebrow-gold mb-3">Chọn theo dịp</span>
            <h1 className="font-serif text-3xl md:text-4xl font-semibold text-stone-100 mb-3">
              {meta.name}
            </h1>
            <p className="text-lg text-ink-200 max-w-xl">{meta.description}</p>
          </AltarPanel>
        </section>

        <div className="container-wide py-12">
          {entries.length === 0 ? (
            <p className="text-stone-500 italic">
              Chưa có văn khấn trong nhóm này. Sẽ được bổ sung sớm.
            </p>
          ) : (
            <div className="grid gap-4 md:grid-cols-2">
              {entries.map((entry) => (
                <Link
                  key={entry.frontmatter.slug}
                  href={`/van-khan/${entry.frontmatter.slug}`}
                  className="cat-card"
                >
                  <h2 className="font-serif text-lg font-medium text-stone-900 mb-1.5">
                    {entry.frontmatter.title}
                  </h2>
                  {entry.frontmatter.description && (
                    <p className="text-sm text-stone-600 line-clamp-3 leading-snug">
                      {entry.frontmatter.description}
                    </p>
                  )}
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
