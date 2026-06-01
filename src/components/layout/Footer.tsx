import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t bg-muted/30 mt-16">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="font-bold text-lg mb-2">RongLeo</div>
            <p className="text-sm text-muted-foreground">AI • Dữ liệu • GIS • Web App</p>
            <p className="text-sm text-muted-foreground mt-3">
              Biến dữ liệu thành công cụ hành động.
            </p>
          </div>
          <div>
            <div className="font-medium mb-3 text-sm">Liên kết</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/products" className="hover:text-foreground transition-colors">Sản phẩm & Demo</Link></li>
              <li><Link href="/#capabilities" className="hover:text-foreground transition-colors">Năng lực</Link></li>
              <li><Link href="/#contact" className="hover:text-foreground transition-colors">Liên hệ</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-medium mb-3 text-sm">Liên hệ</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="mailto:admin@rongleo.com" className="hover:text-foreground transition-colors">admin@rongleo.com</a></li>
              <li><a href="https://rongleo.com" className="hover:text-foreground transition-colors">rongleo.com</a></li>
              <li><a href="https://github.com/pmn88ai" className="hover:text-foreground transition-colors">github.com/pmn88ai</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} RongLeo. Xây dựng với AI, dữ liệu và kinh nghiệm thực địa.
        </div>
      </div>
    </footer>
  )
}
