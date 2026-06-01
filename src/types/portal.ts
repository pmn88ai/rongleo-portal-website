export type ItemStatus =
  | 'Ý tưởng'
  | 'Đang phát triển'
  | 'Demo'
  | 'Beta'
  | 'Hoàn thiện'
  | 'Tạm ẩn'

export type ItemCategory =
  | 'AI'
  | 'GIS & Đất đai'
  | 'Dashboard'
  | 'CRM'
  | 'Quản lý nội bộ'
  | 'Dữ liệu gia đình'
  | 'Bất động sản'
  | 'Tự động hóa'
  | 'Khác'

export interface PortalItem {
  id: string
  title: string
  slug: string
  url: string | null
  summary: string | null
  description: string | null
  category: ItemCategory
  status: ItemStatus
  thumbnail_url: string | null
  tags: string[]
  featured: boolean
  public: boolean
  sort_order: number
  created_at: string
  updated_at: string
}

export type PortalItemInsert = Omit<PortalItem, 'id' | 'created_at' | 'updated_at'>
export type PortalItemUpdate = Partial<PortalItemInsert>

export const ITEM_STATUS_OPTIONS: ItemStatus[] = [
  'Ý tưởng', 'Đang phát triển', 'Demo', 'Beta', 'Hoàn thiện', 'Tạm ẩn',
]

export const ITEM_CATEGORY_OPTIONS: ItemCategory[] = [
  'AI', 'GIS & Đất đai', 'Dashboard', 'CRM', 'Quản lý nội bộ',
  'Dữ liệu gia đình', 'Bất động sản', 'Tự động hóa', 'Khác',
]
