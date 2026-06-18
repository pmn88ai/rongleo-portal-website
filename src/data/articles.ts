export interface Article {
  title: string
  slug: string
  summary: string
  category: string
  date: string
  featured?: boolean
  externalUrl?: string
  content?: string
}

export const ARTICLES: Article[] = [
  {
    title: 'Vì sao tôi xây RongLeo',
    slug: 'vi-sao-xay-rongleo',
    summary: 'Không phải startup. Là hệ sinh thái công cụ được xây từ nhu cầu thực tế của chính tôi — để không phụ thuộc vào phần mềm của người khác.',
    category: 'Hành trình',
    date: '2026-06-01',
    featured: true,
    content: 'RongLeo bắt đầu từ một nhu cầu đơn giản: tôi cần công cụ không tồn tại trên thị trường. Sau nhiều năm làm kỹ thuật, quy hoạch và pháp lý, tôi nhận ra rằng dữ liệu quan trọng nhất của mình nằm rải rác — trong email, trong Excel, trong bộ nhớ. RongLeo là câu trả lời cá nhân cho câu hỏi: làm thế nào để biến kinh nghiệm thành hệ thống?',
  },
  {
    title: 'Hành trình từ kỹ sư đến người code',
    slug: 'hanh-trinh-ky-su-den-code',
    summary: '15 năm từ đo đạc ngoài thực địa đến xây hệ thống số. Vì sao tôi không dừng lại ở một vai trò — và điều đó có nghĩa gì với cách tôi tiếp cận vấn đề.',
    category: 'Hành trình',
    date: '2026-01-15',
    featured: true,
    content: 'Kỹ sư xây dựng, rồi kiểm định, rồi giảng dạy, rồi quy hoạch, rồi pháp lý, rồi GIS, rồi AI. Mỗi bước không phải là thay đổi nghề — mà là thêm một lớp hiểu biết vào cùng một vấn đề: làm thế nào để đưa ra quyết định tốt hơn về đất đai và tài sản.',
  },
  {
    title: 'Vì sao tôi học luật giữa lúc đang làm kỹ thuật',
    slug: 'vi-sao-hoc-luat',
    summary: 'Pháp lý dự án BĐS không phải việc của luật sư — mà là của người hiểu cả bản đồ lẫn hồ sơ. Góc nhìn từ người đứng giữa hai thế giới.',
    category: 'Nghề nghiệp',
    date: '2026-02-10',
    featured: true,
    content: 'Trong một dự án BĐS, luật sư đọc điều luật. Kỹ sư đọc bản vẽ. Nhưng ai đọc cả hai? Đó là lúc tôi nhận ra rằng khoảng trống giữa kỹ thuật và pháp lý không ai lấp — và đó cũng là nơi phần lớn rủi ro dự án ẩn náu.',
  },
  {
    title: 'GIS quan trọng với BĐS như thế nào',
    slug: 'gis-va-bds',
    summary: 'Dữ liệu không gian giúp nhìn thấy điều mà bảng tính không thể nói. Quy hoạch, lộ giới, hiện trạng — tất cả cần được đọc trên bản đồ.',
    category: 'GIS',
    date: '2026-03-05',
    featured: false,
    content: 'Khi một thửa đất được mô tả bằng tọa độ và diện tích trong Excel, bạn không nhìn thấy gì. Khi bạn đặt nó lên bản đồ quy hoạch, mọi thứ thay đổi. GIS không phải phần mềm — mà là cách tư duy về không gian.',
  },
  {
    title: 'AI giúp gì cho pháp lý dự án',
    slug: 'ai-phap-ly-du-an',
    summary: 'Không phải thay thế luật sư. Mà là giúp người trong nghề đọc nhanh hơn, lưu trữ tốt hơn, và ra quyết định chắc hơn — khi tài liệu nhiều hơn thời gian.',
    category: 'AI',
    date: '2026-04-20',
    featured: false,
    content: 'Một dự án BĐS trung bình có vài trăm trang hồ sơ pháp lý. Không ai đọc hết. AI có thể tóm tắt, phân loại, so sánh — và quan trọng nhất, cảnh báo khi thiếu tài liệu. Đó là giá trị thực sự.',
  },
  {
    title: 'Từ dữ liệu đến công cụ hành động',
    slug: 'du-lieu-den-cong-cu',
    summary: 'Mọi bộ dữ liệu đều vô nghĩa nếu không có quy trình xử lý và giao diện phù hợp với người dùng thực. Bài học từ 3 năm xây RongLeo.',
    category: 'Data',
    date: '2026-05-18',
    featured: false,
    content: 'Dữ liệu tốt + quy trình tốt + giao diện tốt = công cụ hành động. Thiếu một trong ba, bạn chỉ có một spreadsheet đắt tiền hoặc một dashboard đẹp mà không ai dùng.',
  },
]

export function getFeaturedArticles(limit = 3): Article[] {
  return ARTICLES.filter((a) => a.featured).slice(0, limit)
}

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug)
}
