'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Edit2, Eye, EyeOff, Star, Trash2 } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import type { PortalItem } from '@/types/portal'

interface Props { items: PortalItem[] }

export function AdminItemsClient({ items: initialItems }: Props) {
  const router = useRouter()
  const [items, setItems] = useState(initialItems)

  const total = items.length
  const publicCount = items.filter((i) => i.public).length
  const draftCount = items.filter((i) => !i.public).length
  const featuredCount = items.filter((i) => i.featured).length

  const patchItem = async (id: string, patch: Partial<PortalItem>) => {
    setItems((prev) => prev.map((item) => item.id === id ? { ...item, ...patch } : item))

    const res = await fetch(`/api/admin/items/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(patch),
    })

    if (!res.ok) {
      setItems(initialItems)
      alert('Lỗi khi cập nhật. Vui lòng thử lại.')
    }
  }

  const deleteItem = async (id: string, title: string) => {
    if (!confirm(`Xóa "${title}"?\nHành động này không thể khôi phục.`)) return

    const res = await fetch(`/api/admin/items/${id}`, { method: 'DELETE' })
    if (res.ok) {
      setItems((prev) => prev.filter((i) => i.id !== id))
    } else {
      alert('Lỗi khi xóa. Vui lòng thử lại.')
    }
  }

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
          <h2 className="font-semibold">Danh sách items ({total})</h2>
          <Button size="sm" variant="outline" className="rounded-xl" render={<Link href="/admin/items/new" />}>
            + Thêm mới
          </Button>
        </div>

        <div className="divide-y">
          {items.map((item) => (
            <div key={item.id} className="flex items-center gap-3 px-4 py-3 hover:bg-muted/30 transition-colors">
              <span className="text-xs text-muted-foreground w-8 text-center flex-shrink-0">
                {item.sort_order}
              </span>

              <div className="flex-1 min-w-0">
                <div className="font-medium text-sm truncate">{item.title}</div>
                <div className="text-xs text-muted-foreground">{item.category}</div>
              </div>

              <Badge variant="secondary" className="text-xs hidden md:flex flex-shrink-0">
                {item.status}
              </Badge>

              <div className="flex items-center gap-1">
                <button
                  onClick={() => patchItem(item.id, { featured: !item.featured })}
                  title={item.featured ? 'Bỏ nổi bật' : 'Đặt nổi bật'}
                  className="p-1.5 rounded-lg hover:bg-muted transition-colors"
                >
                  <Star className={`h-3.5 w-3.5 ${item.featured ? 'text-primary fill-primary' : 'text-muted-foreground'}`} />
                </button>

                <button
                  onClick={() => patchItem(item.id, { public: !item.public })}
                  title={item.public ? 'Ẩn khỏi public' : 'Bật public'}
                  className="p-1.5 rounded-lg hover:bg-muted transition-colors"
                >
                  {item.public
                    ? <Eye className="h-3.5 w-3.5 text-emerald-500" />
                    : <EyeOff className="h-3.5 w-3.5 text-muted-foreground" />}
                </button>
              </div>

              <div className="flex items-center gap-1">
                <Button variant="ghost" size="icon" className="h-7 w-7 rounded-lg" render={<Link href={`/admin/items/${item.id}/edit`} />}>
                  <Edit2 className="h-3.5 w-3.5" />
                </Button>
                <button
                  onClick={() => deleteItem(item.id, item.title)}
                  className="h-7 w-7 rounded-lg flex items-center justify-center hover:bg-red-50 dark:hover:bg-red-950/30 hover:text-red-500 transition-colors text-muted-foreground"
                  title="Xóa item"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {items.length === 0 && (
          <div className="py-16 text-center text-muted-foreground text-sm">
            Chưa có item nào.
          </div>
        )}
      </div>
    </div>
  )
}
