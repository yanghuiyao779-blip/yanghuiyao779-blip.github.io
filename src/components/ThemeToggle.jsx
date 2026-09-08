import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle({ theme, onToggle }) {
  return (
    <button className="icon-button" onClick={onToggle} aria-label="切换明暗主题" title="切换主题">
      {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  )
}
