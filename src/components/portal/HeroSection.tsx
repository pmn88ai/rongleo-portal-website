'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, LayoutGrid } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-24 pb-20 md:pt-32 md:pb-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 to-transparent" />
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm text-muted-foreground mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            AI • Dữ liệu • GIS • Web App
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
            Biến dữ liệu thành{' '}
            <span className="text-primary">công cụ hành động.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            RongLeo kết hợp AI, dữ liệu, bản đồ, tự động hóa và kinh nghiệm thực địa
            để xây dựng các hệ thống web phục vụ công việc thật.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="rounded-2xl px-8" render={<Link href="/#solutions" />}>
              Xem giải pháp
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-2xl px-8" render={<Link href="/products" />}>
              <LayoutGrid className="mr-2 h-4 w-4" />
              Xem sản phẩm mẫu
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
