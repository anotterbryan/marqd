import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-base': '#07090f',
        'bg-surface': '#0e1118',
        'bg-elevated': '#161b27',
        'accent-gold': '#e8c97a',
        'accent-teal': '#4ecdc4',
        'accent-rose': '#c97a8e',
        'text-primary': '#f0ece4',
        'text-secondary': '#a8a5a0',
        'text-muted': '#7a7d8a',
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        ui: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
} satisfies Config
