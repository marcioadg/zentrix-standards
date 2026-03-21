'use client'

import {
  Palette, Type, Ruler, Square, Layers, MousePointer,
  AlignLeft, PanelLeft, CreditCard, Table, Tag, UserCircle, Grid, Zap,
} from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { id: 'colors', label: 'Colors', icon: Palette },
  { id: 'typography', label: 'Typography', icon: Type },
  { id: 'spacing', label: 'Spacing', icon: Ruler },
  { id: 'border-radius', label: 'Border Radius', icon: Square },
  { id: 'shadows', label: 'Shadows', icon: Layers },
  { id: 'buttons', label: 'Buttons', icon: MousePointer },
  { id: 'inputs', label: 'Inputs', icon: AlignLeft },
  { id: 'sidebar-nav', label: 'Sidebar Nav', icon: PanelLeft },
  { id: 'cards', label: 'Cards', icon: CreditCard },
  { id: 'tables', label: 'Tables', icon: Table },
  { id: 'badges', label: 'Badges', icon: Tag },
  { id: 'avatars', label: 'Avatars', icon: UserCircle },
  { id: 'icons', label: 'Icons', icon: Grid },
  { id: 'animations', label: 'Animations', icon: Zap },
]

export function Sidebar() {
  const [active, setActive] = useState('colors')

  return (
    <nav
      className="fixed left-0 top-[48px] bottom-0 w-[240px] overflow-y-auto py-[12px] px-[8px] border-r z-40"
      style={{ backgroundColor: 'var(--sidebar-bg)', borderColor: 'var(--border)' }}
    >
      <div className="text-[11px] font-medium uppercase px-[12px] py-[8px]" style={{ color: 'var(--text-muted)' }}>
        Components
      </div>
      {navItems.map(({ id, label, icon: Icon }) => {
        const isActive = active === id
        return (
          <a
            key={id}
            href={`#${id}`}
            onClick={() => setActive(id)}
            className="flex items-center gap-[8px] h-[32px] px-[12px] rounded-[4px] text-[13px] font-medium transition-colors duration-150 ease-in-out"
            style={{
              backgroundColor: isActive ? 'var(--active)' : 'transparent',
              color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
              borderLeft: isActive ? '2px solid var(--accent)' : '2px solid transparent',
            }}
            onMouseEnter={(e) => {
              if (!isActive) {
                e.currentTarget.style.backgroundColor = 'var(--hover)'
                e.currentTarget.style.color = 'var(--text-primary)'
              }
            }}
            onMouseLeave={(e) => {
              if (!isActive) {
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.color = 'var(--text-secondary)'
              }
            }}
          >
            <Icon size={16} style={{ color: isActive ? 'var(--accent)' : 'var(--text-muted)' }} />
            {label}
          </a>
        )
      })}
    </nav>
  )
}
