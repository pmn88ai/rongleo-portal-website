'use client'
import { Sun, Moon, Star } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'

const THEMES = ['light', 'dark', 'luxury'] as const
type Theme = typeof THEMES[number]

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const cycleTheme = () => {
    const idx = THEMES.indexOf((theme as Theme) ?? 'light')
    setTheme(THEMES[(idx + 1) % THEMES.length])
  }

  return (
    <Button variant="ghost" size="icon" onClick={cycleTheme} aria-label="Đổi theme">
      {!mounted ? <Sun className="h-4 w-4" /> :
       theme === 'dark' ? <Moon className="h-4 w-4" /> :
       theme === 'luxury' ? <Star className="h-4 w-4" /> :
       <Sun className="h-4 w-4" />}
    </Button>
  )
}
