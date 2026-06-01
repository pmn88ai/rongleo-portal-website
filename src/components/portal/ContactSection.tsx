'use client'
import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4 text-center max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Cần xây dựng hệ thống?</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Mô tả bài toán của bạn. Dù là GIS, dashboard dữ liệu, AI tự động hóa
            hay web app thực chiến — hãy trao đổi trực tiếp.
          </p>
          <Button size="lg" className="rounded-2xl px-8" render={<a href="mailto:admin@rongleo.com" />}>
            <Mail className="mr-2 h-4 w-4" />
            Trao đổi dự án
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
