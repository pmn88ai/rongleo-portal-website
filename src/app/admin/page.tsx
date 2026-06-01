import { AdminLoginForm } from '@/components/admin/AdminLoginForm'

export const metadata = { title: 'Admin — RongLeo' }

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/20 px-4">
      <AdminLoginForm />
    </div>
  )
}
