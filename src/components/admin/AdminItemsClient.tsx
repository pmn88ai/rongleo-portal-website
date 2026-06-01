'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Edit2, Eye, EyeOff, Star } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import type { PortalItem } from '@/types/portal'

interface Props { items: PortalItem[] }

export function AdminItemsClient({ items: initialItems }: Props) {
  const [items] = useState(initialItems)

  const total = items.length
  const publicCount = items.filter((i) => i.public).length
  const draftCount = items.filter((i) => !i.public).length
  const featuredCount = items.filter((i) => i.featured).length

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Tổng items', value: total, color: 'text-foreground' },
          { label: 'Đang public', value: publicCount, color: 'text-emerald-500' },
          { label: 'Draft', value: draftCount, color: 'text-amber-500' },
          { label: 'Nổi bật', value: featuredCount, color: 'text-primary' },
        ].map(({ label, value, color }) => (
          <div key={label} className="rounded-2xl border bg-card p-5">
            <div className={`text-3xl font-bold ${color}`}>{value}</div>
            <div className="text-sm text-muted-foreground mt-1">{label}</div>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border bg-card overflow-hidden">
        <div className="p-4 border-b flex items-center justify-between">
          <h2 className="font-semibold">Danh sách items</h2>
          <Button size="sm" variant="outline" className="rounded-xl" render={<Link href="/admin/items/new" />}>
            + Thêm mới
          </Button>
        </div>

        <div className="divide-y">
          {items.map((item) => (
            <div key={item.id} className="flex items-center gap-4 px-4 py-3 hover:bg-muted/30 transition-colors">
              <span className="text-xs text-muted-foreground w-8 text-center">{item.sort_order}</span>

              <div className="flex-1 min-w-0">
                <div className="font-medium text-sm truncate">{item.title}</div>
                <div className="text-xs text-muted-foreground">{item.category}</div>
              </div>

              <Badge variant="secondary" className="text-xs hidden sm:flex">{item.status}</Badge>

              <div className="flex items-center gap-1.5">
                {item.featured && <Star className="h-3.5 w-3.5 text-primary fill-primary" />}
                {item.public
                  ? <Eye className="h-3.5 w-3.5 text-emerald-500" />
                  : <EyeOff className="h-3.5 w-3.5 text-muted-foreground" />}
              </div>

              <div className="flex items-center gap-1">
                <Button variant="ghost" size="icon" className="h-7 w-7 rounded-lg" render={<Link href={`/admin/items/${item.id}/edit`} />}>
                  <Edit2 className="h-3.5 w-3.5" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {items.length === 0 && (
          <div className="py-16 text-center text-muted-foreground text-sm">
            Chưa có item nào. Thêm item đầu tiên ngay.
          </div>
        )}
      </div>
    </div>
  )
}
