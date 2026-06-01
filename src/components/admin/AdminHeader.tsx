import Link from 'next/link'
import { LayoutDashboard, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { LogoutButton } from './LogoutButton'

export function AdminHeader() {
  return (
    <header className="border-b bg-background">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="font-bold text-sm">RongLeo</Link>
          <span className="text-muted-foreground/50">/</span>
          <div className="flex items-center gap-1.5 text-sm font-medium">
            <LayoutDashboard className="h-4 w-4" />
            Admin
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button size="sm" className="rounded-xl" render={<Link href="/admin/items/new" />}>
            <Plus className="mr-1.5 h-3.5 w-3.5" />
            Thêm item
          </Button>
          <LogoutButton />
        </div>
      </div>
    </header>
  )
}
