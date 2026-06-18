import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getFeaturedArticles } from '@/data/articles'

const CATEGORY_COLORS: Record<string, string> = {
  'Hành trình': 'bg-emerald-500/15 text-emerald-600 border-emerald-200',
  'Nghề nghiệp': 'bg-blue-500/15 text-blue-600 border-blue-200',
  'GIS': 'bg-violet-500/15 text-violet-600 border-violet-200',
  'AI': 'bg-amber-500/15 text-amber-600 border-amber-200',
  'Data': 'bg-rose-500/15 text-rose-600 border-rose-200',
}

export function HomepageThinkingSection() {
  const articles = getFeaturedArticles(3)

  return (
    <section id="bai-viet" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground">
            BÀI VIẾT & HÀNH TRÌNH
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">
            Tôi nghĩ gì, tôi học gì
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Ghi chép từ thực địa — pháp lý, GIS, AI và hành trình liên ngành.
          </p>
        </div>

        <div className="grid gap-6 max-w-5xl mx-auto md:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/thinking/${article.slug}`}
              className="group rounded-xl border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-sm flex flex-col"
            >
              <div className="flex items-center gap-3 mb-3">
                <span
                  className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${CATEGORY_COLORS[article.category] ?? 'bg-gray-500/15 text-gray-600 border-gray-200'}`}
                >
                  {article.category}
                </span>
                <span className="text-xs text-muted-foreground">{article.date}</span>
              </div>
              <h3 className="text-lg font-semibold group-hover:text-primary transition-colors mb-2">
                {article.title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-3 flex-1">
                {article.summary}
              </p>
              <span className="inline-flex items-center gap-1 mt-4 text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors">
                Đọc thêm
                <ArrowRight className="h-3 w-3" />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/thinking"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Xem tất cả bài viết
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
