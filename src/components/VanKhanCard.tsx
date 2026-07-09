import Link from 'next/link'
import { CATEGORY_META, type Category } from '@/lib/categories'
import { OrnamentCorner } from './ornaments'
import { IconChevronRight } from './icons'

const TAG_ACCENT: Record<Category, string> = {
  'hang-thang': 'bg-ink-100 text-ink-700',
  'le-tet': 'bg-vermilion-100 text-vermilion-700',
  'gia-dinh': 'bg-ochre-100 text-ochre-700',
  'kinh-doanh': 'bg-ink-100 text-ink-700',
}

interface Props {
  entry: {
    frontmatter: {
      slug: string
      title: string
      description?: string
      category: Category
    }
  }
  showCategory?: boolean
}

export function VanKhanCard({ entry, showCategory = false }: Props) {
  const { slug, title, description, category } = entry.frontmatter
  return (
    <Link
      href={`/van-khan/${slug}`}
      className="group relative block bg-cream border border-stone-200 rounded-lg p-5 no-underline shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:border-ochre-400"
    >
      <OrnamentCorner className="absolute top-2.5 right-2.5 w-5 h-5 text-ochre-300 -scale-x-100 transition-colors group-hover:text-ochre-500" />

      {showCategory && (
        <span
          className={`inline-flex items-center text-[11px] tracking-[0.08em] uppercase font-sans rounded px-2 py-0.5 mb-2.5 ${TAG_ACCENT[category]}`}
        >
          {CATEGORY_META[category].name}
        </span>
      )}

      <h3 className="font-serif text-lg font-medium text-stone-900 mb-1.5 leading-snug pr-6">
        {title}
      </h3>

      {description && (
        <p className="text-sm text-stone-600 line-clamp-2 leading-snug">
          {description}
        </p>
      )}

      <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-ink-600">
        Xem bài khấn
        <IconChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  )
}
