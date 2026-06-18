'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { MobileMenu } from './MobileMenu'
import { ThemeToggle } from './ThemeToggle'

const NAV_LINKS = [
  { label: 'Tôi là ai',  href: '/#toi-la-ai' },
  { label: 'Năng lực',   href: '/#nang-luc' },
  { label: 'Sản phẩm',  href: '/#san-pham' },
  { label: 'Bài viết',  href: '/#bai-viet' },
  { label: 'Liên hệ',   href: '/#lien-he' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        scrolled ? 'bg-background/80 backdrop-blur-md shadow-sm border-b' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Zap className="h-5 w-5 text-primary" />
            <span>RongLeo</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === link.href ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button size="sm" className="hidden md:flex" render={<a href="mailto:phamminhnhat@rongleo.com" />}>
              Trao đổi dự án
            </Button>
            <button
              className="md:hidden p-2"
              onClick={() => setMenuOpen(true)}
              aria-label="Mở menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} links={NAV_LINKS} />
    </>
  )
}
