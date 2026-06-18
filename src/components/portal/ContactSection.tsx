'use client'
import { motion } from 'framer-motion'
import { Mail, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function ContactSection() {
  return (
    <section id="lien-he" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4 text-center max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Trao đổi dự án</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Tôi sẵn sàng trao đổi về Land Development, GIS, pháp lý BĐS và xây dựng công cụ số.
          </p>

          <p className="text-lg font-medium mb-8">
            <a
              href="mailto:phamminhnhat@rongleo.com"
              className="text-primary hover:underline transition-colors"
            >
              phamminhnhat@rongleo.com
            </a>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="rounded-2xl px-8" nativeButton={false} render={<a href="mailto:phamminhnhat@rongleo.com" />}>
              <Mail className="mr-2 h-4 w-4" />
              Gửi email &rarr;
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-2xl px-8"
              nativeButton={false}
              render={<a href="/files/Pham-Minh-Nhat-CV.pdf" target="_blank" rel="noopener noreferrer" />}
            >
              <FileText className="mr-2 h-4 w-4" />
              Tải CV
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
