# zentrixmail Design System Audit

**Date:** 2026-03-21
**Spec Version:** Zentrix Design System v1.0 (DESIGN.md, March 20, 2026)
**Auditor:** Automated (Claude)
**Scope:** `/home/ubuntu/zentrixmail/src/` — 165 TSX files, 2 CSS files

---

## Summary

**87 critical violations, 119 warnings, 2 passed**

| Category | Critical | Warning | Passed |
|----------|----------|---------|--------|
| Color Tokens | 48 | 282 | — |
| Typography | 22 | 137 | — |
| Spacing | 4 | 42 | — |
| Border Radius | 3 | 58 | — |
| Shadows | 6 | 48 | — |
| Components | 4 | 0 | — |
| Icons | — | — | Passed |
| Animations | — | — | Passed |

---

## Critical Violations

### Color Tokens — Hardcoded Hex Values (Use tokens, never raw hex)

- **File:** `src/hooks/useCRM.ts` line 39–43 — Found: `'#6b7280'`, `'#3b82f6'`, `'#f59e0b'`, `'#8b5cf6'`, `'#22c55e'` — Expected: CSS variable tokens (`var(--text-muted)`, `var(--accent)`, `var(--warning)`, `var(--success)`)
- **File:** `src/components/email/PrintExportEmail.tsx` lines 43–78 — Found: `#1a1a1a`, `#e5e5e5`, `#666`, `#333`, `#999` — Expected: `var(--text-primary)`, `var(--border)`, `var(--text-secondary)`, `var(--text-muted)`
- **File:** `src/lib/accessibilityHelpers.ts` lines 199–200 — Found: `#000`, `#fff` — Expected: `var(--page-bg)`, `var(--text-primary)`
- **File:** `src/components/crm/CRMPipelinePanel.tsx` lines 45–48 — Found: 18 hardcoded hex colors (`'#6b7280'`, `'#ef4444'`, `'#f97316'`, `'#f59e0b'`, `'#eab308'`, `'#84cc16'`, `'#22c55e'`, `'#10b981'`, `'#14b8a6'`, `'#06b6d4'`, `'#0ea5e9'`, `'#3b82f6'`, `'#6366f1'`, `'#8b5cf6'`, `'#a855f7'`, `'#d946ef'`, `'#ec4899'`, `'#f43f5e'`) — Expected: Design system tokens
- **File:** `src/lib/colorTheme.ts` lines 212–265 — Found: `'#0a0a0a'`, `'#1a1a1a'`, `'#ffffff'`, `'#a0a0a0'`, `'#333333'`, `'#ef4444'`, `'#f59e0b'`, `'#10b981'`, `'#3b82f6'` — Expected: CSS variable token references
- **File:** `src/components/settings/MultiAccountSettings.tsx` line 155 — Found: `'#3b82f6'` — Expected: `var(--accent)`
- **File:** `src/lib/imageOptimization.ts` line 271 — Found: `'#f0f0f0'` — Expected: surface token
- **File:** `src/lib/logger.ts` lines 164–170 — Found: `#888`, `#0080ff`, `#ff8800`, `#ff0000` — Expected: token references
- **File:** `src/App.css` lines 15–41 — Found: `#646cffaa`, `#61dafbaa`, `#888` — Expected: CSS variable tokens

### Typography — Wrong Font Family (Must be Inter / Roboto Mono)

- **File:** `src/index.css` line 183 — Found: `font-family: 'Geist', 'Inter Variable', 'Inter', system-ui...` — Expected: `'Inter', sans-serif`
- **File:** `src/index.css` lines 272, 349, 402 — Found: `font-family: 'Geist Mono', 'SF Mono', 'Fira Code', monospace` — Expected: `'Roboto Mono', monospace`
- **File:** `src/components/email/PrintExportEmail.tsx` line 39 — Found: `font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif` — Expected: `'Inter', sans-serif`
- **File:** `src/components/SafeAreaDebug.tsx` line 101 — Found: `fontFamily: 'monospace'` — Expected: `'Roboto Mono', monospace`

### Typography — Wrong Font Weight (max 600, no font-bold/font-light)

- **File:** `src/components/email/UndoSendToast.tsx` line 129 — Found: `font-bold` (700) — Expected: `font-semibold` (600)
- **File:** `src/components/email/CategoryTabs.tsx` line 92 — Found: `font-bold` — Expected: `font-semibold`
- **File:** `src/components/ErrorBoundary.tsx` line 65 — Found: `font-bold` — Expected: `font-semibold`
- **File:** `src/components/billing/PricingCard.tsx` line 57 — Found: `font-bold` — Expected: `font-semibold`
- **File:** `src/components/settings/SettingsPanel.tsx` lines 624, 763 — Found: `font-bold` — Expected: `font-semibold`
- **File:** `src/components/home/HeroSection.tsx` line 145 — Found: `font-bold` — Expected: `font-semibold`
- **File:** `src/pages/Support.tsx` line 212 — Found: `font-bold` — Expected: `font-semibold`
- **File:** `src/pages/AppPage.tsx` lines 1534, 1599, 2263 — Found: `font-bold` — Expected: `font-semibold`
- **File:** `src/pages/PrivacyPolicy.tsx` lines 22, 36 — Found: `font-bold` — Expected: `font-semibold`
- **File:** `src/pages/Analytics.tsx` line 92 — Found: `font-bold` — Expected: `font-semibold`
- **File:** `src/pages/NotFound.tsx` line 50 — Found: `font-bold` — Expected: `font-semibold`
- **File:** `src/pages/Onboarding.tsx` line 174 — Found: `font-bold` — Expected: `font-semibold`
- **File:** `src/components/email/DeepWorkMode.tsx` line 143 — Found: `font-light` (300) — Expected: `font-normal` (400)
- **File:** `src/components/email/ThreadView.tsx` line 136 — Found: `font-light` — Expected: `font-normal`
- **File:** `src/components/email/EmptyState.tsx` lines 152, 171 — Found: `font-light` — Expected: `font-normal`
- **File:** `src/pages/AppPage.tsx` line 2524 — Found: `font-light` — Expected: `font-normal`

### Components — Off-Spec UI Primitives

- **File:** `src/components/ui/button.tsx` line 8 — Found: `rounded-md` (6px), default `h-9` (36px) — Expected: `rounded-[5px]` (5px), `h-8` (32px)
- **File:** `src/components/ui/input.tsx` line 11 — Found: `h-10` (40px), `rounded-md` (6px) — Expected: `h-8` (32px), `rounded-[5px]` (5px)
- **File:** `src/components/ui/card.tsx` line 6 — Found: `rounded-lg` (8px), `p-6` (24px) on header/content/footer — Expected: `rounded-[6px]` (6px), `p-4` (16px)
- **File:** `src/components/ui/badge.tsx` line 7 — Found: `text-xs` (12px), `font-semibold` (600), `px-2.5` (10px) — Expected: `text-[11px]` (11px), `font-medium` (500), `px-2` (8px)

### Border Radius — Oversized Radii

- **File:** Multiple (38 instances) — Found: `rounded-xl` (12px) — Expected: `rounded-lg` (8px) max
  - Top offenders: `src/pages/AppPage.tsx` (11), `src/pages/Support.tsx` (10), `src/components/email/SwipeableEmailRow.tsx` (5), `src/index.css` (5)
- **File:** Multiple (22 instances) — Found: `rounded-2xl` (16px) — Expected: `rounded-lg` (8px) max
  - Top offenders: `src/pages/Auth.tsx` (3), `src/pages/ResetPassword.tsx` (4), `src/pages/Onboarding.tsx` (3), `src/pages/AppPage.tsx` (3)
- **File:** `src/components/home/HeroSection.tsx` line 97 — Found: `rounded-3xl` (24px) — Expected: `rounded-lg` (8px)

### Shadows — Non-Approved Shadow Levels

- **File:** Multiple (12 instances) — Found: `shadow-2xl` — Expected: `0 4px 12px rgba(0,0,0,0.15)` (medium) max
  - Files: `TeamManagementPanel.tsx`, `OnboardingTour.tsx`, `ShortcutsTutorial.tsx`, `BulkActionsToolbar.tsx`, `EmailChatPanel.tsx`, `UndoSendToast.tsx`, `FollowUpPanel.tsx`, `MeetingScheduler.tsx`, `Auth.tsx` (3), `SettingsPanel.tsx`
- **File:** Multiple (3 instances) — Found: `shadow-xl` — Expected: approved shadow tokens only
  - Files: `chart.tsx`, `MoveToFolderMenu.tsx`, `EmptyState.tsx`
- **File:** `src/components/email/SendSuccessAnimation.tsx` line 68 — Found: `boxShadow: '0 0 40px hsl(var(--primary) / 0.4)'` — Expected: approved shadow only
- **File:** `src/components/home/ProductWalkthrough.tsx` line 58 — Found: `boxShadow: '0 12px 24px -8px ...'` — Expected: approved shadow only
- **File:** `src/index.css` lines 291, 295 — Found: `box-shadow: 0 0 24px ...`, `box-shadow: 0 8px 32px ...` — Expected: approved shadow values only

---

## Warnings

### Color Tokens — Raw Tailwind Palette Classes (~282 instances)

#### `text-white` / `bg-white` / `bg-black` overlays (~115 instances)
- `src/pages/Auth.tsx` — 15+ instances of `text-white`, `bg-white`
- `src/components/email/SwipeableEmailRow.tsx` — 25+ instances of `text-white`, `bg-white/*`
- `src/components/email/BulkActionsToolbar.tsx` — 12+ instances
- `src/components/email/DeepWorkMode.tsx` — 7+ instances
- `src/components/email/QuickActionsBar.tsx` — 7+ instances
- `src/pages/AppPage.tsx` — 15+ instances
- `src/components/ui/sheet.tsx`, `drawer.tsx`, `alert-dialog.tsx`, `dialog.tsx` — `bg-black/80` overlay
- 14+ additional files with `bg-black/50..60` overlays

#### `amber-*` classes (~50 instances)
- `src/components/email/EmailNoteEditor.tsx` — 7 instances (`bg-amber-500/*`, `text-amber-500`, `border-amber-500/*`)
- `src/components/email/DueRemindersPanel.tsx` — 6 instances
- `src/components/email/SwipeableEmailRow.tsx` — 4 instances
- `src/components/email/Sidebar.tsx` — 3 instances
- `src/components/email/CalendarInviteBanner.tsx` — 4 instances
- `src/pages/AppPage.tsx` — 4 instances
- 14 additional files with 1–3 instances each

#### `red-*` classes (~25 instances)
- `src/components/ui/toast.tsx` — `text-red-300`, `ring-red-400`, `ring-offset-red-600`
- `src/components/ui/NetworkStatus.tsx` — `bg-red-50`, `text-red-900`
- `src/components/email/Gatekeeper.tsx` — `border-red-500/30`, `bg-red-500/10`, `text-red-500`
- `src/components/email/PriorityBadge.tsx` — 6 red-* classes
- 6 additional files

#### `green-*` classes (~15 instances)
- `src/components/ui/NetworkStatus.tsx` — `bg-green-50`, `text-green-900`
- `src/components/email/ChatSidebar.tsx` — `bg-green-500`
- `src/components/billing/PricingCard.tsx` — `border-green-500`, `text-green-500`
- 4 additional files

#### `emerald-*` classes (~15 instances)
- `src/components/email/CategoryTabs.tsx` — `bg-emerald-500`, `text-emerald-400`
- `src/components/email/CalendarInviteBanner.tsx` — 3 instances
- `src/pages/AppPage.tsx` — 4 instances
- 3 additional files

#### `blue-*` classes (~6 instances)
- `src/lib/errorBoundaryEnhanced.tsx` — `bg-blue-500`, `hover:bg-blue-600`, `border-blue-500`
- `src/components/billing/BillingDashboard.tsx` — `bg-blue-500/10`, `text-blue-500`
- `src/components/email/CollapsedEmailGroup.tsx` — `border-blue-500/20`

#### `cyan-*` classes (~10 instances)
- `src/pages/AppPage.tsx` — `text-cyan-400`, `bg-cyan-500`, `hover:bg-cyan-400`
- `src/components/email/BulkActionsToolbar.tsx` — `text-cyan-400`
- `src/components/email/QuickActionsBar.tsx` — `bg-cyan-500/20`, `text-cyan-400`

#### `violet-*` / `purple-*` classes (~12 instances)
- `src/components/LoadingScreen.tsx` — `bg-violet-400`, `text-violet-400`
- `src/pages/NotFound.tsx` — `text-violet-400`, `border-violet-500/20`
- `src/components/home/HeroSection.tsx` — `bg-violet-500/20`, `text-violet-400`
- `src/components/email/SenderAvatar.tsx` — gradient with `from-violet-500`, `to-purple-600`

#### `yellow-*` classes (~8 instances)
- `src/components/email/Gatekeeper.tsx` — `border-yellow-500/30`, `text-yellow-500`
- `src/components/email/MoveToFolderMenu.tsx` — `fill-yellow-500`
- `src/components/billing/BillingDashboard.tsx` — `bg-yellow-500/10`, `text-yellow-500`
- 2 additional files

#### `slate-*` classes (~8 instances)
- `src/components/email/DeepWorkMode.tsx` — `from-slate-900`, `via-slate-800`, `text-slate-400`, `bg-slate-800`
- `src/components/email/ShortcutsTutorial.tsx` — `bg-slate-800/95`
- `src/components/email/BulkActionsToolbar.tsx` — `bg-slate-900/95`

#### `gray-*` classes (~6 instances)
- `src/hooks/useThreadAnalytics.ts` — `text-gray-600`, `bg-gray-50`
- `src/components/SafeAreaDebug.tsx` — `border-gray-600`

#### `teal-*` / `pink-*` classes (~4 instances)
- `src/pages/AppPage.tsx` — `text-teal-400`, `bg-teal-500/10`
- `src/components/settings/MatrixSettings.tsx` — `text-teal-400`
- `src/components/crm/PersonalCRMPanel.tsx` — `text-pink-500`

### Typography — Wrong Font Sizes (~74 instances)

#### `text-lg` (18px — not in spec: nearest 16px or 20px) — 46 instances
- `src/components/ui/sheet.tsx` line 84, `drawer.tsx` line 62, `alert-dialog.tsx` line 60, `dialog.tsx` line 70
- `src/components/email/` — 20 files including `ScheduledEmailsPanel.tsx`, `DeepWorkMode.tsx`, `SenderPanel.tsx`, `UnsubscribePanel.tsx`, `SuperhumanList.tsx`, `ContactManagementPanel.tsx`, `KeyboardShortcutsHelp.tsx`, `SnoozedEmailsPanel.tsx`, `BlockedEmailsPanel.tsx`, `SendSuccessAnimation.tsx`, `ShortcutsHelp.tsx`, `EmailList.tsx`, `EmailView.tsx`, `EmailTemplatesPanel.tsx`, `SearchPanel.tsx`
- `src/pages/` — `Support.tsx`, `AppPage.tsx`, `DesignSystem.tsx`, `Analytics.tsx`
- `src/components/settings/SettingsPanel.tsx` — 4 instances
- `src/components/home/` — 6 files

#### `text-3xl` (30px — not in spec) — 8 instances
- `src/index.css`, `SuperhumanList.tsx`, `EmailList.tsx`, `NotFound.tsx`, `ValueProps.tsx`, `TractionMetrics.tsx`, `PricingPreview.tsx`, `ProductWalkthrough.tsx`

#### `text-4xl` (36px — not in spec) — 8 instances
- `src/pages/Support.tsx`, `PrivacyPolicy.tsx`, `PricingCard.tsx`, `HeroSection.tsx`, `ValueProps.tsx`, `PricingPreview.tsx` (2), `FinalCTA.tsx`

#### `text-5xl` (48px — not in spec) — 3 instances
- `src/pages/Support.tsx`, `HeroSection.tsx`, `FinalCTA.tsx`

#### `text-6xl` (60px — not in spec) — 1 instance
- `src/components/home/HeroSection.tsx` line 49

#### `text-7xl`/`text-8xl` (72/96px — not in spec) — 1 instance
- `src/components/email/DeepWorkMode.tsx` line 143

#### `text-[9px]` (not in spec: use 8px or 10px) — 7 instances
- `src/components/email/CollapsedEmailGroup.tsx`, `SettingsPanel.tsx` (3), `HeroSection.tsx` (3)

### Typography — Non-Zero Letter Spacing (~55 instances)

#### `tracking-tight` — 15 instances
- `src/components/ui/alert.tsx`, `drawer.tsx`, `card.tsx`, `dialog.tsx`
- `src/index.css` (2), `DeepWorkMode.tsx`, `Sidebar.tsx`, `MinimalSidebar.tsx`
- `src/components/home/` — `HeroSection.tsx`, `ValueProps.tsx`, `PricingPreview.tsx`, `FinalCTA.tsx`, `ProductWalkthrough.tsx`
- `src/pages/Onboarding.tsx`

#### `tracking-wider` — 30 instances
- `src/index.css` (1), `src/components/email/` — 6 files
- `src/components/settings/SettingsPanel.tsx` — 20 instances
- `src/components/home/SocialProof.tsx`, `src/pages/AppPage.tsx` (2)

#### `tracking-widest` — 5 instances
- `src/components/ui/command.tsx`, `dropdown-menu.tsx`, `context-menu.tsx`, `menubar.tsx`
- `src/components/email/DeepWorkMode.tsx`

#### `tracking-wide` — 4 instances
- `src/index.css`, `SwipeableEmailRow.tsx`, `EmptyState.tsx`, `PersonalCRMPanel.tsx`

#### `tracking-[0.2em]` — 1 instance
- `src/components/email/SenderPanel.tsx` line 132

### Spacing — Non-Token Values (~46 instances)

- `py-24` (96px) — 5 instances in `src/components/home/` (`HeroSection`, `ValueProps`, `SocialProof`, `PricingPreview`, `ProductWalkthrough`)
- `py-16` (64px) — 3 instances (`FolderEmptyState.tsx` ×2, `HomeFooter.tsx`)
- `py-12` (48px) — 6 instances (`PersonalCRMPanel`, `AIPromptConfig`, `ScheduledEmailsPanel`, `FollowUpPanel`, `Support.tsx`, `PrivacyPolicy.tsx`)
- `py-20` (80px) — 3 instances (`TractionMetrics.tsx`, `Analytics.tsx` ×2)
- `px-10` (40px) — 7 instances (`FinalCTA`, `ResetPassword` ×2, `Auth` ×3, `AdvancedSearchFilters`)
- `mb-16` (64px) — 7 instances (`ValueProps`, `PricingPreview`, `ProductWalkthrough`, `Support.tsx` ×4)
- `mb-12`/`mt-12` (48px) — 4 instances (`DeepWorkMode` ×2, `HomeFooter`, `PrivacyPolicy`)
- `mb-20` (80px) — 1 instance (`SocialProof`)
- `mb-10` (40px) — 1 instance (`FinalCTA`)
- `gap-16` (64px) — 1 instance (`HeroSection`)
- `pl-9` (36px) — 4 instances (`UnsubscribePanel`, `ContactManagementPanel`, `PersonalCRMPanel`, `AppPage`)
- `pl-7` (28px) — 1 instance (`alert.tsx`)
- `mt-24` / `pb-24` (96px) — 2 instances (`drawer.tsx`, `SettingsPanel`)
- Inline `padding: 40px` — 1 instance (`PrintExportEmail.tsx`)

### Shadows — `shadow-lg` (27 instances)

- `src/components/ui/` — `command.tsx`, `dropdown-menu.tsx`, `sheet.tsx`, `switch.tsx`, `toast.tsx`, `NetworkStatus.tsx`, `navigation-menu.tsx`, `alert-dialog.tsx`, `dialog.tsx`, `sonner.tsx`
- `src/index.css` line 890
- `src/components/email/` — `FolderTabs.tsx`, `OAuthDiagnostics.tsx`, `ContactAutocomplete.tsx`, `UndoActionToast.tsx`, `EmailQuickPreview.tsx`, `MinimalSidebar.tsx`, `OfflineQueueStatus.tsx`, `SendSuccessAnimation.tsx`, `BatchOperationsBar.tsx`, `ChatSidebar.tsx`, `PullToRefresh.tsx`, `EmptyState.tsx`
- `src/pages/NotFound.tsx`, `src/components/SafeAreaDebug.tsx`, `src/components/billing/PricingCard.tsx`, `src/lib/errorBoundaryEnhanced.tsx`

### Shadows — `shadow-md` (10 instances)

- `src/components/ui/` — `dropdown-menu.tsx`, `tooltip.tsx`, `popover.tsx`, `hover-card.tsx`, `navigation-menu.tsx`, `select.tsx`, `context-menu.tsx` (2), `menubar.tsx`
- `src/components/email/AttachmentPreview.tsx`

### Shadows — CSS box-shadow non-standard (4 instances)

- `src/index.css` line 291 — `0 0 24px -6px hsl(var(--accent-glow) / 0.35)`
- `src/index.css` line 295 — `0 8px 32px -8px hsl(225 20% 0% / 0.6)`
- `src/index.css` line 418 — `0 4px 12px -2px hsl(var(--primary) / 0.4)` (close but has spread)
- `src/index.css` line 598 — `0 0 0 3px hsl(var(--primary) / 0.1)` (focus ring but 3px instead of 2px)

---

## Passed

- **Icons** — All icon imports use `lucide-react` exclusively. No imports from `react-icons`, `@heroicons`, `@mui/icons-material`, `phosphor-react`, `@fortawesome`, or any other icon library detected.
- **Animations** — No `transition-duration` values exceeding 300ms detected in component files. Standard Tailwind transition utilities (`transition-all`, `transition-colors`, `duration-150`, `duration-200`) are used consistently.

---

## Top 10 Files by Violation Count

| # | File | Violations |
|---|------|------------|
| 1 | `src/pages/AppPage.tsx` | ~45 (colors, typography, spacing, radius) |
| 2 | `src/components/email/SwipeableEmailRow.tsx` | ~35 (colors, radius) |
| 3 | `src/components/settings/SettingsPanel.tsx` | ~28 (tracking-wider, font-bold, text-lg, spacing) |
| 4 | `src/pages/Auth.tsx` | ~21 (colors, radius, shadows) |
| 5 | `src/components/email/DeepWorkMode.tsx` | ~20 (colors, typography, radius, shadows) |
| 6 | `src/components/email/BulkActionsToolbar.tsx` | ~18 (colors, shadows) |
| 7 | `src/components/email/Gatekeeper.tsx` | ~15 (colors) |
| 8 | `src/index.css` | ~15 (fonts, tracking, radius, shadows) |
| 9 | `src/components/email/QuickActionsBar.tsx` | ~14 (colors) |
| 10 | `src/components/home/HeroSection.tsx` | ~12 (typography, spacing, radius) |

---

## Recommended Fix Priority

1. **P0 — Core UI Components:** Fix `button.tsx`, `input.tsx`, `card.tsx`, `badge.tsx` — these cascade across the entire app
2. **P0 — Font Family:** Change `index.css` from Geist to Inter / Roboto Mono
3. **P1 — Hardcoded Hex:** Replace all raw hex values in `.ts`/`.tsx` with CSS variable tokens
4. **P1 — Border Radius:** Global find-replace `rounded-xl` → `rounded-lg`, `rounded-2xl` → `rounded-lg`, `rounded-3xl` → `rounded-full`
5. **P1 — Shadows:** Replace `shadow-2xl`/`shadow-xl` with custom shadow utilities matching spec
6. **P2 — Raw Tailwind Colors:** Replace `amber-*`, `red-*`, `green-*`, etc. with semantic status tokens
7. **P2 — Typography:** Replace `text-lg` (18px) with `text-base` (16px), cap sizes at `text-2xl` (24px)
8. **P2 — Letter Spacing:** Remove all `tracking-*` classes
9. **P3 — Spacing:** Align large spacing values to token scale
10. **P3 — Overlays:** Standardize `bg-black/*` and `text-white` to semantic overlay tokens
