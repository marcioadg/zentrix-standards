'use client'

import { useState } from 'react'
import {
  LayoutDashboard, BarChart3, CheckSquare, Target, AlertCircle, Video,
  Users, Network, Heart, Compass, Sparkles, GraduationCap, Search,
  Sun, Moon, ChevronDown, Check,
} from 'lucide-react'

function SectionTitle({ id, title }: { id: string; title: string }) {
  return (
    <h2 id={id} className="text-[20px] font-semibold leading-[28px] mb-[16px] pt-[32px] scroll-mt-[80px]" style={{ color: 'var(--text-primary)' }}>
      {title}
    </h2>
  )
}

function Label({ children }: { children: React.ReactNode }) {
  return <span className="text-[11px] font-medium" style={{ color: 'var(--text-secondary)' }}>{children}</span>
}

/* ─── 1. Colors ─── */
function ColorSwatch({ name, hex, usage }: { name: string; hex: string; usage: string }) {
  return (
    <div className="flex flex-col gap-[4px]">
      <div className="h-[48px] rounded-[4px] border" style={{ backgroundColor: hex, borderColor: 'var(--border)' }} />
      <span className="text-[11px] font-medium" style={{ color: 'var(--text-primary)' }}>{name}</span>
      <span className="text-[11px]" style={{ color: 'var(--text-muted)' }}>{hex}</span>
      <span className="text-[11px]" style={{ color: 'var(--text-secondary)' }}>{usage}</span>
    </div>
  )
}

const darkColors = [
  { name: 'page-bg', hex: '#090909', usage: 'Main page background' },
  { name: 'sidebar-bg', hex: '#0f1011', usage: 'Sidebar background' },
  { name: 'card-bg', hex: '#191a22', usage: 'Cards, panels, modals' },
  { name: 'surface-raised', hex: '#1b1c23', usage: 'Raised surfaces' },
  { name: 'active', hex: '#121314', usage: 'Active/selected items' },
  { name: 'hover', hex: '#151619', usage: 'Hover state' },
  { name: 'border', hex: '#25262b', usage: 'Borders, separators' },
  { name: 'text-primary', hex: '#e2e3e5', usage: 'Primary text' },
  { name: 'text-secondary', hex: '#96979a', usage: 'Secondary text' },
  { name: 'text-muted', hex: '#5e5e5f', usage: 'Muted text' },
  { name: 'accent', hex: '#5c84fe', usage: 'Primary accent' },
  { name: 'accent-hover', hex: '#4a72ec', usage: 'Accent hover' },
]

const lightColors = [
  { name: 'page-bg', hex: '#fbfbfb', usage: 'Main page background' },
  { name: 'sidebar-bg', hex: '#f3f3f3', usage: 'Sidebar background' },
  { name: 'card-bg', hex: '#ffffff', usage: 'Cards, panels, modals' },
  { name: 'active', hex: '#e8e8ea', usage: 'Active/selected items' },
  { name: 'hover', hex: '#ececec', usage: 'Hover state' },
  { name: 'border', hex: '#e0e0e2', usage: 'Borders, separators' },
  { name: 'text-primary', hex: '#2d2d2e', usage: 'Primary text' },
  { name: 'text-secondary', hex: '#5e5e5f', usage: 'Secondary text' },
  { name: 'accent', hex: '#5e6ad2', usage: 'Primary accent' },
]

const statusColors = [
  { name: 'success', hex: '#4ade80', usage: 'On-track, positive' },
  { name: 'warning', hex: '#fbbf24', usage: 'At-risk, attention' },
  { name: 'error', hex: '#f87171', usage: 'Off-track, critical' },
  { name: 'info', hex: '#5c84fe', usage: 'Informational' },
]

function ColorsSection() {
  return (
    <section>
      <SectionTitle id="colors" title="Colors" />
      <h3 className="text-[16px] font-semibold mb-[12px]" style={{ color: 'var(--text-primary)' }}>Dark Theme</h3>
      <div className="grid grid-cols-4 gap-[12px] mb-[24px]">
        {darkColors.map((c) => <ColorSwatch key={c.name + 'dark'} {...c} />)}
      </div>
      <h3 className="text-[16px] font-semibold mb-[12px]" style={{ color: 'var(--text-primary)' }}>Light Theme</h3>
      <div className="grid grid-cols-4 gap-[12px] mb-[24px]">
        {lightColors.map((c) => <ColorSwatch key={c.name + 'light'} {...c} />)}
      </div>
      <h3 className="text-[16px] font-semibold mb-[12px]" style={{ color: 'var(--text-primary)' }}>Status Colors</h3>
      <div className="grid grid-cols-4 gap-[12px]">
        {statusColors.map((c) => <ColorSwatch key={c.name} {...c} />)}
      </div>
    </section>
  )
}

/* ─── 2. Typography ─── */
const typoStyles = [
  { name: 'Display', size: '24px', weight: 600, lineHeight: '32px' },
  { name: 'Heading 1', size: '20px', weight: 600, lineHeight: '28px' },
  { name: 'Heading 2', size: '16px', weight: 600, lineHeight: '24px' },
  { name: 'Body', size: '13px', weight: 400, lineHeight: '20px' },
  { name: 'Body Medium', size: '13px', weight: 500, lineHeight: '20px' },
  { name: 'Small', size: '11px', weight: 400, lineHeight: '16px' },
  { name: 'Small Medium', size: '11px', weight: 500, lineHeight: '16px' },
  { name: 'Tiny', size: '8px', weight: 400, lineHeight: '12px' },
]

function TypographySection() {
  return (
    <section>
      <SectionTitle id="typography" title="Typography" />
      <div className="flex flex-col gap-[16px]">
        {typoStyles.map((s) => (
          <div key={s.name} className="flex flex-col gap-[4px]">
            <Label>{s.name} · {s.size} · w{s.weight} · {s.lineHeight}</Label>
            <span style={{ fontSize: s.size, fontWeight: s.weight, lineHeight: s.lineHeight, color: 'var(--text-primary)' }}>
              The quick brown fox jumps over the lazy dog
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ─── 3. Spacing ─── */
const spacingTokens = [
  { name: 'space-xs', value: 4 },
  { name: 'space-sm', value: 8 },
  { name: 'space-md', value: 12 },
  { name: 'space-lg', value: 16 },
  { name: 'space-xl', value: 20 },
  { name: 'space-2xl', value: 24 },
  { name: 'space-3xl', value: 32 },
]

function SpacingSection() {
  return (
    <section>
      <SectionTitle id="spacing" title="Spacing" />
      <div className="flex flex-col gap-[8px]">
        {spacingTokens.map((s) => (
          <div key={s.name} className="flex items-center gap-[12px]">
            <span className="text-[11px] font-medium w-[80px]" style={{ color: 'var(--text-secondary)' }}>{s.name}</span>
            <div
              className="h-[24px] rounded-[2px]"
              style={{ width: `${s.value * 4}px`, backgroundColor: 'var(--accent)', opacity: 0.3 }}
            />
            <span className="text-[11px]" style={{ color: 'var(--text-muted)' }}>{s.value}px</span>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ─── 4. Border Radius ─── */
const radii = [
  { name: 'radius-sm', value: '2px' },
  { name: 'radius-default', value: '4px' },
  { name: 'radius-md', value: '5px' },
  { name: 'radius-lg', value: '6px' },
  { name: 'radius-xl', value: '8px' },
  { name: 'radius-full', value: '9999px' },
]

function BorderRadiusSection() {
  return (
    <section>
      <SectionTitle id="border-radius" title="Border Radius" />
      <div className="flex gap-[16px] flex-wrap">
        {radii.map((r) => (
          <div key={r.name} className="flex flex-col items-center gap-[8px]">
            <div
              className="w-[64px] h-[64px] border"
              style={{ borderRadius: r.value, backgroundColor: 'var(--card-bg)', borderColor: 'var(--border)' }}
            />
            <Label>{r.name}</Label>
            <span className="text-[11px]" style={{ color: 'var(--text-muted)' }}>{r.value}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ─── 5. Shadows ─── */
const shadows = [
  { name: 'None', value: 'none' },
  { name: 'Subtle', value: '0 1px 2px rgba(0,0,0,0.1)' },
  { name: 'Medium', value: '0 4px 12px rgba(0,0,0,0.15)' },
  { name: 'Focus Ring', value: '0 0 0 2px #5c84fe40' },
]

function ShadowsSection() {
  return (
    <section>
      <SectionTitle id="shadows" title="Shadows" />
      <div className="flex gap-[16px] flex-wrap">
        {shadows.map((s) => (
          <div key={s.name} className="flex flex-col items-center gap-[8px]">
            <div
              className="w-[160px] h-[80px] rounded-[6px] border"
              style={{ boxShadow: s.value, backgroundColor: 'var(--card-bg)', borderColor: 'var(--border)' }}
            />
            <Label>{s.name}</Label>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ─── 6. Buttons ─── */
const btnVariants = [
  { name: 'Primary', bg: '#090909', text: '#ffffff', border: 'none', hoverBg: '#1a1a1a' },
  { name: 'Secondary', bg: 'transparent', text: 'var(--text-primary)', border: '1px solid var(--border)', hoverBg: 'var(--hover)' },
  { name: 'Ghost', bg: 'transparent', text: 'var(--text-secondary)', border: 'none', hoverBg: 'var(--hover)' },
  { name: 'Accent', bg: 'var(--accent)', text: '#ffffff', border: 'none', hoverBg: 'var(--accent-hover)' },
  { name: 'Destructive', bg: '#dc2626', text: '#ffffff', border: 'none', hoverBg: '#b91c1c' },
]

const btnSizes = [
  { name: 'Small', height: '28px', fontSize: '11px', padding: '4px 12px' },
  { name: 'Medium', height: '32px', fontSize: '13px', padding: '6px 16px' },
  { name: 'Large', height: '40px', fontSize: '13px', padding: '8px 20px' },
]

function ButtonsSection() {
  return (
    <section>
      <SectionTitle id="buttons" title="Buttons" />
      <div className="overflow-x-auto">
        <table className="border-collapse">
          <thead>
            <tr>
              <th className="text-left text-[11px] font-medium p-[8px]" style={{ color: 'var(--text-muted)' }}></th>
              {btnSizes.map((s) => (
                <th key={s.name} className="text-left text-[11px] font-medium p-[8px]" style={{ color: 'var(--text-muted)' }}>{s.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {btnVariants.map((v) => (
              <tr key={v.name}>
                <td className="text-[11px] font-medium p-[8px]" style={{ color: 'var(--text-secondary)' }}>{v.name}</td>
                {btnSizes.map((s) => (
                  <td key={s.name} className="p-[8px]">
                    <button
                      className="rounded-[5px] font-medium transition-colors duration-150 ease-in-out cursor-pointer"
                      style={{
                        height: s.height,
                        fontSize: s.fontSize,
                        padding: s.padding,
                        backgroundColor: v.bg,
                        color: v.text,
                        border: v.border,
                        fontWeight: 500,
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = v.hoverBg)}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = v.bg)}
                    >
                      {v.name}
                    </button>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

/* ─── 7. Inputs ─── */
function InputsSection() {
  return (
    <section>
      <SectionTitle id="inputs" title="Inputs" />
      <div className="grid grid-cols-2 gap-[16px]">
        <div className="flex flex-col gap-[8px]">
          <Label>Text Input (themed)</Label>
          <input
            type="text"
            placeholder="Enter text..."
            className="h-[32px] rounded-[5px] text-[13px] font-normal px-[12px] py-[8px] outline-none transition-colors duration-150 ease-in-out border"
            style={{ backgroundColor: 'var(--input-bg)', borderColor: 'var(--border)', color: 'var(--text-primary)' }}
            onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--accent)')}
            onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
          />
        </div>
        <div className="flex flex-col gap-[8px]">
          <Label>Search Input (themed)</Label>
          <div className="relative">
            <Search size={16} className="absolute left-[12px] top-[8px]" style={{ color: 'var(--text-muted)' }} />
            <input
              type="text"
              placeholder="Search..."
              className="h-[32px] w-full rounded-[5px] text-[13px] font-normal pl-[36px] pr-[12px] py-[8px] outline-none transition-colors duration-150 ease-in-out border"
              style={{ backgroundColor: 'var(--input-bg)', borderColor: 'var(--border)', color: 'var(--text-primary)' }}
              onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--accent)')}
              onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── 8. Sidebar Nav ─── */
function SidebarNavSection() {
  const items = [
    { label: 'Dashboard', icon: LayoutDashboard, state: 'default' as const },
    { label: 'Metrics', icon: BarChart3, state: 'hover' as const },
    { label: 'Tasks', icon: CheckSquare, state: 'active' as const },
  ]
  return (
    <section>
      <SectionTitle id="sidebar-nav" title="Sidebar Nav" />
      <div className="w-[240px] rounded-[6px] border p-[8px]" style={{ backgroundColor: 'var(--sidebar-bg)', borderColor: 'var(--border)' }}>
        {items.map((item) => {
          const isActive = item.state === 'active'
          const isHover = item.state === 'hover'
          return (
            <div
              key={item.label}
              className="flex items-center gap-[8px] h-[32px] px-[12px] rounded-[4px] text-[13px] font-medium"
              style={{
                backgroundColor: isActive ? 'var(--active)' : isHover ? 'var(--hover)' : 'transparent',
                color: isActive || isHover ? 'var(--text-primary)' : 'var(--text-secondary)',
                borderLeft: isActive ? '2px solid var(--accent)' : '2px solid transparent',
              }}
            >
              <item.icon size={16} style={{ color: isActive ? 'var(--accent)' : 'var(--text-muted)' }} />
              {item.label}
              <span className="ml-auto text-[11px]" style={{ color: 'var(--text-muted)' }}>
                {item.state === 'default' ? 'Default' : item.state === 'hover' ? 'Hover' : 'Active'}
              </span>
            </div>
          )
        })}
      </div>
    </section>
  )
}

/* ─── 9. Cards ─── */
function CardsSection() {
  return (
    <section>
      <SectionTitle id="cards" title="Cards" />
      <div
        className="w-[320px] rounded-[6px] border overflow-hidden"
        style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border)' }}
      >
        <div className="p-[16px] border-b" style={{ borderColor: 'var(--border)' }}>
          <span className="text-[13px] font-medium" style={{ color: 'var(--text-primary)' }}>Q1 Revenue</span>
        </div>
        <div className="p-[16px]">
          <p className="text-[13px]" style={{ color: 'var(--text-secondary)' }}>
            Total revenue for Q1 2026, all regions.
          </p>
        </div>
        <div className="p-[16px] border-t" style={{ borderColor: 'var(--border)' }}>
          <button
            className="text-[13px] font-medium rounded-[5px] px-[12px] py-[8px] transition-colors duration-150 ease-in-out cursor-pointer"
            style={{ color: 'var(--text-secondary)', backgroundColor: 'transparent' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--hover)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
          >
            View details
          </button>
        </div>
      </div>
    </section>
  )
}

/* ─── 10. Tables ─── */
const tableRows = [
  { metric: 'Revenue', target: '$1.2M', actual: '$1.35M', status: 'On Track' as const },
  { metric: 'New Users', target: '5,000', actual: '4,200', status: 'Off Track' as const },
  { metric: 'Retention', target: '85%', actual: '87%', status: 'On Track' as const },
  { metric: 'NPS Score', target: '72', actual: '65', status: 'Off Track' as const },
]

function TablesSection() {
  return (
    <section>
      <SectionTitle id="tables" title="Tables" />
      <div className="rounded-[6px] border overflow-hidden" style={{ borderColor: 'var(--border)' }}>
        <table className="w-full border-collapse">
          <thead>
            <tr style={{ backgroundColor: 'var(--table-header-bg)' }}>
              {['Metric', 'Target', 'Actual', 'Status'].map((h) => (
                <th key={h} className="text-left text-[11px] font-medium px-[12px] py-[8px]" style={{ color: 'var(--text-secondary)' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableRows.map((row) => (
              <tr
                key={row.metric}
                className="border-b transition-colors duration-150 ease-in-out"
                style={{ borderColor: 'var(--border)' }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--hover)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                <td className="text-[13px] px-[12px] py-[8px]" style={{ color: 'var(--text-primary)' }}>{row.metric}</td>
                <td className="text-[13px] px-[12px] py-[8px]" style={{ color: 'var(--text-primary)' }}>{row.target}</td>
                <td className="text-[13px] px-[12px] py-[8px]" style={{ color: 'var(--text-primary)' }}>{row.actual}</td>
                <td className="px-[12px] py-[8px]">
                  <StatusBadge status={row.status} pill={false} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

/* ─── 11. Badges ─── */
type BadgeStatus = 'On Track' | 'Off Track' | 'Complete' | 'Canceled'

const badgeStyles: Record<BadgeStatus, { bg: string; text: string }> = {
  'On Track': { bg: '#16a34a20', text: '#4ade80' },
  'Off Track': { bg: '#dc262620', text: '#f87171' },
  'Complete': { bg: '#5c84fe20', text: '#5c84fe' },
  'Canceled': { bg: '#40404020', text: '#96979a' },
}

function StatusBadge({ status, pill }: { status: BadgeStatus; pill: boolean }) {
  const s = badgeStyles[status]
  return (
    <span
      className="inline-block text-[11px] font-medium px-[8px] py-[2px]"
      style={{ backgroundColor: s.bg, color: s.text, borderRadius: pill ? '9999px' : '2px' }}
    >
      {status}
    </span>
  )
}

function BadgesSection() {
  const statuses: BadgeStatus[] = ['On Track', 'Off Track', 'Complete', 'Canceled']
  return (
    <section>
      <SectionTitle id="badges" title="Badges" />
      <div className="flex flex-col gap-[16px]">
        <div>
          <Label>Rectangular (radius-sm)</Label>
          <div className="flex gap-[8px] mt-[8px]">
            {statuses.map((s) => <StatusBadge key={s} status={s} pill={false} />)}
          </div>
        </div>
        <div>
          <Label>Pill (radius-full)</Label>
          <div className="flex gap-[8px] mt-[8px]">
            {statuses.map((s) => <StatusBadge key={s} status={s} pill={true} />)}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── 12. Avatars ─── */
const avatarSizes = [
  { name: 'Small', size: 24, font: '10px' },
  { name: 'Medium', size: 32, font: '12px' },
  { name: 'Large', size: 40, font: '14px' },
]

function AvatarsSection() {
  return (
    <section>
      <SectionTitle id="avatars" title="Avatars" />
      <div className="flex gap-[24px]">
        {avatarSizes.map((a) => (
          <div key={a.name} className="flex flex-col items-center gap-[8px]">
            <div
              className="rounded-full flex items-center justify-center font-medium relative"
              style={{
                width: `${a.size}px`,
                height: `${a.size}px`,
                fontSize: a.font,
                color: 'var(--accent)',
              }}
            >
              <div className="absolute inset-0 rounded-full" style={{ backgroundColor: 'var(--accent)', opacity: 0.2 }} />
              <span className="relative">MG</span>
            </div>
            <Label>{a.name}</Label>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ─── 13. Icons ─── */
const iconList = [
  { icon: LayoutDashboard, label: 'Dashboard' },
  { icon: BarChart3, label: 'Metrics' },
  { icon: CheckSquare, label: 'Tasks' },
  { icon: Target, label: 'Goals' },
  { icon: AlertCircle, label: 'Issues' },
  { icon: Video, label: 'Meetings' },
  { icon: Users, label: 'People' },
  { icon: Network, label: 'Org Chart' },
  { icon: Heart, label: 'Org Health' },
  { icon: Compass, label: 'Strategy' },
  { icon: Sparkles, label: 'Zentrix AI' },
  { icon: GraduationCap, label: 'Academy' },
  { icon: Search, label: 'Search' },
  { icon: Sun, label: 'Sun' },
  { icon: Moon, label: 'Moon' },
  { icon: ChevronDown, label: 'Chevron' },
  { icon: Check, label: 'Check' },
]

function IconsSection() {
  return (
    <section>
      <SectionTitle id="icons" title="Icons" />
      <div className="grid grid-cols-6 gap-[16px]">
        {iconList.map(({ icon: Icon, label }) => (
          <div key={label} className="flex flex-col items-center gap-[8px] py-[12px]">
            <Icon size={16} style={{ color: 'var(--text-secondary)' }} />
            <span className="text-[11px] font-medium" style={{ color: 'var(--text-muted)' }}>{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ─── 14. Animations ─── */
function AnimationsSection() {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [fadeVisible, setFadeVisible] = useState(false)

  return (
    <section>
      <SectionTitle id="animations" title="Animations" />
      <div className="grid grid-cols-3 gap-[16px]">
        {/* Color transition */}
        <div className="flex flex-col gap-[8px]">
          <Label>Color transition · 150ms ease</Label>
          <div
            className="w-[80px] h-[80px] rounded-[6px] cursor-pointer"
            style={{
              backgroundColor: 'var(--accent)',
              transition: 'background-color 150ms ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--accent-hover)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--accent)')}
          />
        </div>

        {/* Dropdown */}
        <div className="flex flex-col gap-[8px]">
          <Label>Dropdown · 200ms ease-out</Label>
          <div className="relative">
            <button
              className="h-[32px] px-[12px] text-[13px] font-medium rounded-[5px] border cursor-pointer transition-colors duration-150 ease-in-out"
              style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border)', color: 'var(--text-primary)' }}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Toggle <ChevronDown size={14} className="inline ml-[4px]" />
            </button>
            <div
              className="absolute top-[36px] left-0 w-[160px] rounded-[6px] border overflow-hidden"
              style={{
                backgroundColor: 'var(--surface-raised)',
                borderColor: 'var(--border)',
                transition: 'opacity 200ms ease-out, transform 200ms ease-out',
                opacity: dropdownOpen ? 1 : 0,
                transform: dropdownOpen ? 'translateY(0)' : 'translateY(-4px)',
                pointerEvents: dropdownOpen ? 'auto' : 'none',
              }}
            >
              {['Option A', 'Option B', 'Option C'].map((o) => (
                <div
                  key={o}
                  className="px-[12px] py-[8px] text-[13px] cursor-pointer transition-colors duration-150 ease-in-out"
                  style={{ color: 'var(--text-primary)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--hover)')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                >
                  {o}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fade */}
        <div className="flex flex-col gap-[8px]">
          <Label>Fade · 150ms ease opacity</Label>
          <button
            className="h-[32px] px-[12px] text-[13px] font-medium rounded-[5px] border cursor-pointer w-fit transition-colors duration-150 ease-in-out"
            style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border)', color: 'var(--text-primary)' }}
            onClick={() => setFadeVisible(!fadeVisible)}
          >
            {fadeVisible ? 'Hide' : 'Show'} text
          </button>
          <p
            className="text-[13px]"
            style={{
              color: 'var(--text-secondary)',
              transition: 'opacity 150ms ease',
              opacity: fadeVisible ? 1 : 0,
            }}
          >
            This text fades in and out.
          </p>
        </div>
      </div>
    </section>
  )
}

/* ─── Export all ─── */
export function AllSections() {
  return (
    <div className="flex flex-col gap-[32px]">
      <ColorsSection />
      <TypographySection />
      <SpacingSection />
      <BorderRadiusSection />
      <ShadowsSection />
      <ButtonsSection />
      <InputsSection />
      <SidebarNavSection />
      <CardsSection />
      <TablesSection />
      <BadgesSection />
      <AvatarsSection />
      <IconsSection />
      <AnimationsSection />
    </div>
  )
}
