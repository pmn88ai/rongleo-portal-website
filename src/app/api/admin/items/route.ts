import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

function checkAuth(req: Request) {
  const cookieHeader = req.headers.get('cookie') ?? ''
  return cookieHeader.includes('admin_session=authenticated')
}

export async function GET(req: Request) {
  if (!checkAuth(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_KEY!
  )

  const { data, error } = await supabase
    .from('portal_items')
    .select('*')
    .order('sort_order', { ascending: true })

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data)
}
