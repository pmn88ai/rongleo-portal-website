'use client'

interface CategoryFilterProps {
  categories: string[]
  active: string
  onChange: (c: string) => void
}

export function CategoryFilter({ categories, active, onChange }: CategoryFilterProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 mb-8 scrollbar-none">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
            active === cat
              ? 'bg-primary text-primary-foreground'
              : 'border hover:bg-muted text-muted-foreground'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}
