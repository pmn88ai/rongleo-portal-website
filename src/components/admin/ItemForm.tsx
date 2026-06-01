'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from '@/components/ui/select'
import type { PortalItem, PortalItemInsert } from '@/types/portal'
import { ITEM_CATEGORY_OPTIONS, ITEM_STATUS_OPTIONS } from '@/types/portal'

interface ItemFormProps {
  mode: 'create' | 'edit'
  item?: PortalItem
}

const DEFAULT: PortalItemInsert = {
  title: '',
  slug: '',
  url: null,
  summary: null,
  description: null,
  category: 'Khác',
  status: 'Đang phát triển',
  thumbnail_url: null,
  tags: [],
  featured: false,
  public: true,
  sort_order: 100,
}

export function ItemForm({ mode, item }: ItemFormProps) {
  const router = useRouter()
  const [form, setForm] = useState<PortalItemInsert>(item ?? DEFAULT)
  const [tagsInput, setTagsInput] = useState((item?.tags ?? []).join(', '))
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const set = (key: keyof PortalItemInsert, value: unknown) =>
    setForm((prev) => ({ ...prev, [key]: value }))

  const handleTitleChange = (title: string) => {
    set('title', title)
    if (mode === 'create') {
      const slug = title
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[đĐ]/g, 'd')
        .replace(/[^a-z0-9\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-')
      set('slug', slug)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    const payload = {
      ...form,
      tags: tagsInput.split(',').map((t) => t.trim()).filter(Boolean),
      url: form.url || null,
      summary: form.summary || null,
      description: form.description || null,
      thumbnail_url: form.thumbnail_url || null,
    }

    try {
      const url = mode === 'create'
        ? '/api/admin/items'
        : `/api/admin/items/${item!.id}`
      const method = mode === 'create' ? 'POST' : 'PATCH'

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        const data = await res.json()
        setError(data.error ?? 'Lỗi khi lưu')
        return
      }

      router.push('/admin/items')
      router.refresh()
    } catch {
      setError('Lỗi kết nối. Vui lòng thử lại.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="space-y-1.5">
        <Label htmlFor="title">Tiêu đề *</Label>
        <Input id="title" value={form.title} onChange={(e) => handleTitleChange(e.target.value)} required />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="slug">Slug *</Label>
        <Input id="slug" value={form.slug} onChange={(e) => set('slug', e.target.value)} required />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="url">Link ngoài</Label>
        <Input id="url" type="url" value={form.url ?? ''} onChange={(e) => set('url', e.target.value)} placeholder="https://" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label>Nhóm *</Label>
          <Select value={form.category} onValueChange={(v) => set('category', v)}>
            <SelectTrigger className="rounded-xl"><SelectValue /></SelectTrigger>
            <SelectContent>
              {ITEM_CATEGORY_OPTIONS.map((c) => (
                <SelectItem key={c} value={c}>{c}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-1.5">
          <Label>Trạng thái *</Label>
          <Select value={form.status} onValueChange={(v) => set('status', v)}>
            <SelectTrigger className="rounded-xl"><SelectValue /></SelectTrigger>
            <SelectContent>
              {ITEM_STATUS_OPTIONS.map((s) => (
                <SelectItem key={s} value={s}>{s}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="summary">Mô tả ngắn</Label>
        <Textarea id="summary" rows={2} value={form.summary ?? ''} onChange={(e) => set('summary', e.target.value)} />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="description">Mô tả dài</Label>
        <Textarea id="description" rows={4} value={form.description ?? ''} onChange={(e) => set('description', e.target.value)} />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="thumbnail_url">URL ảnh thumbnail</Label>
        <Input id="thumbnail_url" value={form.thumbnail_url ?? ''} onChange={(e) => set('thumbnail_url', e.target.value)} placeholder="https://..." />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="tags">Tags (phân cách bằng dấu phẩy)</Label>
        <Input id="tags" value={tagsInput} onChange={(e) => setTagsInput(e.target.value)} placeholder="AI, GIS, Dashboard" />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="sort_order">Thứ tự (số nhỏ = lên trước)</Label>
        <Input id="sort_order" type="number" value={form.sort_order} onChange={(e) => set('sort_order', parseInt(e.target.value) || 100)} />
      </div>

      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <Switch id="public" checked={form.public} onCheckedChange={(v) => set('public', v)} />
          <Label htmlFor="public">Hiển thị public</Label>
        </div>
        <div className="flex items-center gap-2">
          <Switch id="featured" checked={form.featured} onCheckedChange={(v) => set('featured', v)} />
          <Label htmlFor="featured">Nổi bật</Label>
        </div>
      </div>

      {error && (
        <div className="text-sm text-red-500 bg-red-50 dark:bg-red-950/30 px-3 py-2 rounded-lg">
          {error}
        </div>
      )}

      <div className="flex items-center gap-3 pt-2">
        <Button type="submit" disabled={loading} className="rounded-xl">
          {loading ? 'Đang lưu...' : mode === 'create' ? 'Tạo item' : 'Lưu thay đổi'}
        </Button>
        <Button type="button" variant="ghost" className="rounded-xl" onClick={() => router.push('/admin/items')}>
          Huỷ
        </Button>
      </div>
    </form>
  )
}
