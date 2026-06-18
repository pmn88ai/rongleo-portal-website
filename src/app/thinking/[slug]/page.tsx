import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { getArticleBySlug, ARTICLES } from '@/data/articles'

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }))
}

const CATEGORY_COLORS: Record<string, string> = {
  'Hành trình': 'bg-emerald-500/15 text-emerald-600 border-emerald-200',
  'Nghề nghiệp': 'bg-blue-500/15 text-blue-600 border-blue-200',
  'GIS': 'bg-violet-500/15 text-violet-600 border-violet-200',
  'AI': 'bg-amber-500/15 text-amber-600 border-amber-200',
  'Data': 'bg-rose-500/15 text-rose-600 border-rose-200',
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) notFound()

  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <Link
        href="/thinking"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
      >
        <ArrowLeft className="h-4 w-4" />
        Xem tất cả bài viết
      </Link>

      <div className="flex items-center gap-3 mb-4">
        <span
          className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${CATEGORY_COLORS[article.category] ?? 'bg-gray-500/15 text-gray-600 border-gray-200'}`}
        >
          {article.category}
        </span>
        <span className="text-xs text-muted-foreground">{article.date}</span>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold mb-6">{article.title}</h1>

      {article.content ? (
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="text-lg text-muted-foreground leading-relaxed">{article.content}</p>
        </div>
      ) : (
        <blockquote className="border-l-4 border-primary/30 pl-4 text-lg text-muted-foreground italic">
          {article.summary}
        </blockquote>
      )}
    </div>
  )
}
