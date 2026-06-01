import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { createClient } from '@supabase/supabase-js'
import { AdminItemsClient } from '@/components/admin/AdminItemsClient'
import type { PortalItem } from '@/types/portal'

export default async function AdminItemsPage() {
  const cookieStore = await cookies()
  const session = cookieStore.get('admin_session')
  if (!session || session.value !== 'authenticated') {
    redirect('/admin')
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_KEY!
  )

  const { data } = await supabase
    .from('portal_items')
    .select('*')
    .order('sort_order', { ascending: true })

  return <AdminItemsClient items={(data ?? []) as PortalItem[]} />
}
