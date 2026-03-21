'use client'

import { useState } from 'react'
import {
  LayoutDashboard, BarChart3, CheckSquare, Target, AlertCircle, Video,
  Users, Network, Heart, Compass, Sparkles, GraduationCap, Search,
  Sun, Moon, ChevronDown, Check, X, CheckCircle, Inbox,
  ArrowUpRight, ArrowDownRight, Map, Wind, Bot, Shield, FileText,
  TrendingUp, Boxes, Activity, GitBranch, LayoutTemplate,
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

/* ─── 15. System Architecture ─── */
const archLayers = [
  { name: 'Extension Layer', desc: 'Module Flexibility — custom widgets, plugins, third-party integrations', opacity: 0.15 },
  { name: 'Module Layer', desc: 'Per-Product — zentrixcrm, zentrixmail, zentrix-insights, business-os', opacity: 0.25 },
  { name: 'Platform Layer', desc: 'Non-Negotiable — tokens, typography, layout grid, navigation, state system', opacity: 0.4 },
]

const mayCustomize = [
  'Dashboard widget arrangement',
  'Table column visibility & order',
  'Card content & metadata fields',
  'Module-specific icons (from Lucide)',
  'Empty state illustrations',
  'Filter presets & saved views',
]

const mustNotCustomize = [
  'Color tokens or palette',
  'Typography scale or font family',
  'Spacing tokens',
  'Navigation structure or behavior',
  'Button variants or sizes',
  'Border radius values',
]

function SystemArchitectureSection() {
  return (
    <section>
      <SectionTitle id="system-architecture" title="System Architecture" />
      <div className="flex flex-col gap-[4px] mb-[24px]">
        {archLayers.map((layer) => (
          <div
            key={layer.name}
            className="flex flex-col items-center justify-center py-[20px] px-[16px] rounded-[6px] text-center"
            style={{ backgroundColor: `var(--accent)`, opacity: layer.opacity + 0.6 }}
          >
            <div className="rounded-[6px] py-[20px] px-[16px] w-full" style={{ backgroundColor: `rgba(92,132,254,${layer.opacity})` }}>
              <span className="text-[13px] font-semibold block" style={{ color: 'var(--text-primary)' }}>{layer.name}</span>
              <span className="text-[11px] mt-[4px] block" style={{ color: 'var(--text-secondary)' }}>{layer.desc}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-[16px]">
        <div className="rounded-[6px] border p-[16px]" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border)' }}>
          <span className="text-[13px] font-semibold block mb-[12px]" style={{ color: 'var(--text-primary)' }}>Modules May Customize</span>
          {mayCustomize.map((item) => (
            <div key={item} className="flex items-center gap-[8px] py-[4px]">
              <Check size={14} style={{ color: 'var(--success)' }} />
              <span className="text-[13px]" style={{ color: 'var(--text-secondary)' }}>{item}</span>
            </div>
          ))}
        </div>
        <div className="rounded-[6px] border p-[16px]" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border)' }}>
          <span className="text-[13px] font-semibold block mb-[12px]" style={{ color: 'var(--text-primary)' }}>Modules Must Not Customize</span>
          {mustNotCustomize.map((item) => (
            <div key={item} className="flex items-center gap-[8px] py-[4px]">
              <X size={14} style={{ color: 'var(--error)' }} />
              <span className="text-[13px]" style={{ color: 'var(--text-secondary)' }}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── 16. Navigation Model ─── */
const navGroups = [
  { label: 'Core', items: [
    { name: 'Dashboard', icon: LayoutDashboard, state: 'active' as const },
    { name: 'Metrics', icon: BarChart3, state: 'default' as const },
    { name: 'Tasks', icon: CheckSquare, state: 'default' as const },
    { name: 'Goals', icon: Target, state: 'default' as const },
  ]},
  { label: 'Collaboration', items: [
    { name: 'Issues', icon: AlertCircle, state: 'default' as const },
    { name: 'Meetings', icon: Video, state: 'hover' as const },
  ]},
  { label: 'Organization', items: [
    { name: 'People', icon: Users, state: 'default' as const },
    { name: 'Org Chart', icon: Network, state: 'default' as const },
    { name: 'Org Health', icon: Heart, state: 'default' as const },
  ]},
  { label: 'Intelligence', items: [
    { name: 'Strategy', icon: Compass, state: 'default' as const },
    { name: 'Zentrix AI', icon: Sparkles, state: 'default' as const },
    { name: 'Academy', icon: GraduationCap, state: 'default' as const },
  ]},
]

const navRules = [
  { title: 'Depth limit', desc: 'Maximum 2 levels deep. Top-level group → item. No nested sub-menus.' },
  { title: 'Module switching', desc: 'Switching modules replaces the main content area. Sidebar stays persistent and does not re-render.' },
  { title: 'Zero learning curve', desc: 'Every module uses the same sidebar layout. Users never need to re-learn navigation.' },
  { title: 'Active state', desc: 'Exactly one item is active at all times. Active item shows accent left-border + active background.' },
]

function NavigationModelSection() {
  return (
    <section>
      <SectionTitle id="navigation-model" title="Navigation Model" />
      <div className="flex gap-[24px]">
        <div className="w-[200px] shrink-0 rounded-[6px] border overflow-hidden" style={{ backgroundColor: 'var(--sidebar-bg)', borderColor: 'var(--border)' }}>
          {navGroups.map((group, gi) => (
            <div key={group.label}>
              {gi > 0 && <div className="mx-[12px] border-b" style={{ borderColor: 'var(--border)' }} />}
              <div className="text-[11px] font-medium uppercase px-[12px] pt-[12px] pb-[4px]" style={{ color: 'var(--text-muted)' }}>
                {group.label}
              </div>
              {group.items.map((item) => {
                const isActive = item.state === 'active'
                const isHover = item.state === 'hover'
                return (
                  <div
                    key={item.name}
                    className="flex items-center gap-[8px] h-[32px] px-[12px] text-[13px] font-medium"
                    style={{
                      backgroundColor: isActive ? 'var(--active)' : isHover ? 'var(--hover)' : 'transparent',
                      color: isActive || isHover ? 'var(--text-primary)' : 'var(--text-secondary)',
                      borderLeft: isActive ? '2px solid var(--accent)' : '2px solid transparent',
                    }}
                  >
                    <item.icon size={16} style={{ color: isActive ? 'var(--accent)' : 'var(--text-muted)' }} />
                    {item.name}
                  </div>
                )
              })}
            </div>
          ))}
        </div>
        <div className="flex-1">
          <span className="text-[16px] font-semibold block mb-[12px]" style={{ color: 'var(--text-primary)' }}>Navigation Rules</span>
          <div className="flex flex-col gap-[12px]">
            {navRules.map((rule) => (
              <div key={rule.title}>
                <span className="text-[13px] font-medium block" style={{ color: 'var(--text-primary)' }}>{rule.title}</span>
                <span className="text-[11px]" style={{ color: 'var(--text-secondary)' }}>{rule.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── 17. Universal Patterns ─── */
const universalPatterns = [
  { name: 'Dashboard', desc: 'KPI cards row + charts grid + recent activity feed', allowed: 'Widget arrangement, visible KPIs', forbidden: 'Custom card shapes, non-standard grid' },
  { name: 'Table + Filters', desc: 'Filter bar → sortable table → pagination. Columns resizable.', allowed: 'Column visibility, custom filters', forbidden: 'Inline row expansion, horizontal scroll tables' },
  { name: 'CRUD', desc: 'List view → detail panel (slide-over or page). Create/Edit via modal or dedicated page.', allowed: 'Field layout per entity', forbidden: 'Multi-step wizards (use form sections instead)' },
  { name: 'Form + Validation', desc: 'Vertical stack of labeled fields. Inline validation on blur. Submit button bottom-right.', allowed: 'Conditional fields, grouped sections', forbidden: 'Floating labels, side-by-side unrelated fields' },
  { name: 'Modal', desc: 'Centered overlay, max-width 480px. Title + body + action row. Close on Escape and backdrop click.', allowed: 'Confirmation variants, form modals', forbidden: 'Nested modals, fullscreen modals' },
  { name: 'Inline Editing', desc: 'Click cell → input appears in-place. Save on blur or Enter. Cancel on Escape.', allowed: 'Text, number, select, date inputs', forbidden: 'Rich text editors inline, multi-field inline forms' },
  { name: 'AI Interaction', desc: 'Chat panel or command palette. User prompt → streaming response. Action buttons below response.', allowed: 'Context-aware suggestions, action chips', forbidden: 'Custom AI avatars, animated typing indicators beyond skeleton' },
]

function UniversalPatternsSection() {
  return (
    <section>
      <SectionTitle id="patterns" title="Universal Patterns" />
      <div className="grid grid-cols-2 gap-[12px]">
        {universalPatterns.map((p) => (
          <div key={p.name} className="rounded-[6px] border p-[16px]" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border)' }}>
            <span className="text-[13px] font-semibold block mb-[4px]" style={{ color: 'var(--text-primary)' }}>{p.name}</span>
            <span className="text-[11px] block mb-[12px]" style={{ color: 'var(--text-secondary)' }}>{p.desc}</span>
            <div className="flex gap-[8px] flex-wrap">
              <span className="inline-block text-[11px] font-medium px-[8px] py-[2px] rounded-[2px]" style={{ backgroundColor: 'rgba(74,222,128,0.15)', color: 'var(--success)' }}>
                {p.allowed}
              </span>
              <span className="inline-block text-[11px] font-medium px-[8px] py-[2px] rounded-[2px]" style={{ backgroundColor: 'rgba(248,113,113,0.15)', color: 'var(--error)' }}>
                {p.forbidden}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ─── 18. State System ─── */
function StateSystemSection() {
  return (
    <section>
      <SectionTitle id="states" title="State System" />
      <div className="grid grid-cols-2 gap-[12px]">
        {/* Loading */}
        <div className="rounded-[6px] border p-[16px]" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border)' }}>
          <span className="text-[11px] font-medium uppercase block mb-[12px]" style={{ color: 'var(--text-muted)' }}>Loading</span>
          <div className="flex flex-col gap-[8px]">
            {[100, 75, 90].map((w, i) => (
              <div
                key={i}
                className="h-[12px] rounded-[4px]"
                style={{
                  width: `${w}%`,
                  background: 'linear-gradient(90deg, var(--border) 25%, var(--hover) 50%, var(--border) 75%)',
                  backgroundSize: '200% 100%',
                  animation: 'shimmer 1500ms infinite linear',
                }}
              />
            ))}
          </div>
        </div>

        {/* Empty */}
        <div className="rounded-[6px] border p-[16px] flex flex-col items-center justify-center text-center" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border)' }}>
          <span className="text-[11px] font-medium uppercase block mb-[12px] self-start" style={{ color: 'var(--text-muted)' }}>Empty</span>
          <Inbox size={32} style={{ color: 'var(--text-muted)' }} />
          <span className="text-[13px] font-medium mt-[8px]" style={{ color: 'var(--text-primary)' }}>No items yet</span>
          <span className="text-[11px] mt-[4px]" style={{ color: 'var(--text-secondary)' }}>Create your first item to get started.</span>
        </div>

        {/* Error */}
        <div className="rounded-[6px] border p-[16px]" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border)' }}>
          <span className="text-[11px] font-medium uppercase block mb-[12px]" style={{ color: 'var(--text-muted)' }}>Error</span>
          <div className="flex flex-col items-center text-center">
            <AlertCircle size={32} style={{ color: 'var(--error)' }} />
            <span className="text-[13px] font-medium mt-[8px]" style={{ color: 'var(--text-primary)' }}>Something went wrong</span>
            <span className="text-[11px] mt-[4px] mb-[12px]" style={{ color: 'var(--text-secondary)' }}>We couldn&apos;t load this data. Please try again.</span>
            <button
              className="text-[13px] font-medium px-[12px] py-[4px] rounded-[5px] cursor-pointer transition-colors duration-150 ease-in-out"
              style={{ color: 'var(--text-secondary)', backgroundColor: 'transparent' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--hover)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              Retry
            </button>
          </div>
        </div>

        {/* Success */}
        <div className="rounded-[6px] border p-[16px]" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border)' }}>
          <span className="text-[11px] font-medium uppercase block mb-[12px]" style={{ color: 'var(--text-muted)' }}>Success</span>
          <div className="flex flex-col items-center text-center">
            <CheckCircle size={32} style={{ color: 'var(--success)' }} />
            <span className="text-[13px] font-medium mt-[8px]" style={{ color: 'var(--text-primary)' }}>Changes saved</span>
            <button
              className="text-[13px] font-medium mt-[8px] cursor-pointer"
              style={{ color: 'var(--accent)', backgroundColor: 'transparent', border: 'none' }}
            >
              Undo
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── 19. Decision Rules ─── */
const decisionRules = [
  { scenario: 'Need visual depth?', answer: 'Use borders and background contrast, not shadows', keyword: 'borders' },
  { scenario: 'Choosing a color?', answer: 'Use a token — never hardcode hex values', keyword: 'token' },
  { scenario: 'Picking a font?', answer: 'Inter for everything. No exceptions unless approved.', keyword: 'Inter' },
  { scenario: 'Need an icon?', answer: 'Lucide React only — no other icon libraries', keyword: 'Lucide' },
  { scenario: 'Which theme first?', answer: 'Dark theme is the default. Build dark first.', keyword: 'Dark' },
  { scenario: 'What body font size?', answer: '13px is the base. Never below 11px except Tiny (8px).', keyword: '13px' },
  { scenario: 'How round are corners?', answer: 'Small radius — this is a dense professional tool, not a consumer app', keyword: 'Small' },
  { scenario: 'How fast are transitions?', answer: '150ms standard. Never above 300ms.', keyword: '150ms' },
  { scenario: 'Using status colors?', answer: 'Semantic only: green=good, red=bad, yellow=warning. Never decorative.', keyword: 'Semantic' },
  { scenario: 'Responsive support?', answer: 'Every feature must be functional at 375px width', keyword: 'Every' },
  { scenario: 'Color not in the spec?', answer: 'It does not exist in the product. Do not invent colors.', keyword: 'not exist' },
  { scenario: 'Adding a new component?', answer: 'Follow the governance process: RFC → review → prototype → approve → merge', keyword: 'governance' },
]

function DecisionRulesSection() {
  return (
    <section>
      <SectionTitle id="decision-rules" title="Decision Rules" />
      <div className="grid gap-[1px] rounded-[6px] border overflow-hidden" style={{ borderColor: 'var(--border)', gridTemplateColumns: '1fr 1.5fr' }}>
        <div className="px-[12px] py-[8px]" style={{ backgroundColor: 'var(--surface-raised)' }}>
          <span className="text-[11px] font-medium uppercase" style={{ color: 'var(--text-muted)' }}>Scenario</span>
        </div>
        <div className="px-[12px] py-[8px]" style={{ backgroundColor: 'var(--surface-raised)' }}>
          <span className="text-[11px] font-medium uppercase" style={{ color: 'var(--text-muted)' }}>Answer</span>
        </div>
        {decisionRules.map((rule) => (
          <>
            <div key={rule.scenario + '-s'} className="px-[12px] py-[8px] border-t" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--card-bg)' }}>
              <span className="text-[13px]" style={{ color: 'var(--text-secondary)' }}>{rule.scenario}</span>
            </div>
            <div key={rule.scenario + '-a'} className="px-[12px] py-[8px] border-t" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--card-bg)' }}>
              <span className="text-[13px] font-medium" style={{ color: 'var(--text-primary)' }}>
                {rule.answer.split(rule.keyword).map((part, i, arr) => (
                  <span key={i}>
                    {part}
                    {i < arr.length - 1 && <span style={{ color: 'var(--accent)' }}>{rule.keyword}</span>}
                  </span>
                ))}
              </span>
            </div>
          </>
        ))}
      </div>
    </section>
  )
}

/* ─── 20. Metrics System ─── */
const kpiCards = [
  { value: '$1.35M', label: 'REVENUE', trend: '+12.5%', up: true },
  { value: '4,200', label: 'NEW USERS', trend: '-16%', up: false },
  { value: '87%', label: 'RETENTION', trend: '+2.4%', up: true },
]

const metricHierarchy = [
  { num: '1', title: 'North Star Metric', desc: 'Single company-level KPI visible on every dashboard' },
  { num: '2', title: 'Module KPIs', desc: 'Per-product metrics (CRM pipeline, Mail delivery rate, etc.)' },
  { num: '3', title: 'Supporting Metrics', desc: 'Drill-down metrics that explain changes in KPIs' },
  { num: '4', title: 'Diagnostic Metrics', desc: 'Operational data for debugging — not shown by default' },
]

const statusSemantics = [
  { name: 'Success', meaning: 'On-track, complete, positive', color: 'var(--success)' },
  { name: 'Warning', meaning: 'At-risk, needs attention', color: 'var(--warning)' },
  { name: 'Error', meaning: 'Off-track, critical, overdue', color: 'var(--error)' },
  { name: 'Info', meaning: 'Informational, neutral active', color: 'var(--info)' },
]

function MetricsSystemSection() {
  return (
    <section>
      <SectionTitle id="metrics-system" title="Metrics System" />
      {/* KPI Cards */}
      <div className="grid grid-cols-3 gap-[12px] mb-[24px]">
        {kpiCards.map((kpi) => (
          <div key={kpi.label} className="rounded-[6px] border p-[16px]" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border)' }}>
            <span className="text-[24px] font-semibold block" style={{ color: 'var(--text-primary)' }}>{kpi.value}</span>
            <span className="text-[11px] font-medium uppercase block mt-[4px]" style={{ color: 'var(--text-secondary)' }}>{kpi.label}</span>
            <div className="flex items-center gap-[4px] mt-[8px]">
              {kpi.up
                ? <ArrowUpRight size={14} style={{ color: 'var(--success)' }} />
                : <ArrowDownRight size={14} style={{ color: 'var(--error)' }} />
              }
              <span className="text-[13px] font-medium" style={{ color: kpi.up ? 'var(--success)' : 'var(--error)' }}>{kpi.trend}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Metric Hierarchy */}
      <span className="text-[16px] font-semibold block mb-[12px]" style={{ color: 'var(--text-primary)' }}>Metric Hierarchy</span>
      <div className="flex flex-col gap-[8px] mb-[24px]">
        {metricHierarchy.map((m) => (
          <div key={m.num} className="flex items-start gap-[12px]">
            <span className="text-[13px] font-semibold w-[20px] shrink-0 text-center" style={{ color: 'var(--accent)' }}>{m.num}</span>
            <div>
              <span className="text-[13px] font-medium block" style={{ color: 'var(--text-primary)' }}>{m.title}</span>
              <span className="text-[11px]" style={{ color: 'var(--text-secondary)' }}>{m.desc}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Status Semantics */}
      <span className="text-[16px] font-semibold block mb-[12px]" style={{ color: 'var(--text-primary)' }}>Status Color Semantics</span>
      <div className="flex gap-[8px]">
        {statusSemantics.map((s) => (
          <div key={s.name} className="flex items-center gap-[8px] px-[12px] py-[6px] rounded-[9999px]" style={{ backgroundColor: `color-mix(in srgb, ${s.color} 15%, transparent)` }}>
            <div className="w-[8px] h-[8px] rounded-full" style={{ backgroundColor: s.color }} />
            <span className="text-[11px] font-medium" style={{ color: s.color }}>{s.name}</span>
            <span className="text-[11px]" style={{ color: 'var(--text-secondary)' }}>— {s.meaning}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ─── 21. Motion System ─── */
function MotionSystemSection() {
  const [fadeVisible, setFadeVisible] = useState(false)
  const [panelOpen, setPanelOpen] = useState(false)

  return (
    <section>
      <SectionTitle id="motion" title="Motion System" />
      <div className="grid grid-cols-2 gap-[12px]">
        {/* Color Transition */}
        <div className="rounded-[6px] border p-[16px]" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border)' }}>
          <span className="text-[11px] font-medium block mb-[8px]" style={{ color: 'var(--text-muted)' }}>Color Transition · 150ms ease</span>
          <div
            className="w-[80px] h-[80px] rounded-[6px] cursor-pointer"
            style={{ backgroundColor: 'var(--accent)', transition: 'background-color 150ms ease' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--accent-hover)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--accent)')}
          />
        </div>

        {/* Fade */}
        <div className="rounded-[6px] border p-[16px]" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border)' }}>
          <span className="text-[11px] font-medium block mb-[8px]" style={{ color: 'var(--text-muted)' }}>Fade · 150ms ease</span>
          <button
            className="h-[28px] px-[12px] text-[11px] font-medium rounded-[5px] border cursor-pointer mb-[8px] transition-colors duration-150 ease-in-out"
            style={{ backgroundColor: 'var(--surface-raised)', borderColor: 'var(--border)', color: 'var(--text-primary)' }}
            onClick={() => setFadeVisible(!fadeVisible)}
          >
            {fadeVisible ? 'Hide' : 'Show'} text
          </button>
          <p className="text-[13px]" style={{ color: 'var(--text-secondary)', transition: 'opacity 150ms ease', opacity: fadeVisible ? 1 : 0 }}>
            This text fades in and out with 150ms ease.
          </p>
        </div>

        {/* Slide Panel */}
        <div className="rounded-[6px] border p-[16px]" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border)' }}>
          <span className="text-[11px] font-medium block mb-[8px]" style={{ color: 'var(--text-muted)' }}>Slide Panel · 200ms ease-out</span>
          <button
            className="h-[28px] px-[12px] text-[11px] font-medium rounded-[5px] border cursor-pointer mb-[8px] transition-colors duration-150 ease-in-out"
            style={{ backgroundColor: 'var(--surface-raised)', borderColor: 'var(--border)', color: 'var(--text-primary)' }}
            onClick={() => setPanelOpen(!panelOpen)}
          >
            {panelOpen ? 'Close' : 'Open'} panel
          </button>
          <div className="relative h-[80px] overflow-hidden rounded-[4px] border" style={{ borderColor: 'var(--border)' }}>
            <div
              className="absolute top-0 right-0 h-full w-[200px] p-[12px] border-l"
              style={{
                backgroundColor: 'var(--surface-raised)',
                borderColor: 'var(--border)',
                transition: 'transform 200ms ease-out',
                transform: panelOpen ? 'translateX(0)' : 'translateX(100%)',
              }}
            >
              <span className="text-[11px]" style={{ color: 'var(--text-secondary)' }}>Slide-in panel content</span>
            </div>
          </div>
        </div>

        {/* Skeleton Shimmer */}
        <div className="rounded-[6px] border p-[16px]" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border)' }}>
          <span className="text-[11px] font-medium block mb-[8px]" style={{ color: 'var(--text-muted)' }}>Skeleton Shimmer · 1500ms loop</span>
          <div className="flex flex-col gap-[8px]">
            {[100, 60, 80].map((w, i) => (
              <div
                key={i}
                className="h-[12px] rounded-[4px]"
                style={{
                  width: `${w}%`,
                  background: 'linear-gradient(90deg, var(--border) 25%, var(--hover) 50%, var(--border) 75%)',
                  backgroundSize: '200% 100%',
                  animation: 'shimmer 1500ms infinite linear',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── 22. AI Generation Layer ─── */
const aiAllowed = [
  'Design tokens (CSS variables)',
  'Approved components (Button, Card, Input, Table, Badge, Modal)',
  'Lucide React icons only',
  'Inter font family',
  'Standard patterns (Dashboard, Table, CRUD, Form)',
]

const aiForbidden = [
  'Hardcoded hex color values',
  'Inline styles for colors (use tokens)',
  'New color tokens not in DESIGN.md',
  'Custom animations beyond spec',
  'Other icon libraries (FontAwesome, Heroicons, etc.)',
]

const pageScaffold = `// Page scaffolding template
export default function ModulePage() {
  return (
    <div className="p-[24px] max-w-[1200px]">
      {/* Page header */}
      <h1 className="text-[20px] font-semibold"
          style={{ color: 'var(--text-primary)' }}>
        Page Title
      </h1>

      {/* KPI row */}
      <div className="grid grid-cols-3 gap-[12px] mt-[24px]">
        <KpiCard />
      </div>

      {/* Main content */}
      <div className="mt-[24px] rounded-[6px] border"
           style={{ borderColor: 'var(--border)' }}>
        <DataTable />
      </div>
    </div>
  )
}`

function AIGenerationSection() {
  return (
    <section>
      <SectionTitle id="ai-layer" title="AI Generation Layer" />
      <div className="grid grid-cols-2 gap-[16px] mb-[24px]">
        <div className="rounded-[6px] border p-[16px]" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border)' }}>
          <span className="text-[13px] font-semibold block mb-[12px]" style={{ color: 'var(--success)' }}>Allowed</span>
          {aiAllowed.map((item) => (
            <div key={item} className="flex items-center gap-[8px] py-[4px]">
              <Check size={14} style={{ color: 'var(--success)' }} />
              <span className="text-[13px]" style={{ color: 'var(--text-secondary)' }}>{item}</span>
            </div>
          ))}
        </div>
        <div className="rounded-[6px] border p-[16px]" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border)' }}>
          <span className="text-[13px] font-semibold block mb-[12px]" style={{ color: 'var(--error)' }}>Forbidden</span>
          {aiForbidden.map((item) => (
            <div key={item} className="flex items-center gap-[8px] py-[4px]">
              <X size={14} style={{ color: 'var(--error)' }} />
              <span className="text-[13px]" style={{ color: 'var(--text-secondary)' }}>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Code Block */}
      <div className="rounded-[6px] border p-[16px] mb-[16px] overflow-x-auto" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border)' }}>
        <pre className="text-[12px] leading-[16px]" style={{ fontFamily: "'Roboto Mono', monospace", color: 'var(--text-secondary)' }}>
          {pageScaffold}
        </pre>
      </div>

      {/* AI Prompt Instruction */}
      <div className="rounded-[6px] p-[16px]" style={{ backgroundColor: 'rgba(92,132,254,0.1)', borderLeft: '3px solid var(--accent)' }}>
        <p className="text-[13px] italic" style={{ color: 'var(--text-secondary)' }}>
          &quot;When generating UI for Zentrix, always reference DESIGN.md as the single source of truth. Use only the defined tokens, components, and patterns. If a design decision is not covered in the spec, ask — do not invent.&quot;
        </p>
      </div>
    </section>
  )
}

/* ─── 23. Governance Model ─── */
const addingSteps = [
  'Submit RFC with component name, purpose, and API surface',
  'Design review with at least 2 team members',
  'Prototype in isolation (Storybook or standalone page)',
  'Approval from design system owner',
  'Merge to shared component library with documentation',
]

const minorChanges = [
  'New component added',
  'New token added',
  'Bug fix in existing component',
  'Documentation update',
]

const majorChanges = [
  'Token value changed',
  'Component API breaking change',
  'Component removed',
  'Pattern restructured',
]

const deprecationSteps = [
  { step: 'Announce', desc: 'Mark component as deprecated in code and docs' },
  { step: 'Migrate', desc: 'Provide migration guide and codemod if possible' },
  { step: 'Grace period', desc: '60-day grace period for all modules to migrate' },
  { step: 'Remove', desc: 'Delete deprecated code after grace period expires' },
]

function GovernanceSection() {
  return (
    <section>
      <SectionTitle id="governance" title="Governance Model" />
      <div className="grid grid-cols-3 gap-[16px]">
        {/* Adding Components */}
        <div className="rounded-[6px] border p-[16px]" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border)' }}>
          <span className="text-[13px] font-semibold block mb-[12px]" style={{ color: 'var(--text-primary)' }}>Adding Components</span>
          {addingSteps.map((step, i) => (
            <div key={i} className="flex items-start gap-[8px] py-[4px]">
              <span className="text-[13px] font-semibold w-[16px] shrink-0" style={{ color: 'var(--accent)' }}>{i + 1}</span>
              <span className="text-[13px]" style={{ color: 'var(--text-secondary)' }}>{step}</span>
            </div>
          ))}
        </div>

        {/* Versioning */}
        <div className="rounded-[6px] border p-[16px]" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border)' }}>
          <span className="text-[13px] font-semibold block mb-[12px]" style={{ color: 'var(--text-primary)' }}>Versioning (MAJOR.MINOR)</span>
          <span className="text-[11px] font-medium uppercase block mb-[8px]" style={{ color: 'var(--text-muted)' }}>Minor</span>
          {minorChanges.map((c) => (
            <div key={c} className="flex items-center gap-[8px] py-[2px]">
              <div className="w-[6px] h-[6px] rounded-full" style={{ backgroundColor: 'var(--success)' }} />
              <span className="text-[11px]" style={{ color: 'var(--text-secondary)' }}>{c}</span>
            </div>
          ))}
          <span className="text-[11px] font-medium uppercase block mt-[12px] mb-[8px]" style={{ color: 'var(--text-muted)' }}>Major</span>
          {majorChanges.map((c) => (
            <div key={c} className="flex items-center gap-[8px] py-[2px]">
              <div className="w-[6px] h-[6px] rounded-full" style={{ backgroundColor: 'var(--error)' }} />
              <span className="text-[11px]" style={{ color: 'var(--text-secondary)' }}>{c}</span>
            </div>
          ))}
        </div>

        {/* Deprecation */}
        <div className="rounded-[6px] border p-[16px]" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border)' }}>
          <span className="text-[13px] font-semibold block mb-[12px]" style={{ color: 'var(--text-primary)' }}>Deprecation Process</span>
          {deprecationSteps.map((d, i) => (
            <div key={i} className="flex items-start gap-[8px] py-[4px]">
              <span className="text-[13px] font-semibold w-[16px] shrink-0" style={{ color: 'var(--accent)' }}>{i + 1}</span>
              <div>
                <span className="text-[13px] font-medium block" style={{ color: 'var(--text-primary)' }}>
                  {d.step}
                  {d.step === 'Grace period' && (
                    <span className="ml-[8px] text-[11px] font-medium px-[8px] py-[2px] rounded-[2px]" style={{ backgroundColor: 'rgba(251,191,36,0.15)', color: 'var(--warning)' }}>
                      60 days
                    </span>
                  )}
                </span>
                <span className="text-[11px]" style={{ color: 'var(--text-secondary)' }}>{d.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── 24. Naming System ─── */
const namingCards = [
  {
    title: 'Modules',
    format: 'zentrix-{name}',
    examples: ['zentrix-crm', 'zentrix-mail', 'zentrix-insights', 'business-os'],
  },
  {
    title: 'Components',
    format: 'Prefix by scope',
    examples: ['Platform: Button, Card, Input, Table', 'Module: CrmPipelineCard, MailComposeModal', 'Experimental: X_DraftWidget (X_ prefix)'],
  },
  {
    title: 'Patterns',
    format: 'Noun phrase',
    examples: ['DashboardLayout', 'TableWithFilters', 'CrudDetailPanel', 'FormValidation'],
  },
  {
    title: 'CSS Variables & Tailwind',
    format: '--{category}-{name}',
    examples: ['--text-primary, --card-bg, --accent'],
    forbidden: ['bg-[#191a22]', 'text-[#e2e3e5]', 'border-[#25262b]'],
  },
]

function NamingSystemSection() {
  return (
    <section>
      <SectionTitle id="naming" title="Naming System" />
      <div className="grid grid-cols-2 gap-[12px]">
        {namingCards.map((card) => (
          <div key={card.title} className="rounded-[6px] border p-[16px]" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border)' }}>
            <span className="text-[13px] font-semibold block mb-[8px]" style={{ color: 'var(--text-primary)' }}>{card.title}</span>
            <span className="text-[11px] font-medium block mb-[8px] px-[8px] py-[2px] rounded-[2px] w-fit" style={{ backgroundColor: 'rgba(92,132,254,0.15)', color: 'var(--accent)' }}>
              {card.format}
            </span>
            {card.examples.map((ex) => (
              <div key={ex} className="flex items-center gap-[8px] py-[2px]">
                <Check size={12} style={{ color: 'var(--success)' }} />
                <span className="text-[11px]" style={{ color: 'var(--text-secondary)', fontFamily: "'Roboto Mono', monospace" }}>{ex}</span>
              </div>
            ))}
            {card.forbidden && (
              <>
                <span className="text-[11px] font-medium uppercase block mt-[12px] mb-[4px]" style={{ color: 'var(--text-muted)' }}>Forbidden</span>
                {card.forbidden.map((ex) => (
                  <div key={ex} className="flex items-center gap-[8px] py-[2px]">
                    <X size={12} style={{ color: 'var(--error)' }} />
                    <span className="text-[11px] line-through" style={{ color: 'var(--text-muted)', fontFamily: "'Roboto Mono', monospace" }}>{ex}</span>
                  </div>
                ))}
              </>
            )}
          </div>
        ))}
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
      <SystemArchitectureSection />
      <NavigationModelSection />
      <UniversalPatternsSection />
      <StateSystemSection />
      <DecisionRulesSection />
      <MetricsSystemSection />
      <MotionSystemSection />
      <AIGenerationSection />
      <GovernanceSection />
      <NamingSystemSection />
    </div>
  )
}
