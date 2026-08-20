import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';

const config: Config = {
  prefix: '',
  content: [
    './src/**/*.{ts,tsx}'
  ],
  plugins: [tailwindcssAnimate],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    screens: {
      desk: '768px'
    },
    borderRadius: {
      // For large sized components like card, modal, etc.
      box: 'var(--rounded-box)',
      // For medium sized components like button, input, etc.
      btn: 'var(--rounded-btn)',
      // For small sized components like badge, etc.
      badge: 'var(--rounded-badge)',
      // Without a border radius
      none: '0px',
      // Full border radius
      full: '9999px'
    },
    fontFamily: {
      sans: ['var(--font-family-sans)'],
      serif: ['var(--font-family-serif)'],
      mono: ['var(--font-family-mono)']
    },
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  }
};

export default config;