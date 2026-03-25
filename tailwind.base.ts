/**
 * Zentrix Design System — Shared Tailwind Base
 * Source of truth: DESIGN.md
 *
 * Import into any Zentrix repo and spread into tailwind.config.ts:
 *   import zentrixBase from '../../zentrix-standards/tailwind.base';
 */

const zentrixBase = {
  theme: {
    // ── Top-level overrides (replace defaults) ──────────────────────────
    boxShadow: {
      none: 'none',
      sm: '0 1px 2px rgba(0,0,0,0.1)',
      DEFAULT: '0 1px 2px rgba(0,0,0,0.1)',
      md: '0 4px 12px rgba(0,0,0,0.15)',
      lg: '0 4px 12px rgba(0,0,0,0.15)',
      xl: '0 4px 12px rgba(0,0,0,0.15)',
      '2xl': '0 4px 12px rgba(0,0,0,0.15)',
      inner: 'none',
      focus: '0 0 0 2px rgba(92,132,254,0.25)',
    },

    borderRadius: {
      none: '0',
      sm: '2px',
      DEFAULT: '4px',
      md: '5px',
      lg: '6px',
      xl: '8px',
      '2xl': '8px',
      '3xl': '8px',
      full: '9999px',
    },

    // ── Extend (merge with defaults) ────────────────────────────────────
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        mono: ['Roboto Mono', 'ui-monospace', 'monospace'],
      },

      fontSize: {
        display: ['24px', { lineHeight: '32px', fontWeight: '600' }],
        'heading-1': ['20px', { lineHeight: '28px', fontWeight: '600' }],
        'heading-2': ['16px', { lineHeight: '24px', fontWeight: '600' }],
        body: ['13px', { lineHeight: '20px', fontWeight: '400' }],
        'body-medium': ['13px', { lineHeight: '20px', fontWeight: '500' }],
        small: ['11px', { lineHeight: '16px', fontWeight: '400' }],
        'small-medium': ['11px', { lineHeight: '16px', fontWeight: '500' }],
        tiny: ['8px', { lineHeight: '12px', fontWeight: '400' }],
        mono: ['12px', { lineHeight: '16px', fontWeight: '400' }],
      },

      colors: {
        // Surface tokens
        surface: {
          page: 'var(--page-bg)',
          sidebar: 'var(--sidebar-bg)',
          card: 'var(--card-bg)',
          raised: 'var(--surface-raised)',
        },
        // State tokens
        state: {
          active: 'var(--active)',
          hover: 'var(--hover)',
        },
        // Border tokens
        border: {
          DEFAULT: 'var(--border)',
          subtle: 'var(--border-subtle)',
        },
        // Text tokens
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)',
        },
        // Accent tokens
        accent: {
          DEFAULT: 'var(--accent)',
          hover: 'var(--accent-hover)',
          muted: 'var(--accent-muted)',
        },
        // Status tokens
        status: {
          success: 'var(--success)',
          warning: 'var(--warning)',
          error: 'var(--error)',
          info: 'var(--info)',
        },
      },

      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.98)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },

      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.15s ease-out',
        'scale-in': 'scale-in 0.15s ease-out',
      },
    },
  },

  plugins: [],
};

export default zentrixBase;
