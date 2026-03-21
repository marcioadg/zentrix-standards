'use client'

import { Sun, Moon } from 'lucide-react'
import { useTheme } from './ThemeProvider'

export function TopBar() {
  const { theme, toggle } = useTheme()

  return (
    <header
      className="fixed top-0 left-0 right-0 h-[48px] flex items-center justify-between px-[24px] z-50 border-b"
      style={{ backgroundColor: 'var(--sidebar-bg)', borderColor: 'var(--border)' }}
    >
      <span className="text-[16px] font-semibold" style={{ color: 'var(--text-primary)' }}>
        Zentrix Design System
      </span>
      <div className="flex items-center gap-[12px]">
        <button
          onClick={toggle}
          className="w-[32px] h-[32px] flex items-center justify-center rounded-[5px] transition-colors duration-150 ease-in-out"
          style={{ color: 'var(--text-secondary)' }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--hover)')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
        </button>
        <span
          className="text-[11px] font-medium px-[8px] py-[2px] rounded-[2px]"
          style={{ backgroundColor: 'var(--surface-raised)', color: 'var(--text-secondary)', border: '1px solid var(--border)' }}
        >
          v1.0
        </span>
      </div>
    </header>
  )
}
