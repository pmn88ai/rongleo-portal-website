import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ARTICLES } from '@/data/articles'

const CATEGORY_COLORS: Record<string, string> = {
  'Hành trình': 'bg-emerald-500/15 text-emerald-600 border-emerald-200',
  'Nghề nghiệp': 'bg-blue-500/15 text-blue-600 border-blue-200',
  'GIS': 'bg-violet-500/15 text-violet-600 border-violet-200',
  'AI': 'bg-amber-500/15 text-amber-600 border-amber-200',
  'Data': 'bg-rose-500/15 text-rose-600 border-rose-200',
}

export default function ThinkingPage() {
  const sorted = [...ARTICLES].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <div className="mb-12">
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground">
          BÀI VIẾT
        </span>
        <h1 className="mt-3 text-3xl md:text-4xl font-bold">
          Bài viết & Hành trình
        </h1>
        <p className="mt-3 text-muted-foreground">
          Những suy nghĩ, bài học và góc nhìn từ hành trình liên ngành.
        </p>
      </div>

      <div className="space-y-6">
        {sorted.map((article) => (
          <Link
            key={article.slug}
            href={`/thinking/${article.slug}`}
            className="block group rounded-xl border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-sm"
          >
            <div className="flex items-center gap-3 mb-3">
              <span
                className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${CATEGORY_COLORS[article.category] ?? 'bg-gray-500/15 text-gray-600 border-gray-200'}`}
              >
                {article.category}
              </span>
              <span className="text-xs text-muted-foreground">{article.date}</span>
            </div>
            <h2 className="text-lg font-semibold group-hover:text-primary transition-colors mb-2">
              {article.title}
            </h2>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {article.summary}
            </p>
            <span className="inline-flex items-center gap-1 mt-3 text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors">
              Đọc tiếp
              <ArrowRight className="h-3 w-3" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
