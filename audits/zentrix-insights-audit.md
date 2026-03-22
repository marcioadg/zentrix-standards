# zentrix-insights Design System Audit

**Date:** 2026-03-21
**Spec Version:** Zentrix Design System v1.0 (DESIGN.md, March 20 2026)
**Codebase:** `/home/ubuntu/zentrix-insights/src/`
**Files Scanned:** ~559 TSX/JSX/CSS files

---

## Summary

| Category | Critical | Warnings | Passed |
|----------|----------|----------|--------|
| Color Tokens | 42 | 12 | 0 |
| Typography | 11 | 8 | 0 |
| Spacing | 0 | 6 | 1 |
| Border Radius | 18 | 4 | 0 |
| Shadows | 14 | 6 | 0 |
| Components | 4 | 3 | 1 |
| Icons | 0 | 0 | 1 |
| **Totals** | **89 critical** | **39 warnings** | **3 passed** |

---

## Critical Violations

### Color Tokens

> **Rule:** "Use tokens, never raw hex." / "No external color decisions. If a color isn't in this file, it doesn't exist in the product."

- **File:** `src/components/CompanyAccessDenied.tsx` line 54 — Found: `bg-white` — Expected: `bg-[var(--page-bg)]` or design token
- **File:** `src/components/CompanyAccessDenied.tsx` line 62 — Found: `text-black` — Expected: `text-[var(--text-primary)]`
- **File:** `src/components/CompanyAccessDenied.tsx` line 71 — Found: `text-red-800` — Expected: `text-[var(--error)]`
- **File:** `src/components/UnifiedUserForm.tsx` line 61 — Found: `bg-white` — Expected: `bg-[var(--page-bg)]`
- **File:** `src/components/UnifiedUserForm.tsx` line 104 — Found: `border-gray-200 text-black` — Expected: `border-[var(--border)] text-[var(--text-primary)]`
- **File:** `src/components/UnifiedUserForm.tsx` line 121 — Found: `border-gray-200 text-black` — Expected: design tokens
- **File:** `src/components/TranslationHealthMonitor.tsx` line 169 — Found: `bg-blue-600 hover:bg-blue-700` — Expected: `bg-[var(--accent)] hover:bg-[var(--accent-hover)]`
- **File:** `src/components/TranslationHealthMonitor.tsx` line 190 — Found: `text-gray-600` — Expected: `text-[var(--text-secondary)]`
- **File:** `src/components/TranslationHealthMonitor.tsx` lines 213-221 — Found: `bg-green-50 text-green-700`, `bg-yellow-50 text-yellow-700`, `bg-red-50 text-red-700` — Expected: status token backgrounds
- **File:** `src/components/EnhancedTeamAnalysisDashboard.tsx` lines 20-22 — Found: `text-green-600`, `text-yellow-600`, `text-red-600` — Expected: `text-[var(--success)]`, `text-[var(--warning)]`, `text-[var(--error)]`
- **File:** `src/components/EnhancedTeamAnalysisDashboard.tsx` line 86 — Found: `bg-green-50 dark:bg-green-950` — Expected: status token with opacity
- **File:** `src/components/EnhancedTeamAnalysisDashboard.tsx` line 95 — Found: `text-orange-600 dark:text-orange-400` — Expected: `text-[var(--warning)]`
- **File:** `src/components/EnhancedTeamAnalysisDashboard.tsx` line 102 — Found: `bg-orange-50 dark:bg-orange-950` — Expected: status token
- **File:** `src/components/ObjectivityCard.tsx` line 48 — Found: `text-white` — Expected: design token
- **File:** `src/components/UserInfoForm.tsx` line 61 — Found: `bg-gradient-to-r from-blue-600 to-purple-600 text-white` — Expected: no gradients; use `bg-[var(--accent)]`
- **File:** `src/components/homepage/HomeHero.tsx` line 13 — Found: `text-gray-900` — Expected: `text-[var(--text-primary)]`
- **File:** `src/components/homepage/HomeHero.tsx` line 20 — Found: `text-gray-600` — Expected: `text-[var(--text-secondary)]`
- **File:** `src/components/homepage/HomeHero.tsx` line 32 — Found: `bg-gray-900 hover:bg-gray-800 text-white` — Expected: design tokens
- **File:** `src/components/homepage/HomeFinalCTA.tsx` line 13 — Found: `text-gray-900` — Expected: `text-[var(--text-primary)]`
- **File:** `src/components/homepage/HomeFinalCTA.tsx` line 31 — Found: `bg-gray-900 hover:bg-gray-800 text-white` — Expected: design tokens
- **File:** `src/components/homepage/HomeNavbar.tsx` line 34 — Found: `bg-white border-gray-200` — Expected: `bg-[var(--page-bg)] border-[var(--border)]`
- **File:** `src/components/homepage/HomeNavbar.tsx` line 95 — Found: `bg-gray-900 hover:bg-gray-800 text-white` — Expected: design tokens
- **File:** `src/components/SelectedWords.tsx` line 20 — Found: `border-black text-black` — Expected: `border-[var(--border)] text-[var(--text-primary)]`
- **File:** `src/components/admin/AdminTableRow.tsx` line 205 — Found: `bg-red-100 text-red-700 dark:bg-red-950/50 dark:text-red-400` — Expected: status tokens
- **File:** `src/components/admin/AdminTableRow.tsx` line 216 — Found: `bg-blue-100 text-blue-700 dark:bg-blue-950/50 dark:text-blue-400` — Expected: accent tokens
- **File:** `src/components/feedback/FloatingFeedbackButton.tsx` line 97 — Found: `bg-black hover:bg-gray-900` — Expected: design tokens
- **File:** `src/components/homepage/HomePricingPreview.tsx` line 28 — Found: `bg-white border-gray-200` — Expected: design tokens
- **File:** `src/components/homepage/HomeProductMockup.tsx` line 20 — Found: `bg-white border-gray-200` — Expected: design tokens
- **File:** `src/components/dashboard/DashboardOverview.tsx` line 301 — Found: `bg-gradient-to-br from-orange-50/50 to-amber-50/50` — Expected: no gradients; use tokens
- **File:** `src/components/dashboard/QuickActionCards.tsx` line 94 — Found: gradient colors — Expected: design tokens
- **File:** `src/components/SimplifiedDevelopmentSection.tsx` line 78 — Found: `bg-gradient-to-r from-blue-50 to-purple-50` — Expected: design tokens
- **File:** `src/components/LandingPage.tsx` multiple lines — Found: `bg-gradient-to-r from-purple-600 to-pink-600`, `bg-white/10` — Expected: design tokens
- **File:** `src/components/integrity/IntegrityQuestionCard.tsx` line 48 — Found: `bg-white border-slate-100` — Expected: design tokens
- **File:** `src/components/integrity/IntegrityLanding.tsx` line 14 — Found: `bg-gradient-to-br from-indigo-100 to-violet-100` — Expected: design tokens
- **File:** `src/components/ui/skeleton.tsx` line 18 — Found: `border-gray-200` — Expected: `border-[var(--border)]`
- **File:** `src/pages/Business.tsx` lines 207, 259, 323, 493 — Found: `bg-white`, `border-gray-200`, `text-gray-900` — Expected: design tokens
- **File:** `src/pages/Pricing.tsx` line 157 — Found: hardcoded gray/white colors — Expected: design tokens
- **File:** `src/components/assessment/AssessmentGuardOverlay.tsx` lines 47-48 — Found: hardcoded dark mode colors — Expected: CSS variable tokens
- **File:** `src/components/ComparisonDashboard.tsx` lines 27-29 — Found: hardcoded dark mode colors — Expected: CSS variable tokens
- **File:** `src/components/TeamRadarChart.tsx` lines 69-81 — Found: hardcoded dark mode colors — Expected: CSS variable tokens
- **File:** `src/components/validation/ValidationLinks.tsx` lines 88-89 — Found: hardcoded dark mode colors — Expected: CSS variable tokens
- **File:** `src/pages/IntegrityThankYou.tsx` line 13 — Found: `bg-gradient-to-br from-emerald-100 to-green-100` — Expected: design tokens

### Typography

> **Rule:** Font sizes limited to 8, 11, 12, 13, 16, 20, 24px. Max weight 600. Inter only. Letter-spacing: 0.

- **File:** `src/components/homepage/HomeHero.tsx` line 13 — Found: `text-5xl md:text-7xl lg:text-8xl font-bold` — Expected: max 24px display size, max weight 600 (font-bold = 700)
- **File:** `src/components/homepage/HomeFinalCTA.tsx` line 13 — Found: `text-4xl md:text-6xl font-bold` — Expected: max 24px, max weight 600
- **File:** `src/components/homepage/HomeFinalCTA.tsx` line 13 — Found: `letterSpacing: '-0.02em'` — Expected: `letter-spacing: 0`
- **File:** `src/components/homepage/HomeProductMockup.tsx` line 9 — Found: `letterSpacing: '-0.03em'` — Expected: `letter-spacing: 0`
- **File:** `src/components/homepage/HomeTractionMetrics.tsx` line 21 — Found: `letterSpacing: '-0.03em'` — Expected: `letter-spacing: 0`
- **File:** `src/components/homepage/HomePricingPreview.tsx` line 21 — Found: `letterSpacing: '-0.02em'` — Expected: `letter-spacing: 0`
- **File:** `src/components/homepage/HomeTestimonials.tsx` line 25 — Found: `letterSpacing: '-0.02em'` — Expected: `letter-spacing: 0`
- **File:** `src/components/results/ShareProfileModal.tsx` line 65 — Found: `fontWeight: 700` — Expected: max `600`
- **File:** `src/components/results/ShareProfileModal.tsx` line 55 — Found: `letterSpacing: '0.15em'` — Expected: `0`
- **File:** `src/components/profile/PrintableProfileContent.tsx` line 250 — Found: `fontWeight: 700` — Expected: max `600`
- **File:** `src/components/AdminPDFDownload.tsx` line 44 — Found: `fontFamily: 'system-ui, -apple-system, sans-serif'` — Expected: `Inter`

### Border Radius

> **Rule:** Only 2px, 4px, 5px, 6px, 8px, or 9999px allowed.

- **File:** `src/components/BehavioralFactorCard.tsx` line 39 — Found: `rounded-xl` (12px) — Expected: `rounded-lg` (8px) or `rounded-[6px]`
- **File:** `src/components/ObjectivityCard.tsx` line 47 — Found: `rounded-xl` (12px) — Expected: max 8px
- **File:** `src/components/ObjectivityCard.tsx` line 64 — Found: `rounded-2xl` (16px) — Expected: max 8px
- **File:** `src/components/LandingPage.tsx` lines 53, 63, 69, 75, 81, 92, 104, 116 — Found: `rounded-2xl` (16px) — Expected: max 8px
- **File:** `src/components/LandingPage.tsx` line 129 — Found: `rounded-3xl` (24px) — Expected: max 8px
- **File:** `src/components/homepage/HomePricingPreview.tsx` line 28 — Found: `rounded-2xl` (16px) — Expected: max 8px
- **File:** `src/components/homepage/HomeProductMockup.tsx` line 20 — Found: `rounded-2xl` (16px) — Expected: max 8px
- **File:** `src/components/homepage/HomeTestimonials.tsx` line 36 — Found: `rounded-2xl` (16px) — Expected: max 8px
- **File:** `src/components/integrity/IntegrityQuestionCard.tsx` line 48 — Found: `rounded-3xl` (24px) — Expected: max 8px
- **File:** `src/components/integrity/IntegrityQuestionCard.tsx` line 66 — Found: `rounded-2xl` (16px) — Expected: max 8px
- **File:** `src/components/integrity/IntegrityResults.tsx` line 123 — Found: `rounded-3xl` (24px) — Expected: max 8px
- **File:** `src/components/integrity/IntegrityLanding.tsx` line 14 — Found: `rounded-3xl` (24px) — Expected: max 8px
- **File:** `src/components/integrity/IntegrityLanding.tsx` lines 32, 38, 44 — Found: `rounded-2xl` (16px) — Expected: max 8px
- **File:** `src/components/results/ShareProfileModal.tsx` line 82 — Found: `borderRadius: 10` (10px) — Expected: 8px
- **File:** `src/components/results/ShareProfileModal.tsx` line 37 — Found: `borderRadius: '16px'` — Expected: max 8px
- **File:** `src/pages/IntegrityThankYou.tsx` line 13 — Found: `rounded-3xl` (24px) — Expected: max 8px
- **File:** `src/pages/Business.tsx` line 259 — Found: `rounded-xl` (12px) — Expected: max 8px
- **File:** `src/pages/Science.tsx` line 115 — Found: `rounded-2xl` (16px) — Expected: max 8px

**Note:** ~70 total `rounded-xl`, ~50 total `rounded-2xl`, and 6 total `rounded-3xl` instances across the codebase.

### Shadows

> **Rule:** Only 3 levels: `none`, `0 1px 2px rgba(0,0,0,0.1)`, `0 4px 12px rgba(0,0,0,0.15)`. Predominantly flat.

- **File:** `src/components/BehavioralFactorCard.tsx` line 32 — Found: `shadow-2xl` — Expected: max `shadow` matching `0 4px 12px rgba(0,0,0,0.15)` or none
- **File:** `src/components/BehavioralFactorCard.tsx` line 39 — Found: `shadow-lg` — Expected: approved shadow level only
- **File:** `src/components/DevelopmentSection.tsx` lines 60, 87, 116, 208 — Found: `shadow-lg` — Expected: borders/contrast for depth, not shadows
- **File:** `src/components/TeamAnalysisDashboard.tsx` lines 44, 70, 83, 98, 114, 130, 146, 166 — Found: `shadow-lg` (8 instances) — Expected: flat design
- **File:** `src/components/ObjectivityCard.tsx` line 39 — Found: `shadow-lg hover:shadow-2xl` — Expected: flat design
- **File:** `src/components/ObjectivityCard.tsx` line 75 — Found: `shadow-inner` — Expected: not in approved list
- **File:** `src/components/dashboard/DashboardOverview.tsx` lines 202, 228, 231, 255, 280, 306 — Found: `shadow-lg` (6 instances) — Expected: flat design
- **File:** `src/components/feedback/FloatingFeedbackButton.tsx` line 97 — Found: `shadow-lg hover:shadow-xl` — Expected: approved shadow or none
- **File:** `src/components/EnhancedTeamAnalysisDashboard.tsx` lines 48, 77, 93, 113, 129, 147 — Found: `shadow-lg` (6 instances) — Expected: flat design
- **File:** `src/components/ComparisonDashboard.tsx` lines 91, 114, 150, 187 — Found: `shadow-lg` (4 instances) — Expected: flat design
- **File:** `src/components/homepage/HomePricingPreview.tsx` line 28 — Found: `shadow-lg` — Expected: flat design
- **File:** `src/components/homepage/HomeProductMockup.tsx` line 20 — Found: `shadow-2xl` — Expected: flat design
- **File:** `src/pages/Business.tsx` lines 207, 323, 493 — Found: `shadow-2xl`, `shadow-sm`, `shadow-md` — Expected: approved levels only
- **File:** `src/pages/Pricing.tsx` line 157 — Found: `shadow-2xl`, `shadow-lg` — Expected: approved levels only

**Note:** 225+ shadow class instances across 89 files. The spec mandates predominantly flat design.

---

## Warnings

### Color Tokens

- **File:** `src/components/admin-variations/airy-pastel/AiryPastelSidebar.tsx` line 37 — Found: `color: '#111827'` inline — Expected: CSS variable token (note: admin variation/experiment)
- **File:** `src/components/admin-variations/airy-pastel/AiryPastelSidebar.tsx` line 43 — Found: `color: '#9CA3AF'` inline — Expected: CSS variable token
- **File:** `src/components/profile/PrintableProfileContent.tsx` line 281 — Found: `color: '#9ca3af'` inline — Expected: token (print context may justify)
- **File:** `src/components/results/ShareProfileModal.tsx` line 55 — Found: `color: '#888'` inline — Expected: token
- **File:** `src/components/results/ShareProfileModal.tsx` line 89 — Found: `color: '#aaa'` inline — Expected: token
- **File:** `src/components/profiles/PrintableProfilesContent.tsx` line 151 — Found: inline hex colors — Expected: tokens (print context)
- **File:** `src/components/org/OrgRoleCard.tsx` multiple lines — Found: inline `backgroundColor` and `zIndex` styles — Expected: Tailwind classes or tokens
- **File:** `src/components/dashboard/MobileDashboardOverview.tsx` line 50 — Found: `style={{ contain: 'paint' }}` — Expected: Tailwind class (minor)
- **File:** 99 files total — Found: gradient declarations (`bg-gradient-to-*`) — Expected: no gradients per flat-first design (some may be intentional marketing pages)
- **File:** `src/components/AdminPDFDownload.tsx` line 107 — Found: `fontFamily: 'system-ui'` — Expected: `Inter` (PDF generation context)
- **File:** `src/components/profiles/PrintableProfilesContent.tsx` line 208 — Found: `fontFamily: 'monospace'` — Expected: `Roboto Mono`
- **File:** `src/components/admin-variations/airy-pastel/AiryPastelSidebar.tsx` line 56 — Found: `fontWeight: 300` — Expected: min weight 400

### Typography

- **File:** `src/components/CompanyAccessDenied.tsx` line 62 — Found: `text-2xl` (24px OK but paired with `font-bold` = 700) — Expected: max weight 600
- **File:** `src/components/homepage/HomeHero.tsx` line 32 — Found: `font-semibold` (600 OK) with `text-sm md:text-base` — Expected: verify sizes match 11px/13px tokens
- **File:** `src/pages/Business.tsx` lines 188, 244, 275, 298, 348 — Found: `tracking-tight` — Expected: `letter-spacing: 0`
- **File:** `src/pages/Pricing.tsx` lines 132, 177, 185, 225, 230 — Found: `tracking-tight` — Expected: `letter-spacing: 0`
- **File:** `src/components/UnifiedUserForm.tsx` lines 93, 110, 126, 144 — Found: `tracking-wide` — Expected: `letter-spacing: 0`
- **File:** `src/components/dashboard/DashboardOverview.tsx` lines 237, 263, 285, 311 — Found: `tracking-wider` — Expected: `letter-spacing: 0`
- **File:** `src/pages/Science.tsx` lines 21, 34, 49, 59, 69, 82, 92 — Found: `letterSpacing: '-0.02em'` inline — Expected: `0`
- **File:** `src/components/profile/PrintableProfileContent.tsx` lines 264, 281, 287, 293, 299 — Found: non-zero `letterSpacing` — Expected: `0`

### Border Radius

- **File:** `src/components/SelectedWords.tsx` line 31 — Found: `rounded-none` (0px) — Expected: min 2px (tab/card context)
- **File:** `src/pages/Settings.tsx` lines 94, 99 — Found: `rounded-none` — Expected: min 2px (tabs context)
- **File:** `src/components/charts/DesktopBehavioralChart.tsx` line 52 — Found: `rounded-none` — Expected: min 2px
- **File:** `src/components/results/TabsInterface.tsx` lines 41-54 — Found: `rounded-none` — Expected: min 2px

### Spacing

- **File:** `src/components/UnifiedUserForm.tsx` line 61 — Found: `p-4 pt-8` (16px / 32px mixed) — Expected: consistent token usage
- **File:** `src/components/admin/BehavioralTableHeader.tsx` multiple lines — Found: `px-1.5 py-0.5` (6px / 2px) — Expected: nearest tokens `4px` / `4px`
- **File:** `src/components/EnhancedTeamAnalysisDashboard.tsx` line 169 — Found: `p-10` (40px) — Expected: max `space-3xl` (32px)
- **File:** `src/components/LandingPage.tsx` multiple lines — Found: `p-6` (24px OK), `p-8` (32px OK), `p-10` (40px) — Expected: max 32px
- **File:** `src/components/homepage/HomePricingPreview.tsx` line 28 — Found: `p-8` (32px) — Expected: fine, but verify intent
- **File:** `src/components/integrity/IntegrityQuestionCard.tsx` line 48 — Found: `p-6 sm:p-8` — Expected: 24px/32px (within tokens)

### Shadows

- **File:** `src/components/ComparisonDashboard.tsx` line 253 — Found: `shadow-sm` — Expected: verify maps to approved `0 1px 2px rgba(0,0,0,0.1)`
- **File:** `src/components/SimplifiedDevelopmentSection.tsx` lines 78, 102 — Found: `shadow-lg` — Expected: flat design preferred
- **File:** `src/components/dashboard/QuickActionCards.tsx` line 131 — Found: `shadow-xl` — Expected: not in approved levels
- **File:** `src/components/auth/BrandPanel.tsx` line 64 — Found: `shadow-lg` — Expected: flat design
- **File:** `src/pages/AdLandingPage.tsx` line 102 — Found: `shadow-lg` — Expected: flat design
- **File:** `src/pages/AdQualificationStep.tsx` lines 232, 257, 286 — Found: `shadow-lg` — Expected: flat design

### Components

- **File:** `src/components/results/ShareProfileModal.tsx` line 65 — Found: `fontSize: 36` (36px) — Expected: max 24px display size
- **File:** `src/components/BehavioralChart.tsx` line 49 — Found: `fontWeight: 700` in chart axis — Expected: max 600
- **File:** `src/components/charts/GradientBehavioralChart.tsx` line 63 — Found: `fontWeight: 700` in chart axis — Expected: max 600

---

## Passed

### Icons
- **Library:** lucide-react exclusively (277 import statements across 275 files)
- **No violations:** Zero imports from react-icons, heroicons, MUI icons, FontAwesome, or any other icon library
- **Status:** COMPLIANT

### Spacing (Core UI Components)
- **File:** `src/components/ui/button.tsx` — Button padding matches spec tokens (`4px 12px`, `6px 16px`, `8px 20px`)
- **File:** `src/components/ui/card.tsx` — Card padding uses `p-4` (16px) matching spec
- **Status:** COMPLIANT (core UI layer)

### Component Base Definitions
- **File:** `src/components/ui/button.tsx` — Uses `rounded-[5px]` matching spec button radius
- **File:** `src/components/ui/input.tsx` — Uses `rounded-[5px]` and `h-8` (32px) matching spec
- **File:** `src/components/ui/badge.tsx` — Uses `text-[11px] font-medium` (w500) and `px-2 py-0.5` (8px/2px) matching spec
- **File:** `src/components/ui/card.tsx` — Uses `rounded-[6px]` matching spec card radius
- **Status:** COMPLIANT (base component definitions follow spec)

---

## Appendix: Violation Hotspots (by file)

### Priority 1 — 10+ violations each
| File | Violation Count | Primary Issues |
|------|----------------|----------------|
| `src/components/LandingPage.tsx` | 20+ | Colors, gradients, rounded-2xl/3xl, shadows |
| `src/components/homepage/HomeHero.tsx` | 12+ | Colors, typography sizes, font-bold, tracking |
| `src/components/homepage/HomeFinalCTA.tsx` | 12+ | Colors, typography, font-bold, letter-spacing |
| `src/components/EnhancedTeamAnalysisDashboard.tsx` | 15+ | Colors, shadows, border-2, spacing |
| `src/components/ObjectivityCard.tsx` | 12+ | Colors, gradients, rounded-xl/2xl, shadows |
| `src/pages/Business.tsx` | 15+ | Colors, shadows, tracking, rounded-xl |
| `src/pages/Pricing.tsx` | 10+ | Colors, shadows, tracking |

### Priority 2 — 5-9 violations each
| File | Violation Count | Primary Issues |
|------|----------------|----------------|
| `src/components/CompanyAccessDenied.tsx` | 8 | Colors, font-bold |
| `src/components/TranslationHealthMonitor.tsx` | 7 | Colors, typography |
| `src/components/UnifiedUserForm.tsx` | 9 | Colors, tracking-wide, border-gray |
| `src/components/SelectedWords.tsx` | 6 | Colors (black), rounded-none |
| `src/components/UserInfoForm.tsx` | 5 | Gradient, colors |
| `src/components/dashboard/DashboardOverview.tsx` | 9 | Shadows, gradients, tracking-wider |
| `src/components/integrity/*` (4 files) | 20+ | rounded-2xl/3xl, colors, gradients |
| `src/components/results/ShareProfileModal.tsx` | 7 | fontWeight 700, letter-spacing, borderRadius |

---

*Generated by design system audit — 2026-03-21*
