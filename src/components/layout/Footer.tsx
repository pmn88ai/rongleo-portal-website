import Link from 'next/link'
import { Zap } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Tôi là ai', href: '/#toi-la-ai' },
  { label: 'Năng lực', href: '/#nang-luc' },
  { label: 'Sản phẩm', href: '/#san-pham' },
  { label: 'Bài viết', href: '/thinking' },
  { label: 'Liên hệ', href: '/#lien-he' },
]

const FIELDS = [
  'Land Development',
  'Legal & Governance',
  'GIS & Spatial Data',
  'AI & Data Systems',
  'Real Estate Asset Management',
]

export function Footer() {
  return (
    <footer className="border-t bg-muted/30 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column 1 — Brand */}
          <div>
            <div className="flex items-center gap-2 font-bold text-lg mb-2">
              <Zap className="h-5 w-5 text-primary" />
              <span>Phạm Minh Nhật / RongLeo</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Built with AI, GIS, Data &amp; Real Estate experience.
            </p>
            <ul className="mt-4 space-y-1 text-sm text-muted-foreground">
              <li>
                <a href="mailto:phamminhnhat@rongleo.com" className="hover:text-foreground transition-colors">
                  phamminhnhat@rongleo.com
                </a>
              </li>
              <li>
                <a href="https://rongleo.com" className="hover:text-foreground transition-colors">
                  rongleo.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2 — Navigation */}
          <div>
            <div className="font-medium mb-3 text-sm">Điều hướng</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/products" className="hover:text-foreground transition-colors font-medium">
                  Thư viện sản phẩm &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 — Fields */}
          <div>
            <div className="font-medium mb-3 text-sm">Lĩnh vực</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {FIELDS.map((field) => (
                <li key={field}>&middot; {field}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t text-center text-xs text-muted-foreground">
          &copy; 2026 Phạm Minh Nhật / RongLeo. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
