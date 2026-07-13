import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import type { Category, Region } from './categories'
export { CATEGORY_META } from './categories'
export type { Category, Region }

const CONTENT_DIR = path.join(process.cwd(), 'content')

export interface VanKhanFrontmatter {
  slug: string
  title: string
  description?: string
  category: Category
  regions: Region[]
  priority: number
  keywords: string[]
  image?: string
  sources: string[]
  lastReviewed?: string
  reviewer?: string
  vanKhan?: Array<{ title: string; text: string }>
}

export interface VanKhanEntry {
  frontmatter: VanKhanFrontmatter
  content: string
}

export function getAllVanKhanSlugs(): string[] {
  const dir = path.join(CONTENT_DIR, 'van-khan')
  if (!fs.existsSync(dir)) return []
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''))
}

export function getVanKhanBySlug(slug: string): VanKhanEntry | null {
  const filePath = path.join(CONTENT_DIR, 'van-khan', `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(raw)
  return {
    frontmatter: { slug, ...(data as Omit<VanKhanFrontmatter, 'slug'>) },
    content,
  }
}

export function getAllVanKhan(): VanKhanEntry[] {
  return getAllVanKhanSlugs()
    .map((slug) => getVanKhanBySlug(slug))
    .filter((e): e is VanKhanEntry => e !== null)
    .sort((a, b) => a.frontmatter.priority - b.frontmatter.priority)
}

export function getVanKhanByCategory(category: Category): VanKhanEntry[] {
  return getAllVanKhan().filter((e) => e.frontmatter.category === category)
}
