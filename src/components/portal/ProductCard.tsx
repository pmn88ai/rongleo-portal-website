import Link from 'next/link'
import Image from 'next/image'
import { ExternalLink, ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import type { PortalItem } from '@/types/portal'

const STATUS_COLORS: Record<string, string> = {
  'Hoàn thiện': 'bg-emerald-500/15 text-emerald-600 border-emerald-200',
  'Beta': 'bg-blue-500/15 text-blue-600 border-blue-200',
  'Demo': 'bg-violet-500/15 text-violet-600 border-violet-200',
  'Đang phát triển': 'bg-amber-500/15 text-amber-600 border-amber-200',
  'Ý tưởng': 'bg-gray-500/15 text-gray-600 border-gray-200',
  'Tạm ẩn': 'bg-red-500/15 text-red-600 border-red-200',
}

interface ProductCardProps {
  item: PortalItem
  featured?: boolean
}

export function ProductCard({ item, featured }: ProductCardProps) {
  return (
    <div className={`group rounded-2xl border bg-card overflow-hidden hover:shadow-md transition-all duration-200 flex flex-col ${
      featured ? 'ring-1 ring-primary/20' : ''
    }`}>
      <div className="relative h-44 bg-muted overflow-hidden">
        {item.thumbnail_url ? (
          <Image
            src={item.thumbnail_url}
            alt={item.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl font-bold text-muted-foreground/20">
              {item.title.charAt(0)}
            </span>
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="text-xs text-muted-foreground mb-2">{item.category}</div>
        <h3 className="font-semibold text-base mb-2 leading-snug">{item.title}</h3>
        <p className="text-sm text-muted-foreground flex-1 line-clamp-3 mb-4">
          {item.summary}
        </p>

        {item.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {item.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs rounded-full px-2.5">
                {tag}
              </Badge>
            ))}
          </div>
        )}

        <div className="flex items-center gap-2 mt-auto">
          <Button variant="outline" size="sm" className="flex-1 rounded-xl" nativeButton={false} render={<Link href={`/products/${item.slug}`} />}>
            Xem chi tiết
            <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
          </Button>
          {item.url && (
            <Button variant="ghost" size="icon" className="rounded-xl flex-shrink-0" nativeButton={false} render={<a href={item.url} target="_blank" rel="noopener noreferrer" aria-label="Mở link ngoài" />}>
              <ExternalLink className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
