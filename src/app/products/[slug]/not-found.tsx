import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-24 text-center max-w-md">
      <h1 className="text-2xl font-bold mb-3">Không tìm thấy sản phẩm</h1>
      <p className="text-muted-foreground mb-6">
        Sản phẩm này không tồn tại hoặc đã bị ẩn.
      </p>
      <Button className="rounded-2xl" render={<Link href="/products" />}>
        Quay lại danh sách
      </Button>
    </div>
  )
}
