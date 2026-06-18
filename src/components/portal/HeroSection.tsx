'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Briefcase, GraduationCap, Rocket, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'

const HIGHLIGHTS = [
  { icon: Briefcase, text: '15+ năm liên ngành — Kỹ thuật · Quy hoạch · Pháp lý · GIS · AI' },
  { icon: GraduationCap, text: 'Trường ĐH GTVT · Viện Quy hoạch Xây dựng Miền Nam · Tập đoàn Tân Hiệp Phát' },
  { icon: Rocket, text: 'Đang xây RongLeo — hệ sinh thái công cụ số cho BĐS, GIS và quản trị dữ liệu' },
]

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function HeroSection() {
  return (
    <section id="toi-la-ai" className="relative overflow-hidden pt-24 pb-20 md:pt-32 md:pb-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 to-transparent" />
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-[1fr_auto] items-center max-w-6xl mx-auto">
          {/* Left column */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="min-w-0"
          >
            <motion.div variants={item}>
              <span className="inline-block rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
                Senior Land Development & Legal Manager
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-6 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none"
            >
              Phạm Minh Nhật
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-3 text-2xl md:text-3xl font-semibold text-primary"
            >
              RongLeo
            </motion.p>

            <motion.p
              variants={item}
              className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
            >
              Tôi biến dữ liệu, bản đồ, quy trình và kinh nghiệm thực địa thành công cụ hành động cho bất động sản, pháp lý dự án và quản trị tài sản.
            </motion.p>

            <motion.ul variants={item} className="mt-8 space-y-3">
              {HIGHLIGHTS.map((h, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <h.icon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="min-w-0">{h.text}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div
              variants={item}
              className="mt-10 flex flex-col sm:flex-row items-start gap-4"
            >
              <Button variant="outline" className="rounded-2xl px-6" render={<Link href="/#nang-luc" />}>
                Xem năng lực
              </Button>
              <Button variant="secondary" className="rounded-2xl px-6" render={<Link href="/#san-pham" />}>
                Xem sản phẩm số
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button className="rounded-2xl px-6" render={<a href="/files/Pham-Minh-Nhat-CV.pdf" target="_blank" rel="noopener noreferrer" />}>
                <FileText className="mr-2 h-4 w-4" />
                Tải CV
              </Button>
            </motion.div>
          </motion.div>

          {/* Right column — decorative */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden lg:flex flex-shrink-0 w-72 h-80 items-center justify-center"
          >
            <div className="relative w-full h-full">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent" />
              <div className="absolute inset-4 rounded-2xl border border-primary/20 bg-background/60 backdrop-blur-sm" />
              <div className="absolute inset-6 rounded-xl opacity-20"
                style={{
                  backgroundImage: 'linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-8xl font-bold text-primary/10 select-none">RL</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
