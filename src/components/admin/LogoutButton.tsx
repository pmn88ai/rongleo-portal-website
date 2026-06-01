'use client'
import { useRouter } from 'next/navigation'
import { LogOut } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function LogoutButton() {
  const router = useRouter()

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' })
    router.push('/admin')
    router.refresh()
  }

  return (
    <Button variant="ghost" size="sm" onClick={handleLogout} className="text-muted-foreground">
      <LogOut className="mr-2 h-4 w-4" />
      Đăng xuất
    </Button>
  )
}
