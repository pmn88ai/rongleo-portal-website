'use client'
import { useEffect } from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
  links: { label: string; href: string }[]
}

export function MobileMenu({ open, onClose, links }: MobileMenuProps) {
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="absolute top-0 left-0 right-0 bg-background shadow-xl rounded-b-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <span className="font-bold text-xl">RongLeo</span>
          <button onClick={onClose} aria-label="Đóng menu">
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="text-base font-medium py-2 border-b border-border last:border-0 hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Button className="w-full mt-6" nativeButton={false} render={<a href="mailto:phamminhnhat@rongleo.com" />}>
          Trao đổi dự án
        </Button>
      </div>
    </div>
  )
}
