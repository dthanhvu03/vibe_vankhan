import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { VanKhanBlock } from '@/components/VanKhanBlock'
import { PrintButton } from '@/components/PrintButton'
import { PersonalizeProvider } from '@/components/PersonalizeProvider'
import { PersonalizeForm } from '@/components/PersonalizeForm'
import { SoDoMamCung } from '@/components/SoDoMamCung'
import { SealMark } from '@/components/ornaments'
import { AltarPanel } from '@/components/AltarPanel'
import { IconCheck, IconWarning } from '@/components/icons'
import {
  getAllVanKhanSlugs,
  getVanKhanBySlug,
  CATEGORY_META,
} from '@/lib/content'

const SITE_URL = 'https://vankhanviet.com'

export function generateStaticParams() {
  return getAllVanKhanSlugs().map((slug) => ({ slug }))
}

interface Props {
  params: { slug: string }
}

export function generateMetadata({ params }: Props): Metadata {
  const entry = getVanKhanBySlug(params.slug)
  if (!entry) return {}
  return {
    title: entry.frontmatter.title,
    description: entry.frontmatter.description,
    keywords: entry.frontmatter.keywords,
    alternates: {
      canonical: `/van-khan/${entry.frontmatter.slug}`,
    },
  }
}

const mdxComponents = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="text-2xl md:text-3xl font-semibold text-stone-900 mt-12 mb-4"
      {...props}
    />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className="text-xl md:text-2xl font-semibold text-stone-900 mt-8 mb-3"
      {...props}
    />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-lg text-stone-700 leading-relaxed my-4" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul
      className="list-disc pl-6 my-4 space-y-2 text-lg text-stone-700"
      {...props}
    />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol
      className="list-decimal pl-6 my-4 space-y-2 text-lg text-stone-700"
      {...props}
    />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="border-l-4 border-ochre-500 bg-stone-100 pl-4 py-2 my-6 italic text-stone-600"
      {...props}
    />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-semibold text-stone-900" {...props} />
  ),
  VanKhanText: (props: { children: React.ReactNode; title?: string }) => {
    const text =
      typeof props.children === 'string'
        ? props.children
        : String(props.children ?? '')
    return <VanKhanBlock text={text} title={props.title} />
  },
  KiengKy: (props: { children: React.ReactNode }) => (
    <aside className="bg-vermilion-100 border-l-4 border-vermilion-500 p-4 my-6 rounded-r-lg flex gap-3">
      <IconWarning className="w-5 h-5 text-vermilion-700 flex-shrink-0 mt-1" />
      <div>
        <strong className="text-vermilion-700 block mb-1">
          Kiêng kỵ &amp; lưu ý
        </strong>
        <div className="text-stone-700">{props.children}</div>
      </div>
    </aside>
  ),
  Checklist: (props: { children: React.ReactNode }) => (
    <div className="bg-ink-50 border border-ink-200 rounded-lg p-6 my-6">
      <div className="flex items-center gap-2 mb-3">
        <IconCheck className="w-5 h-5 text-ink-600" />
        <strong className="text-ink-800">Chuẩn bị</strong>
      </div>
      {props.children}
    </div>
  ),
  SoDoMamCung: (props: { variant?: string }) => (
    <SoDoMamCung variant={props.variant} />
  ),
}

function parseVietnameseDate(d?: string): string | undefined {
  if (!d) return undefined
  const parts = d.split('/')
  if (parts.length !== 3) return undefined
  const [dd, mm, yyyy] = parts
  return `${yyyy}-${mm.padStart(2, '0')}-${dd.padStart(2, '0')}`
}

function extractFaqs(content: string): Array<{ q: string; a: string }> {
  const faqs: Array<{ q: string; a: string }> = []
  const lines = content.split('\n')
  let inFaqSection = false
  let currentQ: string | null = null
  let currentA: string[] = []
  for (const line of lines) {
    if (/^##\s+C[âa]u h[oỏ]i/i.test(line)) {
      inFaqSection = true
      continue
    }
    if (inFaqSection && /^##\s+/.test(line)) break
    if (!inFaqSection) continue
    const qMatch = line.match(/^###\s+(.+)$/)
    if (qMatch) {
      if (currentQ) {
        faqs.push({ q: currentQ, a: currentA.join(' ').trim() })
      }
      currentQ = qMatch[1].trim()
      currentA = []
    } else if (currentQ && line.trim()) {
      currentA.push(line.trim())
    }
  }
  if (currentQ) faqs.push({ q: currentQ, a: currentA.join(' ').trim() })
  return faqs.filter((f) => f.q && f.a)
}

export default function VanKhanPage({ params }: Props) {
  const entry = getVanKhanBySlug(params.slug)
  if (!entry) notFound()

  const { frontmatter, content } = entry
  const categoryMeta = CATEGORY_META[frontmatter.category]
  const faqs = extractFaqs(content)
  const reviewIso = parseVietnameseDate(frontmatter.lastReviewed)
  const pageUrl = `${SITE_URL}/van-khan/${frontmatter.slug}`

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: frontmatter.title,
        description: frontmatter.description,
        keywords: frontmatter.keywords?.join(', '),
        inLanguage: 'vi-VN',
        url: pageUrl,
        datePublished: reviewIso,
        dateModified: reviewIso,
        author: { '@type': 'Organization', name: 'Văn Khấn Việt' },
        publisher: {
          '@type': 'Organization',
          name: 'Văn Khấn Việt',
          url: SITE_URL,
        },
        mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Trang chủ',
            item: `${SITE_URL}/`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: categoryMeta.name,
            item: `${SITE_URL}/${frontmatter.category}`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: frontmatter.title,
            item: pageUrl,
          },
        ],
      },
      ...(faqs.length
        ? [
            {
              '@type': 'FAQPage',
              mainEntity: faqs.map((f) => ({
                '@type': 'Question',
                name: f.q,
                acceptedAnswer: { '@type': 'Answer', text: f.a },
              })),
            },
          ]
        : []),
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <Header />

      <section className="container-wide pt-6 no-print">
        <AltarPanel
          className="rounded-md px-6 py-11 md:px-10 md:py-14"
          cornerSize="w-9 h-9"
        >
          <nav className="text-sm text-ink-200/80 mb-4">
            <Link href="/" className="no-underline text-ink-200/80">
              Trang chủ
            </Link>
            <span className="mx-2">/</span>
            <Link
              href={`/${frontmatter.category}`}
              className="no-underline text-ink-200/80"
            >
              {categoryMeta.name}
            </Link>
          </nav>
          <div className="flex items-start gap-3">
            <SealMark className="w-9 h-9 flex-shrink-0 mt-1" />
            <div>
              <h1 className="font-serif text-3xl md:text-4xl font-semibold text-stone-100 leading-tight">
                {frontmatter.title}
              </h1>
              {frontmatter.description && (
                <p className="text-lg text-ink-200 mt-3">
                  {frontmatter.description}
                </p>
              )}
              {frontmatter.lastReviewed && (
                <p className="text-sm text-ochre-300/80 mt-2">
                  Cập nhật: {frontmatter.lastReviewed}
                </p>
              )}
            </div>
          </div>
        </AltarPanel>
      </section>

      <article className="container-prose py-10">
        <PersonalizeProvider>
          <div className="no-print mb-6">
            <PrintButton />
          </div>

          <PersonalizeForm />

          <div className="prose prose-stone max-w-none">
            <MDXRemote source={content} components={mdxComponents} />
          </div>
        </PersonalizeProvider>

        {frontmatter.sources?.length > 0 && (
          <footer className="mt-16 pt-8 border-t border-stone-200 text-sm text-stone-600">
            <h3 className="text-base font-semibold text-stone-900 mb-3">
              Nguồn tham khảo
            </h3>
            <ol className="list-decimal pl-6 space-y-1">
              {frontmatter.sources.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ol>
            {(frontmatter.reviewer || frontmatter.lastReviewed) && (
              <p className="mt-4 italic">
                Người review: {frontmatter.reviewer ?? '—'} · Ngày review:{' '}
                {frontmatter.lastReviewed ?? '—'}
              </p>
            )}
            <p className="mt-4 text-xs">
              <em>
                Nội dung mang tính tham khảo. Phong tục có thể khác nhau theo
                địa phương và gia đình. Người dùng cân nhắc theo tín ngưỡng cá
                nhân.
              </em>
            </p>
          </footer>
        )}
      </article>
      <Footer />
    </>
  )
}
