# zentrixcrm Design System Audit

**Date:** 2026-03-21
**Spec:** Zentrix Design System v1.0 (DESIGN.md, March 20 2026)
**Scope:** `/home/ubuntu/zentrixcrm/src/` -- 633 TSX files, 2 CSS files

---

## Summary

| | Count |
|---|---|
| **Critical Violations** | **87** |
| **Warnings** | **42** |
| **Passed** | **2** |

---

## Critical Violations

### 1. Color Tokens

**Raw Tailwind color classes -- ~2,660 instances across 290 files**

The codebase pervasively uses raw Tailwind color classes instead of design system tokens. This is the single largest category of violations.

| Raw Class | Occurrences | Expected Token |
|---|---|---|
| `text-gray-600` | ~340 | `text-secondary` |
| `text-gray-900` | ~268 | `text-primary` |
| `text-gray-500` | ~215 | `text-muted` |
| `text-blue-600` | ~132 | `text-accent` |
| `text-green-600` | ~124 | `text-success` |
| `text-gray-400` | ~115 | `text-muted` |
| `bg-gray-100` | ~105 | `bg-surface-raised` |
| `bg-green-100` | ~98 | status token at 20% opacity |
| `bg-blue-100` | ~82 | accent token at 20% opacity |
| `text-red-600` | ~78 | `text-error` |
| `bg-red-100` | ~74 | error token at 20% opacity |
| `border-gray-200` | ~66 | `border` token |
| `bg-yellow-100` | ~62 | warning token at 20% opacity |

Top offending files:
- **File:** `src/components/deal-detail/DealDetailInfo.tsx` -- 51 raw color classes
- **File:** `src/components/DealDetailPanel.tsx` -- 39 raw color classes
- **File:** `src/components/marketing/Contacts.tsx` -- 38 raw color classes
- **File:** `src/pages/ContactUsPage.tsx` -- 37 raw color classes
- **File:** `src/components/OpportunityCards.tsx` -- 36 raw color classes
- **File:** `src/components/ImportPreview.tsx` -- 33 raw color classes
- **File:** `src/components/FeedbackAndInsights.tsx` -- 33 raw color classes
- **File:** `src/components/contact-detail/ContactFields.tsx` -- 32 raw color classes

**Hardcoded non-approved hex values -- ~80+ instances**

- **File:** `src/components/EmailSignatureEditor.tsx` line 91 -- Found: `#0066cc` -- Expected: accent token `#5c84fe`
- **File:** `src/components/EmailSignatureEditor.tsx` line 92 -- Found: `#333333` -- Expected: text-primary token
- **File:** `src/components/EmailSignatureEditor.tsx` line 323 -- Found: `#666` -- Expected: text-secondary token
- **File:** `src/components/FeedbackInsights.tsx` line 38 -- Found: `#10B981` -- Expected: success token `#4ade80`
- **File:** `src/components/FeedbackInsights.tsx` line 39 -- Found: `#F59E0B` -- Expected: warning token `#fbbf24`
- **File:** `src/components/FeedbackInsights.tsx` line 40 -- Found: `#EF4444` -- Expected: error token `#f87171`
- **File:** `src/components/FeedbackInsights.tsx` line 110 -- Found: `#f0f0f0` -- Expected: border token
- **File:** `src/components/FeedbackInsights.tsx` line 114 -- Found: `#3B82F6` -- Expected: accent `#5c84fe`
- **File:** `src/components/sdr/SDRTrendsView.tsx` lines 89-92 -- Found: `#8b5cf6`, `#3b82f6`, `#f97316`, `#22c55e` -- Expected: design system palette
- **File:** `src/components/SalesPerformanceChart.tsx` line 147 -- Found: `#3b82f6` -- Expected: accent `#5c84fe`
- **File:** `src/components/SalesPerformanceChart.tsx` line 151 -- Found: `#10b981` -- Expected: success `#4ade80`
- **File:** `src/components/InsightsDashboard.tsx` lines 33-39 -- Found: `#10b981`, `#f59e0b`, `#ef4444`, `#3b82f6` -- Expected: design system tokens
- **File:** `src/components/SalesActivitiesChart.tsx` lines 26-29 -- Found: `#3b82f6`, `#0077b5`, `#25d366` -- Expected: design system tokens
- **File:** `src/components/HealthTrends.tsx` lines 29-33 -- Found: `#3B82F6`, `#10B981`, `#EF4444` -- Expected: design system tokens
- **File:** `src/components/marketing/QuickSendEmail.tsx` lines 34-38 -- Found: `#f8f9fa`, `#333`, `#666`, `#ddd`, `#999` -- Expected: design system tokens
- **File:** `src/components/analytics/dashboard/widgets/RevenueByProductWidget.tsx` line 15 -- Found: `['#6366f1', '#3b82f6', '#22c55e', '#f59e0b', '#ec4899', '#8b5cf6', '#14b8a6', '#f97316']` -- Expected: design system chart palette
- **File:** `src/components/email/ScriptEditorToolbar.tsx` lines 46-63 -- Found: 14 raw hex colors -- Expected: design system token palette
- **File:** `src/components/email/EmailToolbar.tsx` lines 30-47 -- Found: 14 raw hex colors -- Expected: design system token palette
- **File:** `src/components/data-management/PropertyOptionsEditor.tsx` lines 33-34 -- Found: 9 raw hex colors -- Expected: design system palette
- **File:** `src/components/forecast/SalesGoalsModal.tsx` line 135 -- Found: `#2563eb` -- Expected: accent `#5c84fe`
- **File:** `src/components/StageManagementRow.tsx` line 41 -- Found: `#e5e7eb` -- Expected: border token
- **File:** `src/components/Scripts.tsx` line 319 -- Found: `#6366f1` -- Expected: accent token
- **File:** `src/components/analytics/ProductPerformance.tsx` line 370 -- Found: `#8884d8` -- Expected: accent token
- **File:** `src/components/analytics/SourceAnalytics.tsx` line 333 -- Found: `#8884d8` -- Expected: accent token

---

### 2. Typography

**`text-sm` (14px) -- not in approved size set -- 1,673 instances across 414 files**

This is the most pervasive single violation. The spec allows 8, 11, 12, 13, 16, 20, 24px only. `text-sm` = 14px is not approved. Nearest: 13px.

**`font-bold` (700) -- exceeds max weight of 600 -- 269 instances across 134 files**

- **File:** `src/components/Settings.tsx` line 12 -- Found: `font-bold` -- Expected: `font-semibold` (600)
- **File:** `src/components/Analytics.tsx` line 32 -- Found: `font-bold` -- Expected: `font-semibold`
- **File:** `src/components/DealDetail.tsx` lines 93, 299, 342 -- Found: `font-bold` -- Expected: `font-semibold`
- **File:** `src/components/ContactDetail.tsx` line 293 -- Found: `font-bold` -- Expected: `font-semibold`
- **File:** `src/pages/LandingPage.tsx` -- 10 instances of `font-bold`
- **File:** `src/components/HomePage.tsx` -- 11 instances of `font-bold`
- **File:** `src/components/import/ImportBatchDetailModal.tsx` lines 345-361 -- 5 instances of `font-bold`

**`text-lg` (18px) -- not in approved size set -- 226 instances across 133 files**

- **File:** `src/components/ImportTab.tsx` line 141 -- Found: `text-lg` (18px) -- Expected: 16px or 20px
- **File:** `src/components/StageManagementDedicated.tsx` lines 291, 325, 338 -- Found: `text-lg` (18px)

**`text-3xl` (30px) -- not in approved size set -- ~57 instances**

- **File:** `src/components/Settings.tsx` line 12 -- Found: `text-3xl` -- Expected: `text-2xl` (24px)
- **File:** `src/components/Analytics.tsx` line 32 -- Found: `text-3xl` -- Expected: `text-2xl`
- **File:** `src/components/Scripts.tsx` lines 167, 185 -- Found: `text-3xl` -- Expected: `text-2xl`
- **File:** `src/components/Forecast.tsx` line 74 -- Found: `text-3xl` -- Expected: `text-2xl`
- **File:** `src/index.css` line 172 -- Found: `text-3xl` in `.heading-md` class -- Expected: `text-2xl`

**`text-4xl`+ (36px+) -- not in approved size set**

- **File:** `src/index.css` line 167 -- Found: `text-4xl` in `.heading-lg` -- Expected: max 24px
- **File:** `src/pages/LandingPage.tsx` line 52 -- Found: `text-5xl md:text-6xl lg:text-7xl` -- Expected: max 24px
- **File:** `src/pages/LandingPage.tsx` lines 199, 278, 314, 381 -- Found: `text-4xl md:text-5xl` -- Expected: max 24px
- **File:** `src/components/HomePage.tsx` line 75 -- Found: `text-6xl md:text-8xl lg:text-9xl` -- Expected: max 24px
- **File:** `src/components/HomePage.tsx` lines 133, 150, 221, 265 -- Found: `text-5xl md:text-7xl` -- Expected: max 24px
- **File:** `src/pages/NotFound.tsx` line 17 -- Found: `text-4xl` -- Expected: max 24px
- **File:** `src/components/deal-detail/DealDetailHeader.tsx` line 165 -- Found: `text-4xl` -- Expected: max 24px

**Non-zero letter-spacing -- 80+ instances across ~50 files**

- **File:** `src/index.css` lines 167, 172, 177, 233 -- Found: `tracking-tight` in heading utility classes -- Expected: 0 (propagates to all headings)
- **File:** `src/components/ui/card.tsx` line 47 -- Found: `tracking-tight` -- Expected: 0 (affects all CardTitle)
- **File:** `src/components/ui/dialog.tsx` line 98 -- Found: `tracking-tight` -- Expected: 0 (affects all DialogTitle)
- **File:** `src/components/ui/drawer.tsx` line 85 -- Found: `tracking-tight` -- Expected: 0
- **File:** `src/components/ui/alert.tsx` line 47 -- Found: `tracking-tight` -- Expected: 0
- **File:** `src/components/ui/table.tsx` line 74 -- Found: `tracking-wider` -- Expected: 0 (affects all table headers)
- **File:** `src/components/ui/command.tsx` line 134 -- Found: `tracking-widest` -- Expected: 0
- **File:** `src/components/ui/context-menu.tsx` line 173 -- Found: `tracking-widest` -- Expected: 0
- **File:** `src/components/ui/menubar.tsx` line 208 -- Found: `tracking-widest` -- Expected: 0
- **File:** `src/components/Tasks.tsx` lines 380-385 -- Found: `tracking-wider` (6 instances)
- **File:** `src/components/Layout.tsx` lines 104, 111, 118, 125 -- Found: `tracking-wider`
- **File:** `src/index.css` line 208 -- Found: `tracking-wider` in `.label-overline` class
- **File:** `src/components/AuthForm.tsx` lines 155, 168, 192, 235, 345 -- Found: `tracking-tight`

**`font-light` (300) -- below minimum 400**

- **File:** `src/components/HomePage.tsx` line 83 -- Found: `font-light` -- Expected: `font-normal` (400)

---

### 3. Border Radius

**`rounded-xl` (12px), `rounded-2xl` (16px), `rounded-3xl` (24px) -- not in approved set (max 8px or 9999px)**

Core UI components (high propagation):
- **File:** `src/components/ui/dropdown-menu.tsx` lines 48, 66 -- Found: `rounded-xl` -- Expected: `rounded-lg` (8px)
- **File:** `src/components/ui/popover.tsx` line 24 -- Found: `rounded-xl` -- Expected: `rounded-lg`
- **File:** `src/components/ui/dialog.tsx` line 44 -- Found: `rounded-xl` -- Expected: `rounded-lg`
- **File:** `src/components/ui/sidebar.tsx` line 324 -- Found: `rounded-xl` -- Expected: `rounded-lg`

Feature components:
- **File:** `src/components/DealCard.tsx` line 123 -- Found: `rounded-xl` -- Expected: `rounded-lg`
- **File:** `src/components/contacts/ContactCard.tsx` line 78 -- Found: `rounded-xl` -- Expected: `rounded-lg`
- **File:** `src/components/Tasks.tsx` line 375 -- Found: `rounded-xl` -- Expected: `rounded-lg`
- **File:** `src/components/TimeframeFilter.tsx` lines 24, 32 -- Found: `rounded-2xl`, `rounded-xl`
- **File:** `src/components/LeaderboardCard.tsx` lines 49, 52, 65, 81, 84, 105 -- Found: `rounded-2xl`, `rounded-xl`
- **File:** `src/components/onboarding/GoalCard.tsx` lines 21, 30 -- Found: `rounded-2xl`, `rounded-xl`
- **File:** `src/components/onboarding/steps/CompanyStep.tsx` lines 69, 85, 114, 130, 138 -- Found: `rounded-xl`
- **File:** `src/components/onboarding/steps/GoalsStep.tsx` line 74 -- Found: `rounded-xl`
- **File:** `src/components/workflow/FullScreenTaskWorkflow.tsx` lines 353, 355, 396, 420, 496 -- Found: `rounded-xl`
- **File:** `src/components/workflow/FocusModeEmptyState.tsx` lines 66, 73 -- Found: `rounded-xl`
- **File:** `src/components/HomePage.tsx` lines 132, 202, 204 -- Found: `rounded-2xl`
- **File:** `src/pages/LandingPage.tsx` line 89 -- Found: `rounded-3xl`
- **File:** `src/pages/LandingPage.tsx` lines 92, 138, 239 -- Found: `rounded-2xl`
- **File:** `src/pages/LandingPage.tsx` lines 124, 237, 324, 344 -- Found: `rounded-xl`/`rounded-3xl`
- **File:** `src/pages/ContactSalesPage.tsx` lines 205, 212 -- Found: `rounded-2xl`, `rounded-xl`
- **File:** `src/pages/ContactUsPage.tsx` lines 84, 95, 106, 117 -- Found: `rounded-xl`, `rounded-2xl`
- **File:** `src/pages/HelpCenterPage.tsx` lines 99, 101, 127 -- Found: `rounded-xl`
- **File:** `src/pages/LeaderboardPage.tsx` lines 42, 60, 77 -- Found: `rounded-xl`

Inline CSS violations:
- **File:** `src/index.css` lines 450, 456 -- Found: `border-radius: 7px` -- Expected: 6px or 8px
- **File:** `src/hooks/useTeamManagement.ts` line 532 -- Found: `border-radius: 16px` -- Expected: max 8px
- **File:** `src/hooks/useTeamManagement.ts` line 552 -- Found: `border-radius: 12px` -- Expected: max 8px

---

### 4. Shadows

**`shadow-xl` and `shadow-2xl` -- not in approved shadow set**

- **File:** `src/components/ui/sheet.tsx` line 17 -- Found: `shadow-2xl` -- Expected: approved shadow only
- **File:** `src/components/ui/dropdown-menu.tsx` lines 48, 66 -- Found: `shadow-xl` -- Expected: subtle/medium only
- **File:** `src/components/ui/popover.tsx` line 24 -- Found: `shadow-xl` -- Expected: subtle/medium only
- **File:** `src/components/ui/dialog.tsx` line 40 -- Found: `shadow-xl` -- Expected: medium `0 4px 12px rgba(0,0,0,0.15)`
- **File:** `src/components/ui/chart.tsx` line 180 -- Found: `shadow-xl` -- Expected: subtle/medium only
- **File:** `src/components/Tasks.tsx` line 634 -- Found: `shadow-2xl` -- Expected: approved shadow
- **File:** `src/components/EmailComposer.tsx` line 715 -- Found: `shadow-2xl` -- Expected: approved shadow
- **File:** `src/components/HomePage.tsx` lines 91, 99, 278, 286 -- Found: `shadow-2xl`
- **File:** `src/pages/LandingPage.tsx` lines 92, 138 -- Found: `shadow-2xl`, `shadow-xl`
- **File:** `src/components/LeaderboardCard.tsx` lines 49, 81 -- Found: `shadow-lg hover:shadow-xl`
- **File:** `src/components/TrashCanDropZone.tsx` line 21 -- Found: `shadow-xl`

**`shadow-lg` -- not matching approved medium value**

- **File:** `src/components/ui/select.tsx` line 77 -- Found: `shadow-lg`
- **File:** `src/components/ui/sonner.tsx` line 21 -- Found: `shadow-lg`
- **File:** `src/components/ui/navigation-menu.tsx` line 89 -- Found: `shadow-lg`
- **File:** `src/components/workflow/TaskMetricsCard.tsx` line 62 -- Found: `shadow-lg`
- **File:** `src/components/workflow/WorkflowTaskPanel.tsx` line 54 -- Found: `shadow-lg`
- **File:** `src/components/onboarding/steps/GoalsStep.tsx` line 74 -- Found: `shadow-lg hover:shadow-xl`
- **File:** `src/components/onboarding/steps/CompanyStep.tsx` line 138 -- Found: `shadow-lg hover:shadow-xl`
- **File:** `src/components/playbooks/BattlecardsTab.tsx` line 83 -- Found: `hover:shadow-xl`

---

### 5. Component Specifications

**Buttons (`src/components/ui/button.tsx`)**
- **File:** `src/components/ui/button.tsx` lines 12-21 -- Found: `rounded-full` (9999px) on all variants -- Expected: `rounded-[5px]` (5px)

**Inputs (`src/components/ui/input.tsx`)**
- **File:** `src/components/ui/input.tsx` line 18 -- Found: `h-11` (44px height) -- Expected: `h-8` (32px)
- **File:** `src/components/ui/input.tsx` line 38 -- Found: `rounded-md` (6px radius) -- Expected: `rounded-[5px]` (5px)

**Cards (`src/components/ui/card.tsx`)**
- **File:** `src/components/ui/card.tsx` line 14 -- Found: `rounded-lg` (8px radius) -- Expected: `rounded-md` (6px)
- **File:** `src/components/ui/card.tsx` line 34 -- Found: `p-6` (24px padding) -- Expected: `p-4` (16px)
- **File:** `src/components/ui/card.tsx` line 71 -- Found: `p-6 pt-0` (24px padding) -- Expected: `p-4 pt-0` (16px)
- **File:** `src/components/ui/card.tsx` line 81 -- Found: `p-6 pt-0` (24px padding) -- Expected: `p-4 pt-0` (16px)

**Badges (`src/components/ui/badge.tsx`)**
- **File:** `src/components/ui/badge.tsx` line 8 -- Found: `text-xs` (12px) -- Expected: `text-[11px]` (11px)

---

### 6. Spacing

**Non-token spacing values**

- **File:** `src/components/pipeline/StageValidationModal.tsx` lines 215, 230 -- Found: `pl-7` (28px) -- Expected: `pl-6` (24px) or `pl-8` (32px)
- **File:** `src/components/ui/alert.tsx` line 7 -- Found: `pl-7` (28px) -- Expected: approved token
- **File:** `src/components/FilterBar.tsx` line 85 -- Found: `pl-7` (28px)
- **File:** `src/components/forecast/SalesGoalsModal.tsx` line 416 -- Found: `pl-7` (28px)
- **File:** `src/components/ForecastTable.tsx` line 135 -- Found: `pl-9` (36px)
- **File:** `src/components/EnhancedActivityLogForm.tsx` line 568 -- Found: `pl-9` (36px)
- **File:** `src/components/company-detail/activities/CompanyActivityTabs.tsx` line 60 -- Found: `pl-9` (36px)
- **File:** `src/components/onboarding/steps/CompanyStep.tsx` lines 69, 85, 114 -- Found: `pl-11` (44px)
- **File:** `src/components/company-detail/activities/MeetingsTabContent.tsx` line 201 -- Found: `ml-11` (44px)
- **File:** `src/components/company-detail/activities/EmailsTabContent.tsx` line 143 -- Found: `ml-11` (44px)
- **File:** `src/components/company-detail/activities/ActivityTabContent.tsx` line 266 -- Found: `ml-11` (44px)
- **File:** `src/components/HomePage.tsx` line 40 -- Found: `space-x-10` (40px)

---

## Warnings

### Typography -- `shadow-md` approximation
- **File:** `src/components/ui/tooltip.tsx` line 20 -- Found: `shadow-md` -- Warning: not exact match for approved values
- **File:** `src/components/ui/hover-card.tsx` line 19 -- Found: `shadow-md`
- **File:** `src/components/ui/context-menu.tsx` lines 47, 63 -- Found: `shadow-md`
- **File:** `src/components/ui/menubar.tsx` line 98 -- Found: `shadow-md`
- **File:** `src/components/ui/button.tsx` line 12 -- Found: `hover:shadow-md`
- **File:** `src/components/ui/card.tsx` lines 16, 17 -- Found: `hover:shadow-md`, `hover:shadow-lg`

### Spacing -- Large section-level values (may be intentional layout)
- **File:** `src/pages/LandingPage.tsx` lines 165, 191, 275 -- Found: `py-24` (96px)
- **File:** `src/pages/LandingPage.tsx` lines 251, 311, 374 -- Found: `py-32` (128px)
- **File:** `src/pages/LandingPage.tsx` line 41 -- Found: `pt-40` (160px)
- **File:** `src/pages/LandingPage.tsx` line 167 -- Found: `gap-12` (48px)
- **File:** `src/pages/LandingPage.tsx` line 286 -- Found: `gap-16` (64px)
- **File:** `src/components/HomePage.tsx` lines 125, 231 -- Found: `gap-12` (48px)

### Typography -- Inline fontSize edge cases
- **File:** `src/components/EmailSignatureEditor.tsx` lines 93, 128, 160, 388 -- Found: `fontSize: '14px'` -- Expected: 13px or 16px
- **File:** `src/components/analytics/CLVChart.tsx` line 125 -- Found: `fontSize={9}` -- Expected: 8px or 10px
- **File:** `src/components/analytics/ChurnRenewalChart.tsx` line 114 -- Found: `fontSize={9}` -- Expected: 8px or 10px
- **File:** `src/components/Team.tsx` line 101 -- Found: `text-[15px]` -- Expected: 13px or 16px

### Border Radius -- Inline CSS
- **File:** `src/hooks/useTeamManagement.ts` line 579 -- Found: `box-shadow: 0 4px 14px 0 rgba(59, 130, 246, 0.4)` -- Not an approved shadow

---

## Passed

### Icons
No violations. The codebase uses **lucide-react exclusively**. No imports from `react-icons`, `@heroicons`, `@mui/icons-material`, `phosphor-react`, or other icon libraries were detected.

### Font Family
No violations detected. No inline `fontFamily` styles referencing non-Inter/non-Roboto-Mono fonts. No `font-serif` classes found.

---

## High-Impact Remediation Priorities

These fixes would have the widest cascading effect:

1. **`src/index.css`** -- Fix heading utility classes (`.heading-lg`, `.heading-md`, `.heading-sm`, `.label-overline`) that propagate `text-3xl`/`text-4xl`, `tracking-tight`, and `tracking-wider` codebase-wide
2. **`src/components/ui/card.tsx`** -- Fix radius (`rounded-lg` -> `rounded-md`), padding (`p-6` -> `p-4`), and `tracking-tight`
3. **`src/components/ui/button.tsx`** -- Fix radius (`rounded-full` -> `rounded-[5px]`)
4. **`src/components/ui/input.tsx`** -- Fix height (`h-11` -> `h-8`) and radius (`rounded-md` -> `rounded-[5px]`)
5. **`src/components/ui/dialog.tsx`** -- Fix `rounded-xl`, `shadow-xl`, `tracking-tight`
6. **`src/components/ui/dropdown-menu.tsx`** -- Fix `rounded-xl`, `shadow-xl`
7. **`src/components/ui/popover.tsx`** -- Fix `rounded-xl`, `shadow-xl`
8. **`src/components/ui/table.tsx`** -- Fix `tracking-wider`
9. **`src/components/ui/badge.tsx`** -- Fix font size (`text-xs` -> `text-[11px]`)
10. **Tailwind config / global CSS** -- Map raw Tailwind colors to design system tokens to eliminate ~2,660 raw color class violations

---

*Generated: 2026-03-21 | Auditor: Claude Code*
