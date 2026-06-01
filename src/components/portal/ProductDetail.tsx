'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, Tag } from 'lucide-react'
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

interface ProductDetailProps {
  item: PortalItem
}

export function ProductDetail({ item }: ProductDetailProps) {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Button variant="ghost" className="mb-6 -ml-2 rounded-xl" render={<Link href="/products" />}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Tất cả sản phẩm
        </Button>

        {item.thumbnail_url && (
          <div className="relative h-56 md:h-72 w-full rounded-2xl overflow-hidden mb-8 bg-muted">
            <Image src={item.thumbnail_url} alt={item.title} fill className="object-cover" />
          </div>
        )}

        <div className="flex items-center gap-3 mb-4 flex-wrap">
          <span className="text-sm text-muted-foreground">{item.category}</span>
          <span className="text-muted-foreground/30">&bull;</span>
          <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${STATUS_COLORS[item.status] ?? STATUS_COLORS['Đang phát triển']}`}>
            {item.status}
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-4">{item.title}</h1>

        {item.summary && (
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            {item.summary}
          </p>
        )}

        {item.tags.length > 0 && (
          <div className="flex items-center gap-2 flex-wrap mb-8">
            <Tag className="h-4 w-4 text-muted-foreground" />
            {item.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="rounded-full px-3">
                {tag}
              </Badge>
            ))}
          </div>
        )}

        {item.description && (
          <div className="rounded-2xl bg-muted/40 border p-6 mb-8">
            <h2 className="font-semibold mb-3">Mô tả chi tiết</h2>
            <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
              {item.description}
            </p>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3">
          {item.url ? (
            <Button size="lg" className="rounded-2xl" render={<a href={item.url} target="_blank" rel="noopener noreferrer" />}>
              <ExternalLink className="mr-2 h-4 w-4" />
              Truy cập {item.title}
            </Button>
          ) : (
            <Button variant="outline" size="lg" className="rounded-2xl" render={<a href="mailto:admin@rongleo.com" />}>
              Hỏi về dự án này
            </Button>
          )}
          <Button variant="ghost" size="lg" className="rounded-2xl" render={<Link href="/products" />}>
            Xem thêm sản phẩm
          </Button>
        </div>
      </motion.div>
    </div>
  )
}
