import { createClient } from '@/lib/supabase/server'
import { ProductsClient } from '@/components/portal/ProductsClient'
import { STATIC_PRODUCTS } from '@/data/staticProducts'
import type { PortalItem } from '@/types/portal'

export const metadata = {
  title: 'Sản phẩm & Demo — RongLeo',
  description: 'Các sản phẩm, demo và giải pháp của RongLeo.',
}

export default async function ProductsPage() {
  let items: PortalItem[] = STATIC_PRODUCTS

  try {
    const supabase = await createClient()
    const { data, error } = await supabase
      .from('portal_items')
      .select('*')
      .eq('public', true)
      .order('sort_order', { ascending: true })

    if (!error && data && data.length > 0) {
      items = data as PortalItem[]
    }
  } catch {
    // Supabase unavailable — use static fallback
  }

  return <ProductsClient items={items} />
}
