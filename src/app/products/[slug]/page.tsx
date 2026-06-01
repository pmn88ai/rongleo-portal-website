import { notFound } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { ProductDetail } from '@/components/portal/ProductDetail'
import type { PortalItem } from '@/types/portal'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const supabase = await createClient()
  const { data } = await supabase
    .from('portal_items')
    .select('title, summary')
    .eq('slug', slug)
    .eq('public', true)
    .single()

  if (!data) return { title: 'Không tìm thấy' }
  return {
    title: `${data.title} — RongLeo`,
    description: data.summary ?? undefined,
  }
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('portal_items')
    .select('*')
    .eq('slug', slug)
    .eq('public', true)
    .single()

  if (error || !data) notFound()

  return <ProductDetail item={data as PortalItem} />
}
