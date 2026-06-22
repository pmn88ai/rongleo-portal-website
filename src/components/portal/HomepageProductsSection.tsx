import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { createClient } from '@/lib/supabase/server'
import { ProductCard } from './ProductCard'
import { FEATURED_PRODUCTS } from '@/data/staticProducts'
import type { PortalItem } from '@/types/portal'

export async function HomepageProductsSection() {
  let items: PortalItem[] = []

  try {
    const supabase = await createClient()
    const { data, error } = await supabase
      .from('portal_items')
      .select('*')
      .eq('public', true)
      .eq('featured', true)
      .order('sort_order', { ascending: true })
      .limit(6)

    if (!error && data && data.length > 0) {
      items = data as PortalItem[]
    } else {
      items = FEATURED_PRODUCTS
    }
  } catch {
    items = FEATURED_PRODUCTS
  }

  return (
    <section id="san-pham" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground">
            SẢN PHẨM SỐ
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">
            Những gì tôi đã xây
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Từ ý tưởng đến công cụ vận hành thực tế.
          </p>
        </div>

        {items.length > 0 ? (
          <div
            className="grid gap-6 max-w-6xl mx-auto"
            style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}
          >
            {items.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground py-12">
            Đang cập nhật...
          </p>
        )}

        <div className="mt-12 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Xem tất cả sản phẩm
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
