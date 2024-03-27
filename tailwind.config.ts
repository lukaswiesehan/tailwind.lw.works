import type {Config} from 'tailwindcss'

const {default: flattenColorPalette} = require('tailwindcss/lib/util/flattenColorPalette')

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-lato)'],
        display: ['var(--font-sora)'],
        mono: ['var(--font-mono)']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      animation: {
        aurora: 'aurora 60s linear infinite',
        wave: 'wave 0.8s ease-in-out infinite alternate'
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: '50% 50%, 50% 50%'
          },
          to: {
            backgroundPosition: '350% 50%, 350% 50%'
          }
        },
        wave: {
          from: {
            transform: 'rotate(-10deg)'
          },
          to: {
            transform: 'rotate(20deg)'
          }
        }
      }
    }
  },
  plugins: [addColorVariables]
}
export default config

function addColorVariables({addBase, theme}: any) {
  const allColors = flattenColorPalette(theme('colors'))
  const newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]))
  addBase({
    ':root': newVars
  })
}
