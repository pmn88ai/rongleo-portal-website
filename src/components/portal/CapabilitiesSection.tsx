'use client'
import { motion } from 'framer-motion'
import { Map, Bot, BarChart3, Globe } from 'lucide-react'

const CAPABILITIES = [
  {
    icon: Map,
    title: 'Đất đai & GIS',
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
    items: ['WebGIS', 'Bản đồ quy hoạch', 'Phân tích vị trí', 'Hồ sơ thửa đất', 'Dữ liệu không gian'],
  },
  {
    icon: Bot,
    title: 'AI & Tự động hóa',
    color: 'text-violet-500',
    bg: 'bg-violet-500/10',
    items: ['AI nội bộ', 'Chatbot', 'Workflow', 'OCR', 'Tự động phân loại dữ liệu'],
  },
  {
    icon: BarChart3,
    title: 'Dữ liệu & Dashboard',
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
    items: ['Dashboard quản trị', 'Radar thị trường', 'Báo cáo dữ liệu', 'Thu thập và chuẩn hóa dữ liệu'],
  },
  {
    icon: Globe,
    title: 'Web App thực chiến',
    color: 'text-orange-500',
    bg: 'bg-orange-500/10',
    items: ['CRM', 'Quản lý tài sản', 'Quản lý khách hàng', 'PWA', 'Hệ thống nội bộ'],
  },
]

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Năng lực chính</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Mỗi mảng là một nhóm kỹ năng và công cụ thực chiến,
            có thể triển khai thành sản phẩm hoặc giải pháp cho bạn.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {CAPABILITIES.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="rounded-2xl border bg-card p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className={`rounded-xl p-2.5 ${cap.bg}`}>
                  <cap.icon className={`h-5 w-5 ${cap.color}`} />
                </div>
                <h3 className="text-lg font-semibold">{cap.title}</h3>
              </div>
              <ul className="space-y-2">
                {cap.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className={`h-1.5 w-1.5 rounded-full ${cap.bg.replace('/10', '')} flex-shrink-0`} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
