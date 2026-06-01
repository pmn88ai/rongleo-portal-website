'use client'
import { useState, useMemo } from 'react'
import { ProductCard } from './ProductCard'
import { CategoryFilter } from './CategoryFilter'
import type { PortalItem, ItemCategory } from '@/types/portal'
import { ITEM_CATEGORY_OPTIONS } from '@/types/portal'

interface ProductsClientProps {
  items: PortalItem[]
}

export function ProductsClient({ items }: ProductsClientProps) {
  const [activeCategory, setActiveCategory] = useState<ItemCategory | 'Tất cả'>('Tất cả')

  const categories = useMemo(() => {
    const used = new Set(items.map((i) => i.category))
    return ['Tất cả', ...ITEM_CATEGORY_OPTIONS.filter((c) => used.has(c))] as const
  }, [items])

  const filtered = useMemo(
    () => activeCategory === 'Tất cả' ? items : items.filter((i) => i.category === activeCategory),
    [items, activeCategory]
  )

  const featured = filtered.filter((i) => i.featured)
  const regular = filtered.filter((i) => !i.featured)

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">Sản phẩm & Demo</h1>
        <p className="text-muted-foreground max-w-xl">
          Các hệ thống, công cụ và demo được xây dựng bởi RongLeo.
          Mỗi item chứng minh một năng lực giải quyết bài toán thực tế.
        </p>
      </div>

      <CategoryFilter
        categories={categories as unknown as string[]}
        active={activeCategory}
        onChange={(c) => setActiveCategory(c as ItemCategory | 'Tất cả')}
      />

      {featured.length > 0 && (
        <div className="mb-8">
          <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">
            Nổi bật
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featured.map((item) => (
              <ProductCard key={item.id} item={item} featured />
            ))}
          </div>
        </div>
      )}

      {regular.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {regular.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      )}

      {filtered.length === 0 && (
        <div className="text-center py-20 text-muted-foreground">
          Không có sản phẩm nào trong mục này.
        </div>
      )}
    </div>
  )
}
