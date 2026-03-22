# business-os Design System Audit

**Date:** 2026-03-21
**Branch:** `feature/linear-design-system`
**Spec:** Zentrix Design System v1.0 (DESIGN.md, March 20, 2026)
**Auditor:** Claude (automated scan)

---

## Summary

| Category | Critical | Warnings | Passed |
|----------|----------|----------|--------|
| Color Tokens | 28 | 12 | - |
| Typography | 8 | 7 | - |
| Spacing | 6 | 4 | - |
| Border Radius | 14 | 6 | - |
| Components | 0 | 1 | 4 |
| Icons | 0 | 12 | 1 |
| Shadows | 11 | 0 | - |

**Totals: 67 critical violations, 42 warnings, 5 passed**

---

## Critical Violations (must fix)

### 1. Color Tokens — Hardcoded Hex Values

- **File:** `src/components/AppLayoutEmergency.tsx` lines 29-64
  - Found: `borderBottom: '1px solid #e2e8f0'`, `backgroundColor: '#ffffff'`, `backgroundColor: '#fef2f2'`, `color: '#dc2626'`
  - Expected: CSS variable tokens (`var(--border)`, `var(--card-bg)`, `var(--error)`)

- **File:** `src/components/EmergencySidebar.tsx` lines 27-58
  - Found: `backgroundColor: '#ffffff'`, `color: '#1f2937'`, `color: '#6b7280'`, `color: '#4b5563'`
  - Expected: `var(--sidebar-bg)`, `var(--text-primary)`, `var(--text-secondary)`, `var(--text-muted)`

- **File:** `src/components/DebugSidebar.tsx` line 9
  - Found: `backgroundColor: '#f0f0f0'`
  - Expected: `var(--surface-raised)`

- **File:** `src/components/tasks/TasksPageRefactored.tsx` lines 35, 39
  - Found: `color: '#6B7280'`
  - Expected: `var(--text-secondary)` or `var(--text-muted)`

- **File:** `src/components/wiki/ProcessEditor.tsx` lines 454-456
  - Found: `background: #f2f2f2; color: #c7254e`, `border-left: 4px solid #bbb; color: #555`, `color: #2563eb`
  - Expected: Design system tokens for code blocks and blockquotes

- **File:** `src/components/dashboard2/ResizeHandle.tsx` line 71
  - Found: `#9CA3AF` in linear-gradient
  - Expected: `var(--text-muted)` or `var(--border)`

### 2. Color Tokens — Landing Pages (Systematic)

All landing components use a non-spec color palette (`#1C1C1E`, `#48484A`, `#3A3A3C`, `#636366`, `#8E8E93`). These colors do not exist in DESIGN.md.

- **File:** `src/components/landing/HeroSection.tsx` lines 16, 25, 47
  - Found: `text-[#1C1C1E]`, `text-[#48484A]`
  - Expected: `text-primary`, `text-secondary` tokens

- **File:** `src/components/landing/FinalCTA.tsx` lines 9, 14, 23
  - Found: `text-[#1C1C1E]`, `text-[#48484A]`, `text-[#636366]`
  - Expected: Semantic text tokens

- **File:** `src/components/landing/PricingPreview.tsx` lines 10-42
  - Found: 7+ instances of `text-[#1C1C1E]`, `text-[#48484A]`, `text-[#3A3A3C]`
  - Expected: Semantic text tokens

- **File:** `src/components/landing/TestimonialSection.tsx` lines 29-60
  - Found: 5+ instances of hardcoded hex text colors
  - Expected: Semantic text tokens

- **File:** `src/components/landing/LandingNav.tsx` line 18
  - Found: `text-[#48484A] hover:text-[#1C1C1E]`
  - Expected: `text-secondary hover:text-primary`

- **File:** `src/components/landing/WhatsAppFloat.tsx` line 33
  - Found: `bg-[#25D366]`
  - Expected: Brand color should be tokenized if needed

- **File:** `src/pages/AdLanding.tsx` — 25+ instances
  - Found: `text-[#1C1C1E]`, `text-[#48484A]`, `text-[#8E8E93]`, inline `color: '#1C1C1E'`
  - Expected: All should use design system tokens

### 3. Color Tokens — Raw Tailwind Color Classes

- **File:** `src/components/analytics/*.tsx` (12 chart files)
  - Found: `color: "#3B82F6"`, `"#10B981"`, `"#F97316"`, `"#F59E0B"`, `"#8B5CF6"`, `"#EF4444"`
  - Expected: Design system status/accent tokens. Charts should use `var(--accent)`, `var(--success)`, `var(--warning)`, `var(--error)`

- **File:** `src/components/dashboard/DashboardKPIs.tsx`
  - Found: `text-green-600`, `bg-green-100 dark:bg-green-900/20`
  - Expected: `text-[var(--success)]` or semantic status class

- **File:** `src/components/dashboard/MetricsOverview.tsx`
  - Found: `bg-green-500/10 text-green-700`, `bg-blue-500/10`, `bg-red-500/10`, `bg-gray-500/10`
  - Expected: Status token backgrounds (`var(--success)`, `var(--error)`, etc.)

- **File:** `src/components/dashboard/UserGoalsSection.tsx`
  - Found: `bg-green-500/10 text-green-600`, `bg-red-500/10 text-red-600`
  - Expected: Semantic status tokens

- **File:** `src/components/dashboard/UserMetricsTable.tsx`
  - Found: `text-green-600`, `text-red-600`
  - Expected: `var(--success)`, `var(--error)`

- **File:** `src/components/dashboard2/cards/GoalsCard.tsx`
  - Found: `text-green-600 bg-green-100`, `text-red-600 bg-red-100`, `bg-purple-100 text-purple-600`
  - Expected: Status tokens; purple is not in the spec at all

- **File:** `src/components/dashboard2/cards/MetricsCardResilient.tsx`
  - Found: `text-red-500`, `text-gray-600`, `text-green-600`, `text-gray-400`
  - Expected: `var(--error)`, `var(--text-secondary)`, `var(--success)`, `var(--text-muted)`

- **File:** `src/pages/Health.tsx`
  - Found: `text-green-600`, `text-blue-600`, `text-yellow-600`, `text-red-600`
  - Expected: Semantic status color tokens

- **File:** `src/pages/Home5.tsx` lines 31-320
  - Found: 10 instances of `bg-[#3b82f6]`, `hover:bg-[#2563eb]`, `text-[#3b82f6]`
  - Expected: `var(--accent)`, `var(--accent-hover)`

- **File:** `src/pages/Home4.tsx` line 44, `src/pages/Home6.tsx` line 39
  - Found: `bg-[#0a0b0f]`
  - Expected: `var(--page-bg)` (#090909)

### 4. Color Tokens — CSS Files

- **File:** `src/index.css` lines 466, 479
  - Found: Hardcoded `#1C1C1E` for landing page styles
  - Expected: CSS variable references

### 5. Typography — Non-Standard Font Sizes

- **File:** `src/components/tasks/mobile/MobileTasksHeader.tsx` line 27
  - Found: `text-[22px]`
  - Expected: 20px (H1) or 24px (Display)

- **File:** `src/pages/CompanyMobile.tsx` line 297
  - Found: `text-[9px]`
  - Expected: 8px (Tiny) or 11px (Small)

- **File:** `src/pages/prototypes/CompDashboard.tsx` lines 38, 41, 100
  - Found: `text-[30px]`, `text-[14px]`, `text-[36px]`
  - Expected: Sizes from type scale only (8, 11, 12, 13, 16, 20, 24px)

- **File:** `src/pages/prototypes/DashboardV10Executive.tsx` lines 157, 178, 204
  - Found: `text-[32px]`, `text-[15px]`, `text-[18px]`
  - Expected: Type scale sizes only

- **File:** `src/pages/prototypes/DashboardV4Magazine.tsx` lines 116, 126, 127
  - Found: `text-[36px]`, `text-[56px]`, `text-[18px]`
  - Expected: Maximum is Display 24px

- **File:** `src/pages/prototypes/DashboardV5Compact.tsx` line 120, `DashboardV7Split.tsx` line 134
  - Found: `text-[9px]`
  - Expected: 8px (Tiny) or 11px (Small)

- **File:** `src/pages/prototypes/LinearGoals.tsx` lines 118, 156
  - Found: `text-[9px]`, `text-[14px]`
  - Expected: Type scale sizes only

- **File:** `src/pages/prototypes/DashboardV8Metrics.tsx` lines 162, 206
  - Found: `text-[14px]`, `text-[18px]`
  - Expected: 13px (Body) or 16px (H2) / 20px (H1)

### 6. Typography — Invalid Font Weights

- **File:** `src/components/invitation/CompanyAccessSetup.tsx` lines 199, 227
  - Found: `font-black` (weight 900)
  - Expected: Max weight is 600 (semibold)

- **File:** `src/components/invitation/InvitationVerificationScreen.tsx` line 26
  - Found: `font-black` (weight 900)
  - Expected: `font-semibold` (600)

- **File:** `src/components/invitation/PasswordSetupForm.tsx` line 155
  - Found: `font-black` (weight 900)
  - Expected: `font-semibold` (600)

- **File:** `src/components/invitation/StreamlinedPasswordSetupForm.tsx` line 187
  - Found: `font-black` (weight 900)
  - Expected: `font-semibold` (600)

- **File:** `src/components/meeting/SectionTimer.tsx` lines 85, 91, 107
  - Found: `font-black` (weight 900)
  - Expected: `font-semibold` (600)

- **File:** `src/components/meeting/TeamGoalReviewSection.tsx` line 38
  - Found: `font-black` (weight 900)
  - Expected: `font-semibold` (600)

- **File:** `src/components/ui/PremiumLoadingScreen.tsx` lines 69, 74
  - Found: `font-light` (weight 300)
  - Expected: `font-normal` (400) minimum

- **File:** `src/pages/ForgotPassword.tsx` line 115
  - Found: `font-black` (weight 900)
  - Expected: `font-semibold` (600)

### 7. Typography — Non-Zero Letter Spacing

- **File:** `src/index.css` lines 33, 183, 192
  - Found: `tracking-wider`, `tracking-wide`
  - Expected: Letter spacing `0` for all sizes

- **File:** `src/index.css` lines 982, 989
  - Found: `letter-spacing: -0.04em`, `letter-spacing: -0.02em`
  - Expected: Letter spacing `0`

### 8. Border Radius — Non-Spec Values

- **File:** `src/pages/prototypes/CompDashboard.tsx` lines 48, 71, 94, 111, 133, 178
  - Found: `rounded-[12px]` (6 instances)
  - Expected: Max `radius-xl` is 8px (or 9999px for full)

- **File:** `src/pages/prototypes/CompGoals.tsx` lines 44, 168, 209, 240
  - Found: `rounded-[12px]` (4 instances)
  - Expected: 8px max

- **File:** `src/pages/prototypes/CompTasks.tsx` lines 53, 95
  - Found: `rounded-[12px]`
  - Expected: 8px max

- **File:** `src/pages/prototypes/CompMetrics.tsx` lines 107, 128
  - Found: `rounded-[12px]`
  - Expected: 8px max

- **File:** Multiple files across `src/components/` and `src/pages/`
  - Found: `rounded-xl` (12px) — 40+ occurrences, `rounded-2xl` (16px) — 40+ occurrences, `rounded-3xl` (24px) — 10+ occurrences
  - Expected: Only 2px, 4px, 5px, 6px, 8px, or 9999px

- **File:** `src/pages/prototypes/DashboardV10Executive.tsx` lines 163, 185, 233
  - Found: `rounded-[1px]`, `rounded-[3px]`
  - Expected: Nearest tokens: 2px or 4px

### 9. Spacing — Non-Token Values

- **File:** `src/pages/Index.tsx` line 720
  - Found: `p-16` (64px)
  - Expected: Max `space-3xl` is 32px

- **File:** `src/pages/Home5.tsx` lines 41, 85, 113, 141
  - Found: `gap-16` (64px) — 4 instances
  - Expected: Max 32px gap

- **File:** `src/pages/Index.tsx` lines 203, 654, 687
  - Found: `gap-16` (64px)
  - Expected: Max 32px gap

- **File:** `src/pages/Landing3.tsx` lines 177, 205
  - Found: `gap-16` (64px)
  - Expected: Max 32px gap

- **File:** `src/components/AnimatedSidebarDemo.tsx` line 200
  - Found: `gap-10` (40px)
  - Expected: Max 32px gap

- **File:** `src/components/landing/PricingPreview.tsx` line 17, `src/pages/Landing2.tsx` line 216
  - Found: `p-10` (40px)
  - Expected: Max 32px padding

### 10. Shadows — Unapproved Tailwind Defaults

- **File:** `src/components/ui/chart.tsx` line 180
  - Found: `shadow-2xl`
  - Expected: `0 4px 12px rgba(0,0,0,0.15)` (medium) or `none`

- **File:** `src/components/ui/thumb-button.tsx` lines 65, 68
  - Found: `shadow-2xl` (2 instances)
  - Expected: Approved shadow only

- **File:** `src/components/ui/pull-to-refresh-indicator.tsx` line 28
  - Found: `shadow-lg`
  - Expected: Approved shadow only

- **File:** `src/components/ui/offline-banner.tsx` lines 22, 72
  - Found: `shadow-lg` (2 instances)
  - Expected: Approved shadow only

- **File:** `src/components/ui/dialog.tsx` line 41
  - Found: `shadow-sm`
  - Expected: `0 1px 2px rgba(0,0,0,0.1)` (subtle) or `none`

- **File:** `src/components/ui/instant-list-item.tsx` lines 67-78
  - Found: `hover:shadow-md`, `shadow-md`, `shadow-sm`
  - Expected: Approved shadow values only

- **File:** `src/components/ui/menubar.tsx` line 75
  - Found: `shadow-md`
  - Expected: Approved shadow only

- **File:** `src/components/ui/context-menu.tsx` lines 47, 63
  - Found: `shadow-sm` (2 instances)
  - Expected: Approved shadow only

- **File:** `src/components/ui/sonner.tsx` lines 42, 43
  - Found: `shadow-md`, `shadow-sm`
  - Expected: Approved shadow only

---

## Warnings (should fix)

### 1. Color Tokens — Raw Tailwind in Secondary Pages

- **File:** `src/pages/GoalsMobile.tsx`
  - Found: `text-blue-700 dark:text-blue-400`, `bg-blue-100 dark:bg-blue-900/40`, `text-green-700 dark:text-green-400`
  - Expected: Semantic status tokens

- **File:** `src/pages/ForgotPassword.tsx`
  - Found: `bg-green-100`, `text-green-600`, `bg-blue-50`, `text-blue-700`
  - Expected: Status tokens

- **File:** `src/pages/Testing.tsx`
  - Found: `text-green-600`, `text-red-600`, `text-yellow-600`, `text-gray-400`, `text-blue-600`
  - Expected: Status/semantic tokens

- **File:** `src/components/ProcessCategoryCard.tsx`
  - Found: `text-green-600`, `text-yellow-600`, `text-red-600`
  - Expected: `var(--success)`, `var(--warning)`, `var(--error)`

- **File:** `src/pages/SimpleRLS.tsx`, `src/pages/EnhancedRLSManagement.tsx`
  - Found: Extensive raw Tailwind colors (`bg-gray-50`, `text-gray-900`, `text-blue-600`, `bg-green-100`, etc.)
  - Expected: Design system tokens (admin pages, lower priority)

### 2. Typography — Tailwind Default Size Classes

- **File:** Various components
  - Found: `text-xs` (12px), `text-sm` (14px), `text-base` (16px), `text-lg` (18px), `text-xl` (20px), `text-2xl` (24px)
  - Expected: Explicit pixel values from type scale (`text-[13px]`, `text-[11px]`, etc.)
  - Note: `text-xs` (12px) maps to Mono, `text-base` (16px) maps to H2, `text-xl` (20px) maps to H1, `text-2xl` (24px) maps to Display — these are coincidentally correct but should use explicit values for clarity

### 3. Spacing — Positional Properties

- **File:** `src/components/tasks/TaskSortFilterControls.tsx` line 50, `src/components/kanban/KanbanSortControls.tsx` line 50
  - Found: `top-10` (40px)
  - Expected: Position values should align to spacing tokens where possible

- **File:** `src/components/onboarding/AnimatedOnboardingCard.tsx` line 296
  - Found: `top-16` (64px)
  - Expected: Spacing token alignment

- **File:** `src/components/shared/SharedGoalsView.tsx` line 133, `src/pages/Issues.tsx` line 119
  - Found: `top-14` (56px)
  - Expected: Spacing token alignment

### 4. Icons — Oversized Icons (Contextual)

- **File:** `src/components/mobile/MobileIssuesContent.tsx`, `src/components/mobile/MobileGoalsContent.tsx`
  - Found: Icons at `h-5 w-5` (20px)
  - Expected: Default 16px; 20px may be acceptable for mobile touch targets

- **File:** `src/components/AnimatedSidebarDemo.tsx` line 200+
  - Found: 13+ icons at `h-5 w-5` (20px)
  - Expected: Sidebar icons should be 16px per spec

- **File:** `src/components/dashboard/CompanyGoalsSection.tsx`, `src/components/people/analyzer/AnalyzerEmptyState.tsx`
  - Found: Icons at `h-8 w-8` (32px) and `h-12 w-12` (48px)
  - Expected: 16px default; large decorative icons are acceptable in empty states but should be documented

### 5. Border Radius — Widespread `rounded-xl` Usage

- **Files:** 40+ component files use `rounded-xl` (12px)
  - Expected: Nearest spec token is `radius-xl` = 8px
  - Note: This is a systemic issue, likely inherited from shadcn defaults

### 6. Shadow — Badge Interactive State

- **File:** `src/components/ui/badge.tsx` line 64
  - Found: `hover:shadow-sm` on interactive badges
  - Expected: Flat design; use border/background contrast instead

---

## Passed

| Category | Status | Notes |
|----------|--------|-------|
| **Button component** | COMPLIANT | `button.tsx`: correct radius (5px), sizes (28/32/40px), font sizes (11/13px), padding |
| **Input component** | COMPLIANT | `input.tsx`: correct height (32px), radius (5px), padding (8px 12px), font (13px) |
| **Card component** | COMPLIANT | `card.tsx`: correct radius (6px), padding (16px), no shadow |
| **Badge component** | COMPLIANT | `badge.tsx`: correct font (11px w500), padding (2px 8px) — minor shadow warning only |
| **Icon library** | COMPLIANT | Only `lucide-react` is used; no unauthorized icon libraries detected |

---

## Recommendations

### Priority 1 — Systematic Token Adoption
1. **Create a CSS variables file** mapping all DESIGN.md tokens to CSS custom properties (if not already done in `linearTheme.css`)
2. **Extend Tailwind config** per Section 11 of DESIGN.md so that classes like `text-primary`, `bg-surface-card`, `border-default` resolve to CSS variables
3. **Search-and-replace** raw Tailwind color classes (`text-green-600` → `text-status-success`, etc.)

### Priority 2 — Landing Pages
4. Replace the entire `#1C1C1E` / `#48484A` / `#636366` palette in landing components with DESIGN.md light theme tokens

### Priority 3 — Prototype Cleanup
5. Bring prototype pages (`src/pages/prototypes/`) into compliance or mark them as non-production with a lint ignore

### Priority 4 — Shadow & Radius Defaults
6. Override shadcn default shadow utilities to match the 3 approved levels
7. Replace all `rounded-xl`, `rounded-2xl`, `rounded-3xl` with spec-compliant values (max 8px or 9999px)

---

*Generated: 2026-03-21 | Spec version: Zentrix Design System v1.0*
