import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      colors: {
        surface: {
          page: 'var(--page-bg)',
          sidebar: 'var(--sidebar-bg)',
          card: 'var(--card-bg)',
          raised: 'var(--surface-raised)',
          overlay: 'var(--surface-overlay)',
        },
        state: {
          active: 'var(--active)',
          hover: 'var(--hover)',
          'hover-medium': 'var(--hover-medium)',
        },
        border: {
          DEFAULT: 'var(--border)',
          subtle: 'var(--border-subtle)',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)',
          disabled: 'var(--text-disabled)',
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
          info: 'var(--info)',
        },
      },
      spacing: {
        'xs': '4px',
        'sm-space': '8px',
        'md-space': '12px',
        'lg-space': '16px',
        'xl-space': '20px',
        '2xl-space': '24px',
        '3xl-space': '32px',
      },
      borderRadius: {
        'sm': '2px',
        'default': '4px',
        'md': '5px',
        'lg': '6px',
        'xl': '8px',
        'full': '9999px',
      },
      boxShadow: {
        'subtle': '0 1px 2px rgba(0,0,0,0.1)',
        'medium': '0 4px 12px rgba(0,0,0,0.15)',
        'focus-ring': '0 0 0 2px #5c84fe40',
      },
    },
  },
  plugins: [],
}
export default config
