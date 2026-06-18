'use client'
import { motion } from 'framer-motion'

const CAPABILITIES = [
  {
    icon: '\u{1F3D7}\uFE0F',
    title: 'Land Development',
    items: [
      'Đánh giá quỹ đất',
      'Pháp lý đất đai',
      'Quy hoạch chi tiết',
      'Hiện trạng sử dụng đất',
    ],
  },
  {
    icon: '\u2696\uFE0F',
    title: 'Legal & Governance',
    items: [
      'Pháp lý dự án BĐS',
      'SOP & quy trình nội bộ',
      'Quản trị hồ sơ',
      'Kiểm soát rủi ro',
    ],
  },
  {
    icon: '\u{1F5FA}\uFE0F',
    title: 'GIS & Spatial Data',
    items: [
      'QGIS \u00B7 Guland \u00B7 Remaps',
      'Web GIS',
      'Bản đồ quy hoạch',
      'Phân tích không gian',
    ],
  },
  {
    icon: '\u{1F916}',
    title: 'AI & Data Systems',
    items: [
      'AI workflow',
      'Chuẩn hóa dữ liệu',
      'Quản lý hồ sơ số',
      'Dashboard ra quyết định',
    ],
  },
  {
    icon: '\u{1F3E2}',
    title: 'Real Estate Asset Management',
    items: [
      'Quản lý danh mục tài sản',
      'Khai thác & cho thuê',
      'CRM BĐS',
      'Dữ liệu giao dịch',
    ],
  },
  {
    icon: '\u270D\uFE0F',
    title: 'Writing & Thinking',
    items: [
      'Bài viết cá nhân & nghề nghiệp',
      'Phân tích xã hội & tài sản',
      'Hành trình liên ngành',
      'Dòng tiền & công nghệ',
    ],
  },
]

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const card = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function CapabilitiesSection() {
  return (
    <section id="nang-luc" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground">
            NĂNG LỰC
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">
            Tôi làm được gì
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Kỹ thuật &rarr; Quy hoạch &rarr; Pháp lý &rarr; GIS &rarr; AI &mdash; liên ngành, không phân mảnh.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {CAPABILITIES.map((cap) => (
            <motion.div
              key={cap.title}
              variants={card}
              className="group rounded-xl border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-[0_0_24px_-4px_var(--primary)_/_0.08]"
            >
              <span className="text-4xl">{cap.icon}</span>
              <h3 className="mt-4 text-lg font-semibold text-primary">
                {cap.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {cap.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-primary/50 flex-shrink-0" />
                    <span className="min-w-0">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
