import { ItemForm } from '@/components/admin/ItemForm'
import { cookies } from 'next/headers'
import { redirect, notFound } from 'next/navigation'
import { createClient } from '@supabase/supabase-js'
import type { PortalItem } from '@/types/portal'

interface Props { params: Promise<{ id: string }> }

export default async function EditItemPage({ params }: Props) {
  const cookieStore = await cookies()
  const session = cookieStore.get('admin_session')
  if (!session || session.value !== 'authenticated') redirect('/admin')

  const { id } = await params
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_KEY!
  )

  const { data, error } = await supabase
    .from('portal_items')
    .select('*')
    .eq('id', id)
    .single()

  if (error || !data) notFound()

  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-bold mb-6">Sửa item</h1>
      <ItemForm mode="edit" item={data as PortalItem} />
    </div>
  )
}
