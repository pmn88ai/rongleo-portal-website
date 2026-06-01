import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Admin — RongLeo' }

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-muted/20">
      {children}
    </div>
  )
}
