import { createClient } from '@/lib/supabase/server'
import { ProductsClient } from '@/components/portal/ProductsClient'
import type { PortalItem } from '@/types/portal'

export const metadata = {
  title: 'Sản phẩm & Demo — RongLeo',
  description: 'Các sản phẩm, demo và giải pháp của RongLeo.',
}

export default async function ProductsPage() {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('portal_items')
    .select('*')
    .eq('public', true)
    .order('sort_order', { ascending: true })

  if (error) {
    return (
      <div className="container mx-auto px-4 py-20 text-center text-muted-foreground">
        Không thể tải dữ liệu. Vui lòng thử lại sau.
      </div>
    )
  }

  return <ProductsClient items={data as PortalItem[]} />
}
