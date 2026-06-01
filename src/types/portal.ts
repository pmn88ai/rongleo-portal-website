export interface Product {
  id: string
  name: string
  slug: string
  description: string
  price: number
  image_url?: string
  created_at: string
}

export interface AdminItem {
  id: string
  title: string
  content: string
  status: 'draft' | 'published'
  created_at: string
  updated_at: string
}
