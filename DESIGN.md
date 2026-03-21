# Zentrix Design System — The Bible
**Version:** 1.0
**Date:** March 20, 2026
**Source:** Linear Design System (Figma Community) + Zentrix OS codebase
**Applies to:** All Zentrix ecosystem products (business-os, zentrix-insights, zentrixcrm, zentrixmail, dietforge, wisevasdashboard)

> Every UI decision in the Zentrix ecosystem starts here. When in doubt — check this file first.

---

## Table of Contents
1. [Color Palette](#1-color-palette)
2. [Typography](#2-typography)
3. [Spacing & Layout](#3-spacing--layout)
4. [Border Radius](#4-border-radius)
5. [Shadows & Elevation](#5-shadows--elevation)
6. [Component Specifications](#6-component-specifications)
7. [Icons](#7-icons)
8. [Animations & Transitions](#8-animations--transitions)
9. [Responsive Breakpoints](#9-responsive-breakpoints)
10. [Sidebar Structure](#10-sidebar-structure)
11. [Tailwind Token Mapping](#11-tailwind-token-mapping)
12. [File Structure](#12-file-structure)
13. [Decision Rules](#13-decision-rules)

---

## 1. Color Palette

### Dark Theme (Default)

| Token | Hex | Usage |
|---|---|---|
| `page-bg` | `#090909` | Main page background |
| `sidebar-bg` | `#0f1011` | Sidebar background |
| `card-bg` | `#191a22` | Cards, panels, modals |
| `surface-raised` | `#1b1c23` | Raised surfaces, dropdowns |
| `surface-overlay` | `#1d1f24` | Overlays, popovers |
| `active` | `#121314` | Active/selected items |
| `hover` | `#151619` | Hover state |
| `hover-medium` | `#1a1c1f` | Medium hover (cards) |
| `border` | `#25262b` | Borders, separators, dividers |
| `border-subtle` | `#1e1f23` | Subtle borders |
| `text-primary` | `#e2e3e5` | Primary text, headings |
| `text-secondary` | `#96979a` | Secondary text, descriptions |
| `text-muted` | `#5e5e5f` | Muted text, placeholders |
| `text-disabled` | `#404040` | Disabled text |
| `accent` | `#5c84fe` | Primary accent (links, active nav, primary buttons) |
| `accent-hover` | `#4a72ec` | Accent hover state |
| `accent-muted` | `#5e69d1` | Secondary accent |

### Light Theme

| Token | Hex | Usage |
|---|---|---|
| `page-bg` | `#fbfbfb` | Main page background |
| `sidebar-bg` | `#f3f3f3` | Sidebar background |
| `card-bg` | `#ffffff` | Cards, panels, modals |
| `surface-raised` | `#f8f8f8` | Raised surfaces |
| `active` | `#e8e8ea` | Active/selected items |
| `hover` | `#ececec` | Hover state |
| `border` | `#e0e0e2` | Borders, separators |
| `border-subtle` | `#ebebeb` | Subtle borders |
| `text-primary` | `#2d2d2e` | Primary text |
| `text-secondary` | `#5e5e5f` | Secondary text |
| `text-muted` | `#959699` | Muted text, placeholders |
| `accent` | `#5e6ad2` | Primary accent |
| `accent-hover` | `#4e5abc` | Accent hover state |

### Status Colors (Both Themes)

| Status | Dark Hex | Light Hex | Usage |
|---|---|---|---|
| `success` | `#4ade80` | `#16a34a` | On-track, complete, positive |
| `warning` | `#fbbf24` | `#d97706` | At-risk, needs attention |
| `error` | `#f87171` | `#dc2626` | Off-track, critical, overdue |
| `info` | `#5c84fe` | `#5c84fe` | Informational, neutral active |

---

## 2. Typography

**Font Family:** Inter (all weights)
**Monospace:** Roboto Mono

| Style | Size | Weight | Line Height | Usage |
|---|---|---|---|---|
| Display | 24px | 600 | 32px | Page titles |
| Heading 1 | 20px | 600 | 28px | Section headers |
| Heading 2 | 16px | 600 | 24px | Card titles, subsections |
| Body | 13px | 400 | 20px | Default body text |
| Body Medium | 13px | 500 | 20px | Nav items, labels, emphasis |
| Small | 11px | 400 | 16px | Secondary text, descriptions |
| Small Medium | 11px | 500 | 16px | Table headers, badges |
| Tiny | 8px | 400 | 12px | Timestamps, micro labels |
| Mono | 12px | 400 | 16px | Code, metric values |

**Letter spacing:** `0` (default) for all sizes.

---

## 3. Spacing & Layout

### Spacing Tokens

| Token | Value | Usage |
|---|---|---|
| `space-xs` | 4px | Tight padding (badges, inline elements) |
| `space-sm` | 8px | Small gaps, icon spacing |
| `space-md` | 12px | Default padding, list gaps |
| `space-lg` | 16px | Section padding, card padding |
| `space-xl` | 20px | Large padding (buttons, major sections) |
| `space-2xl` | 24px | Page-level padding |
| `space-3xl` | 32px | Major section gaps |

### Layout Dimensions

| Element | Value |
|---|---|
| Sidebar width | 240px (collapsed: 48px) |
| Top bar height | 48px |
| Max content width | 1200px |
| Page horizontal padding | 24px |
| Card internal padding | 16px |

---

## 4. Border Radius

| Token | Value | Usage |
|---|---|---|
| `radius-sm` | 2px | Pills, tiny badges |
| `radius-default` | 4px | Interactive elements (inputs, list items, dropdowns) |
| `radius-md` | 5px | Buttons, search bar |
| `radius-lg` | 6px | Cards, modals, panels |
| `radius-xl` | 8px | Large containers |
| `radius-full` | 9999px | Avatars, circular badges |

---

## 5. Shadows & Elevation

| Level | Value | Usage |
|---|---|---|
| None | `none` | Default (predominantly flat) |
| Subtle | `0 1px 2px rgba(0,0,0,0.1)` | Dropdowns, popovers |
| Medium | `0 4px 12px rgba(0,0,0,0.15)` | Modals, command palette |
| Focus ring | `0 0 0 2px #5c84fe40` | Focus state on interactive elements |

> **Linear aesthetic:** Predominantly flat — minimal shadows, relying on borders and background contrast for depth.

---

## 6. Component Specifications

### Buttons

#### Variants

| Variant | Background | Text | Border | Radius | Padding |
|---|---|---|---|---|---|
| Primary | `#090909` | `#ffffff` | none | 5px | 8px 20px |
| Secondary | transparent | `#e2e3e5` | `#25262b` | 5px | 8px 20px |
| Ghost | transparent | `#96979a` | none | 5px | 8px 12px |
| Accent | `#5c84fe` | `#ffffff` | none | 5px | 8px 20px |
| Destructive | `#dc2626` | `#ffffff` | none | 5px | 8px 20px |

#### States

| State | Behavior |
|---|---|
| Hover | Lighten bg by 8% |
| Active | Darken bg by 4% |
| Disabled | 40% opacity |
| Focus | 2px accent ring |

#### Sizes

| Size | Height | Font | Padding |
|---|---|---|---|
| Small | 28px | 11px w500 | 4px 12px |
| Medium | 32px | 13px w500 | 6px 16px |
| Large | 40px | 13px w500 | 8px 20px |

---

### Inputs & Search

| Property | Dark | Light |
|---|---|---|
| Background | `#121314` | `#f3f3f3` |
| Border | `#25262b` | `#e0e0e2` |
| Border (focus) | `#5c84fe` | `#5c84fe` |
| Text | text-primary | text-primary |
| Placeholder | text-muted | text-muted |
| Height | 32px | 32px |
| Radius | 5px | 5px |
| Padding | 8px 12px | 8px 12px |
| Font | 13px w400 | 13px w400 |

---

### Sidebar Navigation

| State | Background | Text | Icon |
|---|---|---|---|
| Default | transparent | `#96979a` | `#5e5e5f` |
| Hover | `#151619` | `#e2e3e5` | `#96979a` |
| Active | `#121314` | `#e2e3e5` | `#5c84fe` |

- Item height: 32px
- Padding: 8px 12px
- Icon: 16px
- Gap: 8px
- Section label: 11px w500 uppercase, text-muted

---

### Cards

| Property | Value |
|---|---|
| Background | `card-bg` token |
| Border | `border` token |
| Radius | 6px |
| Padding | 16px |
| Header font | 13px w500 |
| Hover (clickable) | `hover` token background |

---

### Table (Metrics Spreadsheet)

| Property | Dark | Light |
|---|---|---|
| Header bg | `#0f1011` | `#f3f3f3` |
| Header text | 11px w500, text-secondary | 11px w500, text-secondary |
| Row bg | transparent | transparent |
| Row hover | `hover` token | `hover` token |
| Row border | `border` token (bottom) | `border` token (bottom) |
| Cell text | 13px w400, text-primary | 13px w400, text-primary |
| Cell padding | 8px 12px | 8px 12px |
| Active cell border | accent | accent |
| On-track value | `#4ade80` | `#4ade80` |
| Off-track value | `#f87171` | `#f87171` |

---

### Badges / Status Pills

| Status | Background | Text |
|---|---|---|
| On Track | `#16a34a20` | `#4ade80` |
| Off Track | `#dc262620` | `#f87171` |
| Complete | `#5c84fe20` | `#5c84fe` |
| Canceled | `#40404020` | `#96979a` |

- Radius: 2px (rectangular) or 9999px (pill)
- Padding: 2px 8px
- Font: 11px w500

---

### Avatars

| Size | Dimensions | Font | Notes |
|---|---|---|---|
| Small | 24px | 10px w500 | Circle (9999px radius) |
| Medium | 32px | 12px w500 | Accent bg at 20% opacity |
| Large | 40px | 14px w500 | Accent text color |

---

## 7. Icons

**Library:** Lucide React
**Default size:** 16px
**Color:** Matches text color for context

| Context | Icon | Size |
|---|---|---|
| Dashboard | `LayoutDashboard` | 16px |
| Metrics | `BarChart3` | 16px |
| Tasks | `CheckSquare` | 16px |
| Goals | `Target` | 16px |
| Issues | `AlertCircle` | 16px |
| Meetings | `Video` | 16px |
| People | `Users` | 16px |
| Org Chart | `Network` | 16px |
| Org Health | `Heart` | 16px |
| Strategy | `Compass` | 16px |
| Zentrix AI | `Sparkles` | 16px |
| Academy | `GraduationCap` | 16px |
| Search | `Search` | 16px |
| Theme toggle | `Sun` / `Moon` | 16px |
| Chevron | `ChevronDown` | 14px |
| Check | `Check` | 14px |

---

## 8. Animations & Transitions

| Property | Duration | Easing | Usage |
|---|---|---|---|
| Color transitions | 150ms | ease | Hover, focus, active states |
| Background | 150ms | ease | Sidebar nav, buttons |
| Transform | 200ms | ease-out | Dropdowns, modals |
| Opacity | 150ms | ease | Fade in/out |
| Theme switch | 200ms | ease | Light/dark toggle |

> Subtle, fast transitions. Nothing bouncy. Everything feels instant but smooth.

---

## 9. Responsive Breakpoints

| Breakpoint | Width | Behavior |
|---|---|---|
| Mobile | < 640px | Sidebar hidden, hamburger menu, single column |
| Tablet | 640–1024px | Sidebar collapsed (icons only), 2-column grid |
| Desktop | 1024–1440px | Full sidebar, 3-column grid |
| Wide | > 1440px | Max-width container, centered |

---

## 10. Sidebar Structure

### Navigation Groups

- **Group 1:** Dashboard, Metrics, Tasks, Goals
- **Group 2:** Issues, Meetings
- **Group 3:** People, Org Chart, Org Health
- **Group 4:** Strategy, Zentrix AI, Academy

### Active State

| Property | Value |
|---|---|
| Left border | 2px `#5c84fe` accent bar |
| Background | `active` token (`#121314`) |
| Text color | text-primary |
| Icon color | accent (`#5c84fe`) |

Groups separated by subtle dividers. Collapse button at bottom.

---

## 11. Tailwind Token Mapping

Extend `tailwind.config.ts` with CSS variable references:

```ts
// tailwind.config.ts
theme: {
  extend: {
    colors: {
      surface: {
        page: 'var(--page-bg)',
        sidebar: 'var(--sidebar-bg)',
        card: 'var(--card-bg)',
        raised: 'var(--surface-raised)',
      },
      state: {
        active: 'var(--active)',
        hover: 'var(--hover)',
      },
      border: {
        DEFAULT: 'var(--border)',
        subtle: 'var(--border-subtle)',
      },
      text: {
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        muted: 'var(--text-muted)',
      },
      accent: {
        DEFAULT: 'var(--accent)',
        hover: 'var(--accent-hover)',
        muted: 'var(--accent-muted)',
      },
      status: {
        success: 'var(--success)',
        warning: 'var(--warning)',
        error: 'var(--error)',
      },
    },
  },
}
```

---

## 12. File Structure

```
src/
  styles/
    linearTokens.ts       # Token definitions (colors, spacing, radii)
    linearTheme.css       # CSS variables for light/dark
    index.css             # Updated with Linear vars
  components/
    ui/                   # shadcn components (restyled): button, card, input, badge, table
    layout/
      LinearSidebar.tsx   # Production sidebar
      LinearTopBar.tsx    # Production top bar
      ThemeProvider.tsx   # Light/dark theme context
    shared/
      StatusBadge.tsx     # Reusable status pill
      MetricCell.tsx      # Editable metric cell
      ProgressBar.tsx     # Linear-style progress
  tailwind.config.ts      # Extended with Linear tokens
```

---

## 13. Decision Rules

> When in doubt, use these rules before making any design decision.

- **Flat first.** Use borders and background contrast before reaching for shadows.
- **Use tokens, never raw hex.** Always reference a token (e.g. `var(--accent)`) — never hardcode a color.
- **Inter for everything.** No other font unless explicitly approved.
- **Lucide only.** Do not introduce other icon libraries.
- **Dark theme is the default.** Light theme is a supported variant — always build dark first.
- **13px is the base body size.** Don't go smaller than 11px except for `Tiny` timestamps.
- **Radius is small.** This is a dense, professional tool — not a consumer app. Keep corners tight.
- **Transitions are fast.** 150ms is standard. Never go above 300ms.
- **Status colors are semantic.** Green = good. Red = bad. Yellow = warning. Don't repurpose them.
- **Mobile is real.** Every feature must be functional at 375px width.
- **No external color decisions.** If a color isn't in this file, it doesn't exist in the product.

---

*Last updated: March 20, 2026 — Zentrix Design Team*
