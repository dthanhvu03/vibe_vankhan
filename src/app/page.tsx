import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import {
  IconBook,
  IconCalendar,
  IconChevronRight,
  IconHome,
  IconStore,
} from '@/components/icons'
import { OrnamentLotus } from '@/components/ornaments'
import { AltarPanel } from '@/components/AltarPanel'
import { HomToday } from '@/components/HomToday'
import { getAllVanKhan, CATEGORY_META, type Category } from '@/lib/content'

const SITE_URL = 'https://vankhanviet.com'

const CATEGORY_ICONS: Record<
  Category,
  React.ComponentType<{ className?: string }>
> = {
  'hang-thang': IconCalendar,
  'le-tet': IconBook,
  'gia-dinh': IconHome,
  'kinh-doanh': IconStore,
}

const CATEGORY_NUMERAL: Record<Category, string> = {
  'hang-thang': '壹',
  'le-tet': '貳',
  'gia-dinh': '叁',
  'kinh-doanh': '肆',
}

const CATEGORY_ICON_COLOR: Record<Category, string> = {
  'hang-thang': 'text-ink-500',
  'le-tet': 'text-vermilion-500',
  'gia-dinh': 'text-ink-500',
  'kinh-doanh': 'text-vermilion-500',
}

export default function HomePage() {
  const featured = getAllVanKhan().slice(0, 6)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        name: 'Văn Khấn Việt',
        url: SITE_URL,
        inLanguage: 'vi-VN',
        potentialAction: {
          '@type': 'SearchAction',
          target: `${SITE_URL}/tim-kiem?q={search_term_string}`,
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'Organization',
        name: 'Văn Khấn Việt',
        url: SITE_URL,
        description:
          'Thư viện văn khấn Việt Nam chuẩn theo sách cổ. Miễn phí, không quảng cáo.',
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <section className="container-wide pt-8 md:pt-12">
          <AltarPanel
            className="rounded-md px-6 py-16 md:px-10 md:py-24 text-center"
            cornerSize="w-11 h-11"
          >
            <span className="eyebrow-gold mb-5">Giữ nếp nhà Việt</span>

            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-stone-100 leading-tight mb-4">
              Văn khấn cổ truyền
              <br />
              <span className="text-ochre-300 italic">
                cho người Việt hôm nay
              </span>
            </h1>

            <p className="text-lg text-ink-200 leading-relaxed max-w-xl mx-auto">
              Bài khấn chuẩn theo sách cổ, tự điền tên gia chủ và ngày âm lịch.
              Sao chép hoặc in ra là mang đi cúng được ngay.
            </p>

            <div className="flex items-center justify-center gap-4 my-8 text-ochre-500">
              <span className="h-px w-16 bg-ink-700" />
              <OrnamentLotus className="w-6 h-6 flex-shrink-0" />
              <span className="h-px w-16 bg-ink-700" />
            </div>

            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/hang-thang" className="btn-primary no-underline">
                Tìm bài khấn
                <IconChevronRight className="w-4 h-4" />
              </Link>
              <Link href="/lich-am" className="btn-ghost-gold">
                Lịch âm hôm nay
              </Link>
            </div>
          </AltarPanel>
        </section>

        <HomToday />

        <section className="container-wide py-14 md:py-20">
          <div className="text-center mb-10">
            <span className="eyebrow">Chọn theo dịp</span>
          </div>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {(Object.keys(CATEGORY_META) as Category[]).map((slug) => {
              const Icon = CATEGORY_ICONS[slug]
              const meta = CATEGORY_META[slug]
              return (
                <Link key={slug} href={`/${slug}`} className="cat-card group">
                  <span className="han-numeral">{CATEGORY_NUMERAL[slug]}</span>
                  <Icon
                    className={`w-6 h-6 mb-3 ${CATEGORY_ICON_COLOR[slug]}`}
                  />
                  <h3 className="font-serif text-lg font-medium text-stone-900 mb-1">
                    {meta.name}
                  </h3>
                  <p className="text-sm text-stone-600 leading-snug">
                    {meta.description}
                  </p>
                </Link>
              )
            })}
          </div>
        </section>

        {featured.length > 0 && (
          <section className="container-wide pb-20">
            <div className="text-center mb-10">
              <span className="eyebrow">Bài khấn phổ biến</span>
            </div>
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {featured.map((entry) => (
                <Link
                  key={entry.frontmatter.slug}
                  href={`/van-khan/${entry.frontmatter.slug}`}
                  className="cat-card"
                >
                  <h3 className="font-serif text-lg font-medium text-stone-900 mb-1.5">
                    {entry.frontmatter.title}
                  </h3>
                  {entry.frontmatter.description && (
                    <p className="text-sm text-stone-600 line-clamp-2 leading-snug">
                      {entry.frontmatter.description}
                    </p>
                  )}
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  )
}
